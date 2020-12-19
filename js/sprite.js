function Sprite(img){
	//Atributos
	this.mvLeft = this.mvRight = this.mvUp = this.mvDown = false;
	this.srcX = this.srcY = 0;
	this.width = 31;
	this.height = 32;
	this.posX = this.posY = 0;
	this.img =  img;
	this.speed = 2;
	this.countAnim = 0;
	this.visible = true;
	this.talk = false;
	//Desenho
	this.draw = function(ctx){
		ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height,this.posX,this.posY, this.width, this.height);
		this.animation();
	}
	//Animação com a Sprite
	this.move = function(){
		if (this.mvRight) {
			this.posX += this.speed;
			this.srcY = this.height * 2;
		} else
		if (this.mvLeft) {
			this.posX -= this.speed;
			this.srcY = this.height * 1;
		} else
		if (this.mvUp) {
			this.posY -= this.speed;
			this.srcY = this.height * 3;
		} else
		if (this.mvDown) {
			this.posY += this.speed;
			this.srcY = this.height * 0;
		}
	}
	
	this.animation = function(){
		if (this.mvLeft || this.mvDown || this.mvUp || this.mvRight) {
			this.countAnim++;

			if(this.countAnim >= 40){
				this.countAnim = 0;
			}
			this.srcX = Math.floor(this.countAnim / 10) * this.width;
		}
	}
}

Sprite.prototype.halfWidth = function(){
	return this.width/2;
}
Sprite.prototype.halfHeight = function(){
	return this.height/2;
}
Sprite.prototype.centerX = function(){
	return this.posX + this.halfWidth();
};
Sprite.prototype.centerY = function(){
	return this.posY + this.halfHeight();
};

function Botao(x,y,w,h){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
}
