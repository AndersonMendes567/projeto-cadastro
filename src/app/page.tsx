'use client'
import Image from "next/image";
import Layout from "@/components/Layout";
import bgRegister from "../assets/register.png"
import Table from "@/components/Table";
import { clients } from "../data/clients"
import Form from "@/components/Form";
import { useState } from "react";

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);
  const disactive = ()=> setShowRegister((curr) => !curr);

  return (
    <div className={`
    flex justify-around items-center bg-gradient-to-br from-blue-800 to-purple-800 h-screen
    `}>
      <Layout title={ showRegister ? "Cadastrar Cliente" : "Clientes"}>
        <Image src={bgRegister} alt='' width={300} height={300} />
      </Layout>
      { showRegister ?
        <Form disactive={disactive}  /> 
        : 
        <Table clients={clients} disactive={disactive} />
      }
    </div>
  )
}
