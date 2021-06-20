var s = 0;
var m = 0;

function WW() {
    if (s > 59) {
        s = 0;
        m = m + 1;
    }
    s++;
    w = m + ":" + s;
    document.getElementById("time").innerHTML = w;
}
setInterval(WW, 1000);

/*function STOP(){
    for(i=0; i<1000;i++)
    {
        if(i=900)break;
        w=m+r;
        document.getElementById("time").innerHTML=w;
    } */