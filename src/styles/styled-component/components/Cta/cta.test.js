import React from "react";
import { render } from "@testing-library/react";
import Cta from ".";
import '@testing-library/jest-dom';

describe('I will do some tests with Cta', () => {
    it('verify width of cta', () => {
        const { container } = render(<Cta />)

        expect(container.firstChild).toHaveStyle('width: 1440px')
    })
}) 