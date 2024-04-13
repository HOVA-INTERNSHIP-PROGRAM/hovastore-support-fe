import Card from "../../components/Card";
const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 ">
      <Card number={`400`} title="Total Articles"/>
      <Card number={`6000`} title={`Total Category`} />
      <Card number={`450`} title={`Total Faqs`} />
    </div>
  );
};

export default Dashboard;
