function Circle(x,y,radius,fixed){
	
	var options = {
		isStatic:fixed,
		friction: 0,
	};

	this.body = Bodies.circle(x, y, radius, options);
	this.radius = radius; 
// Body Physics function 
	World.add(world,this.body);

// Body action function 
	this.show = function(){
		var x = this.body.position.x;
		var y = this.body.position.y;
		var angle = this.body.angle;

		push();
		rectMode(CENTER);
		translate(x,y);
		rotate(angle);
		stroke(240);
		fill(230);
		circle(0,0,this.radius*2);
		pop();
	};

	this.isOffScreen = function() {
		return this.body.position.y > 400;
	};
}
