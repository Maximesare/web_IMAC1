// AJAX
const getDataFromRGB = async () => {
	
	// verification du formulaire
	if(document.querySelector('input[name="r"]').value != "" && document.querySelector('input[name="g"]').value != "" && document.querySelector('input[name="b"]').value != "") {

		// affichage du loader
		document.querySelector('#loader').classList.remove("hidden");

		// cache de la couleur precedente
		document.querySelector('#conversion-result').classList.add("hidden");

		// recuperation des valeurs saisies
		let r = document.querySelector('input[name="r"]').value;
		let g = document.querySelector('input[name="g"]').value;
		let b = document.querySelector('input[name="b"]').value;
		let rgb = r+','+g+','+b;

		// appel de l'API
		const response = await fetch('https://cors-anywhere.herokuapp.com/http://thecolorapi.com/id?hex='+''+'&rgb='+rgb+'&format=json');
		const data = await response.json();
		try {

			// cache du loader
			document.querySelector('#loader').classList.add("hidden");

			// affichage des resultats
			console.log(data);

			document.querySelector('#conversion-result').classList.remove("hidden");
			document.querySelector('#conversion-result div.result-hex p').innerHTML = data.hex.value;
			document.querySelector('#conversion-result div.result-rgb p').innerHTML = data.rgb.value;
			document.querySelector('#conversion-result div.result-cmyk p').innerHTML = data.cmyk.value;
			document.querySelector('#conversion-result div.result-hsl p').innerHTML = data.hsl.value;
			document.querySelector('#conversion-result div.result-hsv p').innerHTML = data.hsv.value;
			document.querySelector('#color-sample').style.backgroundColor = data.hex.value;
			document.querySelector('#conversion-result h2').innerHTML = data.name.value;
		}
		catch(e) {
			console.log('error', e);
		}
	}
}

const convert_btn = document.querySelector('#rgb-convert-btn');
convert_btn.addEventListener('click', getDataFromRGB);