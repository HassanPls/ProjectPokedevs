// Seleciona todos os elementos com a classe "pokemon", que representam os pokedevs na listagem.
const listaSelecaoPokedevs = document.querySelectorAll(".pokemon");

// Adiciona um evento de clique a cada um dos pokedevs da lista.
listaSelecaoPokedevs.forEach(pokedev => {
	pokedev.addEventListener("click", () => {
		// Esconde o cartão do pokedev atualmente aberto.
		esconderCartaoPokedev();

		// Obtém o ID do pokedev selecionado e exibe o respectivo cartão.
		const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

		// Desativa o pokedev ativo na listagem.
		desativarPokedevNaListagem();

		// Ativa o pokedev selecionado na listagem.
		ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
	})
})

// Função que ativa o pokedev selecionado na listagem, aplicando a classe "ativo".
function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
	const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
	pokedevSelecionadoNaListagem.classList.add("ativo");
}

// Função que remove a classe "ativo" do pokedev atualmente ativo.
function desativarPokedevNaListagem() {
	const pokedevAtivoNaListagem = document.querySelector(".ativo");
	pokedevAtivoNaListagem.classList.remove("ativo");
}

// Função que exibe o cartão correspondente ao pokedev selecionado.
function mostrarCartaoPokedevSelecionado(pokedev) {
	// Obtém o ID do pokedev selecionado.
	const idPokedevSelecionado = pokedev.attributes.id.value;

	// Monta o ID do cartão correspondente ao pokedev.
	const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;

	// Encontra o cartão e adiciona a classe "aberto" para exibi-lo.
	const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
	cartaoPokedevParaAbrir.classList.add("aberto");

	// Retorna o ID do pokedev selecionado.
	return idPokedevSelecionado;
}

// Função que esconde o cartão atualmente aberto, removendo a classe "aberto".
function esconderCartaoPokedev() {
	const cartaoPokedevAberto = document.querySelector(".aberto");
	cartaoPokedevAberto.classList.remove("aberto");
}
