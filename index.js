//defining the function
function newImage(imgFile, left, bottom){

let gameObject = document.createElement('img')
gameObject.src = imgFile;
gameObject.style.position = 'fixed';
gameObject.style.left = left;
gameObject.style.bottom = bottom;
document.body.append(gameObject);
}




//running the function
let greenCharacter =newImage("assets/green-character.gif", "100px", "100px");
let pineTree = newImage('assets/pine-tree.png',"450px", "200px");
let tree = newImage("assets/tree.png", "200px", "300px");
let pillar = newImage("assets/pillar.png", "350px", "100px");
let crate = newImage("assets/crate.png", "150px", "200px");
let well = newImage("assets/well.png", "500px", "425");






let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})

function newItem(imgFile, left, bottom){
    let gameObject = document.createElement('img')
gameObject.src = imgFile;
gameObject.style.position = 'fixed';
gameObject.style.left = left;
gameObject.style.bottom = bottom;
document.body.append(gameObject);

gameObject.addEventListener('dblclick', function(){
gameObject.remove()
})

}

newItem('assets/sword.png', '500px', '405px');
newItem('assets/sheild.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');

