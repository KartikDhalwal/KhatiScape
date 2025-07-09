import ServicesOverview from "@/app/components/home/ServicesOverview";
export const dynamic = 'force-dynamic';

const ServicesPage = () => {
  return (
    <div className="mt-20">
      <ServicesOverview />
    </div>
  );
}

export default ServicesPage