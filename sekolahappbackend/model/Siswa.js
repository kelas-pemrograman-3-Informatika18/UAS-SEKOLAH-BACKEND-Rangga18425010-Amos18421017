const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KegiatanSchema = new Schema({
 namasiswa: {
     type: String
 },
 ttl: {
     type: String
 },
 nisn: {
     type: String
 },
 asalsekolah: {
     type: String
 },
 namaortu: {
     type: String
 },
 alamat: {
     type: String
 }

})

module.exports = mongoose.model('kegiatan', KegiatanSchema)