const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

function draw_graph() {
    c.rect(0,0, canvas.width, canvas.height);
    c.fillStyle = "white";
    c.fill();
    c.stroke();
    let min_y = Math.min(...list_y);
    let max_y = Math.max(...list_y);
    let min_t = Math.min(...list_t);
    let max_t = Math.max(...list_t);
    
    let pseudo_width = 2*Math.max(Math.abs(max_t), Math.abs(min_t));
    let pseudo_height = 2*Math.max(Math.abs(max_y), Math.abs(min_y));
    let t_coef = canvas.width/pseudo_width;
    let y_coef = canvas.height/pseudo_height;

    c.lineWidth = 2;
    
    c.beginPath();
    c.moveTo(0, canvas.height/2);
    c.lineTo(canvas.width, canvas.height/2);
    c.stroke();
    
    c.beginPath();
    c.moveTo(canvas.width/2, 0);
    c.lineTo(canvas.width/2, canvas.height);
    c.stroke();

    let step_y = canvas.height/10;
    let current_y = canvas.height;
    let current_num;
    for (let i = 1; i <= 10; i++) {
        if (i != 5) {
            current_y -= step_y;
            current_num = (pseudo_height/2 - current_y / y_coef);
            draw_coord_y_num(current_y, current_num.toExponential(1));
        } else {
            current_y -= step_y;
        }
    }

    let step_x = canvas.width/10;
    let current_x = 0;
    for (let i = 1; i <= 10; i++) {
        if (i != 5) {
            current_x += step_x;
            current_num = (-pseudo_width/2 + current_x / t_coef);
            draw_coord_x_num(current_x, current_num.toExponential(1));
        } else {
            current_x += step_x;
        }
    }

    
    for (let i = 0; i < list_y.length; i++) {
        c.beginPath();
        c.arc((pseudo_width/2 + list_t[i]) * t_coef, (pseudo_height/2 - list_y[i]) * y_coef, 3, 0 , 2*Math.PI);
        c.fillStyle = "red";
        c.fill();
    }
}


// function draw_coords_num() {
//     let step_y = Math.ceil(canvas.height/12);
//     let current_y = canvas.height;
//     let current_num;
//     for (let i = 1; i <= 10; i++) {
//         current_y -= step_y;
//         console.log("pseudo height = ", pseudo_height);
//         console.log("current_y = ", current_y);
//         console.log("y_coef = ", y_coef);
//         current_num = (pseudo_height/2 - current_y / y_coef);
//         draw_coord_y_num(current_y, current_num.toExponential(1));
//     }
// }

function draw_coord_x_num(x, num) {
    c.beginPath();
    c.setLineDash([10,10]);
    c.lineWidth = 0.5;
    c.moveTo(x, 0);
    c.lineTo(x, canvas.height);
    c.stroke();
    c.fillStyle = "black";
    c.font = "12px Arial";
    c.fillText(num, x + 0.01 * canvas.width, canvas.height/2 - 0.01*canvas.height);
}

function draw_coord_y_num(y, num) {
    c.beginPath();
    c.lineWidth = 0.5;
    c.setLineDash([10,10]);
    c.moveTo(0, y);
    c.lineTo(canvas.width, y);
    c.stroke();
    c.fillStyle = "black";
    c.font = "12px Arial";
    c.fillText(num, canvas.width/2 + 0.01 * canvas.width, y - 0.01*canvas.height);
}