let un = document.getElementById("username");
let ps = document.getElementById("pass");
let rps = document.getElementById("repass");
let rbtn = document.getElementById("regisbtn");
function test() {
  if (un.value == false) {
    const wrong = document.createElement("div");

    wrong.innerHTML = ` <div>BẠN CHƯA NHẬP TÊN ĐĂNG NHẬP</div>`;

    const wrongrps = document.getElementById("wrongrepass");
    wrongrps.appendChild(wrong);
    wrongrps.style.color = "red";
    wrongrps.style.width = "500px";
    wrongrps.style.marginTop = "100px";
    wrongrps.style.display = "flex";
    wrongrps.style.flexDirection = "row";
    wrongrps.style.justifyContent = "center";
    wrongrps.style.position = "absolute";
    return;
  }
  if (rps.value == ps.value) {
    localStorage.setItem(un.value, ps.value);
  }
  if (rps.value != ps.value) {
    const wrong = document.createElement("div");

    wrong.innerHTML = ` <div>BẠN ĐÃ NHẬP LẠI MẬT KHẨU SAI</div>`;

    const wrongrps = document.getElementById("wrongrepass");
    wrongrps.appendChild(wrong);
    wrongrps.style.color = "red";
    wrongrps.style.width = "500px";
    wrongrps.style.marginTop = "100px";
    wrongrps.style.display = "flex";
    wrongrps.style.flexDirection = "row";
    wrongrps.style.justifyContent = "center";
    wrongrps.style.position = "absolute";
  }
  
}
rbtn.onclick = test;
