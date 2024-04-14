import Card from "../../components/Card";
const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 ">
        <Card card="card" number={`400`} title="Total Articles" />
        <Card card="card" number={`6000`} title={`Total Category`} />
        <Card card="card" number={`450`} title={`Total Faqs`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
        <Card charts="charts" chartname={`Bars`} />
        <Card charts="charts"  />
      </div>
      <div className="p-2">
        <Card articles="articles" title={`Top articles`} />
      </div>
    </div>
  );
};

export default Dashboard;
