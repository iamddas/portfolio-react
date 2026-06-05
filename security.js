// guard
var isCtrl = false;
var isShift = false;
document.onkeyup = function (e) {
    var charCode = (e.which) ? e.which : event.keyCode;
    if (charCode == 17) isCtrl = false;
    if (charCode == 16) isShift = false;
}
document.onkeydown = function (e) {
    var charCode = (e.which) ? e.which : event.keyCode;
    if (charCode == 17) {
        //alert('Control key is not allowed');
        isCtrl = true;
    }
    if (charCode == 16) {
        //alert('Shift key is not allowed');
        isShift = true;
    }
    if (charCode == 85 && isCtrl) {
        //Prevent CTRL+U
        console.warn('Viewing of Page Source is not allowed');
        return false;
    }
    /*else if (charCode == 67 && isCtrl) {
        //Prevent CTRL+C
        console.warn('The contents of this site are not allowed to be copied.');
        return false;
    }*/
    else if (charCode == 80 && isCtrl) {
        //Prevent CTRL+P
        console.warn('Printing of Page Source is not allowed');
        return false;
    }
    /* else if (charCode == 86 && isCtrl) {
        //Prevent CTRL+V
        console.warn("Pasting is not allowed");
        if (typeof pasteAllowed != 'undefined') {
            return true;
        } else {
            return false;
        }
    } */
    else if (charCode == 88 && isCtrl) {
        //Prevent CTRL+X
        return false;
    } else if (charCode == 90 && isCtrl) {
        //Prevent CTRL+Z
        return false;
    } else if (charCode === 27) {
        //prevent Esc
        return false;
    } else if (isCtrl && isShift && charCode > 17 && charCode != 82) {
        //Prevent from ctrl+shift+any key
        return false
    } else if (charCode >= 112 && charCode <= 123) {
        //prevent f1 to f12
        return false
    }
}

//Disable right mouse click
document.oncontextmenu = function (e) {
    return false;
}