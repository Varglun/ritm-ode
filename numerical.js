let h = Number(document.getElementById("step").value);
let t_0 = Number(document.getElementById("initial_t").value);
let y_0 = Number(document.getElementById("initial_y").value);
let t_start = Number(document.getElementById("start_t").value);
let t_finish = Number(document.getElementById("final_t").value);
let num_cycles_right = (t_finish - t_0) / h;
let num_cycles_left = (t_0 - t_start) / h;
let num_cycles_implicit_y = 100;
let but = document.getElementById("but_submit");
let text_fun = "";
let method = "euler_implicit";
let t_n = t_0;
let y_n = y_0;
let answer = document.getElementById("answer");
let t_answer = document.getElementById("t_answer");
let y_answer = document.getElementById("y_answer");
let list_y = [];
let list_t = [];

function my_fun(t, y) {
    return eval(text_fun);
}