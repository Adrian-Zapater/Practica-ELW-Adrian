const mongoose = require('mongoose');

const MangaMongooseSchema = new mongoose.Schema({
    titol: {
        type: String,
        index: true
    },

    autor: {
        type: String,
        index: true
    },

    genere: {
        type: [String],
        index: true
    },

    caps: {
        type: Number,
        index: true
    },

    foto: {
        type: String,
        index: true
    },

    sinopsis: {
        type: String,
        index: true
    },
    });


const PuntuacioMongooseSchema = new mongoose.Schema({
    username: String,
    puntuacioTotal: Number,
    puntuacioMitjaPerSegon: Number,
    tempsJugat: Number,
});

const StaticsMongooseSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: false,
        default: null 
        },
    llocEvent: {
        type: String,
        required: true
    },
    tipusEvent: {
        type: String,
        enum: ['visita', 'click'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const MangaMongooseModel = mongoose.model('Manga', MangaMongooseSchema);
const PuntuacioMongooseModel = mongoose.model('Puntuacio', PuntuacioMongooseSchema);
const StaticsMongooseModel = mongoose.model('Statics', StaticsMongooseSchema);

function createStatics(statics) {
    const staticsMongose = new StaticsMongooseModel(statics);
    return staticsMongose.save();
}

function createManga(manga) {
    const mangaMongoose = new MangaMongooseModel(manga);
    return mangaMongoose.save();
}

function findMangaById(id) {
    return MangaMongooseModel.findById(id);
}

function findAllMangas() {
    return MangaMongooseModel.find();
}

async function findMangaByTitol(titol) {
    // Buscar mangas que contengan la palabra proporcionada, y ser sensible a mayúsculas y minúsculas
    return MangaMongooseModel.find({ titol: { $regex: new RegExp(titol, 'i') } });
  }

async function findMangaByTitolExacte(titol) {
    return MangaMongooseModel.findOne({ titol: titol });
  }

function findMangaByAutor(autor) {
    return MangaMongooseModel.find({autor: autor});
}

function findMangaByGenere(genere) {
    return MangaMongooseModel.find({genere: {$in: genere} });
}

function createPuntuacio(puntuacio) {
    const puntuacioMongoose = new PuntuacioMongooseModel(puntuacio);
    return puntuacioMongoose.save();
}

function findRankingPuntuacio(num) {
    return PuntuacioMongooseModel.find().sort({puntuacioMitjaPerSegon : -1}).limit(num);
}

function findPuntuacioByUsername(username) {
    return PuntuacioMongooseModel.find({username: username});
}

module.exports.createManga = createManga;
module.exports.findMangaById = findMangaById;
module.exports.findAllMangas = findAllMangas;
module.exports.findMangaByTitol = findMangaByTitol;
module.exports.findMangaByAutor = findMangaByAutor;
module.exports.findMangaByGenere = findMangaByGenere;
module.exports.findMangaByTitolExacte = findMangaByTitolExacte;

module.exports.createPuntuacio = createPuntuacio;
module.exports.findRankingPuntuacio = findRankingPuntuacio;
module.exports.findPuntuacioByUsername = findPuntuacioByUsername;

module.exports.createStatics = createStatics;