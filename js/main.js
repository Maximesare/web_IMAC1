// thecolorapi
const getData = async (from) => {
	
	// verification du formulaire
	if(
		(from === "cmyk" && document.querySelector('input[name="cyan"]').value != "" && document.querySelector('input[name="magenta"]').value != "" && document.querySelector('input[name="yellow"]').value != "" && document.querySelector('input[name="black"]').value != "")
		|| (from === "hex" && document.querySelector('input[name="hex"]').value != "")
		|| (from === "hsl" && document.querySelector('input[name="hsl-hue"]').value != "" && document.querySelector('input[name="hsl-saturation"]').value != "" && document.querySelector('input[name="lightness"]').value != "")
		|| (from === "hsv" && document.querySelector('input[name="hsv-hue"]').value != "" && document.querySelector('input[name="hsv-saturation"]').value != "" && document.querySelector('input[name="value"]').value != "")
		|| (from === "rgb" && document.querySelector('input[name="red"]').value != "" && document.querySelector('input[name="green"]').value != "" && document.querySelector('input[name="blue"]').value != "")
		) {

		// affichage du loader
		document.querySelector('#loader').classList.remove("hidden");

		// on cache les eventuels resultats precedents
		document.querySelector('#conversion-result').classList.add("hidden");

		// detection du format de couleur donne par l'utilisateur
		if(from == "cmyk") {

			// recuperation des valeurs saisies
			let c = document.querySelector('input[name="cyan"]').value;
			let m = document.querySelector('input[name="magenta"]').value;
			let y = document.querySelector('input[name="yellow"]').value;
			let k = document.querySelector('input[name="black"]').value;
			let cmyk = c+','+m+','+y+','+k;

			// ecriture de l'url d'appel de l'API
			var response = await fetch('https://cors-anywhere.herokuapp.com/http://thecolorapi.com/id?cmyk='+cmyk+'&format=json');
		}
		if(from == "hex") {

			// recuperation des valeurs saisies
			let hex = document.querySelector('input[name="hex"]').value;

			// ecriture de l'url d'appel de l'API
			var response = await fetch('https://cors-anywhere.herokuapp.com/http://thecolorapi.com/id?hex='+hex+'&format=json');
		}
		if(from == "hsl") {

			// recuperation des valeurs saisies
			let h = document.querySelector('input[name="hsl-hue"]').value;
			let s = document.querySelector('input[name="hsl-saturation"]').value;
			let l = document.querySelector('input[name="lightness"]').value;
			let hsl = h+','+s+','+l;

			// ecriture de l'url d'appel de l'API
			var response = await fetch('https://cors-anywhere.herokuapp.com/http://thecolorapi.com/id?hsl='+hsl+'&format=json');
		}
		if(from == "hsv") {

			// recuperation des valeurs saisies
			let h = document.querySelector('input[name="hsv-hue"]').value;
			let s = document.querySelector('input[name="hsv-saturation"]').value;
			let v = document.querySelector('input[name="value"]').value;
			let hsv = h+','+s+','+v;

			// ecriture de l'url d'appel de l'API
			var response = await fetch('https://cors-anywhere.herokuapp.com/http://thecolorapi.com/id?hsv='+hsv+'&format=json');
		}
		if(from == "rgb") {

			// recuperation des valeurs saisies
			let r = document.querySelector('input[name="red"]').value;
			let g = document.querySelector('input[name="green"]').value;
			let b = document.querySelector('input[name="blue"]').value;
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
			document.querySelector('#color-sample').style.backgroundColor = data.rgb.value;
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

const cmyk_convert_btn = document.querySelector('#cmyk-convert-btn');
cmyk_convert_btn.addEventListener('click', () => {
	getData("cmyk");
});

const hex_convert_btn = document.querySelector('#hex-convert-btn');
hex_convert_btn.addEventListener('click', () => {
	getData("hex");
});

const hsl_convert_btn = document.querySelector('#hsl-convert-btn');
hsl_convert_btn.addEventListener('click', () => {
	getData("hsl");
});

const hsv_convert_btn = document.querySelector('#hsv-convert-btn');
hsv_convert_btn.addEventListener('click', () => {
	getData("hsv");
});

const rgb_convert_btn = document.querySelector('#rgb-convert-btn');
rgb_convert_btn.addEventListener('click', () => {
	getData("rgb");
});


