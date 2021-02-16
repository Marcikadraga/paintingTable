
class FieldPosition {
    // x; y; id =0;
    constructor(y, x, id) {
        this.y = y;
        this.x = x;
        this.id = id;
    }


}
class Field {    
    
    // _field;
    // _fieldSize;
    // _ctx;
    // _fieldPosition;
    
   
    // get field() {
    //     return this._field;
    // }
    // set field(value) {
    //     this._field = value;
    // }
    // get fieldSize() {
    //     return this._fieldSize;
    // }
    // set fieldSize(value) {
    //     this._fieldSize = value;
    // }
    // get ctx() {
    //     return this._ctx;
    // }
    // set ctx(value) {
    //     this._ctx = this.field.getContext("2d");
    // }
    // get fieldPosition() {
    //     return this._fieldPosition;
    // }
    // set fieldPosition(value) {
    //     this._fieldPosition = value;
    // }

    constructor(FieldPosition) {

        this.fieldSize = 20;
        this.field = document.createElement('canvas');
        this.field.id =FieldPosition.id;
        this.field.style.width = this.fieldSize + "px";
        this.field.style.height = this.fieldSize + "px";
        this.field.style.left = this.fieldSize * FieldPosition.x + "px";
        this.field.style.top = this.fieldSize * FieldPosition.y + "px";
        this.field.style.position = "absolute";
        this.fieldPosition=document.getElementById("table").appendChild(this.field);
    }
}
class Table {
    // _array;
    // _yTableSize;
    // _xTableSize;

    // get array() {
    //     return this._array;
    // }
    // set array(value) {
    //     this._array = value;
    // }
    // get yTableSize() {
    //     return this._yTableSize;
    // }
    // set yTableSize(value) {
    //     this._yTableSize = value;
    // }

    // get xTableSize() {
    //     return this._xTableSize;
    // }
    // set xTableSize(value) {
    //     this._xTableSize = value;
    // }


    constructor(yTableSize, xTableSize) {
        this.array=[];
        this.yTableSize = yTableSize;
        this.xTableSize = xTableSize;
    }

    DisplayTheTable() {
        var id =0;
        for (var i = 0; i < this.yTableSize; i++) {
            this.array.push([]);
            for (var j = 0; j < this.xTableSize; j++) {
                this.array.push(new Field(new FieldPosition(i,j,id)))
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
    }
}
class ColorTable{
     colors=[
         ["#F5D8D8","#FFD0DE","#FFC8F2","#FFC5FF","#CD96CE"],
         ["#EA2828","#C90011","#A80000","#880000","#6A0000"],
         ["#E68CE7","#BD66BF","#964299","#701B74","#4B0052"],
         ["#8C8CE7","#6A6DC4","#484FA2","#233381","#001A62"],
         ["#A5FFF3","#70C9BE","#3A968C","#00655D","#003831"],
         ["#7ED19A","#54A672","#287D4C","#005629","#003105"],
         ["#F0E897","#BCB567","#8A853A","#5A580B","#302F00"],
         ["#FFD300","#CAA400","#967800","#674F00","#432700"],
         ["#FF6400","#D64100","#AE1900","#890000","#670000"]
     ]
}
class Main
{
    startTheProgram(){
        var t = new Table(11, 11);
        t.DisplayTheTable();
    }
    
}
var m=new Main();
m.startTheProgram();