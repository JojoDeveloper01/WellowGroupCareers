import SearchBar from "@/components/searchBar/searchBar";
import OfferCard_Array from "@/components/offerCard/offerCard";
import "./page.css";

/* dfsfdsdfsdfsdfsdfsdfHFGDHFGDHFGHFGH */

export default function Home() {
	return (
		<div className='container'>
			<SearchBar />
			<section className='section-offers'>
				<h2 className='section-title'>Oportunidades</h2>
				<OfferCard_Array />
			</section>
		</div>
	);
}
