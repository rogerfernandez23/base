const key = "ac9f0ad2410579a4f08cdfb9eb2b4ad7"


function clickButton() {
    const bass = document.querySelector(".input-city").value
    console.log(bass)
    let resultado = bass
    buscarCidade()
}



async function buscarCidade(bass){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${bass}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    console.log(dados)
}


