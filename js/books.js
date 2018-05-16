function loadData() {
    ule = document.getElementById("tags");
    tagsData = ['Effective Java',
        'Java concurrency in practice',
        '代码大全',
        'concepts-of-programming-languages-10th', 'CSS设计指南'];
    tagsUrl = ['#', '#', '#', '#', '#'];
    for (i = 0; i < tagsData.length; i++) {
        li = document.createElement("li");
        li.setAttribute('class', 'card');
        a = document.createElement("a");
        a.setAttribute("href", tagsUrl[i]);
        p = document.createElement("p");
        p.appendChild(document.createTextNode(tagsData[i]));
        a.appendChild(p);
        li.appendChild(a);
        ule.appendChild(li);
    }
}

function autoChangeWidth() {
    cards = document.getElementsByClassName("card");
    cardNum = cards.length;
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    wid = calWidth(cards[0]);

    lineCardNum = Math.floor(x / wid);


    ml = intPx(getCssValue(cards[0], "margin-left"));
    space = Math.floor((x % wid) / 2 + ml);
    log('space:' + space);
    for (i = 0; i < cardNum; i += lineCardNum) {
        setCssValue(cards[i], "marginLeft", strPx(space));
        if (i + lineCardNum < cardNum) {
            setCssValue(cards[i + lineCardNum - 1], "marginRight", strPx(space));            
        }
    }
}

function setCssValue(ele, key, val) {
    ele.style[key] = val;
}

function getCssValue(ele, key) {
    style = window.getComputedStyle(ele);
    return style.getPropertyValue(key);
}

// function setMarginLeft(ele, val) {
//     ele.style.margin-left = val;
// }

function calWidth(e) {
    style = window.getComputedStyle(e);
    w = style.getPropertyValue("width");
    lm = style.getPropertyValue("margin-left");
    rm = style.getPropertyValue("margin-right");
    lp = style.getPropertyValue("padding-left");
    rp = style.getPropertyValue("padding-right");
    bw = style.getPropertyValue("border-width");
    // log('w:' + w);
    // log('lm:' + lm);
    // log('rm' + rm);
    // log('lp' + lp);
    // log('rp' + rp);
    // intPx(w);
    return intPx(w) + intPx(lm) + 2 * intPx(bw) +  intPx(rm) + intPx(lp) + intPx(rp);
    
}

function log(msg) {
    console.log(msg);
}

function intPx(p) {
    // log(typeof p);
    res = p.substring(0, p.length - 2);
    return Number(res);
}

function strPx(i) {
    str = i + 'px';
    //alert(str);
    return str; 
}