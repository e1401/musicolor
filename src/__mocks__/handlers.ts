import { rest } from 'msw';

import { API_URL } from '../config/API_URL';
import { mockData } from './mockData';

export const handlers = [
    rest.get(API_URL, (req, res, ctx) => {
        const term = req.url.searchParams.get('term');
        const limit = req.url.searchParams.get('limit');

        if (!term || !limit) {
            return res(
                ctx.status(400),
                ctx.json({ message: 'Please provide term and limit' })
            );
        }

        if (term === 'test' && limit === '10') {
            return res(ctx.status(200), ctx.json({ mockData }));
        } else {
            return res(
                ctx.status(400),
                ctx.json({ message: 'Please provide term and limit' })
            );
        }
    }),
];
