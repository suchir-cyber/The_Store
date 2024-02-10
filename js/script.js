var menuitems = document.getElementById("menuitems");
menuitems.style.maxHeight = "0px";
function menu_drop_down(){
if( menuitems.style.maxHeight == "0px"){
    menuitems.style.maxHeight = "200px"
}
else{
    menuitems.style.maxHeight = "0px";
}
}