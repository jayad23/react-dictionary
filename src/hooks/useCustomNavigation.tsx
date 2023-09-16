import { useNavigate } from 'react-router-dom'
//ADDING COMMENT TO CHECK BRANCH COMMIT MESSAGE
export const useCustomNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (destination: string) => {
    navigate(destination);
  }

  return { handleNavigation }
}