import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App(){
const Free = {
  type:"Free",
  head:"$0",

  price:{
    value:"✅Single User",
    style:"abled"
  },
  storage:{
    value:"✅50",
    style:"abled",
  },
  access:{
   value: "✅Unlimited Public Projects",
   style:"abled"
  },
  l1:{
    value:"✅Community Access",
    style:"abled"
  },
  l2:{
    value:"❌Unlimited Private projects",
    style:"disabled"
  },
  l3:{
    value:"❌Dedicated Phone support",
    style:"disabled"
  },
  l4:{
    value:"❌Free Subdomain",
    style:"disabled"
  },
  l5:{
    value:"❌Monthly Status Report",
    style:"disabled"
  }
}

const Plus = {
  type:"Plus",
  head:"$9",
  price:{
    value:"✅Single User",
    style:"abled"
  },
  storage:{
    value:"✅50",
    style:"abled",
  },
  access:{
   value: "✅Unlimited Public Projects",
   style:"abled"
  },
  l1:{
    value:"✅Community Access",
    style:"abled"
  },
  l2:{
    value:"✅Unlimited Private projects",
    style:"abled"
  },
  l3:{
    value:"✅Dedicated Phone support",
    style:"abled"
  },
  l4:{
    value:"✅Free Subdomain",
    style:"abled"
  },
  l5:{
    value:"❌Monthly Status Report",
    style:"disabled" 
}
}
const Pro = {
  type:"Pro",
  head:"$49",
  price:{
    value:"✅Single User",
    style:"abled"
  },
  storage:{
    value:"✅50",
    style:"abled",
  },
  access:{
   value: "✅Unlimited Public Projects",
   style:"abled"
  },
  l1:{
    value:"✅Community Access",
    style:"abled"
  },
  l2:{
    value:"✅Unlimited Private projects",
    style:"abled"
  },
  l3:{
    value:"✅Dedicated Phone support",
    style:"abled"
  },
  l4:{
    value:"✅Free Subdomain",
    style:"abled"
  },
  l5:{
    value:"✅Monthly Status Report",
    style:"abled" 
}
}
 return(
  <>
  <PriceCard model={Free}/>
  <PriceCard model={Plus}/>
  <PriceCard model={Pro}/>
  </>
 )

}

export default App

function PriceCard({model}){
  return(
    <div className="price-card">
      <form className='price-head'>
      <p className='type'>{model.type}</p>
      <p className='head'>{model.head}/Monthly</p>
      </form>
      <p className={model.price.style}>{model.price.value}</p>
      <p className={model.storage.style}>{model.storage.value}GB Storage</p>
      <p className={model.access.style}>{model.access.value}</p>
      <p className={model.l1.style}>{model.l1.value}</p>
      <p className={model.l2.style}>{model.l2.value}</p>
      <p className={model.l3.style}>{model.l3.value}</p>
      <p className={model.l4.style}>{model.l4.value}</p>
      <p className={model.l5.style}>{model.l5.value}</p>
      
      <button className='Buy'>Buy</button>
    </div>
  )
}


