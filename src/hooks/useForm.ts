import Client from "@/core/Client";
import { FormEvent, useState } from "react";

export default function useForm(initialClient: Client, onSubmit: (client: Client)=> void) {
  const [client, setClient] = useState<Client>(initialClient);

  function handleChange(name: string, value: any) {
    const newClient = new Client(
      client.name, 
      client.address, 
      client.district, 
      client.city, 
      client.phone, 
      client.isPlus,
      client.id
    );

    newClient.updateProperties({[name]: value});
    setClient(newClient);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit(
      new Client(
        client.name, 
        client.address, 
        client.district, 
        client.city, 
        client.phone, 
        client.isPlus, 
        client.id
      )
    );
  }

  return {
    client,
    handleChange,
    handleSubmit
  }
}