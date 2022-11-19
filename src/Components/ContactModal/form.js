import {useState} from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { i18n } from '../../translate/i18n';

export default function Form() {
    const { register, handleSubmit, reset } = useForm();
    const [ inputStyle, setInputStyle ] = useState('w-60 border border-stone-600 rounded mb-4 pl-2 pb-1 shadow-lg shadow-stone-500/50 w-full');
    const [ textarea, setTextarea ] = useState('border border-stone-600 rounded pl-2 shadow-lg shadow-stone-500/50 w-full');
    const [ messageForm, setMessageForm ] = useState('');
    const [ messageStyle, setMessageStyle ] = useState('');


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
              setInputStyle('w-60 border-2 border-green-700 shadow-lg shadow-green-500/50 rounded mb-4 pl-2 pb-1 w-full');
              setTextarea('border-2 border-green-700 shadow-lg shadow-green-500/50 rounded pl-2 w-full');
              setMessageForm('Messagem enviada com sucesso');
              setMessageStyle('border border-green-700 bg-green-500 shadow-lg shadow-green-500/50 rounded text-green-200 text-center w-full')
        }, (err) => {
            console.log('error ', err)
        })
      }

    return (
        <>
            <form onSubmit={handleSubmit(sendEmail)}>
                <div className='md:grid grid-cols-2 gap-4'>
                    <input 
                    className={inputStyle}
                    placeholder={i18n.t('formContact.name')}
                    {...register("name", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}/>
                
                    <input 
                    className={inputStyle}
                    placeholder={i18n.t('formContact.email')}
                    {...register("email", { required: true })} />
                </div>

                    <textarea 
                    className={textarea}
                    rows="6"
                    placeholder={i18n.t('formContact.messageForm')}
                    {...register("message", { required: true })} />

                <div className="flex justify-center mt-5">
                    <span className={messageStyle}>{messageForm}</span>
                </div>

                <div className='flex justify-center mt-5'>
                    <button 
                    type='submit' 
                    className='bg-zinc-600 hover:bg-zinc-800 shadow-lg shadow-zinc-600/50 text-emerald-50 p-1 pl-12 pr-12 rounded'>{i18n.t('formContact.send')}</button>
                </div>
                
            </form>
        </>
    )
}