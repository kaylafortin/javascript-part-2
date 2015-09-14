//terrian file.
var groundTile = ["water", "grass", "rocks"];
var element = ["burning", "frozen", "normal"]
function rand1to3() {
    return Math.floor((Math.random()*3) + 1)
}

function Tile(x, y) {
    this.x = x;
    this.y = y;
    this.height = rand1to3();
    this.type = groundTile[rand1to3()-1];
    this.condition = element[rand1to3()-1];
    this.freeze = function() {
        if (this.condition === 'burning') {
            this.condition = 'normal'
        }
        if (this.condition === 'normal') {
            this.condition = 'frozen'
        }
        if (this.condition === 'frozen') { 
            this.height += 1;
        }
    }
    this.burn = function() {
        if (this.condition === 'frozen') { 
            this.condition = 'normal'
        }
        if (this.condition === 'normal') {
            this.condition = 'burning'
        }
        if (this.condition === 'burning') {
            if (this.height > 0) {
            this.height -= 1;
            }
        }
    }
}

//creates 2d array with terrain tiles
var terrain = [];
for (var i = 0; i < 20; i++) {
    terrain[i] = [];
    for (var j = 0; j <= 20; j++) {
    terrain[i][j] = new Tile(i, j);
    }
}

/*displays the tiles by making a new array with just
the hights*/
function displayTiles() {
for (var i = 0; i < 20; i++) {
    var terrainDisplay = [];
    for (var j=0; j < 20; j++) {
        terrainDisplay.push(terrain[i][j].height);
    }
    console.log(terrainDisplay);
}
}

displayTiles();

//function that gives random number between 0 and 19
function rand0to19() {
    var randNum = Math.floor(Math.random()*20);
    //console.log(randNum)
    return randNum;
}

/*random for loop. starts at random number betweeen 
0 and 19 time rand number between 1 and 3 (just to 
make it more random) It then effects a random 
terrain tile.
*/

for (var i = (rand0to19()*rand1to3()); i >=0; i--) {
    terrain[rand0to19()][rand0to19()].freeze();
}

console.log("");
displayTiles();

for (var i = (rand0to19()*rand1to3()); i >=0; i--) {
    terrain[rand0to19()][rand0to19()].burn();
}

console.log("");
displayTiles();



