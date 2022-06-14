import React from 'react';
import background from "../../assets/images/principale.png";
import Footer from '../Footer/Footer';
import './Background.scss';



const Background = () => {
    return (


        <div 
            style={{ backgroundImage: `url(${background})`, backgroundRepeat:"no-repeat", 
            backgroundSize:"100%", backgroundPosition: "center", height: '100vh', position:'relative'}}>
                <div className='text-on-image'>
                    <h3> Notre projet </h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui expedita quis vitae nostrum, 
                        sint animi repellendus eaque voluptate consequuntur ipsa! Iusto sapiente itaque dignissimos quasi, 
                        autem eius maxime. Cum, deserunt harum necessitatibus nobis dolores voluptatem tenetur. Nam ad, dolores autem, 
                        obcaecati accusamus ratione quisquam sed hic officia ipsa quaerat, excepturi delectus. Iste expedita architecto vitae odio natus. 
                        Asperiores commodi dicta dolore, vel sed eaque nostrum in tenetur explicabo perferendis consequuntur laborum porro esse veritatis, 
                        sunt expedita, hic qui! Laborum quis, repellendus sint architecto officia adipisci 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum libero minima laborum non magni aut recusandae nobis expedita voluptatum nostrum accusantium, 
                        doloribus fugiat tempora aperiam laudantium quaerat velit. Ratione, quaerat magni,
                         obcaecati minima fugit porro quisquam assumenda harum nobis nulla numquam corporis quo repellat blanditiis ea! Quam voluptatem a voluptates?
                        debitis doloremque eos magnam consequatur nisi neque explicabo praesentium delectus reiciendis alias, aliquid omnis vitae?</p>
                </div>
                <div className='footer'>
                    <Footer/>
                </div>
        </div>
        
        
    );
};

export default Background;