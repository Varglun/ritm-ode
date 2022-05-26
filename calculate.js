
but.addEventListener("click", function() {
    h = Number(document.getElementById("step").value);
    t_0 = Number(document.getElementById("initial_t").value);
    y_0 = Number(document.getElementById("initial_y").value);
    t_interest = Number(document.getElementById("final_t").value);
    num_cycles = t_interest / h;
    num_cycles_implicit_y = 100;
    method = document.getElementById("method").value;
    text_fun = document.getElementById("input_text").value;
    list_y = [];
    list_t = [];

    t_n = t_0;
    y_n = y_0;
    list_y.push(y_n);
    list_t.push(t_n);

    if (method === "euler_implicit"){
        for (let i = 0; i < num_cycles; i++) {
            y_n = new_y_implicit_euler(y_n, t_n);
            t_n += h;
            list_y.push(y_n);
            list_t.push(t_n);
        }
    } else {
        for (let i = 0; i < num_cycles; i++) {
            y_n = new_y_explicit_kutta(y_n, t_n);
            t_n += h;
            list_y.push(y_n);
            list_t.push(t_n);
        }
    }

    answer.innerHTML = "Answer: " + y_n;

    draw_graph();
})
