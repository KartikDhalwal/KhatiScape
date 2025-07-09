type ProjectDetailsProps = {
  description: string;
  location: string;
  size: string;
  completed: string;
  features: string[];
};

export default function ProjectDetails({
  description,
  location,
  size,
  completed,
  features,
}: ProjectDetailsProps) {
  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-6 text-amber-800">Project Details</h2>
      <p className="text-gray-700 mb-8">{description}</p>
      
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-serif font-semibold text-gray-800">Location</h3>
          <p className="text-gray-600">{location}</p>
        </div>
        <div>
          <h3 className="font-serif font-semibold text-gray-800">Size</h3>
          <p className="text-gray-600">{size}</p>
        </div>
        <div>
          <h3 className="font-serif font-semibold text-gray-800">Completed</h3>
          <p className="text-gray-600">{completed}</p>
        </div>
      </div>
      
      <div>
        <h3 className="font-serif font-semibold text-gray-800 mb-4">Features</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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