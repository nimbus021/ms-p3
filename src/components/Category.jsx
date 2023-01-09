import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import{GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
    return(
            <div>
        <div>
          <div>
            <FaPizzaSlice />
            <h4>Pepperoni</h4>
            </div>  
        </div>
        <div>
        <div>
          <FaHamburger />
          <h4>American</h4>
          </div>  
      </div>
      <div>
      <div>
        <GiNoodles />
        <h4>Korean</h4>
        </div>  
    </div>
    <div>
    <div>
      <GiChopsticks />
      <h4>Asian</h4>
      </div>  
  </div>
  </div>
    )
}



export default Category