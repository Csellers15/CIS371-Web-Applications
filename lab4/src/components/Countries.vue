<template>
  <div>
    <!-- Replace "My" at line 4 with your name -->
    <h2>My Firebase Experiment in VueJS</h2>
      <table id="tbl">
        <tr>
          <th> Name </th>
          <th> Region </th>
        </tr>

        <tr v-for="c in countryData" v-bind:key="c.id">
          <td> {{c.name}} </td>
          <td> {{c.region}} </td>
          <td> <button v-on:click="removeMe(c.fbKey)"> Delete </button> </td>
        </tr>
      </table>

      <form id="input">
        <label for="cname"> Name </label>
        <input id ="cname" type="text" v-model="ctryName"/>

        <label for="code"> Code </label>
        <input id ="code" type="text" v-model="ctryCode"/>

        <label for="capital"> Capital </label>
        <input id ="capital" type="text" v-model="ctryCapital"/>

        <label for="region"> Region </label>
        <input id ="region" type="text" v-model="ctryRegion"/>

        <label for="population"> Population </label>
        <input id ="population" type="text" v-model="ctryPop"/>

        <button id="submit" v-on:click="addData()"> Submit</button>
      </form>
      
  </div>
</template>

<script>
  /* the .js suffix is optional */
  import { MYDB } from "../myFirebaseInit";

  export default {
    data() {
        return {
            countryData: [],
            ctryName : "",
            ctryCode : "",
            ctryCapital : "",
            ctryRegion : "",
            ctryPop : 0
        };
    },
    
    methods: {
        dataHandler(snapshot) {
          this.countryData.push({fbKey: snapshot.key, ...snapshot.val()});
        }, 
        removeMe(aKey){
          console.log("About to remove one record from Firebase ", aKey);
          this.countryData.splice(this.countryData.indexOf(aKey), 1);
        },

        addData(){
          MYDB.ref("countries").push().set({
            name: this.ctryName,
            code: this.ctryCode,
            capital: this.ctryCapital,
            population: this.ctryPop,
            region: this.ctryRegion
          });
        }
    },
    mounted() {
        MYDB.ref("countries").on("child_added", this.dataHandler);
    },
    beforeDestroy() {
      console.log("About to be destroyed", this);
      MYDB.ref("countries").off("child_added", this.dataHandler);
    }
  };
</script>

<style scoped>

form {
  display: grid;
}

#submit {
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: end;
}
</style>
