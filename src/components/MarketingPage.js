import React, {useState, useEffect} from 'react';

const Projects = () =>{
   const [projects, setProjects] = useState([]);

   useEffect(() => {
      
     authWithAxios()
     .get(`/${userId}/projects/${id}`)
      .then()
      .catch()
      
   }, [input])

}