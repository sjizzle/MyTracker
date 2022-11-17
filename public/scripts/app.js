// IFFE - Immediately Invoked Function Expression 

(function(){
    function Start()
    {
        console.log('App Started');
        let deletionButtons = document.querySelectorAll('.btn-danger');
    for(button of deletionButtons)
    {
        button.addEventListener('click',(event)=>{
            if(!confirm('Are you sure?'))
            {
                event.preventDefault();
                window.location.assign('/blockchain');
            }
        });
    }  
    }
    window.addEventListener("load", Start);
})();