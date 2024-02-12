"use client";
import Link from "next/link";

export default function ButtonOffer({ job }) {
  if (!job) {
    // Handle the case when job is undefined
    return null;
  }

  const URL = `/${encodeURI(
    job.internal_job_title
      .replace(/-{2,}/g, "-")
      .replace(/\s+/g, "")
      .replace(/\//g, "-")
      .replace(/[A-Z]/g, match => match.toLowerCase())
  )}`;

  return (
    <Link key={job.id} href={URL}>
      <button className='mr-2 btn-secondary' style={{ height: "45px" }}>
        Ver Oferta
      </button>
    </Link>
  );
}
