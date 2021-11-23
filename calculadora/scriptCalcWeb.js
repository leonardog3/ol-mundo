
function somar () { 
    let a = document.getElementById ('txt1')
    let b = document.getElementById ('txt2') 
    let  res = document.getElementById ('res') 
    let a_soma = Number (a.value)
    let b_soma = Number (b.value)
    let solucao = a_soma + b_soma
    res.innerHTML = solucao  
    res.innerHTML = ` ${a_soma} + ${b_soma} = ${solucao} `
    
} 
 function subtrair () { 
     const a_sub = document.getElementById('txt3') 
     const b_sub = document.getElementById ('txt4') 
     var res_sub = document.getElementById('ressub') 
     var solucao_sub = a_sub.value - b_sub.value
     res_sub.innerHTML = solucao_sub
     res_sub.innerHTML = ` ${a_sub.value} - ${b_sub.value} = ${solucao_sub}`

 } 
  
 function multiplicar () { 
     var a_multi, b_multi, res_multi, solucao_multi
     a_multi = document.getElementById('txt5')
     b_multi = document.getElementById ('txt6') 
     res_multi = document.getElementById ('resmulti')   
     solucao_multi = a_multi.value * b_multi.value
     res_multi.innerHTML = solucao_multi 
     res_multi.innerHTML = `${a_multi.value} x ${b_multi.value} = ${solucao_multi}`
 } 
 function dividir  () {
     const a_div = document.getElementById ('txt7')
     const b_div = document.getElementById ('txt8')
     let res_div = document.getElementById ('res_div')   
     let solucao_div = a_div.value / b_div.value
     res_div.innerHTML = solucao_div
     res_div.innerHTML = ` ${a_div.value} / ${b_div.value} = ${solucao_div}` 
    
    
     
   }