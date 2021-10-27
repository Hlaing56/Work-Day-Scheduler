var date = moment().format("dddd, MMMM Do")

$("#currentDay").html(date);

// $(".container").on("click", function(event){
//      var element = event.target;  
//      console.log(element);
// });


$(".9am").on("click", "p", function() {
     text9 = $(this)
     .text()
     .trim();
   
     var textInput = $("<textarea>")
     .addClass("col-10")
     .val(text9);
   
     $(this).replaceWith(textInput);
   
     textInput.trigger("focus");
});
$(".9am").on("blur", "textarea", function() {
     text9 = $(this)
     .val()
     .trim();
   
     var taskP = $("<p>")
     .text(text9);
   
     $(this).replaceWith(taskP);
});
var save9am = function() {
     localStorage.setItem("9am", JSON.stringify(text9));
};
$(".s9am").on("click", function() {
     save9am();
});


$(".10am").on("click", "p", function() {
     text10 = $(this)
     .text()
     .trim();
   
     var textInput = $("<textarea>")
     .addClass("col-10")
     .val(text10);
   
     $(this).replaceWith(textInput);
   
     textInput.trigger("focus");
});
$(".10am").on("blur", "textarea", function() {
     text10 = $(this)
     .val()
     .trim();
   
     var taskP = $("<p>")
     .text(text10);
   
     $(this).replaceWith(taskP);
});
var save10am = function() {
     localStorage.setItem("10am", JSON.stringify(text10));
};
$(".s10am").on("click", function() {
     save10am();
});


$(".11am").on("click", "p", function() {
     text11 = $(this)
     .text()
     .trim();
   
     var textInput = $("<textarea>")
     .addClass("col-10")
     .val(text11);
   
     $(this).replaceWith(textInput);
   
     textInput.trigger("focus");
});
$(".11am").on("blur", "textarea", function() {
     text11 = $(this)
     .val()
     .trim();
   
     var taskP = $("<p>")
     .text(text11);
   
     $(this).replaceWith(taskP);
});
var save11am = function() {
     localStorage.setItem("11am", JSON.stringify(text11));
};
$(".s11am").on("click", function() {
     save11am();
});


$(".12pm").on("click", "p", function() {
     text12 = $(this)
     .text()
     .trim();
   
     var textInput = $("<textarea>")
     .addClass("col-10")
     .val(text12);
   
     $(this).replaceWith(textInput);
   
     textInput.trigger("focus");
});
$(".12pm").on("blur", "textarea", function() {
     text12 = $(this)
     .val()
     .trim();
   
     var taskP = $("<p>")
     .text(text12);
   
     $(this).replaceWith(taskP);
});
var save12pm = function() {
     localStorage.setItem("12pm", JSON.stringify(text12));
};
$(".s12pm").on("click", function() {
     save12pm();
});


$(".1pm").on("click", "p", function() {
     text13 = $(this)
     .text()
     .trim();
   
     var textInput = $("<textarea>")
     .addClass("col-10")
     .val(text13);
   
     $(this).replaceWith(textInput);
   
     textInput.trigger("focus");
});
$(".1pm").on("blur", "textarea", function() {
     text13 = $(this)
     .val()
     .trim();
   
     var taskP = $("<p>")
     .text(text13);
   
     $(this).replaceWith(taskP);
});
var save1pm = function() {
     localStorage.setItem("1pm", JSON.stringify(text13));
};
$(".s1pm").on("click", function() {
     save1pm();
});


$(".2pm").on("click", "p", function() {
     text14 = $(this)
     .text()
     .trim();
   
     var textInput = $("<textarea>")
     .addClass("col-10")
     .val(text14);
   
     $(this).replaceWith(textInput);
   
     textInput.trigger("focus");
});
$(".2pm").on("blur", "textarea", function() {
     text14 = $(this)
     .val()
     .trim();
   
     var taskP = $("<p>")
     .text(text14);
   
     $(this).replaceWith(taskP);
});
var save2pm = function() {
     localStorage.setItem("2pm", JSON.stringify(text14));
};
$(".s2pm").on("click", function() {
     save2pm();
});


$(".3pm").on("click", "p", function() {
     text15 = $(this)
     .text()
     .trim();
   
     var textInput = $("<textarea>")
     .addClass("col-10")
     .val(text15);
   
     $(this).replaceWith(textInput);
   
     textInput.trigger("focus");
});
$(".3pm").on("blur", "textarea", function() {
     text15 = $(this)
     .val()
     .trim();
   
     var taskP = $("<p>")
     .text(text15);
   
     $(this).replaceWith(taskP);
});
var save3pm = function() {
     localStorage.setItem("3pm", JSON.stringify(text15));
};
$(".s3pm").on("click", function() {
     save3pm();
});


$(".4pm").on("click", "p", function() {
     text16 = $(this)
     .text()
     .trim();
   
     var textInput = $("<textarea>")
     .addClass("col-10")
     .val(text16);
   
     $(this).replaceWith(textInput);
   
     textInput.trigger("focus");
});
$(".4pm").on("blur", "textarea", function() {
     text16 = $(this)
     .val()
     .trim();
   
     var taskP = $("<p>")
     .text(text16);
   
     $(this).replaceWith(taskP);
});
var save4pm = function() {
     localStorage.setItem("4pm", JSON.stringify(text16));
};
$(".s4pm").on("click", function() {
     save4pm();
});


