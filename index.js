const removeMain = document.getElementById("main");
removeMain.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

document.body.appendChild(newHeader);

newHeader.textContent = "Paige is the champion";
document.body.appendChild(newHeader);





