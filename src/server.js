import app from './app.js';

const PORT = process.env.PORT || 4000;

app.set('port', PORT);

app.listen(app.get('port'), () => {
  console.log(`Server is running on port - ${PORT}`)
});