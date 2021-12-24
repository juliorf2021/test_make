import React from "react";

import "./About.css"

const About = () => {
  return (
    <React.Fragment>
      <main>
        <h2>Datos</h2>
        <div><img src="https://scontent.faqp3-1.fna.fbcdn.net/v/t1.18169-9/28056834_1734834646562249_596909412361670332_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHOKDUwLpFXT5-bGGkDMPwhr99rD8UT8cuv32sPxRPxy8azaJ7AGF7WQpZKLHw-BGmLwFJa_Zy22Jf8iW3XwzN3&_nc_ohc=57x6yiXN3RoAX93coEN&_nc_ht=scontent.faqp3-1.fna&oh=00_AT-_36NwTXcJYzV6QxduAMnjJsYGRN0P00osyaRBRzlO-A&oe=61EADF60" alt="imagen"  width="200" height="200"/></div>
        <div><h4>Nombre:</h4><span>Julio Cesar Choquehuanca Araca</span></div>
        <div><h4>Descripcion:</h4><span>Desarrollador de Aplicaciones moviles en S.O. Android - IOS nativo</span></div>
       
        <div><h4>Lista de lo Aprendido:</h4><span><ul><li>React</li><li>GitHub</li><li>Habilidades Blandas</li></ul></span></div>
        <div><h4>Correo:</h4><span>julio.vitplanet@gmail.com</span></div>
        <div><h4>Link Github:</h4><span>Julio Cesar Choquehuanca Araca</span></div>

      </main>
    </React.Fragment>
  );
};

export default About;
