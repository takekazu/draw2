var cElem, cCont;
var drawing = false;  // �t���O��

window.addEventListener('load', function(){  // �y�[�W�ǂݍ��ݎ��Ɏ��s
    cElem = document.getElementById('c');
    cCont = cElem.getContext('2d');

    // canvas�̐ݒ�
    cCont.lineJoin    = 'round';  // �p���ۂ�
    cCont.lineCap     = 'round';  // ���̏I�[���ۂ�
    cCont.lineWidth   = 3;        // ���̕�
    cCont.strokeStyle = '#0000FF';   // ���̐F

    // event
    cElem.addEventListener('touchstart', start, false);  // canvas����mousedown�C�x���g��start()���Ă�
    cElem.addEventListener('touchmove', move, false);   // canvas����mousemove�C�x���g��move()���Ă�
    window.addEventListener('touchend', stop, false);   // window����mouseup�C�x���g��stop()���Ă�

	// stop to scroll
	document.body.addEventListener('touchmove', function(event){
		event.preventDefault();
	}, false);
}, false);

function start(event){
    //console.log("start");
    cCont.beginPath();  // ���݂̃p�X�����Z�b�g
    cCont.moveTo(event.touches[0].pageX - c.offsetLeft, event.touches[0].pageY - c.offsetTop);  // �������W���w��
    drawing = true;  // �h���b�O���t���O��
}

function move(event){
    if (!drawing) return;
    //console.log("move");
    cCont.lineTo(event.touches[0].pageX - c.offsetLeft, event.touches[0].pageY - c.offsetTop);  // ���O�̍��W�ƌ��݂̍��W�𒼐��Ōq��
    cCont.stroke();  // canvas�ɕ`��
    //sampling();
}

function stop(event){
    if (!drawing) return;
    //console.log("stop");
    
    //cCont.lineTo(event.touches[0].pageX - c.offsetLeft, event.touches[0].pageY - c.offsetTop);  // �_���`�����悤��
    //cCont.stroke();
    
    cCont.closePath();  // �T�u�p�X������
    drawing = false;   // �t���O��
}

function clearCanvas(){
    cCont.clearRect(0, 0, c.width, c.height);  // �L�����o�X��������
}

function sampling(){  // �T���v�����O
	d = new Date();
	m = d.getMinutes();
	s = d.getSeconds();
	ms = d.getMilliseconds();
	document.getElementById("t").value = (m + ":" + s + ":" + ms + ", ");  // ��_�b_�~���b���\��
	console.log(m + ":" + s + ":" + ms + ", ");  // ��_�b_�~���b���\��
}

function changePensize(){  // �����ύX
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

