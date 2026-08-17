const MARGEM_HORIZONTAL = 80;
const LARGURA_TEXTO = 1080 - (MARGEM_HORIZONTAL * 2);

const LISTA_MODELOS = [
  {
    id: 'modeloVerdeAmarelo',
    nome: 'Patriota Brasil 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#138808',
    gradientePreview: 'linear-gradient(135deg, #138808, #ffcc00)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, 0, altura);
      gradFundo.addColorStop(0, '#094017');
      gradFundo.addColorStop(0.4, '#0d6efd');
      gradFundo.addColorStop(0.6, '#138808');
      gradFundo.addColorStop(1, '#06290e');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);
      desenharFaixasPatriotas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        const yBase = eStory ? 480 : 300;
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 62px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'EU SOU PATRIOTA 🇧🇷', cx, LARGURA_TEXTO, yBase, 74);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 105px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FLÁVIO 2️⃣2️⃣', cx, LARGURA_TEXTO, yA + 120, 124);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 50px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'EM 2026 O BRASIL VAI VENCER! 🚀', cx, LARGURA_TEXTO, yA + 64, 60);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 46px Outfit, sans-serif';
        const yRodape = eStory ? 1160 : 790;
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#FLAVIOBOLSONARO22', cx, LARGURA_TEXTO, yRodape, 54);
      } else {
        const yTopo = eStory ? 160 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 46px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'FECHADO COM 🚀', cx, LARGURA_TEXTO, yTopo, 54);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 64px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣', cx, LARGURA_TEXTO, yA + 74, 76);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'EU APOIO O BRASIL 🇧🇷', cx, LARGURA_TEXTO, yRodape, 54);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 40px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, '#FLAVIO2026', cx, LARGURA_TEXTO, yRodape + 54, 48);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloNeutroDetergente',
    nome: 'Neutro é Detergente 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #002776, #ffcc00)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, largura, altura);
      gradFundo.addColorStop(0, '#00194d');
      gradFundo.addColorStop(0.5, '#002776');
      gradFundo.addColorStop(1, '#094017');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);
      desenharCirculosBackground(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffffff', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffffff', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 52px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'NEUTRO É DETERGENTE! 🧴', cx, LARGURA_TEXTO, eStory ? 480 : 280, 64);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 60px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'EU SOU DE DIREITA E TÔ COM', cx, LARGURA_TEXTO, yA + 74, 74);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 96px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO 2️⃣2️⃣ 🇧🇷🚀', cx, LARGURA_TEXTO, yA + 112, 116);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#DEUSPATRIALIBERDADE', cx, LARGURA_TEXTO, eStory ? 1170 : 780, 54);
      } else {
        const yTopo = eStory ? 160 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 44px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'NEUTRO É DETERGENTE! 🧴', cx, LARGURA_TEXTO, yTopo, 52);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 52px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'EU SOU DE DIREITA E TÔ COM', cx, LARGURA_TEXTO, yA + 60, 62);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 64px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO 2️⃣2️⃣ 🇧🇷🚀', cx, LARGURA_TEXTO, yA + 74, 76);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#DEUSPATRIALIBERDADE', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloFechadoZeroUm',
    nome: 'Fechado com o 01 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#138808',
    gradientePreview: 'linear-gradient(135deg, #138808, #002776)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      ctx.fillStyle = '#06290e';
      ctx.fillRect(0, 0, largura, altura);

      const gradDiagonal = ctx.createLinearGradient(0, 0, largura, altura);
      gradDiagonal.addColorStop(0, '#138808');
      gradDiagonal.addColorStop(0.5, '#094017');
      gradDiagonal.addColorStop(1, '#002776');
      ctx.fillStyle = gradDiagonal;
      ctx.fillRect(20, 20, largura - 40, altura - 40);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 96px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'FECHADO COM O 01', cx, LARGURA_TEXTO, eStory ? 560 : 380, 114);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 72px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣ 🚀', cx, LARGURA_TEXTO, yA + 88, 88);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 46px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'BRASIL ACIMA DE TUDO 🇧🇷', cx, LARGURA_TEXTO, eStory ? 1130 : 750, 56);
      } else {
        const yTopo = eStory ? 160 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 68px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'FECHADO COM O 01', cx, LARGURA_TEXTO, yTopo, 76);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 54px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣ 🚀', cx, LARGURA_TEXTO, yA + 64, 64);

        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'BRASIL ACIMA DE TUDO 🇧🇷', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloBrasilVencer',
    nome: 'O Brasil Vai Vencer 🚀',
    tipo: 'ARTE',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #ffcc00, #138808)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      ctx.fillStyle = '#ffcc00';
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      ctx.save();
      ctx.fillStyle = '#138808';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(largura, 0);
      ctx.lineTo(largura, altura * 0.22);
      ctx.lineTo(0, altura * 0.28);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.fillStyle = '#002776';
      ctx.beginPath();
      ctx.moveTo(0, altura * 0.72);
      ctx.lineTo(largura, altura * 0.68);
      ctx.lineTo(largura, altura);
      ctx.lineTo(0, altura);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#002776', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#002776', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 68px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'O BRASIL VAI VENCER! 🚀', cx, LARGURA_TEXTO, eStory ? 500 : 310, 82);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 96px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣ 🇧🇷', cx, LARGURA_TEXTO, yA + 112, 116);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#DEUSPATRIALIBERDADE', cx, LARGURA_TEXTO, eStory ? 1150 : 760, 54);
      } else {
        const yTopo = eStory ? 160 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 52px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'O BRASIL VAI VENCER! 🚀', cx, LARGURA_TEXTO, yTopo, 62);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 64px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣ 🇧🇷', cx, LARGURA_TEXTO, yA + 74, 76);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#DEUSPATRIALIBERDADE', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloJuventudeDireita',
    nome: 'Juventude de Direita 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#22c55e',
    gradientePreview: 'linear-gradient(135deg, #0d6efd, #22c55e)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, largura, altura);
      gradFundo.addColorStop(0, '#00194d');
      gradFundo.addColorStop(0.5, '#0d6efd');
      gradFundo.addColorStop(1, '#094017');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 62px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'JUVENTUDE DE DIREITA 🚀', cx, LARGURA_TEXTO, eStory ? 480 : 280, 74);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 90px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣', cx, LARGURA_TEXTO, yA + 110, 114);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 48px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'O FUTURO DO BRASIL É NOSSO! 🇧🇷', cx, LARGURA_TEXTO, yA + 64, 58);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#JUVENTUDEDEDIREITA22', cx, LARGURA_TEXTO, eStory ? 1170 : 780, 52);
      } else {
        const yTopo = eStory ? 160 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 44px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'JUVENTUDE DE DIREITA 🚀', cx, LARGURA_TEXTO, yTopo, 52);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 58px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣ 🇧🇷', cx, LARGURA_TEXTO, yA + 66, 68);

        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#JUVENTUDE22', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloJuventudeComFlavio',
    nome: 'Juventude com Flávio 2026 🚀',
    tipo: 'ARTE',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #138808, #002776)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, 0, altura);
      gradFundo.addColorStop(0, '#094017');
      gradFundo.addColorStop(0.5, '#002776');
      gradFundo.addColorStop(1, '#138808');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffffff', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffffff', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 58px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'A JUVENTUDE ESTÁ COM', cx, LARGURA_TEXTO, eStory ? 475 : 285, 70);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 96px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FLÁVIO 2026 2️⃣2️⃣', cx, LARGURA_TEXTO, yA + 112, 116);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 48px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'PELA LIBERDADE E PELO BRASIL! 🇧🇷', cx, LARGURA_TEXTO, yA + 62, 58);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#JUVENTUDECOMFLAVIO', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 44px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'A JUVENTUDE ESTÁ COM', cx, LARGURA_TEXTO, yTopo, 54);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 64px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO 2026 2️⃣2️⃣ 🇧🇷', cx, LARGURA_TEXTO, yA + 72, 74);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'JUVENTUDE DE DIREITA 🚀', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloNordeste',
    nome: 'Orgulho Nordeste 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#138808',
    gradientePreview: 'linear-gradient(135deg, #002776, #138808)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;
      const ufSelecionada = dadosExtra.uf || 'PB';
      const estadoObj = obterEstadoPorUf(ufSelecionada);

      const gradFundo = ctx.createLinearGradient(0, 0, 0, altura);
      gradFundo.addColorStop(0, '#002776');
      gradFundo.addColorStop(0.5, '#138808');
      gradFundo.addColorStop(1, '#094017');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      const badgeX = largura / 2 - 160;
      const badgeY = 20;
      desenharBadgeUf(ctx, badgeX, badgeY, estadoObj);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 365, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;
      const fraseGentilico = 'EU SOU ' + estadoObj.gentilico.toUpperCase() + ' E TÔ COM';

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 48px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, fraseGentilico, cx, LARGURA_TEXTO, eStory ? 308 : 220, 58);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 90px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FLÁVIO 2️⃣2️⃣ 🇧🇷🚀', cx, LARGURA_TEXTO, yA + 95, 100);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'O NORDESTE É 22 EM 2026!', cx, LARGURA_TEXTO, yA + 52, 50);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 40px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : `#${ufSelecionada}COMFLAVIO22`, cx, LARGURA_TEXTO, eStory ? 1170 : 770, 48);
      } else {
        const yTopo = eStory ? 200 : 110;
        const yRodape = eStory ? 1390 : 790;
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 38px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, fraseGentilico, cx, LARGURA_TEXTO, yTopo, 46);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 52px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO 2️⃣2️⃣ 🇧🇷🚀', cx, LARGURA_TEXTO, yA + 60, 62);

        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 40px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : `#${ufSelecionada}COMFLAVIO22`, cx, LARGURA_TEXTO, yRodape, 48);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloNordesteArrochado',
    nome: 'Nordestino Arrochado 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #138808, #002776)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;
      const ufSelecionada = dadosExtra.uf || 'PB';
      const estadoObj = obterEstadoPorUf(ufSelecionada);

      const gradFundo = ctx.createLinearGradient(0, 0, 0, altura);
      gradFundo.addColorStop(0, '#094017');
      gradFundo.addColorStop(0.5, '#002776');
      gradFundo.addColorStop(1, '#138808');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      const badgeX = largura / 2 - 160;
      const badgeY = 20;
      desenharBadgeUf(ctx, badgeX, badgeY, estadoObj);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 365, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 48px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'NORDESTINO ARROCHADO 🌵', cx, LARGURA_TEXTO, eStory ? 308 : 220, 58);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 84px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FECHADO COM FLÁVIO 2️⃣2️⃣', cx, LARGURA_TEXTO, yA + 95, 100);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, `O ${estadoObj.nome.toUpperCase()} É DIREITA EM 2026! 🚀`, cx, LARGURA_TEXTO, yA + 52, 50);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 40px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : `#${ufSelecionada}COMFLAVIO22`, cx, LARGURA_TEXTO, eStory ? 1170 : 770, 48);
      } else {
        const yTopo = eStory ? 200 : 110;
        const yRodape = eStory ? 1390 : 790;
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 38px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'NORDESTINO ARROCHADO 🌵', cx, LARGURA_TEXTO, yTopo, 46);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 52px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FECHADO COM FLÁVIO 2️⃣2️⃣ 🚀', cx, LARGURA_TEXTO, yA + 60, 62);

        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 40px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : `#${ufSelecionada}É22`, cx, LARGURA_TEXTO, yRodape, 48);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloFamiliaPatria',
    nome: 'Família e Pátria 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#1d4ed8',
    gradientePreview: 'linear-gradient(135deg, #094017, #002776)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, 0, altura);
      gradFundo.addColorStop(0, '#094017');
      gradFundo.addColorStop(0.5, '#002776');
      gradFundo.addColorStop(1, '#051b0e');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 58px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'MINHA FAMÍLIA E EU COM', cx, LARGURA_TEXTO, eStory ? 475 : 285, 70);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 96px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FLÁVIO 2026 🇧🇷', cx, LARGURA_TEXTO, yA + 112, 116);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 48px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'PELA FAMÍLIA E PELA PÁTRIA! 🚀', cx, LARGURA_TEXTO, yA + 62, 58);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#FLAVIOBOLSONARO22', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 44px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'MINHA FAMÍLIA E EU COM', cx, LARGURA_TEXTO, yTopo, 54);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 64px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO 2026 🇧🇷', cx, LARGURA_TEXTO, yA + 72, 74);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'PELA FAMÍLIA E PÁTRIA 🚀', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloFamiliaPrimeiro',
    nome: 'Minha Família é 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#1d4ed8',
    gradientePreview: 'linear-gradient(135deg, #094017, #002776)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, 0, altura);
      gradFundo.addColorStop(0, '#094017');
      gradFundo.addColorStop(0.5, '#002776');
      gradFundo.addColorStop(1, '#051b0e');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 58px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'MINHA FAMÍLIA É 2️⃣2️⃣', cx, LARGURA_TEXTO, eStory ? 475 : 285, 70);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 96px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FLÁVIO 2026 🇧🇷', cx, LARGURA_TEXTO, yA + 112, 116);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 48px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'PELA FAMÍLIA E PELA PÁTRIA! 🚀', cx, LARGURA_TEXTO, yA + 62, 58);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#FAMILIA22', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 46px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'MINHA FAMÍLIA É 2️⃣2️⃣', cx, LARGURA_TEXTO, yTopo, 54);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 64px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO 2026 🇧🇷', cx, LARGURA_TEXTO, yA + 72, 74);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'PELA FAMÍLIA E PÁTRIA 🚀', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloLiberdadeExpressao',
    nome: 'Defesa da Liberdade 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#22c55e',
    gradientePreview: 'linear-gradient(135deg, #020b05, #22c55e)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      ctx.fillStyle = '#020b05';
      ctx.fillRect(0, 0, largura, altura);
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 14;
      ctx.strokeRect(20, 20, largura - 40, altura - 40);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#22c55e', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#22c55e', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 54px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'QUEM SE OMITE PERDE A LIBERDADE', cx, LARGURA_TEXTO, eStory ? 475 : 285, 66);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 80px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'PELA LIBERDADE DE EXPRESSÃO 🇧🇷', cx, LARGURA_TEXTO, yA + 96, 96);
        ctx.fillStyle = '#22c55e';
        ctx.font = '800 50px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'TÔ COM FLÁVIO BOLSONARO 22 🚀', cx, LARGURA_TEXTO, yA + 64, 60);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#LIBERDADEDEEXPRESSAO', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 42px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'QUEM SE OMITE PERDE A LIBERDADE', cx, LARGURA_TEXTO, yTopo, 52);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 58px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'PELA LIBERDADE DE EXPRESSÃO 🇧🇷', cx, LARGURA_TEXTO, yA + 66, 68);

        ctx.fillStyle = '#22c55e';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'TÔ COM FLÁVIO 22 🚀', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloLiberdadeTotal',
    nome: 'Liberdade Não Se Negocia 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#22c55e',
    gradientePreview: 'linear-gradient(135deg, #094017, #22c55e)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      ctx.fillStyle = '#06290e';
      ctx.fillRect(0, 0, largura, altura);
      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#22c55e', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#22c55e', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 68px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'LIBERDADE NÃO SE NEGOCIA! 🗽', cx, LARGURA_TEXTO, eStory ? 475 : 285, 78);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 86px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣', cx, LARGURA_TEXTO, yA + 98, 104);
        ctx.fillStyle = '#22c55e';
        ctx.font = '800 48px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'DEUS, PÁTRIA E LIBERDADE 🇧🇷', cx, LARGURA_TEXTO, yA + 60, 56);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#BRASILLIVRE', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 44px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'LIBERDADE NÃO SE NEGOCIA! 🗽', cx, LARGURA_TEXTO, yTopo, 52);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 58px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣ 🇧🇷', cx, LARGURA_TEXTO, yA + 66, 68);

        ctx.fillStyle = '#22c55e';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'LIBERDADE 22 🚀', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloSegurancaOrdem',
    nome: 'Segurança e Ordem 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#002776',
    gradientePreview: 'linear-gradient(135deg, #094017, #002776)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, largura, altura);
      gradFundo.addColorStop(0, '#020e05');
      gradFundo.addColorStop(0.6, '#001a4e');
      gradFundo.addColorStop(1, '#020e05');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 54px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'MAIS SEGURANÇA PARA A SUA FAMÍLIA', cx, LARGURA_TEXTO, eStory ? 475 : 285, 66);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 82px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'CHEGA DE IMPUNIDADE! 🇧🇷', cx, LARGURA_TEXTO, yA + 98, 98);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 48px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FECHADO COM FLÁVIO BOLSONARO 22 🚀', cx, LARGURA_TEXTO, yA + 62, 58);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#SEGURANCAEFAMILIA', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 42px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'MAIS SEGURANÇA PARA SUA FAMÍLIA', cx, LARGURA_TEXTO, yTopo, 52);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 58px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'CHEGA DE IMPUNIDADE! 🇧🇷', cx, LARGURA_TEXTO, yA + 66, 68);

        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'FECHADO COM FLÁVIO 22 🚀', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloSegurancaTotal',
    nome: 'Tolerância Zero 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#002776',
    gradientePreview: 'linear-gradient(135deg, #020e05, #001a4e)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      ctx.fillStyle = '#020b05';
      ctx.fillRect(0, 0, largura, altura);
      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 68px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'TOLERÂNCIA ZERO CONTRA O CRIME 🛡️', cx, LARGURA_TEXTO, eStory ? 475 : 285, 78);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 86px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣', cx, LARGURA_TEXTO, yA + 98, 104);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 48px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'ORDEM E SEGURANÇA NO BRASIL 🇧🇷', cx, LARGURA_TEXTO, yA + 60, 56);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#TOLERANCIAZERO', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 44px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'TOLERÂNCIA ZERO CONTRA CRIME 🛡️', cx, LARGURA_TEXTO, yTopo, 52);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 58px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣ 🇧🇷', cx, LARGURA_TEXTO, yA + 66, 68);

        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'ORDEM E SEGURANÇA 🚀', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloEconomiaProgresso',
    nome: 'Economia e Trabalho 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #138808, #ffcc00)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, 0, altura);
      gradFundo.addColorStop(0, '#094017');
      gradFundo.addColorStop(0.5, '#138808');
      gradFundo.addColorStop(1, '#ffcc00');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffffff', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffffff', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 54px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'MENOS IMPOSTOS, MAIS TRABALHO', cx, LARGURA_TEXTO, eStory ? 475 : 285, 66);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 82px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'POR UM BRASIL PRÓSPERO 🇧🇷', cx, LARGURA_TEXTO, yA + 98, 98);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 50px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 22 🚀', cx, LARGURA_TEXTO, yA + 64, 60);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#ECONOMIADEESTADOLIVRE', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 42px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'MENOS IMPOSTOS, MAIS TRABALHO', cx, LARGURA_TEXTO, yTopo, 52);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 58px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'POR UM BRASIL PRÓSPERO 🇧🇷', cx, LARGURA_TEXTO, yA + 66, 68);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'FLÁVIO BOLSONARO 22 🚀', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloMenosImpostos',
    nome: 'Menos Impostos 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #138808, #ffcc00)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, 0, altura);
      gradFundo.addColorStop(0, '#094017');
      gradFundo.addColorStop(0.5, '#138808');
      gradFundo.addColorStop(1, '#ffcc00');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffffff', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffffff', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 54px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'MENOS IMPOSTOS, MAIS LIBERDADE', cx, LARGURA_TEXTO, eStory ? 475 : 285, 66);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 82px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣ 🇧🇷', cx, LARGURA_TEXTO, yA + 98, 98);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 50px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'POR UM BRASIL PRÓSPERO! 🚀', cx, LARGURA_TEXTO, yA + 64, 60);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#LIBERDADEECONOMICA22', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 42px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'MENOS IMPOSTOS, MAIS LIBERDADE', cx, LARGURA_TEXTO, yTopo, 52);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 58px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣ 🇧🇷', cx, LARGURA_TEXTO, yA + 66, 68);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'MENOS IMPOSTOS 🚀', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloTropaCapitao',
    nome: 'Tropa do Capitão 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #094017, #138808)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, largura, altura);
      gradFundo.addColorStop(0, '#094017');
      gradFundo.addColorStop(0.5, '#138808');
      gradFundo.addColorStop(1, '#002776');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 58px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'TROPA DO CAPITÃO 🔰', cx, LARGURA_TEXTO, eStory ? 475 : 285, 68);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 84px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FECHADO COM FLÁVIO 22 🚀', cx, LARGURA_TEXTO, yA + 98, 98);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 48px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'EM 2026 O BRASIL É 22!', cx, LARGURA_TEXTO, yA + 60, 56);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#TROPADOCAPITAO22', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 44px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'TROPA DO CAPITÃO 🔰', cx, LARGURA_TEXTO, yTopo, 52);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 58px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FECHADO COM FLÁVIO 22 🚀', cx, LARGURA_TEXTO, yA + 66, 68);

        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'O BRASIL É 22 🇧🇷', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloBrasilLivre',
    nome: 'Juntos Por Um Brasil Livre 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#138808',
    gradientePreview: 'linear-gradient(135deg, #002776, #138808)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, 0, altura);
      gradFundo.addColorStop(0, '#002776');
      gradFundo.addColorStop(0.5, '#094017');
      gradFundo.addColorStop(1, '#00194d');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 56px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'JUNTOS POR UM BRASIL LIVRE 🇧🇷', cx, LARGURA_TEXTO, eStory ? 475 : 285, 68);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 86px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FLÁVIO 2026 🚀', cx, LARGURA_TEXTO, yA + 100, 104);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 46px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'DEUS, PÁTRIA, FAMÍLIA E LIBERDADE', cx, LARGURA_TEXTO, yA + 58, 56);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#BRASILLIVRE22', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 42px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'JUNTOS POR UM BRASIL LIVRE 🇧🇷', cx, LARGURA_TEXTO, yTopo, 52);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 58px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO 2026 🚀', cx, LARGURA_TEXTO, yA + 66, 68);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'DEUS, PÁTRIA E LIBERDADE 🇧🇷', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloPatriaAmada',
    nome: 'Pátria Amada Brasil 2️⃣2️⃣',
    tipo: 'ARTE',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #138808, #ffcc00)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, 0, altura);
      gradFundo.addColorStop(0, '#094017');
      gradFundo.addColorStop(0.5, '#138808');
      gradFundo.addColorStop(1, '#002776');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 62px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'PÁTRIA AMADA BRASIL 🇧🇷', cx, LARGURA_TEXTO, eStory ? 475 : 285, 74);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 96px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FLÁVIO 2026 🚀', cx, LARGURA_TEXTO, yA + 112, 116);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 48px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'O BRASIL ACIMA DE TUDO!', cx, LARGURA_TEXTO, yA + 62, 58);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#PATRIAAMADABRASIL22', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 44px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'PÁTRIA AMADA BRASIL 🇧🇷', cx, LARGURA_TEXTO, yTopo, 54);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 64px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO 2026 🚀', cx, LARGURA_TEXTO, yA + 72, 74);

        ctx.fillStyle = '#ffffff';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'PÁTRIA AMADA 22 🚀', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloDireitaUnida',
    nome: 'Direita Unida em 2026 🚀',
    tipo: 'ARTE',
    corDestaque: '#138808',
    gradientePreview: 'linear-gradient(135deg, #002776, #ffcc00)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const eStory = formatoId === 'STORY';
      const zoom = dadosExtra.zoomFoto || 100;

      const gradFundo = ctx.createLinearGradient(0, 0, largura, altura);
      gradFundo.addColorStop(0, '#00194d');
      gradFundo.addColorStop(0.5, '#094017');
      gradFundo.addColorStop(1, '#002776');
      ctx.fillStyle = gradFundo;
      ctx.fillRect(0, 0, largura, altura);

      desenharTexturaLinhas(ctx, largura, altura);

      if (imagemUsuario) {
        ctx.save();
        if (eStory) {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 140, 360, 800, 900, '#ffcc00', zoom);
        } else {
          desenharFotoMolduraRetangular(ctx, imagemUsuario, 310, 275, 460, 460, '#ffcc00', zoom);
        }
        ctx.restore();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      const cx = largura / 2;

      if (!imagemUsuario) {
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 62px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'DIREITA UNIDA EM 2026 🚀', cx, LARGURA_TEXTO, eStory ? 475 : 285, 74);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 96px Outfit, sans-serif';
        yA = preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣', cx, LARGURA_TEXTO, yA + 112, 116);
        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 48px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'UNIDOS PELO FUTURO DO BRASIL 🇧🇷', cx, LARGURA_TEXTO, yA + 62, 58);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 42px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : '#DIREITAUNIDA22', cx, LARGURA_TEXTO, eStory ? 1130 : 760, 52);
      } else {
        const yTopo = eStory ? 155 : 70;
        const yRodape = eStory ? 1380 : 790;
        ctx.fillStyle = '#ffcc00';
        ctx.font = '900 44px Outfit, sans-serif';
        let yA = preencherTextoComQuebra(ctx, 'DIREITA UNIDA EM 2026 🚀', cx, LARGURA_TEXTO, yTopo, 54);
        ctx.fillStyle = '#ffffff';
        ctx.font = '900 64px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, 'FLÁVIO BOLSONARO 2️⃣2️⃣', cx, LARGURA_TEXTO, yA + 72, 74);

        ctx.fillStyle = '#ffcc00';
        ctx.font = '800 44px Outfit, sans-serif';
        preencherTextoComQuebra(ctx, nomeUsuario ? nomeUsuario.toUpperCase() : 'DIREITA UNIDA 🇧🇷', cx, LARGURA_TEXTO, yRodape, 54);
      }
      ctx.restore();
    }
  },
  {
    id: 'modeloSeloPerfil',
    nome: 'Selo Perfil - Fechado com 01 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #138808, #ffcc00)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#138808', '#002776', '#ffcc00',
        'FECHADO COM FLAVIO BOLSONARO',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : '22 - O BRASIL VAI VENCER 🚀',
        zoom
      );
    }
  },
  {
    id: 'modeloSeloBrasil22',
    nome: 'Selo Perfil - Tropa do Capitão 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#138808',
    gradientePreview: 'linear-gradient(135deg, #ffcc00, #138808)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#094017', '#138808', '#ffffff',
        'TROPA DO CAPITAO - FLAVIO 22',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : '22 - BRASIL ACIMA DE TUDO',
        zoom
      );
    }
  },
  {
    id: 'modeloSeloJuventude',
    nome: 'Selo Perfil - Juventude de Direita 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#22c55e',
    gradientePreview: 'linear-gradient(135deg, #0d6efd, #22c55e)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#0d6efd', '#138808', '#ffcc00',
        'JUVENTUDE DE DIREITA 22',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : '22 - FLAVIO BOLSONARO 2026',
        zoom
      );
    }
  },
  {
    id: 'modeloSeloNordeste',
    nome: 'Selo Perfil - Orgulho Nordeste 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #002776, #138808)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      const ufSelecionada = dadosExtra.uf || 'PB';
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#138808', '#002776', '#ffcc00',
        'NORDESTE COM FLAVIO BOLSONARO',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : `22 - ${ufSelecionada} E 22 EM 2026`,
        zoom
      );
    }
  },
  {
    id: 'modeloSeloNordestinoArrochado',
    nome: 'Selo Perfil - Nordestino Arrochado 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #002776, #138808)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      const ufSelecionada = dadosExtra.uf || 'PB';
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#138808', '#002776', '#ffcc00',
        'NORDESTINO ARROCHADO COM FLAVIO',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : `22 - ${ufSelecionada} COM O 01`,
        zoom
      );
    }
  },
  {
    id: 'modeloSeloFamilia',
    nome: 'Selo Perfil - Família e Pátria 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#1d4ed8',
    gradientePreview: 'linear-gradient(135deg, #002776, #1d4ed8)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#002776', '#138808', '#ffffff',
        'MINHA FAMILIA COM FLAVIO 2026',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : '22 - PELA FAMILIA E PATRIA',
        zoom
      );
    }
  },
  {
    id: 'modeloSeloFamiliaPrimeiro',
    nome: 'Selo Perfil - Família Primeiro 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#1d4ed8',
    gradientePreview: 'linear-gradient(135deg, #002776, #1d4ed8)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#002776', '#138808', '#ffffff',
        'MINHA FAMILIA E 22 COM FLAVIO',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : '22 - PELA FAMILIA E PATRIA',
        zoom
      );
    }
  },
  {
    id: 'modeloSeloLiberdade',
    nome: 'Selo Perfil - Defesa da Liberdade 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#22c55e',
    gradientePreview: 'linear-gradient(135deg, #020b05, #22c55e)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#22c55e', '#094017', '#ffcc00',
        'PELA LIBERDADE DE EXPRESSAO',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : '22 - FLAVIO BOLSONARO 2026',
        zoom
      );
    }
  },
  {
    id: 'modeloSeloLiberdadeTotal',
    nome: 'Selo Perfil - Liberdade Não Se Negocia 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#22c55e',
    gradientePreview: 'linear-gradient(135deg, #094017, #22c55e)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#22c55e', '#06290e', '#ffcc00',
        'LIBERDADE NAO SE NEGOCIA',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : '22 - DEUS PATRIA LIBERDADE',
        zoom
      );
    }
  },
  {
    id: 'modeloSeloSeguranca',
    nome: 'Selo Perfil - Segurança e Ordem 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#002776',
    gradientePreview: 'linear-gradient(135deg, #020e05, #002776)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#001a4e', '#138808', '#ffcc00',
        'SEGURANCA E ORDEM NO BRASIL',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : '22 - CHEGA DE IMPUNIDADE',
        zoom
      );
    }
  },
  {
    id: 'modeloSeloSegurancaTotal',
    nome: 'Selo Perfil - Tolerância Zero 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#002776',
    gradientePreview: 'linear-gradient(135deg, #020e05, #001a4e)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#001a4e', '#094017', '#ffcc00',
        'TOLERANCIA ZERO CONTRA CRIME',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : '22 - FLAVIO BOLSONARO 2026',
        zoom
      );
    }
  },
  {
    id: 'modeloSeloEconomia',
    nome: 'Selo Perfil - Economia e Trabalho 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #138808, #ffcc00)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#138808', '#002776', '#ffcc00',
        'MENOS IMPOSTOS MAIS TRABALHO',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : '22 - FLAVIO BOLSONARO 2026',
        zoom
      );
    }
  },
  {
    id: 'modeloSeloMenosImpostos',
    nome: 'Selo Perfil - Menos Impostos 2️⃣2️⃣',
    tipo: 'SELO',
    corDestaque: '#ffcc00',
    gradientePreview: 'linear-gradient(135deg, #138808, #ffcc00)',
    renderizar: (ctx, largura, altura, nomeUsuario, imagemUsuario, formatoId, dadosExtra = {}) => {
      const zoom = dadosExtra.zoomFoto || 100;
      desenharBaseSeloPerfil(
        ctx, largura, altura, imagemUsuario,
        '#138808', '#002776', '#ffcc00',
        'MENOS IMPOSTOS MAIS LIBERDADE',
        nomeUsuario ? `22 - ${nomeUsuario.toUpperCase()}` : '22 - FLAVIO BOLSONARO 2026',
        zoom
      );
    }
  }
];

