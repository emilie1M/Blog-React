import React from "react"
import "./singlePost.css"

function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          <img src="https://i.pinimg.com/originals/e4/66/04/e466048125f1cd832d848cd4a476388a.jpg" 
            alt="" 
            className="singlePostImg"
          />
          <h1 className="singlePostTitle">
              A single Post KPET 
              <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
              </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Emie</b></span>
            <span className="singlePostDate"> 1 hour ago </span>
          </div>
          <p className="singlePostDesc">Le rôle de l'informaticien
              Le métier d'informaticien peut couvrir un large champ de missions dans les domaines de l'utilisation d'outils informatiques et d'administration réseaux. Spécialisé ou polyvalent, il doit faire face aux problématiques et aux enjeux de l'entreprise en matière de nouvelles technologies.
              Qu'il s'attaque à un projet de hardware (matériel) ou de software (logiciel), il analyse les besoins de ses commanditaires afin de leur proposer les solutions du marché actuel les plus adaptées à la situation. Pour rester à la pointe, l'informaticien se tient en permanence informé des innovations dans son domaine, ce qui n'est pas une corvée puisqu'il est normalement un passionné de technologie.
              Il s'occupe de la mise en place effective d'un parc informatique avec des postes utilisateurs dédiés et gère la maintenance physique ainsi que l'installation des logiciels. Il doit s'assurer que toutes les licences sont à jour.
              L'informaticien est aussi amené à organiser une infrastructure réseau afin d'assurer la transmission des informations. Il joue alors le rôle d'administrateur et distribue les autorisations d'utilisation selon les niveaux d'habilitation des utilisateurs.
              Il forme les personnels à l'utilisation de leurs nouveaux outils, et édite un manuel afin qu'un autre technicien puisse intervenir en son absence.
          </p>
        </div>
    </div>
  )
}

export default SinglePost