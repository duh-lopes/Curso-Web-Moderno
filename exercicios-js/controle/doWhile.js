

function getNumberAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getNumberAleatorioEntre(-1, 10)
    console.log('Opção escolhida foi ', opcao)
} while (opcao != -1)

console.log('Até a proxima!')