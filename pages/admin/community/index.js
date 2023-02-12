import React from "react";
import Sidebar from "../.././../Admin/components/Sidebar";
import styles from "../.././../styles/admin/Learn.module.css";
import Link from 'next/link'

import { useSelector } from "react-redux";
import { userState } from "../.././../redux/features/authSlice";
const Index = () => {
  const user = useSelector(userState);
  if (!user?.user?.isAdmin) return null;

  const [learn, setLearn] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [addEvent, setAddEvent] = React.useState(false);

  const addeventhandler = () => {
    setAddEvent(true);
  };

  const closeeventhandler = () => {
    setAddEvent(false);
  };

  addEvent && console.log("add event");

  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className="px-10 ">
      <h1 className="font-semibold text-4xl p-3">Community</h1>
      <hr />

        <div>
          <h1 className="text-bold ">EVENT/ COURSES</h1>
          <div className="flex flex-col ">
            <div className="gap-3 flex flex-row py-4">
              <input
                type="text"
                placeholder=""
                className="bg-[#F9E4E4] border-black border rounded-lg py-1 px-2"
              />
              <button className="bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg">
                Edit
              </button>
              <button className="bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg">
                Delete
              </button>
            </div>
            <div className="gap-3 flex flex-row py-4">
              <input
                type="text"
                placeholder=""
                className="bg-[#F9E4E4] border-black border rounded-lg py-1 px-2"
              />
              <button className="bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg">
                Edit
              </button>
              <button className="bg-[#C7E1D0] gap-3  px-2 py-1 rounded-lg">
                Delete
              </button>
            </div>
            <div className="gap-3 flex flex-row py-4">
              <input
                type="text"
                placeholder=""
                className="bg-[#F9E4E4] border-black border rounded-lg py-1 px-2"
              />
              <button className="bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg">
                Edit
              </button>
              <button className="bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg">
                Delete
              </button>
            </div>
            <div className="gap-3 flex flex-row py-4">
              <input
                type="text"
                placeholder=""
                className="bg-[#F9E4E4] border-black border rounded-lg  py-1 px-2"
              />
              <button className="bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg">
                Edit
              </button>
              <button className="bg-[#C7E1D0] px-2 py-1 rounded-lg">
                Delete
              </button>
            </div>
            <div className="gap-3 flex flex-row py-4">
              <input
                type="text"
                placeholder=""
                className="bg-[#F9E4E4] border-black border rounded-lg py-1 px-2"
              />
              <button className="bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg">
                Edit
              </button>
              <button className="bg-[#C7E1D0] gap-3 px-2 py-1 rounded-lg">
                Delete
              </button>
            </div>
          </div>
          <div>
           <Link href="./community/add" > Add Event</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
