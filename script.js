  function showHome() {
    document.getElementById('home').style.cssText = "background: #4b4bff22;";
    document.getElementById('faq').style.cssText = "border: 0;";
    document.getElementById('contact').style.cssText = "border: 0;";
    document.getElementById('gp').style.cssText = "border: 0;";
    document.querySelector('.home').style.cssText = "display: ;";
    document.querySelector('.faq').style.cssText = "display: none;";
    document.querySelector('.contact').style.cssText = "display: none;";
    document.querySelector('.gp').style.cssText = "display: none;";
  };
  function showFAQ() {
    document.getElementById('home').style.cssText = "border: 0;";
    document.getElementById('faq').style.cssText = "background: #4b4bff22;";
    document.getElementById('contact').style.cssText = "border: 0;";
    document.getElementById('gp').style.cssText = "border: 0;";
    document.querySelector('.home').style.cssText = "display: none;";
    document.querySelector('.faq').style.cssText = "display: ;";
    document.querySelector('.contact').style.cssText = "display: none;";
    document.querySelector('.gp').style.cssText = "display: none;";
  };
  function showContact() {
    document.getElementById('home').style.cssText = "border: 0;";
    document.getElementById('faq').style.cssText = "border: 0;";
    document.getElementById('contact').style.cssText = "background: #4b4bff22;";
    document.getElementById('gp').style.cssText = "border: 0;";
    document.querySelector('.home').style.cssText = "display: none;";
    document.querySelector('.faq').style.cssText = "display: none;";
    document.querySelector('.contact').style.cssText = "display: ;";
    document.querySelector('.gp').style.cssText = "display: none;";
  };
  function showGP() {
    document.getElementById('home').style.cssText = "border: 0;";
    document.getElementById('faq').style.cssText = "border: 0;";
    document.getElementById('contact').style.cssText = "border: 0;";
    document.getElementById('gp').style.cssText = "background: #4b4bff22;";
    document.querySelector('.home').style.cssText = "display: none;";
    document.querySelector('.faq').style.cssText = "display: none;";
    document.querySelector('.contact').style.cssText = "display: none;";
    document.querySelector('.gp').style.cssText = "display: ;";
  };

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
