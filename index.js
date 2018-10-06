function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector('.target')}
  

  //document.querySelector('#nested .target')
function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list li')
  for (var i =0; i<list.length; i++){
  list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild(){
 var list = document.getElementById("grand-node").querySelectorAll("div")
 return list = list[list.length-1]
}
