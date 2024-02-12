import OfferCardArray from "@/components/offerCard/offerCard";
import SearchBar from "@/components/searchBar/searchBar";
import "./page.css";

export default function Home() {
  return (
    <div className='container'>
      <SearchBar />
      <section className='section-offers'>
        <h2 className='section-title'>Oportunidades</h2>
        <OfferCardArray />
      </section>
    </div>
  );
}
