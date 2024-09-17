import React from "react";
import Sidebar from "./Sidebar";
import ListItems from "./ListItems";
import Vedio from "./Vedio";
import { useAuth } from "../Context/AuthContext";

const Home = () => {
  const { data } = useAuth();

  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden ">
        <ListItems />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1">
          {data.map((item) => {
            if (item.type !== "video") return false;
            //?.optional data not come than application not crash
            return <Vedio key={item.id} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
