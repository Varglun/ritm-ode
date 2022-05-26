let h = Number(document.getElementById("step").value);
let t_0 = Number(document.getElementById("initial_t").value);
let y_0 = Number(document.getElementById("initial_y").value);
let t_interest = Number(document.getElementById("final_t").value);
let num_cycles = t_interest / h;
let num_cycles_implicit_y = 100;
let but = document.getElementById("but_submit");
let text_fun = "";
let method = "euler_implicit";
let t_n = t_0;
let y_n = y_0;
let answer = document.getElementById("answer");
let list_y = [];
let list_t = [];

function my_fun(t, y) {
    return eval(text_fun);
}