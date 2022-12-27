import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Popular() {
    const [popular, setPopular] = useState([]);


    useEffect(() => {
        getPopular();
    },[]);

    const getPopular =async () => {
        const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`)
        const data = await api.json();
        setPopular(data.recipes)
    }

  return (
    <div>
         <Wrapper>
                <h3>Popular Picks</h3>
                 <Splide options={{
                    perPage: 3}}>
                    {popular.map((recipe) => {
                    return(
                        <SplideSlide>
                             <Card>
                            <p> {recipe.title} </p>
                            <img src= {recipe.image} alt={recipe.title} />
                        </Card>
                        </SplideSlide>
                    )
                })}
                </Splide>
             </Wrapper>
        
    </div>
  );
}

const Wrapper = styled.div`
    margin:4rem 0rem`;

const Card = styled.div `
    min height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit:cover;
    }
    `

export default Popular
