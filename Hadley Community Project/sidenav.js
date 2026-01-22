let calendar = "calendar.html";
let organizations = "organizations.html";
let resources = "resources.html";
let about = "about.html";
let lastSelection;

function openSidenav(currentSelection) {
    document.getElementById("frame").src = currentSelection;
    document.getElementById("sidenav").style.left = "0px";
    document.getElementById("bulletin").style.left = "640px";
}

function operateSidenav(currentSelection) {
    if (document.getElementById("sidenav").style.left == "-640px") {    //checks if sidenav is closed
        openSidenav(currentSelection);                                  //opens sidenav
        }
    else {
        document.getElementById("sidenav").style.left = "-640px";       //closes sidenav
        document.getElementById("bulletin").style.left = "0px";
            if (currentSelection != lastSelection) { //checks if selection is new
                setTimeout(() => {openNav(currentSelection);}, 600);
                }
        }
    lastSelection = currentSelection;
}




/* 




function oppSidenav(currentSelection) {
    if (document.getElementById("sidenav").style.left == "-640px") //checks if sidenav is closed
        document.getElementById("sidenav").style.left = "-640px"; //closes sidenav
        document.getElementById("bulletin").style.left = "0px";
        if (currentSelection != lastSelection) { //checks if selection is new
            setTimeout(() => {
                document.getElementById("frame").src = currentSelection;
                document.getElementById("sidenav").style.left = "0px";
                document.getElementById("bulletin").style.left = "640px";
            }, 600);
        }
        lastSelection = currentSelection;
}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * */