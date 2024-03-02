let nome = "Kallel"
let xp = 7600
let nivel = ""

//capturar o input 

switch (true) {
    case xp < 1000:
        nivel = "Ferro"
        break;
    case 1001 < xp && xp < 2000:
        nivel = "Bronze"
        break;
    case 2001 < xp && xp < 5000:
        nivel = "Prata"
        break;
    case 5001 < xp && xp < 7000:
        nivel = "Ouro"
        break;
    case 7001 < xp && xp < 8000:
        nivel = "Platina"
        break;
    case 8001 < xp && xp < 9000:
        nivel = "Ascendente"
        break;
    case 9001 < xp && xp < 10000:
        nivel = "Imortal"
        break;
    case xp >= 10001:
        nivel = "Radiante"
        break;

}

//output 
console.log("O Herói " + nome + " está no nível " + nivel)

