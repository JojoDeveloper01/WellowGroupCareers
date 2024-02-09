
"use client"
import './formulario.css';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';

const Form = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const totalPages = 3; // Defina o número total de páginas/secções

  const formVariants = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 28,
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          className="bg-[#00000057] translate-y-0 translate-x-0 fade flex items-center justify-center w-screen h-screen fixed inset-0 z-[2] "
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            key="unique-key"
            onClick={(e) => e.stopPropagation()}
            className="modal-body"
            variants={formVariants}
          >

              {currentPage === 1 && (
                <div id="reservar">
                  {/* Conteúdo da primeira página/secção (Dados Pessoais) */}

                  <div className='barNext-level'>
                    <div className='barLevel'>
                      <div className='round level_here'>1</div>
                      <h2>Dados Pessoais</h2>
                      <div className='bar'></div>
                    </div>

                    <div className='barLevel'>
                      <div className='round'>2</div>
                      <h2>Qualificações</h2>
                      <div className='bar'></div>
                    </div>

                    <div className='barLevel'>
                      <div className='round'>3</div>
                    </div>
                  </div>

                  <section className='write-section'>
                    <h2>Nome<span className='req'> *</span></h2>
                    <input></input>
                  </section>

                  <section className='write-section'>
                    <h2>Apelido</h2>
                    <input></input>
                  </section>

                  <section className='write-section'>
                    <h2>Contacto</h2>
                    <input></input>
                  </section>

                  <section className='write-section'>
                    <h2>Email<span className='req'> *</span></h2>
                    <input></input>
                  </section>

                  <section className='write-section'>
                    <h2>Linkedin</h2>
                    <input></input>
                  </section>
                </div>
              )}
              {currentPage === 2 && (
                <div id="reservar">
                  {/* Conteúdo da segunda página/secção (Qualificações) */}

                  <div className='barNext-level'>
                    <div className='barLevel'>
                      <div className='round'>1</div>
                      <div className='bar min'></div>
                    </div>

                    <div className='barLevel'>
                      <div className='round level_here'>2</div>
                      <h2>Qualificações</h2>
                      <div className='bar min'></div>
                    </div>

                    <div className='barLevel'>
                      <div className='round'>3</div>
                      <h2>Linguagens e Mobilidade</h2>
                    </div>
                  </div>

                  <section className='write-section title-section'>
                    <h2>Formação Acadêmica</h2>
                  </section>


                  <section className='write-section'>
                    <h2>Nome Instituição</h2>
                    <input></input>
                  </section>

                  <section className='write-section'>
                    <h2>Designação de Curso</h2>
                    <input></input>
                  </section>


                  <section className='write-section title-section'>
                    <h2>Experiência Professional Relevante</h2>
                  </section>


                  <section className='write-section'>
                    <h2>Nome Empresa</h2>
                    <input></input>
                  </section>

                  <section className='write-section'>
                    <h2>Função</h2>
                    <input></input>
                  </section>

                </div>
              )}
              {currentPage === 3 && (
                <div id="reservar">
                  {/* Conteúdo da terceira página/secção (Linguagem e Mobilidade) */}

                  <div className='barNext-level'>
                    <div className='barLevel'>
                      <div className='round'>1</div>
                      <div className='bar min'></div>
                    </div>

                    <div className='barLevel'>
                      <div className='round'>2</div>
                      <h2>Qualificações</h2>
                      <div className='bar min'></div>
                    </div>

                    <div className='barLevel'>
                      <div className='round level_here'>3</div>
                      <h2>Linguagens e Mobilidade</h2>
                    </div>
                  </div>

                  <section className='write-section'>
                    <h2>Nome<span className='req'> *</span></h2>
                    <input></input>
                  </section>

                  <section className='write-section'>
                    <h2>Apelido</h2>
                    <input></input>
                  </section>

                  <section className='write-section'>
                    <h2>Contacto</h2>
                    <input></input>
                  </section>

                  <section className='write-section'>
                    <h2>Email<span className='req'> *</span></h2>
                    <input></input>
                  </section>

                  <section className='write-section'>
                    <h2>Linkedin</h2>
                    <input></input>
                  </section>
                </div>
              )}

              {/* Botões de navegação entre as páginas/secções */}
              <div className="button-section flex">
                {currentPage == 1 && (
                  <div>
                    <button className="button" disabled onClick={handlePreviousPage}>Anterior</button>
                    <button className="button" onClick={handleNextPage}>Seguinte</button>
                  </div> 
                )}
                {currentPage == 2 && (
                  <div>
                    <button className="button" onClick={handlePreviousPage}>Anterior</button>
                    <button className="button" onClick={handleNextPage}>Seguinte</button>
                  </div> 
                )}
                {currentPage == 3 && (
                  <div>
                    <button className="button" onClick={handlePreviousPage}>Anterior</button>
                    <button className="button">Enviar</button>
                  </div> 
                )}

              </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Form;