// thecolorapi
const getData = async (from) => {
	
	// verification du formulaire
	if(
		(from === "rgb" && document.querySelector('input[name="r"]').value != "" && document.querySelector('input[name="g"]').value != "" && document.querySelector('input[name="b"]').value != "")
		|| (from === "hex" && document.querySelector('input[name="hex"]').value != "")
		) {

		// affichage du loader
		document.querySelector('#loader').classList.remove("hidden");

		// on cache les eventuels resultats precedents
		document.querySelector('#conversion-result').classList.add("hidden");

		// detection du format de couleur donne par l'utilisateur
		if(from == "hex") {

			// recuperation des valeurs saisies
			let hex = document.querySelector('input[name="hex"]').value;

			// ecriture de l'url d'appel de l'API
			var response = await fetch('https://cors-anywhere.herokuapp.com/http://thecolorapi.com/id?hex='+hex+'&format=json');
		}
		if(from == "rgb") {

			// recuperation des valeurs saisies
			let r = document.querySelector('input[name="r"]').value;
			let g = document.querySelector('input[name="g"]').value;
			let b = document.querySelector('input[name="b"]').value;
			let rgb = r+','+g+','+b;

			// ecriture de l'url d'appel de l'API
			var response = await fetch('https://cors-anywhere.herokuapp.com/http://thecolorapi.com/id?rgb='+rgb+'&format=json');
		}

		const data = await response.json();

		try {

			// on cache le loader
			document.querySelector('#loader').classList.add("hidden");

			// affichage des resultats

			console.log(data);

			document.querySelector('#conversion-result h2').innerHTML = data.name.value;
			document.querySelector('#color-sample').style.backgroundColor = data.hex.value;
			document.querySelector('#conversion-result').classList.remove("hidden");
			document.querySelector('#conversion-result div.result-hex p').innerHTML = data.hex.value;
			document.querySelector('#conversion-result div.result-rgb p').innerHTML = data.rgb.value;
			document.querySelector('#conversion-result div.result-cmyk p').innerHTML = data.cmyk.value;
			document.querySelector('#conversion-result div.result-hsl p').innerHTML = data.hsl.value;
			document.querySelector('#conversion-result div.result-hsv p').innerHTML = data.hsv.value;
		}

		catch(e) {
			console.log('error', e);
		}
	}
}

const hex_convert_btn = document.querySelector('#hex-convert-btn');
hex_convert_btn.addEventListener('click', () => {
	getData("hex");
});

const rgb_convert_btn = document.querySelector('#rgb-convert-btn');
rgb_convert_btn.addEventListener('click', () => {
	getData("rgb");
});


