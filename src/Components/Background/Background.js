import React from 'react';
import image from "../../assets/images/image1.jpg";
import './Background.scss';



const Background = () => {
    return (

        <div className='container'>
        <div 
            style={{ backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", 
            backgroundSize:"cover", backgroundPosition: "center", height: '100vh',  position:'relative'}}>
                <div className='text-on-image'>
                    <h3> Notre projet </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui expedita quis vitae nostrum, 
                        sint animi repellendus eaque voluptate consequuntur ipsa! Iusto sapiente itaque dignissimos quasi, 
                        autem eius maxime. Cum, deserunt harum necessitatibus nobis dolores voluptatem tenetur. Nam ad, dolores autem, 
                        obcaecati accusamus ratione quisquam sed hic officia ipsa quaerat, excepturi delectus. Iste expedita architecto vitae odio natus. 
                        Asperiores commodi dicta dolore, vel sed eaque nostrum in tenetur explicabo perferendis consequuntur laborum porro esse veritatis, 
                        sunt expedita, hic qui! Laborum quis, repellendus sint architecto officia adipisci 
                        Lorem i lorem1000 psum dolor sit amet consectetur adipisicing elit. Ipsum libero minima laborum non magni aut recusandae nobis expedita voluptatum nostrum accusantium. lorem1000
                        
                    
                        </p>
                </div>
                
                
        </div>
        </div>
        
    );
};

export default Background;