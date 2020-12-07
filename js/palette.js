// PALETTE
document.getElementById('palette').style.display = 'none';

var callBackGetSuccess = function(data) {
    console.log("donnees api", data)
    document.getElementById('palette').style.display = 'block';
    var element1 = document.getElementById("affiche_palette1");
    element1.style.backgroundColor = data.colors[0].hex.value;
   // element1.innerHTML = " " + data.colors[0].hex.value;
    document.querySelector('#affiche_palette1 p').innerHTML = "<br/>"+ data.colors[0].cmyk.value + "<br/>" + data.colors[0].hex.value + "<br/>" + data.colors[0].hsl.value + "<br/>" + data.colors[0].hsv.value + "<br/>" + data.colors[0].rgb.value;
    document.querySelector('#affiche_palette1 p').style.color = data.colors[0].contrast.value;

    var element2 = document.getElementById("affiche_palette2");
    element2.style.backgroundColor = data.colors[1].hex.value;
    //element2.innerHTML = " " + data.colors[1].hex.value
    document.querySelector('#affiche_palette2 p').innerHTML = "<br/>"+ data.colors[1].cmyk.value + "<br/>" + data.colors[1].hex.value + "<br/>" + data.colors[1].hsl.value + "<br/>" + data.colors[1].hsv.value + "<br/>" + data.colors[1].rgb.value;
    document.querySelector('#affiche_palette2 p').style.color = data.colors[1].contrast.value;

    var element3 = document.getElementById("affiche_palette3");
    element3.style.backgroundColor = data.colors[2].hex.value;
    //element3.innerHTML = " " + data.colors[2].hex.value;
    document.querySelector('#affiche_palette3 p').innerHTML = "<br/>"+ data.colors[2].cmyk.value + "<br/>" + data.colors[2].hex.value + "<br/>" + data.colors[2].hsl.value + "<br/>" + data.colors[2].hsv.value + "<br/>" + data.colors[2].rgb.value;
    document.querySelector('#affiche_palette3 p').style.color = data.colors[2].contrast.value;

    var element4 = document.getElementById("affiche_palette4");
    element4.style.backgroundColor = data.colors[3].hex.value;
    //element4.innerHTML = " " + data.colors[3].hex.value;
    document.querySelector('#affiche_palette4 p').innerHTML = "<br/>"+ data.colors[3].cmyk.value + "<br/>" + data.colors[3].hex.value + "<br/>" + data.colors[3].hsl.value + "<br/>" + data.colors[3].hsv.value + "<br/>" + data.colors[3].rgb.value;
    document.querySelector('#affiche_palette4 p').style.color = data.colors[3].contrast.value;

    var element5 = document.getElementById("affiche_palette5");
    element5.style.backgroundColor = data.colors[4].hex.value;
    //element5.innerHTML = " " + data.colors[4].hex.value;
    document.querySelector('#affiche_palette5 p').innerHTML = "<br/>"+ data.colors[4].cmyk.value + "<br/>" + data.colors[4].hex.value + "<br/>" + data.colors[4].hsl.value + "<br/>" + data.colors[4].hsv.value + "<br/>" + data.colors[4].rgb.value;
    document.querySelector('#affiche_palette5 p').style.color = data.colors[4].contrast.value;

}

