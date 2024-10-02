import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import picImage from '../logo/logo.png';

export default function Product({ image, description, price ,title }) {
  const [liked, setLiked] = useState(false);

  function toggleLikeHandler() {
    setLiked(!liked);
  }

  const formattedPrice = parseFloat(price).toFixed(2);

  return (
    <article className="w-1/4 p-4 border-2 border-transparent rounded-md shadow-md">
      <img src={image} alt={title} className="w-full h-64 object-cover mb-4 rounded-md" />
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-gray-700 text-lg font-semibold">{title}</p>
          <p className="text-gray-900 text-xl font-bold">£{formattedPrice}</p>
        </div>
        <button
          onClick={toggleLikeHandler}
          className="p-2 text-stone-950 hover:text-red-600 focus:outline-none"
        >
          {liked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
        </button>
      </div>
      <div className="mt-4 flex items-center space-x-3">
        <img src={picImage} alt="" className="w-8 h-8 rounded-full" />
        <h4 className="text-gray-800 font-medium">Jasie Parker</h4>
      </div>
    </article>
  );
}