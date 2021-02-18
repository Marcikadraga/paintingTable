
class FieldPosition {
    constructor(y, x, id) {
        this.y = y;
        this.x = x;
        this.id = id;
    }
}
class Field {

    constructor(FieldPosition) {

        this.fieldSize = 20;
        this.field = document.createElement('canvas');
        this.field.id = FieldPosition.id;
        this.field.style.width = this.fieldSize + "px";
        this.field.style.height = this.fieldSize + "px";
        this.field.style.left = this.fieldSize * FieldPosition.x + "px";
        this.field.style.top = this.fieldSize * FieldPosition.y + "px";
        this.field.style.position = "absolute";
        this.fieldPosition = document.getElementById("drawingTable").appendChild(this.field);
        this.field.onclick = function () { this.style.backgroundColor = "red" }

    }
}
class Table {


    constructor(yTableSize, xTableSize) {
        this.array = [];
        this.yTableSize = yTableSize;
        this.xTableSize = xTableSize;
    }

    DisplayTheTable() {
        var id = 0;
        for (var i = 0; i < this.yTableSize; i++) {
            this.array.push([]);
            for (var j = 0; j < this.xTableSize; j++) {
                this.array.push(new Field(new FieldPosition(i, j, id)))
                id++
            }
        }
        for (var i = 0; i < this.yTableSize * this.xTableSize; i++) {
            if (i % 2 != 0) {
                document.getElementById(i).style.backgroundColor = "white";
            }
            else {
                document.getElementById(i).style.backgroundColor = "#B6A999";
            }
        }
    }
}
class ColorTable {
    get colors() {
        return [
            ["#EA2828", "#C90011", "#A80000", "#880000", "#6A0000"],
            ["#E68CE7", "#BD66BF", "#964299", "#701B74", "#4B0052"],
            ["#8C8CE7", "#6A6DC4", "#484FA2", "#233381", "#001A62"],
            ["#A5FFF3", "#70C9BE", "#3A968C", "#00655D", "#003831"],
            ["#7ED19A", "#54A672", "#287D4C", "#005629", "#003105"],
            ["#F0E897", "#BCB567", "#8A853A", "#5A580B", "#302F00"],
            ["#FFD300", "#CAA400", "#967800", "#674F00", "#432700"],
            ["#FF6400", "#D64100", "#AE1900", "#890000", "#670000"]
        ];
    }

    


    DisplayTheColorTable() {
        var id = 5000;
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 5; j++) {
                var colorField = document.createElement('canvas');
                colorField.id = id;
                colorField.style.position = "relative";
                colorField.style.width = "40px"
                colorField.style.height = "40px"
                colorField.style.border = "1px solid white";
                colorField.style.left = "5px";
                colorField.style.top = "5px";
                colorField.style.backgroundColor = this.colors[i][j]
                document.getElementById("colorPalette").appendChild(colorField);
                id++;
            }
        }
    }
    
}

class Main {
    startTheProgram() {
        var t = new Table(35, 35);
        t.DisplayTheTable();
        var colorTable = new ColorTable();
        colorTable.DisplayTheColorTable();
        // colorTable.SelectColorField();
    }
}
var m = new Main();
m.startTheProgram();


