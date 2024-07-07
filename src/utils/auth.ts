import {
  createHmac
} from 'crypto';
import { auth } from "@/auth";



export const encrypt = (content: string) => {
  let hash = createHmac("md5", process.env.JWT_SECRET || '')
  hash.update(content)
  return hash.digest('hex')
}

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};