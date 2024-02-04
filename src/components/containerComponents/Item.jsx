import {PencilIcon, TrashIcon} from '@primer/octicons-react'

export default function Item({ item, onRemoveItem, handleEditItem }) {
  return (
    <li className="h-32 min-w-72 bg-yellow-500 flex rounded-xl overflow-hidden">
      <div className='flex-grow px-4 py-2 overflow-hidden'>
        <h3 className='text-3xl'>{item.title}</h3>
        <p className='break-words'>{item.text}</p>
      </div>
      <div className='w-14 flex flex-col justify-center bg-black gap-4 px-2' >
        <button className='w-9 h-9 mx-auto bg-gray-500 rounded-full hover:bg-gray-300' onClick={() => handleEditItem(item)}><PencilIcon size={24} /></button>
        <button className='w-9 h-9 mx-auto bg-gray-500 rounded-full hover:bg-gray-300' onClick={() => onRemoveItem(item)}><TrashIcon size={24} /></button>
      </div>
    </li>
  );
}

