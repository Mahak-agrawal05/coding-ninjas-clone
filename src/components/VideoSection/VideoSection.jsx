function VideoSection() {
  return (
    <section className="bg-[#15181A] pb-20">

      <div className="mx-auto max-w-[1100px] px-6">

        <div className="overflow-hidden rounded-2xl border border-[#2B2F32] shadow-2xl">

          {/* Fake Video Player */}
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-[#1E2228] to-black">

            <div className="text-center">

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-4xl text-white">
                ▶
              </div>

              <h2 className="text-3xl font-semibold text-white">
                Demo Video
              </h2>

              <p className="mt-3 text-gray-400">
                Video Placeholder
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default VideoSection;