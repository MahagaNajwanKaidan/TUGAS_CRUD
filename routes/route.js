import express from 'express';
import { getSewaMobil,getSewaMobilById,createSewaMobil,updateSewaMobil,deleteSewaMobil } from '../controller/sewamobilController.js';

const router = express.Router();

router.get("/", getSewaMobil);
router.get("/find", getSewaMobilById);
router.post("/create", createSewaMobil);
router.put("/update", updateSewaMobil);
router.delete("/delete",deleteSewaMobil)

export default router;