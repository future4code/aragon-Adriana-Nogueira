import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton'; 
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQF4pYmNYfTOtA/profile-displayphoto-shrink_200_200/0/1650388743861?e=1655942400&v=beta&t=cQeoU56cba5viCdRav7XlPfeokXng-AkYTg1_KoTAWQ" 
          nome="Adriana" 
          descricao="Sou estudante da Labenu no curso para Desenvolvedor Web Full Stack, apaixonada com a área Tech!

          Cursei faculdade de Admnistraçao de empresas, tenho mais de 10 anos na area, estou
          em transição de carreira querendo aprender do zero como e desenvolver.
          Conhecimento Javascript Css.
          Power bi."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />


        <CardPequeno 
          imagem="https://super.abril.com.br/wp-content/uploads/2018/07/istock-510576580.jpg" 
          nome="Email:adrianabno@hotmail.com" 
        />
         <CardPequeno 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH7ejIzxjuGKCwZ0ZMcWYrX9pJtSBUhCRwwbXlJhMD_KRTOUtcKvCZDWvWjwam4t2jy_o&usqp=CAU" 
          nome="Endereço: Rua Ficticia n0 SP" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Loggi" 
          descricao="Desenvolvedor Web FullStack" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
