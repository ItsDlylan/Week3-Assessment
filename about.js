console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover', ()=>{
	alert('heres an additional compliment you gorgeous mammal. ')
})