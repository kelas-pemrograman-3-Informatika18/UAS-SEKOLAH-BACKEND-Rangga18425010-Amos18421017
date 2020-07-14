const router = require('express').Router()
const siswaController = require('../controller/Siswa')

router.post('/input', (req, res) => {
    siswaController.simpanSiswa(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.json(err))
})

router.get('/tampil', (req, res) => {
    siswaController.tampilSiswa()
       .then((result) => res.json(result))
       .catch((err) => res.json(err))
})

router.put('/edit/:id', (req, res) => {
    siswaController.edit(req.body, req.params.id)
       .then(result => res.json(result))
       .catch(err => res.json(err))
})

router.get('/tampilsingle/:id', (req, res) => {
    siswaController.tampilkanSatuData(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
    siswaController.delete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router