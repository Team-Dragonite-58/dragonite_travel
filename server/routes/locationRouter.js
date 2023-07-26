/**
 * @module location Router
 * @description Routes all requests to location endpoint
 */
import { Router } from 'express';
import locationController from '../controllers/locationController.js';

const router = Router();

// ==========================================================
// Route: /
// Purpose: add and get location data
// ==========================================================

router.post('/', locationController.createLocation, (req, res) => {
  return res.status(201).json(res.locals.locationsList);
});

router.get('/', locationController.getLocation, (req, res) => {
  return res.status(201).json(res.locals.location);
});

export default router;
