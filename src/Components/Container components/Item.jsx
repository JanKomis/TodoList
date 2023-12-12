import {PencilIcon, TrashIcon} from '@primer/octicons-react'




export default function Item({ item, onRemoveItem, handleEditItem }) {
  return (
    <li className="h-32 w-80 mx-auto bg-yellow-500 flex rounded-xl overflow-hidden">
      <div className='w-10/12 px-4 py-2'>
        <h3 className='text-3xl'>Lorem</h3>
        <p className='break-words'>{item.text}</p>
      </div>
      <div className='w-2/12 flex flex-col justify-center px-2 bg-black gap-4' >
        <button className='w-10 h-10 bg-gray-500 rounded-full hover:bg-gray-300' onClick={() => handleEditItem(item)}><PencilIcon size={24} /></button>
        <button className='w-10 h-10 bg-gray-500 rounded-full hover:bg-gray-300' onClick={() => onRemoveItem(item)}><TrashIcon size={24} /></button>
      </div>
    </li>
  );
}


/*
export default function Item({ item, onRemoveItem, handleEditItem }) {
  return (
    <li className="w-80 h-32 mx-auto bg-yellow-500 rounded-xl overflow-hidden grid grid-cols-6">
      <div className='px-4 py-2 col-span-5'>
        <h3 className='text-3xl'>Lorem</h3>
        <p>{item.text}</p>
      </div>
      <div className='px-2 bg-black flex flex-col justify-center gap-3' >
        <button className='bg-white rounded-full' onClick={() => handleEditItem(item)}><PencilIcon size={24} /></button>
        <button className='bg-white rounded-full' onClick={() => onRemoveItem(item)}><TrashIcon size={24} /></button>
      </div>
    </li>
  );
}
*/