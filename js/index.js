function myFunction() {
    var element = document.getElementById("cody").classList;
    var subelement = document.getElementById("arm").classList;
    var background = document.getElementById("background").classList;
    if (element.contains("cody")) {
      element.remove("cody");
      element.add("kb");
      subelement.remove("cody");
      subelement.add("kb");
      background.remove("cody");
      background.add("kb");
    } else {
      element.add("cody");
      element.remove("kb");
      subelement.add("cody");
      subelement.remove("kb");
      background.add("cody");
      background.remove("kb");
    }
  }

