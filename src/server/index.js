import app from './app.js';
import config from '../../config';

app.set('port', config.get('port'));

app.listen(
   app.get('port'),
   () => console.log(`application running at 'http://localhost:${app.get('port')}'`)
);