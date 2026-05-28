import type { ActionFunctionArgs } from 'react-router-dom'


export const loginAction = async ({ request }: ActionFunctionArgs) => {
  
  const formData = await request.formData()
  const data = Object.fromEntries(formData);
 
  console.log(data)

  return null
}