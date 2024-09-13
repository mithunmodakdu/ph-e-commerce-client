import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularItems = () => {
    // const [items, setItems] = useState([]);
     
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setItems(popularItems);
    //     })
    // },[])

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <>
        <SectionTitle
        subHeading={"Popular Items"}
        heading={"From our menu"}
        >
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-5 mb-20">
        {
            popular.map(item => <MenuItem
            key={item._id}
            item={item}
            ></MenuItem>)
        }
        </div>
            
        </>
    );
};

export default PopularItems;