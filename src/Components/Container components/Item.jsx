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

