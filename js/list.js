window.onload = function() {
    var text = document.getElementById('it_add_text');
    var btn = document.getElementById('it_add_btn');
    var list = document.getElementById('it_added');
    console.log(list);
    btn.onclick = function(e) {
        e.preventDefault();
        var text_value = text.value;
        console.log(text_value);
        if (text_value) {
        list.innerHTML += "<li>" + text_value + "</li>";
        text.value = "";
        } else return false;
        

    }


}