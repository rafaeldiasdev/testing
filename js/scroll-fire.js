 var options = [
     {  selector: '#staggered-test', offset: 400, callback: function(el) 
     {  Materialize.showStaggeredList($(el)); } },
     
     {  selector: '#image-test', offset: 500, callback: function(el) 
     {  Materialize.fadeInImage($(el)); } } 
]; 
Materialize.scrollFire(options);