import picImage from '../logo/logo.png'

export default function Product({ image, description, price }) {
    return (
        <article className="w-64 p-4 border rounded-md shadow-md">
            <img src={image} alt="" className="w-full h-64 object-cover mb-4" />
            {/* <div className="flex justify-between items-center mb-2">
                <div>
                    <p className="text-gray-700 text-lg font-semibold">{description}</p>
                    <p className="text-gray-900 text-xl font-bold">£{price}</p>
                </div>
                <button
                    onClick={toggleLike}
                    className="p-2 text-red-500 hover:text-red-600 focus:outline-none"
                >
                    {liked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
                </button>
            </div> */}
            <div className="mt-4 flex items-center space-x-3">
                <img src={picImage} alt="" className="w-8 h-8 rounded-full" />
                <h4 className="text-gray-800 font-medium">Jasie Parker</h4>
            </div>
        </article>
    )
}