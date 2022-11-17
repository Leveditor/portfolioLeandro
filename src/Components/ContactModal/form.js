import {useState} from "react";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

export default function Form() {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const [ inputStyle, setInputStyle ] = useState('w-60 border border-stone-600 rounded mb-4 pl-2 pb-1 shadow-lg shadow-stone-500/50');
    const [ textarea, setTextarea ] = useState('border border-stone-600 rounded pl-2 shadow-lg shadow-stone-500/50');
  
    const sendEmail = (data) => {
        const templetePramns = {
            from_name: data.name,
            message: data.message,
            email: data.email
        }

        emailjs.send('service_gfhlj2g', 'template_kyxq1cw', templetePramns, 'x624sYAHViDpDFNqx')
        .then(() => {
            reset({
                name: '',
                email: '',
                message: '',
              });
              setInputStyle('w-60 border-2 border-green-700 rounded mb-4 pl-2 pb-1 shadow-lg shadow-green-500/50');
              setTextarea('border-2 border-green-700 rounded pl-2 shadow-lg shadow-green-500/50');
        }, (err) => {
            console.log('error ', err)
        })
      }

    return (
        <>
            <form onSubmit={handleSubmit(sendEmail)}>
                <div className='grid grid-cols-2 gap-4'>
                    <input 
                    className={inputStyle}
                    placeholder='Digite seu nome' 
                    {...register("name", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}/>
                
                    <input 
                    className={inputStyle}
                    placeholder='Digite seu e-mail' 
                    {...register("email", { required: true })} />
                </div>

                    <textarea 
                    className={textarea}
                    rows="6" cols="44" 
                    placeholder='Digite sua mensagem' 
                    {...register("message", { required: true })} />

                <div className='flex justify-center mt-5'>
                    <button 
                    type='submit' 
                    className='bg-zinc-600 hover:bg-zinc-800 shadow-lg shadow-zinc-600/50 text-emerald-50 p-1 pl-12 pr-12 rounded'>Enviar</button>
                </div>
            </form>
        </>
    )
}