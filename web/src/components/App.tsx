import React, { useState } from "react";
import "./App.css";
import 'react-perfect-scrollbar/dist/css/styles.css';

import { debugData } from "../utils/debugData";
import { fetchNui } from "../utils/fetchNui";
import char from "./character.png";
import { MdAccessibilityNew } from "react-icons/md";
import { BiSolidUserRectangle } from "react-icons/bi";
import { PiVanFill } from "react-icons/pi";
import { MdBackpack } from "react-icons/md";
import { MdGrass } from "react-icons/md";
import { FaHeadphones, FaWallet } from "react-icons/fa6";
import { GiDominoMask } from "react-icons/gi";
import { IoGlassesOutline } from "react-icons/io5";
import { PiShieldCheckeredFill } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { SlCreditCard } from "react-icons/sl";
import { MdKey } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import PerfectScrollbar from 'react-perfect-scrollbar'
import InvItem from "./inv-item/InvItem";

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

interface ReturnClientDataCompProps {
  data: unknown;
}

const ReturnClientDataComp: React.FC<ReturnClientDataCompProps> = ({
  data,
}) => (
  <>
    <h5>Returned Data:</h5>
    <pre>
      <code>{JSON.stringify(data, null)}</code>
    </pre>
  </>
);

interface ReturnData {
  x: number;
  y: number;
  z: number;
}

