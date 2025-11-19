import React from 'react'
import data from './data.json'
import FilesAndFolders from './files-and-folders'

const FileExplorer = () => {
    const [files, setFiles] = React.useState(data)

    const addFileOrFolder = (parentId, newItem) => {
        const name = prompt("Enter name for new file/folder:")

        const updateData = (files) => {
            return files.map(file => {
                if (file.id === parentId) {
                    return {
                        ...file,
                        children: [...file.children, { ...newItem, name, id: Date.now().toString() }]
                    }
                }
                if (file.children) {
                    return {
                        ...file,
                        children: updateData(file.children)
                    }
                }
                return file
            })

        }

        setFiles((prevFiles) => updateData(prevFiles))
    }

    const deleteItem = (itemId) => {
        const updateData = (files) => {

            return files.filter(file => file.id !== itemId).map(file => {
                if(file.children)
                return {
                    ...file,
                    children: updateData(file.children)
                }
                return file
        })

        }

        setFiles((prevFiles) => updateData(prevFiles))
    }
    return (
        <div className='p-4 bg-gray-700 text-white'>
            <h1>File Explorer</h1>
            <FilesAndFolders data={files} addFileOrFolder={addFileOrFolder} deleteItem={deleteItem}/>
        </div>
    )
}

export default FileExplorer
