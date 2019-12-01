
//This the point where our ball should be
var setPoint = -0.2;

function Control(controller){
	this.controller = controller;
	this.error = controller.sensor() - setPoint;
	this.errorSum = 0;

	this.play = function(){
		console.log('Controller',this.controller.sensor());
		var newError = this.controller.sensor() - setPoint;

		var p = newError;
		var i = newError + this.errorSum;
		var d = newError - this.error;

		this.error = newError;
		this.errorSum = i;
		/* This is control logic of the system
		 * 'distance' is the relative position of the ball from the center of the wedge
		 * Range of wedge is from -1 to 1 ie. extreme left to extreme right
		 *
		 * Objective :: Implement pid to set the position of the ball at the set point
		 * 
		 * */

		//console.log('PID',p,i,d);
		//Write your code here
		K1 = ;
		K2 = ;
		K3 = ;

		var	angle = -1*PI/300*( K1*p +  K2*d + K3*i);
		
		console.log('PID',p,i,d,angle);		
		this.controller.input(angle);
	};
}
