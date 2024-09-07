function pesquisar() {
    let section = document.getElementById("resultado-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase().trim();
    let resultado = "";

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo em sua busca.</p>";
        return;
    }

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultado += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Saiba Mais</a>
                </div>
            `;
        }
    }

    if (!resultado) {
        resultado = "<p>Nada foi encontrado</p>";
    }

    section.innerHTML = resultado;
}
