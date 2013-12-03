var cElem, cCont;
var drawing = false;  // �t���O��

window.addEventListener('load', function(){  // �y�[�W�ǂݍ��ݎ��Ɏ��s
    cElem = document.getElementById('c');
    cCont = cElem.getContext('2d');

    // canvas�̐ݒ�
    cCont.lineJoin    = 'round';  // �p���ۂ�
    cCont.lineCap     = 'round';  // ���̏I�[���ۂ�
    cCont.lineWidth   = 5;        // ���̕�
    cCont.strokeStyle = '#0000FF';   // ���̐F

    // event
    cElem.addEventListener('touchstart', start, false);  // canvas���mousedown�C�x���g��start()���Ă�
    cElem.addEventListener('touchmove', move, false);   // canvas���mousemove�C�x���g��move()���Ă�
    window.addEventListener('touchend', stop, false);   // window���mouseup�C�x���g��stop()���Ă�

	// stop to scroll
	document.body.addEventListener('touchmove', function(event){
		event.preventDefault();
	}, false); 
}, false);

function start(event){
    cCont.beginPath();  // ���݂̃p�X�����Z�b�g
    cCont.moveTo(event.touches[0].pageX, event.touches[0].pageY - b.offsetHeight);  // �������W���w��
    drawing = true;  // �h���b�O���t���O��
}

function move(event){
    if (!drawing) return;
    cCont.lineTo(event.touches[0].pageX, event.touches[0].pageY - b.offsetHeight);  // ���O�̍��W�ƌ��݂̍��W�𒼐��Ōq��
    cCont.stroke();  // canvas�ɕ`��
}

function stop(event){
    if (!drawing) return;
    cCont.closePath();  // �T�u�p�X�����
    drawing = false;   // �t���O��
}

function clearCanvas(){
    cCont.clearRect(0, 0, c.width, c.height);  // �L�����o�X��������
}


