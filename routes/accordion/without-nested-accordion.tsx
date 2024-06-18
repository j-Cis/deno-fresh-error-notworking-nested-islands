import { useSignal } from "@preact/signals";
import { asset } from "@fresh/core/runtime";
import define from "$utils/fresh.ts";
import Layout from "$components/Layout.tsx";
import AccordionItem from "$islands/AccordionItem.tsx";
import AccordionContainer from "$components/AccordionContainer.tsx";

export default define.page(function PageAccordionWithoutNestedAccordion(/*{url}*/) {

  const showItem1 = useSignal(true);
  const showItem2 = useSignal(false);
  const showItem3 = useSignal(false);

  //console.log(url.pathname)
  return (
    <Layout navShow={true} navActive="/accordion" asideShow={true} aside={
        <AccordionContainer>
          <AccordionItem label="Item 1" labelIsLink={true} href="" show={showItem1}>
            <div>
                  <strong>This is the first item's accordion body.</strong> Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                  rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                  ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
                  ante. Pellentesque at odio euismod, mattis urna ac, accumsan
                  metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
                  Curabitur non sollicitudin neque.
            </div>
          </AccordionItem>
          <AccordionItem label="Item 2" show={showItem2}>
            <div>
                  <strong>This is the second item's accordion body.</strong> Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                  rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                  ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
                  ante. Pellentesque at odio euismod, mattis urna ac, accumsan
                  metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
                  Curabitur non sollicitudin neque.
            </div>
          </AccordionItem>
          <AccordionItem label="Item 3" show={showItem3}>
            <div>
                  <strong>This is the third item's accordion body.</strong> Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                  rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                  ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
                  ante. Pellentesque at odio euismod, mattis urna ac, accumsan
                  metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
                  Curabitur non sollicitudin neque.
            </div>
          </AccordionItem>
      </AccordionContainer>
    }>
      <div>
      <img
            class="my-6"
            src={asset("/imgs/AccordionWithoutNestedAccordion.jpg")}
            alt=""
          />
      </div>
    </Layout>
  );
});




