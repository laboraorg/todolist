import { shallowMount } from "@vue/test-utils";
import Hello from "@/components/Hello.vue";

describe("Hello labora", () => {
  it("renders props.msg when passed", () => {
    const msg = "hello labora";
    const wrapper = shallowMount(Hello, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
