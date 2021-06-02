/* let iconX = 200;
let iconY = 200;
let iconSize = 48;
let iconFocus = false;

let iconDraw = () => {
  if (mouseX < iconX + iconSize / 2) {
    fill(color(255, 0, 0));
  } else {
    fill(color(255));
  }
  
  let _icon = circle(iconX, iconY, iconSize, iconSize);
};

function setup() {
  createCanvas(200, 200);
}

function draw() {
  iconDraw();
} */

let $lastClickedDesktopIcon = null;

$(".welcome-window").draggable({ handle: ".title-bar" });
$(`.welcome-window button[aria-label="Close"]`).click(function() {
  $(this).parents().eq(2).remove();
});

$(".folder").draggable({ handle: "button" });

/*
$(".folder").click(function() {
  $(this).find("span").css({
    "background-color": "#000080",
    // "outline": "1px dotted #000000",
    // "outline-offset": "-4px",
    // "padding": "5px 7px"
  });
  $lastClickedDesktopIcon = $(this);
})

$("body > *").click(function() {
  console.log($lastClickedDesktopIcon);
  if ($lastClickedDesktopIcon && $(this) != $lastClickedDesktopIcon) {
    $lastClickedDesktopIcon.find("span").css({
      "background-color": "none",
      "outline": "1px dotted #000000",
      "outline-offset": "-4px",
      "padding": "5px 7px"
    });
  }
})
*/