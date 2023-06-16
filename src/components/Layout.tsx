import { Title } from "./Title";

interface LayoultProps {
  title: string
  children: any
}

export default function Layout(props: LayoultProps) {

  return (
    <div className="md:w-2/5 flex-col items-center justify-center gap-3 md:border-e border-e-gray-500">
      <Title>{props.title}</Title>
      <div className="text-gray-100 flex justify-center">{props.children}</div>
    </div>
  )
}