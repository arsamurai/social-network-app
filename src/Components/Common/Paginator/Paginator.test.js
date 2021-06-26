import React from 'react';
import { create } from 'react-test-renderer';
import Paginator from './Paginator';


describe("Paginator component tests", () => {
    test("Page count is 11, but it should be showed only 10", () => {
        const component = create(<Paginator totalUsersCount={11} pageSize={1} />);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    });
    
    test("If count of pages is more then 10, btn NEXT should be present", () => {
        const component = create(<Paginator totalUsersCount={11} pageSize={1} />);
        const root = component.root;
        let btn = root.findAllByType("button");
        expect(btn.length).toBe(1);
    })
});