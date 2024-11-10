function set_up_symbols() {
  const elements = document.querySelectorAll('.symbol a, .location a');
  const symbols = new Map();
  elements.forEach(e => {
    const text = e.textContent.trim();
    const found = symbols.get(text);
    if (text === "") console.log(e);
    if (found !== undefined) {
      found.push(e);
    } else {
      symbols.set(text, [e]);
    }
  });
  elements.forEach(e => {
    e.addEventListener('mouseover', event => {
      symbols.get(event.target.innerText) == undefined ? console.log(event.target.innerText) : void 0;
      symbols.get(event.target.innerText).forEach(s => {
        s.style.backgroundColor = "lightgray";
      });
    });
    e.addEventListener('mouseleave', event => {
      symbols.get(event.target.innerText).forEach(s => {
        s.style.backgroundColor = "white";
      })
    });
  });
}

set_up_symbols();
