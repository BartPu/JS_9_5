var withButtonClass = document.getElementsByClassName('button');
console.log(withButtonClass);
for (var i = 0; i < withButtonClass.length; i++) {
    var text = withButtonClass[i].innerText;
    console.log(text);
};