(function(){
    function Start()
    {
        console.log('App Started');
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
    }
    window.addEventListener("load", Start);
})();