  
   const scrollBtn = document.querySelector('#homebtn');
    const section2 = document.querySelector('#about');

    window.addEventListener('scroll', () =>{
      const rect = section2.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if(rect.top < windowHeight * 0.2 && rect.bottom > 0){
      scrollBtn.classList.add('show');
      }
      else{       
        scrollBtn.classList.remove('show');
      }
    });