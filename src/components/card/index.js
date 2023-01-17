import BeeCard from "./card.vue";

BeeCard.install = Vue => {
  Vue.component(BeeCard.name, BeeCard);
}

export default BeeCard;
