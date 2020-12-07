// PALETTE

var cmykElt = document.getElementById("cmyk_palette");
// Affichage d'un message contextuel pour la saisie
cmykElt.addEventListener("focus", function () {
    document.getElementById("aideCMYK").textContent = "Ex: 100,58,0,33";
});
// Suppression du message contextuel pour la saisie
cmykElt.addEventListener("blur", function (e) {
    document.getElementById("aideCMYK").textContent = "";
});


var cmykElt = document.getElementById("hex_palette");
// Affichage d'un message contextuel pour la saisie
cmykElt.addEventListener("focus", function () {
    document.getElementById("aideHEX").textContent = "Ex: 0047AB";
});
// Suppression du message contextuel pour la saisie
cmykElt.addEventListener("blur", function (e) {
    document.getElementById("aideHEX").textContent = "";
});

var cmykElt = document.getElementById("hsl_palette");
// Affichage d'un message contextuel pour la saisie
cmykElt.addEventListener("focus", function () {
    document.getElementById("aideHSL").textContent = "Ex: 215,100%,34%";
});
// Suppression du message contextuel pour la saisie
cmykElt.addEventListener("blur", function (e) {
    document.getElementById("aideHSL").textContent = "";
});

var cmykElt = document.getElementById("hsv_palette");
// Affichage d'un message contextuel pour la saisie
cmykElt.addEventListener("focus", function () {
    document.getElementById("aideHSV").textContent = "Ex: ";
});
// Suppression du message contextuel pour la saisie
cmykElt.addEventListener("blur", function (e) {
    document.getElementById("aideHSV").textContent = "";
});

var cmykElt = document.getElementById("rgb_palette");
// Affichage d'un message contextuel pour la saisie
cmykElt.addEventListener("focus", function () {
    document.getElementById("aideRGB").textContent = "Ex: 0,71,171";
});
// Suppression du message contextuel pour la saisie
cmykElt.addEventListener("blur", function (e) {
    document.getElementById("aideRGB").textContent = "";
});





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

}

var callBackGetSuccess2 = function(data) {
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

}



var callBackGetSuccess3 = function(data) {
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

}


var callBackGetSuccess4 = function(data) {
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

}

var callBackGetSuccess5 = function(data) {
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

}

function buttonClickGET() {
    
    var mode = document.querySelector('select[name="mode_de_palette"]').value;

    var cmyk = document.querySelector('input[name="cmyk_palette"]').value;
    var hsl = document.querySelector('input[name="hsl_palette"]').value;
    var hsv = document.querySelector('input[name="hsv_palette"]').value;
    var rgb = document.querySelector('input[name="rgb_palette"]').value;
 	var hex = document.querySelector('input[name="hex_palette"]').value;

    var url = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?hex="+hex+"&mode="+mode+"&count=5";
    var url2 = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?cmyk="+cmyk+"&mode="+mode+"&count=5";
    var url3 = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?hsl="+hsl+"&mode="+mode+"&count=5";
    var url4 = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?hsv="+hsv+"&mode="+mode+"&count=5";
    var url5 = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?rgb="+rgb+"&mode="+mode+"&count=5";   

       $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });


      $.get(url2, callBackGetSuccess2).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });

      $.get(url3, callBackGetSuccess3).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });

      $.get(url4, callBackGetSuccess4).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });

      $.get(url5, callBackGetSuccess5).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });
}
