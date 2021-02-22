document.getElementById("start").addEventListener('click', function(){
    const hide = document.getElementById('hide');
    hide.classList.add('hidden');
    const hideB = document.getElementById('start');
    hideB.classList.add('hidden');
    const hideC = document.getElementById('vid');
    hideC.classList.remove('hidden');
    hideC.classList.add('show');
});