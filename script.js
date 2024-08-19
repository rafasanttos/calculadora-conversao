const escolha = document.querySelectorAll('.selectores');
const valorDolar = document.getElementById('value-dolar');
const valorInvestir = document.getElementById('value-investir');
const mostrarValorInvestido = document.getElementById('showValue');


// function escolhaMoeda(){
//     escolha.forEach((i)=>{
//         i.addEventListener('change',()=>{
//             console.log(i.value)
//         })
//     })
// }
// escolhaMoeda();


const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';

async function fetchApi (){
   

    const puxar = await fetch(url);
    const dados = await puxar.json();
    const resul =  Number((+dados.USDBRL.bid).toFixed(2))
    console.log(typeof(resul))
    valorDolar.innerHTML= resul;
    // `${JSON.stringify(resul)}`

    valorInvestir.addEventListener('change',()=>{
        const valor =  +valorInvestir.value;
        const final= '$ '+ Number(`${valor / resul}`).toFixed(2);
        mostrarValorInvestido.innerHTML= final;
        // let ok = final
        // mostrarValorInvestido.innerHTML= `${ok}`;
        console.log(final)
    });
    

    
  

}

fetchApi();

// function changeValue(){
    
    
// }

// changeValue()

