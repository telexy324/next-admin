import req from '@/utils/req';
import { login } from "@/actions/login";
import { register } from "@/actions/register";

export const loginApi = (email: string, pwd: string) => req.post('/user/login', {email, pwd})

export const registerApi = (email: string, pwd: string) => req.post('/user/register', {email, pwd})