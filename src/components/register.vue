<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default{
  setup() {
    const router = useRouter();
  },
    data() {
        return {
        nombre: "",
        invalidnombre:false,
        apellidos: "",
        invalidapellidos:false,
        telefono: "",
        invalidtelefono:false,
        correo: "",
        invalidcorreo:false,
        contraseña:"",
        invalidcontraseña:false,
        users:[]
        }
    },
    methods: {
        guardarDatos() {
        const isvalid= this.valditedata()
        console.log("Datos guardados:");
        console.log("Nombre:", this.nombre);
        console.log("Apellido:", this.apellidos);
        console.log("Teléfono:", this.telefono);
        console.log("Correo:", this.correo);
        console.log("Contraseña:", this.contraseña);
        const usuario = {
            nombre: this.nombre,
            apellidos: this.apellidos,
            telefono: this.telefono,
            correo: this.correo
        };
        
        this.nombre = "";
        this.apellidos = "";
        this.telefono = "";
        this.correo = "";
        this.contraseña = "";
        if(isvalid){
            console.log('Resgistrado')
            this.users.push(usuario);
            this.$router.push({path:'/inicio'});
        }
        else{
            console.log('Error')
        }
        },
        valditedata() {
        let isvalid= true
        if(this.nombre === '' ){
            isvalid=false
            this.invalidnombre=true
        }
        if(this.apellidos === '' ){
            isvalid=false
            this.invalidapellidos=true
        }
        if(this.telefono === '' ){
            isvalid=false
            this.invalidtelefono=true
        }
        if(this.correo === '' ){
            isvalid=false
            this.invalidcorreo=true
        }
        if(this.contraseña === '' ){
            isvalid=false
            this.invalidcontraseña=true
        }
        return isvalid
        }
    }
}
</script>
<template>
    <div>
        <div class="form">
        <h1>Registro</h1>
        <form @submit.prevent="guardarDatos">
            <label for="">Nombre</label>
            <input type="text" v-model="nombre">
            <p v-if="invalidnombre" class="error">El campo nombre es requerido</p>
            <label for="">Apellidos</label>
            <input type="text" v-model="apellidos">
            <p v-if="invalidapellidos" class="error">El campo apellidos es requerido</p>
            <label for="">Telefono</label>
            <input type="text" v-model="telefono">
            <p v-if="invalidtelefono" class="error">El campo telefono es requerido</p>
            <label for="">Correo</label>
            <input type="email" v-model="correo">
            <p v-if="invalidcorreo" class="error">El campo correo es requerido</p>
            <label for="">Contraseña</label>
            <input type="password" v-model="contraseña" >
            <p v-if="invalidcontraseña" class="error">El campo contraseña es requerido</p>
            <button type="submit">Registrar</button>
            
        </form>
        </div>
  </div> 
</template>

<style scoped>
.form {
  width: 50%;
  margin: 40px auto;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  align-content: center;
}

/* Estilos para los campos de texto */
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
/* Estilos para los botones */
button[type="submit"] {
  width: 100%;
  height: 40px;
  background-color: #4CAF50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}

/* Estilos para los errores */
.error {
  color: #f00;
  font-size: 14px;
  margin-bottom: 10px;
}

/* Estilos para los campos obligatorios */
.obligatorio {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}

/* Estilos para los campos con foco */
input:focus {
  border-color: #4CAF50;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Estilos para los campos con error */
input.error {
  border-color: #f00;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.tabla-usuarios {
  border-collapse: collapse;
  width: 100%;
}

.tabla-usuarios th, .tabla-usuarios td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.tabla-usuarios th {
  background-color: #242424;
}

.tabla-usuarios tr:hover {
  background-color: #4CAF50;
}
</style>