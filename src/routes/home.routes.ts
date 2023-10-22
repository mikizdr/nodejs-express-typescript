import { Router } from 'express';
import { welcome } from '../controllers/home.controllers';

class HomeRouter {
    public router: Router = Router();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', welcome);
    }
}

export default new HomeRouter().router;
