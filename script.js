// long version
ans = document.querySelectorAll('.rmq-3ca56ea3'); // select all answers on the page
ans[ans.length-1].remove(); // removes the last element in the list, which blocks the last answer on the page. don't ask why it's structured like this.. i don't know
for (i of ans) {
    i.children[2].children[0].style.filter = ""; // remove the blur filter from the inline css
    i.children[2].children[1] ? i.children[2].children[1].remove() : null; // if it exists, remove it; else, do nothing
}

// one-liner version cause why not
    a=document.querySelectorAll('.rmq-3ca56ea3');a[a.length-1].remove();for(i of a){i.children[2].children[0].style.filter="";i.children[2].children[1]?i.children[2].children[1].remove():null}
