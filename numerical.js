let function_text; // list of string representations of f(t,y_i);
let y_axis; // what to show on y-axis
let x_axis; // what to show on x-axis
let h = Number(document.getElementById("step").value);
let t_0 = Number(document.getElementById("initial_t").value);
let y_0 = [];
let t_start = Number(document.getElementById("start_t").value);
let t_finish = Number(document.getElementById("final_t").value);
let num_cycles_right = (t_finish - t_0) / h; // number of cycles for t > t_0
let num_cycles_left = (t_0 - t_start) / h; // number of cycles for t < t_0
let num_cycles_implicit_y = 100; // number of internal cycles for the implicit calculations
let but = document.getElementById("but_submit");
let text_fun = []; // text strings for functions f(t, y) on the right side of equations
let method = "euler_implicit";
let t_n = t_0; // initialize value of t
let y_n = y_0; // initialize value of y
let answer = document.getElementById("answer");
let t_answer = document.getElementById("t_answer");
let y_answer = document.getElementById("y_answer");
let list_y = []; // list of all y-values evaluated
for (let i = 0; i < eq_counter; i++) {
    // add place for each componet
    list_y.push([]);
}
let list_t = [];  // list of all times evaluated

function my_fun(t, y) {
    // evaluates string representation of f(t,y)
    ans = [];
    for (let i = 0; i < y.length; i++) {
        ans.push(eval(text_fun[i]));
    }

    return ans;
}

function add_lists(list_1, list_2) {
    // returns elementwise sum of lists

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
    // returns a list multiplied with a num

    let ans = [];
    for (let i = 0; i < list.length; i++) {
        ans.push(list[i] * num);
    }

    return ans;
}

function push_list_to_list(list_global, list_unit) {
    // list_global is a list of lists. 
    // list_unit is a list
    // pishes i-th element of the list_unit to the end
    // of the i-th list of the list_global

    if (list_global.length != list_unit.length) {
        console.log("global: ", list_global);
        console.log("unit: ", list_unit);
        throw "Different sizes lists";
    }
    for (let i = 0; i < list_unit.length; i++) {
        list_global[i].push(list_unit[i]);
    }
}