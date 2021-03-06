skrollr.init({
		easing: {
			sin: function(p) {
				return (Math.sin(p * Math.PI * 2 - Math.PI/2) + 1) / 2;
			},
			cos: function(p) {
				return (Math.cos(p * Math.PI * 2 - Math.PI/2) + 1) / 2;
			},
		},
		render: function(data) {
			//Loop
			if(data.curTop === data.maxTop) {
				this.setScrollTop(0, true);
				cargar_pais();
			}
		}

	});
	$( window ).resize(function() {
 		var maxWidth = $(window).width();
 		var maxHeight = $(window).height();
 		$('.welcome, .intro, .sign-up').css({
        	width: maxWidth,
        	height: maxHeight
		});   
	});

function cargar_pais() {
		var bandera = ["alemania", "argentina", "australia", "brasil", "camerun", "china", "españa", "francia", "islandia", "italia", "mexico", "surcorea", "usa"];
		var himno = ["http://upload.wikimedia.org/wikipedia/commons/d/d0/Deutschlandlied_played_by_USAREUR_Band.ogg",
					"http://upload.wikimedia.org/wikipedia/commons/e/ef/United_States_Navy_Band_-_Himno_Nacional_Argentino.ogg",
					"http://upload.wikimedia.org/wikipedia/commons/6/63/Advance_Australia_Fair_instrumental.ogg",
					"http://upload.wikimedia.org/wikipedia/commons/9/9b/Hino_Nacional_Brasileiro_instrumental.ogg",
					"http://upload.wikimedia.org/wikipedia/commons/c/cc/United_States_Navy_Band_-_Chant_de_Ralliement.ogg",
					"http://upload.wikimedia.org/wikipedia/commons/b/b9/March_of_the_Volunteers_instrumental.ogg",
					"http://upload.wikimedia.org/wikipedia/commons/c/c8/Marcha_Real-Royal_March_by_US_Navy_Band.ogg",
					"http://upload.wikimedia.org/wikipedia/commons/3/30/La_Marseillaise.ogg",
					"http://upload.wikimedia.org/wikipedia/commons/4/4b/Lofs%C3%B6ngur.ogg",
					"http://upload.wikimedia.org/wikipedia/commons/b/b1/National_anthem_of_Italy_-_U.S._Navy_Band_%28short_version%29.ogg",
					  "http://upload.wikimedia.org/wikipedia/commons/9/9d/Himno_Nacional_Mexicano_instrumental.ogg",
					  "http://upload.wikimedia.org/wikipedia/commons/0/0c/The_National_Anthem_of_the_Republic_of_Korea.ogg",
					  "http://upload.wikimedia.org/wikipedia/commons/6/65/Star_Spangled_Banner_instrumental.ogg"
					  ];
		var capital = ["Berlín","Buenos Aires","Canberra","Brasilia","Yaundé","Pekín","Madrid","París","Reikiavik","Roma","Ciudad de México","Seul","Washington DC"];
		var poblacion = ["80,219,697","42,117,096","27,507,717","201,032,714","22,534,532","1,350,695,000","47,129,783","66,007,347","325,671","59,831,093","118,395,054","50,219,669","316,017,000"];
		var idioma = ["Aleman","Español","Ingles","Portuges","Frances e Ingles","Chino Mandarin","Español","Frances","Islandes","Italiano","Español","Coreano","Ingles"];
		var moneda = ["Euro (EUR)","Peso (ARS)","Dolar Australiano (AUD)","Real (BRL)","Franco de África (XAF)","Yuan (CNY)","Euro (EUR)","Euro (EUR)","Corona Islandesa (ISK)","Euro (EUR)","Peso Mexicano (MXN)","Won Coreano (KRW)", "Dolar Americano (USD)"];
		var superficie = ["2,780,400 km2","357,168 km2","8,514,877 km2","475,440 km2","7,692,024 km2","504,645 km2","675,417 km2","103,125 km2","301,338 km2","1,972,550 km2","100,210 km2","9,371,174 km2"];
		var continente = ["Europa","América","Oceania","América","Africa","Asia","Europa","Europa","Europa","Europa","América","Asia","América"];

		var rand = Math.floor(Math.random() * 13);
		var chosenBandera = bandera[rand];
		var chosenHimno = himno[rand];
		var chosenCapital = capital[rand];
		var chosenPoblacion = poblacion[rand];
		var chosenIdioma = idioma[rand];
		var chosenMoneda = moneda[rand];
		var chosenSuperficie = superficie[rand];
		var chosenContinente = continente[rand];

		var chosenDivBan = document.getElementById("bandera");
		var chosenDivHim = document.getElementById("himno_");
		var chosenDivCap = document.getElementById("capital");
		var chosenDivPob = document.getElementById("poblacion");
		var chosenDivIdi = document.getElementById("idioma");
		var chosenDivMon = document.getElementById("moneda");
		var chosenDivSup = document.getElementById("superficie");
		var chosenDivCon = document.getElementById("continente");

		chosenDivBan.src = "img/"+chosenBandera+".png";
		chosenDivHim.src = chosenHimno;
		chosenDivCap.innerHTML = "Capital<br>"+chosenCapital;
		chosenDivPob.innerHTML = "Poblacion<br>"+chosenPoblacion;
		chosenDivIdi.innerHTML = "Idioma<br>"+chosenIdioma;
		chosenDivMon.innerHTML = "Moneda<br>"+chosenMoneda;
		chosenDivSup.innerHTML = "Superficie<br>"+chosenSuperficie;
		chosenDivCon.innerHTML = "Continente<br>"+chosenContinente;
	}