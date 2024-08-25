import db from "../connection.js"

export const getSewaMobil = (req, res) => {
    const sql = "SELECT * FROM sewa_mobil "
    db.query(sql, (error, result)=> {
        res.send(result)
    });
};

export const getSewaMobilById = (req,res) => {
    const id_mobil = req.query.id_mobil;
    const sql = `SELECT * FROM sewa_mobil WHERE id_mobil = ${id_mobil}`;
    db.query(sql, (error, result) => {
        res.json(result);
    });
};

export const createSewaMobil = (req,res) =>{
    const {id_mobil, nama_peminjam, merek_mobil, harga_sewa_per_hari} = req.body;
    const sql = `INSERT INTO sewa_mobil (id_mobil, nama_peminjam, merek_mobil, harga_sewa_per_hari) VALUES (?,?,?,?)`
    db.query(sql, [id_mobil, nama_peminjam, merek_mobil, harga_sewa_per_hari],(error,result) => {
        if (error) {
            res.status(400)
            res.send(error)
        }
        res.status(201);
        res.json(result);
    })
}

export const updateSewaMobil = (req, res) =>{

        const id_mobil = req.query.id_mobil;
        const {nama_peminjam, merek_mobil, harga_sewa_per_hari} = req.body
        if(id_mobil || nama_peminjam || merek_mobil || harga_sewa_per_hari) {
            const query = `UPDATE sewa_mobil SET nama_peminjam = "${nama_peminjam}",merek_mobil ="${merek_mobil}",
            harga_sewa_per_hari = "${harga_sewa_per_hari}", id_mobil = "${id_mobil}"`;

            db.query(query, (error,result) => {
                if (error) res.status(400).send(error.message);    
                res.json(result);
            });
        } else {
            res.send("nice kamu bisa update");
        }   
     }


     export const deleteSewaMobil = (req, res) =>{
        const id_mobil = req.query.id_mobil
        const sql = "DELETE FROM sewa_mobil WHERE id_mobil = ?"
        db.query(sql, [id_mobil], (error, result) =>{
            if(error){
                res.status(400)
                res.send(error)
            }
            res.status(200);
            res.json("data berhasil dihapus")
        })
    }
     