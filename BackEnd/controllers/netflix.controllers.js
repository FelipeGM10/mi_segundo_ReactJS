import { pool } from '../db.js';

export const getActores = async (req, res)=>{
    
    const { rows } = await pool.query('SELECT * FROM actores');
    res.json(rows);
};

export const getActor = async (req, res)=>{
    const {id} = req.params
    
    const { rows } = await pool.query('SELECT * FROM actores WHERE actor_id = $1', [id]);
    
    if(rows.length === 0){
        return res.status(404).json({message: 'Actor not found'})
    }

    res.json(rows[0]);
}

export const createActor = async(req, res)=>{
    const data = req.body

    const {rows} = await pool.query('INSERT INTO actores (nombre, fecha_nacimiento) VALUES ($1,$2) RETURNING *', [data.name,data.birthday]);
    
    return res.json(rows);
}

export const deleteActor = async(req, res)=>{
    const {id} = req.params
    
    const { rows, rowsCount } = await pool.query('DELETE FROM actores WHERE actor_id = $1 RETURNING *', [id]);
    console.log(rows)

    if(rowsCount === 0){
        return res.status(404).json({message: 'Actor not found'})
    }
    
    return res.json({message: 'User deleted :('}, rows);
}

export const updateActor = async(req, res)=>{
    const {id} = req.params;
    const data = req.body;

    const {rows} = await pool.query('UPDATE actores SET nombre= $1, fecha_nacimiento= $2 WHERE actor_id = $3 RETURNING *',[data.name,data.birthday, id])
    
    return res.json(rows[0])
}

export const getSeries = async (req, res)=>{
    
    const { rows } = await pool.query('SELECT s.serie_id, s.titulo, s.descripcion, s.año_lanzamiento, s.genero, ROUND( (AVG(e.rating_imdb)/2),2 ) AS rating FROM  series AS s INNER JOIN episodios AS e ON s.serie_id = e.serie_id GROUP BY s.serie_id ORDER BY s.serie_id');
    res.json(rows);
};

export const getSerie = async (req, res)=>{
    const {id} = req.params
    
    const { rows } = await pool.query('SELECT s.serie_id, s.titulo, s.descripcion, s.año_lanzamiento, s.genero, ROUND( (AVG(e.rating_imdb)/2),2 ) AS rating FROM  series AS s INNER JOIN episodios AS e ON s.serie_id = e.serie_id GROUP BY s.serie_id HAVING s.serie_id = $1', [id]);
    
    if(rows.length === 0){
        return res.status(404).json({message: 'Serie not found'})
    }

    res.json(rows[0]);
}