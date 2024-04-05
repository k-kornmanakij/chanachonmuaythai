import React from 'react'
import { Cards } from '../Components/card/Cards'

const Classes = () => {
  return (
    <div className="classes">
      <div className="banner">
        <h1>Classes</h1>
        <h2>Welcome to our classes</h2>
        <p>Pure Passion, Pure Muay Thai</p>
      </div>
      
      <div className="classCard">
        <Cards images="https://anthonyjoshua.com/cdn/shop/articles/AJ_Fight_Insta_1.png?v=1662478898" title="Class1" type="Type1" description="Description" />
        <Cards images="https://static.displate.com/280x392/displate/2023-04-15/e011080285fb87493196d6681a781252_209eccc342669b4170760f107d796353.jpg" title="Class2" type="Type2" description="Description" />
        <Cards images="https://www.xtcfitness.ca/cdn/shop/files/hayabusa-boxing-gloves-captain-america-12oz-boxing-gloves-mbg-ca-12-804579899924-hayabusa-42253631095091.jpg?v=1694557181" title="Class3" type="Type3" description="Description" />
        <Cards images="https://m.media-amazon.com/images/I/51YnbVqn4rL._AC_SL1200_.jpg" title="Class4" type="Type4" description="Description" />
        <Cards images="https://images.ctfassets.net/ipjoepkmtnha/3jARnoyec8OTNBoJXOVo7u/272850864b851ec4e5ba28eae6b52cb8/jump-rope-feature-fluid-motion.jpg" title="Class5" type="Type5" description="Description" />
        <Cards images="https://images.squarespace-cdn.com/content/v1/5d9eb5fdff34916b5d52b429/b59739e3-5980-46d1-9aee-464f4ee05d7e/_MG_3447+%282%29.jpg" title="Pad Class" type="Type6" description="Description" />
        <Cards images="https://revmma.com/wp-content/uploads/2021/10/teen-boxing-program-toronto-117.jpg" title="Teen Class" type="Type7" description="Description" />
        <Cards images="https://helloartsy.com/wp-content/uploads/kids/sports/draw-boxing-gloves/draw-boxing-gloves-step-6.jpg" title="Class8" type="Type8" description="Description" />
      </div>
    </div>
    
  )
}

export default Classes