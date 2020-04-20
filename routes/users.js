var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')
var User = require('../models/User')

/*
 * GET all previously sent messages.
 */
router.get('/', async (req, res) => {
  try {
    const result = await User.getAll()
    const results = {
      status: 'Successfully get all users',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * GET user by id.
 */
router.get('/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({ status: 400, message: 'Tidak ada user dengan ID tersebut' })
    }
    const result = await User.getById(req.params.id)
    const results = {
      status: 'Berhasil',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * POST new user.
 * @param req in JSON format
 */
router.post('/', async (req, res) => {
  try {
    if (!req.body.nama || !req.body.email || !req.body.password || !req.body.role) {
      return res.status(400).send({ status: 400, message: 'Kurang lengkap bos !' })
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const payload = [
      req.body.nama,
      req.body.email,
      hashedPassword,
      req.body.role
    ]
    const result = await User.create(payload)
    const results = {
      status: 'User berhasil dibuat',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * PUT edit user by id.
 * @param req in JSON format
 */
router.put('/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({ status: 400, message: 'Gaada ID-nya ini :(' })
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const payload = [
      req.body.nama,
      hashedPassword,
      req.params.id
    ]
    const result = await User.update(payload)
    const results = {
      status: 'User berhasil diperbaui',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

/*
 * DELETE user by id.
 */
router.delete('/:id', async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).send({ status: 400, message: 'Mau apus siape, ID nya kagak ada ini :(' })
    }
    const result = await User.delete(req.params.id)
    const results = {
      status: 'User berhasil dihapus',
      data: (result) ? result.rows : null
    }
    res.send(results)
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

module.exports = router