//your JS code here. If required.
const panel = document.querySelectorAll('.panel');

panel.forEach((pic)=>{
	pic.addEventListener('click', ()=>{
		removeactive();
		pic.classList.add('active');
	});
});

function removeactive(){
	panel.forEach((pic)=>{
		pic.classList.remove('active');
	});
}