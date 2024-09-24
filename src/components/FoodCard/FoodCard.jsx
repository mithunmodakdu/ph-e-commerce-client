
const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl text-center">
                <figure><img src={image} alt="Image of Food" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-3">${price}</p>
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-b-4 bg-slate-100 border-[#BB8506] text-[#BB8506]">Add to cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FoodCard;