(function() {
  const originalFillText = CanvasRenderingContext2D.prototype.fillText;
  CanvasRenderingContext2D.prototype.fillText = function(text, x, y, maxWidth) {
    if (typeof text !== 'string' || !text.includes('🇧🇷')) {
      return originalFillText.call(this, text, x, y, maxWidth);
    }

    const ctx = this;
    ctx.save();

    const fontMatch = ctx.font.match(/([\d.]+)px/);
    const fontSize = fontMatch ? parseFloat(fontMatch[1]) : 30;
    
    const flagLargura = fontSize * 1.25;
    const flagAltura = flagLargura * 0.7;
    const espacamento = fontSize * 0.15;

    const partes = text.split('🇧🇷');
    
    let larguraTotal = 0;
    const largurasPartes = partes.map(p => ctx.measureText(p).width);
    
    for (let i = 0; i < partes.length; i++) {
      larguraTotal += largurasPartes[i];
      if (i < partes.length - 1) {
        larguraTotal += flagLargura + espacamento * 2;
      }
    }

    let posX = x;
    const align = ctx.textAlign || 'left';
    if (align === 'center') {
      posX = x - larguraTotal / 2;
    } else if (align === 'right') {
      posX = x - larguraTotal;
    }

    ctx.textAlign = 'left';

    for (let i = 0; i < partes.length; i++) {
      if (partes[i]) {
        originalFillText.call(ctx, partes[i], posX, y);
        posX += largurasPartes[i];
      }

      if (i < partes.length - 1) {
        posX += espacamento;
        
        const capHeightOffset = fontSize * 0.35;
        const flagY = y - capHeightOffset - (flagAltura / 2);
        
        desenharBandeiraBrasil(ctx, posX, flagY, flagLargura, flagAltura);
        
        posX += flagLargura + espacamento;
      }
    }

    ctx.restore();
  };

  function desenharBandeiraBrasil(ctx, x, y, largura, altura) {
    ctx.save();
    
    ctx.fillStyle = '#138808';
    const raioBorda = altura * 0.12;
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(x, y, largura, altura, raioBorda);
      ctx.fill();
      ctx.clip();
    } else {
      ctx.fillRect(x, y, largura, altura);
    }

    ctx.fillStyle = '#ffcc00';
    ctx.beginPath();
    ctx.moveTo(x + largura / 2, y + altura * 0.12);
    ctx.lineTo(x + largura * 0.92, y + altura / 2);
    ctx.lineTo(x + largura / 2, y + altura * 0.88);
    ctx.lineTo(x + largura * 0.08, y + altura / 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#002776';
    ctx.beginPath();
    const centroX = x + largura / 2;
    const centroY = y + altura / 2;
    const raioAzul = altura * 0.26;
    ctx.arc(centroX, centroY, raioAzul, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.arc(centroX, centroY, raioAzul, 0, Math.PI * 2);
    ctx.clip();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = altura * 0.045;
    ctx.beginPath();
    ctx.arc(centroX - largura * 0.1, centroY + altura * 0.6, altura * 0.72, Math.PI * 1.45, Math.PI * 1.75);
    ctx.stroke();
    ctx.restore();

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, largura, altura);

    ctx.restore();
  }
})();

function obterLarguraTextoReal(ctx, texto) {
  if (typeof texto !== 'string') return 0;
  if (!texto.includes('🇧🇷')) return ctx.measureText(texto).width;

  const fontMatch = ctx.font.match(/([\d.]+)px/);
  const fontSize = fontMatch ? parseFloat(fontMatch[1]) : 30;
  const flagLargura = fontSize * 1.25;
  const espacamento = fontSize * 0.25;

  const partes = texto.split('🇧🇷');
  let largura = 0;
  for (let i = 0; i < partes.length; i++) {
    largura += ctx.measureText(partes[i]).width;
    if (i < partes.length - 1) {
      largura += flagLargura + espacamento * 2;
    }
  }
  return largura;
}

function preencherTextoComQuebra(ctx, texto, x, larguraMax, y, alturaLinha) {
  const palavras = texto.split(' ');
  let linhaAtual = '';
  let yAtual = y;

  for (let i = 0; i < palavras.length; i++) {
    const tentativa = linhaAtual ? linhaAtual + ' ' + palavras[i] : palavras[i];
    const larguraTentativa = obterLarguraTextoReal(ctx, tentativa);
    if (larguraTentativa > larguraMax && linhaAtual) {
      ctx.fillText(linhaAtual, x, yAtual);
      linhaAtual = palavras[i];
      yAtual += alturaLinha;
    } else {
      linhaAtual = tentativa;
    }
  }
  if (linhaAtual) {
    ctx.fillText(linhaAtual, x, yAtual);
  }
  return yAtual;
}

const CanvasEngine = {
  canvas: null,
  ctx: null,

  inicializar(elementoCanvas) {
    this.canvas = elementoCanvas;
    this.ctx = this.canvas.getContext('2d');
  },

  renderizarArte(formatoKey, modeloId, nomeUsuario, imagemElemento, dadosExtra = {}) {
    if (!this.canvas || !this.ctx) return;

    const configFormato = CONFIGURACOES.formatos[formatoKey] || CONFIGURACOES.formatos.FEED;
    this.canvas.width = configFormato.largura;
    this.canvas.height = configFormato.altura;

    const modelo = LISTA_MODELOS.find(m => m.id === modeloId) || LISTA_MODELOS[0];

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    modelo.renderizar(
      this.ctx,
      this.canvas.width,
      this.canvas.height,
      nomeUsuario,
      imagemElemento,
      configFormato.id,
      dadosExtra
    );

    this.desenharMarcaAgua(this.canvas.width, this.canvas.height);
  },

  desenharMarcaAgua(largura, altura) {
    const ctx = this.ctx;
    ctx.save();

    const alturaBarra = 48;
    ctx.fillStyle = 'rgba(4, 15, 8, 0.85)';
    ctx.fillRect(0, altura - alturaBarra, largura, alturaBarra);

    ctx.fillStyle = '#ffcc00';
    ctx.font = '800 24px Outfit, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(CONFIGURACOES.marcaAgua.autor, 24, altura - 15);

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 22px Outfit, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(CONFIGURACOES.marcaAgua.site, largura - 24, altura - 15);

    ctx.restore();
  },

  obterDataUrl() {
    return this.canvas.toDataURL('image/png');
  },

  obterBlob() {
    return new Promise((resolve) => {
      this.canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/png');
    });
  }
};
