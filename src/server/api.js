import {Router} from 'express';

let subscribers = Object.create(null);
const router = Router();

router.post('/publish', (req, res) => {
   console.log('api - publish');
   let message = '';

   req.
   on('data', (chunk) => {
      message += chunk;
   }).
   on('error', (err) => {
      console.error(err);
   }).
   on('end', () => {
      for(let key in subscribers) {
        let res = subscribers[key];
        res.end(message);
      }

      subscribers = Object.create(null);
   })


});

router.get('/subscribe/:random', (req, res) => {
   console.log('api - subscribe');

   const id = Math.random();

   res.setHeader('Content-Type', 'text/plain;charset=utf-8');
   res.setHeader("Cache-Control", "no-cache, must-revalidate");
   subscribers[id] = res;

   req.on('close', () => {
      delete subscribers[id];
   })
});

export default router;