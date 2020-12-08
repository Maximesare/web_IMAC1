// PALETTE
document.getElementById('palette').style.display = "none";

var callBackGetSuccess = function(data) {
    if (typeof data.colors !== 'undefined') {

        // on cache le loader
        document.querySelector('#loader-palette').classList.add("hidden");

        // on affiche les resultats
        document.getElementById('palette').style.display = "block";

        document.querySelector('#palette-color-sample h2').innerHTML = data.mode+", d'après "+data.seed.name.value;
        document.querySelector('#palette-color-sample h2').style.color = data.seed.contrast.value;
        document.querySelector('#palette-color-sample').style.backgroundColor = data.seed.rgb.value;
        console.log(data);

        var element1 = document.getElementById("affiche_palette1");
        element1.style.backgroundColor = data.colors[0].rgb.value;
        document.querySelector('#affiche_palette1 p').innerHTML = "<span>"+ data.colors[0].cmyk.value + "</span><span>" + data.colors[0].hex.value + "</span><span>" + data.colors[0].hsl.value + "</span><span>" + data.colors[0].hsv.value + "</span><span>" + data.colors[0].rgb.value + "</span>";
        document.querySelector('#affiche_palette1 p').style.color = data.colors[0].contrast.value;

        var element2 = document.getElementById("affiche_palette2");
        element2.style.backgroundColor = data.colors[1].rgb.value;
        document.querySelector('#affiche_palette2 p').innerHTML = "<span>"+ data.colors[1].cmyk.value + "</span><span>" + data.colors[1].hex.value + "</span><span>" + data.colors[1].hsl.value + "</span><span>" + data.colors[1].hsv.value + "</span><span>" + data.colors[1].rgb.value + "</span>";
        document.querySelector('#affiche_palette2 p').style.color = data.colors[1].contrast.value;

        var element3 = document.getElementById("affiche_palette3");
        element3.style.backgroundColor = data.colors[2].rgb.value;
        document.querySelector('#affiche_palette3 p').innerHTML = "<span>"+ data.colors[2].cmyk.value + "</span><span>" + data.colors[2].hex.value + "</span><span>" + data.colors[2].hsl.value + "</span><span>" + data.colors[2].hsv.value + "</span><span>" + data.colors[2].rgb.value + "</span>";
        document.querySelector('#affiche_palette3 p').style.color = data.colors[2].contrast.value;

        var element4 = document.getElementById("affiche_palette4");
        element4.style.backgroundColor = data.colors[3].rgb.value;
        document.querySelector('#affiche_palette4 p').innerHTML = "<span>"+ data.colors[3].cmyk.value + "</span><span>" + data.colors[3].hex.value + "</span><span>" + data.colors[3].hsl.value + "</span><span>" + data.colors[3].hsv.value + "</span><span>" + data.colors[3].rgb.value + "</span>";
        document.querySelector('#affiche_palette4 p').style.color = data.colors[3].contrast.value;

        var element5 = document.getElementById("affiche_palette5");
        element5.style.backgroundColor = data.colors[4].rgb.value;
        document.querySelector('#affiche_palette5 p').innerHTML = "<span>"+ data.colors[4].cmyk.value + "</span><span>" + data.colors[4].hex.value + "</span><span>" + data.colors[4].hsl.value + "</span><span>" + data.colors[4].hsv.value + "</span><span>" + data.colors[4].rgb.value + "</span>";
        document.querySelector('#affiche_palette5 p').style.color = data.colors[4].contrast.value;
    }
}


function buttonClickGET() {

    // affichage du loader
    document.querySelector('#loader-palette').classList.remove("hidden");

    // on cache les eventuels resultats precedents
    document.getElementById('palette').style.display = "none";

    var mode = document.querySelector('select[name="mode_de_palette"]').value;

    var cmyk = document.querySelector('input[name="cmyk_palette"]').value;
    var hex = document.querySelector('input[name="hex_palette"]').value;
    var hsl = document.querySelector('input[name="hsl_palette"]').value;
    var hsv = document.querySelector('input[name="hsv_palette"]').value;
    var rgb = document.querySelector('input[name="rgb_palette"]').value;

    if(hex != "") {
        var url = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?hex="+hex+"&mode="+mode+"&count=5";
    }
    else if(cmyk != "") {
        var url = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?cmyk="+cmyk+"&mode="+mode+"&count=5";
    }
    else if(hsl != "") {
        var url = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?hsl="+hsl+"&mode="+mode+"&count=5";
    }
    else if(hsv != "") {
        var url = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?hsv="+hsv+"&mode="+mode+"&count=5";
    }
    else if(rgb != "") {
        var url = "https://cors-anywhere.herokuapp.com/https://www.thecolorapi.com/scheme?rgb="+rgb+"&mode="+mode+"&count=5";
    }   

    $.get(url, callBackGetSuccess).done(function() {
        
    })
    .fail(function() {

    })
    .always(function() {
        
    });
}




