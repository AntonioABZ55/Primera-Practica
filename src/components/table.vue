<template>
    <div>
        <h2>Lista de usuarios</h2>
        <table class="tabla-usuarios">
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Telefono</th>
                <th>Correo</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(usuario, index) in users" :key="index">
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.apellidos }}</td>
                <td>{{ usuario.telefono }}</td>
                <td>{{ usuario.correo }}</td>
            </tr>
            </tbody>
        </table>
        </div>
</template>