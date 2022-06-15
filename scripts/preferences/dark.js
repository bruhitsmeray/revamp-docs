const checkbox = document.getElementById('checkbox');
window.onload=IfChecked();

checkbox.addEventListener('change', ()=>{
    ToggleDark();
});

function IfChecked() {
    if(checkbox.checked){
        ToggleDark();
    };
};

function ToggleDark(){
    document.body.classList.toggle('dark');
    console.log('Enjoy dark mode!');
};