function desenharBaseSeloPerfil(ctx, largura, altura, imagemUsuario, corTopo, corBase, corBordaFriso, textoTopo, textoBase, zoom = 100) {
  ctx.save();
  const centroX = largura / 2;
  const centroY = altura / 2;
  const raioExterno = 490;
  const raioInterno = 415;

  if (imagemUsuario) {
    desenharImagemProporcional(ctx, imagemUsuario, 0, 0, largura, altura, zoom);
  } else {
    const gradFundo = ctx.createLinearGradient(0, 0, largura, altura);
    gradFundo.addColorStop(0, corTopo);
    gradFundo.addColorStop(0.5, corBase);
    gradFundo.addColorStop(1, '#06290e');
    ctx.fillStyle = gradFundo;
    ctx.fillRect(0, 0, largura, altura);

    ctx.fillStyle = 'rgba(250, 204, 21, 0.15)';
    ctx.beginPath();
    ctx.arc(centroX, centroY, 200, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 64px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('22 🚀', centroX, centroY - 10);
    ctx.font = '700 24px Outfit, sans-serif';
    ctx.fillText('Sua Foto de Perfil Aqui', centroX, centroY + 55);
  }

  ctx.fillStyle = corTopo;
  ctx.beginPath();
  ctx.arc(centroX, centroY, raioExterno, Math.PI, 0, false);
  ctx.arc(centroX, centroY, raioInterno, 0, Math.PI, true);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = corBase;
  ctx.beginPath();
  ctx.arc(centroX, centroY, raioExterno, 0, Math.PI, false);
  ctx.arc(centroX, centroY, raioInterno, Math.PI, 0, true);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = corBordaFriso;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(centroX, centroY, raioExterno - 3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(centroX, centroY, raioInterno + 3, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 36px Outfit, sans-serif';
  desenharTextoEmArco(ctx, textoTopo, centroX, centroY, 450, 1.5 * Math.PI, false);

  ctx.fillStyle = corBordaFriso;
  ctx.font = '900 34px Outfit, sans-serif';
  desenharTextoEmArco(ctx, textoBase, centroX, centroY, 450, 0.5 * Math.PI, true);

  ctx.restore();
}

function desenharFaixasPatriotas(ctx, largura, altura) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, altura * 0.75);
  ctx.lineTo(largura, altura * 0.65);
  ctx.lineTo(largura, altura);
  ctx.lineTo(0, altura);
  ctx.closePath();
  ctx.fillStyle = '#ffcc00';
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, altura * 0.78);
  ctx.lineTo(largura, altura * 0.69);
  ctx.lineTo(largura, altura);
  ctx.lineTo(0, altura);
  ctx.closePath();
  ctx.fillStyle = '#002776';
  ctx.fill();
  ctx.restore();
}