var callBackGetSuccess2 = function(data) {
    console.log("donnees api", data)
    document.getElementById('palette').style.display = 'block';
    var element1 = document.getElementById("affiche_palette1");
    element1.style.backgroundColor = data.colors[0].hex.value;
   // element1.innerHTML = " " + data.colors[0].hex.value;
    document.querySelector('#affiche_palette1 p').innerHTML = "<br/>"+ data.colors[0].cmyk.value + "<br/>" + data.colors[0].hex.value + "<br/>" + data.colors[0].hsl.value + "<br/>" + data.colors[0].hsv.value + "<br/>" + data.colors[0].rgb.value;
    document.querySelector('#affiche_palette1 p').style.color = data.colors[0].contrast.value;

    var element2 = document.getElementById("affiche_palette2");
    element2.style.backgroundColor = data.colors[1].hex.value;
    //element2.innerHTML = " " + data.colors[1].hex.value
    document.querySelector('#affiche_palette2 p').innerHTML = "<br/>"+ data.colors[1].cmyk.value + "<br/>" + data.colors[1].hex.value + "<br/>" + data.colors[1].hsl.value + "<br/>" + data.colors[1].hsv.value + "<br/>" + data.colors[1].rgb.value;
    document.querySelector('#affiche_palette2 p').style.color = data.colors[1].contrast.value;

    var element3 = document.getElementById("affiche_palette3");
    element3.style.backgroundColor = data.colors[2].hex.value;
    //element3.innerHTML = " " + data.colors[2].hex.value;
    document.querySelector('#affiche_palette3 p').innerHTML = "<br/>"+ data.colors[2].cmyk.value + "<br/>" + data.colors[2].hex.value + "<br/>" + data.colors[2].hsl.value + "<br/>" + data.colors[2].hsv.value + "<br/>" + data.colors[2].rgb.value;
    document.querySelector('#affiche_palette3 p').style.color = data.colors[2].contrast.value;

    var element4 = document.getElementById("affiche_palette4");
    element4.style.backgroundColor = data.colors[3].hex.value;
    //element4.innerHTML = " " + data.colors[3].hex.value;
    document.querySelector('#affiche_palette4 p').innerHTML = "<br/>"+ data.colors[3].cmyk.value + "<br/>" + data.colors[3].hex.value + "<br/>" + data.colors[3].hsl.value + "<br/>" + data.colors[3].hsv.value + "<br/>" + data.colors[3].rgb.value;
    document.querySelector('#affiche_palette4 p').style.color = data.colors[3].contrast.value;

    var element5 = document.getElementById("affiche_palette5");
    element5.style.backgroundColor = data.colors[4].hex.value;
    //element5.innerHTML = " " + data.colors[4].hex.value;
    document.querySelector('#affiche_palette5 p').innerHTML = "<br/>"+ data.colors[4].cmyk.value + "<br/>" + data.colors[4].hex.value + "<br/>" + data.colors[4].hsl.value + "<br/>" + data.colors[4].hsv.value + "<br/>" + data.colors[4].rgb.value;
    document.querySelector('#affiche_palette5 p').style.color = data.colors[4].contrast.value;

}



var callBackGetSuccess3 = function(data) {
    console.log("donnees api", data)
    document.getElementById('palette').style.display = 'block';
    var element1 = document.getElementById("affiche_palette1");
    element1.style.backgroundColor = data.colors[0].hex.value;
   // element1.innerHTML = " " + data.colors[0].hex.value;
    document.querySelector('#affiche_palette1 p').innerHTML = "<br/>"+ data.colors[0].cmyk.value + "<br/>" + data.colors[0].hex.value + "<br/>" + data.colors[0].hsl.value + "<br/>" + data.colors[0].hsv.value + "<br/>" + data.colors[0].rgb.value;
    document.querySelector('#affiche_palette1 p').style.color = data.colors[0].contrast.value;

    var element2 = document.getElementById("affiche_palette2");
    element2.style.backgroundColor = data.colors[1].hex.value;
    //element2.innerHTML = " " + data.colors[1].hex.value
    document.querySelector('#affiche_palette2 p').innerHTML = "<br/>"+ data.colors[1].cmyk.value + "<br/>" + data.colors[1].hex.value + "<br/>" + data.colors[1].hsl.value + "<br/>" + data.colors[1].hsv.value + "<br/>" + data.colors[1].rgb.value;
    document.querySelector('#affiche_palette2 p').style.color = data.colors[1].contrast.value;

    var element3 = document.getElementById("affiche_palette3");
    element3.style.backgroundColor = data.colors[2].hex.value;
    //element3.innerHTML = " " + data.colors[2].hex.value;
    document.querySelector('#affiche_palette3 p').innerHTML = "<br/>"+ data.colors[2].cmyk.value + "<br/>" + data.colors[2].hex.value + "<br/>" + data.colors[2].hsl.value + "<br/>" + data.colors[2].hsv.value + "<br/>" + data.colors[2].rgb.value;
    document.querySelector('#affiche_palette3 p').style.color = data.colors[2].contrast.value;

    var element4 = document.getElementById("affiche_palette4");
    element4.style.backgroundColor = data.colors[3].hex.value;
    //element4.innerHTML = " " + data.colors[3].hex.value;
    document.querySelector('#affiche_palette4 p').innerHTML = "<br/>"+ data.colors[3].cmyk.value + "<br/>" + data.colors[3].hex.value + "<br/>" + data.colors[3].hsl.value + "<br/>" + data.colors[3].hsv.value + "<br/>" + data.colors[3].rgb.value;
    document.querySelector('#affiche_palette4 p').style.color = data.colors[3].contrast.value;

    var element5 = document.getElementById("affiche_palette5");
    element5.style.backgroundColor = data.colors[4].hex.value;
    //element5.innerHTML = " " + data.colors[4].hex.value;
    document.querySelector('#affiche_palette5 p').innerHTML = "<br/>"+ data.colors[4].cmyk.value + "<br/>" + data.colors[4].hex.value + "<br/>" + data.colors[4].hsl.value + "<br/>" + data.colors[4].hsv.value + "<br/>" + data.colors[4].rgb.value;
    document.querySelector('#affiche_palette5 p').style.color = data.colors[4].contrast.value;


}


