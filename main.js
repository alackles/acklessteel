var fracDict = {
    0.0: "0",
    0.0625: "1/16",
    0.125: "1/8",
    0.1875: "3/16",
    0.25: "1/4",
    0.3125: "5/16",
    0.375: "3/8",
    0.4375: "7/16",
    0.5: "1/2",
    0.5625: "9/16",
    0.625: "5/8",
    0.6875: "11/16",
    0.75: "3/4",
    0.8125: "13/16",
    0.875: "7/8",
    0.9375: "15/16"
};


function roundSixteen(dec) {
    var wholenum = Math.floor(dec);
    var frac = parseFloat(Math.ceil((dec-wholenum)*16)/16)
    return wholenum + "  " + fracDict[frac] + "\""
}

function computeVal() {
    document.getElementById("outputBeam").innerHTML = "";
    document.getElementById("outputSpace").innerHTML = ""; 
    document.getElementById("outputGap").innerHTML = "";
    
    var feet = parseInt(document.getElementById("inputFeetTotal").value) || 0;
    var inches = parseInt(document.getElementById("inputInchesTotal").value) || 0;
    var width = feet*12 + inches;
    
    var barwidth = eval(document.getElementById("inputInchesBar").value);
    var numgaps = Math.ceil(width/4.0);
    var spacing = (width - (barwidth * (numgaps - 1)))/numgaps;

    document.getElementById("outputBeam").innerHTML = numgaps - 1;
    document.getElementById("outputSpace").innerHTML = numgaps; 
    document.getElementById("outputGap").innerHTML = spacing.toFixed(3);
    document.getElementById("outputSixteen").innerHTML = roundSixteen(spacing);
}
