import { useUser } from '@clerk/nextjs';

function useLoggedInUser() {
  const { user } = useUser();
  return user;
}

export default useLoggedInUser;
