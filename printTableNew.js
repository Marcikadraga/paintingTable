
class FieldPosition {
    x; y; id = 0;
    constructor(y, x, id) {
        this.y = y;
        this.x = x;
        this.id = id;
    }


}
class Field {
    _id;
    _field;
    _fieldSize;
    _ctx;
    _fieldPosition;

    
    
    get fieldSize() {
        return this._fieldSize;
    }
    set fieldSize(value) {
        this._fieldSize = value;
    }
    get ctx() {
        return this._ctx;
    }
    set ctx(value) {
        this._ctx = value;
    }
    get fieldPosition() {
        return this._fieldPosition;
    }
    set fieldPosition(value) {
        this._fieldPosition = value;
    }

    constructor(FieldPosition) {
        this.id = FieldPosition.id;
        this.fieldSize = 20;
        this.field = document.createElement('canvas');
        this.ctx = this.field.getContext("2d");
        this.field.id = FieldPosition.id;
        this.field.style.width = this.fieldSize + "px";
        this.field.style.height = this.fieldSize + "px";
        this.field.style.left = this.fieldSize * this.FieldPosition + "px";
        this.field.style.top = this.fieldSize * FieldPosition.y + "px";
        this.field.style.position = "absolute";
        this.fieldPosition = document.getElementById("snakeTable").appendChild(this.field);
    }
}
class Table {
    _array;
    _yTableSize;
    _xTableSize;

    get array() {
        return this._array;
    }
    set array(value) {
        this._array = value;
    }
    get yTableSize() {
        return this._yTableSize;
    }
    set yTableSize(value) {
        this._yTableSize = value;
    }

    get xTableSize() {
        return this._xTableSize;
    }
    set xTableSize(value) {
        this._xTableSize = value;
    }


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
                id++;
            }
        }
        for (var i = 0; i < this.yTableSize * this.xTableSize; i++) {
            if (i % 2 != 0) {
                document.getElementById(i).style.backgroundColor = "red";
            }
            else {
                document.getElementById(i).style.backgroundColor = "#EBEFF0";
            }
        }
    }
}
class Main {
    startTheProgram() {
        var t = new Table(11, 11);
        t.DisplayTheTable();
    }

}
var m = new Main();
m.startTheProgram();





