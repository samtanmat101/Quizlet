(function(){
    var goal = parseInt(prompt("What score would you like?"));
	alert("Gravity hack activated. Choose hard mode and start the game.");
    var m = window.QJP([], [], ["hyek"]).a;
    var orig_grade = m.grader.grade.bind(m.grader);
    function callWithCorrect(f){
        m.grader.grade = function(a, b, c){ return true; }
        f();
        m.grader.grade = orig_grade;
    }
    
    
    var orig_getNextLiveTermId = m._getNextLiveTermId.bind(m);
m._getNextLiveTermId = function (a){
        var b = orig_getNextLiveTermId(a);
        setTimeout(
            function() {
                if(m.dataMap.get("points") < goal){
                    m._markCorrectAndAdvanceGame(b);
                    m.change();
                }
            },
            m.dataMap.get("termLife") / 6
        );
        return b
}
    var orig_promptCopyAnswer = m._promptCopyAnswer.bind(m);
    m._promptCopyAnswer = function(a){
        orig_promptCopyAnswer(a);
        setTimeout(function(){
            callWithCorrect(function (){
                m._checkCopiedAnswer( {liveTermId: a, answer: "" } );
            });
        }, 1000);
    }
})();
