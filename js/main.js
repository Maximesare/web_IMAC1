// ONGLETS
var navbar = document.getElementById("navbar");
var contenu_onglets = document.getElementsByClassName("contenu_onglet");
var sticky = navbar.offsetTop;

window.onscroll = function StickyBar() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		for (var i = 0, length = contenu_onglets.length; i < length; i++) {
			contenu_onglets[i].classList.add("shifty");
		}
	}
	else {
		navbar.classList.remove("sticky");
		for (var i = 0, length = contenu_onglets.length; i < length; i++) {
			contenu_onglets[i].classList.remove("shifty");
		}
	}
};

function change_onglet(name) {
	document.getElementById('onglet_'+anc_onglet).className = 'onglet_0 onglet';
	document.getElementById('onglet_'+name).className = 'onglet_1 onglet';
	document.getElementById('contenu_'+anc_onglet).style.display = 'none';
	document.getElementById('contenu_'+name).style.display = 'block';
	anc_onglet = name;
}

var onglet = 'conversion';
switch(onglet) {
	case 'conversion':
	  var anc_onglet = 'conversion';
	  break;
	case 'palette':
	  var anc_onglet = 'palette';
	  break;
	default:
	  var anc_onglet = 'conversion';
}

change_onglet(anc_onglet);




