
var regNom= /[a-zA-Z]{5,8}/;
var regVille= /[a-zA-Z]{3,8}/;
var regPoste= /[0-9]{4,8}/;
var regEmail= /\w+@\w+\.(net|com|fr)/;
var regPhon= /(?=.*(06|07|05))[0-9]{10,10}/;
function inptchamp(_champ,_regexp){
	if(_champ.value===""){
		_champ.style.borderColor="red";
	}
	else if(_champ.value!="" && !_regexp.test(_champ.value)){
	  _champ.style.borderColor="red";
	}
	else{
	  _champ.style.borderColor="green";
	}
}


var nom = document.getElementById("name");
  var street = document.getElementById("street");
  var  email = document.getElementById("email");
  var Telephone=document.getElementById("phone");
  var Adresse=document.getElementById("city");
  var zcode=document.getElementById("post-code");
  function clickAlert(){
if(nom.value==="" || street.value==="" || email.value==="" || Adresse.value==="" || zcode.value==="" || dated(datedebut,datefin)==false){
    alert("remplir Tou les champs");
}else{
    if(dated(datedebut,datefin)==true)
 alert("Votre Commande Est Validé");
 vider();
}
  }

  function vider(){
    nom.value="";
    street.value="";
    email.value="";
    datedebut.value="";
    datefin.value="";
	zcode.value="";
	Adresse.value="";
}
var datedebut=document.getElementById("arrive");
var datefin=document.getElementById("depart");

function dated(_datedebut,_datefin){
    if(_datedebut.value>_datefin.value || _datedebut.value===_datefin.value){
      _datedebut.style.border="1px solid red";
      _datefin.style.border="1px solid red";
      return false;
    }
    else{
        _datedebut.style.border="1px solid green";
        _datefin.style.border="1px solid green";
        return true;
    }
}
