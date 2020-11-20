var el = document.getElementById("data-hoje")
var hoje = new Date();
dayName = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
el.innerText = `${dayName[hoje.getDay()]}, ${hoje.getDate()} de ${monName[hoje.getMonth()]} de ${hoje.getFullYear()} `




const inputElement = document.getElementById("atividade")
const dateElement = document.getElementById("data-atividade")
const prioridElement = document.getElementById("prioridade")
const statusElement = document.getElementById("status")
const buttonElement = document.getElementById("addButton")
// const buttonRemove = document.getElementById("removeButton")

buttonElement.onclick = ev => {
    ev.preventDefault();

    if (inputElement.value) {
        let textElement = document.createElement("td")
        textElement = inputElement.value

        let dateTask = document.createElement("td")
        dateTask = dateElement.value

        let prioridadeTask = document.createElement("td")
        prioridadeTask = prioridElement.value

        let statusTask = document.createElement("td")
        statusTask = statusElement.value

        let tg = document.querySelector(".tg");

        var tabela = document.getElementById("tbl")
        var nLinhas = tabela.rows.length
        var linha = tabela.insertRow(nLinhas)
        var cell1 = linha.insertCell(0)
        var cell2 = linha.insertCell(1)
        var cell3 = linha.insertCell(2)
        var cell4 = linha.insertCell(3)
        var cell5 = linha.insertCell(4)
        var cell6 = linha.insertCell(5)

        cell1.innerText = `${(nLinhas - 1)}`
        cell2.innerText = `${textElement}`
        cell3.innerText = `${dateTask}`
        cell4.innerText = `${prioridadeTask}`
        cell5.innerText = `${statusTask}`
        // cell6.innerHTML = buttonRemove
        cell6.innerHTML = "<button onclick='removeLinha()'>Remover</button>"


        console.log(`textElement = ${textElement}`)
        console.log(`dateTAsk = ${dateTask}`)


        // buttonRemove = function createButtonRemove(){
        //     const newButton = document.createButtonRemove("button");
        //     newButton.id = "buttonRemove";
        //     newButton.innerHTML = "Remove";
        //     tg.appendChild(newButton);
        // }

        buttonRemove.onclick = (linha) => {
            var i = linha.parentNode.parentNode.rowIndex
            document.getElementById('tbl').deleteRow(i)
        }

        //esvaziar o form quando clicar em adicionar
        inputElement.value = "";
    }
    else {
        alert("Escreva uma atividade!"); //se nada for escrito, gerar esse alerta

    }



}

