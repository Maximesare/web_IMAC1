// PALETTE

var callBackGetSuccess = function(data) {
    console.log("donnees api", data)
    var element1 = document.getElementById("affiche_palette1");
    element1.style.backgroundColor = data.colors[0].hex.value;
    element1.innerHTML = " " + data.colors[0].hex.value;

    var element2 = document.getElementById("affiche_palette2");
    element2.style.backgroundColor = data.colors[1].hex.value;
    element2.innerHTML = " " + data.colors[1].hex.value;

    var element3 = document.getElementById("affiche_palette3");
    element3.style.backgroundColor = data.colors[2].hex.value;
    element3.innerHTML = " " + data.colors[2].hex.value;

    var element4 = document.getElementById("affiche_palette4");
    element4.style.backgroundColor = data.colors[3].hex.value;
    element4.innerHTML = " " + data.colors[3].hex.value;

    var element5 = document.getElementById("affiche_palette5");
    element5.style.backgroundColor = data.colors[4].hex.value;
    element5.innerHTML = " " + data.colors[4].hex.value;




    /*

    var element1 = document.getElementById("affiche_palette1");
    element1.style.backgroundColor = data.colors[0].cmyk.value;
    element1.innerHTML = " " + data.colors[0].cmyk.value;

    var element2 = document.getElementById("affiche_palette2");
    element2.style.backgroundColor = data.colors[1].cmyk.value;
    element2.innerHTML = " " + data.colors[1].cmyk.value;

    var element3 = document.getElementById("affiche_palette3");
    element3.style.backgroundColor = data.colors[2].cmyk.value;
    element3.innerHTML = " " + data.colors[2].cmyk.value;

    var element4 = document.getElementById("affiche_palette4");
    element4.style.backgroundColor = data.colors[3].cmyk.value;
    element4.innerHTML = " " + data.colors[3].cmyk.value;

    var element5 = document.getElementById("affiche_palette5");
    element5.style.backgroundColor = data.colors[4].cmyk.value;
    element5.innerHTML = " " + data.colors[4].cmyk.value; */

}


function buttonClickGET() {

if(
		(from === "cmyk_palette" && document.querySelector('input[name="cmyk_palette"]').value != "")
		|| (from === "hex_palette" && document.querySelector('input[name="hex_palette"]').value != "")
		|| (from === "hsl_palette" && document.querySelector('input[name="hsl_palette"]').value != "" && document.querySelector('input[name="hsl-saturation"]').value != "" && document.querySelector('input[name="lightness"]').value != "")
		|| (from === "hsv_palette" && document.querySelector('input[name="hsv_palette"]').value != "" && document.querySelector('input[name="hsv-saturation"]').value != "" && document.querySelector('input[name="value"]').value != "")
		|| (from === "rgb_palette" && document.querySelector('input[name="rgb_palette"]').value != "" && document.querySelector('input[name="green"]').value != "" && document.querySelector('input[name="blue"]').value != "")
		) {

	if(from == "cmyk_palette") {
			// recuperation des valeurs saisies
			var cmyk = document.querySelector('input[name="cmyk_palette"]').value;
			// ecriture de l'url d'appel de l'API
			var url = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?cmyk="+cmyk+"&mode="+mode+"&count=5";
		}

	if(from == "hex_palette") {
			var hex = document.querySelector('input[name="hex_palette"]').value;
			var url = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?hex="+hex+"&mode="+mode+"&count=5";
		}

	if(from == "hsl_palette") {
			var hsl = document.querySelector('input[name="hsl_palette"]').value;
			var url = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?hsl="+hsl+"&mode="+mode+"&count=5";
		}

	if(from == "hsv_palette") {
			var hsv = document.querySelector('input[name="hsv_palette"]').value;
			var url = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?hsv="+hsv+"&mode="+mode+"&count=5";
		}

	if(from == "rgb_palette") {
			var rgb = document.querySelector('input[name="rgb_palette"]').value;
			var url = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?rgb="+rgb+"&mode="+mode+"&count=5";
		}

	}



    
   // var hex = document.querySelector('input[name="hex_palette"]').value;
    var mode = document.querySelector('select[name="mode_de_palette"]').value;

    //var url = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?hex="+hex+"&mode="+mode+"&count=5";

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });
}






