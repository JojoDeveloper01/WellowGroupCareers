"use client"
import { useJobContext } from '@/app/JobContext';
import { useEffect, useRef, useState } from 'react';
import "./searchBar.css";

export default function SearchBar({ heroHeight }) {
    const { jobData, fetchJobData, searchResultsEmpty, selectedArea, setSelectedArea, selectedConcelho, setSelectedConcelho } = useJobContext();
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const dropdownRef = useRef(null);
    const dropdownRef2 = useRef(null);

    const optionsAreas = ["Todas as Áreas", "Tech", "Logistic", "Clean"];
    const optionsConcelhos = ["Todos os Concelhos", "Alcochete", "Almada", "Azambuja", "Bombarral", "Carnaxide", "Castelo Branco", "Coimbra", "Laranjeiras", "Leça de Palmeira", "Lisboa", "Montijo", "Picoas", "Rabo de Peixe", "Sete Rios", "Santarém", "Setubal", "Sintra", "Vila Real"];

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        if (dropdownOpen2) setDropdownOpen2(false);
    };

    const toggleDropdown2 = () => {
        setDropdownOpen2(!dropdownOpen2);
        if (dropdownOpen) setDropdownOpen(false);
    };

    const handleClickOutside = (event) => {
        if (
            (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
            (dropdownRef2.current && !dropdownRef2.current.contains(event.target))
        ) {
            setDropdownOpen(false);
            setDropdownOpen2(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const [isSticky, setSticky] = useState(false);
    const handleScroll = () => setSticky(window.pageYOffset > heroHeight);

    useEffect(() => {
        const shouldAddScrollListener = window.innerWidth > 768;
        if (shouldAddScrollListener) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [heroHeight]);

    /* Search */

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Chama a API usando o contexto
        fetchJobData(searchQuery);
    };

    return (
        <section>
            <div style={{
                position: isSticky ? 'fixed' : 'relative',
                top: isSticky ? `var(--height-header)` : 'auto',
                zIndex: isSticky ? '10' : '1',
            }} className={`navbar w-full`}
            >
                <div className="searchBar">
                    <div style={{ width: '100%', maxWidth: '1240px' }} className="max-pad mx-auto">
                        <form onSubmit={handleSearchSubmit} className="flex justify-between md:flex-row flex-col md:items-center">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Pesquisar ofertas"
                                className="max w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mb-2 md:mb-0 md:mr-6"
                                style={{ height: '52px', cursor: 'inherit' }} />
                            <div ref={dropdownRef} className="max w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mb-2 md:mb-0 md:mr-2 custom-select selected-option" onClick={toggleDropdown}>
                                {selectedArea}
                                {dropdownOpen && (
                                    <div className="options">
                                        {optionsAreas.map((option, index) => (
                                            <div key={index} className="option" onClick={() => { setSelectedArea(option); fetchJobData(searchQuery); }}>
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div ref={dropdownRef2} className="max w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mb-2 md:mb-0 md:mr-6 custom-select selected-option" onClick={toggleDropdown2}>
                                {selectedConcelho}
                                {dropdownOpen2 && (
                                    <div className="options">
                                        {optionsConcelhos.map((option, index) => (
                                            <div key={index} className="option" onClick={() => { setSelectedConcelho(option); fetchJobData(searchQuery); }}>
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <button type='submit' className="max w-full px-4 py-2 bg-purple-600 text-white rounded-md focus:outline-none"
                                style={{ height: '52px' }}>
                                Pesquisar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};