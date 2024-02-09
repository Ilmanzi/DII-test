const getDatesBetween = require("../helper/datebetween")
const { Dokter } = require("../models")
const { Jadwal } = require("../models")

class JadwalController {
    static async posting_jadwal(req, res, next) {
        try {
            const { nama_dokter, day, time_start, time_finish, quota, status, date_start, date_finish } = req.body

            console.log()
            const foundDokter = await Dokter.findOne({ where: { name: nama_dokter }})
            if (!foundDokter) {
                res.status(404).json({ message: "Dokter tidak ditemukan"})
            }

            const start = new Date(date_start)
            const end = new Date(date_finish)
            const dateRange = getDatesBetween(start,end)

            for (const date of dateRange) {
                await Jadwal.create({
                    dokter_id: foundDokter.id,
                    day,
                    time_start,
                    time_finish,
                    quota,
                    status,
                    doctor_name: foundDokter.name,
                    date
                })
            }
            res.status(200).json({ message: 'Jadwal telah berhasil dibuat'})
        } catch (err) {
            next(err)
        }
    }
    static async getAll(req, res, next) {
        try {
            const jadwalAll = await Jadwal.findAll()
            res.status(200).json({message: "berhasil", jadwalAll})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = JadwalController