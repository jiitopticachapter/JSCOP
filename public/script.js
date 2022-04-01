const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});


let tabFocus = 0;
function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;
    
    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }
    
    if (e.keyCode === keydownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }
    
    if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
    }
    
    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}


function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    
    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
        
    targetTab.setAttribute("aria-selected", true);
    
    hideContent(mainContainer, '[role="tabpanel"]');
    showContent(mainContainer, [`#${targetPanel}`]);
    
    hideContent(mainContainer, 'picture');
    showContent(mainContainer, [`#${targetImage}`]);
}

function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
     parent.querySelector(content).removeAttribute('hidden');
}

(function () {
  ShootingStar = function (id) {
    this.n = 0;
    this.m = 0;
    this.defaultOptions = {
      velocity: 8,
      starSize: 10,
      life: 300,
      beamSize: 400,
      dir: -1
    };
    this.options = {};
    id = typeof id != "undefined" ? id : "";
    this.capa = $(id).lenght > 0 ? "body" : id;
    this.wW = $(this.capa).innerWidth();
    this.hW = $(this.capa).innerHeight();
  };

  ShootingStar.prototype.addBeamPart = function (x, y) {
    this.n++;
    var name = this.getRandom(100, 1);
    $("#star" + name).remove();
    $(this.capa).append("<div id='star" + name + "'></div>");
    $("#star" + name).append(
      "<div id='haz" +
        this.n +
        "' class='haz' style='position:absolute; color:#FF0; width:10px; height:10px; font-weight:bold; font-size:" +
        this.options.starSize +
        "px'>·</div>"
    );
    if (this.n > 1)
      $("#haz" + (this.n - 1)).css({
        color: "rgba(255,255,255,0.5)"
      });
    $("#haz" + this.n).css({
      top: y + this.n,
      left: x + this.n * this.options.dir
    });
  };

  ShootingStar.prototype.delTrozoHaz = function () {
    this.m++;
    $("#haz" + this.m).animate(
      {
        opacity: 0
      },
      75
    );
    if (this.m >= this.options.beamSize) {
      $("#ShootingStarParams").fadeOut("slow");
    }
  };

  ShootingStar.prototype.getRandom = function (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  ShootingStar.prototype.toType = function (obj) {
    if (typeof obj === "undefined") {
      return "undefined"; /* consider: typeof null === object */
    }
    if (obj === null) {
      return "null";
    }
    var type =
      Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1] || "";
    switch (type) {
      case "Number":
        if (isNaN(obj)) {
          return "nan";
        } else {
          return "number";
        }
      case "String":
      case "Boolean":
      case "Array":
      case "Date":
      case "RegExp":
      case "Function":
        return type.toLowerCase();
    }
    if (typeof obj === "object") {
      return "object";
    }
    return undefined;
  };

  ShootingStar.prototype.launchStar = function (options) {
    if (this.toType(options) != "object") {
      options = {};
    }
    this.options = $.extend({}, this.defaultOptions, options);
    this.n = 0;
    this.m = 0;
    var i = 0,
      l = this.options.beamSize,
      x = this.getRandom(this.wW - this.options.beamSize - 100, 100),
      y = this.getRandom(this.hW - this.options.beamSize - 100, 100),
      self = this;
    for (; i < l; i++) {
      setTimeout(function () {
        self.addBeamPart(x, y);
      }, self.options.life + i * self.options.velocity);
    }
    for (i = 0; i < l; i++) {
      setTimeout(function () {
        self.delTrozoHaz();
      }, self.options.beamSize + i * self.options.velocity);
    }
    $("#ShootingStarParams").html(
      "Launching shooting star. PARAMS: wW: " +
        this.wW +
        " - hW: " +
        this.hW +
        " - life: " +
        this.options.life +
        " - beamSize: " +
        this.options.beamSize +
        " - velocity: " +
        this.options.velocity
    );
    $("#ShootingStarParams").fadeIn("slow");
  };

  ShootingStar.prototype.launch = function (everyTime) {
    if (this.toType(everyTime) != "number") {
      everyTime = 10;
    }
    everyTime = everyTime * 1000;
    this.launchStar();
    var self = this;
    setInterval(function () {
      var options = {
        dir: self.getRandom(1, 0) ? 1 : -1,
        life: self.getRandom(400, 100),
        beamSize: self.getRandom(700, 400),
        velocity: self.getRandom(10, 4)
      };
      self.launchStar(options);
    }, everyTime);
  };
})();

$(document).ready(function () {
  var shootingStarObj = new ShootingStar("body");
  shootingStarObj.launch();
});
