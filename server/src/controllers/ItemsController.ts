import {Request, Response} from 'express'
import knex from '../database/connection'
import ip_config from '../config/ip.config';

class ItemsController {
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://${ip_config.local_ip}:3333/uploads/${item.image}`
            };
        })
    
        return response.json(serializedItems);
    }
}

export default ItemsController;