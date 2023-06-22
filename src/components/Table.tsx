import Client from "../core/Client"
import Button from "./Button"
import { DeleteIcon, EditIcon } from "./Icons"

interface TableProps {
  clients: Client[]
  setClient: (client: Client)=> void
  disactive: ()=> void
}

export default function Table(props: TableProps) {

  function newClient() {
    props.setClient(Client.empty())
    props.disactive();
  }

  if (!props.clients.length) {
    return (
      <div className="flex flex-col">
        <span className="text-xl font-semibold mb-6 text-white">Vix, nada aqui por enquanto!</span>
        <Button action={newClient} color="blue"
        >Novo Cliente</Button>
      </div>
    )
  }

  const renderHeadTable = ()=> {
    return (
      <tr>
        <th className="p-4 bg-purple-900 text-white text-left">Código</th>
        <th className="p-4 bg-purple-900 text-white text-left">Nome</th>
        <th className="p-4 bg-purple-900 text-white text-left">Cidade</th>
        <th className="p-4 bg-purple-900 text-white text-left">Telefone</th>
        <th className="p-4 bg-purple-900 text-white text-left">Plus</th>
        <th className="p-4 bg-purple-900 text-white">Ações</th>
      </tr>
    )
  }

  const renderBodyTable = ()=> {
    return (props.clients?.map((client, i) => {
      return (
        <tr key={client.id} 
          className={`
            ${i % 2 === 0 ? "bg-gray-200" : "bg-gray-300"} 
          `}
        >
          <td className="px-4 py-2">{client.id}</td>
          <td className="px-4 py-2">{client.name}</td>
          <td className="px-4 py-2">{client.city}</td>
          <td className="px-4 py-2">{client.phone}</td>
          <td className="px-4 py-2 bg-clip-padd">{client.isPlus ? "Sim" : "Não"}</td>
          <td className="px-4 py-2 bg-clip-padd flex gap-2">
            <button className="text-blue-600 p-1"
              onClick={()=> {
                props.setClient(client);
                props.disactive()
              }}
            >
              <EditIcon />
            </button>
            <button className="text-red-600 p-1">
              <DeleteIcon />
            </button>
          </td>
        </tr>
      )
    }))  
  }
  
  return (
    <div>
      <div className="mb-6 flex justify-end">
        <Button action={newClient} color="blue" >Novo Cliente</Button>
      </div>
      <table 
        className={`
        text-gray-950 p-2 rounded-b-md shadow-gray-800 
          shadow-md bg-white overflow-hidden
        `}
      >
        <thead>
          { renderHeadTable() }
        </thead>
        <tbody>
          { renderBodyTable() }
        </tbody>
      </table>
    </div>
  )
}