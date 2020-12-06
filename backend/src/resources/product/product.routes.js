import { Router } from 'express';
import controllers from './product.controllers';

const router = Router();

// api/products
router
  .route('/')
  .get(controllers.getManyPaginated)
  .post(controllers.createOne);

// api/products/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);

export default router;
