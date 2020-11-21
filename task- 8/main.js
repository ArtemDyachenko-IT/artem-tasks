function arrString() {
  var str = ["Я", "изучаю", "JavaScript", "прямой", "сейчас"]
  return str;
}

function prepareRender(list) {
  result = list.join(" ")
  return result;
}

alert(prepareRender(arrString()))

