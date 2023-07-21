import Client from "@/core/Client"
import useForm from "@/hooks/useForm"
import Button from "./Button"
import Input from "./Input"
import maskPhone from "@/utils/maskPhone"

interface FormProps {
  client: Client
  changeList: ()=> void
  onSubmit: (client: Client) => void
}

export default function Form(props: FormProps) {
  
  function midleSubmit(client: Client) {
    props.changeList();
    props.onSubmit(client);
  }
  const { client, handleChange, handleSubmit } = useForm(props.client, midleSubmit);

  return (
    <form onSubmit={handleSubmit} className="bg-white text-black p-8 rounded-md w-2/5 shadow-gray-800 shadow-md">
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
            Plus (Todos os serviços)
          </label>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button color="red" action={()=> props.changeList()} >
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