import "./footer.css";

export default function Header() {
	return (
		<section className='footer-section'>
			<div className='footer-element footer-element-container'>
				<div className='element-spacing-column'>
					<div className='wellowgroup-logo-space'>
						<div className='logo-wellow'>
							<a href='https://wellowgroup.com/en/'>
								<img
									width='200'
									height='80'
									src='/WELLOW-WHITE-BG.png'
									alt='Digital Hub Kit'
									decoding='async'
									itemProp='image'
								/>
							</a>
						</div>
					</div>

					<div className='footer-text-space text'>
						<p>
							{" "}
							Somos a Wellow™, um grupo empresarial de 12 empresas, 6 marcas
							comerciais e 15 serviços. Atuamos nas áreas dos Recursos Humanos,
							Outsourcing, Energia & Telecomunicações e Mediação e estamos
							sempre atentos a novos mercados e áreas de negócio.
						</p>
					</div>

					<div className='footer-element-container'>
						<div>
							<div className='social-icons'>
								<a
									href='https://www.instagram.com/WellowGroup/'
									target='_blank'
									className='social-icon'
								>
									<img src='instagram.svg' className='svg-icon' alt='Icon'></img>
								</a>
								<a
									href='https://www.linkedin.com/company/wellow%E2%84%A2-group/?originalSubdomain=pt'
									target='_blank'
									className='social-icon'
								>
									<img src='linkdin.svg' className='svg-icon' alt='Icon'></img>
								</a>
								<a
									href='https://www.youtube.com/channel/UCgd7uPiw0psK_KrPOcqCqvQ'
									target='_blank'
									className='social-icon'
								>
									<img src='youtube.svg' className='svg-icon' alt='Icon'></img>
								</a>
							</div>
						</div>

						<button className='element-widget-wrap club-wellow-button'>
							<a href='https://club.wellowgroup.com/' target='_blank'>
								<span> Wellow™ Club</span>
							</a>
						</button>
					</div>
				</div>

				<div className='element-spacing-column2'>
					<section className='elements-group-container'>
						<div className='footer-element-container'>
							<div className='element-flex-column092023'>
								<div className='element-flex-column'>
									<h3>SOBRE NÓS</h3>
									<ul>
										<li>
											<a href='https://wellowgroup.com/' aria-current='page'>
												Homepage
											</a>
										</li>

										<li>
											<a href='https://wellowgroup.com/descobre-a-wellow/'>
												Descobre a Wellow™
											</a>
										</li>

										<li>
											<a href='https://wellowgroup.com/marcas/'>Marcas</a>
										</li>

										<li>
											<a href='https://wellowgroup.com/pessoas/'>Pessoas</a>
										</li>

										<li>
											<a href='https://wellowgroup.com/sustentabilidade/'>
												Sustentabilidade
											</a>
										</li>

										<li>
											<a href='https://wellowgroup.com/media/'>Media</a>
										</li>

										<li>
											<a href='https://wellowgroup.com/contatos/'>Contatos</a>
										</li>
									</ul>
								</div>
							</div>

							<div className='element-flex-column092023'>
								<div className='element-flex-column'>
									<h3>INFORMAÇÕES LEGAIS</h3>
									<ul>
										<li>
											<a href='https://wellowgroup.com/politica-de-privacidade/'>
												Política de Privacidade
											</a>
										</li>

										<li>
											<a href='https://wellowgroup.com/politica-de-cookies/'>
												Política de Cookies
											</a>
										</li>

										<li>
											<a href='https://wellowgroup.com/politica-de-protecao-a-denuncia/'>
												Política de Proteção à Denúncia
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div className='element-flex-column092023 list-images'>
								<div className='element-flex-column'>
									<p>
										<a
											href='https://www.livroreclamacoes.pt/Inicio/'
											target='_blank'
											rel='noopener'
										>
											<img
												className='alignnone wp-image-9493 size-medium'
												src='https://wellowgroup.com/wp-content/uploads/2019/10/livro_reclamacoes-500x-207-w-1-300x124.png'
												alt=''
												width='300'
												height='124'
											/>
										</a>
									</p>

									<p>
										<img
											loading='lazy'
											className='alignnone wp-image-10206'
											title=''
											src='https://wellowgroup.com/wp-content/uploads/2022/09/ISO-9001-14001-IQNET-PRETO-300x148.png'
											alt=''
											width='218'
											height='107'
										/>
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
}
