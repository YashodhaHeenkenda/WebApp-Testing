import Common from '../components/Common';
import image from '../images/homepage.png';
import React from 'react';
//before login when click Home button
function Homepage()
{
    return(
        <div>
        <Common />

        <div className="container">
        <img src={image}
           alt="Logo"
           className="img-fluid"
           style={{marginTop : 100}}
          
          />
          
</div>



      </div>


    );
}

export default Homepage;