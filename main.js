
grid_size = 10;

function setup() {
    var canvas = createCanvas(501,501);
    background(255);

    img = createImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEQIjIPf46JHDygEtQPr2smeY0wS5WNp7VN3uFesolliGAPR6R');
}

function draw() {

    for(var x = 0; x < 501; x += 10){
        for(var y = 0; y < 501; y+= 10){
            rect(x, y, 10, 10);
        }
    }

}

$(document).ready(function(){
    $(".box")
    .draggable({ grid: [ grid_size, grid_size ] })

    .resizable({ grid: grid_size * 2 })
    
    .on("mouseover", function(){
        $( this ).addClass("move-cursor")
     })

    .on("mousedown", function(){
        $( this )
        .removeClass("move-cursor")
        .addClass("grab-cursor")
        .addClass("opac");

        $(" .text ").hide();

        })

    .on("mouseup", function(){
        $( this )
        .removeClass("grab-cursor")
        .removeClass("opac")
        .addClass("move-cursor");
    });

    $("img")
    .draggable({ grid: [ grid_size, grid_size ] })

    .resizable({ grid: grid_size * 2 })
    
    .on("mouseover", function(){
        $( this ).addClass("move-cursor")
     })

    .on("mousedown", function(){
        $( this )
        .removeClass("move-cursor")
        .addClass("grab-cursor")
        .addClass("opac");

        $(" .text ").hide();

        })

    .on("mouseup", function(){
        $( this )
        .removeClass("grab-cursor")
        .removeClass("opac")
        .addClass("move-cursor");
    });
});