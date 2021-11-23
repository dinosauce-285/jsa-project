let bbtn = document.getElementById('buy')
let bfProductAmount = document.createElement('div')
let afProductAmount = document.createElement('div')
let abc = localStorage.getItem('product1')
if (abc == null) {
    abc = 10
}
afProductAmount.innerHTML = ` <div>${abc}</div>`
let father2Div = document.getElementById('father2')
father2Div.appendChild(afProductAmount)
function minusWhenBuy() {

    
 let soSanPham = localStorage.getItem('product1')
 if (soSanPham == null) {
     soSanPham =10 
 }
 soSanPham = soSanPham -1
 if (soSanPham <0) {
     return
 }
 localStorage.setItem('product1', soSanPham)
 let b = localStorage.getItem('product1')
 
bfProductAmount.innerHTML = ` <div>${b}</div>`
let fatherDiv = document.getElementById('father')
fatherDiv.appendChild(bfProductAmount)

father2Div.removeChild(afProductAmount)

}
bbtn.onclick = minusWhenBuy
