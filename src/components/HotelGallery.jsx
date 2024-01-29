const images= [

    {
    id:1,
    name: 'Antara Peace Haven Tangalle Resort',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/60/05/14/reception.jpg?w=300&h=300&s=1',
    rating: 5,
    description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis \nparturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate"
    },

    {
        id:2,
        name: 'Cinnamon Lakeside Colombo',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/94/ef/ec/delux-room.jpg?w=300&h=300&s=1',
        rating: 4
    },

    {
        id:3,
        name: 'Cinnamon Grand Colombo',
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/94/ef/eb/exterior.jpg?w=300&h=300&s=1",
        rating: 3
    },

    {
        id:4,
        name: 'Cinnamon Bentota Reach',
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/e6/40/75/cinnamon-bentota-beach.jpg?w=300&h=300&s=1",
        rating: 1
    },

    {
        id:5,
        name: 'The Kingsbury Hotel',
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/91/34/0b/the-kingsbury-exterior.jpg?w=300&h=300&s=1",
        rating: 2
    },

    {
        id:6,
        name: 'Cinnamon Red Colombo',
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/91/56/3f/red-rooftop-pool.jpg?w=300&h=300&s=1",
        rating: 5
    },

    {
        id:7,
        name: 'Marino Beach Colombo',
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/ea/9a/4b/hotel-image.jpg?w=300&h=300&s=1",
        rating: 4
    },

    {
        id:8,
        name: 'Mandariana Colombo',
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/75/d8/95/infinity-pool.jpg?w=300&h=300&s=1",
        rating: 5
    },

    {
        id:9,
        name: 'Amaya Lake Dambulla',
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/08/12/39/resort-exterior.jpg?w=300&h=300&s=1",
        rating: 4
    },

    {
        id:10,
        name: 'Hotel Seegiriya',
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ac/9f/b4/hotel-sigiriya.jpg?w=300&h=-1&s=1",
        rating: 5
    },

    {
        id:11,
        name: 'Buckingham Place',
        image: "https://cdn.boutiquehotel.me/file/hotcdn/hotel/cover-small/316008_1625497730.jpg",
        rating: 4
    },

    {
        id:12,
        name: 'Ridee Villa',
        image: 'https://cdn.boutiquehotel.me/file/hotcdn/hotel/cover-small/339699_1669138673.jpg',
        rating: 5
    },

    {
        id:13,
        name: 'Aditya Botique hotel',
        image: 'https://cdn.boutiquehotel.me/file/hotcdn/hotel/cover/301401_1516798015.jpg',
        rating: 4
    },

    {
        id:14,
        name: 'Lagoon Gate',
        image: "https://cdn.boutiquehotel.me/file/hotcdn/hotel/cover-small/7905304_1692160261.jpg",
        rating: 3
    },

    {
        id:15,
        name: 'Jims Farm Villas',
        image: "https://cdn.boutiquehotel.me/file/hotcdn/hotel/cover-small/362124_1525123324.jpg",
        rating: 1
    },

    {
        id:16,
        name: 'Matara',
        image: "https://www.tripbibo.com/blog/wp-content/uploads/2021/06/dambulla-cave-temple_srilanka-1024x591.jpg",
        rating: 2
    },

    {
        id:17,
        name: 'Nuwara Eliya',
        image: "https://media.istockphoto.com/id/1129078125/photo/the-girl-travels-by-train-to-beautiful-places-beautiful-girl-traveling-by-train-among.jpg?s=612x612&w=0&k=20&c=HCHXlPWt7QQ1rfwGrVZ3_AV37U8YVmQ_7HXYja-dOEY=",
        rating: 5
    },

    {
        id:18,
        name: 'Jaffna',
        image: "https://c.myholidays.com/blog/blog/content/images/2021/06/Trincomalee.jpg",
        rating: 4
    },

    {
        id:19,
        name: 'Polonnaruwa',
        image: "https://www.img.urlaub-sr-lanka.info/2013/05/tiwanka.gif",
        rating: 5
    },

    {
        id:20,
        name: 'Galle',
        image: "https://blog.thomascook.in/wp-content/uploads/2017/11/Untitled-design-ci-1.png",
        rating: 4
    },

    {
        id:21,
        name: 'Kandy',
        image: "https://mediaim.expedia.com/localexpert/1332366/cf98a0c2-be14-4345-8166-a89a4ed6a186.jpg?impolicy=resizecrop&rw=500&rh=280",
        rating: 5
    },

    {
        id:22,
        name: 'Sinharaja',
        image: "https://tourism.sg.gov.lk/wp-content/uploads/2020/07/sainharajaya2.jpg",
        rating: 4
    }
        
    ];


//#####################################################################################################3
//As we haven't figured out the images table correctly i have used base64 image from the table. If you need the previous gallery just uncomment the data and comment out the useeffect hook

// import { useState,useEffect } from 'react';
// import axios from "axios";
    
const Gallery = () => {


    // const [images, setImages] = useState([]);
    // let user = JSON.parse(localStorage.getItem('user')) 
    // const userId=user.userId;

    // useEffect(() => {
   
    //     const fetchImages = async () => {
    //       try {
    //         const response = await axios.get(`http://localhost:8000/api/places/user-images/${userId}/`);
    
    //         setImages(response.data.results);
    //       } catch (error) {
    //         console.error("Error fetching images:", error.message);
    //       }
    //     };
    
    //     fetchImages();
    //   }, [userId]);


    return (
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            className="gallery__item"
            src={image.image}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    );
  }

export default Gallery;