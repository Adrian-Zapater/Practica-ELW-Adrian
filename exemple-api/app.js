const { app } = require('./app/express'); 
const { connect } = require('./connections/mongodb.connections');
const {mangaRouter} = require('./routes/manga.routes');
const { favoritosRouter } = require('./routes/favoritos.routes.js');
const {personajesRouter} = require('./routes/personajes.routes');
const PORT = 3000;

async function main() {
  await connect();


app.use('/mangues', mangaRouter);
app.use('/favoritos', favoritosRouter);
app.use('/personajes', personajesRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
}

main().catch((err) =>{
  console.error(err);
});