function change() {
    /*
    document.getElementById('cgu').innerHTML = "CSIE@CGU"; 
    document.getElementById('good').innerHTML = "怎麼那麼棒！！.";     
    */
   $("#cgu").html("CSIE@CGU");
   $("#good").html("怎麼那麼棒！！.");
}
function new_button(){
    /*
    var btn = document.createElement("BUTTON"); 
    btn.innerHTML = "Change this document"; 
    document.body.appendChild(btn); 
    btn.addEventListener("click",change);
    */
    var change_btn = "<button id='change'>Change this document</button>";
    $("body").append(change_btn);
    $("#change").click(change);
}

$("#btn").click(new_button);