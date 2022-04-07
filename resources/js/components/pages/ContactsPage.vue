<template>
  <div class="container my-3">
    <h1>Contact Us</h1>
    <section id="contact-form">
      <!-- Email -->
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <!-- Text Area -->
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea
          v-model="form.message"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="9"
        ></textarea>
        <small id="emailHelp" class="form-text text-muted"
          >Type here your text message.</small
        >
      </div>
      <!-- Send Button -->
      <div class="d-flex justify-content-end">
        <button @click="sendForm" type="submit" class="btn btn-primary">
          Send
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactsPage",
  data() {
    return {
      form: {
        email: "",
        message: "",
      },
    };
  },
  methods: {
    sendForm() {
      axios
        .post("http://localhost:8000/api/messages", this.form)
        .then((res) => {
          this.form.email = "";
          this.form.message = "";
        })
        .catch((err) => {})
        .then(() => {});
    },
  },
};
</script>

<style>
</style>