import AppHeader from "@/components/AppHeader";
//need to mount the component before testing it
import { mount } from "@vue/test-utils";

//block of tests, aka a "test suit"
describe("AppHeader", () => {
  //describe the test, and a callback function
  test("This is a sanity test:)", () => {
    expect(true).toBe(true);
  });
  test("If user is not logged in, do not show logout button", () => {
    //first create a wrapper to mount the component and access to functions for testing
    const wrapper = mount(AppHeader);
    //use find() to find element
    expect(wrapper.find("button").isVisible()).toBe(false);
  });
  test("If user is logged in, show logout button", async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loggedIn: true }); // setting our data value
    //setData() triggers DOM updates, use async/await to test asynchronously with $nextTick()
    await wrapper.vm.$nextTick();
    expect(wrapper.find("button").isVisible()).toBe(true);
  });
});
