count = 6;

function addItem(){
  var item = document.getElementById('myInput').value;
  if (item === '') {
     alert("You must write something!");
  }
  else{
    count++;
    var classname = 'clickableItem'+count;
    console.log(classname);
    var out = "<li><div onclick= 'strikeItem("+count+")'"+ "id= '"+classname+"'>"+ item +"<button  class ='item_delete' onclick ='deleteItem("+count+")'>x</button></li>"; //<href ='item' onclick ='strikeItem()'>
    document.getElementById('item_display').innerHTML += out;
    document.getElementById("myInput").value = "";
  }
}
function strikeItem(num){
  var div = document.getElementById("clickableItem"+num);
      div.style.textDecoration = "line-through";
}

function deleteItem(num){
  console.log("delete the item");
// Click on a close button to hide the current list item
  var div = document.getElementById("clickableItem"+num);
  var i;
  //for (i = 0; i < close.length; i++) {
  //  close[i].onclick = function() {
      //var div = this.parentElement;
      div.style.display = "none";
  //  }
  //}
}
