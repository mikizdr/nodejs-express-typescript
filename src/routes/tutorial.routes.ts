import { Router } from 'express';
import TutorialController from '../controllers/tutorial.controller';

class TutorialRouter {
    public router: Router = Router();
    public controller = new TutorialController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        // Create a new tutorial.
        this.router.post('/', this.controller.create);

        // Get all the tutorials
        this.router.get('/', this.controller.index);

        // Get a single tutorial.
        this.router.get('/:id', this.controller.show);

        // Update a single tutorial.
        this.router.put('/:id', this.controller.update);

        // Delete a single tutorial.
        this.router.delete('/:id', this.controller.destroy);
    }
}

export default new TutorialRouter().router;
