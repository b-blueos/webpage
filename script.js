var pages = ["home", "faq", "contact", "download"];
function changePage(newPage) {
    for (i = 0; i < pages.length; i++) {
        document.querySelector("." + pages[i]).style.display = 'none';
    };
    document.querySelector("." + newPage).style.display = 'grid';
};

document.querySelector(".home").style.display = 'grid';


  function darkMode() {
    if (document.getElementById('darkmode').checked == true) {
      document.body.style.cssText += "background: black; color: white; transition: .3s;";
    } else {
      document.body.style.cssText += "background: white; color: black; transition: .3s;";
    };
  };
  function serifs() {
    if (document.getElementById('serifs').checked == true) {
      document.body.style.cssText += "font-family: 'NotoSerif'; transition: .3s;";
    } else {
      document.body.style.cssText += "font-family: 'NotoSans'; transition: .3s;";
    };
  };
  function largeText() {
    if (document.getElementById('largetext').checked == true) {
      document.body.style.cssText += "font-size: 18pt; transition: .3s;";
    } else {
      document.body.style.cssText += "font-size: 13pt; transition: .3s;";
    };
  };
