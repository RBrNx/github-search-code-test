import { mount } from '@vue/test-utils'
import SelectDropdown from '../../src/components/SelectDropdown.vue';

describe('SelectDropdown.vue', () => {
    const wrapper = mount(SelectDropdown, {
        propsData: {
            options: ["A", "B", "C"],
        }
    });

    it("Should default to option[0]", () => {
        expect(wrapper.vm.selectValue).toBe("A");
    });
})