import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import PopularItems from '../../Home/PopularItems/PopularItems';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={menuImg}
                   title={"OUR MENU"} 
            ></Cover>

            <PopularItems></PopularItems>
            <Cover img={menuImg}
                   title={"OUR MENU"} 
            ></Cover>

            <PopularItems></PopularItems>
            <Cover img={menuImg}
                   title={"OUR MENU"} 
            ></Cover>

            <PopularItems></PopularItems>
            <Cover img={menuImg}
                   title={"OUR MENU"} 
            ></Cover>

            <PopularItems></PopularItems>
        </div>
    );
};

export default Menu;