function desenharFotoMolduraRetangular(ctx, img, x, y, largura, altura, corBorda, zoom = 100) {
  ctx.save();
  ctx.fillStyle = corBorda;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(x - 10, y - 10, largura + 20, altura + 20, 24);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(x, y, largura, altura, 20);
    ctx.clip();
  } else {
    ctx.fillRect(x - 10, y - 10, largura + 20, altura + 20);
    ctx.rect(x, y, largura, altura);
    ctx.clip();
  }
  desenharImagemProporcional(ctx, img, x, y, largura, altura, zoom);
  ctx.restore();
}

function desenharBadgeUf(ctx, x, y, estadoObj) {
  ctx.save();
  ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
  ctx.strokeStyle = '#ffcc00';
  ctx.lineWidth = 2;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(x, y, 320, 64, 18);
    ctx.fill();
    ctx.stroke();
  } else {
    ctx.fillRect(x, y, 320, 64);
  }

  desenharBandeiraEstado(ctx, estadoObj.uf, x + 16, y + 12, 56, 38);

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 20px Outfit, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(estadoObj.nome.toUpperCase(), x + 88, y + 32);
  ctx.restore();
}

function desenharImagemProporcional(ctx, img, x, y, larguraDesejada, alturaDesejada, zoomFoto = 100) {
  const fatorZoom = (zoomFoto || 100) / 100;
  const proporcaoImg = img.width / img.height;
  const proporcaoAlvo = larguraDesejada / alturaDesejada;

  let renderLargura, renderAltura, corteX, corteY;

  if (proporcaoImg > proporcaoAlvo) {
    renderAltura = img.height;
    renderLargura = img.height * proporcaoAlvo;
    corteX = (img.width - renderLargura) / 2;
    corteY = 0;
  } else {
    renderLargura = img.width;
    renderAltura = img.width / proporcaoAlvo;
    corteX = 0;
    corteY = (img.height - renderAltura) / 2;
  }

  const corteLarguraZoom = renderLargura / fatorZoom;
  const corteAlturaZoom = renderAltura / fatorZoom;
  const novocorteX = Math.max(0, corteX + (renderLargura - corteLarguraZoom) / 2);
  const novocorteY = Math.max(0, corteY + (renderAltura - corteAlturaZoom) / 2);

  ctx.drawImage(
    img,
    novocorteX, novocorteY, Math.min(img.width - novocorteX, corteLarguraZoom), Math.min(img.height - novocorteY, corteAlturaZoom),
    x, y, larguraDesejada, alturaDesejada
  );
}

