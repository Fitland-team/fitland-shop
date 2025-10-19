import { useNavigate } from "react-router-dom";

export default function useProfileBack() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/profile", { replace: true });
  };

  return handleBack;
}


