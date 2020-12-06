import express from 'express';
import config from './config';
import helmet from 'helmet';
import xss from 'xss-clean';
import hpp from 'hpp';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import colors from 'colors';

import { connect } from './utils/db';

import './jobs/scraper';
import { scrapeUrls, scrapeProducts } from './jobs/scraper';

import productRoutes from './resources/product/product.routes';

const app = express();

//* CONFIG *//
app.disable('x-powered-by'); // ? Disable default header

app.use(cors()); // ? CORS Enabled
app.use(json()); // ? Body parser for application/json POST data
app.use(urlencoded({ extended: true })); // ? Body parser for application/x-www-form-urlencoded POST data

app.use(helmet()); // ? Securiy Headers Default config
app.use(xss()); // ? Prevent Cross Site Scripting
app.use(hpp()); // ? Prevent HTTP param pollution

app.use(morgan('dev')); // ? Server Logger
//* END CONFIG *//

//* ROUTES *//
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Fullstack Challenge 20201026 ⚡️' });
});

app.use('/api/products', productRoutes);

app.get('/api/scrape', async (req, res) => {
  const urls = await scrapeUrls();
  await scrapeProducts(urls);
  res.status(200).json({ message: 'OK' });
});

//* END ROUTES *//

const start = async () => {
  try {
    await connect();
    app.listen(config.port, () => {
      console.log(
        colors.underline.bgBlack.bold.brightMagenta(
          `API is Running at http://localhost:${config.port}/api`
        )
      );
    });
  } catch (e) {
    console.error(e);
  }
};

start();
