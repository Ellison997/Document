const port = 2020;
const sslport = 2021;

let mysqlConfig = {
    host: '118.178.18.106',
    user: 'lims_yunnan',
    password: 'xt2010',
    database: 'lims_yunnan',
    timezone: '+08:00',
    dateStrings: true,
    connectionLimit: 20
}

let log4jsConfig = {
    type: "dateFile",
    filename: './logs/yunnanlims', //您要写入日志文件的路径,格式为  '路径/文件名'
    alwaysIncludePattern: true, //（默认为false） - 将模式包含在当前日志文件的名称以及备份中
    //compress: true,//（默认为false） - 在滚动期间压缩备份文件（备份文件将具有.gz扩展名）
    pattern: "-yyyy-MM-dd.log", //（可选，默认为.yyyy-MM-dd） - 用于确定何时滚动日志的模式。格式:.yyyy-MM-dd-hh:mm:ss.log
    encoding: 'utf-8', //default "utf-8"，文件的编码
    maxLogSize: 100 //文件最大存储空间，当文件内容超过文件存储空间会自动生成一个文件xxx.log.1的序列自增长的文件
}




module.exports = {
    mysqlConfig,
    log4jsConfig,
    port,
    sslport
}