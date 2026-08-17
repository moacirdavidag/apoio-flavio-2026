const GerenciadorCompartilhamento = {
  exibirToast(mensagem) {
    const toast = document.getElementById('notificacaoToast');
    if (!toast) return;
    toast.textContent = mensagem;
    toast.classList.add('visivel');
    setTimeout(() => {
      toast.classList.remove('visivel');
    }, 4000);
  },

  async compartilharWhatsApp(formatoNome) {
    const urlRastreavel = CONFIGURACOES.marcaAgua.urlCompartilhamento;
    const textoMensagem = `Eu apoio Flávio Bolsonaro 22! 🚀🇧🇷 Crie sua arte de apoio também em:\n${urlRastreavel}`;

    GerenciadorRastreamento.dispararEvento('tentativa_compartilhamento_whatsapp', {
      formato: formatoNome,
      utm_source: 'whatsapp',
      utm_medium: 'share',
      utm_campaign: 'apoio_flavio2026'
    });

    try {
      const blob = await CanvasEngine.obterBlob();
      const nomeArquivo = `apoiador-flavio22-${formatoNome.toLowerCase().replace(/[^a-z0-9]/g, '')}.png`;
      const arquivo = new File([blob], nomeArquivo, { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [arquivo] })) {
        await navigator.share({
          files: [arquivo],
          title: 'Eu apoio Flávio Bolsonaro 22',
          text: textoMensagem
        });
        GerenciadorRastreamento.dispararEvento('compartilhamento_whatsapp_sucesso', { formato: formatoNome });
        this.exibirToast('Arte e link compartilhados no WhatsApp com sucesso! 🚀');
      } else {
        const linkWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent(textoMensagem)}`;
        window.open(linkWhatsApp, '_blank');
        this.baixarImagemLocal(blob, nomeArquivo);
        GerenciadorRastreamento.dispararEvento('compartilhamento_whatsapp_web_fallback', { formato: formatoNome });
        this.exibirToast('A imagem foi baixada e o WhatsApp aberto com o seu link rastreável! 🚀');
      }
    } catch (erro) {
      if (erro.name !== 'AbortError') {
        const linkWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent(textoMensagem)}`;
        window.open(linkWhatsApp, '_blank');
        GerenciadorRastreamento.dispararEvento('compartilhamento_whatsapp_erro_fallback', { formato: formatoNome });
        this.exibirToast('WhatsApp aberto para envio do seu link rastreável! 🚀');
      }
    }
  },

  baixarImagemLocal(blob, nomeArquivo) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};
