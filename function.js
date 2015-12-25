function addCustomClass (element, className) {
	element.classList.add(className);
}

function removeClass (elements, className) {
	for (var i = elements.length - 1; i >= 0; i--) {
		elements[i].classList.remove(className);
	};
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validation(){

	removeElements(document.getElementsByClassName("removemsg"));
	removeClass(document.getElementsByTagName("input"), "wrong");
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var password= document.getElementById("password").value;

	var check = true;

	if(name=="" && email=="" && phone=="" && password==""){
		addCustomClass(document.getElementById("name"), "wrong");
		addCustomClass(document.getElementById("email"), "wrong");
		addCustomClass(document.getElementById("phone"), "wrong");
		addCustomClass(document.getElementById("password"), "wrong");
		errmsg("name");
		errmsg("email");
		errmsg("phone");
		errmsg("password");
		return false;	
	}

	if (!validateEmail(email)){
		addCustomClass(document.getElementById("email"), "wrong");
		errmsg("email");
		check = false;
	}

	if(name.length<3 || name==" "){
		addCustomClass(document.getElementById("name"), "wrong");
		errmsg("name");
		check = false;
	}

	if(phone.length<10 || phone.length>10){
		addCustomClass(document.getElementById("phone"), "wrong");
		errmsg("phone");
		check = false;
	}

	return check;
}

var msgs={
	name:"enter a valid name",
	email:"enter a valid email",
	phone:"enter a valid phone number",
	password:"enter a valid password"
};

function errmsg(id){
	var x = document.createElement("div");
	var y = document.createTextNode(msgs[id]);
	x.appendChild(y);
	document.getElementById(id).parentNode.appendChild(x);
	addCustomClass(x ,"removemsg");
}

function removeElements (elements) {
	for (var i = elements.length - 1; i >= 0; i--) {
		elements[i].remove();
	};
}