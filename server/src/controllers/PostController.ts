import { Request, Response } from 'express';
import { Post } from '@models/Post';
import { Citi, Crud } from '../global';

export default class PostController implements Crud {

    async create(request: Request, response: Response){
        const {creator, name, description} = request.body;

        // checking values in order to continue process
        const isAnyUndefined = Citi.areValuesUndefined(creator, name, description);
        if (isAnyUndefined) return response.status(400).send();

        // posting data into db
        const newPost = { creator, name, description };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Post, newPost);

        // response message to user
        return response.status(httpStatus).send({ message });
    }

}