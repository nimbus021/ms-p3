import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Desserts() {
  const [desserts, setDesserts] = useState([]);


  useEffect(() => {
      getDesserts();
  },[]);

  const getDesserts =async () => {
      const check = localStorage.getItem('desserts');

      if(check){
          setDesserts(JSON.parse(check));
      }else{
          const api = await fetch (
              `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=desserts`
              );
              const data = await api.json();
              localStorage.setItem('desserts', JSON.stringify(data.recipes));
              setDesserts(data.recipes)
              console.log(data.recipes)
              
      };
      

  }

  return (
    <div>
    <Wrapper>
           <h3>Dessert Recommendations</h3>
            <Splide options={{
               perPage: 3,
               arrows: false,
               pagination: false,
               drag: 'free',
               gap: '7rem',
               }}>
               {desserts.map((recipe) => {
               return(
                   <SplideSlide key={recipe.id}>
                        <Card>
                       <p> {recipe.title} </p>
                       <img src= {recipe.image} alt={recipe.title} />
                   </Card>
                   </SplideSlide>
               );
               
           })}
           </Splide>
        </Wrapper>
</div>
    
  )
}
const Wrapper = styled.div`
    margin:4rem 0rem;
    `

const Card = styled.div `
    min height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
}
    `
export default Desserts