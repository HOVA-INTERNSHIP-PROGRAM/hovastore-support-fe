import React from "react";
import Card from "../../components/Card";
import article from '../../assets/images/article.png'
import category from '../../assets/images/category.png'
import Faqs from '../../assets/images/Faqs.png'
import BarChartComponent from "../../components/Barchat"
import Piechart from "../../components/Piechart";
import Table from "../../components/Table"


const Dashboard = () => {
  return <div className="flex flex-col px-4">
          <div className='grid gap-5 p-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3'>
        <Card count="105" title="Total Articles" icon={article} iconBackground="bg-primary"/>
        <Card count="10" title="Total Category" icon={category} iconBackground="bg-lightBlue"/>
        <Card count="300" title="Total FAQS" icon={Faqs} iconBackground="bg-purple"/>
      </div>
      <div className='grid md:grid-cols-2 gap-5 p-4 sm:grid-cols-1'>
      <div className="rounded-lg p-3 shadow h-80 bg-white">
          <div className="flex justify-end items-end">
            <p>Article views</p>
          </div>
          <BarChartComponent />
        </div>
        <div className="rounded-lg p-3 shadow h-80 bg-white">
        <div className="flex justify-end items-end">
            <p>Articles Feedback</p>
          </div>
          <Piechart />
        </div>
      </div>
      <div className="mt-4 px-4 pb-2">
        <div className="pb-1"><h2>Top Articles</h2></div>
        <Table />
      </div>
  </div>;
};

export default Dashboard;
