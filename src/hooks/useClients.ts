import ClientCollection from "@/backend/db/ClientCollection";
import Client from "@/core/Client";
import { ClientRepository } from "@/core/ClientRepository";
import { useState } from "react";
import useViews from "./useViews";

export default function useClients() {
  const repo: ClientRepository = new ClientCollection();

  const [view, setView] = useState<'list' | 'register'>('list');
  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  const { viewRegister, changeList, changeRegister } = useViews();

  async function onSubmit(client: Client) {
    await repo.save(client);
    getClients();
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

  return {
    client,
    setClient,
    clients,
    setView,
    onSubmit,
    getClients,
    deleteClient,
    viewRegister, 
    changeList, 
    changeRegister
  }
}