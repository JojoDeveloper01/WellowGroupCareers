"use client"


import { useEffect, useRef, useState } from 'react';

import "./searchBar.css";

const SearchBar = () => {

    const optionsAreas = ["Todas as Áreas", "Tecnologia", "Finanças", "Marketing"];
    const optionsConcelhos = ["Todos os Concelhos", "Lisboa", "Porto", "Coimbra"];

    const dropdownRef = useRef(null); // Referência ao primeiro elemento do dropdown
    const dropdownRef2 = useRef(null); // Referência ao segundo elemento do dropdown

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Áreas");

    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [selectedOption2, setSelectedOption2] = useState("Concelhos");

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        if (dropdownOpen2) {
            setDropdownOpen2(false);
        }
    };

    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
        if (dropdownOpen) {
            setDropdownOpen(false);
        }
    };

    const handleClickOutside = (event) => {
        // Verifica se o clique ocorreu fora dos dropdowns
        if (
            (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
            (dropdownRef2.current && !dropdownRef2.current.contains(event.target))
        ) {
            setDropdownOpen(false);
            setDropdownOpen2(false);
        }
    };

    useEffect(() => {
        // Adiciona event listener quando o componente é montado
        document.addEventListener("mousedown", handleClickOutside);
        // Remove event listener quando o componente é desmontado
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const [scrollPosition, setScrollPosition] = useState(0);
    const [navbarFixed, setNavbarFixed] = useState(false);
    const navbarRef = useRef(null);
    const backgroundRef = useRef(null); // Referência para o elemento background-image

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            // Adiciona uma condição para verificar se o backgroundRef.current existe
            if (backgroundRef.current) {
                const backgroundRect = backgroundRef.current.getBoundingClientRect();
                const isMobile = window.innerWidth <= 768; // Defina o limite para dispositivos móveis conforme necessário

                // Verifica se o navbar deve ser fixo quando a posição de rolagem for maior que a altura do background-image
                if (!isMobile) {
                    setNavbarFixed(currentPosition > backgroundRect.height);
                }
            }

            setScrollPosition(currentPosition);
        };


        const handleResize = () => {
            const isMobile = window.innerWidth <= 768; // Defina o limite para dispositivos móveis conforme necessário

            // Verifica se o navbar estava fixo e a tela foi redimensionada para um tamanho menor que o limite de dispositivo móvel
            if (navbarFixed && isMobile) {
                setNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize); // Adiciona ouvinte de evento para redimensionamento da janela

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize); // Remove ouvinte de evento para redimensionamento da janela
        };
    }, [navbarFixed]);

    const divRef = useRef(null);

    useEffect(() => {
        if (navbarFixed) {
            // Se a barra de navegação estiver fixa, adicione a classe ou o estilo CSS à div
            divRef.current.style.height = '101.19px';
        } else {
            // Caso contrário, remova a classe ou o estilo CSS da div
            divRef.current.style.height = '';
        }
    }, [navbarFixed]);

    return (
        <div>

            <section className="background-image" ref={backgroundRef}>
                <div className="background-settings">
                    <div className="title-background">
                        <h2>
                            Junte-se e trabalhe connosco!
                        </h2>
                        <h3>
                            Mais de 100 oportunidades de pertencer a uma das empresas mais felizes
                        </h3>
                    </div>
                </div>
            </section>

            <div ref={divRef}></div>

            <div className={`navbar ${navbarFixed ? 'fixed' : ''}`} ref={navbarRef}>
                <div className="searchBar">
                    <section style={{ width: '100%', maxWidth: '1240px' }} className="max-pad mx-auto">
                        <div className="flex justify-between md:flex-row flex-col md:items-center">

                            <input
                                type="text"
                                placeholder="Pesquisar ofertas"
                                className="max w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mb-2 md:mb-0 md:mr-6"
                                style={{ height: '52px' }} />


                            <div ref={dropdownRef} className="max w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mb-2 md:mb-0 md:mr-2 custom-select selected-option" onClick={toggleDropdown}>

                                {selectedOption}

                                {dropdownOpen && (
                                    <div className="options">
                                        {optionsAreas.map((option, index) => (
                                            <div key={index} className="option" onClick={() => setSelectedOption(option)}>
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div ref={dropdownRef2} className="max w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mb-2 md:mb-0 md:mr-6 custom-select selected-option" onClick={toggleDropdown2}>

                                {selectedOption2}

                                {dropdownOpen2 && (
                                    <div className="options">
                                        {optionsConcelhos.map((option, index) => (
                                            <div key={index} className="option" onClick={() => setSelectedOption2(option)}>
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button className="max w-full px-4 py-2 bg-purple-600 text-white rounded-md focus:outline-none"
                                style={{ height: '52px' }}>
                                Pesquisar
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;