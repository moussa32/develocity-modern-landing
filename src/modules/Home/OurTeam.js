import "../../styles/OurTeam.scss"
import TeamCard from "./TeamCard"

const OurTeam = () => {
  const data =[{
    name:"Mahdi Ajaj",
    title:"CEO",
    instagram:true,
    twitter:true,
    linkedin: true,
    youtube:true,
  },
  {
    name:"Abdulaziz Bin Fahad",
    title:"CTO",
    instagram:true,
    snapchat:true,
    linkedin: true,
  },
  {
    name:"Mamuka Kavtelishvili",
    title:"CMO",
    instagram:true,
    icon:true,
    linkedin: true,
  }
]

  return (
    <section className="container my-5">
      <header className="t-header fs-2xl text-center mb-5">Our Team</header>
      <div className="container d-flex flex-wrap justify-content-around">
       {data?.map((d,index)=>{
        return <TeamCard 
         key={index}
         title={d.title}
         name={d.name}
         instagram={d.instagram}
         twitter={d.twitter}
         linkedin={d.linkedin}
         youtube={d.youtube}
         snapchat={d.snapchat}
         icon={d.icon}
         />
       })}   
      </div>
    </section>
  )
}

export default OurTeam