<template>
    <div class="md:w-2/4 w-full mx-auto" id="contact">
        <p class="text-center text-5xl text-gray-700">Contato</p>

        <div class="bg-green-700 text-white p-2 rounded mt-2" v-if="showMessagesuccess">
            <p>
                <i class="fa-solid fa-check"></i> 
                {{ successEmail }}
            </p>
        </div>

        <div class="bg-yellow-500 text-white p-2 rounded mt-2" v-if="showMessageError">
            <p>
                <i class="fa-solid fa-triangle-exclamation"></i> 
                {{ errorEmail }}
            </p>
        </div>
        
        <div class="border rounded p-5 mt-4 shadow-lg">
            <div class="md:flex justify-center md:p-5">
                <div class="md:mr-4 mb-5 md:mb-0">
                    <label>Nome:</label>
                    <input class="w-full border rounded shadow-lg focus:outline-none pl-2 border-gray-300 text-gray-700 p-1" v-model="name" />
                </div>
                <div class="mb-5 md:mb-0">
                    <label>E-mail:</label>
                    <input class="w-full border rounded shadow-lg focus:outline-none pl-2 border-gray-300 text-gray-700 p-1" v-model="email" />
                </div>
            </div>
            <div class="flex justify-center">
                <textarea v-model="message" cols="50" rows="10" class="border rounded shadow-lg focus:outline-none pl-2 border-gray-300 text-gray-700 p-1" placeholder="Messagem:"></textarea>
            </div>
            <div class="flex justify-center mt-4">
                <button type="submit" class="bg-purple-950 hover:bg-purple-900 text-white py-1 rounded px-8" @click="sendEmail">
                    <i class="fa-solid fa-circle-notch fa-spin mr-2" v-if="loading"></i>
                    <span v-if="loading">Enviando</span>
                    <span v-else>Enviar</span>
                </button>
            </div>
        </div>
      
    </div>
</template>
<script>
import emailjs from 'emailjs-com';

export default {
    name: 'ContactName',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      loading: false,
      successEmail: '',
      errorEmail: '',
      showMessageError: false,
      showMessagesuccess: false
    };
  },
  methods: {
    sendEmail() {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (this.name.trim() === '' || !nameRegex.test(this.name)) {
        this.showMessagesuccess = false;
        this.errorEmail = 'Por favor, insira um nome válido contendo apenas letras e espaços.';
        this.showMessageError = true;
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.showMessagesuccess = false;
        this.errorEmail = 'Por favor, insira um endereço de e-mail válido.';
        this.showMessageError = true;
        return;
      }

      if (this.message.trim() === '') {
        this.showMessagesuccess = false;
        this.errorEmail = 'Por favor, insira uma mensagem.';
        this.showMessageError = true;
        return;
      }
      
      this.loading = true;
      const templateParams = {
        from_name: this.name,
        email: this.email,
        message: this.message,
      };

      emailjs.send(
          'service_gfhlj2g',
          'template_kyxq1cw',
          templateParams,
          'x624sYAHViDpDFNqx'
        ).then(() => {
          this.loading = false;
          this.showMessageError = false
          this.showMessagesuccess = true;
          this.successEmail = 'E-mail enviado com sucesso!';
        }).catch(() => {
          this.loading = false;
          alert('Ocorreu um erro ao enviar o e-mail');
        });

      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>