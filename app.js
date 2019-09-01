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
