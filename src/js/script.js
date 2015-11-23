array = document.getElementsByClassName("strict-height")
for(var i = 0; i < array.length; i++){
  content = array[i]
  height = content.getElementsByClassName("text")[0].scrollHeight + 140
  content.style.height = height + "px"
}
