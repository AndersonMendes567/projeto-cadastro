'use client'
import Image from "next/image";
import Layout from "@/components/Layout";
import bgRegister from "../assets/register.png"
import Table from "@/components/Table";
import Form from "@/components/Form";
import { useEffect } from "react";
import useClients from "@/hooks/useClients";

export default function Home() {
  const {
    client,
    clients,
    getClients,
    onSubmit,
    setClient,
    deleteClient,
    viewRegister,
    changeList,
    changeRegister
  } = useClients();

   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(getClients, [])

  return (
    <div className={`
    flex justify-around items-center bg-gradient-to-br from-blue-800 to-purple-800 h-screen
    `}>
      <Layout title={ viewRegister ? ( client?.id ? 'Atualizar Cliente' : 'Cadastrar Cliente') : 'Clientes'}>
        <Image src={bgRegister} alt='' width={300} height={300} />
      </Layout>
      { viewRegister ?
        <Form client={client} changeList={changeList} onSubmit={onSubmit} /> 
        : 
        <Table clients={clients} setClient={setClient} changeRegister={changeRegister} deleteClient={deleteClient} />
      }
    </div>
  )
}
