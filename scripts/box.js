function Boxy(x,y,w,h,fixed){
	
	var options = {
		isStatic:fixed,
		friction: 0.13,
	};

	this.body = Bodies.rectangle(x, y, w, h, options);
	this.h = h; 
	this.w = w;
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
		rect(0,0,this.w,this.h);
		pop();
	};

	this.isOffScreen = function() {
		return this.body.position.y > 400;
	};
}
