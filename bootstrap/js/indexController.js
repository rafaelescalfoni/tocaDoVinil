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
		
		function Album (){
			this.id = "1";
			this.titulo = "Abre-te, Sésamo!";
			this.artista = "Raul Seixas";
			this.genero = "Rock Brasileiro";
			this.ano = "1976";
			this.pathImgAlbum = "./img/raul-seixas_abretesesamo.jpg";
			this.valor = "R$ 50,00";
			this.musicas = ["faixa 01","faixa 02","faixa 03","faixa 04","faixa 05"];
		}
		function filtrarAlbum(genero, albuns) {
			var albunsSelecionados = [];
			$(albuns).each(function(pos, album){
				if(album.genero.toUpperCase().search(genero.toUpperCase())>=0) {
					albunsSelecionados.push(album);
				} 
			});
			carregarAlbuns(albunsSelecionados);
			return albunsSelecionados;
		}