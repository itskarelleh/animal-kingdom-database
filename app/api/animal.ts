import db from '../../db';
export default async (req : Request, res : Response) => {
    const { rows } = await db.query('SELECT * FROM animals');

    res.status(200).json(rows);
}