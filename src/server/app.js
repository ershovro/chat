import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import api from './api';

const fileAssets = express.static( DIR_STATIC_FILES );
const logger = (req, res, next) => {
   console.log(`${req.method} request for ${req.url}`);
   next();
};
const buildHTMLPage = () =>
   `
      <!DOCTYPE html>
      <html>
        <head>
            <meta charset="utf-8"/>
            <title>Application chat</title>
            <style></style>
        </head>
        <body>
            <div id="root"></div>
            <script src="/bundle.js"></script>
        </body>
      </html>
   `;
const respond = ({url}, res) => {
   res.status(200).send( buildHTMLPage() );
};

export default express()
   //.use( bodyParser.json() )
   .use(logger)
   .use(fileAssets)
   .use('/api', api)
   .use(respond)