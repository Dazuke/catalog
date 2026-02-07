function openBuy(a,h,img){
  document.getElementById('akun').innerText = a;
  document.getElementById('harga').innerText = h;
  document.getElementById('preview').src = img;
  document.getElementById('popup').style.display = 'flex';
}

function showQR(){
  const pay = document.getElementById('pay').value;
  const qr = document.getElementById('qr');

  if(pay === 'QRIS'){
    qr.src = 'assets/qris.png';
    qr.style.display = 'block';
  } else if(pay === 'DANA'){
    qr.src = 'assets/dana.png';
    qr.style.display = 'block';
  } else {
    qr.style.display = 'none';
  }
}

function saveOrder(data){
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(data);
  localStorage.setItem('orders', JSON.stringify(orders));
}

function process(){
  const nama = document.getElementById('nama').value;
  const hp = document.getElementById('hp').value;
  const akun = document.getElementById('akun').innerText;
  const harga = document.getElementById('harga').innerText;
  const pay = document.getElementById('pay').value;

  if(!nama || !hp || !pay){
    alert("Lengkapi data dulu");
    return;
  }

  saveOrder({
    nama,
    hp,
    akun,
    harga,
    pay,
    status: "MENUNGGU KONFIRMASI",
    time: new Date().toISOString()
  });

  document.getElementById('popup').style.display = 'none';
  document.getElementById('loading').style.display = 'flex';

  const pesan =
`ORDER AKUN ROBLOX

Nama: ${nama}
HP: ${hp}
Akun: ${akun}
Harga: ${harga}
Payment: ${pay}`;

  setTimeout(()=>{
    window.open(`https://wa.me/6287872748734?text=${encodeURIComponent(pesan)}`);
    document.getElementById('loading').style.display = 'none';
  },2000);
}
