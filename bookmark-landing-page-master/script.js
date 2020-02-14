// Reference https://codepen.io/brianhan/pen/xbqRLe?editors=1010

var tabs = {
  document.getElementById('link-1'),
  document.getElementById('link-2'),
  document.getElementById('link-3')
}

var content = {
  document.getElementById("tab1"),
  document.getElementById("tab2"),
  document.getElementById("tab3")
}


for (tab in tabs) {
  tabs[tab].addEventListener('click', function(event) {
    event.preventDefault();
    var $this = this;
    clearSelected();
    $this.classList.add("selected");

    clearActive();

    if ($this.id === "link-1") {
      content.one.classList.add("active");
    } else if ($this.id === "link-2") {
      content.two.classList.add("active");
    } else {
      content.three.classList.add("active");
    }
  });
}


function clearSelected() {
  for (tab in tabs) {
    tabs[tab].classList.remove("selected");
  }
}

function clearActive() {
  for (element in content) {
    content[element].classList.remove("active");
  }
}
