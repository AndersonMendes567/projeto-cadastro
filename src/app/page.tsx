import Image from "next/image";
import Layout from "@/components/Layout";
import bgRegister from "../assets/register.png"
import Table from "@/components/Table";
import { clients } from "../data/clients"

export default function Home() {
  return (
    <div className={`
      flex flex-col lg:flex-row items-center gap-6
      bg-gradient-to-br from-blue-800 to-purple-800 
      h-screen py-6 px-3
    `}>
      <Layout title="Cadastrar Cliente">
        <Image src={bgRegister} alt='' width={300} height={300} />
      </Layout>
      <Table clients={clients} />
    </div>
  )
}
