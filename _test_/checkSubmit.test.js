//import file to test
import { checkSubmit } from '../src/client/js/checkSubmit.js'

//test if the checkSubmit function is defined
describe("Testing checkSubmit", () => {
			test("Testing the checkSubmit() function is defined", () => {
				expect(checkSubmit).toBeDefined();
			})
	});