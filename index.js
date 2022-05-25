var timer=setInterval(function(){
    var countdown=document.getElementById('count-down');
    var initialcountdownval=countdown.innerHTML;
    countdown.innerHTML=initialcountdownval-1;

    countdown.innerHTML=initialcountdownval >0 ?initialcountdownval-1 : 0;
    document.getElementById('body').style.textAlign="center";
    
    if(initialcountdownval%2===0){
        
        document.getElementById('body').style.background="url('images/img2.jpg')";
        document.getElementById('body').style.backgroundSize=initialcountdownval*19+"%";
        document.getElementById('body').style.backgroundRepeat="no-repeat";
    }
    else{
        document.getElementById('body').style.background="url('images/img1.jpg')";
        document.getElementById('body').style.backgroundSize=initialcountdownval*19+"%";
        document.getElementById('body').style.backgroundRepeat="no-repeat";
    }
    document.getElementById('count-down').style.fontSize=initialcountdownval*50+"px";
    
    document.getElementById('body').style.width=initialcountdownval*19+"%";
   


    var colorChange=setInterval(function(){
        var RandomNumber=Math.floor(Math.random()*256);
        document.getElementById('count-down').style.color="rgb("+ Math.floor(Math.random()*256)+" ,"+ Math.floor(Math.random()*256)+" ,"+ 155+")"
        
    },1000);
    

},1000);
timer();