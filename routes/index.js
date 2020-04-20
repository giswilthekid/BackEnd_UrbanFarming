var express = require('express')
var router = express.Router()
var sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
var Cryptr = require('cryptr')
var cryptr = new Cryptr(process.env.SECRET_KEY)
var bcrypt = require('bcrypt')
var User = require('../models/User')

/*
 * Mengecek apakah tersambung dengan API
 */
router.get('/', (req, res) => {
  res.send('Tersambung')
})

/*
 * Login endpoint.
 */
router.post('/login', async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ status: 400, message: 'Tidak ada email terdaftar atau password salah' })
    }
    const result = await User.getByEmail(req.body.email)
    const user = (result) ? result.rows[0] : null
    if (!user) {
      return res.status(400).send({ status: 400, message: 'Email salah' })
    }
    if (bcrypt.compare(req.body.password, user.password)) {
      const results = {
        status: 'Login berhasil',
        data: (result) ? result.rows : null
      }
      res.send(results)
    } else {
      return res.status(400).send({ status: 400, message: 'Password salah' })
    }
  } catch (err) {
    console.error(err)
    return res.status(500).send(err)
  }
})

module.exports = router