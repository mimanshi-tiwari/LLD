import React from 'react'

const FilesAndFolders = ({ data, addFileOrFolder, deleteItem }) => {
    const [expandedFolders, setExpandedFolders] = React.useState({})
    return (
        <div className='px-2 py-1 cursor-pointer roundeds'>
            {data.map((item) => (
                <div key={item.id} className='rounded p-1'>
                    <div className='flex gap-2 items-center hover:bg-gray-600 px-2 py-1 rounded justify-between'>
                        <div className='flex gap-2 items-center'>
                            {item.isFolder ?
                                (<span onClick={() => setExpandedFolders((prev => {
                                    return { ...prev, [item.name]: !prev[item.name] }
                                }))}>{expandedFolders[item.name] ?
                                    (<img src="https://www.svgrepo.com/show/134716/open-folder.svg" className='w-6'/>)
                                   : 
                                     (<img src="https://www.svgrepo.com/show/343127/folder-closed.svg" className='w-6'/>)
                                    }</span>) :
                                <span>📄</span>}
                            <span className='flex gap-8'>
                                {item.name}
                            </span>
                        </div>
                        <div className='flex gap-2 bg-transparent text-white'>
                            {item.isFolder && (
                                <>

                                    <img
                                        src="https://www.svgrepo.com/show/501801/add-folder.svg"
                                        alt="add file or folder"
                                        className='w-6'
                                        onClick={() => addFileOrFolder(item.id, { name: 'new folder', isFolder: true, children: [] })}
                                    />
                                    <img
                                        src="https://www.svgrepo.com/show/502923/add-file.svg"
                                        alt="add file"
                                        className='w-6 p-0'
                                        onClick={() => addFileOrFolder(item.id, { name: 'new file', isFolder: false })}
                                    />
                                </>
                            )}
                            <img
                                src="https://www.svgrepo.com/show/343422/delete-junk-2.svg"
                                alt="delete file or folder"
                                className='w-5 p-0'
                                onClick={() => deleteItem(item.id)}
                            />
                        </div>
                    </div>
                    {expandedFolders[item.name] && item.isFolder && item.children && (
                        <FilesAndFolders data={item.children} addFileOrFolder={addFileOrFolder} deleteItem={deleteItem} />
                    )}
                </div>))}
        </div>
    )
}

export default FilesAndFolders
