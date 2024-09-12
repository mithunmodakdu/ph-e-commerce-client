

const MenuItem = ({item}) => {

    const {image, name, recipe, price} = item;
    
    return (
        <div className="flex space-x-5">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[80px]" src={image} alt="" />
            <div>
                <h2 className="uppercase">{name}..........................</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
            
        </div>
    );
};

export default MenuItem;