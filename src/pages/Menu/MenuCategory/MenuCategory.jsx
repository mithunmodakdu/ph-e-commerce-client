import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, img, title}) => {
    
    return (
        <div className="my-20">
            {
                title && <Cover img={img} title={title}></Cover>
            }

            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }

            </div>

            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-2 border-[#1F2937] text-[#1F2937]">Order your favorite food</button>
            </Link>
            
        </div>
    );
};

export default MenuCategory;