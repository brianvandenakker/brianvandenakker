import Link from "next/link";

export default function Links({}) {
  return (
    <>
      <Link href="/thingspast">
        <h1 className="font-semibold text-xl flex items-center text-gray-600 ">
          Things Past
        </h1>
      </Link>
      <Link href="/westendfirewood">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          West End Firewood
        </h1>
      </Link>
      <Link href="/usmc">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          USMC
        </h1>
      </Link>

      <Link href="/economics">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          Economics
        </h1>
      </Link>
      <Link href="/consulting">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          Consulting
        </h1>
      </Link>
      <Link href="/travels">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          Travels
        </h1>
      </Link>
      <Link href="/reading-list">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          Reading List
        </h1>
      </Link>

      <Link href="/essays">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          Essays
        </h1>
      </Link>
      <Link href="/tech">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          Tech
        </h1>
      </Link>
      <Link href="/education">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          Education
        </h1>
      </Link>
      <Link href="/hobbies">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          Hobbies
        </h1>
      </Link>
      <Link href="/real-estate">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          Real Estate
        </h1>
      </Link>
      <Link href="/startup-ideas">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          Startup Ideas
        </h1>
      </Link>
      <Link href="/archive">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          Archive
        </h1>
      </Link>
      <Link href="/resume">
        <h1 className="font-semibold text-xl flex items-center text-gray-600">
          Resume
        </h1>
      </Link>
    </>
  );
}
