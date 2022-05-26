import React from "react";
import "./post.css"

function Post() {
  return (
    <div className="post">
      <img 
        className="postImg"
        src="https://th.bing.com/th/id/OIP.jefysJTuWBl-K67GjaGp6AHaEc?pid=ImgDet&rs=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
                Ici un post du domaine de la data par exemple.
        </span>
        <hr />
        <span className="postDate">2 hours ago</span>
      </div>
        <p className="postDesc">
        En termes généraux, la science des données est l’extraction de connaissance d’ensembles de données. La science des données est un domaine interdisciplinaire qui utilise des méthodes, des processus, des algorithmes et des systèmes scientifiques pour extraire des connaissances et des idées de nombreuses données structurelles et non structurées. Elle est souvent associée aux données massives et à l'analyse des données.
        Data scientist, data miner ou data analyst ?
        Infos personnelles, images, vidéos… des milliards de données éparses circulent sur le web (les experts parlent de big data). Les exploiter est devenu hautement stratégique. Différents spécialistes ont à leur charge leur traitement : data scientist, data miner ou encore data analystes. Les frontières entre ces trois intitulés métiers sont poreuses, chaque entreprise utilisant une terminologie qui dépend de son organisation interne.
        </p>
    </div>
  );
}

export default Post