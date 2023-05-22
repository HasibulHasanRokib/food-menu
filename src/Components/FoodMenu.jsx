
import { useState } from "react"
import Menu from "./Menu"
import Item from "./Item"
import Navbar from "./Navbar"

const FoodMenu = () => {
 
 const[foods,setFoods]=useState(Menu)
 
 const menuLists = [...new Set(Menu.map((food)=>{
        return food.category;
    })),"All"
 ]
 console.log(menuLists)

 const[title,setTitle]=useState(menuLists) 



 const handleItems=(category)=>{
    if(category==="All"){
        setFoods(Menu)
        return
    }
 
    const foodMenu=Menu.filter((food)=>{
        return food.category===category;
    })
    setFoods(foodMenu);
 }
 
    return (
    <>
   <Navbar handleItems={handleItems} title={title}/>
    <Item foods={foods}/>
   
    </>
  )
}

export default FoodMenu
