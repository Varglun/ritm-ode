let function_text; // use it later in calc;
let y_axis;
let x_axis;
let h = Number(document.getElementById("step").value);
let t_0 = Number(document.getElementById("initial_t").value);
let y_0 = [];
let t_start = Number(document.getElementById("start_t").value);
let t_finish = Number(document.getElementById("final_t").value);
let num_cycles_right = (t_finish - t_0) / h;
let num_cycles_left = (t_0 - t_start) / h;
let num_cycles_implicit_y = 100;
let but = document.getElementById("but_submit");
let text_fun = [];
let method = "euler_implicit";
let t_n = t_0;
let y_n = y_0;
let answer = document.getElementById("answer");
let t_answer = document.getElementById("t_answer");
let y_answer = document.getElementById("y_answer");
let list_y = [];
for (let i = 0; i < eq_counter; i++) {
    list_y.push([]);
}
let list_t = [];

function my_fun(t, y) {
    ans = [];
    for (let i = 0; i < y.length; i++) {
        ans.push(eval(text_fun[i]));
    }

    return ans;
}

function add_lists(list_1, list_2) {
    if (list_1.length != list_2.length) {
        throw "Different size lists";
    }
    let ans = [];
    for (let i = 0; i < list_1.length; i++) {
        ans.push(list_1[i] + list_2[i]);
    }

    return ans;
}

function mult_list_by_scalar(list, num) {
    let ans = [];
    for (let i = 0; i < list.length; i++) {
        ans.push(list[i] * num);
    }

    return ans;
}

function push_list_to_list(list_global, list_unit) {
    if (list_global.length != list_unit.length) {
        console.log("global: ", list_global);
        console.log("unit: ", list_unit);
        throw "Different sizes lists";
    }
    for (let i = 0; i < list_unit.length; i++) {
        list_global[i].push(list_unit[i]);
    }
}