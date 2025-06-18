export default function Hero() {
  const bio =
    "Software and web developer with ten+ years experience, I use any and all current frameworks and languages depending on the project, and I am also a veteran of the US Navy and Peace Corps.";

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-center">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="flex flex-col items-center space-y-6">
          <img
            alt="Nelson Delpozo"
            className="rounded-full object-cover"
            height="160"
            src="/img/Nelson-Delpozo.jpeg" // Path relative to public directory
            style={{
              aspectRatio: "160/160",
              objectFit: "cover",
            }}
            width="160"
          />
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-50">
              Nelson Delpozo
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Software & Web Developer
            </p>
          </div>
          <p className="text-gray-300 md:text-lg leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    </section>
  );
}
