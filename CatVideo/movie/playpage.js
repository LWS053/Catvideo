
window.onload = function(){
    //获取video这个播放器的组件
    console.log("success");
    //获取传递过来的localStorge
    console.log(window.localStorage.getItem("user"));
    var user = window.localStorage.getItem("user");
    this.document.getElementById("videoTitle").innerHTML = user;
    var videoControls = document.getElementById("videoPlay");
    var onBtn1 = this.document.getElementById("playPause");
    var onBtn2 = this.document.getElementById("onFilm");
    var onBtn3 = this.document.getElementById("underFilm");
    var onBtn4 = this.document.getElementById("makeBig");
    var step = 1;
    var str = "./resource/视频 "+step+".mp4";
    videoControls.src = str;
    onBtn1.onclick = playPause;
    onBtn2.onclick = onFilm;
    onBtn3.onclick = underFilm;
    onBtn4.onclick = makeBig;

    function playPause(){
        console.log("playPause");
        if(videoControls.paused){
            videoControls.play();
        }else{
            videoControls.pause();
        }
    }

    function onFilm(){
        step--;
        str = "./resource/视频 "+step+".mp4";
        console.log(str);
        videoControls.src = str;
    }

    function underFilm(){
        step++;
        var str = "./resource/视频 "+step+".mp4";
        videoControls.src = str;
    }
    function makeBig(){
        console.log(videoControls.width);
        if(videoControls.width==1500){
            videoControls.width = 1200;
        }else{
            videoControls.width = 1500;
        }
        
    }
}
