import express from 'express';
import {addNewAdmin,login, patientRegister, getAllDoctors,getUserDetails,logoutAdmin,logoutPatient, addNewDoctor } from '../contoller/userContoller.js';
import { isAdminAuthenticated,isPatientAuthenticated} from '../middlewares/auth.js';
const router = express.Router();

router.post('/patient/register', patientRegister);
router.post('/login', login);
router.post('/admin/register',isAdminAuthenticated, addNewAdmin);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
router.get('/doctor', getAllDoctors);
router.get('/admin/userDetails',isAdminAuthenticated, getUserDetails);
router.get('/patient/userDetails',isPatientAuthenticated, getUserDetails);
router.get('/admin/logout', isAdminAuthenticated, logoutAdmin);
router.get('/Patient/logout', isPatientAuthenticated, logoutPatient);
export default router;