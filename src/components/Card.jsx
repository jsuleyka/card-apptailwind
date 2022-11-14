import React from 'react';

const Card = ({ photo }) => {
  return (
    <div className="card hover:bg-teal-500 transition ease-in-out duration-500">
      <img src={photo} alt="Sunset" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Colddest Sunset</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ratione commodi repudiandae fugit
          reiciendis inventore velit? Eius fugiat, quod amet excepturi culpa
          illo harum sunt architecto corporis fuga, ut, nisi inventore!</p>
      </div>

      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
          font-semibold hover:text-teal-500 transition ease-in-outduration-500">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
          font-semibold hover:text-teal-500 transition ease-in-outduration-500">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
          font-semibold hover:text-teal-500 transition ease-in-outduration-500">#winter</span>
      </div>
    </div>
  )
}

export default Card
