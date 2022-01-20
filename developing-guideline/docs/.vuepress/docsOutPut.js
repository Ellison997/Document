const path = require('path')
const fs = require('fs')
const cmd = require('node-cmd')


const defaultOptions = {
    basePath: __dirname, // 基本目录上下文
    output: 'docsOutput', // 导出的目标目录
    dir: '../specification' // 包含md文档的顶层目录
}

const options = Object.assign({}, defaultOptions, {})
const outputPath = path.resolve(options.basePath, options.output)
const docsPath = path.resolve(options.basePath, options.dir)

// create output dir
function createDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
};


// 拼接文本流
function spliceData(fileNameArr) {
    let data = '';

    let index = 0;
    const readFile = function(i) {
        // 创建可读流
        let readerStream = fs.createReadStream(docsPath + '\\' + fileNameArr[i]);
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
                let writerStream = fs.createWriteStream(outputPath + '\\编程规约.md');

                // 使用 utf8 编码写入数据
                writerStream.write(data, 'UTF8');

                // 标记文件末尾
                writerStream.end();

                // 处理流事件 --> finish、error
                writerStream.on('finish', function() {
                    console.log("写入完成。");
                    const commond = `pandoc ${outputPath + '\\编程规约.md'} -o ${outputPath +
                        '\\' +
                        '编程规约.md'.replace('.md', '')}.docx`
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
function makeDocxFile(_path) {
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
                // makeDocxFile(newPath)
            }
        });
        spliceData(fileNames);
    })
};

console.log('文档目录：', docsPath)
console.log('输出目录：', outputPath)

createDir(outputPath);

// makeDocxFile(docsPath)
const fileNameArr = [
    'name_dir.md',
    'name_image.md',
    'name_htmlcss.md',
    'name_classname.md',
    'html_code.md',
    'html_note.md',
    'html_template.md',
    'html_webapp.md',
    'css_code.md',
    'css_note.md',
    'css_query.md',
    'css_reset.md',
    'css_sass.md',
    'css_webkit.md',
    'js_code.md',
    'js_language.md',
    'js_vue.md',
    'image_format.md',
    'image_import.md',
    'image_quality.md',
    'image_size.md',
]
spliceData(fileNameArr);