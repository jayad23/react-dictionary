import { useNavigate } from 'react-router-dom'

export const useCustomNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (destination: string) => {
    navigate(destination);
  }

  return { handleNavigation }
}