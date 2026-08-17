const ESTADOS_NORDESTE = [
  { uf: 'AL', nome: 'Alagoas', gentilico: 'Alagoano(a)', corHex: '#002776' },
  { uf: 'BA', nome: 'Bahia', gentilico: 'Baiano(a)', corHex: '#138808' },
  { uf: 'CE', nome: 'Ceará', gentilico: 'Cearense', corHex: '#002776' },
  { uf: 'MA', nome: 'Maranhão', gentilico: 'Maranhense', corHex: '#138808' },
  { uf: 'PB', nome: 'Paraíba', gentilico: 'Paraibano(a)', corHex: '#002776' },
  { uf: 'PE', nome: 'Pernambuco', gentilico: 'Pernambucano(a)', corHex: '#138808' },
  { uf: 'PI', nome: 'Piauí', gentilico: 'Piauiense', corHex: '#002776' },
  { uf: 'RN', nome: 'Rio Grande do Norte', gentilico: 'Potiguar', corHex: '#138808' },
  { uf: 'SE', nome: 'Sergipe', gentilico: 'Sergipano(a)', corHex: '#002776' }
];

function obterEstadoPorUf(siglaUf) {
  return ESTADOS_NORDESTE.find(e => e.uf === siglaUf) || ESTADOS_NORDESTE[4];
}
