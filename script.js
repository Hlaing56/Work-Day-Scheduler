

var date = moment().format("dddd, MMMM Do")


console.log(moment());

$("#currentDay").html(date);

var auditTask = function() {
    // convert to moment object at 9:00am
    var nine = moment().set("hour", 9);
    if (moment().isSame(nine)) {
         $(".9am").removeClass("bg-secondary");
         $(".9am").addClass("bg-danger");
    } else if (moment().isBefore(nine)){
        $(".9am").removeClass("bg-secondary");
         $(".9am").addClass("bg-success");
    }

    var ten = moment().set("hour", 10);
    if (moment().isSame(ten)) {
         $(".10am").removeClass("bg-secondary");
         $(".10am").addClass("bg-danger");
    } else if (moment().isBefore(ten)){
        $(".10am").removeClass("bg-secondary");
         $(".10am").addClass("bg-success");
    }

    var eleven = moment().set("hour", 11);
    if (moment().isSame(eleven)) {
         $(".11am").removeClass("bg-secondary");
         $(".11am").addClass("bg-danger");
    } else if (moment().isBefore(eleven)){
        $(".11am").removeClass("bg-secondary");
         $(".11am").addClass("bg-success");
    }

    var twele = moment().set("hour", 12);
    if (moment().isSame(twele)) {
         $(".12pm").removeClass("bg-secondary");
         $(".12pm").addClass("bg-danger");
    } else if (moment().isBefore(twele)){
        $(".12pm").removeClass("bg-secondary");
         $(".12pm").addClass("bg-success");
    }

    var one = moment().set("hour", 13);
    if (moment().isSame(one)) {
         $(".1pm").removeClass("bg-secondary");
         $(".1pm").addClass("bg-danger");
    } else if (moment().isBefore(one)){
        $(".1pm").removeClass("bg-secondary");
         $(".1pm").addClass("bg-success");
    }

    var two = moment().set("hour", 14);
    if (moment().isSame(two)) {
         $(".2pm").removeClass("bg-secondary");
         $(".2pm").addClass("bg-danger");
    } else if (moment().isBefore(two)){
        $(".2pm").removeClass("bg-secondary");
         $(".2pm").addClass("bg-success");
    }

    var three = moment().set("hour", 15);
    if (moment().isSame(three)) {
         $(".3pm").removeClass("bg-secondary");
         $(".3pm").addClass("bg-danger");
    } else if (moment().isBefore(three)){
        $(".3pm").removeClass("bg-secondary");
         $(".3pm").addClass("bg-success");
    }

    var four = moment().set("hour", 16);
    if (moment().isSame(four)) {
         $(".4pm").removeClass("bg-secondary");
         $(".4pm").addClass("bg-danger");
    } else if (moment().isBefore(four)){
        $(".4pm").removeClass("bg-secondary");
         $(".4pm").addClass("bg-success");
    }

    var five = moment().set("hour", 17);
    if (moment().isSame(five)) {
         $(".5pm").removeClass("bg-secondary");
         $(".5pm").addClass("bg-danger");
    } else if (moment().isBefore(five)){
        $(".5pm").removeClass("bg-secondary");
         $(".5pm").addClass("bg-success");
    }
};

  auditTask();