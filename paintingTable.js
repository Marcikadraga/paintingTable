
class FieldPosition {
    constructor(y, x, id) {
        this.y = y;
        this.x = x;
        this.id = id;
    }
}
class CurrentColor {
    constructor(color) {
        this.color = color;
    }
}
class FieldSize {
    constructor(fieldSize) {
        this.fieldSize = fieldSize;
    }
}
class Field {

    constructor(FieldPosition, FieldSize) {

        // this.fieldSize = 20;
        this.field = document.createElement('canvas');
        this.field.id = FieldPosition.id;
        this.field.style.width = FieldSize.fieldSize + "px";
        this.field.style.height = FieldSize.fieldSize + "px";
        this.field.style.left = FieldSize.fieldSize * FieldPosition.x + "px";
        this.field.style.top = FieldSize.fieldSize * FieldPosition.y + "px";
        this.field.style.position = "absolute";
        this.fieldPosition = document.getElementById("drawingTable").appendChild(this.field);

        this.field.onclick = function () { this.style.backgroundColor = document.getElementById("statusCanvas1").style.backgroundColor }

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
        var fieldsize=20
        for (var i = 0; i < this.yTableSize; i++) {
            this.array.push([]);
            for (var j = 0; j < this.xTableSize; j++) {
                this.array.push(new Field(new FieldPosition(i, j, id), new FieldSize(fieldsize)))
                id++
            }
        }
        for (var i = 0; i < this.yTableSize * this.xTableSize; i++) {
            document.getElementById(i).style.backgroundColor = "white";
            if (i % 2 == 0) {
                document.getElementById(i).style.backgroundColor = "#C8E0E1";
            }
        }
        document.getElementById("drawingTable").style.height=this.yTableSize*20+"px";
        document.getElementById("drawingTable").style.width=this.xTableSize*20+"px";

    }



}
class ColorField {
    get colors() {
        return [
            ["#FFFFFF", "#C8E0E1", "#A7BABA", "#8FA2A2", "#708181"],
            ["#627070", "#495353", "#353D3D", "#272E2E", "#0B0D0D"],
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
    constructor(i, j, id) {

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
        colorField.onclick = function () {
            for (var i = 5000; i < 5045; i++) {
                document.getElementById(i).style.borderColor = "white";
            }
            this.style.border = "1px solid black";
            var lofasz = this.style.backgroundColor;
            document.getElementById("statusCanvas1").style.backgroundColor = lofasz;
        }
    }


}
class ColorTable {
    DisplayTheColorTable() {
        var id = 5000;
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 5; j++) {
                var c = new ColorField(i, j, id);
                id++;
            }
        }
    }
}

class Main {
    startTheProgram() {
        var t = new Table(27, 25);



        t.DisplayTheTable();
        var colorTable = new ColorTable();
        colorTable.DisplayTheColorTable();
    }
}
var m = new Main();
m.startTheProgram();


