import $ from "jsr:@david/dax";
import labels from "./labels.json" with { type: "json" };

for (const label of labels) {
  await $`gh label create ${label.name} --description ${label.description} --color ${label.color}`;
}
