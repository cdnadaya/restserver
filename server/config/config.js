// ================= 
//      Puerto
// =================
process.env.PORT = process.env.PORT || 3000;


// ================= 
//      Entorno
// =================

process.env.NODE_ENV = process.env.NODE_ENV || 'desa'

// ======================= 
//  Vencimiento del Token
// =======================
// 60segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
//  SEED de Autenticacion Desa
// ============================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

// ================= 
//   Base de Datos
// =================

let urlDB;

if (process.env.NODE_ENV === 'desa') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URL;
}

process.env.URLDB = urlDB;

// ==================
//  Google Client ID
// ==================

process.env.CLIENT_ID = process.env.CLIENT_ID || '1031341953561-vj9s0mbh9tahgncqjfe30db5ahmfmv3a.apps.googleusercontent.com';