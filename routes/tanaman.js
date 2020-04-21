var express = require('express')
var router = express.Router()
var Tanaman = require('../models/Tananaman')

/*
 * GET all tanaman.
 */
router.get('/', async (req, res) => {
  try {
    const result = await Tanaman.getAll()
    const results = {
      status: 'Berhasil get semua tanaman',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * GET tanaman by id.
 */
router.get('/by-id/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({ status: 400, message: 'Gaada id nye bos' })
    }
    const result = await Tanaman.getById(req.params.id)
    const results = {
      status: 'Berhasil get tanaman',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * GET tanaman by user id.
 */
router.get('/by-user/:userId', async (req, res) => {
  try {
    if (!req.params.userId) {
      return res.status(400).send({ status: 400, message: 'No id provided' })
    }
    const result = await Tanaman.getByUserId(req.params.userId)
    const results = {
      status: 'Successfully get land',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * POST new tanaman.
 * @param req in JSON format
 */
router.post('/:userId', async (req, res) => {
  try {
    if (!req.params.userId || !req.body.nama_tanaman || !req.body.nama_pot || !req.body.deskripsi) {
      return res.status(400).send({ status: 400, message: 'One or more data is missing' })
    }
    const payload = [
      req.params.userId,
      req.body.nama_tanaman,
      req.body.nama_pot,
      req.body.deskripsi,
    ]
    const result = await Tanaman.create(payload)
    const results = {
      status: 'Tanaman berhasil dibuat yee!',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * DELETE tanaman by id.
 */
router.delete('/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({ status: 400, message: 'No id provided' })
    }
    const result = await Tanaman.delete(req.params.id)
    const results = {
      status: 'Land deleted successfully',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

module.exports = router