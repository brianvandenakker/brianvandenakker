import Link from "next/link";
export default function Project() {
  return (
    <div className="w-full p-2 md:p-4 shadow-sm shadow-slate-500 rounded-sm hover:bg-slate-100">
      <Link href="https://www.westendfirewood.app">
        <div>
          <h2 className="font-semibold">West End Firewood Delivery App</h2>

          <div>
            <p className="text-sm">
              West End Firewood faced issues from outdated technologies which
              resulted in long delivery times, and often forgetting about some
              customers
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