var callBackGetSuccess4 = function(data) {
   console.log("donnees api", data)
    document.getElementById('palette').style.display = 'block';
    var element1 = document.getElementById("affiche_palette1");
    element1.style.backgroundColor = data.colors[0].hex.value;
   // element1.innerHTML = " " + data.colors[0].hex.value;
    document.querySelector('#affiche_palette1 p').innerHTML = "<br/>"+ data.colors[0].cmyk.value + "<br/>" + data.colors[0].hex.value + "<br/>" + data.colors[0].hsl.value + "<br/>" + data.colors[0].hsv.value + "<br/>" + data.colors[0].rgb.value;
    document.querySelector('#affiche_palette1 p').style.color = data.colors[0].contrast.value;

    var element2 = document.getElementById("affiche_palette2");
    element2.style.backgroundColor = data.colors[1].hex.value;
    //element2.innerHTML = " " + data.colors[1].hex.value
    document.querySelector('#affiche_palette2 p').innerHTML = "<br/>"+ data.colors[1].cmyk.value + "<br/>" + data.colors[1].hex.value + "<br/>" + data.colors[1].hsl.value + "<br/>" + data.colors[1].hsv.value + "<br/>" + data.colors[1].rgb.value;
    document.querySelector('#affiche_palette2 p').style.color = data.colors[1].contrast.value;

    var element3 = document.getElementById("affiche_palette3");
    element3.style.backgroundColor = data.colors[2].hex.value;
    //element3.innerHTML = " " + data.colors[2].hex.value;
    document.querySelector('#affiche_palette3 p').innerHTML = "<br/>"+ data.colors[2].cmyk.value + "<br/>" + data.colors[2].hex.value + "<br/>" + data.colors[2].hsl.value + "<br/>" + data.colors[2].hsv.value + "<br/>" + data.colors[2].rgb.value;
    document.querySelector('#affiche_palette3 p').style.color = data.colors[2].contrast.value;

    var element4 = document.getElementById("affiche_palette4");
    element4.style.backgroundColor = data.colors[3].hex.value;
    //element4.innerHTML = " " + data.colors[3].hex.value;
    document.querySelector('#affiche_palette4 p').innerHTML = "<br/>"+ data.colors[3].cmyk.value + "<br/>" + data.colors[3].hex.value + "<br/>" + data.colors[3].hsl.value + "<br/>" + data.colors[3].hsv.value + "<br/>" + data.colors[3].rgb.value;
    document.querySelector('#affiche_palette4 p').style.color = data.colors[3].contrast.value;

    var element5 = document.getElementById("affiche_palette5");
    element5.style.backgroundColor = data.colors[4].hex.value;
    //element5.innerHTML = " " + data.colors[4].hex.value;
    document.querySelector('#affiche_palette5 p').innerHTML = "<br/>"+ data.colors[4].cmyk.value + "<br/>" + data.colors[4].hex.value + "<br/>" + data.colors[4].hsl.value + "<br/>" + data.colors[4].hsv.value + "<br/>" + data.colors[4].rgb.value;
    document.querySelector('#affiche_palette5 p').style.color = data.colors[4].contrast.value;

}

