function toggleDisplay(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        if (element.style.display === "none") {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    }
    else {
        console.warn("Element with ID ".concat(elementId, " not found."));
    }
}
// Usage of the toggleDisplay function for different elements
function myFunction() {
    toggleDisplay("myDIV");
}
function myFunction1() {
    toggleDisplay("myDIV1");
}
function myFunction2() {
    toggleDisplay("myDIV2");
}
function myFunction3() {
    toggleDisplay("myDIV3");
}
function myFunction4() {
    toggleDisplay("myDIV4");
}
function myFunction5() {
    toggleDisplay("myDIV5");
}
function myFunction6() {
    toggleDisplay("myDIV6");
}
