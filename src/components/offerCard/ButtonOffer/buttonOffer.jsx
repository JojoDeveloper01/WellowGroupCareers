"use client";
import Link from "next/link";

export default function ButtonOffer({ job }) {
  if (!job) {
    // Handle the case when job is undefined
    return null;
  }

  const formattedTitle = job.internal_job_title
    .replace(/-{2,}/g, "-")
    .replace(/\s+/g, "")
    .replace(/\//g, "-")
    .toLowerCase();

  const URL = `/${encodeURIComponent(formattedTitle)}-${job.ref_number}`;

  return (
    <Link href={URL}>
      <button className='mr-2 btn-secondary' style={{ height: "45px" }}>
        Ver Oferta
      </button>
    </Link>
  );
}
