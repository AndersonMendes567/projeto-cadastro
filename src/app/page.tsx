'use client'
import Image from "next/image";
import Layout from "@/components/Layout";
import bgRegister from "../assets/register.png"
import Table from "@/components/Table";
import { clients } from "../data/clients"
import Form from "@/components/Form";
import { useEffect, useState } from "react";
import Client from "@/core/Client";
import { ClientRepository } from "@/core/ClientRepository";
import ClientCollection from "@/backend/db/ClientCollection";

export default function Home() {
  const repo: ClientRepository = new ClientCollection();

  const [view, setView] = useState<'list' | 'register'>('list');
  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  async function handleSubmit(client: Client) {
    await repo.save(client);
    getClients();
    setView('list');
  }

  function getClients() {
    repo.getAll().then(clients => {
      setClients(clients);
    })
  }

  async function deleteClient(client: Client) {
    await repo.delete(client).then(()=> console.log('Cliente excluido'));
    getClients();
  }

   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(getClients, [])

  return (
    <div className={`
    flex justify-around items-center bg-gradient-to-br from-blue-800 to-purple-800 h-screen
    `}>
      <Layout title={ view === 'register' ? 'Cadastrar Cliente' : 'Clientes'}>
        <Image src={bgRegister} alt='' width={300} height={300} />
      </Layout>
      { view === 'register' ?
        <Form client={client} setView={setView} handleSubmit={handleSubmit} /> 
        : 
        <Table clients={clients} setClient={setClient} setView={setView} deleteClient={deleteClient} />
      }
    </div>
  )
}
