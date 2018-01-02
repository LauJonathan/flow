/*@flow*/
function greeter(person) {
	if (person != null) {
    	return "Hello, " + person;
	}
	return '';
}
var user = "world!";
document.body.innerHTML = greeter(user);
