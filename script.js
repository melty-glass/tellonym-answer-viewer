ans = document.querySelectorAll('.rmq-3ca56ea3');
for (i of ans) {
    i.children[2].children[0].style.filter = "";
    i.children[2].children[1] ? i.children[2].children[1].remove() : null;
}
