'use client'
import Link from 'next/link';

export default function buttonOffer({ job }) {
  /*   const router = useRouter()
    function handleClick() {
      router.push(`/${id}`)
    } */

  /*  const filteredOffers = id.filter((job) => job.title === title && job.custom_status !== 0); */

  /*   const URL = `/${encodeURI(filteredOffers[0].internal_job_title.replace(/-{2,}/g, "-").replace(/\s+/g, "").replace(/\//g, "-").replace(/[A-Z]/g, (match) => match.toLowerCase()))}`
   */
  return (
    job.length > 0 && (
      <Link key={job[0].id} href={`/${encodeURI(job[0].internal_job_title.replace(/-{2,}/g, "-").replace(/\s+/g, "").replace(/\//g, "-").replace(/[A-Z]/g, (match) => match.toLowerCase()))}`}>
        <button className="mr-2 btn-secondary" style={{ height: '45px' }}>
          Ver Oferta
        </button>
      </Link>
    )
  )
}
