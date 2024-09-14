
const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl text-center">
                <figure><img src={image} alt="Image of Food" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-3">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default FoodCard;