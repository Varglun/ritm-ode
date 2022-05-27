const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let min_y;
let max_y;
let min_t;
let max_t;

let pseudo_width;
let pseudo_height;
let t_coef;
let y_coef;



function draw_graph(index_1, index_2) {
    // console.log("t_coef = ", t_coef);
    c.rect(0,0, canvas.width, canvas.height);
    c.fillStyle = "white";
    c.fill();
    c.stroke();

    if (index_1 == "t") {
        list_Y = list_t;
    } else {
        list_Y = list_y[Number(index_1)];
    }

    if (index_2 == "t") {
        list_X = list_t;
    } else {
        list_X = list_y[Number(index_2)];
    }


    min_y = Math.min(...list_Y);
    max_y = Math.max(...list_Y);
    min_t = Math.min(...list_X);
    max_t = Math.max(...list_X);
    
    pseudo_width = 2*Math.max(Math.abs(max_t), Math.abs(min_t));
    pseudo_height = 2*Math.max(Math.abs(max_y), Math.abs(min_y));
    t_coef = canvas.width/pseudo_width;
    y_coef = canvas.height/pseudo_height;

    c.lineWidth = 2;
    c.setLineDash([]);
    
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

    
    for (let i = 0; i < list_Y.length; i++) {
        c.beginPath();
        c.arc((pseudo_width/2 + list_X[i]) * t_coef, (pseudo_height/2 - list_Y[i]) * y_coef, 3, 0 , 2*Math.PI);
        c.fillStyle = "red";
        c.fill();
    }


    // draw green dot
    let best_coord_x = list_X[0];
    let best_coord_y = list_Y[0];
    let clicked_pseudo_x = -pseudo_width/2 + mouse_click_x / t_coef;
    let clicked_pseudo_y = pseudo_height/2 - mouse_click_y / y_coef;
    for (let i = 0; i < list_Y.length; i++) {
        if (Math.sqrt((list_X[i] - clicked_pseudo_x)*(list_X[i] - clicked_pseudo_x) + (list_Y[i] - clicked_pseudo_y)*(list_Y[i] - clicked_pseudo_y)) < 
        Math.sqrt((best_coord_x - clicked_pseudo_x)*(best_coord_x - clicked_pseudo_x) + (best_coord_y - clicked_pseudo_y)*(best_coord_y - clicked_pseudo_y))) {
            best_coord_x = list_X[i];
            best_coord_y = list_Y[i];
        }
    }
    c.beginPath();
    c.arc((pseudo_width/2 + best_coord_x) * t_coef, (pseudo_height/2 - best_coord_y) * y_coef, 5, 0 , 2*Math.PI);
    c.fillStyle = "green";
    c.fill();

    t_answer.innerHTML = "t: " + best_coord_x;
    y_answer.innerHTML = "y: " + best_coord_y;
}


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

let mouse_point_x = canvas.width/2;
let mouse_point_y = canvas.height/2;

canvas.addEventListener("mousemove", function(event) {
    mouse_point_x = event.offsetX;
    mouse_point_y = event.offsetY;
})

let mouse_click_x = canvas.width/2;
let mouse_click_y = canvas.height/2;

canvas.addEventListener("click", function(event) {
    mouse_click_x = event.offsetX;
    mouse_click_y = event.offsetY;
    draw_graph(y_axis, x_axis);
});



function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width*0.15, canvas.height*0.1);

    // write t
    c.fillStyle = "black";
    c.font = "12px Arial";
    c.fillText("t = " + (-pseudo_width/2 + mouse_point_x / t_coef).toExponential(2), 0.01 * canvas.width, canvas.height*0.04);

    // write y
    c.fillStyle = "black";
    c.font = "12px Arial";
    c.fillText("y = " + (pseudo_height/2 - mouse_point_y / y_coef).toExponential(2), 0.01 * canvas.width, canvas.height*0.09);
}