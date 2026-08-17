const GerenciadorRastreamento = {
  utmSource: '',
  utmMedium: '',
  utmCampaign: '',
  idGa4: 'G-XXXXXXXXXX',

  inicializar() {
    this.capturarParametrosUtm();
    this.carregarScriptGa4();
  },

  capturarParametrosUtm() {
    const urlParams = new URLSearchParams(window.location.search);
    this.utmSource = urlParams.get('utm_source') || 'direto';
    this.utmMedium = urlParams.get('utm_medium') || 'nenhum';
    this.utmCampaign = urlParams.get('utm_campaign') || 'organico';
  },

  carregarScriptGa4() {
    if (this.idGa4 === 'G-XXXXXXXXXX') return;

    const scriptGa = document.createElement('script');
    scriptGa.async = true;
    scriptGa.src = `https://www.googletagmanager.com/gtag/js?id=${this.idGa4}`;
    document.head.appendChild(scriptGa);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', this.idGa4, {
      utm_source: this.utmSource,
      utm_medium: this.utmMedium,
      utm_campaign: this.utmCampaign
    });
  },

  dispararEvento(nomeEvento, parametros = {}) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', nomeEvento, {
        ...parametros,
        utm_source: this.utmSource,
        utm_medium: this.utmMedium,
        utm_campaign: this.utmCampaign
      });
    }
  }
};
