const search_component = require("./search-component")
// @ponicode
describe("search", () => {
    let inst

    beforeEach(() => {
        inst = new search_component.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.search({ target: { value: -10 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.search({ target: { value: 0 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.search({ target: { value: 1 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.search({ target: { value: 10 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.search({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.search(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
