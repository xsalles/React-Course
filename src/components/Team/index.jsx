import { Team } from "./pattern/composition";

const TeamUsers = [
 {
    image: "https://static.portaldaindustria.com.br/media/uploads/logotipos/logo-senai.png",
    nome: "Senai",
    role: "Escola",
    description: "Melhor instituição de ensino",
    socialMedias: {
        linkedin:"https://www.linkedin.com/company/senai-nacional/?originalSubdomain=br",
        x:"https://x.com/SENAInacional?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        dribble:"https://dribbble.com/"
        
    }
 }
]




export default function TeamComposition () {
    return (
        <div className="team-container">
            <Team.Section />
            <div className="team-content wrapper">

          {
            TeamUsers.map((user,key) => {
                return (
                    <Team.Content 
               image={user.image}
               nome={user.name}
               role={user.role}
               description={user.description}
               linkedin={user.linkedin}
               x={user.x}
               dribble={user.dribble}
                    />

                )
            })

          }



            <Team.Content 
               image="https://static.portaldaindustria.com.br/media/uploads/logotipos/logo-senai.png"
               nome="Senai"
               role="Escola"
               description="Melhor instituição de ensino"
               linkedin="https://www.linkedin.com/company/senai-nacional/?originalSubdomain=br"
               x="https://x.com/SENAInacional?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
               dribble="https://dribbble.com/"
            />

            </div>
            <Team.Main />
            
            
        </div>
    )
}