<script setup>
import usePropiedades from "@/composables/usePropiedades";
import { propertyPrice } from "@/helpers";
const { propiedadesCollection, deleteItem } = usePropiedades();
</script>

<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Admin Panel</h2>
  <div class="btn-new-property">
    <v-btn color="blue" variant="flat" :to="{ name: 'nueva-propiedad' }">
      New Property
    </v-btn>
  </div>

  <v-card class="mx-auto mt-10" flat>
    <v-list class="cards">
      <v-list-item
        class="card-mobile"
        v-for="propiedad in propiedadesCollection"
        :key="propiedad.id"
      >
        <template v-slot:prepend>
          <v-list-item-media :start="true">
            <img width="180" :src="propiedad.imagen" />
          </v-list-item-media>
        </template>

        <v-list-item-title> {{ propiedad.titulo }} </v-list-item-title>
        <v-list-item-subtitle>
          {{ propertyPrice(propiedad.precio) }}
        </v-list-item-subtitle>

        <template v-slot:append>
          <div class="btn-card-container">
            <v-btn
              color="info"
              flat
              block
              class="mr-2"
              :to="{ name: 'editar-propiedad', params: { id: propiedad.id } }"
            >
              Edit
            </v-btn>

            <v-btn
              color="red-darken-3"
              flat
              block
              @click="deleteItem(propiedad.id, propiedad.imagen)"
            >
              Delete
            </v-btn>
          </div>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped>
@media (max-width: 600px) {
  .btn-new-property {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 600px) {
  .card-mobile {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
}

.btn-card-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 600px) {
  .btn-card-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