$(".5pm").on("click", "p", function() {
     text17 = $(this)
     .text()
     .trim();
   
     var textInput = $("<textarea>")
     .addClass("col-10")
     .val(text17);
   
     $(this).replaceWith(textInput);
   
     textInput.trigger("focus");
});
$(".5pm").on("blur", "textarea", function() {
     text17 = $(this)
     .val()
     .trim();
   
     var taskP = $("<p>")
     .text(text17);
   
     $(this).replaceWith(taskP);
});
var save5pm = function() {
     localStorage.setItem("5pm", JSON.stringify(text17));
};
$(".s5pm").on("click", function() {
     save5pm();
});


var loadS9am = function(){
     var load9am = JSON.parse(localStorage.getItem("9am"));
     if (!load9am) {
          return false;
     }
     $(".9am p").text(load9am);
}

var loadS10am = function(){
     var load10am = JSON.parse(localStorage.getItem("10am"));
     if (!load10am) {
          return false;
     }
     $(".10am p").text(load10am);
}

var loadS11am = function(){
     var load11am = JSON.parse(localStorage.getItem("11am"));
     if (!load11am) {
          return false;
     }
     $(".11am p").text(load11am);
}

var loadS12pm = function(){
     var load12pm = JSON.parse(localStorage.getItem("12pm"));
     if (!load12pm) {
          return false;
     }
     $(".12pm p").text(load12pm);
}

var loadS1pm = function(){
     var load1pm = JSON.parse(localStorage.getItem("1pm"));
     if (!load1pm) {
          return false;
     }
     $(".1pm p").text(load1pm);
}

var loadS2pm = function(){
     var load2pm = JSON.parse(localStorage.getItem("2pm"));
     if (!load2pm) {
          return false;
     }
     $(".2pm p").text(load2pm);
}

var loadS3pm = function(){
     var load3pm = JSON.parse(localStorage.getItem("3pm"));
     if (!load3pm) {
          return false;
     }
     $(".3pm p").text(load3pm);
}

var loadS4pm = function(){
     var load4pm = JSON.parse(localStorage.getItem("4pm"));
     if (!load4pm) {
          return false;
     }
     $(".4pm p").text(load4pm);
}

var loadS5pm = function(){
     var load5pm = JSON.parse(localStorage.getItem("5pm"));
     if (!load5pm) {
          return false;
     }
     $(".5pm p").text(load5pm);
}

var auditTask = function() {
    // convert to moment object at 9:00am
    var nine = moment().set("hour", 9);
    if (moment().isSame(nine)) {
         $(".9am").removeClass("past");
         $(".9am").addClass("present");
    } else if (moment().isBefore(nine)){
        $(".9am").removeClass("past");
         $(".9am").addClass("future");
    }

    var ten = moment().set("hour", 10);
    if (moment().isSame(ten)) {
         $(".10am").removeClass("past");
         $(".10am").addClass("present");
    } else if (moment().isBefore(ten)){
        $(".10am").removeClass("past");
         $(".10am").addClass("future");
    }

    var eleven = moment().set("hour", 11);
    if (moment().isSame(eleven)) {
         $(".11am").removeClass("past");
         $(".11am").addClass("present");
    } else if (moment().isBefore(eleven)){
        $(".11am").removeClass("past");
         $(".11am").addClass("future");
    }

    var twele = moment().set("hour", 12);
    if (moment().isSame(twele)) {
         $(".12pm").removeClass("past");
         $(".12pm").addClass("present");
    } else if (moment().isBefore(twele)){
        $(".12pm").removeClass("past");
         $(".12pm").addClass("future");
    }

    var one = moment().set("hour", 13);
    if (moment().isSame(one)) {
         $(".1pm").removeClass("past");
         $(".1pm").addClass("present");
    } else if (moment().isBefore(one)){
        $(".1pm").removeClass("past");
         $(".1pm").addClass("future");
    }

    var two = moment().set("hour", 14);
    if (moment().isSame(two)) {
         $(".2pm").removeClass("past");
         $(".2pm").addClass("present");
    } else if (moment().isBefore(two)){
        $(".2pm").removeClass("past");
         $(".2pm").addClass("future");
    }

    var three = moment().set("hour", 15);
    if (moment().isSame(three)) {
         $(".3pm").removeClass("past");
         $(".3pm").addClass("present");
    } else if (moment().isBefore(three)){
        $(".3pm").removeClass("past");
         $(".3pm").addClass("future");
    }

    var four = moment().set("hour", 16);
    if (moment().isSame(four)) {
         $(".4pm").removeClass("past");
         $(".4pm").addClass("present");
    } else if (moment().isBefore(four)){
        $(".4pm").removeClass("past");
         $(".4pm").addClass("future");
    }

    var five = moment().set("hour", 17);
    if (moment().isSame(five)) {
         $(".5pm").removeClass("past");
         $(".5pm").addClass("present");
    } else if (moment().isBefore(five)){
        $(".5pm").removeClass("past");
         $(".5pm").addClass("future");
    }
};

auditTask();

loadS9am();
loadS10am();
loadS11am();
loadS12pm();
loadS1pm();
loadS2pm();
loadS3pm();
loadS4pm();
loadS5pm();