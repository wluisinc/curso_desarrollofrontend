var arrayDiv = document.getElementsByClassName("circulo");
playPauseAnim ("pause");
playPauseAnim ("play");
function playPauseAnim(estado){
    for (var i = 0; i < arrayDiv.length; i++){
        arrayDiv[i].style.webkitAnimationPlayState = estado;
    }
    if (estado == "running"){
        document.getElementsByTagName("input")[0].setAttribute ("onclick", "playPauseAnim('paused');");
    } else{
        document.getElementsByTagName("input")[0]
        .setAttribute("onclick", "playPauseAnim('running');");
    }
}