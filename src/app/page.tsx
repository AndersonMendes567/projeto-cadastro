import Image from "next/image";
import Layout from "@/components/Layout";
import bgRegister from "../assets/register.png"

export default function Home() {
  return (
    <div className={`
      flex flex-col md:flex-row items-center
      bg-gradient-to-br from-blue-800 to-purple-800 
      h-screen py-6 px-3
    `}>
      <Layout title="Cadastrar Cliente">
        <Image src={bgRegister} alt='' width={300} height={300} />
      </Layout>
    </div>
  )
}
