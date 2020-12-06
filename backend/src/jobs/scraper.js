import cheerio from 'cheerio';
import fetch from 'node-fetch';
import cron from 'node-cron';

import { Product } from '../resources/product/product.model';

export const scrapeUrls = async (total = 100) => {
  const urls = [];
  for (let i = 1; urls.length < total; i++) {
    const endpoint = 'https://world.openfoodfacts.org';

    const res = await fetch(`${endpoint}/${i}`);
    const html = await res.text();
    const $ = cheerio.load(html);

    const list = $('.products li a');
    list.each((i, elem) => {
      if (urls.length < total) {
        urls.push(`${endpoint}${$(elem).attr('href')}`);
      }
    });
  }

  return urls;
};

export const scrapeProducts = (urls = []) => {
  const products = urls.map(async (url) => {
    const res = await fetch(url);

    const html = await res.text();
    const $ = cheerio.load(html);

    function getList(Filter) {
      const items = [];
      const list = $('span')
        .filter(function () {
          return $(this).text().trim() === Filter;
        })
        .nextAll();
      list.each((i, elem) => {
        items.push($(elem).text());
      });
      return items.join(', ');
    }

    try {
      await Product.create({
        imported_t: new Date(),
        barcode: $('#barcode_paragraph').text().replace('Barcode:', '').trim(),
        product_name: $('h1[itemprop="name"]').text().split(' - ')[0],
        quantity: $('h1[itemprop="name"]').text().split(' - ')[2],
        categories: getList('Categories:'),
        packaging: getList('Packaging:'),
        brands: getList('Brands:'),
        image_url: $(
          'div.show-for-large-up img#og_image.hide-for-xlarge-up'
        ).attr('src'),
        url: url,
      });
    } catch (e) {
      console.error(e);
    }
  });

  return Promise.all(products);
};


cron.schedule('0 0 * * *', async () => {
  console.log('Screper Running');
  // const urls = await scrapeUrls();
  // await scrapeProducts(urls);
  console.log('Screper Complete');
});

