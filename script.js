//step 1: put current date on web page using moment()
//step 2: compare the current hour with time-blocks
//ste  3: translate time-blocks to military times
//step 4: use the css classes for present, past or future
//compare the time-blocks with moment()
// if moment() > time-blocks =>past
// if moment() == time-block => Present
// if  moment() < time-blokcs => future
//step 4: grap the textarea value and store it in localstorage

var timeBlocksArr=[9,10,11,12,13,14,15,16,17] //translate time-blocks to military times

var currenthour= moment().hour()
           
var currentDay =$("#currentDay")  // document.querySelector("#currentDay")
console.log(currenthour)

var local =[localStorage.getItem("local9"),localStorage.getItem("local10"),localStorage.getItem("local11"),localStorage.getItem("local12"),localStorage.getItem("local13"),localStorage.getItem("local14"),localStorage.getItem("local15"),localStorage.getItem("local16"),localStorage.getItem("local17")]

var systemTime=moment().format("dddd, MMMM Do")
currentDay.text(systemTime)   // currentDay.textContent=systemTime

function displayTimeBlockColors(){
    for(var i=0; i < timeBlocksArr.length;i++){
        //this would be past 
        var currentTextEl = $("#" +timeBlocksArr[i])

        if(currenthour>timeBlocksArr[i]){
          
           currentTextEl.addClass("past")
         }
         else if(currenthour=== timeBlocksArr[i]){
            currentTextEl.addClass("present")
         }
         else if(currenthour < timeBlocksArr[i]){
            currentTextEl.addClass("future") 
         }
    }
}

function saveInput(){
   localStorage.setItem("local9", $('#9').val())
   localStorage.setItem("local10", $('#10').val())
   localStorage.setItem("local11", $('#11').val())
   localStorage.setItem("local12", $('#12').val())
   localStorage.setItem("local13", $('#13').val())
   localStorage.setItem("local14", $('#14').val())
   localStorage.setItem("local15", $('#15').val())
   localStorage.setItem("local16", $('#16').val())
   localStorage.setItem("local17", $('#17').val())







}

displayTimeBlockColors()