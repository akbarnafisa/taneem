<template>
  <div class="section-white">
    <div class="section-header">
      <informations :informations="informations">
        <breadcrumbs/>
      </informations>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import Informations from "@/components/Sections/Informations/Informations";
export default {
  components: {
    Informations,
    Breadcrumbs
  },
  data() {
    return {
      informations: [
        {
          title: "How does the Gordi Coffee Subscription work?",
          content:
            "Very easy. All you need to do is choose your package, click on the subscribe button and wait for our confirmation email. For example, if you choose the Blue package, you can expect to receive 2 (two) bags of freshly curated local and international coffee beans from Indonesian roasters for your shipment."
        },
        {
          title: "How much coffee will I get?",
          content:
            "The choice is yours. We provide an option of 100gr, 200gr, and to 500gr for each shipment. If you are interested to subscribe a package with more than 500gr of coffee beans for each shipment, dont hesitate to contact us!"
        },
        {
          title: "Can I choose a specific coffee for each shipment?",
          content:
            "The choice is yours. We provide an option of 100gr, 200gr, and to 500gr for each shipment. If you are interested to subscribe a package with more than 500gr of coffee beans for each shipment, dont hesitate to contact us!"
        },
        {
          title: "How often will I get my coffee?",
          content:
            "The choice is yours. We provide an option of 100gr, 200gr, and to 500gr for each shipment. If you are interested to subscribe a package with more than 500gr of coffee beans for each shipment, dont hesitate to contact us!"
        },
        {
          title: "How do I check my shipment?",
          content:
            "The choice is yours. We provide an option of 100gr, 200gr, and to 500gr for each shipment. If you are interested to subscribe a package with more than 500gr of coffee beans for each shipment, dont hesitate to contact us!"
        },
        {
          title: "What are your payment methods?",
          content:
            "The choice is yours. We provide an option of 100gr, 200gr, and to 500gr for each shipment. If you are interested to subscribe a package with more than 500gr of coffee beans for each shipment, dont hesitate to contact us!"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>