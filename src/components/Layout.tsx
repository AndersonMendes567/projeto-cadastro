import { Title } from "./Title";

interface LayoultProps {
  title: string
  children: any
}

export default function Layout(props: LayoultProps) {

  return (
    <div className="flex-col w-4/5 items-center justify-center gap-3 lg:border-e border-e-gray-500">
      <Title>{props.title}</Title>
      <div className="text-gray-100 flex justify-center">{props.children}</div>
    </div>
  )
}