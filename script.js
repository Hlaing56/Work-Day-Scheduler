var date = moment().format("dddd, MMMM Do")

$("#currentDay").html(date);

console.log(moment());

var hour = moment().format("H")
for( var i=0; i<24; i++ ) {
     var hourId = "#"+ i;
     
     if (i < hour){
         $(hourId).addClass("past");
     } else if(i == hour) {
         $(hourId).addClass("present");
     } else if( i > hour){
         $(hourId).addClass("future");
     }  
};


//save function
$(".saveBtn").on("click", function() {
     for( var i = 9; i<18; i++ ) {
          var Isave = $("."+i+" textarea").val().trim();
               
          localStorage.setItem(i, JSON.stringify(Isave));
     }   
});


// load function
var load = function(){
     for( var i = 9; i<20; i++ ) {
     var loadAll = "load" + i;

     loadAll = JSON.parse(localStorage.getItem(i));
     $("."+i+" textarea").text(loadAll);
     }
}

load();

function refresh() {
     window .location.reload();
}

window.setInterval('refresh()', (10000 * 6)* 30);