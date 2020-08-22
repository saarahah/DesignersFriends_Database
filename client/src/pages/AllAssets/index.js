import React, { useEffect, useState } from "react";
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import imagesAPI from "../../utils/imagesAPI"
import Card from "../../components/Card/index"

export const AllAssets = () => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const showLoginBtn = () => {
        if (!isAuthenticated) {
            return (
                <Button color="black" animated secondary>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            )
        }
    }

    const [images, setImages] = useState([])
const [image, setImage] = useState ("")

useEffect(() => {
  getThems();
}, []);

function getThems(){
  imagesAPI.getPictures()
  .then(res => {
    setImages(res.data)
    console.log(res.data)
  }
    ).catch(err => console.log(err))
}




    return (
        <div>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> All Assets</Header>
                <p style={{ marginBottom: "5px" }}>This is a Boiler Plate MERN application with authentication using JSON Web Tokens.</p>
                <p style={{ margin: "5px 0 25px" }}>This APP was design to be used as a starting point for any developer looking to integrate authentication with a MERN application.</p>
                <Link to="/login">
                    {showLoginBtn()}
                </Link>
            </Message>
            <div className="card-deck row">
{images.map(img => (
<Card 
  image={img}
/>
))}
</div>



        </div>
    )
};

export default AllAssets;