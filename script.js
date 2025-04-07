// long version
ans = document.querySelectorAll('.rmq-3ca56ea3'); // select all answers on the page
for (i of ans) {
    i.children[2].children[0].style.filter = ""; // remove the blur filter from the inline css
    i.children[2].children[1] ? i.children[2].children[1].remove() : null; // if it exists, remove it; else, do nothing
}

// one-liner version
a=document.querySelectorAll('.rmq-3ca56ea3');for(i of a){i.children[2].children[0].style.filter="";i.children[2].children[1]?i.children[2].children[1].remove():null}
