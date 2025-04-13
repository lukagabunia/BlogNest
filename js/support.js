// Accordion functionality, with arrow
const items = $(".accordion-item");

items.each(function () {
  const item = $(this);
  const header = item.find(".accordion-header");
  const body = item.find(".accordion-body");

  header.click(function () {
    item.toggleClass("active");
    body.toggleClass("active");
  });
});
