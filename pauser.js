var pauser = function(){
	$('.clickTd').css('pointer-events','none')
  	setTimeout(function(){
            $('.clickTd').css('pointer-events','auto')
        }, 4000)
};