var chico = [];
chico = ["Upper Bidwell", "One Mile", "Naked Lounge", "Dnook", "Woodstocks"];
var current;

function shuffleGallery()
{
  var i;
  do{
      i = Math.floor(Math.random() * 5);
  }while(i == current);
  current = i;
  console.log(chico[i]);
}
