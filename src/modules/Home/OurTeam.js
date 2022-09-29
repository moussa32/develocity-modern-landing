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
      <header className="t-header text-center mb-5">Our Team</header>
      {/*In medium screen */}
      <div className="d-none d-md-flex mb-5 flex-column justify-content-center align-items-center">
        <div className="circle"></div>
        <h4 className="fs-lg c-name">Marwan Bin Mohammed Al Maktoum</h4>
        <h5 className="fs-md">Owner</h5>
        <div className="mt-4">
          <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path id="Instagram" d="M11.234,16H4.766A4.772,4.772,0,0,1,0,11.234V4.766A4.772,4.772,0,0,1,4.766,0h6.467A4.772,4.772,0,0,1,16,4.766v6.467A4.772,4.772,0,0,1,11.234,16ZM4.766,1.609A3.161,3.161,0,0,0,1.609,4.766v6.467A3.16,3.16,0,0,0,4.766,14.39h6.467a3.16,3.16,0,0,0,3.157-3.157V4.766a3.16,3.16,0,0,0-3.157-3.157ZM8,12.138A4.138,4.138,0,1,1,12.138,8,4.143,4.143,0,0,1,8,12.138ZM8,5.472A2.528,2.528,0,1,0,10.528,8,2.531,2.531,0,0,0,8,5.472Zm4.146-.587a.992.992,0,1,1,.992-.991A.993.993,0,0,1,12.146,4.885Z" fill="#a9a9aa"/>
          </svg>

          <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="19.692" height="16" viewBox="0 0 19.692 16">
            <path id="Twitter" d="M19.692,1.894a8.1,8.1,0,0,1-2.32.637A4.052,4.052,0,0,0,19.148.3a8.074,8.074,0,0,1-2.566.979A4.042,4.042,0,0,0,9.592,4.039,4.085,4.085,0,0,0,9.7,4.96,11.469,11.469,0,0,1,1.372.739a4.043,4.043,0,0,0,1.25,5.392A4.007,4.007,0,0,1,.792,5.627v.051a4.041,4.041,0,0,0,3.24,3.96,4.034,4.034,0,0,1-1.065.142,3.974,3.974,0,0,1-.76-.073,4.046,4.046,0,0,0,3.774,2.806A8.116,8.116,0,0,1,.964,14.241,8.143,8.143,0,0,1,0,14.185,11.433,11.433,0,0,0,6.193,16,11.415,11.415,0,0,0,17.688,4.508c0-.176,0-.349-.012-.522a8.211,8.211,0,0,0,2.016-2.09Z" fill="#a9a9aa"/>
          </svg>

          <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path id="Linkedin" d="M12.688,16V10.8c0-1.242-.019-2.836-1.721-2.836-1.727,0-1.986,1.353-1.986,2.743V16H5.669V5.313H8.839V6.777h.043a3.483,3.483,0,0,1,3.139-1.723c3.356,0,3.979,2.211,3.979,5.09V16ZM3.577,16H.259V5.313H3.577V16h0ZM5.662,5.313h.006ZM0,1.928A1.924,1.924,0,1,1,1.924,3.855,1.928,1.928,0,0,1,0,1.928Z" fill="#a9a9aa"/>
          </svg>
        </div>
      </div>

      <div className="container d-flex flex-wrap justify-content-around gap-4">
         {/*In Mobile Screen */}
      <div className="d-flex d-md-none justify-content-around w-100 align-items-center">
        <div className="circle"></div>
        <div className="d-flex flex-column w-50">
            <h4 className="c-name">Marwan Bin Mohammed Al Maktoum</h4>
            <h5 className="fs-md">Owner</h5>
            <div className="mt-4">
              <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path id="Instagram" d="M11.234,16H4.766A4.772,4.772,0,0,1,0,11.234V4.766A4.772,4.772,0,0,1,4.766,0h6.467A4.772,4.772,0,0,1,16,4.766v6.467A4.772,4.772,0,0,1,11.234,16ZM4.766,1.609A3.161,3.161,0,0,0,1.609,4.766v6.467A3.16,3.16,0,0,0,4.766,14.39h6.467a3.16,3.16,0,0,0,3.157-3.157V4.766a3.16,3.16,0,0,0-3.157-3.157ZM8,12.138A4.138,4.138,0,1,1,12.138,8,4.143,4.143,0,0,1,8,12.138ZM8,5.472A2.528,2.528,0,1,0,10.528,8,2.531,2.531,0,0,0,8,5.472Zm4.146-.587a.992.992,0,1,1,.992-.991A.993.993,0,0,1,12.146,4.885Z" fill="#a9a9aa"/>
              </svg>

              <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="19.692" height="16" viewBox="0 0 19.692 16">
                <path id="Twitter" d="M19.692,1.894a8.1,8.1,0,0,1-2.32.637A4.052,4.052,0,0,0,19.148.3a8.074,8.074,0,0,1-2.566.979A4.042,4.042,0,0,0,9.592,4.039,4.085,4.085,0,0,0,9.7,4.96,11.469,11.469,0,0,1,1.372.739a4.043,4.043,0,0,0,1.25,5.392A4.007,4.007,0,0,1,.792,5.627v.051a4.041,4.041,0,0,0,3.24,3.96,4.034,4.034,0,0,1-1.065.142,3.974,3.974,0,0,1-.76-.073,4.046,4.046,0,0,0,3.774,2.806A8.116,8.116,0,0,1,.964,14.241,8.143,8.143,0,0,1,0,14.185,11.433,11.433,0,0,0,6.193,16,11.415,11.415,0,0,0,17.688,4.508c0-.176,0-.349-.012-.522a8.211,8.211,0,0,0,2.016-2.09Z" fill="#a9a9aa"/>
              </svg>

              <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path id="Linkedin" d="M12.688,16V10.8c0-1.242-.019-2.836-1.721-2.836-1.727,0-1.986,1.353-1.986,2.743V16H5.669V5.313H8.839V6.777h.043a3.483,3.483,0,0,1,3.139-1.723c3.356,0,3.979,2.211,3.979,5.09V16ZM3.577,16H.259V5.313H3.577V16h0ZM5.662,5.313h.006ZM0,1.928A1.924,1.924,0,1,1,1.924,3.855,1.928,1.928,0,0,1,0,1.928Z" fill="#a9a9aa"/>
              </svg>
            </div>
        </div>
      </div>
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