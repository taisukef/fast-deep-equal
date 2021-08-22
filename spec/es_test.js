import * as t from "https://deno.land/std/testing/asserts.ts";
import tests from "./tests_es.js";

for (const test of tests) {
  Deno.test(test.description, () => t.assertEquals(test.value1, test.value2));
}
