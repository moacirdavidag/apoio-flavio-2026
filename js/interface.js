const GerenciadorInterface = {
  formatoAtual: 'FEED',
  modeloAtual: 'modeloVerdeAmarelo',
  ufNordesteAtual: 'PB',
  nomeUsuario: '',
  imagemCarregada: null,
  zoomFoto: 100,

  iniciar() {
    GerenciadorRastreamento.inicializar();
    const canvasElemento = document.getElementById('canvasPreview');
    CanvasEngine.inicializar(canvasElemento);

    this.popularSelectNordeste();
    this.renderizarOpcoesModelos();
    this.registrarEventos();
    this.atualizarVisualizacao();
  },

  popularSelectNordeste() {
    const select = document.getElementById('selectUfNordeste');
    if (!select) return;

    select.innerHTML = '';
    ESTADOS_NORDESTE.forEach(est => {
      const opt = document.createElement('option');
      opt.value = est.uf;
      opt.textContent = `${est.nome} (${est.uf}) - ${est.gentilico}`;
      if (est.uf === this.ufNordesteAtual) opt.selected = true;
      select.appendChild(opt);
    });
  },

  renderizarOpcoesModelos() {
    const containerModelos = document.getElementById('gridModelos');
    if (!containerModelos) return;

    const ePerfil = this.formatoAtual === 'PERFIL';
    const modelosFiltrados = LISTA_MODELOS.filter(modelo => {
      if (ePerfil) return modelo.tipo === 'SELO';
      return modelo.tipo !== 'SELO';
    });

    if (!modelosFiltrados.some(m => m.id === this.modeloAtual)) {
      if (modelosFiltrados.length > 0) {
        this.modeloAtual = modelosFiltrados[0].id;
      }
    }

    containerModelos.innerHTML = '';
    modelosFiltrados.forEach(modelo => {
      const card = document.createElement('div');
      card.className = `cardModeloOpcao ${modelo.id === this.modeloAtual ? 'selecionado' : ''}`;
      card.dataset.id = modelo.id;

      card.innerHTML = `
        <div class="previewMiniaturaModelo" style="background: ${modelo.gradientePreview}">
          22 🚀
        </div>
        <div class="nomeModeloText">${modelo.nome}</div>
      `;

      card.addEventListener('click', () => {
        document.querySelectorAll('.cardModeloOpcao').forEach(c => c.classList.remove('selecionado'));
        card.classList.add('selecionado');
        this.modeloAtual = modelo.id;
        this.verificarExibicaoNordeste();
        GerenciadorRastreamento.dispararEvento('selecao_modelo', { modeloId: modelo.id });
        this.atualizarVisualizacao();
      });

      containerModelos.appendChild(card);
    });

    this.verificarExibicaoDicaSelo();
    this.verificarExibicaoNordeste();
  },

  verificarExibicaoDicaSelo() {
    const containerDica = document.getElementById('containerDicaSeloPerfil');
    if (containerDica) {
      containerDica.style.display = this.formatoAtual === 'PERFIL' ? 'block' : 'none';
    }
  },

  verificarExibicaoNordeste() {
    const containerNordeste = document.getElementById('containerOpcaoNordeste');
    if (!containerNordeste) return;

    if (this.modeloAtual.toLowerCase().includes('nordeste')) {
      containerNordeste.style.display = 'block';
    } else {
      containerNordeste.style.display = 'none';
    }
  },

  registrarEventos() {
    const abasFormato = document.querySelectorAll('.botaoAba');
    abasFormato.forEach(aba => {
      aba.addEventListener('click', (e) => {
        abasFormato.forEach(a => a.classList.remove('ativo'));
        e.target.classList.add('ativo');
        this.formatoAtual = e.target.dataset.formato;
        this.renderizarOpcoesModelos();
        GerenciadorRastreamento.dispararEvento('selecao_formato', { formato: this.formatoAtual });
        this.atualizarVisualizacao();
      });
    });

    const selectUf = document.getElementById('selectUfNordeste');
    if (selectUf) {
      selectUf.addEventListener('change', (e) => {
        this.ufNordesteAtual = e.target.value;
        GerenciadorRastreamento.dispararEvento('selecao_uf_nordeste', { uf: this.ufNordesteAtual });
        this.atualizarVisualizacao();
      });
    }

    const campoNome = document.getElementById('inputNomeApoiador');
    if (campoNome) {
      campoNome.addEventListener('input', (e) => {
        this.nomeUsuario = e.target.value;
        this.atualizarVisualizacao();
      });
    }

    const inputFoto = document.getElementById('inputFotoApoiador');
    const textoNomeArquivo = document.getElementById('nomeArquivoSelecionado');
    const containerZoom = document.getElementById('containerControleZoomFoto');
    const inputZoom = document.getElementById('inputZoomFoto');
    const textoValorZoom = document.getElementById('valorZoomFoto');

    if (inputFoto) {
      inputFoto.addEventListener('change', (e) => {
        const arquivo = e.target.files[0];
        if (arquivo) {
          if (textoNomeArquivo) {
            textoNomeArquivo.textContent = `Foto selecionada: ${arquivo.name}`;
          }
          if (containerZoom) {
            containerZoom.style.display = 'block';
          }
          GerenciadorRastreamento.dispararEvento('upload_foto');
          const leitor = new FileReader();
          leitor.onload = (eventoLeitura) => {
            const img = new Image();
            img.onload = () => {
              this.imagemCarregada = img;
              this.atualizarVisualizacao();
            };
            img.src = eventoLeitura.target.result;
          };
          leitor.readAsDataURL(arquivo);
        }
      });
    }

    if (inputZoom) {
      inputZoom.addEventListener('input', (e) => {
        this.zoomFoto = parseInt(e.target.value, 10);
        if (textoValorZoom) {
          textoValorZoom.textContent = `${this.zoomFoto}%`;
        }
        this.atualizarVisualizacao();
      });
    }

    const botaoCompartilhar = document.getElementById('btnCompartilhar');
    if (botaoCompartilhar) {
      botaoCompartilhar.addEventListener('click', () => {
        GerenciadorCompartilhamento.compartilharWhatsApp(this.formatoAtual);
      });
    }

    const botaoBaixar = document.getElementById('btnBaixar');
    if (botaoBaixar) {
      botaoBaixar.addEventListener('click', () => {
        GerenciadorRastreamento.dispararEvento('clique_baixar_direto', { formato: this.formatoAtual });
        CanvasEngine.obterBlob().then(blob => {
          const nomeArquivo = `flavio22-${this.formatoAtual.toLowerCase()}.png`;
          GerenciadorCompartilhamento.baixarImagemLocal(blob, nomeArquivo);
          GerenciadorCompartilhamento.exibirToast('Download iniciado com sucesso! 🚀');
        });
      });
    }
  },

  atualizarVisualizacao() {
    CanvasEngine.renderizarArte(
      this.formatoAtual,
      this.modeloAtual,
      this.nomeUsuario,
      this.imagemCarregada,
      { uf: this.ufNordesteAtual, zoomFoto: this.zoomFoto }
    );
  }
};
