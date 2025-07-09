/* eslint-disable prettier/prettier */
import React from "react";
// import { useState, useEffect } from 'react';
import "../css/App.css";
import "../css/responsive.css";
import "../css/login.css";
import "animate.css";

// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//     useEffect(() => {
//   function handleResize() {
//         setWindowDimensions({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//       }
//       window.addEventListener('resize', handleResize);
//   return () => window.removeEventListener('resize', handleResize);
//     }, []);
//   return windowDimensions;
//   }

export const Login = () => {

  // const { width } = useWindowDimensions();

  // console.log('Window Dimensions');
  // console.log(width);
  // console.log(height);

  // if(width < 550){
  //   setTimeout(function() {
  //     const mixVideo = document.getElementById('mix');
  //     if(mixVideo !== null){
  //       mixVideo.play();
  //     }
  //   },6500);
    
  //   setTimeout(function() {
  //     const fryingVideo = document.getElementById('frying');
  //     if(fryingVideo !== null){
  //       fryingVideo.play();
  //     }
  //   },37000);
  // }

  // if(width > 549 && width < 760){
  //   setTimeout(function() {
  //     const engrenagensVideo = document.getElementById('engrenagens');
  //     if(engrenagensVideo !== null){
  //       engrenagensVideo.play();
  //     }
  //   },500);

  //   setTimeout(function() {
  //     const mixVideo = document.getElementById('mix');
  //     if(mixVideo !== null){
  //       mixVideo.play();
  //     }
  //   },15500);
    
  //   setTimeout(function() {
  //     const fryingVideo = document.getElementById('frying');
  //     if(fryingVideo !== null){
  //       fryingVideo.play();
  //     }
  //   },46000);
  // }

  // if(width > 759){
  //   setTimeout(function() {
  //     const engrenagensVideo = document.getElementById('engrenagens');
  //     if(engrenagensVideo !== null){
  //       engrenagensVideo.play();
  //     }
  //   },500);
  

  //   setTimeout(function() {
  //     const mixVideo = document.getElementById('mix');
  //     if(mixVideo !== null){
  //       mixVideo.play();
  //     }
  //   },15500);

  //   setTimeout(function() {
  //     const factoryVideo = document.getElementById('factory');
  //     if(factoryVideo !== null){
  //       factoryVideo.play();
  //     }
  //   },46000);

  //   setTimeout(function() {
  //     const maquinaVideo = document.getElementById('maquina');
  //     if(maquinaVideo !== null){
  //       maquinaVideo.play();
  //     }
  //   },60000);

  //   setTimeout(function() {
  //     const fryingVideo = document.getElementById('frying');
  //     if(fryingVideo !== null){
  //       fryingVideo.play();
  //     }
  //   },79000);

  //   setTimeout(function() {
  //     const deliveryGirlVideo = document.getElementById('delivery-girl');
  //     if(deliveryGirlVideo !== null){
  //       deliveryGirlVideo.play();
  //     }
  //   },102000);
  // }
  
  return (
    <div>
      <div className="background-video">
        <video autoPlay muted loop>
          <source id="background-video" src="./POAPP/try4.mp4" type="" alt="background-video" />
        </video>
      </div>
      <div className="vids">
        {/* 
          INSERIR PARA VISUALIZAR NA TELA
        <div className="displayinfo">
          <h1>Window Dimensions:</h1>
          <p>Width: {width}px</p>
          <p>Height: {height}px</p>
        </div> */}
        
        <div className="top">
          <div className="engdiv">
            <video id="engrenagens" muted>
              <source src="./engrenagens.mp4" type="video/mp4" alt="engrenagens" />
            </video>
          </div>
          <div className="engphotodiv">
            <img id="engphoto" src="./engphoto.jpg" alt="engphoto" />
          </div>
          <div className="mixdiv">
            <video id="mix" muted>
              <source src="./mix.mp4" type="video/mp4" alt="mix" />
            </video>
          </div>
          <div className="factorydiv">
            <video id="factory" muted>
              <source src="./factory.mp4" type="video/mp4" alt="factory" />
            </video>
          </div>
        </div>
        <div className="under">
          <div className="machine">
            <video id="maquina" muted>
              <source src="./maquina.mp4" type="video/mp4" alt="maquina" />
            </video>
          </div>
          <div>
            <div className="fryer">
              <div className="title-div">
                <h1 id="titulo" className="animate__animated animate__zoomInDown">Simulador De Producao</h1>
                <img id="til" className="animate__animated animate__zoomInDown" src="./til.png" alt="til" />
                <img id="cedilha" className="animate__animated animate__zoomInDown" src="./cedilha.png" alt="cedilha" />
              </div>
              <div className="fryerdiv">
                <video id="frying" muted>
                  <source
                    src="./frying.mp4"
                    type="video/mp4"
                    alt="frying"
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="delivery">
            <video id="delivery-girl" muted>
              <source src="./delivery.mp4" type="video/mp4" alt="" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};