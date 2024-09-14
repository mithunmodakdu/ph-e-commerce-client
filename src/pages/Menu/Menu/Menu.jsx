import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import PopularItems from '../../Home/PopularItems/PopularItems';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            {/* main cover */}
            <Cover 
                   img={menuImg}
                   title={"OUR MENU"} 
            ></Cover>

            {/* offered menu items */}
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* Desserts menu items */}
            <MenuCategory items={desserts} title={"dessert"} img={dessertImg}></MenuCategory>

            {/* Pizza menu items */}
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>

            {/* Salad menu items */}
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>

            {/* Soup menu items */}
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>



 

           
        </div>
    );
};

export default Menu;