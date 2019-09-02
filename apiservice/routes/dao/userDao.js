let db = require('../../common/mysql')
let log = require('../../common/log')

let insertStaff = async(s) => {
    let sql = `insert into ROMS_STAFF 
        (id,createTime,staffName,staffPwd,staffPhone,staffState,staffSex,staffRoles) 
        values
        (uuid(),now(),?,?,?,?,?,?)`
    let values = [s.staffName, s.staffPwd, s.staffPhone, s.staffState, s.staffSex, s.staffRoles]
    let dbres = null
    try {
        dbres = await db.query(sql, values, 'insertStaff')
    } catch (error) {
        log.error('insertStaff', error)
    }
    return dbres
}

let queryStaffByPhoneAndPwd = async(phone, pwd) => {
    let sql = `select * from ROMS_STAFF where staffPhone=? and staffPwd=?`
    let values = [phone, pwd]
    let staffs = []
    try {
        staffs = await db.query(sql, values, 'queryStaffByPhoneAndPwd')
    } catch (error) {
        log.error('queryStaffByPhoneAndPwd', error)
    }
    return staffs
}

module.exports = {
    insertStaff,
    queryStaffByPhoneAndPwd
}