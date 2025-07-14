type ProjectDetailsProps = {
  description: string;
  location: string;
  size: string;
  completed: string;
  features: string[];
};

export function ProjectDetails({
  description,
  location,
  size,
  completed,
  features,
}: ProjectDetailsProps) {
  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-sm">
      <h2 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6 text-amber-800">Project Details</h2>
      <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">{description}</p>
      
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-serif font-semibold text-gray-800 mb-1">Location</h3>
          <p className="text-gray-600">{location}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-serif font-semibold text-gray-800 mb-1">Size</h3>
          <p className="text-gray-600">{size}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-serif font-semibold text-gray-800 mb-1">Completed</h3>
          <p className="text-gray-600">{completed}</p>
        </div>
      </div> */}
      
      <div>
        <h3 className="font-serif font-semibold text-gray-800 mb-3 sm:mb-4 text-lg">Key Features</h3>
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start bg-gray-50 p-3 rounded-lg">
              <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}