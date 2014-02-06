var cElem, cCont;
var drawing = false;  // flag = false

//when pege loaded..
window.addEventListener('load', function(){
    cElem = document.getElementById('c');
    cCont = cElem.getContext('2d');

    // canvas setting
    cCont.lineJoin    = 'round';  // shape_angle
    cCont.lineCap     = 'round';  // shape_line end
    cCont.lineWidth   = 3;        // line width
    cCont.strokeStyle = '#0000FF';   // line color

    // event
    cElem.addEventListener('touchstart', start, false);  // call start() when touchstart event on canvas
    cElem.addEventListener('touchmove', move, false);   // call move() when touchstart event on canvas
    window.addEventListener('touchend', stop, false);   // call stop() when touchstart event on window

	// stop to page scroll
	document.body.addEventListener('touchmove', function(event){
		event.preventDefault();
	}, false);
}, false);

function start(event){
    //console.log("start");
    cCont.beginPath();  // reset current Path
    cCont.moveTo(event.touches[0].pageX - c.offsetLeft, event.touches[0].pageY - c.offsetTop);  // setting initial coordinate
    drawing = true;  // flag = true
}

function sleep(T){
   var d1 = new Date().getTime(); 
   var d2 = new Date().getTime(); 
   while( d2 < d1 + T ){			//wait for T[msec]
       d2 = new Date().getTime();
   }
   return;
}

function move(event){
    if (!drawing) return;
    //console.log("move");
	sleep(50);	// T[msec] lag
    cCont.lineTo(event.touches[0].pageX - c.offsetLeft, event.touches[0].pageY - c.offsetTop);  // connect last coordinate and current coordinate with a line
    cCont.stroke();  // draw line on canvas
    //sampling();
}

function stop(event){
    if (!drawing) return;
    //console.log("stop");
    
    //cCont.lineTo(event.touches[0].pageX - c.offsetLeft, event.touches[0].pageY - c.offsetTop);  // “_‚ª•`‚¯‚é‚æ‚¤‚É
    //cCont.stroke();
    
    cCont.closePath();  // close sub path
    drawing = false;   // flag = false
}

function clearCanvas(){
    cCont.clearRect(0, 0, c.width, c.height);  // initialize canvas
}

function sampling(){  // sampling
	d = new Date();
	m = d.getMinutes();
	s = d.getSeconds();
	ms = d.getMilliseconds();
	document.getElementById("t").value = (m + ":" + s + ":" + ms + ", ");
	console.log(m + ":" + s + ":" + ms + ", ");  // log_minute, sec, msec
}

function changePensize(){  // change line width
	rElem = document.getElementsByName('pen');
	if(rElem[0].checked){
		cCont.lineWidth = 1;
	}
	else if(rElem[1].checked){
		cCont.lineWidth = 3;
	}
	else if(rElem[2].checked){
		cCont.lineWidth = 5;
	}
}

