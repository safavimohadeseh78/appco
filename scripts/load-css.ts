import fs from 'fs'
import path from 'path'

const getAllCssFiles = (dirPath: string, arrayOfFiles: string[] = []): string[] => {
    const files = fs.readdirSync(dirPath)

    for (const file of files) {
        const filePath = path.join(dirPath, file)
        const stat = fs.statSync(filePath)

        if (stat.isDirectory()) {
            getAllCssFiles(filePath, arrayOfFiles)
        } else if (file.endsWith('.css')) {
            const relativePath = path.relative(path.resolve(__dirname, '../'), filePath)
            arrayOfFiles.push(`@/${relativePath.replace(/\\/g, '/')}`)
        }
    }

    return arrayOfFiles
}

export const loadGlobalCss = () => {
    const cssRoot = path.resolve(__dirname, '../assets/css')
    return getAllCssFiles(cssRoot)
}
