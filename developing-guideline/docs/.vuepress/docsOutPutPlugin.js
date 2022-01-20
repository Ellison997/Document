const path = require('path')
const fs = require('fs')
const cmd = require('node-cmd')

/**
 * webpack插件，当打包生产模式的时候，将vuePree的md文档输出word文档
 * tx 20190705
 */
class DocsOutPutPlugin {
    constructor(options) {
        const defaultOptions = {
            basePath: '', // 基本目录上下文
            output: 'docsOutput', // 导出的目标目录
            dir: '../specification' // 包含md文档的顶层目录
        }
        if (!options || !options.basePath) {
            throw new Error('basePath is required')
        }
        this.options = Object.assign({}, defaultOptions, options)
        this.outputPath = path.resolve(this.options.basePath, this.options.output)
        this.docsPath = path.resolve(this.options.basePath, this.options.dir)
        console.log('构造方法执行。')
    }
    apply(compiler) {
        console.log('当前环境：', process.env.NODE_ENV)
        console.log('转换目录：', this.docsPath)
        compiler.hooks.run.tap('123', (compilation) => {
            console.log('webpack 构建正在启动！');
            // if (process.env.NODE_ENV === 'production') {
            //     compiler.plugin('compile', params => {
            //         this.createDir(this.outputPath)
            //         this.makeDocxFile(this.docsPath)
            //     })
            // }
        });


    };

    // create output dir
    createDir(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir)
        }
    };


    // 拼接文本流
    spliceData(fileNameArr) {
        let data = '';
        let that = this;
        let index = 0;
        const readFile = function(i) {
            // 创建可读流
            let readerStream = fs.createReadStream(that.docsPath + '\\' + fileNameArr[i]);
            // 设置编码为 utf8。
            readerStream.setEncoding('UTF8');

            // 处理流事件 --> data, end, and error
            readerStream.on('data', function(chunk) {
                data += chunk;
            });

            readerStream.on('end', function() {
                console.log('拼接结束', index)
                if (index != fileNameArr.length - 1) {
                    index++;
                    data += '\r\n'
                    readFile(index)
                } else {
                    console.log('拼接完全结束');
                    // 创建一个可以写入的流，写入到文件 output.txt 中
                    let writerStream = fs.createWriteStream(that.docsPath + '\\output.md');

                    // 使用 utf8 编码写入数据
                    writerStream.write(data, 'UTF8');

                    // 标记文件末尾
                    writerStream.end();

                    // 处理流事件 --> finish、error
                    writerStream.on('finish', function() {
                        console.log("写入完成。");
                        const commond = `pandoc ${that.docsPath + '\\output.md'} -o ${that
                            .outputPath +
                            '\\' +
                            'output.md'.replace('.md', '')}.docx`
                        console.log(commond)
                        cmd.run(commond)
                    });

                    writerStream.on('error', function(err) {
                        console.log(err.stack);
                    });

                }
            });

            readerStream.on('error', function(err) {
                console.log(err.stack);
            });
        }
        readFile(index)

    }

    // create output file
    makeDocxFile(_path) {
        let that = this;
        fs.readdir(_path, (readErr, files) => {
            if (readErr) {
                throw readErr
            }
            console.log(typeof files, files);
            let fileNames = []
            files.forEach(file => {
                console.log('md 文件：', file)
                const stats = fs.statSync(_path + '\\' + file)
                if (stats.isFile()) {
                    fileNames.push(file)

                } else if (stats.isDirectory()) {
                    // const newPath = _path + '\\' + file
                    // this.makeDocxFile(newPath)
                }
            });
            that.spliceData(fileNames);


        })
    }
}

module.exports = DocsOutPutPlugin