const App: React.FC = () => {
  const [clientData, setClientData] = useState<ReturnData | null>(null);

  const playerSlots = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ] as any[];

  const groundSlots = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ] as any[];

  const trunkSlots = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ] as any[];

  const backpackSlots = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ] as any[];

  // example code for getting data
  const handleGetClientData = () => {
    fetchNui<ReturnData>("getClientData")
      .then((retData) => {
        console.log("Got return data from client scripts:");
        console.dir(retData);
        setClientData(retData);
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
        setClientData({ x: 500, y: 300, z: 200 });
      });
  };

  return (
    <div className="nui-wrapper">
      <div className="bg-darkblue w-full h-full flex flex-col p-20 items-center justify-center">
        <div className="flex gap-16 max-w-1792">
          <div className="w-1/3 flex flex-col gap-4">
            <div className="flex flex-row h-24">
              <div className="flex flex-col justify-end">
                <div className="icon-bg flex justify-end items-end">
                  <div className="icon-bg-2">
                    <MdAccessibilityNew className="icon" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <span className="text-np">Body</span>
                <span className="text-gray-400 text-sm">5.0kg / 125.0kg</span>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col gap-4">
                <InvItem>
                  <div className="w-full h-full flex items-center justify-center">
                    <FaHeadphones className="placeholder-icon text-4xl" />
                  </div>
                </InvItem>
                <InvItem>
                  <div className="w-full h-full flex items-center justify-center">
                    <GiDominoMask className="placeholder-icon" />
                  </div>
                </InvItem>
                <InvItem>
                  <div className="w-full h-full flex items-center justify-center">
                    <IoGlassesOutline className="placeholder-icon text-5xl" />
                  </div>
                </InvItem>
                <InvItem>
                  <div className="w-full h-full flex items-center justify-center">
                    <PiShieldCheckeredFill className="placeholder-icon" />
                  </div>
                </InvItem>
                <InvItem>
                  <div className="w-full h-full flex items-center justify-center">
                    <GiConverseShoe className="placeholder-icon text-4xl" />
                  </div>
                </InvItem>
              </div>
              <div className="flex flex-col flex-grow">
                <img className="w-full" src={char} alt="Logo" />
              </div>
              <div className="flex flex-col gap-4">
                <InvItem>
                  <div className="w-full h-full flex items-center justify-center">
                    <FaWallet className="placeholder-icon text-4xl" />
                  </div>
                </InvItem>
                <InvItem>
                  <div className="w-full h-full flex items-center justify-center">
                    <MdSmartphone className="placeholder-icon" />
                  </div>
                </InvItem>
                <InvItem>
                  <div className="w-full h-full flex items-center justify-center">
                    <MdKey className="placeholder-icon text-5xl" />
                  </div>
                </InvItem>
                <InvItem>
                  <div className="w-full h-full flex items-center justify-center">
                    <SlCreditCard className="placeholder-icon text-4xl" />
                  </div>
                </InvItem>
                <InvItem>
                  <div className="w-full h-full flex items-center justify-center">
                    <MdBackpack className="placeholder-icon text-5xl" />
                  </div>
                </InvItem>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-row gap-4">
                <div className="flex justify-center items-center">
                  <div className="small-dot glow">
                  </div>
                </div>
                <span className="text-white">Personal Information</span>
              </div>
              <div className="flex flex-col gap-10 ml-8">
                <div className="flex gap-20">
                  <div className="flex gap-2">
                    <div className="bg-blue-700 w-1 h-full" />
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Personal Vehicle</span>
                      <span className="text-white text-sm">N/A</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-purple-500 w-1 h-full" />
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">John Doe</span>
                      <span className="text-white  text-sm">Citizen ID: 1111</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-20">
                  <div className="flex gap-2">
                    <div className="bg-lime-300 w-1 h-full" />
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Phone Number</span>
                      <span className="text-white text-sm">123-456-7890</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-orange-300 w-1 h-full" />
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs">Home Location</span>
                      <span className="text-white text-sm">Alta Street Apartments - A112</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div className="flex flex-row h-24">
              <div className="flex flex-col justify-end">
                <div className="icon-bg flex justify-end items-end">
                  <div className="icon-bg-2">
                    <BiSolidUserRectangle className="icon" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <span className="text-np">Player</span>
                <span className="text-gray-400 text-sm">5.5kg / 150.0kg</span>
              </div>
            </div>
            <PerfectScrollbar className="inv-panel-max-height">
              <div className="flex flex-wrap gap-4 inv-panel">
                {playerSlots.map(function (object, i) {
                  return <InvItem key={i}>
                    {i < 5 && <div className="shortcut-icon">{i + 1}</div>}
                  </InvItem>;
                })}
              </div>
            </PerfectScrollbar>
            <div className="flex flex-row h-24">
              <div className="flex flex-col justify-end">
                <div className="icon-bg flex justify-end items-end">
                  <div className="icon-bg-2">
                    <MdBackpack className="icon" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <span className="text-np">Backpack</span>
                <span className="text-gray-400 text-sm">5.5kg / 150.0kg</span>
              </div>
            </div>
            <PerfectScrollbar className="inv-panel-max-height">
              <div className="flex flex-wrap gap-4 inv-panel">
                {backpackSlots.map(function (object, i) {
                  return <InvItem key={i} />;
                })}
              </div>
            </PerfectScrollbar>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <div className="flex flex-row h-24">
              <div className="flex flex-col justify-end">
                <div className="icon-bg flex justify-end items-end">
                  <div className="icon-bg-2">
                    <MdGrass className="icon" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <span className="text-np">Ground</span>
                <span className="text-gray-400 text-sm">0.0kg / 1000.0kg</span>
              </div>
            </div>
            <PerfectScrollbar className="inv-panel-max-height">
              <div className="flex flex-wrap gap-4 inv-panel">
                {groundSlots.map(function (object, i) {
                  return <InvItem key={i} />;
                })}
              </div>
            </PerfectScrollbar>
            <div className="flex flex-row h-24">
              <div className="flex flex-col justify-end">
                <div className="icon-bg flex justify-end items-end">
                  <div className="icon-bg-2">
                    <PiVanFill className="icon" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <span className="text-np">Trunk</span>
                <span className="text-gray-400 text-sm">0.0kg / 400.0kg</span>
              </div>
            </div>
            <PerfectScrollbar className="inv-panel-max-height">
              <div className="flex flex-wrap gap-4 inv-panel">
                {trunkSlots.map(function (object, i) {
                  return <InvItem key={i} />;
                })}
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
