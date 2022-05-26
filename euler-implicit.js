function new_y_implicit_euler(y_n, t_n) {
    let y_n_ = y_n + h * my_fun(t_n, y_n);
    for (let i = 0; i < num_cycles_implicit_y; i++) {
        y_n_ = new_y_implicit_euler_helper(y_n, t_n, y_n_);
    }
    return y_n_;
}

function new_y_implicit_euler_helper(y_n, t_n, y_n_) {
    return y_n + h * 1/2 * (my_fun(t_n, y_n) + my_fun(t_n + h, y_n_));
}




