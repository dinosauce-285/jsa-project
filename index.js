let bbtn = document.getElementById('buy')
let bfProductAmount = document.createElement('div')


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


}
bbtn.onclick = minusWhenBuy
