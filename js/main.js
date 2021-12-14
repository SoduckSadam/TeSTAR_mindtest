(function () { 
    const txt = document.querySelector('.windowW');
    const getWidth = function(){
      let width = window.innerWidth;
      return width;
    }
    const txtWidth = function(){
      txt.innerHTML = getWidth()+"px";
    }
    
    txtWidth();
    window.addEventListener('resize', txtWidth);
  })()