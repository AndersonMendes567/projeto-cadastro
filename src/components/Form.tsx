interface FormProps {
  disactive: ()=> void
}

export default function Form(props: FormProps) {

  return (
    <form action="" className="bg-white text-black p-8 rounded-md w-2/5 shadow-gray-800 shadow-md">
      <h2 className="text-xl font-semibold mb-3">Insira as informações do cliente</h2>
      <hr />
      <div className="grid grid-cols-2 gap-4 my-6">
        <div>
          <label htmlFor="name">Nome</label>
          <input placeholder="Nome do cliente" required 
            className="mt-1 block bg-gray-300 rounded-sm px-3 py-1 border-0 w-full" 
            type="text" id="name" />
        </div>
        
        <div className="">
          <label htmlFor="address">Logradouro</label>
          <input placeholder="Rua/Avenida, número" required 
            className="mt-1 block bg-gray-300 rounded-sm px-3 py-1 border-0 w-full" 
            type="text" id="address" />
        </div>

        <div>
          <label htmlFor="district">Bairro</label>
          <input placeholder="Bairro" required 
            className="mt-1 block bg-gray-300 rounded-sm px-3 py-1 border-0 w-full" 
            type="text" id="district" />
        </div>

        <div>
          <label htmlFor="city">Cidade</label>
          <input placeholder="Cidade" required 
          className="mt-1 block bg-gray-300 rounded-sm px-3 py-1 border-0 w-full" 
          type="text" id="city" />
        </div>

        <div>
          <label htmlFor="phone">Telefone</label>
          <input placeholder="(99) 9 9999-9999" required 
          className="mt-1 block bg-gray-300 rounded-sm px-3 py-1 border-0 w-full" 
          type="text" id="phone" />
        </div>

        <div className="flex items-end">
          <label className=" flex gap-2 items-center mb-1" htmlFor="isPlus">
            <input
              className="cursor-pointer h-4 w-4 rounded border-gray-500 bg-gray-300 text-purple-500"
              type="checkbox"
              id="isPlus"
            />
            Plus (Todos o serviços)
          </label>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button type="reset" 
          className="bg-red-600 font-bold hover:bg-red-500 px-8 py-2 rounded-md text-white"
          onClick={props.disactive}
        >Cancelar</button>
        <button type="submit" 
          className="bg-green-600 font-bold hover:bg-green-500 px-8 py-2 rounded-md text-white"
        >Enviar</button>
      </div>
      
    </form>
  )
}