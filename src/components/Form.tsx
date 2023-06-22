import Client from "@/core/Client"
import { useState } from "react"
import Button from "./Button"
import Input from "./Input"

interface FormProps {
  client: Client
  disactive: ()=> void
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
  const [client, setClient] = useState<ClientProps>(props.client);
  console.log(client)

  const setValue = (name: string, value: any) => {
    setClient({...client, [name]: value})
  }
  
  return (
    <form action="" className="bg-white text-black p-8 rounded-md w-2/5 shadow-gray-800 shadow-md">
      <h2 className="text-xl font-semibold mb-3">Insira as informações do cliente</h2>
      <hr />
      <div className="grid grid-cols-2 gap-4 my-6">
        <Input 
          label="Nome" id="name" placeHolder="Nome do cliente" 
          value={client.name} setValue={setValue} 
        />
        <Input 
          label="Logradouro" id="address" placeHolder="Rua/Avenida, número" 
          value={client.address} setValue={setValue} 
        />
        <Input 
          label="Bairro" id="district" placeHolder="Bairro" 
          value={client.district} setValue={setValue} 
        />
        <Input 
          label="Cidade" id="city" placeHolder="Bairro" 
          value={client.city} setValue={setValue} 
        />
        <Input 
          label="Telefone" id="phone" placeHolder="(99) 9 9999-9999" 
          value={client.phone} setValue={setValue}  type="text"
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
                setValue('isPlus', !e.currentTarget.value)
              }}
            />
            Plus (Todos o serviços)
          </label>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button color="red" action={props.disactive} >
          Cancelar
        </Button>
        <Button 
          color="green" 
          action={() => {
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
          }}
        >
          {client.id ? "Atualizar" : "Salvar"}
        </Button>
      </div>
    </form>
  )
}