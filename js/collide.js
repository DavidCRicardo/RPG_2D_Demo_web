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