function new_y_implicit_euler(y_n, t_n) {
    let y_n_ = add_lists(y_n, mult_list_by_scalar(my_fun(t_n, y_n), h));
    for (let i = 0; i < num_cycles_implicit_y; i++) {
        y_n_ = new_y_implicit_euler_helper(y_n, t_n, y_n_);
    }
    return y_n_;
}

function new_y_implicit_euler_helper(y_n, t_n, y_n_) {
    return add_lists(y_n, mult_list_by_scalar(add_lists(my_fun(t_n, y_n), my_fun(t_n + h, y_n_)), h*1/2));
}


