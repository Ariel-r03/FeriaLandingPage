import { useState } from "react";
import "./App.css";
import NavBarPage from "./Components/NavBarPage.jsx";
import NavMenu from "./Components/NavMenu.jsx";
import {cajaBlanca} from './cons.js'
import { CajaNegra } from "./assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function App() {
  return (
    <main className="min-h-[100vh]">
      <div>
        <NavBarPage />
      </div>
      <div className="w-[100%] flex flex-row CustomBg">
        <div className="w-[100%]">
          <NavMenu />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-black text-[30px] mb-5 self-center my-5">
          Caja Negra
        </h3>
        <div className="flex flex-row items-center justify-around">
          <p className="text-[#002261] bg-white w-[30%] rounded-2xl p-5 m-5 flex flex-col shadow-lg shadow-slate-500">
            La noción de la "caja negra" en diversos contextos reviste una
            importancia significativa, ya que aborda la comprensión y evaluación
            de sistemas, procesos y fenómenos complejos. En el ámbito
            tecnológico, como en la inteligencia artificial, la existencia de
            cajas negras, o algoritmos cuyos mecanismos internos no son
            completamente transparentes, plantea desafíos éticos y de rendición
            de cuentas. La comprensión de cómo funcionan estas cajas negras es
            crucial para asegurar la equidad, evitar sesgos indeseados y
            garantizar la toma de decisiones informadas. Además, en
            investigaciones científicas o experimentos complejos, la noción de
            caja negra destaca la importancia de entender no solo los resultados
            observados sino también los procesos subyacentes. En última
            instancia, la transparencia en sistemas y procesos, así como la
            capacidad de abrir la "caja negra", son fundamentales para fomentar
            la confianza, promover el avance científico y tecnológico, y
            garantizar prácticas justas y éticas en diversos campos.
          </p>
          <img className="w-[600px]" src={CajaNegra} alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-10 mx-5">
        <h3 className="font-black text-[30px] mt-[4rem] self-center">
          Caja Blanca
        </h3>
        <div className="mt-[4rem] w-[100%] flex justify-center items-center">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
           {
          cajaBlanca.map((cb)=>(
            <SwiperSlide className="mb-[3rem] flex justify-center"><img  src={cb.image} alt="" /></SwiperSlide>
          ))
        }
          </Swiper>
        </div>
      </div>
    </main>
  );
}

export default App;
