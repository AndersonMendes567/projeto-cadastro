import Client from "@/core/Client"
import { FormEvent, useState } from "react"
import Button from "./Button"
import Input from "./Input"

interface FormProps {
  client: Client
  setView: (view: 'list' | 'register')=> void
  handleSubmit: (client: Client) => void
}

interface ClientProps {
  name: string
  address: string
  district: string
  city: string
  phone: string
  isPlus: boolean
  id: number
}

export default function Form(props: FormProps) {
  const [client, setClient] = useState<Client>(props.client);

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

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    props.handleSubmit(
      new Client(
        client.name, 
        client.address, 
        client.district, 
        client.city, 
        client.phone, 
        client.isPlus, 
        client.id
      )
    )
  }

  function maskPhone(value: string) {
    var r = value.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;
  }
  
  return (
    <form onSubmit={onSubmit} className="bg-white text-black p-8 rounded-md w-2/5 shadow-gray-800 shadow-md">
      <h2 className="text-xl font-semibold mb-3">Insira as informações do cliente</h2>
      <hr />
      <div className="grid grid-cols-2 gap-4 my-6">
        <Input 
          label="Nome" id="name" placeHolder="Nome do cliente" 
          value={client.name} setValue={handleChange} required
        />
        <Input 
          label="Logradouro" id="address" placeHolder="Rua/Avenida, número" 
          value={client.address} setValue={handleChange} required
        />
        <Input 
          label="Bairro" id="district" placeHolder="Bairro" 
          value={client.district} setValue={handleChange} required 
        />
        <Input 
          label="Cidade" id="city" placeHolder="Cidade" 
          value={client.city} setValue={handleChange} required 
        />
        <Input 
          label="Telefone" id="phone" placeHolder="(99) 9 9999-9999" mask={maskPhone}
          value={client.phone} setValue={handleChange}  type="text" required minLength={14}
        />
        <div className="flex items-end">
          <label className=" flex gap-2 items-center mb-1" htmlFor="isPlus">
            <input
              className="cursor-pointer h-4 w-4 rounded border-gray-500 bg-gray-300 text-purple-500"
              type="checkbox"
              id="isPlus"
              checked={client.isPlus}
              value={client.isPlus ? 'on' : ''} 
              onChange={(e)=> {
                handleChange('isPlus', e.target.value !== 'on')
              }}
            />
            Plus (Todos o serviços)
          </label>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button color="red" action={()=> props.setView("list")} >
          Cancelar
        </Button>
        <Button 
          color="green" 
          type="submit"
        >
          {client.id ? "Atualizar" : "Salvar"}
        </Button>
      </div>
    </form>
  )
}