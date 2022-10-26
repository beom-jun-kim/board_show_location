$(function () {
  let category_item = $(".xans-layout-boardinfo ul a");
  let itemLength = category_item.length;
  let thisBoardNo = $("#board_no").val();
  let activeIndex;

  for (let i = 0; i < itemLength; i++) {
    if (category_item[i].href.split("board_no=")[1] === thisBoardNo) {
      activeIndex = i;
    }
  }
  $(".xans-layout-boardinfo ul li a").eq(activeIndex).addClass("active");
});
