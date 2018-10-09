import { shallowMount } from '@vue/test-utils'
import Heading from '../../src/components/Heading';

describe('Heading.vue', () => {
    const wrapper = shallowMount(Heading, { stubs: { FontAwesomeIcon: true } });

    it("Query is blank by default", () => {
        expect(wrapper.vm.query).toBe("");
    })

    it("Should emit query value when button is clicked or enter is pressed", () => {
        wrapper.setData({ query: "Testing" });

        const button = wrapper.find(".searchButton");
        button.trigger("click");
        expect(wrapper.emitted().searchRepositories[0]).toEqual(["Testing", true]);

        const input = wrapper.find("#search");
        input.trigger("keydown.enter");
        expect(wrapper.emitted().searchRepositories[0]).toEqual(["Testing", true]);
    })
})