'use client'
import SupprimeCompte from "@/components/suppression-compte";
import type { NextPage } from "next";



const SuppressionCompte: NextPage = () => {
  
  return (
      <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[830px] max-w-full mq1050:min-w-full">
        <h1>Suppression du compte</h1>
        <br />
        <SupprimeCompte/>
      </div>
  )
}
export default SuppressionCompte