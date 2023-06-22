'use client'
import Image from "next/image";
import Layout from "@/components/Layout";
import bgRegister from "../assets/register.png"
import Table from "@/components/Table";
import { clients } from "../data/clients"
import Form from "@/components/Form";
import { useState } from "react";
import Client from "@/core/Client";

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);
  const [client, setClient] = useState<Client>(Client.empty())

  const disactive = ()=> setShowRegister((curr) => !curr);

  function handleSubmit(client: Client) {
    console.log(client)
  }

  return (
    <div className={`
    flex justify-around items-center bg-gradient-to-br from-blue-800 to-purple-800 h-screen
    `}>
      <Layout title={ showRegister ? "Cadastrar Cliente" : "Clientes"}>
        <Image src={bgRegister} alt='' width={300} height={300} />
      </Layout>
      { showRegister ?
        <Form client={client} disactive={disactive} handleSubmit={handleSubmit} /> 
        : 
        <Table clients={clients} setClient={setClient} disactive={disactive} />
      }
    </div>
  )
}
