import { useNavigate } from 'react-router-dom'
//example
export const useCustomNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (destination: string) => {
    navigate(destination);
  }

  return { handleNavigation }
}