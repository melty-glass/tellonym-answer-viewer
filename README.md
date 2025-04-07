# tellonym-answer-viewer
1. Inspect Element (sorry mobile users)
2. open the console
3. copy and paste the script
4. press enter
5. ???
6. profit

## script
```js
ans = document.querySelectorAll('.rmq-3ca56ea3');
ans[ans.length-1].remove();
for (i of ans) {
    i.children[2].children[0].style.filter = "";
    i.children[2].children[1] ? i.children[2].children[1].remove() : null;
}
```
## note
does NOT get rid of the scroll limit. sorry.
