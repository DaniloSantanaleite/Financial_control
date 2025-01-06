const element = document.querySelector("#finalizarCadastro")

const bemVindo = document.querySelector("#test")

const money = document.querySelector("#total")



element.addEventListener("click", (e) =>{
    e.preventDefault()

   const name = document.querySelector("#myname")
    const value = name.value
    bemVindo.textContent = `Olá, ${value}!`

    const valores = document.querySelector("#valor")

    const valorTotal = valores.value

    money.textContent = `Sua Mensalidade é de R$ ${valorTotal}`


})

 
