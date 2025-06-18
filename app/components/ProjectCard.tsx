interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional for now, will be placeholder
  liveUrl: string;
  imageAltText?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  liveUrl,
  imageAltText = "Project preview",
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out">
      {imageUrl ? (
        <img
          alt={imageAltText}
          className="w-full h-48 object-cover"
          src={imageUrl}
        />
      ) : (
        <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
          <p className="text-gray-500 italic">Screenshot coming soon</p>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-50">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
