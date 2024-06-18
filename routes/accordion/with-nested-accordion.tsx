import { useSignal } from "@preact/signals";
import { asset } from "@fresh/core/runtime";
import define from "$utils/fresh.ts";
import Layout from "$components/Layout.tsx";
import AccordionItem from "$islands/AccordionItem.tsx";
import AccordionContainer from "$components/AccordionContainer.tsx";

export default define.page(function PageAccordionWithNestedAccordion(/*{url}*/) {
  
  const showItem1 = useSignal(true);
  const showItem1A = useSignal(true);
  const showItem1B = useSignal(false);
  const showItem1C = useSignal(false);
  const showItem2 = useSignal(false);
  const showItem2A = useSignal(false);
  const showItem2B = useSignal(false);
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
            <AccordionContainer>
              <AccordionItem label="Item 1-A"  show={showItem1A}>
                <div>
                      <strong>This is the "A" item's accordion body inside first item body</strong> Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                      rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                      ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
                      ante. Pellentesque at odio euismod, mattis urna ac, accumsan
                      metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
                      Curabitur non sollicitudin neque.
                </div>
              </AccordionItem>
              <AccordionItem label="Item 1-B" labelIsLink={true} href="" show={showItem1B}>
                <div>
                      <strong>This is the "B" item's accordion body inside first item body</strong> Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                      rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                      ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
                      ante. Pellentesque at odio euismod, mattis urna ac, accumsan
                      metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
                      Curabitur non sollicitudin neque.
                </div>
              </AccordionItem>
              <AccordionItem label="Item 1-C" show={showItem1C}>
                <div>
                      <strong>This is the "C" item's accordion body inside first item body</strong> Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                      rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                      ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
                      ante. Pellentesque at odio euismod, mattis urna ac, accumsan
                      metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
                      Curabitur non sollicitudin neque.
                </div>
              </AccordionItem>
            </AccordionContainer>
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
            
            <AccordionContainer>
              <AccordionItem label="Item 2-A"  show={showItem2A}>
                <div>
                      <strong>This is the "A" item's accordion body inside second item body</strong> Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                      rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                      ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
                      ante. Pellentesque at odio euismod, mattis urna ac, accumsan
                      metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
                      Curabitur non sollicitudin neque.
                </div>
              </AccordionItem>
              <AccordionItem label="Item 2-B" labelIsLink={true} href="" show={showItem2B}>
                <div>
                      <strong>This is the "B" item's accordion body inside decond item body</strong> Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
                      rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
                      ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
                      ante. Pellentesque at odio euismod, mattis urna ac, accumsan
                      metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
                      Curabitur non sollicitudin neque.
                </div>
              </AccordionItem>
            </AccordionContainer>
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
            src={asset("/imgs/AccordionWithNestedAccordion.jpg")}
            alt=""
          />
      </div>
    </Layout>
  );
});




