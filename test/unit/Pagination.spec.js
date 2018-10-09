import { mount } from '@vue/test-utils'
import Pagination from '../../src/components/Pagination';

describe('Pagination.vue', () => {
    const wrapper = mount(Pagination, {
        propsData: {
            totalPages: 10,
            currentPage: 1,
        }
    });

    it("First Page should be Active", () => {
        expect(wrapper.vm.isFirstPageActive).toBeTruthy();
    });

    it("Last Page should not be Active", () => {
        expect(wrapper.vm.isLastPageActive).toBeFalsy();
    });

    it("Should emit First and Last page when corresponding Button is clicked", () => {
        const lastButton = wrapper.find(".paginationLink.last button");
        lastButton.trigger("click");
        expect(wrapper.emitted().pageChanged[0]).toEqual([wrapper.vm.totalPages]);

        wrapper.setProps({ currentPage: 10 });

        const firstButton = wrapper.find(".paginationLink.first button");
        firstButton.trigger("click");
        expect(wrapper.emitted().pageChanged[1]).toEqual([1]);
    })
})