function ksi_1(y_n) {
    return y_n;
}

function ksi_2(y_n, t_n) {
    // return y_n + h * 1/2 * my_fun(t_n, ksi_1(y_n));
    return add_lists(y_n, mult_list_by_scalar(my_fun(t_n, ksi_1(y_n)), h * 1/2));
}

function ksi_3(y_n, t_n) {
    // return y_n + h * 1/2 * my_fun(t_n + 1/2 * h, ksi_2(y_n, t_n));
    return add_lists(y_n, mult_list_by_scalar(my_fun(t_n + 1/2 * h, ksi_2(y_n, t_n)), h * 1/2));
}

function ksi_4(y_n, t_n) {
    // return y_n  + h * my_fun(t_n + 1/2 * h, ksi_3(y_n, t_n));
    return add_lists(y_n, mult_list_by_scalar(my_fun(t_n + 1/2 * h, ksi_3(y_n, t_n)), h));
}

function new_y_explicit_kutta(y_n, t_n) {
    // return y_n + h * 1/6 * (my_fun(t_n, ksi_1(y_n)) + 2 * my_fun(t_n + 1/2 * h, ksi_2(y_n, t_n)) + 2 * my_fun(t_n + 1/2 * h, ksi_3(y_n, t_n)) + my_fun(t_n + h, ksi_4(y_n, t_n)));
    return add_lists(y_n, mult_list_by_scalar(add_lists(my_fun(t_n, ksi_1(y_n)), add_lists(mult_list_by_scalar(my_fun(t_n + 1/2 * h, ksi_2(y_n, t_n)), 2), 
    add_lists(mult_list_by_scalar(my_fun(t_n + 1/2 * h, ksi_3(y_n, t_n)), 2), my_fun(t_n + h, ksi_4(y_n, t_n))))), h * 1/6));
}


