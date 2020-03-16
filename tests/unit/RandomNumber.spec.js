import RandomNumber from "@/components/RandomNumber";
import { mount } from "@vue/test-utils";

describe("RandomNumber", () => {
  test("by default, random number should be 0", () => {
    const wrapper = mount(RandomNumber);
    expect(wrapper.html()).toContain("<span>0</span>");
  });
  test("if click button, get random number between 0-10", async () => {
    const wrapper = mount(RandomNumber);
    //trigger click event on the button
    wrapper.find("button").trigger("click");

    // Wait for any reactivity changes to appear in the DOM
    await wrapper.vm.$nextTick();

    //get the number in span, and parse it to integer
    const randomNum = parseInt(wrapper.find("span").element.textContent);

    expect(randomNum).toBeGreaterThanOrEqual(1);
    expect(randomNum).toBeLessThanOrEqual(10);
  });
  test("if given min=200, max=300, get random number between 200-300", async () => {
    //set props data here
    const wrapper = mount(RandomNumber, {
      propsData: {
        min: 200,
        max: 300
      }
    });
    //trigger click event on the button
    wrapper.find("button").trigger("click");

    // Wait for any reactivity changes to appear in the DOM
    await wrapper.vm.$nextTick();

    //get the number in span, and parse it to integer
    const randomNum = parseInt(wrapper.find("span").element.textContent);

    expect(randomNum).toBeGreaterThanOrEqual(200);
    expect(randomNum).toBeLessThanOrEqual(300);
  });
});
