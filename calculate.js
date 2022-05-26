
but.addEventListener("click", function() {
    h = Number(document.getElementById("step").value);
    t_0 = Number(document.getElementById("initial_t").value);
    y_0 = Number(document.getElementById("initial_y").value);
    t_start = Number(document.getElementById("start_t").value);
    t_finish = Number(document.getElementById("final_t").value);
    num_cycles_left = (t_0 - t_start) / h;
    num_cycles_right = (t_finish - t_0) / h;
    num_cycles_implicit_y = 100;
    method = document.getElementById("method").value;
    text_fun = document.getElementById("input_text").value;
    list_y = [];
    list_t = [];

    t_n = t_0;
    y_n = y_0;
    list_y.push(y_n);
    list_t.push(t_n);

    // find right part of graph
    if (method === "euler_implicit"){
        for (let i = 0; i < num_cycles_right; i++) {
            y_n = new_y_implicit_euler(y_n, t_n);
            t_n += h;
            list_y.push(y_n);
            list_t.push(t_n);
        }
    } else {
        for (let i = 0; i < num_cycles_right; i++) {
            y_n = new_y_explicit_kutta(y_n, t_n);
            t_n += h;
            list_y.push(y_n);
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
            list_y.push(y_n);
            list_t.push(t_n);
        }
    } else {
        for (let i = 0; i < num_cycles_left; i++) {
            y_n = new_y_explicit_kutta(y_n, t_n);
            t_n += h;
            list_y.push(y_n);
            list_t.push(t_n);
        }
    }
    
    draw_graph()
    animate();
})
