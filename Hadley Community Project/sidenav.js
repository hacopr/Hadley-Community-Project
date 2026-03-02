let calendar = "calendar.html";
let organizations = "organizations.html";
let resources = "resources.html";
let about = "about.html";
let lastSelection = "none";
let sidenavStatus = 0;

function openSidenav(currentSelection) {
    document.getElementById("frame").src = currentSelection;
    document.getElementById("sidenav").style.left = "0px";
    document.getElementById("bulletin").style.left = "640px";
    sidenavStatus = 1;
}

function operateSidenav(currentSelection) {
    if (sidenavStatus == 0) {                                   //checks if sidenav is closed
        openSidenav(currentSelection);
        }
    else {
        document.getElementById("sidenav").style.left = "-640px";       //closes sidenav
        document.getElementById("bulletin").style.left = "0px";
        sidenavStatus = 0;
    }
    if (lastSelection != currentSelection) {
        setTimeout(() => {openSidenav(currentSelection);}, 600);
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