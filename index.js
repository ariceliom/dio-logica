// Variáveis
let nome = "Lázaro";
let xp = 7600;

// Função para obter o nível com base na experiência
function obterNivel(xp) {
  switch (true) {
    case xp < 1000:
      return "Ferro";
    case xp <= 2000:
      return "Bronze";
    case xp <= 5000:
      return "Prata";
    case xp <= 6000:
      return "Ouro";
    case xp <= 7000:
      return "Platina";
    case xp <= 8000:
      return "Diamante";
    case xp <= 9000:
      return "Ascendente";
    default:
      return "Erro";
  }
}

// Obtém e exibe o nível
let nivel = obterNivel(xp);
console.log(`O herói ${nome} está no nível ${nivel}.`);
