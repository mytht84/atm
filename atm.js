/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    $('#englishButton').click(function(e){
        e.preventDefault();
        $(this).progressTimed(2);
    });
    
    $('#spainButton').click(function(e){
        e.preventDefault();
        $(this).progressTimed(2);
    });
    
    $('#germanButton').click(function(e){
        e.preventDefault();
        $(this).progressTimed(2);
    });
  
    
})(jQuery);