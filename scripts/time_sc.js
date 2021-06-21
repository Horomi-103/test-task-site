var secon = 0;
var minut = 0;

function Act_Timer() {
    if (secon > 59) {
        secon = 0;
        minut = minut + 1;
    }
    secon++;
    res = minut + ":" + secon;
    document.getElementById("time").innerHTML = res;
}
setInterval(Act_Timer, 1000);
Act_Timer();

/*function STOP(){
    for(i=0; i<1000;i++)
    {
        if(i=900)break;
        w=m+r;
        document.getElementById("time").innerHTML=w;
    } */