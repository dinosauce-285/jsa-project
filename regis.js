let un = document.getElementById("username");
let ps = document.getElementById("pass");
let rps = document.getElementById("repass");
let rbtn = document.getElementById("regisbtn");

function dangKi() {
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
    let users = [];
    let newUser = {
      username: un.value,
      password: ps.value,
    };
    users = JSON.parse(localStorage.getItem("users"));
    if (users == null) {
      users = [];
    }
    users.push(newUser);

    let json = JSON.stringify(users);

    localStorage.setItem("users", json);
    location.replace("http://127.0.0.1:5500/login.html")
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
rbtn.onclick = dangKi


