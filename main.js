function computeVal() {
    document.getElementById("outputBeam").innerHTML = "";
    document.getElementById("outputSpace").innerHTML = ""; 
    document.getElementById("outputGap").innerHTML = "";
    
    var feet = parseInt(document.getElementById("inputFeetTotal").value) || 0;
    var inches = parseInt(document.getElementById("inputInchesTotal").value) || 0;
    var width = feet*12 + inches;
    
    var barwidth = eval(document.getElementById("inputInchesBar").value);
    console.log(barwidth);
    var numgaps = Math.ceil(width/4.0);
    var spacing = (width - (barwidth * (numgaps - 1)))/numgaps;

    document.getElementById("outputBeam").innerHTML = numgaps - 1;
    document.getElementById("outputSpace").innerHTML = numgaps; 
    document.getElementById("outputGap").innerHTML = spacing;
}
