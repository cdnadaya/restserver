// ================= 
//      Puerto
// =================
process.env.PORT = process.env.PORT || 3000;


// ================= 
//      Entorno
// =================

process.env.NODE_ENV = process.env.NODE_ENV || 'desa'

// ================= 
//   Base de Datos
// =================

let urlDB;

if (process.env.NODE_ENV === 'desa') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cdncor:Wp0n5j6Ro5XyAx0x@cluster0.gkaxx.mongodb.net/cafe';
}

process.env.URLDB = urlDB;