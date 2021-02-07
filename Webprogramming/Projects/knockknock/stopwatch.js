var sw = {
    // (A) INITIALIZE
    etime : null, // HTML time display
    erst : null, // HTML reset button
    ego : null, // HTML start/stop button
    init : function () {
      // (A1) GET HTML ELEMENTS
      sw.etime = document.getElementById("sw-time");
      sw.erst = document.getElementById("sw-rst");
      sw.ego = document.getElementById("sw-go");
  
      // (A2) ENABLE BUTTON CONTROLS
      sw.erst.addEventListener("click", sw.reset);
      sw.erst.disabled = false;
      sw.ego.addEventListener("click", sw.start);
      sw.ego.disabled = false;
    },
  
    // (B) TIMER ACTION
    timer : null, // timer object
    now : 0, // current elapsed time
    tick : function () {
      // (B1) CALCULATE HOURS, MINS, SECONDS
      sw.now++;
      var remain = sw.now;
      var hours = Math.floor(remain / 3600);
      remain -= hours * 3600;
      var mins = Math.floor(remain / 60);
      remain -= mins * 60;
      var secs = remain;
  
      // (B2) UPDATE THE DISPLAY TIMER
      if (hours<10) { hours = "0" + hours; }
      if (mins<10) { mins = "0" + mins; }
      if (secs<10) { secs = "0" + secs; }
      sw.etime.innerHTML = hours + ":" + mins + ":" + secs;
    },
    
    // (C) START!
    start : function () {
      sw.timer = setInterval(sw.tick, 1000);
      sw.ego.value = "Stop";
      sw.ego.removeEventListener("click", sw.start);
      sw.ego.addEventListener("click", sw.stop);
    },
  
    // (D) STOP
    stop  : function () {
      clearInterval(sw.timer);
      sw.timer = null;
      sw.ego.value = "Start";
      sw.ego.removeEventListener("click", sw.stop);
      sw.ego.addEventListener("click", sw.start);
    },
  
    // (E) RESET
    reset : function () {
      if (sw.timer != null) { sw.stop(); }
      sw.now = -1;
      sw.tick();
    }
  };


  var sw2 = {
    // (A) INITIALIZE
    etime2 : null, // HTML time display
    erst2 : null, // HTML reset button
    ego2 : null, // HTML start/stop button
    init : function () {
      // (A1) GET HTML ELEMENTS
      sw2.etime2 = document.getElementById("sw-time2");
      sw2.erst2 = document.getElementById("sw-rst2");
      sw2.ego2 = document.getElementById("sw-go2");
  
      // (A2) ENABLE BUTTON CONTROLS
      sw2.erst2.addEventListener("click", sw2.reset);
      sw2.erst2.disabled = false;
      sw2.ego2.addEventListener("click", sw2.start);
      sw2.ego2.disabled = false;
    },
  
    // (B) TIMER ACTION
    timer2 : null, // timer object
    now2 : 0, // current elapsed time
    tick : function () {
      // (B1) CALCULATE HOURS, MINS, SECONDS
      sw2.now2++;
      var remain2 = sw2.now2;
      var hours2 = Math.floor(remain2 / 3600);
      remain2 -= hours2 * 3600;
      var mins2 = Math.floor(remain2 / 60);
      remain2 -= mins2 * 60;
      var secs2 = remain2;
  
      // (B2) UPDATE THE DISPLAY TIMER
      if (hours2<10) { hours2 = "0" + hours2; }
      if (mins2<10) { mins2 = "0" + mins2; }
      if (secs2<10) { secs2 = "0" + secs2; }
      sw2.etime2.innerHTML = hours2 + ":" + mins2+ ":" + secs2;
    },
    
    // (C) START!
    start : function () {
      sw2.timer2 = setInterval(sw2.tick, 1000);
      sw2.ego2.value = "Stop";
      sw2.ego2.removeEventListener("click", sw2.start);
      sw2.ego2.addEventListener("click", sw2.stop);
      console.log("check")
    },
  
    // (D) STOP
    stop  : function () {
      clearInterval(sw2.timer2);
      sw2.timer2 = null;
      sw2.ego2.value = "Start";
      sw2.ego2.removeEventListener("click", sw2.stop);
      sw2.ego2.addEventListener("click", sw2.start);
    },
  
    // (E) RESET
    reset : function () {
      if (sw2.timer2 != null) { sw2.stop(); }
      sw2.now2 = -1;
      sw2.tick();
    }
  };


  var sw3 = {
    // (A) INITIALIZE
    etime3 : null, // HTML time display
    erst3 : null, // HTML reset button
    ego3 : null, // HTML start/stop button
    init : function () {
      // (A1) GET HTML ELEMENTS
      sw3.etime3 = document.getElementById("sw-time3");
      sw3.erst3 = document.getElementById("sw-rst3");
      sw3.ego3 = document.getElementById("sw-go3");
  
      // (A2) ENABLE BUTTON CONTROLS
      sw3.erst3.addEventListener("click", sw3.reset);
      sw3.erst3.disabled = false;
      sw3.ego3.addEventListener("click", sw3.start);
      sw3.ego3.disabled = false;
    },
  
    // (B) TIMER ACTION
    timer3 : null, // timer object
    now3 : 0, // current elapsed time
    tick : function () {
      // (B1) CALCULATE HOURS, MINS, SECONDS
      sw3.now3++;
      var remain3 = sw3.now3;
      var hours3 = Math.floor(remain3 / 3600);
      remain3 -= hours3 * 3600;
      var mins3 = Math.floor(remain3 / 60);
      remain3 -= mins3 * 60;
      var secs3 = remain3;
  
      // (B2) UPDATE THE DISPLAY TIMER
      if (hours3<10) { hours3 = "0" + hours3; }
      if (mins3<10) { mins3 = "0" + mins3; }
      if (secs3<10) { secs3 = "0" + secs3; }
      sw3.etime3.innerHTML = hours3 + ":" + mins3+ ":" + secs3;
    },
    
    // (C) START!
    start : function () {
      sw3.timer3 = setInterval(sw3.tick, 1000);
      sw3.ego3.value = "Stop";
      sw3.ego3.removeEventListener("click", sw3.start);
      sw3.ego3.addEventListener("click", sw3.stop);
      console.log("check")
    },
  
    // (D) STOP
    stop  : function () {
      clearInterval(sw3.timer3);
      sw3.timer3 = null;
      sw3.ego3.value = "Start";
      sw3.ego3.removeEventListener("click", sw3.stop);
      sw3.ego3.addEventListener("click", sw3.start);
    },
  
    // (E) RESET
    reset : function () {
      if (sw3.timer3 != null) { sw3.stop(); }
      sw3.now3 = -1;
      sw3.tick();
    }
  };




  window.addEventListener("load", sw.init);
  window.addEventListener("load", sw2.init); 
   window.addEventListener("load", sw3.init);