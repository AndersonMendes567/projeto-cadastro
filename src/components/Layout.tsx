import { Title } from "./Title";

interface LayoultProps {
  title: string
  children: any
}

export default function Layout(props: LayoultProps) {

  return (
    <div className="w-2/5 flex-col items-center border-e border-e-gray-500">
      <Title>{props.title}</Title>
      <div className="p-3 text-gray-100 flex justify-center">{props.children}</div>
    </div>
  )
}