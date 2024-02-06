"use client"
import Carousel from "@/components/Carousel/carousel";
import Form from "@/components/module/formulario";
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './mais-info.css';

export default function Mais_Info() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const images = [
    "https://viral.sapo.pt/wp-content/uploads/2023/03/limpeza-produto-2048x1371.jpg",
    "https://www.rhspremium.com/wp-content/uploads/2020/08/2020-07-26-limpeza-domestica-e-profissional-1.jpg",
    "https://biossen.com.br/blog/wp-content/uploads/2023/04/27-03-750x410.jpeg",
    "https://vilafrancalimpezas.pt/images/limpezas-domesticas-vila-franca-de-xira.jpg"
  ];

  return (
    <section>
      <img
        src="./Wellow_Site_Background.avif"
        alt="Wellow Background"
        className='h-[32vh] w-full object-cover'
      />
      <div className="flex items-start justify-center gap-[15vh] translate-y-[-15%] max-[1199px]:items-center max-[1199px]:translate-y-[-12%] max-[1199px]:flex-col max-[500px]:translate-y-[-26vh]">
        <div className="paper bg-white flex flex-col gap-[40px] w-[50vw] max-[1199px]:w-[80vw] max-[809px]:w-[100vw] p-[3rem] justify-center items-start">
          <h1 className="tituloPaper">
            Titulo do trabalho
          </h1>
          <div className="w-full">
            <p className="">Cidade | Estado Trabalho | Empresa de Trabalho</p>
            <div className="a2a_kit a2a_kit_size_32 a2a_default_style mt-4">
              <a className="a2a_button_facebook" target="_blank" rel="nofollow noopener" href="/#facebook"><span className="a2a_svg a2a_s__default a2a_s_facebook"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.628 3.875 10.35 9.101 11.647v-7.98h-2.474V16H13.1v-1.58c0-4.085 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.325c-.283-.03-.775-.045-1.386-.045-1.967 0-2.728.745-2.728 2.683V16h3.92l-.673 3.667h-3.247v8.245C23.395 27.195 28 22.135 28 16Z"></path></svg></span><span className="a2a_label">Facebook</span></a>
              <a className="a2a_button_twitter" target="_blank" rel="nofollow noopener" href="/#twitter"><span className="a2a_svg a2a_s__default a2a_s_twitter"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M28 8.557a9.913 9.913 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.738 9.738 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.942 4.942 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a4.968 4.968 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174-.318 0-.626-.03-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.893 9.893 0 0 1-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.455-2.55z"></path></svg></span><span className="a2a_label">Twitter</span></a>
              <a className="a2a_button_linkedin" target="_blank" rel="nofollow noopener" href="/#linkedin"><span className="a2a_svg a2a_s__default a2a_s_linkedin"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" d="M6.227 12.61h4.19v13.48h-4.19V12.61zm2.095-6.7a2.43 2.43 0 0 1 0 4.86c-1.344 0-2.428-1.09-2.428-2.43s1.084-2.43 2.428-2.43m4.72 6.7h4.02v1.84h.058c.56-1.058 1.927-2.176 3.965-2.176 4.238 0 5.02 2.792 5.02 6.42v7.395h-4.183v-6.56c0-1.564-.03-3.574-2.178-3.574-2.18 0-2.514 1.7-2.514 3.46v6.668h-4.187V12.61z"></path></svg></span><span className="a2a_label">LinkedIn</span></a>
              <a className="a2a_button_whatsapp" target="_blank" rel="nofollow noopener" href="/#whatsapp"><span className="a2a_svg a2a_s__default a2a_s_whatsapp"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#FFF" fill-rule="evenodd" d="M16.21 4.41C9.973 4.41 4.917 9.465 4.917 15.7c0 2.134.592 4.13 1.62 5.832L4.5 27.59l6.25-2.002a11.241 11.241 0 0 0 5.46 1.404c6.234 0 11.29-5.055 11.29-11.29 0-6.237-5.056-11.292-11.29-11.292zm0 20.69c-1.91 0-3.69-.57-5.173-1.553l-3.61 1.156 1.173-3.49a9.345 9.345 0 0 1-1.79-5.512c0-5.18 4.217-9.4 9.4-9.4 5.183 0 9.397 4.22 9.397 9.4 0 5.188-4.214 9.4-9.398 9.4zm5.293-6.832c-.284-.155-1.673-.906-1.934-1.012-.265-.106-.455-.16-.658.12s-.78.91-.954 1.096c-.176.186-.345.203-.628.048-.282-.154-1.2-.494-2.264-1.517-.83-.795-1.373-1.76-1.53-2.055-.158-.295 0-.445.15-.584.134-.124.3-.326.45-.488.15-.163.203-.28.306-.47.104-.19.06-.36-.005-.506-.066-.147-.59-1.587-.81-2.173-.218-.586-.46-.498-.63-.505-.168-.007-.358-.038-.55-.045-.19-.007-.51.054-.78.332-.277.274-1.05.943-1.1 2.362-.055 1.418.926 2.826 1.064 3.023.137.2 1.874 3.272 4.76 4.537 2.888 1.264 2.9.878 3.43.85.53-.027 1.734-.633 2-1.297.266-.664.287-1.24.22-1.363-.07-.123-.26-.203-.54-.357z" clip-rule="evenodd"></path></svg></span><span className="a2a_label">WhatsApp</span></a>
              <a className="a2a_button_email" target="_blank" rel="nofollow noopener" href="/#email"><span className="a2a_svg a2a_s__default a2a_s_email"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#fff" d="M27 21.775v-9.9s-10.01 6.985-10.982 7.348C15.058 18.878 5 11.875 5 11.875v9.9c0 1.375.293 1.65 1.65 1.65h18.7c1.393 0 1.65-.242 1.65-1.65Zm-.017-11.841c0-1.002-.291-1.359-1.633-1.359H6.65c-1.38 0-1.65.429-1.65 1.43l.016.154s9.939 6.842 11 7.216C17.14 16.941 27 10.005 27 10.005l-.017-.072Z"></path></svg></span><span className="a2a_label">Email</span></a></div>
          </div>
          <div className="w-full">
            <h2>Descrição</h2>
            <p>Aqui Descrição - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma</p>
          </div>
          <div className="w-full">
            <h2>Requisitos</h2>
            <ul className='list-disc ml-[1.5rem]'>
              <li>Requisito info info info info info info info info</li>
              <li>Requisito info info info info info info info info</li>
              <li>Requisito info info info info info info info info</li>
              <li>Requisito info info info info info info info info</li>
              <li>Requisito info info info info info info info info</li>
              <li>Requisito info info info info info info info info</li>
              <li>Requisito info info info info info info info info</li>
              <li>Requisito info info info info info info info info</li>
              <li>Requisito info info info info info info info info</li>
              <li>Requisito info info info info info info info info</li>
              <li>Requisito info info info info info info info info</li>
            </ul>
          </div>
          <div className="w-full">
            <h2>Extra Info</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <button onClick={handleButtonClick} className='text-white'>
            Candidatar-se
          </button>
          {showForm &&
            ReactDOM.createPortal(
              <Form isOpen={showForm} onClose={handleCloseForm} />,
              document.body
            )}
        </div>
        <div className="sliderImg max-[507px]-w-screen">
          <Carousel images={images} />
        </div>
      </div>
    </section>
  )
}
