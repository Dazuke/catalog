function openBuy(a,h){
  document.getElementById('akun').innerText = a;
  document.getElementById('harga').innerText = h;
  document.getElementById('popup').style.display='flex';
}

function process(){
  document.getElementById('popup').style.display='none';
  document.getElementById('loading').style.display='flex';

  setTimeout(()=>{
    const wa = "6287872748734"; // ganti dengan nomor WA kamu
    window.open(`https://wa.me/${wa}`);
  },2000);
}
