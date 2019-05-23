const socket = io();

const tempEl = document.querySelector('.temperature');

socket.on('temp', (temp)=>{
	tempEl.textContent = temp.temp;
});
