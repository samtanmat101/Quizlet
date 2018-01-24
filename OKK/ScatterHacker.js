if (document.getElementsByClassName('UIButton--hero')[0] != undefined) {
window.alreadyOver = false;
var num = Number(prompt("How many seconds do you want your score to be?"));
var originalRefreshTimer = MatchMode.prototype.refreshTimer;
MatchMode.prototype.refreshTimer = function(){
var returnV = originalRefreshTimer.apply(this, arguments);
if (this.tenths === (num*10) && alreadyOver !== true) {
alreadyOver = true;
this.nowShowing = 0;
this.gameOver();
}
return returnV
} 
document.getElementsByClassName('UIButton--hero')[0].click();  
}
else{
alert("The game has already started!");
}
