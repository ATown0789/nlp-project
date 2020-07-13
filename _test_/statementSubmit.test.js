//import file to test
import { statementSubmit } from '../src/client/js/statementSubmit.js'

//test if the checkSubmit function is defined
describe("Testing checkSubmit", () => {
			test("Testing the statementSubmit() function is defined", () => {
				expect(statementSubmit).toBeDefined();
			})
	});