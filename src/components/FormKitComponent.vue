

<script>

export default {

    data() {
        return {
            submitted: false,
            formData: {},
        }
    },
    methods:{
       submitHandler(){

            console.log(this.formData);
            // Let's pretend this is an ajax request:
            //await new Promise((r) => setTimeout(r, 1000));
            this.submitted = true;
        }
    }
}
// const submitted = ref(false)
// const formData = ref({})
// const submitHandler = async () => {

//     console.log(formData);
//   // Let's pretend this is an ajax request:
//   await new Promise((r) => setTimeout(r, 1000))
//   submitted.value = true
// }
</script>


<template>


    <FormKit
        type="form"
        v-model="formData"
        :form-class="submitted ? 'hide' : 'show'"
        submit-label="Register"
        @submit="submitHandler"
        
    >
            <h1>Register!</h1><hr /><br/>
            
            <FormKit
                type="text"
                name="name"
                label="Your name"
                placeholder="Jane Doe"
                help="What do people call you?"
                validation="required"
            />
            <FormKit
                type="text"
                name="phone"
                label="Your phone number"
                placeholder="07-1232-789"
                help="whqats your mobile number"
                validation="required|number"
            />

            <FormKit
                type="text"
                name="email"
                label="Your email"
                placeholder="jane@example.com"
                help="What email should we use?"
                validation="required|email"
            />

            <FormKit
                type="file"
                label="Video Upload"
                accept=".MP4,.MOV,.WMV,.AVI,.FLV,.WEBM "
                help="Select your video to upload."
                validation="required"
            
            />

    </FormKit>
  <div v-if="submitted">
    <h2>Submission successful!</h2>
  </div>
  <pre wrap>{{ formData }}</pre>
</template>










<style>

#app {

  margin: 2rem auto;
  max-width: 29rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

</style>