function desenharTextoEmArco(ctx, texto, cx, cy, raio, anguloCentro, invertido) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const caracteres = Array.from(texto);
  const totalCaracteres = caracteres.length;

  const larguraM = ctx.measureText('M').width;
  const larguraEspaco = larguraM * 0.78;

  let larguraTotal = 0;
  const larguras = caracteres.map(c => c === ' ' ? larguraEspaco : ctx.measureText(c).width);
  larguras.forEach(w => larguraTotal += w);

  const arcoTotal = larguraTotal / raio;
  const anguloPasso = arcoTotal / totalCaracteres;
  const anguloStart = anguloCentro - (arcoTotal / 2) + (anguloPasso / 2);

  let anguloAtual = anguloStart;
  for (let i = 0; i < totalCaracteres; i++) {
    ctx.save();
    ctx.rotate(anguloAtual + (invertido ? Math.PI : 0));
    ctx.translate(0, invertido ? raio : -raio);
    ctx.fillText(caracteres[i], 0, 0);
    ctx.restore();

    anguloAtual += anguloPasso;
  }
  ctx.restore();
}

function desenharTexturaLinhas(ctx, largura, altura) {
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  for (let i = -altura; i < largura; i += 35) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i + altura, altura);
  }
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
  ctx.font = '900 76px Outfit, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('2️⃣2️⃣', largura * 0.08, altura * 0.18);
  ctx.fillText('2️⃣2️⃣', largura * 0.78, altura * 0.22);
  ctx.fillText('2️⃣2️⃣', largura * 0.8, altura * 0.82);
  ctx.fillText('2️⃣2️⃣', largura * 0.06, altura * 0.76);
  ctx.font = '64px Outfit, sans-serif';
  ctx.fillText('🚀', largura * 0.84, Math.min(altura * 0.35, 480));
  ctx.fillText('🇧🇷', largura * 0.08, Math.min(altura * 0.45, 600));
  ctx.fillText('🚀', largura * 0.12, Math.max(altura * 0.85, altura - 300));
  ctx.fillText('🇧🇷', largura * 0.82, Math.max(altura * 0.72, altura - 450));
  ctx.restore();
}

