const siswaModel = require('../model/Siswa')
const objectId = require('mongoose').Types.ObjectId

exports.simpanSiswa = (data) =>
  new Promise((resolve, reject) => {
    siswaModel.create(data)
    .then(() => {
        resolve({
            sukses: true,
            pesan: 'Berhasil Input Pendaftaran Siswa'
        })
    }).catch(() => {
        reject({
            sukses: false,
            pesan: 'Gagal Input Pendaftaran Siswa'
        })
    })  
}) 

exports.tampilSiswa = () =>
  new Promise((resolve, reject) => {
      siswaModel.find()
       .then(data => {
         resolve({
             sukses: true,
             pesan: 'Berhasil Memuat Data Siswa',
             data: data
         })
       }).catch(() => {
           reject({
               sukses: false,
               pesan: 'Gagal Memuat Data Siswa',
               data: []
           })
       })
  })

  exports.edit = (data, id) =>
    new Promise((resolve, reject) => {
      siswaModel.updateOne({
        _id: objectId(id)
      }, data).then(() => {
          resolve({
              sukses: true,
              pesan: 'Berhasil Mengubah Data Siswa'
            })
          }).catch(() => {
              reject({
                  sukses: false,
                  pesan: 'Gagal Mengubah data Siswa'
              })
          })
      })

      exports.tampilkanSatuData = (id) => 
        new Promise((resolve, reject) => {
            siswaModel.findOne({
                _id: objectId(id)     
            }).then((data) => {
                resolve(data)
            }).catch(() => reject({
                sukses: false,
                pesan: 'Gagal Memuat Data'
            }))
        })

        exports.delete = (id) =>
          new Promise((resolve, reject) => {
              siswaModel.deleteOne({
                  _id: objectId(id)
              }).then(() => {
                  resolve({
                      sukses: true,
                      pesan: 'Berhasil Menghapus Data Siswa'
                  })
              }).catch(() => {
                  reject({
                      sukses: false,
                      pesan: 'Gagal Menghapus data Siswa'
                  })
              })
          })