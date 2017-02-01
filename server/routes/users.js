import express from 'express';
import validateInput from '../shared/validations/signUp';

let router = express.Router();

router.post('/', (req, res) => {
    //check if req is valid
    const {errors, isValid } = validateInput(req.body);

    //if input is valid send OK
    if(isValid) {
        res.json({success: true});
    }else{
        res.status(400).json(errors);
    }
});

export default router;