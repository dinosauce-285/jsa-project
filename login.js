let lbtn = document.getElementById('loginBtn');
function logIn() {
  let iUsername = document.getElementById("nhapUserName");
  let iPass = document.getElementById("nhapPass");
  let data = localStorage.getItem("users");
  let aData = JSON.parse(data);
  let findData = aData.find(function (usernameAndPass) {
    return usernameAndPass.username == iUsername.value
  })
  
 
console.log(findData);

if (findData.password == String(iPass.value)) {
 location.replace("http://127.0.0.1:5500/index.html")
}
if (findData.password != String(iPass.value)) {
    const wrong = document.createElement("div");

    wrong.innerHTML = ` <div>BẠN ĐÃ NHẬP LẠI MẬT KHẨU SAI</div>`;

    const wrongrps = document.getElementById("wrongrepass ");
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
lbtn.onclick = logIn