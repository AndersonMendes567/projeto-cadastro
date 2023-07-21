import { useState } from "react";

export default function useViews() {
  const [view, setView] = useState<'list' | 'register'>('list');

  const changeList = ()=> setView('list');

  const changeRegister = ()=> setView('register');

  return {
    viewList: view === 'list',
    viewRegister: view === 'register',
    changeList,
    changeRegister
  }
}