function new_y_implicit_euler(y_n, t_n) {
    // y_n is a vector (list of values), t_n is a scalar
    // uses implicit euler to find next point
    // y_{n+1}  = y_{n} + h * f(t_{n+1}, y_{n+1})
    // But this envolves solving algebraic equation
    // Therefore we use iteration method:
    //     1. y[0] = y_{n} + h * f(t_{n}, y_{n})
    //     2. y[1] = y_{n} + h * 1/2 * (f(t_{n}, y_{n}) + f(t_{n+1}, y_[0]))
    //     3. y[2] = y_{n} + h * 1/2 * (f(t_{n}, y_{n}) + f(t_{n+1}, y_[1]))
    //     ...
    //     repeat 100 times (or num_cycles_implicit_y)
    //     y_{n+1} = y[100]
    


    let y_n_ = add_lists(y_n, mult_list_by_scalar(my_fun(t_n, y_n), h)); // this is y[0]

    for (let i = 0; i < num_cycles_implicit_y; i++) {
        y_n_ = new_y_implicit_euler_helper(y_n, t_n, y_n_); // this is y[i+1]
    }
    return y_n_;
}

function new_y_implicit_euler_helper(y_n, t_n, y_n_) {
    // y_n and y_n_ are a vectors (lists of values), t_n is a scalar
    // helper function for new_y_implicit_euler
    // takes y_n for y_{n}, t_n for t_{n} and y_n_ for y[i]
    // returns y_{n} + h * 1/2 * (f(t_{n}, y_{n}) + f(t_{n+1}, y_[i]))
    
    return add_lists(y_n, mult_list_by_scalar(add_lists(my_fun(t_n, y_n), my_fun(t_n + h, y_n_)), h*1/2));
}


