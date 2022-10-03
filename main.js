var canvas=document.getElementById("meuCanvas");
var ctx=canvas.getContext("2d");

var img_width;
var img_height;

var img_image;

var img_x = 100;
var img_y = 100;

var img_imgTag;

function add(largura, altura) {
	img_imgTag = new Image();
	img_width=largura;
	img_height=altura;
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	var keyPressed = e.keyCode;
	console.log(keyPressed);
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)) {
		aplhabetkey();
		document.getElementById("d1").innerHTML="Você pressiono uma tecla do alfabeto";
		} else if(keyPressed>=48 && keyPressed<=57) {
			numberkey();
			document.getElementById("d1").innerHTML="Você pressiono uma tecla de número";
		}
		else if(keyPressed>=37 && keyPressed<=40) {
			arrowkey();
			document.getElementById("d1").innerHTML="Você pressiono uma tecla direcional";
		} else if(keyPressed==17 || keyPressed==18 || keyPressed==27) {
			specialkey();
			document.getElementById("d1").innerHTML="Você pressiono Ctrl / Esc / Alt";
			}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="Você pressiono um simbolo ou outra tecla";
	}
}

function aplhabetkey()
{
	console.log("alfabeto");
	img_image="alfabeto.png";
	add(800, 400);
}
function numberkey()
{
	img_image="numero.png";
	add(800, 400);	
}
function arrowkey()
{
	img_image="DIRecional.png";
	add(800, 400);
}
function specialkey()
{
	img_image="especial.png";
	add(800, 400);
}
function otherkey()
{
	img_image="outras.png";
	add(800, 400);
}