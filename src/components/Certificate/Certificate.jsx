import certificateImage from "../../assets/images/nsdc-certificate.webp";

function Certificate() {
  return (
    <section className="bg-[#F8F8F8] py-24">

      <div className="mx-auto max-w-6xl px-8">

        <div className="grid items-center gap-12 rounded-3xl border border-gray-200 bg-white p-10 shadow-sm lg:grid-cols-2">

          {/* Certificate */}

          <img
  src={certificateImage}
  alt="NSDC Certificate"
  className="rounded-xl border"
/>

          {/* Text */}

          <div>

            <h2 className="text-5xl font-semibold leading-tight text-gray-900">
              We are an approved training partner of NSDC under their scheme for
              market led fee-based services
            </h2>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Certificate;