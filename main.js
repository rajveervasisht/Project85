var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
car_width = 100;
car_height = 150;
car_x = 100;
car_y = 350;

background_image = "parkingLot.jpg";
car_img = "car2.png";

function add() {
	background_img_Tag = new Image()
	background_img_Tag.onload = upload_background;
	background_img_Tag.src = background_image;

	car_img_Tag = new Image()
	car_img_Tag.onload = upload_car;
	car_img_Tag.src = "car2.png";
}
function upload_background() {
	ctx.drawImage(background_img_Tag, 0, 0, canvas.width, canvas.height);
}
function upload_car() {
	ctx.drawImage(car_img_Tag, car_x, car_y, car_width, car_height);
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (car_y >= 0) {
		car_y = car_y - 10;
		upload_background();
		upload_car();
	}
}

function down() {
	if (car_y <= 500) {
		car_y = car_y + 10;
		upload_background();
		upload_car();
	}
}

function left() {
	if (car_x >= 0) {
		car_x = car_x - 10;
		upload_background();
		upload_car();
	}
}

function right() {
	if (car_x <= 700) {
		car_x = car_x + 10;
		upload_background();
		upload_car();
	}
}