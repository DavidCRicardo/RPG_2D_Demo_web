window.onload = function(){
	var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40, X = 88, Z = 90, ENTER = 13;
	var cnv = document.querySelector("canvas");
	var ctx = cnv.getContext("2d");
	var score = 0;
	var done1 = false; var firstTime1 = true;
	/*
	var music = new Audio(); //MUSICA IRRITANTE!!
	music.src = "sfx/music.ogg";	
	*/

	//teste de loading ------
	var v1 = v2 = color = 0;
	var one = true;
	//fim do teste de loading
	//estados do jogo
	var LOADING = 0;
	var START = 1;
	var PLAYING = 3;
	var OVER = 4;
	var gameState = LOADING;

	//Array de blocos
	var boxes = [];
	var blocks = [];
	var sprites = [];
	var coins = [];
	var littletreasure = [];
	var tendas = [];
	var npcs = [];
	var itens = [];
	var inventory = [];
	var loadedAssets = 0;
	var assetsToLoad = [];

	//imagens
	var startImg = new Image();
	startImg.addEventListener('load',loadHandler,false);
	startImg.src = "img/startImg.png";assetsToLoad.push(startImg);
	sprites.push(startImg);

	var caminhodepedras = new Image();
	caminhodepedras.addEventListener('load',loadHandler,false);
	caminhodepedras.src = "img/caminhodepedras.png";assetsToLoad.push(caminhodepedras);
	var caminhodepedras1 = new Sprite(caminhodepedras);
	sprites.push(caminhodepedras1);

	var spriteSheet = new Image();
	spriteSheet.addEventListener('load',loadHandler,false);
/*
spriteSheet.src = "img/heroes/player1.png";
spriteSheet.src = "img/heroes/player2.png";
spriteSheet.src = "img/heroes/player3.png";  //npc2
spriteSheet.src = "img/heroes/player4.png";
spriteSheet.src = "img/heroes/player5.png"; // este dá 1ªmissao
spriteSheet.src = "img/heroes/player6.png";
spriteSheet.src = "img/heroes/player7.png"; //npc1
*/ 
spriteSheet.src = "img/heroes/player8.png";assetsToLoad.push(spriteSheet);
var player = new Sprite(spriteSheet);sprites.push(player);
player.quit = false;

var bau1_0 = new Image();
bau1_0.addEventListener('load',loadHandler,false);
bau1_0.src = "img/image.png";assetsToLoad.push(bau1_0);
var bau1_1 = new Sprite(bau1_0);sprites.push(bau1_1);littletreasure.push(bau1_1);

//Mochila
var bt = new Botao(980,550,28,28);
var btt = new Image();
btt.addEventListener('load',loadHandler,false);
btt.src = "img/bag.png";assetsToLoad.push(btt);

//NPC's
var spriteSheet2 = new Image();
spriteSheet2.addEventListener('load',loadHandler,false);
spriteSheet2.src = "img/heroes/player7.png";assetsToLoad.push(spriteSheet2);
var npc1 = new Sprite(spriteSheet2);sprites.push(npc1);npcs.push(npc1);
npc1.talk = true;

var spriteSheet3 = new Image();
spriteSheet3.addEventListener('load',loadHandler,false);
spriteSheet3.src = "img/heroes/player3.png";assetsToLoad.push(spriteSheet3);
var npc2 = new Sprite(spriteSheet3);sprites.push(npc2);npcs.push(npc2);

var spriteSheet4 = new Image();
spriteSheet4.addEventListener('load',loadHandler,false);
spriteSheet4.src = "img/heroes/player5.png";assetsToLoad.push(spriteSheet4);
var npc3 = new Sprite(spriteSheet4);sprites.push(npc3);npcs.push(npc3);
npc3.talk=true;//NPC TEM MISSAO

//Cenário
var scene = new Image();
scene.addEventListener('load',loadHandler,false);
scene.src = "img/map1.jpg";assetsToLoad.push(scene);

var arvores01 = new Image();
arvores01.addEventListener('load',loadHandler,false);
arvores01.src = "img/Vert10Arvores.png";assetsToLoad.push(arvores01);
var vert10Arvores1 = new Sprite(arvores01);sprites.push(vert10Arvores1);blocks.push(vert10Arvores1);
var vert10Arvores2 = new Sprite(arvores01);sprites.push(vert10Arvores2);blocks.push(vert10Arvores2);
var vert10Arvores3 = new Sprite(arvores01);sprites.push(vert10Arvores3);blocks.push(vert10Arvores3);
var vert10Arvores4 = new Sprite(arvores01);sprites.push(vert10Arvores4);blocks.push(vert10Arvores4);

var arvores02 = new Image();
arvores02.addEventListener('load',loadHandler,false);
arvores02.src = "img/Hori10Arvores.png";assetsToLoad.push(arvores02);
var hori10Arvores1 = new Sprite(arvores02);sprites.push(hori10Arvores1);blocks.push(hori10Arvores1);
var hori10Arvores2 = new Sprite(arvores02);sprites.push(hori10Arvores2);blocks.push(hori10Arvores2);
var hori10Arvores3 = new Sprite(arvores02);sprites.push(hori10Arvores3);blocks.push(hori10Arvores3);
var hori10Arvores4 = new Sprite(arvores02);sprites.push(hori10Arvores4);blocks.push(hori10Arvores4);
var hori10Arvores5 = new Sprite(arvores02);sprites.push(hori10Arvores5);blocks.push(hori10Arvores5);
var hori10Arvores6 = new Sprite(arvores02);sprites.push(hori10Arvores6);blocks.push(hori10Arvores6);
var hori10Arvores7 = new Sprite(arvores02);sprites.push(hori10Arvores7);blocks.push(hori10Arvores7);

var arvore1_0 = new Image();
arvore1_0.addEventListener('load',loadHandler,false);
arvore1_0.src = "img/arvore1_0.png";assetsToLoad.push(arvore1_0);
var arvore1_1 = new Sprite(arvore1_0);sprites.push(arvore1_1);blocks.push(arvore1_1);
var arvore1_2 = new Sprite(arvore1_0);sprites.push(arvore1_2);blocks.push(arvore1_2);
var arvore1_3 = new Sprite(arvore1_0);sprites.push(arvore1_3);blocks.push(arvore1_3);
var arvore1_4 = new Sprite(arvore1_0);sprites.push(arvore1_4);blocks.push(arvore1_4);
var arvore1_5 = new Sprite(arvore1_0);sprites.push(arvore1_5);blocks.push(arvore1_5);
var arvore1_6 = new Sprite(arvore1_0);sprites.push(arvore1_6);blocks.push(arvore1_6);
var arvore1_7 = new Sprite(arvore1_0);sprites.push(arvore1_7);blocks.push(arvore1_7);

var arvore2_0 = new Image();
arvore2_0.addEventListener('load',loadHandler,false);
arvore2_0.src = "img/arvore2_0.png";assetsToLoad.push(arvore2_0);
var arvore2_1 = new Sprite(arvore2_0);sprites.push(arvore2_1);blocks.push(arvore2_1);
var arvore2_2 = new Sprite(arvore2_0);sprites.push(arvore2_2);blocks.push(arvore2_2);
var arvore2_3 = new Sprite(arvore2_0);sprites.push(arvore2_3);blocks.push(arvore2_3);
var arvore2_4 = new Sprite(arvore2_0);sprites.push(arvore2_4);blocks.push(arvore2_4);
var arvore2_5 = new Sprite(arvore2_0);sprites.push(arvore2_5);blocks.push(arvore2_5);
var arvore2_6 = new Sprite(arvore2_0);sprites.push(arvore2_6);blocks.push(arvore2_6);
var arvore2_7 = new Sprite(arvore2_0);sprites.push(arvore2_7);blocks.push(arvore2_7);

var arvore3_0 = new Image();
arvore3_0.addEventListener('load',loadHandler,false);
arvore3_0.src = "img/arvore3_0.png";assetsToLoad.push(arvore3_0);
var arvore3_1 = new Sprite(arvore3_0);sprites.push(arvore3_1);blocks.push(arvore3_1);
var arvore3_2 = new Sprite(arvore3_0);sprites.push(arvore3_2);blocks.push(arvore3_2);
var arvore3_3 = new Sprite(arvore3_0);sprites.push(arvore3_3);blocks.push(arvore3_3);

var torre0_0 = new Image();
torre0_0.addEventListener('load',loadHandler,false);
torre0_0.src = "img/torre0_0.png";assetsToLoad.push(torre0_0);
var torre0_1 = new Sprite(torre0_0);sprites.push(torre0_1);blocks.push(torre0_1);
var torre0_2 = new Sprite(torre0_0);sprites.push(torre0_2);blocks.push(torre0_2);

var setas1_0 = new Image();
setas1_0.addEventListener('load',loadHandler,false);
setas1_0.src = "img/setas.png";assetsToLoad.push(setas1_0);
var setas1_1 = new Sprite(setas1_0);sprites.push(setas1_1);blocks.push(setas1_1);

var arbusto1_0 = new Image();
arbusto1_0.addEventListener('load',loadHandler,false);
arbusto1_0.src = "img/arbusto.png";assetsToLoad.push(arbusto1_0);
var arbusto1_1 = new Sprite(arbusto1_0);sprites.push(arbusto1_1);blocks.push(arbusto1_1);

var arbustos01 = new Image();
arbustos01.addEventListener('load',loadHandler,false);
arbustos01.src = "img/Vert3Arbustos.png";assetsToLoad.push(arbustos01);
var vert3arbustos1 = new Sprite(arbustos01);sprites.push(vert3arbustos1);blocks.push(vert3arbustos1);
var vert3arbustos2 = new Sprite(arbustos01);sprites.push(vert3arbustos2);blocks.push(vert3arbustos2);

var pilarpartido0_0 = new Image();
pilarpartido0_0.addEventListener('load',loadHandler,false);
pilarpartido0_0.src = "img/pilarpartido0_0.png";assetsToLoad.push(pilarpartido0_0);
var pilarpartido0_1 = new Sprite(pilarpartido0_0);sprites.push(pilarpartido0_1);blocks.push(pilarpartido0_1);
var pilarpartido0_2 = new Sprite(pilarpartido0_0);sprites.push(pilarpartido0_2);blocks.push(pilarpartido0_2);
var pilarpartido0_3 = new Sprite(pilarpartido0_0);sprites.push(pilarpartido0_3);blocks.push(pilarpartido0_3);

var pilar0_0 = new Image();
pilar0_0.addEventListener('load',loadHandler,false);
pilar0_0.src = "img/pilar0_0.png";assetsToLoad.push(pilar0_0);
var pilar0_1 = new Sprite(pilar0_0);sprites.push(pilar0_1);blocks.push(pilar0_1);
var pilar0_2 = new Sprite(pilar0_0);sprites.push(pilar0_2);blocks.push(pilar0_2);

var oo0_0 = new Image();
oo0_0.addEventListener('load',loadHandler,false);
oo0_0.src = "img/oo0_0.png";assetsToLoad.push(oo0_0);
var oo0_1 = new Sprite(oo0_0);sprites.push(oo0_1);blocks.push(oo0_1);

var tnd = new Image();
tnd.addEventListener('load',loadHandler,false);
tnd.src = "img/tenda1.png";assetsToLoad.push(tnd);
var tenda1 = new Sprite(tnd);sprites.push(tenda1);blocks.push(tenda1);

var boxx = new Image();
boxx.addEventListener('load',loadHandler,false);
boxx.src = "img/pedra13.png";assetsToLoad.push(boxx);
var box1 = new Sprite(boxx);sprites.push(box1);boxes.push(box1);

var _coin = new Image();
_coin.addEventListener('load',loadHandler,false);
_coin.src = "img/coin1.png";assetsToLoad.push(_coin);
var coin1 = new Sprite(_coin);sprites.push(coin1);coins.push(coin1);
var coin2 = new Sprite(_coin);sprites.push(coin2);coins.push(coin2);

var _axe = new Image();
_axe.addEventListener('load',loadHandler,false);
_axe.src = "img/axe.png";assetsToLoad.push(_axe);
var axe1 = new Sprite(_axe);sprites.push(axe1);itens.push(axe1);

var casa = new Image();
casa.addEventListener('load',loadHandler,false);
casa.src = "img/casa.png";assetsToLoad.push(casa);
var casa1 = new Sprite(casa);sprites.push(casa1);blocks.push(casa1);

var estendal1_0 = new Image();
estendal1_0.addEventListener('load',loadHandler,false);
estendal1_0.src = "img/estendal.png";assetsToLoad.push(estendal1_0);
var estendal1_1 = new Sprite(estendal1_0);sprites.push(estendal1_1);blocks.push(estendal1_1);
var estendal2_0 = new Image();
estendal2_0.addEventListener('load',loadHandler,false);
estendal2_0.src = "img/estendal1.png";assetsToLoad.push(estendal2_0);
var estendal2_1 = new Sprite(estendal2_0);sprites.push(estendal2_1);blocks.push(estendal2_1);

var troncos = new Image();
troncos.addEventListener('load',loadHandler,false);
troncos.src = "img/troncos_empilhados.png";assetsToLoad.push(troncos);
var troncos1 = new Sprite(troncos);sprites.push(troncos1);blocks.push(troncos1);

var fogueira = new Image();
fogueira.addEventListener('load',loadHandler,false);
fogueira.src = "img/fogueira_apagada.png";assetsToLoad.push(fogueira);
var fogueira1 = new Sprite(fogueira);sprites.push(fogueira1);blocks.push(fogueira1);

var cepo = new Image();
cepo.addEventListener('load',loadHandler,false);
cepo.src = "img/cepo.png";assetsToLoad.push(cepo);
var cepo1 = new Sprite(cepo);sprites.push(cepo1);blocks.push(cepo1);
var cepo2 = new Sprite(cepo);sprites.push(cepo2);blocks.push(cepo2);
var cepo3 = new Sprite(cepo);sprites.push(cepo3);blocks.push(cepo3);

//função para exibir a tela inicial
function loadHandler(){
	loadedAssets++;
	if(loadedAssets === assetsToLoad.length){
		for(var i in assetsToLoad){
			var image = assetsToLoad[i];
			image.removeEventListener('load',loadHandler,false);
		}
		setTimeout(function(){gameState = START;},3300);
	}
}


var cam = {
	x: 0,
	y: 0,
	width: cnv.width,
	height: cnv.height,
	leftEdge: function(){
		return this.x + (this.width * 0.25);
	},
	rightEdge: function(){
		return this.x + (this.width * 0.75);
	},
	topEdge: function(){
		return this.y + (this.height * 0.25);
	},
	bottomEdge: function(){
		return this.y + (this.height * 0.75);
	}
};
cam.x = (scene.width - cam.width)/2;
cam.y = (scene.height - cam.height)/2;
/*Centrar jogador
	player.posX = (scene.width - cam.width)/2;
	player.posY = (scene.height - cam.height)/2;
	*/
//Movimentos------------------------------------------------->>>
window.addEventListener("keydown",keydownHandler,false);
window.addEventListener("keyup",keyupHandler,false);

function keydownHandler(e){
	switch(e.keyCode){
		case RIGHT: 
		player.mvRight = true;
		player.mvLeft = false;
		player.mvUp = false;
		player.mvDown = false;
		break;
		case LEFT: 
		player.mvRight = false;
		player.mvLeft = true;
		player.mvUp = false;
		player.mvDown = false;
		break;
		case UP:
		player.mvRight = false;
		player.mvLeft = false;
		player.mvUp = true;
		player.mvDown = false;
		break;
		case DOWN:
		player.mvRight = false;
		player.mvLeft = false;
		player.mvUp = false;
		player.mvDown = true;
		break;
		case X:
		player.talk = true;
		npc3.talk = true;//NPC TEM MISSAO
		break;
		case Z:
		player.quit = true;
		break;
	}
}

function keyupHandler(e){
	switch(e.keyCode){
		case RIGHT: 
		player.mvRight = false;
		break;
		case LEFT: 
		player.mvLeft = false;
		break;
		case UP:
		player.mvUp = false;
		break;
		case DOWN:
		player.mvDown = false;
		break;
		case X:
		player.talk = false;
		break;
		case Z:
		player.quit = false;
		break;
		case ENTER:
		if(gameState === START){
			gameState = PLAYING;
		}
	}
}
//Movimentos-------------------------------------------------^^^
/*spriteSheet.onload = function(){
	init();
}*/

function init(){
	axe1.posX = 1350;
	axe1.posY = 775;
	player.posX = player.posY = 200;

	bau1_1.width = 33; bau1_1.height = 27;
	bau1_1.posX = bau1_1.posY = 70;

	/*Coluna de 10arvores*/
	vert10Arvores1.height = vert10Arvores2.height = vert10Arvores3.height = vert10Arvores4.height = 600;
	vert10Arvores1.width = vert10Arvores2.width = vert10Arvores3.width = vert10Arvores4.width = 61;
	vert10Arvores1.posX = -10;
	vert10Arvores1.posY = -10;
	vert10Arvores2.posX = -10;
	vert10Arvores2.posY = 590;	//Esquerda
	vert10Arvores3.posX = 2600;
	vert10Arvores3.posY = -10;
	vert10Arvores4.posX = 2600;
	vert10Arvores4.posY = 590;	//Direita

	/*Linha de 10arvores*/
	hori10Arvores1.height = hori10Arvores2.height = hori10Arvores3.height = hori10Arvores4.height = hori10Arvores5.height = hori10Arvores6.height = hori10Arvores7.height = 60;
	hori10Arvores1.width = hori10Arvores2.width = hori10Arvores3.width = hori10Arvores4.width = hori10Arvores5.width = hori10Arvores6.width = hori10Arvores7.width = 610;
	hori10Arvores1.posX = -10;
	hori10Arvores1.posY = hori10Arvores2.posY = -10;
	hori10Arvores2.posX = 600;
	hori10Arvores5.posY = -10;
	hori10Arvores5.posX = 1990;		//Cima
	
	hori10Arvores3.posX = -10;
	hori10Arvores3.posY = hori10Arvores4.posY = hori10Arvores6.posY = hori10Arvores7.posY = 1130;
	hori10Arvores4.posX = 600;
	hori10Arvores6.posX = 1210;
	hori10Arvores7.posX = 1820;	//Baixo

	pilarpartido0_1.width = pilarpartido0_1.height = pilarpartido0_2.width = pilarpartido0_2.height = pilarpartido0_3.width = pilarpartido0_3.height = 32;
	pilarpartido0_1.posX = 2462; pilarpartido0_1.posY = 1100;
	pilarpartido0_2.posX = 2494; pilarpartido0_2.posY = 1100;
	pilarpartido0_3.posX = 2526; pilarpartido0_3.posY = 1100;

	pilar0_1.width = pilar0_2.width = 31; pilar0_1.height = pilar0_2.height = 63;
	pilar0_1.posX = 2560; pilar0_1.posY = 1070;
	pilar0_2.posX = 2430; pilar0_2.posY = 1070;

	oo0_1.width = 640; oo0_1.height = 57;
	oo0_1.posX = 1275; oo0_1.posY = 00;

	arbusto1_1.width = 28;	arbusto1_1.height = 49;
	arbusto1_1.posY = 825;
	arbusto1_1.posX = 1745;
	vert3arbustos1.width = vert3arbustos2.width = 28; 	vert3arbustos1.height = vert3arbustos2.height = 113;
	vert3arbustos1.posY = 643;
	vert3arbustos1.posX = 1425;
	vert3arbustos2.posY = 643;
	vert3arbustos2.posX = 1745;

	casa1.height = 216;
	casa1.width = 288;
	casa1.posX = 1452;
	casa1.posY = 656;

	estendal1_1.width = 139; estendal1_1.height = 32;
	estendal1_1.posX = 1460;
	estendal1_1.posY = 620;

	estendal2_1.width = 139; estendal2_1.height = 32;
	estendal2_1.posX = 1599;
	estendal2_1.posY = 620;
	
	/*NPCs*/
	npc1.posX = 530;
	npc1.posY = 550;
	npc2.posX = 1000;
	npc2.posY = 200;
	npc3.posX = 500;
	npc3.posY = 150;
	
	arvore1_1.height = arvore1_1.width = arvore1_2.height = arvore1_2.width = arvore1_3.height = arvore1_3.width = arvore1_4.height = arvore1_4.width = arvore1_5.height = arvore1_5.width = arvore1_6.height = arvore1_6.width = arvore1_7.height = arvore1_7.width = 60;
	arvore1_1.posX = arvore1_1.posY = 110;
	arvore1_2.posX = 295;
	arvore1_2.posY = 50;
	arvore1_3.posX = 50;
	arvore1_3.posY = 110;
	arvore1_4.posX = 50;
	arvore1_4.posY = 170;
	arvore1_5.posX = 550;
	arvore1_5.posY = 170;
	arvore1_6.posX = 2100;
	arvore1_6.posY = 250;
	arvore1_7.posX = 1350;
	arvore1_7.posY = 400;

	arvore2_1.width = arvore2_2.width = arvore2_3.width = arvore2_4.width = arvore2_5.width = arvore2_6.width = arvore2_7.width = 30;
	arvore2_1.height = arvore2_2.height = arvore2_3.height = arvore2_4.height = arvore2_5.height = arvore2_6.height = arvore2_7.height =60;
	arvore2_1.posX = 775;
	arvore2_1.posY = 250;
	arvore2_2.posX = arvore2_2.posY = 700;
	arvore2_3.posX = 300;
	arvore2_3.posY = 550;
	arvore2_4.posX = arvore2_4.posY = 900;
	arvore2_5.posX = 750;
	arvore2_5.posY = 550;
	arvore2_6.posX = 1000;
	arvore2_6.posY = 600;
	arvore2_7.posX = 1350;
	arvore2_7.posY = 700;

	arvore3_1.width = arvore3_2.width = arvore3_3.width = 108; arvore3_1.height = arvore3_2.height = arvore3_3.height = 147;
	arvore3_1.posX = 50; arvore3_1.posY = 350;
	arvore3_2.posX = 150; arvore3_2.posY = 950;
	arvore3_3.posX = 800; arvore3_3.posY = 250;

	torre0_1.width = torre0_2.width = 64;
	torre0_1.height = torre0_2.height = 195;
	torre0_1.posX = 1210;
	torre0_1.posY = -60;
	torre0_2.posX = 1920;
	torre0_2.posY = -60;

	caminhodepedras1.width = 30; caminhodepedras1.height = 31;
	caminhodepedras1.posX = 1600; caminhodepedras1.posY = 880;

	setas1_1.posX = 600;
	setas1_1.posY = 500;
	setas1_1.width = setas1_1.height = 32;

	box1.posX = box1.posY = 350;
	box1.width = 32;
	box1.height = 32;

	coin1.posX = 130;
	coin1.posY = 190;
	coin2.posX = coin2.posY = 400;

	tenda1.posX = 185;
	tenda1.posY = 110;
	tenda1.width = 62;
	tenda1.height = 64;

	fogueira1.posX = 200;
	fogueira1.posY = 238;
	fogueira1.width = 32;
	fogueira1.height = 27;

	troncos1.posX = 65;
	troncos1.posY = 255;
	troncos1.width = troncos1.height = 30;
	
	cepo1.width = cepo2.width = cepo3.width = 26;
	cepo1.height = cepo2.height = cepo3.height = 20;
	cepo1.posX = 467;
	cepo1.posY = 157;
	cepo2.posX = 900;
	cepo2.posY = 150;
	cepo3.posX = 1200;
	cepo3.posY = 600;


	//loop();
}

function update(){
	//music.play();// MUSICA IRRITANTE!!!

	cnv.onclick = function(evt){
		var rectNav = cnv.getBoundingClientRect();
		var pos = {
			x: evt.clientX - rectNav.left,
			y: evt.clientY - rectNav.top
		};
		if(pos.x>bt.x && pos.x<(bt.x+bt.w) && pos.y>bt.y && pos.y<(bt.y+bt.h)){
			if (inventory.indexOf(axe1) > -1){
				var modalinventory2 = document.getElementById('myModalinventory2');modalinventory2.style.display = "block";
			}else{
				var modalinventory = document.getElementById('myModalinventory');modalinventory.style.display = "block";}

				var span = document.getElementsByClassName("close")[0];
				span.onclick = function() {modalinventory.style.display = "none";modalinventory2.style.display = "none";}
				var btn7 = document.getElementById('button7');
				var btn8 = document.getElementById('button8');
				btn7.onclick = function(){			modalinventory.style.display = "none";		}
				btn8.onclick = function(){			modalinventory2.style.display = "none";		}
			}
		}

		player.move();
		npc1.move(
			setTimeout(function(){
				npc1.mvDown = true;
				npc1.speed = 1;
				if (npc1.posY < 500) {npc1.mvDown = true; npc1.mvUp = false;}
				if (npc1.posY > 1300) {npc1.mvDown = false; npc1.mvUp = true;}
			},0)
			);
		npc2.move(
			setTimeout(function(){
				npc2.mvLeft = true;
				npc2.speed = 2;
				if (npc2.posX < 1000) {npc2.mvLeft = false; npc2.mvRight = true;}
				if (npc2.posX > 1700) {npc2.mvRight = false; npc2.mvLeft = true;}
			},0)
			);
	//Limites do Cenario
	//player.posX = Math.max(0, Math.min(cnv.width - player.width, player.posX));
	//player.posY = Math.max(0, Math.min(cnv.height - player.height, player.posY));
	//player.posX = Math.max(0, Math.min(scene.width - player.width, player.posX));
	//player.posY = Math.max(0, Math.min(scene.height - player.height, player.posY));
	
	for (var i in boxes) {
		var emp = boxes[i];
		if (emp.visible) {
			blockRect(emp, player); //jogador empurra a pedra
		}
	}

	for (var i in npcs) {
		var n = npcs[i];
		if (n.visible) {
			//blockRect(player, n); //Npc bloqueia o jogador
			if(MissionFoundAxe(player,npc3)){};
			if(TalkNPC1(player,npc1)) {};
			blockRect(player, n);
		}
	}

	for (var i in blocks) {
		var blk = blocks[i];
		if (blk.visible) {
			blockRect(player, blk); //bloqueia o jogador
		}
	}

	for (var i in coins) {
		var coin = coins[i];
		if (coin.visible) {
			collectCoin(player, coin) //coleta a moeda
		}
	}

	for (var i in littletreasure) {
		var ltr = littletreasure[i];
		if (ltr.visible) {
			collectLittleTreasure(player, ltr) //coleta o pequeno tesouro
		}
	}

	for (var i in itens) {
		var it = itens[i];
		if (it.visible) {
			collectAxe(player, it); //coleta o machado
		}	
	}

	if(player.posX < cam.leftEdge()){
		cam.x = player.posX - (cam.width * 0.25);
	}
	if(player.posX + player.width > cam.rightEdge()){
		cam.x = player.posX + player.width - (cam.width * 0.75);
	}
	if(player.posY < cam.topEdge()){
		cam.y = player.posY - (cam.height * 0.25);
	}
	if(player.posY + player.height > cam.bottomEdge()){
		cam.y = player.posY + player.height - (cam.height * 0.75);
	}

	//limite da câmara
	if(cam.x < 0){
		cam.x = 0;
	}
	if(cam.x + cam.width > scene.width){
		cam.x = scene.width - cam.width;
	}
	if(cam.y < 0){
		cam.y = 0;
	}
	if(cam.y + cam.height > scene.height){
		cam.y = scene.height - cam.height;
	}
}

function draw(){
	ctx.save();
	ctx.translate(-cam.x,-cam.y);
	ctx.clearRect(0,0,cnv.width,cnv.height);
	//Desenha cenario
	//ctx.drawImage(scene, 0, 0, scene.width, scene.height, 0, 0, cnv.width, cnv.height);
	ctx.drawImage(scene, 0, 0, scene.width, scene.height);
	//Desenha Heroi
	//player.draw(ctx);
	for (var i in sprites) {
		var spr = sprites[i];
		if (spr.visible) {
			spr.draw(ctx);
			//ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
		}
	}
	ctx.restore();
	ctx.font = "bold 15px Arial";
	ctx.fillText("Coins: " + score,10,30);
	ctx.fillText("David Ricardo © 2017",10,590);

	//Mochila
	ctx.drawImage(btt, 980, 550, btt.width, btt.height);
}

var game = setInterval(loop,10);//começa aqui
function loop(){
	switch(gameState){
		case LOADING:
		loadingAnim();
		break;
		case START:
		ctx.drawImage(startImg,0,0,cnv.width,cnv.height,0,0,cnv.width,cnv.height);
		init();
		break;
		case PLAYING:
				window.requestAnimationFrame(draw,cnv);//(loop,cnv);
				update();
				//draw();
				break;
			}
		}//acaba aqui

//função para animação do loading
function loadingAnim(){
	if(one){
		v2 += 0.02;	
		if(v2 >= 1.98){
			one = false;
			v1 = 0;
		}				
	} else {
		v1+= 0.02;
		if(v1 >= 1.98){
			one = true;
			v2 = 0;
			color++;
			if(color >= 5){
				color = 0;
			}
		}
	}
	ctx.clearRect(0,0,cnv.width,cnv.height);
	ctx.beginPath();
	ctx.arc(cnv.width/2,cnv.height/2,30,v1 * Math.PI,v2 * Math.PI);
	switch(color){
		case 0:
		ctx.strokeStyle = "#f00";
		break;
		case 1:
		ctx.strokeStyle = "#ff0";
		break;
		case 2:
		ctx.strokeStyle = "#0f0";
		break;
		case 3:
		ctx.strokeStyle = "#0ff";
		break;
		case 4:
		ctx.strokeStyle = "#00f";
		break;
		case 5:
		ctx.strokeStyle = "#f0f";
		break;
	}
	ctx.lineWidth = 15;
	ctx.stroke();
	}//fim da função para animação do loading


	function blockRect(r1,r2){
	//r1 -> obj bloqueado
	//r2 -> obj que bloqueia

	//catetos
	var catX = r1.centerX() - r2.centerX();
	var catY = r1.centerY() - r2.centerY();

	//soma das metades
	var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
	var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

	if (Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight) {

		//coletar os blocos e reaparecem 1s depois
		//r2.visible = false;
		//setTimeout(function(){
		//	r2.visible = true;
		//},1000)

		var overlapX = sumHalfWidth - Math.abs(catX);
		var overlapY = sumHalfHeight - Math.abs(catY);

		if (overlapX >= overlapY) { //colisao na vertical
			if (catY > 0) { //por cima do obj
				r1.posY += overlapY;
			} else { //por baixo do obj
				r1.posY -= overlapY;
			}
		} else { //colisao na horizontal
			if (catX > 0) { //pela esquerda do obj
				r1.posX += overlapX;
			} else { //pela direita do obj
				r1.posX -= overlapX;
			}
		}
	}
}
function collectCoin(r1,r2){
	var catX = r1.centerX() - r2.centerX();
	var catY = r1.centerY() - r2.centerY();

	var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
	var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

	if (Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight) {
		r2.visible = false;
		score++;
	}
}
function collectLittleTreasure(r1,r2){
	var catX = r1.centerX() - r2.centerX();
	var catY = r1.centerY() - r2.centerY();

	var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
	var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

	if (Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight) {
		r2.visible = false;
		score += 5;
	}
}
function collectAxe(r1,r2){
	var catX = r1.centerX() - r2.centerX();
	var catY = r1.centerY() - r2.centerY();

	var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
	var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

	if (Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight) {
		r2.visible = false;
		inventory.push(axe1);
	}
}//function collectAxe
function MissionFoundAxe(r1,r2){
	var catX = r1.centerX() - r2.centerX();
	var catY = r1.centerY() - r2.centerY();

	var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
	var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

	if (Math.abs(catX) <= sumHalfWidth && Math.abs(catY) <= sumHalfHeight) {
		if (player.talk == true && npc3.talk == true) { 
			foundAxe();
			player.mvUp = false;
			player.mvLeft = false;
			player.mvRight = false;
			player.mvDown = false;
		}
		
	}
}//function MissionFoundAxe
function TalkNPC1(r1,r2){
	var catX = r1.centerX() - r2.centerX();
	var catY = r1.centerY() - r2.centerY();

	var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
	var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

	if (Math.abs(catX) <= sumHalfWidth && Math.abs(catY) <= sumHalfHeight) {
		if (player.talk == true && npc1.talk == true) { 
			talk1();
			player.mvUp = false;
			player.mvLeft = false;
			player.mvRight = false;
			player.mvDown = false;
		}
		
	}
}//function talkNPC1
function talk1(){
	var modalnpc1 = document.getElementById('myModalnpc1');

	var btn9 = document.getElementById('button9');

	modalnpc1.style.display = "block";

	window.onclick = function(event) {if (event.target == modalnpc1) {modalnpc1.style.display = "none";}}

	btn9.onclick = function(){modalnpc1.style.display = "none";}
}
function foundAxe(){
	var modal2 = document.getElementById('myModal2');
	var modal3 = document.getElementById('myModal3');
	var modal4 = document.getElementById('myModal4');

	var btn1 = document.getElementById('button1');
	var btn2 = document.getElementById('button2');
	var btn3 = document.getElementById('button3');
	var btn4 = document.getElementById('button4');
	var btn5 = document.getElementById('button5');
	var btn6 = document.getElementById('button6');
	// Get the modal
	var modal = document.getElementById('myModal');

	//SPAN COMMENTED
	// Get the <span> element that closes the modal
	/*var span = document.getElementsByClassName("close")[0];
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
		modal2.style.display = "none";
		modal3.style.display = "none";
	}*/
	//Window.onclick - commented? nao sei ainda
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal || event.target == modal2 || event.target == modal3) {
			modal.style.display = "none";
			modal2.style.display = "none";
			modal3.style.display = "none";
		}
	}

	btn1.onclick = function(){	modal.style.display = "none";	modal2.style.display = "block";}
	btn2.onclick = function(){	modal2.style.display = "none";	modal3.style.display = "block";}
	btn4.onclick = function(){	modal.style.display = "none";}
	btn5.onclick = function(){	modal2.style.display = "none";}

	if(player.quit == true){modal.style.display = "none";}

	if (done1) {
		modal4.style.display = "block";
		btn6.onclick = function(){
			modal4.style.display = "none";
			window.onclick = function(event) {
				if (event.target == modal3) {
					modal4.style.display = "none";
				}
			}
		}
	}
	if(firstTime1 == false){
		if (done1 == false) {
			encontrouaxe();
			if (done1==false) {modal3.style.display = "block";
			btn3.onclick = function(){
				modal3.style.display = "none";}		
			}
		}
	}

	if(firstTime1){
		modal.style.display = "block";
		btn3.onclick = function(){
			modal3.style.display = "none";
			firstTime1 = false;
		}
	}
}//function foundAxe
function encontrouaxe(){
	if(inventory.indexOf(axe1) > -1){
		inventory.pop(axe1);
		done1 = true;
		score += 5;
	}
}//function encontrouaxe da 1ªmissao // fim da missao

}//windows.onload