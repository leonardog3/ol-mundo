
   
    const calcular = document.getElementById ('calcular')
    
   
   
    function imc () {
        const nome = document.getElementById ('nome').value
        const peso = document.getElementById ('peso').value
        const altura = document.getElementById ('altura').value
        const resultado = document.getElementById ('resultado') 

        if (nome !== '' && peso !== '' && altura !== '') {
           const valorIMC = (peso / (altura*altura)).toFixed(1)
           resultado.textContent = valorIMC
         
        
        let classificação = '' 

        if (valorIMC < 18) {
            classificação = 'abaixo do peso, cuidado!!'
        } else if (valorIMC < 25) {
            classificação = 'com o peso ideal, Parabens!!'
        } else if (valorIMC < 30) {
            classificação = 'levemente acima do peso'
        } else if (valorIMC < 35) {
            classificação = 'com obesidade grau I'
        } else if (valorIMC < 40) {
            classificação = 'com obesidade grau II'
        } else if (valorIMC > 40) {
            classificação = 'com obesidade grau III. CUIDADO!'
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e voce está ${classificação}`
        
    }
        else {
            resultado.textContent = 'preencha os campos '
        }
            
        

    }
calcular.addEventListener ('click', imc)

