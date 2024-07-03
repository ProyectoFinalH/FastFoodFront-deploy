import Sidebar from "./sidebar/sidebar"
import logo from "../../images/logo.png"
import "./company.css"


import { getAllRestaurants, Create_Lista_Order_Company} from "../../Redux/actions"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";



function Company() {
  const Restaurant = useSelector((state)=> state.Detail_Empresa)
  
  console.log("Datos de todos los restaurantes:", Restaurant);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllRestaurants());
    dispatch(Create_Lista_Order_Company());
  }, [dispatch]);
  
  const restaurant = Restaurant;

useEffect(()=>{
  dispatch(getAllRestaurants())
  dispatch(Create_Lista_Order_Company())
},[dispatch])



  return (
    <div className="companyContainer">
       <div className="left-section">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        
      </div>

<div>
  <Sidebar restaurant={restaurant}/>

</div>
    </div>
  )
}

export default Company