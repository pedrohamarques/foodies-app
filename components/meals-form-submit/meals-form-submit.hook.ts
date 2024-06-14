import { useFormStatus } from "react-dom";

export function useMealsFormSubmit() {
  const { pending } = useFormStatus();

  return {
    pending,
  };
}
