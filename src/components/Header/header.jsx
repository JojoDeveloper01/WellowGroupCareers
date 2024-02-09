import Link from "next/link";
import "./header.css";

export default function Header() {
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
					<button className='absolute hidden w-8 h-8 max-[1199px]:block'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='28'
							height='28'
							viewBox='0 0 24 24'
							strokeWidth='2'
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M4 6l16 0' />
							<path d='M4 12l16 0' />
							<path d='M4 18l16 0' />
						</svg>{" "}
					</button>
					<input
						className='absolute hidden opacity-0 w-8 h-8 max-[1199px]:block'
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
					<button className='absolute max-[1199px]:mr-[10%] right-[9.3%] translate-x-[-56%]'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='28'
							height='28'
							viewBox='0 0 24 24'
							stroke-width='2'
							stroke='currentColor'
							fill='none'
							stroke-linecap='round'
							stroke-linejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
							<path d='M21 21l-6 -6' />
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
									autocomplete='off'
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
									<i className='lqd-icn-ess icon-ld-search'></i>
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
