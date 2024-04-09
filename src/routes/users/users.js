const { Router } = require("express");
const { checkUserExists } = require("../../controllers/users/checkUser");
const { register } = require("../../controllers/users/register");
const { getAllUsers } = require("../../controllers/users/getAllUsers");
const { login } = require("../../controllers/users/login");
const { authenticateToken } = require("../../helpers/authenticateToken");
const { userInfo } = require("../../controllers/users/userInfo");
const { updateProfile } = require("../../controllers/users/updateProfile");
const { confirmEmail } = require("../../controllers/email/sendgridController");
const createGuestProfile = require("../../controllers/users/createGuestProfile");
const updateGuestProfilePhoto = require("../../controllers/users/updatePhoto");

//const upload = require("../../controllers/uploads3/multerConfig");

const router = Router();

router.post("/register", register);
router.get("/checkUser", checkUserExists);
router.get("/allUsers", authenticateToken, getAllUsers);
router.post("/login", login);
router.get("/userinfo", authenticateToken, userInfo);
router.post("/profile/:userId", updateProfile);
router.get("/confirm/:verificationCode", confirmEmail);
router.post("/createguestprofile", createGuestProfile);

//  ruta para actualizar la foto del perfil de invitado
router.put("/guest-profile/:id/photo", updateGuestProfilePhoto);

module.exports = router;