var callBackGetSuccess5 = function(data) {
   console.log("donnees api", data)
    document.getElementById('palette').style.display = 'block';
    var element1 = document.getElementById("affiche_palette1");
    element1.style.backgroundColor = data.colors[0].hex.value;
   // element1.innerHTML = " " + data.colors[0].hex.value;
    document.querySelector('#affiche_palette1 p').innerHTML = "<br/>"+ data.colors[0].cmyk.value + "<br/>" + data.colors[0].hex.value + "<br/>" + data.colors[0].hsl.value + "<br/>" + data.colors[0].hsv.value + "<br/>" + data.colors[0].rgb.value;
    document.querySelector('#affiche_palette1 p').style.color = data.colors[0].contrast.value;

    var element2 = document.getElementById("affiche_palette2");
    element2.style.backgroundColor = data.colors[1].hex.value;
    //element2.innerHTML = " " + data.colors[1].hex.value
    document.querySelector('#affiche_palette2 p').innerHTML = "<br/>"+ data.colors[1].cmyk.value + "<br/>" + data.colors[1].hex.value + "<br/>" + data.colors[1].hsl.value + "<br/>" + data.colors[1].hsv.value + "<br/>" + data.colors[1].rgb.value;
    document.querySelector('#affiche_palette2 p').style.color = data.colors[1].contrast.value;

    var element3 = document.getElementById("affiche_palette3");
    element3.style.backgroundColor = data.colors[2].hex.value;
    //element3.innerHTML = " " + data.colors[2].hex.value;
    document.querySelector('#affiche_palette3 p').innerHTML = "<br/>"+ data.colors[2].cmyk.value + "<br/>" + data.colors[2].hex.value + "<br/>" + data.colors[2].hsl.value + "<br/>" + data.colors[2].hsv.value + "<br/>" + data.colors[2].rgb.value;
    document.querySelector('#affiche_palette3 p').style.color = data.colors[2].contrast.value;

    var element4 = document.getElementById("affiche_palette4");
    element4.style.backgroundColor = data.colors[3].hex.value;
    //element4.innerHTML = " " + data.colors[3].hex.value;
    document.querySelector('#affiche_palette4 p').innerHTML = "<br/>"+ data.colors[3].cmyk.value + "<br/>" + data.colors[3].hex.value + "<br/>" + data.colors[3].hsl.value + "<br/>" + data.colors[3].hsv.value + "<br/>" + data.colors[3].rgb.value;
    document.querySelector('#affiche_palette4 p').style.color = data.colors[3].contrast.value;

    var element5 = document.getElementById("affiche_palette5");
    element5.style.backgroundColor = data.colors[4].hex.value;
    //element5.innerHTML = " " + data.colors[4].hex.value;
    document.querySelector('#affiche_palette5 p').innerHTML = "<br/>"+ data.colors[4].cmyk.value + "<br/>" + data.colors[4].hex.value + "<br/>" + data.colors[4].hsl.value + "<br/>" + data.colors[4].hsv.value + "<br/>" + data.colors[4].rgb.value;
    document.querySelector('#affiche_palette5 p').style.color = data.colors[4].contrast.value;

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
        
      })
      .always(function() {
        //alert( "finished" );
      });


      $.get(url2, callBackGetSuccess2).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        
      })
      .always(function() {
        //alert( "finished" );
      });

      $.get(url3, callBackGetSuccess3).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        
      })
      .always(function() {
        //alert( "finished" );
      });

      $.get(url4, callBackGetSuccess4).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        
      })
      .always(function() {
        //alert( "finished" );
      });

      $.get(url5, callBackGetSuccess5).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        
      })
      .always(function() {
        //alert( "finished" );
      });
}
