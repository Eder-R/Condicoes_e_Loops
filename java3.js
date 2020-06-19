let pos = "";
let size = 8

for (let row = 0; row < size; row++) {    
    // espaço se a linha for par
    pos = row % 2 == 0 ? " " : "";

    for (let col = 0; col < size; col ++) {
        pos += "# ";
    }

    console.log(pos);
}