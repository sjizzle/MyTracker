// IFFE - Immediately Invoked Function Expression 
(function(){
    function Start()
    {
        console.log('App Started');
    }
    window.addEventListener("load", Start);

    let deleteButtons = document.querySelectorAll('.btn-danger');
    for(button of deleteButtons)
    {
        button.addEventListener('click',(event)=>{
            if(!confirm('Are you certain?'))
            {
                event.preventDefault();
                window.location.assign('/blockchain-list');
            }
        });
    }  
})();