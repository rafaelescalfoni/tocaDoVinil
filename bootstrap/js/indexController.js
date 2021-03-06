/**
	Funções para carregar itens na tela principal
*/
function carregarAlbuns(albuns) {
	$("#listaAlbuns").empty();
	$(albuns).each(function(pos, album){
		criaItem(album);
	});
}

function criaItem(album) {
	$("#listaAlbuns")
		.append($("<li />")
			.attr("id", album.id)
			.addClass("col-xs-12 col-md-3")
			.append($("<figure />")
				.append($("<img />")
					.css("text-align", "center")
					.addClass("imgAlbum")
					.attr("src", album.pathImgAlbum)
				)
				.append($("<figcaption />")
					.text(album.titulo)
					.css({"width":"150px", "text-align":"center"})
				)
			)
			.append($("<div />")
				.append($("<span />")
					.addClass("preco")
					.text(album.preco)
				)
				.append($("<label />").text("Quantidade"))
				.append($("<input />")
					.attr({ "type": "number", "value": "0"})
				)
				.append($("<a />")
					.attr("href", "#")
					.text("Adicionar ao carrinho")
				)
				.addClass("compra")
			)
		);
}
/*
	Funções para filtrar os itens da lista
*/
function filtrarAlbum(genero, albuns) {
	var albunsSelecionados = [];
	$(albuns).each(function(pos, album){
		if(album.genero.toUpperCase().search(genero.toUpperCase())>=0) {
			albunsSelecionados.push(album);
		} 
		if(genero == "todos") {
			albunsSelecionados.push(album);	
		}
	});
	carregarAlbuns(albunsSelecionados);
	return albunsSelecionados;
}

function filtrar(keyword, albuns) {
	var albunsSelecionados = [];
	$(albuns).each(function(pos, album){
		if(album.titulo.toUpperCase().search(keyword)>=0 ||
		   album.artista.toUpperCase().search(keyword)>=0){
			albunsSelecionados.push(album);	
		}
		carregarAlbuns(albunsSelecionados)
	})
}

function pesquisaAlbumPorId(id, albuns) {
	$(albuns).each(function(pos, album){
		if(album.id == id) {
			return album;
		}
	})
}

/*
	Funções para carregar detalhes de um item escolhido
*/
function carregarDetalhes(id, albuns) {
	var album;

	

	$(albuns).each(function(pos, obj){
		if(obj.id == id) {
			album = obj;
		}
	});
	$("#detalheAlbum").empty();

	$("#detalheAlbum").append($("<img />").attr("src", album.pathImgAlbum));
	$("#detalheAlbum").append($("<h3 />").text(album.titulo));
	$("#detalheAlbum").append($("<p />").text(album.artista));
	$("#detalheAlbum").append($("<p />").text(album.genero));
	
	$("#detalheAlbum").append($("<ol />"));
	$(album.musicas).each(function(pos, musica){
		$("#detalheAlbum").find("ol")
								.append($("<li />")
									.text(musica)
									.append($("<audio />")
										.attr("controls", "controls")
										.append($("<source />")
											.attr({"src" : "./sound/hadouken.mp3"
												 , "type":"audio/mpeg"})
										)
									)	
								);
	});
}

function sumirDetalhe() {
	$("#detalheAlbum").animate({"width":"0%", "height":"0%"},"slow");
	$("#fundo").css("visibility", "hidden");
	$("#detalheAlbum").find("audio").remove();	
}

