function Poly(x,y,sides,radius,fixed){
	var options = {
		isStatic : fixed,
		friction: 0.13,
	};

	this.body = Bodies.polygon(x, y, sides, radius, options);
	this.sides = sides; 
	this.radius = radius;
	Body.rotate(this.body, -PI/6)
// Body Physics function
	World.add(world,this.body);

// Body action function 
	this.show = function(){
		var x = this.body.position.x;
		var y = this.body.position.y;
		var angle = this.body.angle;
		var vertices = this.body.vertices
		push();
		//rectMode(CENTER)
		//translate(x,y);
		//rotate(angle);
		stroke(240);
		fill(130);
		beginShape();
		vertices.forEach((e)=>{
			vertex(e.x,e.y)
		});
		endShape(CLOSE);
		pop();
	};

	this.getVertex = function(i){
		return this.body.vertices[i];
	}

	this.isOffScreen = function() {
		return this.body.position.y > 400;
	};

}
