(function(){
    
    const header = document.getElementById('header');
    console.log(header)
    window.onscroll = () => {
        if(window.scrollY > 50){
            header.classList.add('header_active');
        }
        else{
            header.classList.remove('header_active');
        }
    }
    console.log(header);
}())