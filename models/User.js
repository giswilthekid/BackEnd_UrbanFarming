var pool = require('../db/config')

exports.getAll = async () => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM pengguna;')
  client.release()
  return result
}

exports.getById = async (id) => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM pengguna WHERE id_pengguna = $1;', [id])
  client.release()
  return result
}

exports.getByEmail = async (email) => {
  const client = await pool.connect()
  const result = await client.query('SELECT * FROM pengguna WHERE email = $1;', [email])
  client.release()
  return result
}

exports.create = async (payload) => {
  const client = await pool.connect()
  const result = await client.query(`INSERT INTO pengguna (nama_pengguna, email, password, role, no_telepon, created_at) 
                                     VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP) RETURNING *;`, payload)
  client.release()
  return result
}

exports.delete = async (id) => {
  const client = await pool.connect()
  const result = await client.query('DELETE FROM pengguna WHERE id_pengguna = $1 RETURNING *;', [id])
  client.release()
  return result
}