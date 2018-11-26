new function() {
    console.log("Загружено, работает");
    var table = document.getElementById('show_table');
    console.log(table);
    table.onclick = function() {
        var show = document.getElementById('towns_table_container');
        console.log(show);
        if (show.style.display != "flex")
        {show.style.display = "flex";
        table.innerText = "Спрятать таблицу";
        }
        else {show.style.display = "none";
        table.innerText = "Показать таблицу";
        }
    }
};

