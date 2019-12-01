function Ground(x,y,w,h){
	var options = {
		isStatic: true,
		friction: 0.13,
	};

	this.body = Bodies.rectangle(x + w/2, y + h/2, w, h, options);
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
		noStroke();
		fill(127);
		rect(0,0,this.w,this.h);
		pop();
	};
}
