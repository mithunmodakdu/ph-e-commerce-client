import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover></Cover>

            <h1>this is menu page</h1>
        </div>
    );
};

export default Menu;