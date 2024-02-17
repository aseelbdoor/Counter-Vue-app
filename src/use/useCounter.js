import {
  ref,
  reactive,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onBeforeUpdate,
  onUpdated,
  nextTick,
} from "vue";

const counterData = reactive({
  counter: 0,
  title: "My Counter",
});

export function useCounter() {
  watch(
    () => counterData.counter, // the getter
    (newCount) => {
      if (newCount === 20) {
        alert("You've reached level 20!");
      }
    }
  );

  const oddOrEven = computed(() =>
    counterData.counter % 2 === 0 ? "even" : "odd"
  );

  const decreaseCounter = (number) => {
    // counter.value--;
    // counterData.counter--;
    counterData.counter -= number;
  };
  const increaseCounter = (number) => {
    // counter.value++;
    // counterData.counter++;
    counterData.counter += number;
    nextTick(() => {
      console.log("Do some thing when counter is updated in the dom..");
    });
  };

  return {
    counterData,
    oddOrEven,
    decreaseCounter,
    increaseCounter,
  };
}
