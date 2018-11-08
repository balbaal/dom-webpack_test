export function multiply_ab(){
    var data_a = document.getElementById("input_a").value;
    var data_b = document.getElementById("input_b").value;

    if (data_b == "") {
        data_b = 0;
    }

    if (data_a == "") {
        data_a = 0;
    }

    document.getElementById("result_1").innerHTML = data_a*data_b;
}

export function multiply_xy(){
        
    var data_x = 2;
    var data_y = document.getElementById("input_y").value;
    
    if (data_y == "") {
        data_y = 0;
    }

    document.getElementById("result_2").innerHTML = data_x*data_y;
}
