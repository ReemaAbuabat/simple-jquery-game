
  var counter = 0;
  var seconds = 0;

  document.getElementById("counter").innerHTML = counter;
  document.getElementById("timer").innerHTML = seconds;

$('#start1Icon').hide();

$('#greyB').hide();

$('#final').hide();

$('#start2Icon').mouseover( function() {
  $('#start2Icon').hide();
  //timer starts 
    window.addEventListener("load",startT(), false);
  
//change postion
  $('#greyB').show();
    
  $('#greyB').css('top', Math.ceil(Math.random() * 450));
    
  $('#greyB').css('left', Math.ceil(Math.random() * 450));
    

    
    $('#start1Icon').mouseover(function() {
  
  
  $('#greyB').show();
        
  $('#greyB').css('top', Math.ceil(Math.random() * 450));
        
  $('#greyB').css('left', Math.ceil(Math.random() * 450));
        
  $('#start1Icon').hide();
    });

$('#greyB').mouseover(function() {
  ++counter;
    
  document.getElementById("counter").innerHTML = counter;
  
  if(counter == 10){
      
  $('#final').show('large');
      
    document.getElementById("finalCount").innerHTML = counter;
      
     document.getElementById("finalSeconds").innerHTML = seconds;
  }
  
  $('#greyB').hide('fast');
    
  $('#start1Icon').show('fast');
  
});
    
});
// timer function
function startT(){

   window.setInterval("s()", 1000); 
   }

function s(){
      ++seconds;
     document.getElementById("timer").innerHTML = seconds;
    }


    
   

