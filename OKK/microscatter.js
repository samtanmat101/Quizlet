if (gameDone == undefined) {
    var gameDone = "defined";
    location.href = 'javascript:var getHighId = setTimeout(";");for (var i = 0 ; i < getHighId ; i++) {clearTimeout(i); };'
    location.href = 'javascript:var countTime = 0; setInterval(function() { countTime += 5 },5); var a = (new Date());Date = function() { return (a);};Date.now = function now() {return (new Date().getTime() + countTime);};'

    var viewing = document.getElementsByClassName("UIButton--hero");
    if (viewing[0] != undefined) {
		viewing[0].click();
    }

    var codee = document.body.innerHTML;
    var code = codee;
    var defs = [];
    var terms = [];
    var endTerm = 0;
    var keepTerm = [];
    var keepDef = [];
    var checkI;
    var photoDefs = [];
    var photoTerms = [];

    function getAllInfo() {
        var code = codee.substring(codee.indexOf("QWait('dom', function() {"), codee.length);
        var haveAll = false
        var saveData = {};

        var substiCode = code.split('\\"').join('"');
        code = substiCode;

        while (haveAll === false) {
            var place = code.indexOf('"word":"');
            if (place !== -1) {
                var searchText = code.substring(place + 8, code.length);
                var endTerm = searchText.substring(0, searchText.indexOf('","quiz_id":'));
                if (saveData[endTerm] == undefined) {

                    var getTheTerm = endTerm.substring(0, endTerm.indexOf('","definition":"'));
                    var getTheDef = endTerm.substring(endTerm.indexOf('","definition":"') + '","definition":"'.length, endTerm.length);
                    var getterm = getTheTerm;
                    var getdef = getTheDef;
                    var foundPhoto = "";
                    var defphotoTrue = false;
                    var termPhotoTrue = false;
                    var longestString = 0;
                    var longestStringWin = 0;

                    var searchPhoto = code.substring(code.indexOf(',"photo":"') + 10, place - 2);

                    if (searchPhoto != undefined && searchPhoto != "") {
                        splitPhoto = searchPhoto.split(",");
                        splitPhoto.splice(splitPhoto.length - 1, 1);
                        if (splitPhoto[(splitPhoto.length - 1)].indexOf("@") != -1) {
                            splitPhoto.splice(splitPhoto.length - 1, 1);
                        }

                        for (var pds = 0; pds < splitPhoto.length; pds++) {
                            if (splitPhoto[pds].length > longestString) {
                                longestStringWin = pds;
                                longestString = splitPhoto[pds].length;
                            }
                        }


                        foundPhoto = splitPhoto[longestStringWin]
                    } else {
                        foundPhoto = "...";
                    }




                    if (getTheTerm == "") {
                        getterm = foundPhoto;
                        getTheTerm = "...";
                        if (foundPhoto != "...") {
                            termPhotoTrue = true;
                        }
                    }

                    if (getTheDef == "") {
                        getdef = foundPhoto;
                        getTheDef = "...";
                        if (foundPhoto != "...") {
                            defphotoTrue = true;
                        }
                    }

                    photoDefs.push(defphotoTrue);
                    photoTerms.push(termPhotoTrue);
                    defs.push(getdef);
                    keepDef.push(getTheDef);
                    terms.push(getterm);
                    keepTerm.push(getTheTerm);

                    saveData[endTerm] = 0;
                }

                code = searchText.substring(endTerm.length, searchText.length)
            } else {
                haveAll = true
            }
        }
    }

    function clean(cleanWord) {
        var badChars = ["\(", "\)", "\[", "\{", "\*", "\+", "\$", "\^", "\|", "\/", "\\", "\^", "\?", "\]", "\}"]
        var seen = cleanWord;
        for (var j = 0; j < badChars.length; j++) {
            seen = (seen.split(badChars[j])).join("");
            seen = (seen.split(badChars[j])).join("");
        }
        return seen;

    }
    getAllInfo();

    function fixWord(unic) {
        var uunic = unic;
        while (uunic.indexOf("\\\\") != -1) {
            uunic = uunic.split("\\\\").join("\\");
        }
        uunic = removeEnters(uunic);
        uunic = (uunic.split('\\"').join('"'));
        uunic = (uunic.split('"').join('\\"'));

        return (unescape(JSON.parse('"' + uunic + '"')));
    }

    function removeEnters(enterTermm) {
        enterTerm = encodeURI(enterTermm);
        enterTerm = (enterTerm.split("%E2%86%B5").join("%20"));
        enterTerm = (enterTerm.split("%5Cn").join("%20"));
        enterTerm = (enterTerm.split("%3Cbr%3E").join("%20"));
        enterTerm = (enterTerm.split("%0A").join("%20"));
        enterTerm = decodeURI(enterTerm);

        while (enterTerm.indexOf("  ") != -1) {
            enterTerm = (enterTerm.split("  ")).join(" ");
        }
        return enterTerm;
    }

    function removeBadHTML(strin) {
        var makeText = document.createElement("textarea");
        makeText.innerHTML = strin;
        return makeText.value;
    }

    for (var j = 0; j < defs.length; j++) {
        defs[j] = fixWord(defs[j]);
        terms[j] = fixWord(terms[j]);
        keepDef[j] = fixWord(keepDef[j]);
        keepTerm[j] = fixWord(keepTerm[j]);
        defs[j] = removeBadHTML(defs[j]);
        terms[j] = removeBadHTML(terms[j]);
        keepDef[j] = removeBadHTML(keepDef[j]);
        keepTerm[j] = removeBadHTML(keepTerm[j]);
    }

    var badChars = ["\(", "\)", "\[", "\{", "\*", "\+", "\$", "\^", "\|", "\/", "\\", "\^", "\?", "\]", "\}"]

    var combineDefs = defs.join("k5js9dhf24as1dbfjla12sd6jk8n");
    var combineTerms = terms.join("k5js9dhf24as1dbfjla12sd6jk8n");

    for (var j = 0; j < badChars.length; j++) {
        combineDefs = (combineDefs.split(badChars[j])).join("");
        combineTerms = (combineTerms.split(badChars[j])).join("");
    }
    defs = combineDefs.split("k5js9dhf24as1dbfjla12sd6jk8n");
    terms = combineTerms.split("k5js9dhf24as1dbfjla12sd6jk8n");

    function eliminateDuplicates() {

        for (var i = 0; i < terms.length; i++) {
            for (var j = 0; j < terms.length; j++) {
                if (terms[i] == terms[j] && i != j) {
                    if (defs[i] == defs[j]) {
                        terms.splice(j, 1);
                        defs.splice(j, 1);
                        keepDef.splice(j, 1);
                        keepTerm.splice(j, 1);
                        j = 0;
                        i = 0;
                    }
                }

                if (defs[i] == defs[j] && i != j) {
                    if (terms[i] == terms[j]) {
                        terms.splice(j, 1);
                        defs.splice(j, 1);
                        keepDef.splice(j, 1);
                        keepTerm.splice(j, 1);
                        j = 0;
                        i = 0;
                    }
                }

            }
        }
    }


    eliminateDuplicates();

    var allCards = document.getElementsByClassName("cell long");
    var q = 0;
    var solving = setInterval(function() {

        for (var s = 0; s < allCards.length; s++) {
            if ((allCards[s].className).indexOf("touched") >= 0) {
                allCards[s].click();
            }
        }

        if ((allCards[q].className).indexOf("correct") == -1) {
            var getOne = allCards[q].innerHTML;
            getOne = clean(getOne);
            getOne = removeEnters(getOne);
            var hasAndSign = true;
            getOne = removeBadHTML(getOne);

            checkI = false;

            var searchWord = "";

            for (var j = 0; j < defs.length; j++) {
                if (photoDefs[j]) {
                    var place = getOne.indexOf(defs[j]);
                } else {
                    var place = getOne.indexOf('>' + defs[j] + '<');
                }
                if (place !== -1 && place !== 0) {
                    checkI = true;

                    searchWord = terms[j];
                }
                if (photoTerms[j]) {
                    var placee = getOne.indexOf(terms[j]);
                } else {
                    var placee = getOne.indexOf('>' + terms[j] + '<');
                }
                if (placee !== -1 && place !== 0) {
                    searchWord = defs[j];
                    checkI = true;
                }
            }

            if (checkI === false) {
                var getOnel = getOne.length;
                while (checkI === false) {
                    getOnel -= 1;
                    for (var j = 0; j < defs.length; j++) {
                        var place = getOne.indexOf('>' + defs[j].substring(0, getOnel));
                        if (place !== -1 && place !== 0) {
                            checkI = true;
                            searchWord = terms[j];
                        }
                        var placee = getOne.indexOf('>' + terms[j].substring(0, getOnel));
                        if (placee !== -1 && place !== 0) {
                            searchWord = defs[j];
                            checkI = true;
                        }
                    }
                }
            }

            searchWord = searchWord.split('<br>').join('');
            var allBoardWords = allCards;

            for (var i = 0; i < allBoardWords.length; i++) {
                var getBRout = allBoardWords[i].innerHTML;
                getBRout = getBRout.split('<br>').join('');
                getBRout = getBRout.split('\n').join(' ');

                var cleanedWord = clean(getBRout);
                if (cleanedWord.indexOf(">" + searchWord) >= 1) {
                    if ((allCards[i].className).indexOf("correct") == -1) {
                        allCards[q].click();
                        allCards[i].click();
                    }
                }
            }
        }
        q += 1;
        if (q >= allCards.length) {
            clearInterval(solving);
            gameDone = undefined;
        }

    }, 1);
}