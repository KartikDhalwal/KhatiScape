import { IconType } from 'react-icons';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: IconType;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-amber-600 w-6 h-6" />
      </div>
      <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}