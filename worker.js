require('dotenv').config()

var pool = require('./db/db_config')

/*
 * Create new random sensor inputs periodically.
 */
const inputSensorData = async () => {
  try {
    const client = await pool.connect()
    const tanaman = await client.query('SELECT id_tanaman FROM tanaman;')
    const ids = (tanaman) ? tanaman.rows : null
    ids.map(async id => {
      const payload = [
        id.id,
        Math.floor(Math.random() * 50),
        Math.floor(Math.random() * 50),
        Math.floor(Math.random() * 50),
      ]
      await client.query('INSERT INTO data_sensor (id_tanaman, suhu, kelembaban_udara, intensitas_cahaya, waktu) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)', payload)
    })
    console.log('Data updated at ' + new Date(Date.now()).toLocaleString())
    client.release()
  } catch (err) {
    console.error(err)
    console.log('Error: ' + err + ' at ' + new Date(Date.now()).toLocaleString())
  }
}

inputSensorData()