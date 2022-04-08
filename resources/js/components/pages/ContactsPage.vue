<template>
  <div class="container my-3">
    <Loader v-if="isLoading" />
    <h1>Contact Us</h1>
    <section id="contact-form">
      <!-- Alert -->
      <Alert
        v-if="alertMessage || hasErrors"
        @on-alert-close="(alertMessage = ''), (errors = {})"
        dismissable="true"
        :type="hasErrors ? 'danger' : 'success'"
      >
        <div v-if="alertMessage">{{ alertMessage }}</div>
        <ul v-if="hasErrors">
          <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
        </ul>
      </Alert>
      <!-- Email -->
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          id="email"
          aria-describedby="emailHelp"
        />
        <div v-if="errors.email" class="invalid-feedback">
          {{ errors.email }}
        </div>
        <small v-else id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <!-- Text Area -->
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea
          v-model="form.message"
          class="form-control"
          :class="{ 'is-invalid': errors.message }"
          id="exampleFormControlTextarea1"
          rows="9"
        ></textarea>
        <div v-if="errors.message" class="invalid-feedback">
          {{ errors.message }}
        </div>
        <small v-else id="emailHelp" class="form-text text-muted"
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
import Loader from "../Loader.vue";
import Alert from "../Alert.vue";
import { isEmpty } from "lodash";

export default {
  name: "ContactsPage",
  components: {
    Loader,
    Alert,
  },
  data() {
    return {
      form: {
        email: "",
        message: "",
      },
      errors: {},
      isLoading: false,
      isError: false,
      alertMessage: "",
    };
  },
  methods: {
    validateForm() {
      const errors = {};
      if (!this.form.email.trim())
        errors.email = "The email field is required.";
      if (!this.form.message.trim())
        errors.message = "The message field is required.";

      if (
        this.form.email &&
        !this.form.email.match(
          /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/
        )
      )
        errors.email = "The email must be a valid email address.";

      this.errors = errors;
    },
    sendForm() {
      this.validateForm();

      if (!this.hasErrors) {
        this.isLoading = true;
        axios
          .post("http://localhost:8000/api/messages", this.form)
          .then((res) => {
            this.form.email = "";
            this.form.message = "";
            this.alertMessage = "Your message has been successfully sent";
          })
          .catch((err) => {
            console.log(err.response.status);
            this.errors = {
              error: "An error has occurred",
            };
          })
          .then(() => {
            this.isLoading = false;
          });
      }
    },
  },
  computed: {
    hasErrors() {
      return !isEmpty(this.errors);
    },
  },
};
</script>

<style>
</style>