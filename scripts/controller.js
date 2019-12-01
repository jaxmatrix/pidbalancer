function Controller(ledge,ball){
	this.ball = ball;
	this.ledge = ledge;

	this.sensor = function(){
		var ledge = this.ledge.body.position;
		var ball = this.ball.body.position;
		var angle = this.ledge.body.angle;

		var distanceVector = createVector(ball.x-ledge.x,ball.y-ledge.y);
		var distance = distanceVector.x*cos(angle) + sin(angle)*distanceVector.y;
		console.log('Controller',distanceVector,angle);
		return distance/(this.ledge.w/2);
	};

	this.input = function(angle){
		Body.rotate(ledge.body, angle);
	};
}
