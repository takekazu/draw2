var cElem, cCont;
var drawing = false;  // フラグ落

window.addEventListener('load', function(){  // ページ読み込み時に実行
    cElem = document.getElementById('c');
    cCont = cElem.getContext('2d');

    // canvasの設定
    cCont.lineJoin    = 'round';  // 角を丸く
    cCont.lineCap     = 'round';  // 線の終端を丸く
    cCont.lineWidth   = 5;        // 線の幅
    cCont.strokeStyle = '#0000FF';   // 線の色

    // event
    cElem.addEventListener('touchstart', start, false);  // canvas上のmousedownイベントでstart()を呼ぶ
    cElem.addEventListener('touchmove', move, false);   // canvas上のmousemoveイベントでmove()を呼ぶ
    window.addEventListener('touchend', stop, false);   // window上のmouseupイベントでstop()を呼ぶ

	// stop to scroll
	document.body.addEventListener('touchmove', function(event){
		event.preventDefault();
	}, false); 
}, false);

function start(event){
    cCont.beginPath();  // 現在のパスをリセット
    cCont.moveTo(event.touches[0].pageX, event.touches[0].pageY - b.offsetHeight);  // 初期座標を指定
    drawing = true;  // ドラッグ中フラグ立
}

function move(event){
    if (!drawing) return;
    cCont.lineTo(event.touches[0].pageX, event.touches[0].pageY - b.offsetHeight);  // 直前の座標と現在の座標を直線で繋ぐ
    cCont.stroke();  // canvasに描画
}

function stop(event){
    if (!drawing) return;
    cCont.closePath();  // サブパスを閉じる
    drawing = false;   // フラグ落
}

function clearCanvas(){
    cCont.clearRect(0, 0, c.width, c.height);  // キャンバスを初期化
}


