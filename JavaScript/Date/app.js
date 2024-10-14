var obj = {
    name: "Aziz", // property
    age: 28, // property
    isVerified: true, // property
    result: function () {
      // method
      console.log("Chal raha he");
    },
  };
  
  // console.log(obj);
  // console.log("get single property ", obj.name);
  
  // obj.name = "Huzaifa"
  // console.log(obj);
  
  // console.log(obj.result());
  
  var now = new Date();
  
  console.log(now); // date
  console.log(typeof now); // get date type
  
  console.log(now.getDate()); // get date for date object
  console.log("Date", now.toLocaleDateString()); // full date
  
  var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  
  console.log("Day ", dayNames[now.getDay()]);
  
  console.log(now.getMonth());
  console.log(now.getFullYear());
  
  console.log(now.getHours())
  console.log(now.getMinutes())
  console.log(now.getSeconds())
  
  var hours = document.getElementById("hours")
  var minutes = document.getElementById("minutes")
  var seconds = document.getElementById("seconds")
  var am_pm = document.getElementById("ampm")
  
  setInterval(function(){
      var currentDate = new Date();
      var currentSeconds = currentDate.getSeconds();
      var currentMinutes = currentDate.getMinutes();
      var currentHours = currentDate.getHours();
  
      hours.innerText = currentDate.getHours();
      if (currentHours < 13){
        am_pm.innerText = "AM";
      }else{
        hours.innerText = currentDate.getHours() - 12;
        am_pm.innerText = "PM";
      }
      

      minutes.innerText = currentDate.getMinutes();
      if(currentMinutes < 10 ) minutes.innerText = "0"+currentDate.getMinutes();
      seconds.innerText = currentDate.getSeconds();
      if(currentSeconds < 10){
        seconds.innerText = "0"+currentDate.getSeconds();
      } 
  }, 1000);
