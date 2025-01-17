// CONVERSION
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
			var response = await fetch('https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/id?cmyk='+cmyk);
		}
		if(from == "hex") {

			// recuperation des valeurs saisies
			let hex = document.querySelector('input[name="hex"]').value;

			// ecriture de l'url d'appel de l'API
			var response = await fetch('https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/id?hex='+hex);
		}
		if(from == "hsl") {

			// recuperation des valeurs saisies
			let h = document.querySelector('input[name="hsl-hue"]').value;
			let s = document.querySelector('input[name="hsl-saturation"]').value;
			let l = document.querySelector('input[name="lightness"]').value;
			let hsl = h+','+s+','+l;

			// ecriture de l'url d'appel de l'API
			var response = await fetch('https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/id?hsl='+hsl);
		}
		if(from == "hsv") {

			// recuperation des valeurs saisies
			let h = document.querySelector('input[name="hsv-hue"]').value;
			let s = document.querySelector('input[name="hsv-saturation"]').value;
			let v = document.querySelector('input[name="value"]').value;
			let hsv = h+','+s+','+v;

			// ecriture de l'url d'appel de l'API
			var response = await fetch('https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/id?hsv='+hsv);
		}
		if(from == "rgb") {

			// recuperation des valeurs saisies
			let r = document.querySelector('input[name="red"]').value;
			let g = document.querySelector('input[name="green"]').value;
			let b = document.querySelector('input[name="blue"]').value;
			let rgb = r+','+g+','+b;

			// ecriture de l'url d'appel de l'API
			var response = await fetch('https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/id?rgb='+rgb);
		}

		const data = await response.json();

		try {

			// on cache le loader
			document.querySelector('#loader').classList.add("hidden");

			// affichage des resultats
			document.querySelector('#color-sample h2').innerHTML = data.name.value;
			document.querySelector('#color-sample h2').style.color = data.contrast.value;
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



// "onglets" du formulaire "A partir de quel format ?"
function change_from(name) {
	document.getElementById(anc_from+'-global-btn').className = 'from_0 from';
	document.getElementById(name+'-global-btn').className = 'from_1 from';
	document.getElementById(anc_from+'-form').style.display = 'none';
	document.getElementById(name+'-form').style.display = 'block';
	anc_from = name;
}

var from = 'cmyk';
switch(from) {
	case 'hex':
	  var anc_from = 'hex';
	  break;
	case 'hsl':
	  var anc_from = 'hsl';
	  break;
	  case 'hsv':
	  var anc_from = 'hsv';
	  break;
	  case 'rgb':
	  var anc_from = 'rgb';
	  break;
	default:
	  var anc_from = 'cmyk';
}

change_from(anc_from);



// "Palette d'apres cette couleur"
const auto_palette_btn = document.querySelector('#auto-palette-btn');
auto_palette_btn.addEventListener('click', () => {
	change_onglet('palette');
	document.querySelector('input[name="hex_palette"]').value = document.querySelector('#conversion-result div.result-hex p').innerHTML.substr(1, document.querySelector('#conversion-result div.result-hex p').innerHTML.lenght);
    document.getElementById('palette').style.display = "none";
});




