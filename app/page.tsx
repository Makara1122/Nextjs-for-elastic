
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { FaBeer } from "react-icons/fa";
import SearchBarComponent from '@/components/SearchBarComponent'
import {words} from '@/libs/data'
import { useState } from "react";

export default function Home() {



  return (
    
    <div className="m-8 flex flex-col justify-center max-w-lg">
     <SearchBarComponent/>
    </div>

   
  );
}
