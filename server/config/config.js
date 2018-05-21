//====================================
//Puerto
//====================================
process.env.PORT = process.env.PORT || 3000;

//====================================
//Entorno
//====================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//====================================
//Base de Datos
//====================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:123456@ds239009.mlab.com:39009/cafe';
}

process.env.urlDB = urlDB;