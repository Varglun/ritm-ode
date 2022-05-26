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
    
    c.beginPath();
    c.moveTo(0, canvas.height/2);
    c.lineTo(canvas.width, canvas.height/2);
    c.stroke();
    
    c.beginPath();
    c.moveTo(canvas.width/2, 0);
    c.lineTo(canvas.width/2, canvas.height);
    c.stroke();

    
    for (let i = 0; i < list_y.length; i++) {
        c.beginPath();
        c.arc((pseudo_width/2 + list_t[i]) * t_coef, (pseudo_height/2 - list_y[i]) * y_coef, 3, 0 , 2*Math.PI);
        c.fillStyle = "red";
        c.fill();
    }
}


