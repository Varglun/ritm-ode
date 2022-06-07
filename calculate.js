


but.addEventListener("click", function() {
    // "Calculate & Plot" button

    document.getElementById("see_values").style.display = "";
    document.getElementById("save_csv").style.display = "";
    y_axis = document.getElementById("show_y_axis").value;
    x_axis = document.getElementById("show_x_axis").value;
    h = Number(document.getElementById("step").value);
    t_0 = Number(document.getElementById("initial_t").value);

    y_0 = []; // initila values of y vector
    for (let i = 0; i < eq_counter; i++) {
        y_0.push(Number(document.getElementById("initial_y_" + i).value))
    }
    t_start = Number(document.getElementById("start_t").value);
    t_finish = Number(document.getElementById("final_t").value);
    num_cycles_left = (t_0 - t_start) / h; // number of cycles for t < t_0
    num_cycles_right = (t_finish - t_0) / h; // number of cycles for t > t_0
    num_cycles_implicit_y = 100; // number of internal cycles for the implicit calculations
    method = document.getElementById("method").value;
    text_fun = []; // text strings for functions f(t, y) on the right side of equations
    for (let i = 0; i < eq_counter; i++) {
        // change math functions designation to javascript friendly
        function_text = document.getElementById("input_text_" + i).value; 
        for (let j = 0; j < eq_counter; j++) {
            function_text = function_text.replaceAll("y_" + j, "y[" + j + "]");
        }
        function_text = function_text.replaceAll("sin", "Math.sin");
        function_text = function_text.replaceAll("cos", "Math.cos");
        function_text = function_text.replaceAll("exp", "Math.exp");
        function_text = function_text.replaceAll("tan", "Math.tan");
        function_text = function_text.replaceAll("atan", "Math.atan");
        function_text = function_text.replaceAll("ln", "Math.log");
        function_text = function_text.replaceAll("asin", "Math.asin");
        function_text = function_text.replaceAll("acos", "Math.acos");
        function_text = function_text.replaceAll("pow", "Math.pow");
        function_text = function_text.replaceAll("pi", "Math.PI");
        function_text = function_text.replaceAll("sinh", "Math.sinh");
        function_text = function_text.replaceAll("cosh", "Math.cosh");
        function_text = function_text.replaceAll("tanh", "Math.tanh");
        function_text = function_text.replaceAll("asinh", "Math.asinh");
        function_text = function_text.replaceAll("acosh", "Math.acosh");
        function_text = function_text.replaceAll("atanh", "Math.atanh");
        text_fun.push(function_text);
    }
    
    list_y = []; // list of all y-values evaluated
    for (let i = 0; i < eq_counter; i++) {
        list_y.push([]);
    }
    list_t = []; // list of all times evaluated

    t_n = t_0; // initialize value of t
    y_n = y_0; // initialize value of y
    push_list_to_list(list_y, y_n);
    list_t.push(t_n);

    // find right part of graph
    if (method === "euler_implicit"){
        for (let i = 0; i < num_cycles_right; i++) {
            y_n = new_y_implicit_euler(y_n, t_n);
            t_n += h;
            push_list_to_list(list_y, y_n);
            list_t.push(t_n);
        }
    } else {
        for (let i = 0; i < num_cycles_right; i++) {
            y_n = new_y_explicit_kutta(y_n, t_n);
            t_n += h;
            push_list_to_list(list_y, y_n);
            list_t.push(t_n);
        }
    }


    // find left part of graph

    h = -h;
    t_n = t_0;
    y_n = y_0;

    if (method === "euler_implicit"){
        for (let i = 0; i < num_cycles_left; i++) {
            y_n = new_y_implicit_euler(y_n, t_n);
            t_n += h;
            push_list_to_list(list_y, y_n);
            list_t.push(t_n);
        }
    } else {
        for (let i = 0; i < num_cycles_left; i++) {
            y_n = new_y_explicit_kutta(y_n, t_n);
            t_n += h;
            push_list_to_list(list_y, y_n);
            list_t.push(t_n);
        }
    }
    
    draw_graph(y_axis, x_axis);
    animate();
})
