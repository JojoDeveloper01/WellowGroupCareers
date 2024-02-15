"use client"
import Link from "next/link";
import { useState } from "react";
import "./header.css";

export default function Header() {
	const [fieldValue, setFieldValue] = useState('initialValue');

	const handleChange = (event) => {
		setFieldValue(event.target.value);
	};

	return (
		<header className='fixed top-0 bg-[#fffffffa] z-[2]'>
			<nav className='shadow-axl h-[9.3rem] max-[572px]:h-[8rem] max-[425px]:h-[6.5rem] max-[375px]:h-[6rem] max-[320px]:h-[5.5rem] w-screen'>
				<div className='text-header flex h-full items-center justify-center'>
					<div className='absolute leftLogo'>
						<Link href='https://wellowgroup.com/'>
							<img
								className='w-[200px] max-[572px]:w-[31vw] max-[572px]:h-[13vw]  h-[80px]'
								src='/WELLOW-WHITE-BG.png'
								alt='Logo Wellow'
							/>
						</Link>
					</div>
					<button className='absolute hidden size-12 max-[1199px]:block'>
						<svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M97.092 36.078H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 61.889H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222zM97.092 87.7H30.908a2.111 2.111 0 0 0 0 4.222h66.184a2.111 2.111 0 0 0 0-4.222z" /></svg>
					</button>
					<input
						className='absolute hidden opacity-0 size-8 max-[1199px]:block'
						type='checkbox'
					/>
					<div className='menuNav flex max-[1199px]:hidden max-[1199px]:flex-col justify-center items-center ml-[76px]'>
						<div>
							<Link href='https://wellowgroup.com' target='_blank'>
								Wellow™
							</Link>
						</div>
						<div>
							<Link href='https://wellowgroup.com/marcas' target='_blank'>
								Marcas
							</Link>
						</div>
						<div>
							<Link href='https://wellowgroup.com/Pessoas' target='_blank'>
								Pessoas
							</Link>
						</div>
						<div>
							<Link
								href='https://wellowgroup.com/sustentabilidade'
								target='_blank'
							>
								Sustentabilidade
							</Link>
						</div>
						<div className='lenguages'>
							<Link href='/' className='pt'>
								PT
							</Link>
							<span className='hidden p-[6px 12px] rounded-[10%] max-[1199px]:block absolute right-8 bottom-[26%]'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='12'
									height='25'
									viewBox='0 0 21 32'
								>
									<path
										fill='currentColor'
										d='M10.5 18.375l7.938-7.938c.562-.562 1.562-.562 2.125 0s.562 1.563 0 2.126l-9 9c-.563.562-1.5.625-2.063.062L.437 12.562C.126 12.25 0 11.876 0 11.5s.125-.75.438-1.063c.562-.562 1.562-.562 2.124 0z'
									></path>
								</svg>
							</span>
							<input
								style={{ right: "0" }}
								className='hidden bottom-[26%] max-[1199px]:block absolute w-[5.4rem] h-[2rem] opacity-0'
								type='checkbox'
							/>
							<div className='lenguages-box h-[11.4rem] hidden absolute bg-[#ffff] translate-x-[-21%] top-[16%] max-[1199px]:top-[59%] rounded-[10%] shadow-[0_16px_50px_rgba(0,0,0,.07)] z-[1]'>
								<Link
									href='https://wellowgroup.com/en/'
									target='_blank'
									className='en bottom-[17%] translate-x-[144%] max-[1199px]:bottom-[13%] max-[1199px]:translate-x-[44%] color-[#fffff]'
								>
									EN
								</Link>
							</div>
						</div>
						<div className='candidaturas'>
							<Link
								className='text-white w-[14rem] relative block px-[1.8rem] py-[0.8rem]'
								href='/'
							>
								Junta-te à Wellow™
							</Link>
						</div>
					</div>
					<button className='absolute size-8 max-[1199px]:mr-[10%] right-[9.3%] translate-x-[-56%]'>
						<svg className="size-full" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
							<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
						</svg>
					</button>
					<input
						className='cursor-pointer searchButton absolute max-[1199px]:mr-[10%] right-[9.3%] translate-x-[-56%] w-[2em] h-[2rem] opacity-0'
						type='checkbox'
					/>
					<div
						role='search'
						className='ld-module-dropdown pos-abs is-active in'
						id='search-65afa0693139c'
						aria-expanded='true'
					>
						<div className='ld-search-form-container'>
							<form
								role='search'
								method='get'
								action='https://wellowgroup.com/'
								className='ld-search-form pos-rel'
							>
								<input
									className='w-100'
									type='search'
									placeholder='Pesquisar'
									value=''
									name='s'
									autoComplete='off'
									onChange={handleChange}
								/>
								<span
									role='search'
									className='input-icon d-inline-block pos-abs is-active'
									data-ld-toggle='true'
									data-toggle='collapse'
									data-target='#search-65afa0693139c'
									data-bs-toggle='collapse'
									data-bs-target='#search-65afa0693139c'
									aria-controls='search-65afa0693139c'
									aria-expanded='true'
								>
								</span>
								<input type='hidden' name='post_type' value='post' />
							</form>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
