import React from "react";
import { render } from "@testing-library/react";
import Square from "./index"
import '@testing-library/jest-dom';


describe('Vou realizar alguns testes com o Square', () => {

    it('verifica se o width do square tem 100px', () =>{
        const { container }  = render(<Square />)
                 

        expect(container.firstChild).toHaveStyle('width: 200px')
    }

    )

})