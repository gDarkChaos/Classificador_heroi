## Classificador de nível de Herói em Javascript

let nome = prompt('Digite o nome do seu herói: ');

let rank = prompt('Informe a quantidade de xp alcançada: ');

rank = parseInt(rank);

if (rank <= 1000) {
    rank = 'Ferro';
} else if (rank >= 1001 & rank <= 2000) {
    rank = 'Bronze';
} else if (rank >= 2001 & rank <= 5000) {
    rank = 'Prata';
} else if (rank >= 6001 & rank <= 7000) {
    rank = 'Ouro';
} else if (rank >= 7001 & rank <= 8000) {
    rank = 'Platina';
} else if (rank >= 8001 & rank <= 9000) {
    rank = 'Ascendente';
} else if (rank >= 9001 & rank <= 10000){
    rank = 'Imortal';
} else if (rank >= 10001) {
    rank = 'Radiante';
}

console.log("O Herói de nome " + nome + " está no nível de " + rank);




