(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const data = (require('./data.json'));
const total = data.length;
console.log(total);

let names = [];
const file = document.querySelector('#files');

file.addEventListener('change', function (event) {
  const files = event.target.files;
  for (let val of files) {
    let vals = val.name.split("_");
    names.push(vals[1].split(".")[0])
  }
}, false)

const btn_stat = document.querySelector('#stat');
btn_stat.addEventListener('click', function () {
  let res_yes = data.filter((val) => {
    return names.indexOf(val) > -1;
  });
  let res_no = data.filter((val) => {
    return names.indexOf(val) === -1;
  });

  let html_yes = "";
  let html_no = "";

  let list_yes = document.querySelector("#list_yes");
  let list_no = document.querySelector("#list_no");

  for (let i = 0; i < res_yes.length; i++) {
    html_yes += `<li>${res_yes[i]}</li>`
  }
  for (let i = 0; i < res_no.length; i++) {
    html_no += `<li>${res_no[i]}</li>`
  }

  let rest = res_no.length;

  list_yes.innerHTML = html_yes;
  list_no.innerHTML = html_no;

  let t = document.querySelector('#total');
  let r = document.querySelector('#rest');
  t.innerHTML = total;
  r.innerHTML = rest;
}, false)

},{"./data.json":2}],2:[function(require,module,exports){
module.exports=[
  "蔡婷缘",
  "曹佳颖",
  "陈王昆",
  "陈真杰",
  "邓笑笑",
  "费玉杰",
  "侯佳楠",
  "胡亚军",
  "季晓东",
  "李毛妮",
  "李思诚",
  "陆启明",
  "吕修晴",
  "缪晨香",
  "钱立金",
  "沈同耀",
  "汪代维",
  "王梦如",
  "王蓉蓉",
  "奚凯凯",
  "肖天明",
  "杨胜男",
  "张文晨",
  "周勇捷",
  "朱贵元",
  "左玉胜",
  "魏琳",
  "董坡",
  "刘兴",
  "刘义",
  "刘震",
  "茆迪",
  "郭平",
  "孙通",
  "杨振",
  "张雷",
  "章丁"
]
},{}]},{},[1]);
