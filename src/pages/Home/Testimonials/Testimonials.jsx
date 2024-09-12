import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews)
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])


    return (
        
        <section className="my-20">
            <SectionTitle 
            heading={"TESTIMONIALS"} 
            subHeading={"What Our Clients Say"}>
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
               {
                reviews.map(review =><SwiperSlide
                key={review._id}
                >
                    

                   <div className="m-24 text-center">
                    <div className="w-48 mx-auto mb-4">
                        <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                        />
                    </div>
                    <p>{review.details}</p>
                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                   </div>
                </SwiperSlide>)
               }
            </Swiper>
        </section>
            
        
    );
};

export default Testimonials;