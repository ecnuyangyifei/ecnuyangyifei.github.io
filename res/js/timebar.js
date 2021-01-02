// javascript:var snippet = document.createElement('script');  
// snippet.src = 'https://ecnuyangyifei.github.io/res/js/timebar.js'; document.body.appendChild(snippet);

function reminder() {
  const div = document.createElement('H1'); 
  document.body.insertBefore(div, document.body.firstChild);
  const begin = new Date();
  setInterval(_ => {
    div.innerText = timeBar(begin);
    window._timeBar = div.innerText;
  }, 1000);
}

function fmtNumber(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

function timeBar(begin) {
  const t = new Date();
  const timtStr = 
    [t.getHours(), t.getMinutes(), t.getSeconds()]
      .map(n => fmtNumber(n))
      .join(':');
  
  let bar = timtStr;

  const elapsed = Math.round((new Date().getTime() - begin) / 1000 / 60);
  if (elapsed > 1) {
    bar += ` ${elapsed} mins elapsed`;
  }
  return bar;
}

reminder();