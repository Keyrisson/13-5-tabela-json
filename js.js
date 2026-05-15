function info() {
    fetch('jojo.json')
        .then(response = response.json())
        .then(dadinho => {
            tablet = document.getElementById('destino');

            dadinho.forEach(Joestar => {
                let Linha = document.createElement('tr');

                Linha.innerHTML = `
                <td> $(Joestar.nome} </td>
                <td> $(Joestar.idade) </td>
                <td> $(Joestar.altura) </td>
                <td> $(Joestar.apelido </td>
                <button type="button" onclick="">oi</button>
                `
                tablet.appendChild(linha);
            });
    })
}