function ksi_1(y_n) {
    return y_n;
}

function ksi_2(y_n, t_n) {
    return y_n + h * 1/2 * my_fun(t_n, ksi_1(y_n));
}

function ksi_3(y_n, t_n) {
    return y_n + h * 1/2 * my_fun(t_n + 1/2 * h, ksi_2(y_n, t_n));
}

function ksi_4(y_n, t_n) {
    return y_n  + h * my_fun(t_n + 1/2 * h, ksi_3(y_n, t_n));
}

function new_y_explicit_kutta(y_n, t_n) {
    return y_n + h * 1/6 * (my_fun(t_n, ksi_1(y_n)) + 2 * my_fun(t_n + 1/2 * h, ksi_2(y_n, t_n)) + 2 * my_fun(t_n + 1/2 * h, ksi_3(y_n, t_n)) + my_fun(t_n + h, ksi_4(y_n, t_n)));
}


