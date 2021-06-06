var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("https://lh6.googleusercontent.com/nZBMWXkY5Jcxp56sbj_o8aJQs9SUzvb-YcJuXpLP7o1M8sgtSIWnyOHHdEnRtWLbHndXyUpbT4pnZ35flBjM=w1440-h788-rw", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}