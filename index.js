function ham() {
    var dropdown = document.getElementById('dropdown');
    var body = document.body;

    dropdown.style.display = 'block' ;
    // body.style.overflow =  'hidden'; 
}

function close_btn(){
    var dropdown = document.getElementById('dropdown');
    var body = document.body;

    dropdown.style.display = 'none'; 
    // body.style.overflow = 'visible' ; 
}

function labelFocus() {
    var input = document.getElementById('tail_input');
    input.style.display = "block";
    input.focus(); // Focus on the input field when the label container receives focus
}

function labelBlur() {
    var input = document.getElementById('tail_input');
    var label = document.getElementById('tail_label');
    // Check if the input field is not focused before hiding it
    if (!input.contains(document.activeElement)) {
        input.style.display = "none";
        label.style.display = "block";
    }
}

function inputBlur() {
    var input = document.getElementById('tail_input');
    var label = document.getElementById('tail_label');
    if (input.value.trim() === "") {
        input.style.display = "none";
        label.style.display = "block";
    }
}