var pool = require('../db/config')

exports.getAll = async () => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM tanaman;')
  client.release()
  return result
}

exports.getById = async (id) => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM tanaman WHERE id_tanaman = $1;', [id])
  client.release()
  return result
}

exports.getByUserId = async (userId) => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM tanaman WHERE id_pengguna = $1;', [userId])
  client.release()
  return result
}

exports.create = async (payload) => {
  const client = await pool.connect()
  const result = await client.query(`INSERT INTO tanaman (id_pengguna, nama_tanaman, nama_pot, deskripsi, tanggal_penanaman) 
                                     VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *;`, payload)
  client.release()
  return result
}

exports.delete = async (id) => {
  const client = await pool.connect()
  const result = await client.query('DELETE FROM tanaman WHERE id_tanaman = $1 RETURNING *;', [id])
  client.release()
  return result
}