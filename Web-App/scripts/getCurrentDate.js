console.log("get currentDate worked!");
$(function(){
    var date = new Date();
    var day = date.getUTCDate();
    var month = date.getUTCMonth() + 1;
    var year = date.getFullYear();
    var currentDate = year + '-' + month + '-' + day;
    document.getElementById("currentDate").innerHTML = year + '-' + month + '-' + day;
    // if(true) {
    //   console.log(currentDate);
    // }
    // if (currentDate === "2018-2-5") {
    //   console.log("dates matched!");
    // }
    // for(i in)
});
