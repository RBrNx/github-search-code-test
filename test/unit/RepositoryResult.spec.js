import { mount } from '@vue/test-utils'
import RepositoryResult from '../../src/components/RepositoryResult';
import moment from "moment";

describe('RepositoryResult.vue', () => {
    const repoInfo = {
        name: "Testing",
        html_url: "http://testing.com",
        description: "Test Description",
        language: "Test Language",
        stargazers_count: 999,
        forks_count: 111,
        updated_at: "2018-01-01T12:00:00Z",
        owner: {
            avatar_url: "http://testing.com/avatar.png",
            login: "TestUser",
        }
    }
    const wrapper = mount(RepositoryResult, {
        propsData: {
            repoInformation: repoInfo
        }
    });

    it("Should render the Owners name", () => {
        expect(wrapper.vm.ownerName).toBe(repoInfo.owner.login);

        const name = wrapper.find(".ownerName").text();
        expect(name).toBe(repoInfo.owner.login);
    })

    it("Should set the src of the avatar img", () => {
        expect(wrapper.vm.avatarLink).toBe(repoInfo.owner.avatar_url);

        const image = wrapper.find(".avatar img");
        expect(image.attributes("src")).toBe(repoInfo.owner.avatar_url);
    })

    it("Should render the name of the Repository", () => {
        expect(wrapper.vm.repoName).toBe(repoInfo.name);

        const name = wrapper.find(".repoName").text();
        expect(name).toBe(repoInfo.name);
    })

    it("Should set the HREF of the result", () => {
        expect(wrapper.vm.repoLink).toBe(repoInfo.html_url);

        const href = wrapper.find(".result").attributes("href");
        expect(href).toBe(repoInfo.html_url);
    })

    it("Should render the description of the Repository", () => {
        expect(wrapper.vm.repoDesc).toBe(repoInfo.description);

        const desc = wrapper.find(".repositoryDesc").text();
        expect(desc).toBe(repoInfo.description);
    })

    it("Should render the language of the Repository", () => {
        expect(wrapper.vm.language).toBe(repoInfo.language);

        const lang = wrapper.find(".language").text();
        expect(lang).toBe(repoInfo.language);
    })

    it("Should render the Stars of the Repository", () => {
        expect(wrapper.vm.starCount).toBe(repoInfo.stargazers_count);

        const stars = wrapper.find(".stars").text();
        expect(stars).toBe(repoInfo.stargazers_count.toString());
    })

    it("Should render the Forks of the Repository", () => {
        expect(wrapper.vm.forkCount).toBe(repoInfo.forks_count);

        const forks = wrapper.find(".forks").text();
        expect(forks).toBe(repoInfo.forks_count.toString());
    })

    it("Should render the Last Updated Time of the Repository", () => {
        expect(wrapper.vm.lastUpdated).toBe(moment(repoInfo.updated_at).format("MMM D, YYYY"));

        const forks = wrapper.find(".lastUpdated").text();
        expect(forks).toBe("Updated on " + moment(repoInfo.updated_at).format("MMM D, YYYY"));
    })
})