function desenharBandeiraEstado(ctx, uf, x, y, largura, altura) {
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.lineWidth = 1;

  if (uf === 'PB') {
    ctx.fillStyle = '#000000';
    ctx.fillRect(x, y, largura / 3, altura);
    ctx.fillStyle = '#cc0000';
    ctx.fillRect(x + largura / 3, y, (largura * 2) / 3, altura);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold ' + (altura * 0.32) + 'px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('NÊGO', x + (largura * 2.5) / 3, y + altura / 2);
  } else if (uf === 'PE') {
    ctx.fillStyle = '#002776';
    ctx.fillRect(x, y, largura, altura / 2);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x, y + altura / 2, largura, altura / 2);
    ctx.strokeStyle = '#cc0000';
    ctx.lineWidth = altura * 0.06;
    ctx.beginPath();
    ctx.arc(x + largura / 2, y + altura * 0.44, altura * 0.28, Math.PI, 0);
    ctx.stroke();
    ctx.fillStyle = '#cc0000';
    ctx.fillRect(x + largura / 2 - 2, y + (altura * 2) / 3, 4, altura * 0.25);
    ctx.fillRect(x + largura / 2 - 10, y + (altura * 2) / 3 + 6, 20, 4);
  } else if (uf === 'CE') {
    ctx.fillStyle = '#138808';
    ctx.fillRect(x, y, largura, altura);
    ctx.fillStyle = '#ffcc00';
    ctx.beginPath();
    ctx.moveTo(x + largura / 2, y + altura * 0.1);
    ctx.lineTo(x + largura * 0.9, y + altura / 2);
    ctx.lineTo(x + largura / 2, y + altura * 0.9);
    ctx.lineTo(x + largura * 0.1, y + altura / 2);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x + largura / 2, y + altura / 2, altura * 0.22, 0, Math.PI * 2);
    ctx.fill();
  } else if (uf === 'BA') {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x, y, largura, altura);
    ctx.fillStyle = '#cc0000';
    ctx.fillRect(x, y + altura * 0.25, largura, altura * 0.25);
    ctx.fillRect(x, y + altura * 0.75, largura, altura * 0.25);
    ctx.fillStyle = '#002776';
    ctx.fillRect(x, y, largura * 0.45, altura * 0.5);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(x + largura * 0.225, y + altura * 0.12);
    ctx.lineTo(x + largura * 0.35, y + altura * 0.38);
    ctx.lineTo(x + largura * 0.1, y + altura * 0.38);
    ctx.closePath();
    ctx.fill();
  } else if (uf === 'MA') {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x, y, largura, altura);
    const sH = altura / 9;
    ctx.fillStyle = '#000000';
    ctx.fillRect(x, y, largura, sH);
    ctx.fillRect(x, y + sH * 3, largura, sH);
    ctx.fillRect(x, y + sH * 6, largura, sH);
    ctx.fillStyle = '#cc0000';
    ctx.fillRect(x, y + sH * 2, largura, sH);
    ctx.fillRect(x, y + sH * 5, largura, sH);
    ctx.fillRect(x, y + sH * 8, largura, sH);
    ctx.fillStyle = '#002776';
    ctx.fillRect(x, y, largura * 0.4, sH * 4);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x + largura * 0.2, sH * 2, altura * 0.1, 0, Math.PI * 2);
    ctx.fill();
  } else if (uf === 'PI') {
    ctx.fillStyle = '#ffcc00';
    ctx.fillRect(x, y, largura, altura);
    const sH = altura / 13;
    ctx.fillStyle = '#138808';
    for (let i = 0; i < 13; i += 2) {
      ctx.fillRect(x, y + sH * i, largura, sH);
    }
    ctx.fillStyle = '#002776';
    ctx.fillRect(x, y, largura * 0.42, sH * 7);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x + largura * 0.21, sH * 3.5, altura * 0.12, 0, Math.PI * 2);
    ctx.fill();
  } else if (uf === 'RN') {
    ctx.fillStyle = '#138808';
    ctx.fillRect(x, y, largura, altura / 2);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x, y + altura / 2, largura, altura / 2);
    ctx.fillStyle = '#ffcc00';
    ctx.beginPath();
    ctx.moveTo(x + largura / 2, y + altura * 0.25);
    ctx.lineTo(x + largura / 2 + 12, y + altura / 2 + 10);
    ctx.lineTo(x + largura / 2 - 12, y + altura / 2 + 10);
    ctx.closePath();
    ctx.fill();
  } else if (uf === 'AL') {
    ctx.fillStyle = '#cc0000';
    ctx.fillRect(x, y, largura / 3, altura);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + largura / 3, y, largura / 3, altura);
    ctx.fillStyle = '#002776';
    ctx.fillRect(x + (largura * 2) / 3, y, largura / 3, altura);
    ctx.fillStyle = '#ffcc00';
    ctx.beginPath();
    ctx.arc(x + largura / 2, y + altura / 2, altura * 0.18, 0, Math.PI * 2);
    ctx.fill();
  } else if (uf === 'SE') {
    ctx.fillStyle = '#ffcc00';
    ctx.fillRect(x, y, largura, altura);
    const sH = altura / 4;
    ctx.fillStyle = '#138808';
    ctx.fillRect(x, y, largura, sH);
    ctx.fillRect(x, y + sH * 2, largura, sH);
    ctx.fillStyle = '#002776';
    ctx.fillRect(x, y, largura * 0.42, sH * 2);
    ctx.fillStyle = '#ffffff';
    const cX = x + largura * 0.21;
    const cY = sH;
    ctx.beginPath(); ctx.arc(cX, cY - 4, 3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cX - 8, cY + 4, 3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cX + 8, cY + 4, 3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cX - 4, cY + 12, 3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cX + 4, cY + 12, 3, 0, Math.PI * 2); ctx.fill();
  }

  ctx.strokeRect(x, y, largura, altura);
  ctx.restore();
}
