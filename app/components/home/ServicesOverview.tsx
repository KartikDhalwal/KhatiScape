import { services } from '@/app/data/services';
import ServiceCard from '../ui/ServiceCard';

export default function ServicesOverview() {
  return (
    <div className="grid text-orange-600 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-28">
      {services.map((service, index) => (
        <ServiceCard 
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
}