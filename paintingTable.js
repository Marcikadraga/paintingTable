
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
                document.getElementById(i).style.backgroundColor = "#EBEFF0";
            }
        }
        // document.getElementById("table").style.height=this.yTableSize*10+"px";
        // document.getElementById("drawingTable").style.height=this.yTableSize*10+"px";
        // document.getElementById("drawingTable").style.width =this.xTableSize*10+"px";
        
        
    }
}
class ColorFiled {
    constructor(FieldPosition) {

        this.colorFieldSize = 40;
        this.colorField = document.createElement('canvas');
        this.colorField.id = FieldPosition.id;
        this.colorField.style.width = this.colorFieldSize + "px";
        this.colorField.style.height = this.colorFieldSize + "px";
        this.colorField.style.left = this.colorFieldSize * FieldPosition.x + "px";
        this.colorField.style.top = this.colorFieldSize * FieldPosition.y + "px";
        this.colorField.style.position = "absolute";
        document.getElementById("colorPalette").appendChild(this.colorField);
    }
}
class ColorTable {


    constructor() {
        this.colorFields = [];
        this.colors = [
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
        for (var i = 0; i < this.colors.length; i++) {
            this.colorFields.push([]);
            for (var j = 0; j < this.colors[0].length; j++) {
                this.colorFields.push(new ColorFiled(new FieldPosition( i, j, id)));
                document.getElementById(id).style.backgroundColor = this.colors[i][j];
                id++
            }
        }
        // document.getElementById("colorPalette").style.height=this.colors.length*20+"px";
        // document.getElementById("colorPalette").style.width=this.colors[0].length*20+"px";

    }
}
class Main {
    startTheProgram() {
        var t = new Table(35, 35);
        t.DisplayTheTable();
        var colorTable = new ColorTable();
        colorTable.DisplayTheColorTable();
    }
}
var m = new Main();
m.startTheProgram();

