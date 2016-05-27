(function() {
var templates = {};
templates["addBadge.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
var t_2;
t_2 = "badges";
frame.set("activeNav", t_2);
if(!frame.parent) {
context.setVariable("activeNav", t_2);
context.addExport("activeNav");
}
output += "\n\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n  ";
output += context.getBlock("badgeNav")(env, context, frame, runtime);
output += "\n\n  <h3>Upload Badges</h3>\n  <p>If you have badges you've been awarded, you can upload them manually</p>\n  <form action=\"/backpack/badge\" method=\"post\" enctype=\"multipart/form-data\">\n    <fieldset>\n      <div class=\"clearfix\">\n        <input type=\"hidden\" name=\"_csrf\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "\"></input>\n        <input id=\"userBadge\" type=\"file\" name=\"userBadge\" accept=\"image/png,image/svg+xml\"></input>\n      </div>\n    </fieldset>\n    <div class=\"clearfix\">\n      <input class=\"btn btn-primary\" type=\"submit\" value=\"Upload\"></input>\n    </div>\n  </form>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_badgeNav(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "badgeNav", b_badgeNav, frame, runtime));
output += "\n    <p class=\"badge-nav\">\n      <span class=\"hide\">Show</span>\n      <a href=\"/\">Recent</a>\n      <span class=\"hide\">,</span>\n      <a href=\"/backpack/badges\">Everything</a>\n      <span class=\"hide\">or</span>\n      <a href=\"/backpack/add\" class=\"selected upload-badge\">Upload</a>\n      <span class=\"hide\">a new badge</span>\n    </p>\n  ";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_body: b_body,
b_badgeNav: b_badgeNav,
root: root
};

})();
templates["allBadges.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("badges.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
var t_2;
t_2 = "all";
frame.set("selectedBadgeTab", t_2);
if(!frame.parent) {
context.setVariable("selectedBadgeTab", t_2);
context.addExport("selectedBadgeTab");
}
output += "\n\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_afterBadgeItems(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "afterBadgeItems", b_afterBadgeItems, frame, runtime));
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_afterBadgeItems: b_afterBadgeItems,
root: root
};

})();
templates["backpack-connect.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
output += "\n";
output += "\n\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_head(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "head", b_head, frame, runtime));
output += "\n<style>\na.logout {\n  display: block;\n  padding-top: 20px;\n}\n</style>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n<h1><span class=\"client\">";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "clientDomain")), env.autoesc);
output += "</span> would like permission\n  to:</h1>\n\n";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "scopes");
frame.set("permissions", t_2);
if(!frame.parent) {
context.setVariable("permissions", t_2);
context.addExport("permissions");
}
output += "\n";
var includeTemplate = env.getTemplate("permissions.html");
output += includeTemplate.render(context.getVariables(), frame.push());
output += "\n\n";
if(!runtime.contextOrFrameLookup(context, frame, "user")) {
output += "\n\n<p>Want to create a Backpack?  \n  <a class=\"js-browserid-link\" href=\"#\">Sign up</a> to share your skills and interests, create badge collections, and more!</p>\n\n<a class=\"js-browserid-link\" href=\"#\">\n  <img src=\"https://browserid.org/i/sign_in_green.png\"/>\n</a>\n\n";
}
else {
output += "\n\n<form method=\"POST\" action=\"accept\">\n  <input name=\"_csrf\" type=\"hidden\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "\">\n  <input name=\"callback\" type=\"hidden\" value=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "callback")), env.autoesc);
output += "\">\n  <input name=\"scope\" type=\"hidden\" value=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "joinedScope")), env.autoesc);
output += "\">\n  <button class=\"btn btn-primary\" type=\"submit\">Grant permission</button>\n  <a class=\"btn\" href=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "denyCallback")), env.autoesc);
output += "\">Deny permission</a>\n  <a href=\"/backpack/signout\" class=\"logout\">\n    I am not <span class=\"email\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"attributes", env.autoesc)),"email", env.autoesc), env.autoesc);
output += "</span>.\n  </a>\n</form>\n";
}
output += "\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_scripts(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "scripts", b_scripts, frame, runtime));
output += "\n<script src=\"";
output += runtime.suppressValue((lineno = 41, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "getBrowserIdScriptUrl"), "getBrowserIdScriptUrl", [])), env.autoesc);
output += "\"></script>\n<script src=\"/js/jquery.min.js\"></script>\n<script>\n$(window).ready(function() {\n  var reloadPage = function() { window.location.reload(); };\n\n  $(document).ajaxError(function() {\n    alert(\"Sorry, an error occurred. Please try again later.\");\n  });\n  \n  $('a[href=\"/backpack/signout\"]').click(function() {\n    $.get($(this).attr(\"href\"), reloadPage);\n    return false;\n  });\n\n  $(\".js-browserid-link\").click(function() {\n    navigator.id.get(function(assertion) {\n      if (!assertion) return;\n      $.ajax({\n        url: '/backpack/authenticate',\n        type: 'POST',\n        dataType: 'json',\n        data: {assertion: assertion},\n        headers: {'X-CSRF-Token': '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "'},\n        success: reloadPage\n      });\n    });\n    return false;\n  });\n});\n</script>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_head: b_head,
b_body: b_body,
b_scripts: b_scripts,
root: root
};

})();
templates["backpack.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
var t_2;
t_2 = "collections";
frame.set("activeNav", t_2);
if(!frame.parent) {
context.setVariable("activeNav", t_2);
context.addExport("activeNav");
}
output += "\n\n";
output += "\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n\n<form style=\"display: none\" action=''>\n  <input type=\"hidden\" name=\"_csrf\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "\">\n</form>\n\n";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badges")),"length", env.autoesc)) {
output += "\n  ";
var includeTemplate = env.getTemplate("no-badges.html");
output += includeTemplate.render(context.getVariables(), frame.push());
output += "\n";
}
else {
output += "\n<div class=\"row\" style=\"position: relative;\">\n\n  <div class=\"span4\">\n    <div class=\"row\">\n      <div class=\"sticky span4\">\n        <hgroup class=\"separator\">\n          <h2>My Collections</h2>\n          Organize badges the way you want\n        </hgroup>\n        <div id=\"groups\" class=\"scroll span4\">\n          ";
frame = frame.push();
var t_4 = runtime.contextOrFrameLookup(context, frame, "groups");
if(t_4) {for(var t_3=0; t_3 < t_4.length; t_3++) {
var t_5 = t_4[t_3];
frame.set("group", t_5);
output += "\n          <div class='group' data-id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_5),"attributes", env.autoesc)),"id", env.autoesc), env.autoesc);
output += "\" data-url=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_5),"attributes", env.autoesc)),"url", env.autoesc), env.autoesc);
output += "\">\n            <input class='groupName' type='text' value='";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((t_5),"attributes", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "' style='display: block'>\n            <span class='icon delete'>&times;</span>\n            <span class='icon share' ";
if(!runtime.memberLookup((runtime.memberLookup((t_5),"attributes", env.autoesc)),"badgeObjects", env.autoesc)) {
output += "style='display: none'";
}
output += " title='Share this group'>5</span>\n            <span class='public'>\n              <label>\n                <input type='checkbox' class='js-privacy' ";
if(runtime.memberLookup((runtime.memberLookup((t_5),"attributes", env.autoesc)),"public", env.autoesc)) {
output += "checked";
}
output += ">\n                <span>public</span>\n              </label>\n            </span>\n\n            ";
frame = frame.push();
var t_7 = runtime.memberLookup((runtime.memberLookup((t_5),"attributes", env.autoesc)),"badgeObjects", env.autoesc);
if(t_7) {for(var t_6=0; t_6 < t_7.length; t_6++) {
var t_8 = t_7[t_6];
frame.set("badge", t_8);
output += "\n            <span draggable=\"true\" class=\"openbadge\" data-id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"attributes", env.autoesc)),"id", env.autoesc), env.autoesc);
output += "\" data-serialization=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((t_8),"serializedAttributes", env.autoesc)), env.autoesc);
output += "\">\n              <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"attributes", env.autoesc)),"imageUrl", env.autoesc), env.autoesc);
output += "\" width=\"64px\"/>\n            </span>\n            ";
}
}frame = frame.pop();
output += "\n          </div>\n          ";
}
}frame = frame.pop();
output += "\n\n          <div class='group isNew'>\n            <input class='groupName' type='text' value='New Collection'>\n            <span class='icon delete'>&times;</span>\n            <span class='icon share' title='share this group'>5</span>\n            <hgroup class=\"instructions\">\n              <h3>Drag a badge here</h3>\n              to create a Collection.\n            </hgroup>\n            <span class='public'>\n              <label>\n                <input type='checkbox' class='js-privacy'>\n                <span>public</span>\n              </label>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"span8 badge-area\">\n    <div class=\"row\">\n      <ul id=\"badges\" class=\"js-badges badge-list small-cards\">\n        ";
frame = frame.push();
var t_10 = runtime.contextOrFrameLookup(context, frame, "badges");
if(t_10) {for(var t_9=0; t_9 < t_10.length; t_9++) {
var t_11 = t_10[t_9];
frame.set("badge", t_11);
output += "\n          <li class=\"span3 openbadge-container\">\n            <div class=\"openbadge\" data-id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_11),"attributes", env.autoesc)),"id", env.autoesc), env.autoesc);
output += "\" data-serialization=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((t_11),"serializedAttributes", env.autoesc)), env.autoesc);
output += "\">\n              <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_11),"attributes", env.autoesc)),"imageUrl", env.autoesc), env.autoesc);
output += "\" width=\"64\">\n              <p class=\"title\" title=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_11),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "\">";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_11),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "</p>\n              <p class=\"issuer\">Issuer: ";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_11),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"issuer", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "</p>\n            </div>\n          </li>\n        ";
}
}frame = frame.pop();
output += "\n      </ul>\n    </div>\n  </div>\n\n</div>\n";
}
output += "\n\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_scripts(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "scripts", b_scripts, frame, runtime));
output += "\n\n<!-- third party -->\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"useCompiledTemplates", env.autoesc)) {
output += "\n  <script type=\"text/javascript\" src=\"/js/nunjucks-min.js\"></script>\n  <script type=\"text/javascript\" src=\"/js/nunjucks-templates.js\"></script>\n";
}
else {
output += "\n  <script type=\"text/javascript\" src=\"/js/nunjucks-dev.js\"></script>\n";
}
output += "\n<script type=\"text/javascript\" src=\"/js/underscore.js\"></script>\n<script type=\"text/javascript\" src=\"/js/backbone.js\"></script>\n<script type=\"text/javascript\" src=\"/vendor/bootstrap/js/bootstrap-alert.js\"></script>\n<script type=\"text/javascript\" src=\"/vendor/bootstrap/js/bootstrap-tooltip.js\"></script>\n<script type=\"text/javascript\" src=\"/vendor/bootstrap/js/bootstrap-popover.js\"></script>\n\n<!-- my libraries -->\n<script type=\"text/javascript\" src=\"/js/jquery.sync.js\"></script>\n<script type=\"text/javascript\" src=\"/js/backpack.js\"></script>\n\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_body: b_body,
b_scripts: b_scripts,
root: root
};

})();
templates["badge-accept.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<!DOCTYPE html>\n<meta charset=\"utf-8\">\n<meta http-equiv=\"X-CSRF-Token\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "\">\n<meta http-equiv=\"X-Current-User\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "email"), env.autoesc);
output += "\">\n";
if(runtime.contextOrFrameLookup(context, frame, "framed")) {
output += "\n<script>\n  /* Requesting the framed badge acceptance screen from outside\n   * an iframe probably means we're coming from Persona's redirect\n   * on account creation. Let's kick over to the welcome screen instead.\n   */\n   if (window.top === window.self) {\n    window.location = \"/issuer/welcome\";\n  }\n</script>\n";
}
output += "\n<link rel=\"stylesheet\" href=\"/css/badge-accept.css\" type=\"text/css\" media=\"all\" />\n<title>Accept Your Badges</title>\n<body class=\"";
if(runtime.contextOrFrameLookup(context, frame, "framed")) {
output += "framed";
}
else {
output += "frameless";
}
output += "\">\n<div class=\"navbar navbar-fixed-top\">\n  <div class=\"navbar-inner\">\n    <div class=\"container-fluid\" style=\"position: relative;\">\n      <img class=\"brand\" src=\"/images/logo.png\" alt=\"Mozilla Backpack logo\" />\n      <img src=\"/images/ajax-loader.gif\" id=\"ajax-loader\">\n      <a class=\"close closeFrame\" href=\"#\">&times;</a>\n    </div>\n  </div>\n</div>\n\n<div id=\"body\" class=\"container-fluid\">\n  <div id=\"messages\"></div>\n  <div id=\"welcome\" class=\"narrow\" style=\"display: none\">\n    <div class=\"logged-out\">\n      <h2>Hoorah!</h2>\n      <p class=\"lead\">\n        You are about to send <strong class=\"badge-count\">a badge</strong>\n        to your Mozilla Backpack at <strong class=\"host\"></strong>.\n      </p>\n      <p class=\"lead\">Log in to do so.</p>\n      <a class=\"persona-button dark js-browserid-link\" href=\"#\">\n        <span>Log in or Sign up</span>\n      </a>\n    </div>\n    <div class=\"logged-in\">\n      <p class=\"lead\">You are about to send <strong class=\"badge-count\">a badge</strong>\n      to your Mozilla Backpack at <strong class=\"host\"></strong>.</p>\n      <button class=\"next btn btn-primary\">Hoorah!</button>\n      <a href=\"#\" class=\"logout\">\n        I am not <span class=\"email\"></span>.\n      </a>\n    </div>\n  </div>\n  <div id=\"farewell\" class=\"narrow\" style=\"display: none\">\n    <p class=\"badges-0 lead\" style=\"display: none\">You didn't add any open badges to your backpack.</p>\n    <p class=\"badges-1 lead\" style=\"display: none\">\n      You've sent <strong>1 badge</strong> to your Mozilla Backpack.\n    </p>\n    <p class=\"badges-many lead\" style=\"display: none\">\n      You've sent <strong class=\"badges-added\"></strong> badges to your\n      Mozilla Backpack.\n    </p>\n    <p class=\"lead\">\n      Visit your <a href=\"/\" target=\"_blank\">Backpack</a> to manage\n      and share your open badges.\n    </p>\n    <button class=\"next btn btn-primary\">Thanks</button>\n  </div>\n  <div id=\"badge-ask\" class=\"span8\" style=\"display: none\">\n  </div>\n  <div id=\"test-info\" style=\"display: none\">\n    <hr>\n    <p style=\"font-size: smaller\"><strong>This page is operating in test mode.</strong> All data and network operations\n    are simulated. For information on the API used to communicate with this\n    page, see the\n    <a href=\"https://github.com/mozilla/openbadges/wiki/Issuer-API\">Issuer\n    API Documentation</a>.</p>\n    <div class=\"log\"></div>\n  </div>\n</div>\n<div id=\"templates\" style=\"display: none\">\n  <div id=\"accept-failure-template\">\n    <div class=\"alert alert-error\">\n      <a class=\"close\">×</a>\n      <strong>Sorry!</strong> An error occurred when trying to add the\n      <em>[[ assertion.badge.name ]]</em> badge to your backpack.\n    </div>\n  </div>\n  <div id=\"already-exists-template\">\n    <div class=\"alert\">\n      <a class=\"close\">×</a>\n      You appear to already have the\n      <em>[[ assertion.badge.name ]]</em> badge in your backpack.\n    </div>\n  </div>\n  <div id=\"owner-mismatch-template\">\n    <div class=\"alert alert-error\">\n      <a class=\"close\">×</a>\n      It appears that the\n      <em>[[ assertion.badge.name ]]</em> badge was not awarded to you ([[ user ]]).\n    </div>\n  </div>\n  <div id=\"inaccessible-template\">\n    <div class=\"alert alert-error\">\n      <a class=\"close\">×</a>\n      We have encountered the following problem: <em>[[ error.message ]]</em>\n    </div>\n  </div>\n  <div id=\"login-error-template\">\n    <div class=\"alert alert-error\">\n      <strong>Sorry!</strong> An error occurred when trying to log you in.\n    </div>\n  </div>\n  <div id=\"badge-ask-template\" style=\"display: none\">\n    <div class=\"row\">\n      <div class=\"header span8\">\n        <h2>Accept this badge?</h2>\n        <button class=\"accept btn btn-primary\">Yes</button>\n        <button class=\"reject btn btn-danger\">No</button>\n      </div>\n      <div class=\"span3 columns management\">\n        <img class=\"badge-image\" src=\"[[assertion.badge.image]]\" alt=\"Badge Image\"/>\n      </div>\n      <div class=\"span5 columns badge-details\">\n        <dl>\n          <dt>Recipient</dt>\n\t        <dd>[[ unhashedRecipient ]]</dd>\n\n          <dt>Name</dt>\n          <dd>[[ assertion.badge.name ]]</dd>\n\n          <dt>Description</dt>\n          <dd>[[ assertion.badge.description ]]</dd>\n\n          <dt>Criteria</dt>\n          <dd><a href=\"[[assertion.badge.criteria]]\">[[ assertion.badge.criteria ]]</a></dd>\n\n          <dt>Issuer</dt>\n          <dd>[[ assertion.badge.issuer.name ]] (<a href=\"[[assertion.badge.issuer.origin]]\">[[ assertion.badge.issuer.origin ]]</a>)</dd>\n        </dl>\n      </div>\n    </div>\n  </div>\n</div>\n<script src=\"";
output += runtime.suppressValue((lineno = 142, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "getBrowserIdScriptUrl"), "getBrowserIdScriptUrl", [])), env.autoesc);
output += "\"></script>\n<script src=\"/js/es5-shim.min.js\"></script>\n<script src=\"/js/jquery.min.js\"></script>\n<script src=\"/js/jschannel.js\"></script>\n<script src=\"/js/underscore.js\"></script>\n<script src=\"/js/backbone.js\"></script>\n<script src=\"/js/badge-accept/badge-accept.js\"></script>\n<script src=\"/js/badge-accept/main.js\"></script>\n";
if(runtime.contextOrFrameLookup(context, frame, "framed")) {
output += "\n  <script src=\"/js/badge-accept/build-channel.js\"></script>\n  <script>\n    $(window).ready(function(){\n      var channel = buildChannel();\n    });\n  </script>\n";
}
else {
output += "\n  <script>\n    $(window).ready(function(){\n      window.issue(";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "assertions"), env.autoesc);
output += ", function(){\n        window.location = \"/\";\n      });\n    });\n  </script>\n";
}
output += "\n</body>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["badge-data.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<table class='information'>\n  <colgroup>\n    <col class=\"imageCol\">\n    <col class=\"fieldLabelCol\">\n    <col class=\"dataCol\">\n  </colgroup>\n  <tbody>\n    <tr>\n      <td rowspan=\"100\" class='image'>\n        <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"imageUrl", env.autoesc), env.autoesc);
output += "\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "disownable")) {
output += "\n        <button class='btn btn-danger disown'>Remove this Badge</button>\n\n        <!-- TODO: Re-enable this when sharing actually works well.\n                   We may drop the \"Share\" button altogether, but it's \n                   a nice guide for now.\n          <form action=\"/share/badge/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"id", env.autoesc), env.autoesc);
output += "\" method=\"post\">\n            <input type=\"hidden\" name=\"_csrf\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "\">\n            <input class=\"btn\" type=\"submit\" value=\"Share\">\n          </form>\n          <p class=\"facebook-share\">Facebook</p>\n          <p class=\"twitter-share\">Twitter</p>\n        -->\n        ";
}
output += "\n      </td>\n\n      <td class='section-head' colspan='2'>Issuer Details</td>\n    </tr>\n    <tr>\n      <td class='fieldlabel issuer-name'>Name</td>\n      <td>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"issuer", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "</td>\n    </tr>\n    <tr>\n      <td class='fieldlabel issuer-name'>URL</td>\n      <td><a href=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"issuer", env.autoesc)),"origin", env.autoesc)), env.autoesc);
output += "\">";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"issuer", env.autoesc)),"origin", env.autoesc)), env.autoesc);
output += "</a></td>\n    </tr>\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"issuer", env.autoesc)),"org", env.autoesc)) {
output += "\n    <tr>\n      <td class='fieldlabel issuer-name'>Organization</td>\n      <td>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"issuer", env.autoesc)),"org", env.autoesc)), env.autoesc);
output += "</td>\n    </tr>\n    ";
}
output += "\n\n    <tr>\n      <td class='section-head' colspan='2'>Badge Details</td>\n    </tr>\n    <tr>\n      <td class='fieldlabel'>Name</td>\n      <td>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "</td>\n    </tr>\n    <tr>\n      <td class='fieldlabel'>Description</td>\n      <td>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"description", env.autoesc)), env.autoesc);
output += "</td>\n    </tr>\n    <tr>\n      <td class='fieldlabel'>Criteria</td>\n      <td><a href='";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"criteria", env.autoesc)), env.autoesc);
output += "' target='_blank'>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"criteria", env.autoesc)), env.autoesc);
output += "</a></td>\n    </tr>\n\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"evidence", env.autoesc)) {
output += "\n    <tr>\n      <td class='fieldlabel evidence'>Evidence</td>\n      <td><a href='";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"evidence", env.autoesc)), env.autoesc);
output += "' target='_blank'>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"evidence", env.autoesc)), env.autoesc);
output += "</a></td>\n    </tr>\n    ";
}
output += "\n\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"issued_on", env.autoesc)) {
output += "\n    <tr>\n      <td class='fieldlabel'>Issued</td>\n      <td>";
output += runtime.suppressValue(env.getFilter("formatdate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"issued_on", env.autoesc)), env.autoesc);
output += "</td>\n    </tr>\n    ";
}
output += "\n\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"expires", env.autoesc)) {
output += "\n    <tr>\n      <td class='fieldlabel'>Expiration</td>\n      <td>";
output += runtime.suppressValue(env.getFilter("formatdate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"expires", env.autoesc)), env.autoesc);
output += "</td>\n    </tr>\n    ";
}
output += "\n  </tbody>\n</table>\n\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["badge-details.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class='lightbox' data-id='";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "'>\n  <div class='contents badge-details'>\n    <header>\n      <h2>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "</h2>\n      <span class='close'>&times;</span>\n    </header>\n    <div class='body'>\n\n      <div class='confirm-disown'>\n        <p>\n          Do you want to remove this badge? </p>\n          <p> If so, you'd need to reconnect with the issuer (<a href='";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"issuer", env.autoesc)),"origin", env.autoesc)), env.autoesc);
output += "'>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"issuer", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "</a>) to have this badge sent to your Backpack again.\n        </p>\n\n        <div class='buttons'>\n          <button class='btn nope'>Cancel</button>\n          <button class='btn yep btn-danger'>Yes</button>\n        </div>\n      </div>\n\n      <div class='confirm-facebook-share'>\n\t      ";
var includeTemplate = env.getTemplate("badge-facebook-share.html");
output += includeTemplate.render(context.getVariables(), frame.push());
output += "\n\t    </div>\n      ";
var includeTemplate = env.getTemplate("badge-data.html");
output += includeTemplate.render(context.getVariables(), frame.push());
output += "\n    </div>\n  </div>\n  <div class='background'></div>\n</div>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["badge-facebook-share.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<table class='information'>\n  <colgroup>\n    <col class=\"imageCol\">\n    <col class=\"dataCol\">\n  </colgroup>\n  <tbody class=\"confirm-facebook-share\">\n    <tr>\n      <td rowspan=\"80\" class='image'>\n        <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"imageUrl", env.autoesc), env.autoesc);
output += "\">\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <form action=\"/backpack/facebook\" method=\"POST\" class=\"facebook-share\">\n        <input type=\"hidden\" name=\"_csrf\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "\"></input>\n        <input type=\"hidden\" name=\"badge_body_hash\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body_hash", env.autoesc), env.autoesc);
output += "\"></input>\n        <strong>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"issuer", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "</strong>\n        <p>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badge")),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"description", env.autoesc)), env.autoesc);
output += "</p>\n        <textarea name='facebookcomment' tabindex=1 class='comment' placeholder='Add your personal comment'></textarea>\n        <span class=\"auto_push\"><input type=\"checkbox\" name=\"facebook_automatic_push\" value=\"facebook_automatic_push\">Automatically publish badges to Facebook when they are added to my backpack.</span></td>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <div class='buttons'>\n          <span class=\"btn nope\">Cancel</span>\n          <button class='btn yep btn-primary'>Share on Facebook</button>\n        </div>\n        </form>\n      </td>\n    </tr>\n  </tbody>\n</table>";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["badge-shared.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_2;
t_2 = " prefix=\"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# open-badges: http://ogp.me/ns/fb/open-badges#\"";
frame.set("htmlPrefix", t_2);
if(!frame.parent) {
context.setVariable("htmlPrefix", t_2);
context.addExport("htmlPrefix");
}
output += "\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_head(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "head", b_head, frame, runtime));
output += "\n";
frame = frame.push();
var t_4 = runtime.contextOrFrameLookup(context, frame, "fb");
if(t_4) {for(var t_3=0; t_3 < t_4.length; t_3++) {
var t_5 = t_4[t_3];
frame.set("facebook", t_5);
output += "<meta property=\"fb:";
output += runtime.suppressValue(runtime.memberLookup((t_5),"property", env.autoesc), env.autoesc);
output += "\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((t_5),"content", env.autoesc), env.autoesc);
output += "\" />\n";
}
}frame = frame.pop();
frame = frame.push();
var t_7 = runtime.contextOrFrameLookup(context, frame, "og");
if(t_7) {for(var t_6=0; t_6 < t_7.length; t_6++) {
var t_8 = t_7[t_6];
frame.set("opengraph", t_8);
output += "<meta property=\"og:";
output += runtime.suppressValue(runtime.memberLookup((t_8),"property", env.autoesc), env.autoesc);
output += "\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"content", env.autoesc), env.autoesc);
output += "\" />\n";
}
}frame = frame.pop();
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n";
var includeTemplate = env.getTemplate("badge-data.html");
output += includeTemplate.render(context.getVariables(), frame.push());
output += "\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_head: b_head,
b_body: b_body,
root: root
};

})();
templates["badges.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
var t_2;
t_2 = "badges";
frame.set("activeNav", t_2);
if(!frame.parent) {
context.setVariable("activeNav", t_2);
context.addExport("activeNav");
}
output += "\n\n";
output += "\n\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n\n";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "badges")),"length", env.autoesc)) {
output += "\n  ";
output += context.getBlock("noBadges")(env, context, frame, runtime);
output += "\n";
}
else {
output += "\n  <input type=\"hidden\" name=\"_csrf\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "\">\n  ";
output += context.getBlock("badgeNav")(env, context, frame, runtime);
output += "\n  <div class=\"row\">\n    ";
output += context.getBlock("badgeList")(env, context, frame, runtime);
output += "\n  </div>\n";
}
output += "\n\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_noBadges(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "noBadges", b_noBadges, frame, runtime));
output += "\n    ";
var includeTemplate = env.getTemplate("no-badges.html");
output += includeTemplate.render(context.getVariables(), frame.push());
output += "\n  ";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_badgeNav(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "badgeNav", b_badgeNav, frame, runtime));
output += "\n    <p class=\"badge-nav\">\n      <span class=\"hide\">Show</span>\n      <a href=\"/\"";
if(runtime.contextOrFrameLookup(context, frame, "selectedBadgeTab") == "recent") {
output += " class=\"selected\"";
}
output += ">Recent</a>\n      <span class=\"hide\">,</span>\n      <a href=\"/backpack/badges\"";
if(runtime.contextOrFrameLookup(context, frame, "selectedBadgeTab") == "all") {
output += " class=\"selected\"";
}
output += ">Everything</a>\n      <span class=\"hide\">or</span>\n      <a href=\"/backpack/add\" class=\"add-openbadge\">Upload</a>\n      <span class=\"hide\">a new badge</span>\n    </p>\n    <p class=\"badge-nav-sub\">\n      You can share these badges by creating Collections (above) & choosing to display them on your networks.\n    </p>\n  ";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_badgeList(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "badgeList", b_badgeList, frame, runtime));
output += "\n      <ul id=\"badges\" class=\"js-badges badge-list\">\n        ";
output += context.getBlock("badgeItems")(env, context, frame, runtime);
output += "\n        ";
output += context.getBlock("afterBadgeItems")(env, context, frame, runtime);
output += "\n      </ul>\n    ";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_badgeItems(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "badgeItems", b_badgeItems, frame, runtime));
output += "\n          ";
frame = frame.push();
var t_4 = runtime.contextOrFrameLookup(context, frame, "badges");
if(t_4) {for(var t_3=0; t_3 < t_4.length; t_3++) {
var t_5 = t_4[t_3];
frame.set("badge", t_5);
output += "\n            <li class=\"span3 openbadge-container\">\n              <div class=\"openbadge\" data-id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_5),"attributes", env.autoesc)),"id", env.autoesc), env.autoesc);
output += "\" data-serialization=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((t_5),"serializedAttributes", env.autoesc)), env.autoesc);
output += "\">\n                <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_5),"attributes", env.autoesc)),"imageUrl", env.autoesc), env.autoesc);
output += "\" width=\"64\">\n                <p class=\"title\" title=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_5),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "\">";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_5),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "</p>\n                <p class=\"issuer\">Issuer: ";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_5),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"issuer", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "</p>\n              </div>\n            </li>\n          ";
}
}frame = frame.pop();
output += "\n        ";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_afterBadgeItems(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "afterBadgeItems", b_afterBadgeItems, frame, runtime));
output += "\n          <li class=\"span3\">\n            <a href=\"/backpack/add\" class=\"add-openbadge\">\n              <img src=\"/images/add-badge.png\">\n              <p class=\"title\">Upload a badge</p>\n              <p class=\"issuer\">&nbsp;</p>\n            </a>\n          </li>\n        ";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_scripts(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "scripts", b_scripts, frame, runtime));
output += "\n\n<!-- third party -->\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"useCompiledTemplates", env.autoesc)) {
output += "\n  <script type=\"text/javascript\" src=\"/js/nunjucks-min.js\"></script>\n  <script type=\"text/javascript\" src=\"/js/nunjucks-templates.js\"></script>\n";
}
else {
output += "\n  <script type=\"text/javascript\" src=\"/js/nunjucks-dev.js\"></script>\n";
}
output += "\n<script type=\"text/javascript\" src=\"/js/underscore.js\"></script>\n<script type=\"text/javascript\" src=\"/js/backbone.js\"></script>\n<script type=\"text/javascript\" src=\"/vendor/bootstrap/js/bootstrap-alert.js\"></script>\n<script type=\"text/javascript\" src=\"/vendor/bootstrap/js/bootstrap-tooltip.js\"></script>\n<script type=\"text/javascript\" src=\"/vendor/bootstrap/js/bootstrap-popover.js\"></script>\n\n<!-- my libraries -->\n<script type=\"text/javascript\" src=\"/js/jquery.sync.js\"></script>\n<script type=\"text/javascript\" src=\"/js/backpack.js\"></script>\n\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_body: b_body,
b_noBadges: b_noBadges,
b_badgeNav: b_badgeNav,
b_badgeList: b_badgeList,
b_badgeItems: b_badgeItems,
b_afterBadgeItems: b_afterBadgeItems,
b_scripts: b_scripts,
root: root
};

})();
templates["badges_partial.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<span draggable=\"true\" class=\"openbadge\" data-id=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.autoesc);
output += "\">\n  <img src=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "imageUrl"), env.autoesc);
output += "\" width=\"64px\"/>\n</span>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["baker.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
output += "\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n<form id=\"bake-form\" class=\"baker form-stacked\" action=\"/baker\" method=\"GET\">\n  <fieldset>\n    <label for=\"assertion\">URL for your badge assertion</label>\n    <input id=\"assertion\" class=\"xlarge\" type=\"text\" value=\"http://badgehub.org/test/badge.json\" placeholder=\"http://your-site.com/path-to-assertion.json\" name=\"assertion\"></input>\n  </fieldset>\n  <fieldset>\n    <input id=\"submit\" class=\"large btn btn-primary\" type=\"submit\" value=\"Build this badge\"></input>\n  </fieldset>\n</form>\n<div id=\"result\"></div>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_scripts(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "scripts", b_scripts, frame, runtime));
output += "\n<script type=\"text/javascript\" src=\"/js/formatter.js\"></script>\n<script type=\"text/javascript\" src=\"/js/baker.js\"></script>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_body: b_body,
b_scripts: b_scripts,
root: root
};

})();
templates["email-converter.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n<div id='converter'>\n  <div class=\"alert alert-error\"></div>\n  <div class=\"alert alert-success\"></div>\n\n  <div class='input'>\n    <input tabindex=1 class='email' type='email' placeholder='something@example.com'>\n    <span class='arrow'>&rarr;</span>\n    <input tabindex=3 class='userid disabled' placeholder=\"12345\">\n  </div>\n  <div class='submit'>\n    <input tabindex=2 type=\"submit\" class=\"btn btn-primary btn-large\" value=\"Let's do this\">\n  </div>\n</div>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_scripts(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "scripts", b_scripts, frame, runtime));
output += "\n<script src='/js/email-converter.js'></script>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_body: b_body,
b_scripts: b_scripts,
root: root
};

})();
templates["error.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "status"), env.autoesc);
output += " :: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "message"), env.autoesc);
output += "\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["errors/404.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n<div class=\"hero-unit\">\n  <h1>Page Not Found</h1>\n  <p>Unfortunately the page you're looking for doesn't appear to exist.</p>\n  <p><strong>This might be because:</strong></p>\n  <ul>\n    <li>The page may have been moved, updated or deleted</li>\n    <li>If you clicked on a link, it may be out of date... or just wrong!</li>\n    <li>There might be typing error in the web address</li>\n  </ul>\n  <p><a href=\"/\" class=\"btn btn-large\">Go Home</a></p>\n</div>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_body: b_body,
root: root
};

})();
templates["group-template.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class='group ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "attributes")),"id", env.autoesc)) {
output += "isNew";
}
output += "'>\n  <input class='groupName' type='text' value='";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.contextOrFrameLookup(context, frame, "name")), env.autoesc);
output += "'>\n  <span class='icon delete'>&times;</span>\n  <span class='icon share' title='share this group'>5</span>\n  \n  ";
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "attributes")),"id", env.autoesc)) {
output += "\n    <hgroup class=\"instructions\">\n      <h3>Drag a badge here</h3>\n      to create a Collection.\n    </hgroup>\n  ";
}
output += "\n\n  <span class='public'>\n    <label>\n      <input type='checkbox' class='js-privacy' ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "attributes")),"public", env.autoesc)) {
output += "checked";
}
output += ">\n      <span>public</span>\n    </label>\n  </span>\n</div>";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["issuer-welcome.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"row\" style=\"position: relative;\">\n  <div class=\"span4 column\">\n    <h1>Badges</h1>\n    <div id=\"badges\">\n      <span class=\"openbadge\">\n        <img src=\"/images/ghost-badge.png\" width=\"64px\"/>\n      </span>\n    </div>\n  </div>\n  <div class=\"span8 column\">\n    <h1>Welcome to your Mozilla Backpack!</h1>\n    <h2>So glad you could join us.</h2>\n\n    <p>\n      You're almost finished accepting your first badge! You've created\n      your backpack, now return to the window where you earned your\n      badge and accept it. Then when you come back here and refresh the\n      page, you'll see it on the left.\n    </p>\n  </div>\n</div>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["issuer.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n<form action=\"/demo/award\" method=\"post\">\n  <input type=\"hidden\" name=\"_csrf\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "\">\n  <fieldset>\n    <div class=\"clearfix\">\n      <label for=\"recp\">Recipient</label>\n      <div class=\"input\">\n        <input id=\"recp\" type=\"text\" name=\"recipient\"></input>\n      </div>\n    </div>\n\n    <div class=\"clearfix\">\n      <label for=\"image\">Image Url</label>\n      <div class=\"input\">\n        <input id=\"image\" type=\"text\" name=\"image\"></input>\n      </div>\n    </div>\n\n    <div class=\"input\">\n      <input class=\"btn btn-primary\" type=\"submit\" value=\"Award badge\"></input>\n    </div>\n\n  </fieldset>\n</form>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_body: b_body,
root: root
};

})();
templates["layout.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<!DOCTYPE html>\n<html";
output += runtime.suppressValue(env.getFilter("default").call(context, runtime.contextOrFrameLookup(context, frame, "htmlPrefix"),""), env.autoesc);
output += ">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge;chrome=1\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"shortcut icon\" href=\"/favicon.ico\">\n    <link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\">\n    <link href=\"//www.mozilla.org/tabzilla/media/css/tabzilla.css\" rel=\"stylesheet\" />\n    <link rel=\"stylesheet\" href=\"/css/backpack.min.css\" type=\"text/css\" media=\"all\" />\n    <title dir=\"ltr\">Mozilla Backpack</title>\n    <script type=\"text/javascript\" src=\"/js/es5-shim.min.js\"></script>\n    <script type=\"text/javascript\" src=\"/js/modernizr.js\"></script>\n    <script type=\"text/javascript\" src=\"";
output += runtime.suppressValue((lineno = 13, colno = 62, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "getBrowserIdScriptUrl"), "getBrowserIdScriptUrl", [])), env.autoesc);
output += "\"></script>\n    <script type=\"text/javascript\" src=\"/js/jquery.min.js\"></script>\n    <script type=\"text/javascript\">\n      var _gaq = _gaq || [];\n      _gaq.push(['_setAccount', 'UA-35433268-10']);\n      _gaq.push(['_setDomainName', 'openbadges.org']);\n      _gaq.push(['_trackPageview']);\n      (function() {\n        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\n        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n      })();\n    </script>\n    ";
output += context.getBlock("head")(env, context, frame, runtime);
output += "\n  </head>\n  <body ";
if(runtime.contextOrFrameLookup(context, frame, "bodyClass")) {
output += "class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "bodyClass"), env.autoesc);
output += "\"";
}
output += ">\n    <div id=\"fb-root\"></div>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"env", env.autoesc) == "development") {
output += "\n      <img src=\"/images/testribbon.png\" class=\"test-ribbon\" title=\"";
output += runtime.suppressValue(env.getFilter("d").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "settings")),"sha", env.autoesc),""), env.autoesc);
output += "\">\n    ";
}
output += "\n    <div class=\"navbar\">\n      <div class=\"navbar-inner\">\n        <div class=\"container\" style=\"position: relative;\">\n          <a class=\"brand\" href=\"/\">\n            <img src=\"/images/logo.png\" alt=\"Mozilla Backpack logo\" />\n          </a>\n          <a href=\"http://www.mozilla.org/\" id=\"tabzilla\">a mozilla.org joint</a>\n          ";
if(runtime.contextOrFrameLookup(context, frame, "user")) {
output += "\n          <ul class=\"nav pull-left\">\n            <li ";
if(runtime.contextOrFrameLookup(context, frame, "activeNav") == "badges") {
output += "class=\"active\"";
}
output += ">\n              <a href=\"/\" class=\"icon badge-link\"><span>Badges</span></a>\n            </li>\n            <li ";
if(runtime.contextOrFrameLookup(context, frame, "activeNav") == "collections") {
output += "class=\"active\"";
}
output += ">\n              <a href=\"/backpack\" class=\"icon collection-link\"><span>Collections</span></a>\n            </li>\n          </ul>\n          ";
}
output += "\n          <ul class=\"nav pull-right\">\n          ";
if(runtime.contextOrFrameLookup(context, frame, "user")) {
output += "\n            <li class=\"user navbar-text\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"attributes", env.autoesc)),"email", env.autoesc), env.autoesc);
output += "</li>\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"icon gear-link dropdown-toggle\" data-toggle=\"dropdown\">\n                <span><b class=\"caret\"></b></span>\n              </a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"/backpack/settings\">Settings</a></li>\n                <li><a href=\"/backpack/signout\">Sign Out</a></li>\n              </ul>\n            </li>\n          ";
}
else {
if(runtime.contextOrFrameLookup(context, frame, "bodyClass") == "login") {
output += "\n            <li><a class=\"js-browserid-link\" href=\"#\">Log In</a></li>\n          ";
}
}
output += "\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"body\" class=\"container\">\n      <div class='message-container'>\n      ";
frame = frame.push();
var t_2 = runtime.contextOrFrameLookup(context, frame, "error");
if(t_2) {for(var t_1=0; t_1 < t_2.length; t_1++) {
var t_3 = t_2[t_1];
frame.set("e", t_3);
output += "\n        <div class=\"alert alert-error\">\n          <a class=\"close\" data-dismiss=\"alert\">×</a>\n          ";
output += runtime.suppressValue(t_3, env.autoesc);
output += "\n        </div>\n      ";
}
}frame = frame.pop();
output += "\n\n      ";
frame = frame.push();
var t_5 = runtime.contextOrFrameLookup(context, frame, "success");
if(t_5) {for(var t_4=0; t_4 < t_5.length; t_4++) {
var t_6 = t_5[t_4];
frame.set("s", t_6);
output += "\n        <div class=\"alert alert-success\">\n          <a class=\"close\" data-dismiss=\"alert\">×</a>\n          ";
output += runtime.suppressValue(t_6, env.autoesc);
output += "\n        </div>\n      ";
}
}frame = frame.pop();
output += "\n      </div>\n\n      ";
output += context.getBlock("body")(env, context, frame, runtime);
output += "\n    </div>\n\n    <div id=\"footer\" class=\"container\">\n      <aside><small>\n        <h2>Legal</h2>\n        <ul>\n          <li><a href=\"/tou.html\" class=\"muted\">Terms of Use</a></li>\n          <li><a href=\"/privacy.html\" class=\"muted\">Privacy Policy</a></li>\n          <li><a href=\"/vpat.html\" class=\"muted\">Accessibility</a></li>\n        </ul>\n      </small></aside>\n    </div>\n\n    <script src=\"//www.mozilla.org/tabzilla/media/js/tabzilla.js\"></script>\n    <script type=\"text/javascript\" src=\"/vendor/bootstrap/js/bootstrap-dropdown.js\"></script>\n    ";
output += context.getBlock("scripts")(env, context, frame, runtime);
output += "\n\n  </body>\n</html>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_head(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "head", b_head, frame, runtime));
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_scripts(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "scripts", b_scripts, frame, runtime));
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_head: b_head,
b_body: b_body,
b_scripts: b_scripts,
root: root
};

})();
templates["login.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_2;
t_2 = "login";
frame.set("bodyClass", t_2);
if(!frame.parent) {
context.setVariable("bodyClass", t_2);
context.addExport("bodyClass");
}
output += "\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n<h1 class=\"title\">Welcome to your Backpack</h1>\n<p class=\"subtitle\">Celebrate your skills & passions</p>\n<a class=\"persona-button dark big js-browserid-link\" href=\"#\"><span>Log In or Sign Up</span></a>\n\n<form class=\"signin js-browserid-form\" method=\"POST\" action=\"/backpack/authenticate\">\n  <input class=\"js-browserid-input\" name=\"assertion\" type=\"hidden\"></input>\n  <input name=\"_csrf\" type=\"hidden\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "\"></input>\n</form>\n\n\n<script type=\"text/javascript\">\n!!function loginHandler () {\n//begin login handler\n\n  function launchBrowserId(callback) {\n    return function() { navigator.id.get(callback, {\n      siteName: 'Mozilla Backpack',\n      backgroundColor: '#043C5E',\n      siteLogo: 'data:image/png;base64,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',\n      termsOfService: '/tou.html',\n      privacyPolicy: '/privacy.html',\n      returnTo: '/'\n    }); }\n  }\n  function handleResponse(assertion) {\n    if (!assertion) return false;\n    $('.js-browserid-input').val(assertion);\n    $('.js-browserid-form').trigger('submit');\n  }\n  $('.js-browserid-link').bind('click', launchBrowserId(handleResponse));\n\n//begin login handler scope\n}();\n</script>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_body: b_body,
root: root
};

})();
templates["no-badges.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<h1>It's time to start earning open badges!</h1>\n<p>You might explore <a href=\"http://badges.webmaker.org\">Webmaker Badges</a> as well as thousands of <a href=\"https://wiki.mozilla.org/Badges/Issuers\">other offerings from  badge issuers.</a></p>\n<p>You can also manually <a href=\"/backpack/add\" class=\"add-openbadge\">upload</a> any of the open badges you've earned.</p>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["permissions.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<ul>\n  ";
frame = frame.push();
var t_2 = runtime.contextOrFrameLookup(context, frame, "permissions");
if(t_2) {for(var t_1=0; t_1 < t_2.length; t_1++) {
var t_3 = t_2[t_1];
frame.set("permission", t_3);
output += "\n    <li>\n      ";
if(t_3 == "issue") {
output += "\n      Send the open badges I've earned to my Mozilla Backpack.\n      ";
}
output += "\n    </li>\n  ";
}
}frame = frame.pop();
output += "\n</ul>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["portfolio-editor.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
output += "\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n<form class='portfolio' action='/share/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "portfolio")),"group", env.autoesc)),"attributes", env.autoesc)),"url", env.autoesc), env.autoesc);
output += "/' method='post'>\n  <input type='hidden' name='_csrf' value='";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "'>\n  <input type='hidden' name='id' value='";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "portfolio")),"attributes", env.autoesc)),"id", env.autoesc), env.autoesc);
output += "'>\n  <input type='hidden' name='group_id' value='";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "group")),"attributes", env.autoesc)),"id", env.autoesc), env.autoesc);
output += "'>\n  <input type='hidden' name='url' value='";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "groups")),"attributes", env.autoesc)),"url", env.autoesc), env.autoesc);
output += "'>\n  <header>\n    <input tabindex=1 name='title' class='field title' value='";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "portfolio")),"attributes", env.autoesc)),"title", env.autoesc)), env.autoesc);
output += "'>\n    <input tabindex=1 name='subtitle' class='field subtitle' placeholder='Optional subtitle' value='";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "portfolio")),"attributes", env.autoesc)),"subtitle", env.autoesc)), env.autoesc);
output += "'>\n  </header>\n\n  <ul class='badges'>\n    ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "portfolio")),"badges", env.autoesc);
if(t_3) {for(var t_2=0; t_2 < t_3.length; t_2++) {
var t_4 = t_3[t_2];
frame.set("badge", t_4);
output += "\n      <li>\n        <h3>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "</h3>\n\n        <textarea name='stories[";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"attributes", env.autoesc)),"id", env.autoesc), env.autoesc);
output += "]' tabindex=1 class='story' placeholder='some information about this badge'>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((t_4),"attributes", env.autoesc)),"_userStory", env.autoesc)), env.autoesc);
output += "</textarea>\n\n        ";
var includeTemplate = env.getTemplate("badge-data.html");
output += includeTemplate.render(context.getVariables(), frame.push());
output += "\n      </li>\n    ";
}
}frame = frame.pop();
output += "\n  </ul>\n  \n  <div class='save actions'>\n    <input tabindex=1 class='btn btn-primary btn-large save' type='submit' value='Save this page'>\n  </div>\n\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_scripts(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "scripts", b_scripts, frame, runtime));
output += "\n\n  <script>\n    $('form.portfolio').on('submit', function(e){\n      e.preventDefault();\n      return false;\n    });\n    $('input.save').on('click', function(e){\n      $('form.portfolio')[0].submit();\n    })\n  </script>\n</form>\n\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_body: b_body,
b_scripts: b_scripts,
root: root
};

})();
templates["portfolio.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
output += "\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n<link rel=\"stylesheet\" href=\"/css/socialmedia.css\">\n\n<div class='portfolio'>\n";
if(runtime.contextOrFrameLookup(context, frame, "owner")) {
output += "\n  <div class=\"alert alert-info\">\n    <div class=\"socialshare\" style=\"float: left;\" tabindex=\"0\" onclick=\"injectSocialMedia(this)\">\n      <span class=\"msg\">Share this on Twitter, Google+, Facebook and LinkedIn</span>\n      <div class=\"social-medium twitter\"></div>\n      <div class=\"social-medium google\"></div>\n      <div class=\"social-medium facebook\"></div>\n      <div class=\"social-medium linkedin\"></div>\n    </div>\n    <a href=\"edit\" class='edit btn btn-primary'>Edit this page</a>\n    <strong class=\"shareMessage\">This is how your portfolio page will look to the public.</strong>\n  </div>\n";
}
output += "\n\n  <header>\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "portfolio")),"attributes", env.autoesc)),"title", env.autoesc)) {
output += "\n      <h1>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "portfolio")),"attributes", env.autoesc)),"title", env.autoesc)), env.autoesc);
output += "</h1>\n    ";
}
output += "\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "portfolio")),"attributes", env.autoesc)),"subtitle", env.autoesc)) {
output += "\n      <h2>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "portfolio")),"attributes", env.autoesc)),"subtitle", env.autoesc)), env.autoesc);
output += "</h1>\n    ";
}
output += "\n  </header>\n\n  <ul class='badges'>\n    ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "portfolio")),"badges", env.autoesc);
if(t_3) {for(var t_2=0; t_2 < t_3.length; t_2++) {
var t_4 = t_3[t_2];
frame.set("badge", t_4);
output += "\n      <li>\n        <h3>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"attributes", env.autoesc)),"body", env.autoesc)),"badge", env.autoesc)),"name", env.autoesc)), env.autoesc);
output += "</h3>\n\n        <p class='story'>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((runtime.memberLookup((t_4),"attributes", env.autoesc)),"_userStory", env.autoesc)), env.autoesc);
output += "</p>\n\n        ";
var includeTemplate = env.getTemplate("badge-data.html");
output += includeTemplate.render(context.getVariables(), frame.push());
output += "\n      </li>\n    ";
}
}frame = frame.pop();
output += "\n  </ul>\n\n</div>\n\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_scripts(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "scripts", b_scripts, frame, runtime));
output += "\n<script type=\"text/javascript\" src=\"/vendor/bootstrap/js/bootstrap-alert.js\"></script>\n<script type=\"text/javascript\" src=\"/js/social-media.js\"></script>\n\n<script>\nfunction injectSocialMedia(container) {\n  // prevent this element from injecting social media again\n  container.onclick = function() { return false; }\n  var socialMedia = new SocialMedia();\n  var url = window.location.toString();\n\n  // inject twitter, g+ and facebook\n  socialMedia.hotLoad(container.querySelector(\".twitter\"),  socialMedia.twitter,  url);\n  socialMedia.hotLoad(container.querySelector(\".google\"),   socialMedia.google,   url);\n  socialMedia.hotLoad(container.querySelector(\".facebook\"), socialMedia.facebook, url);\n  socialMedia.hotLoad(container.querySelector(\".linkedin\"), socialMedia.linkedin, url);\n\n  // kill off the text label\n  var label = container.querySelector(\"span\");\n  $(label).remove();\n}\n</script>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_body: b_body,
b_scripts: b_scripts,
root: root
};

})();
templates["recentBadges.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("badges.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
var t_2;
t_2 = "recent";
frame.set("selectedBadgeTab", t_2);
if(!frame.parent) {
context.setVariable("selectedBadgeTab", t_2);
context.addExport("selectedBadgeTab");
}
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
root: root
};

})();
templates["settings.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n<h1>Backpack Settings</h1>\n<form method=\"post\" class=\"settings\">\n  <input type=\"hidden\" name=\"_csrf\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "\">\n\n  <!-- TODO: Re-enable this when sharing actually works well.\n\n  <fieldset id=\"accounts\">\n    <legend>Connected Accounts</legend>\n    <div class=\"item\">\n      <span class=\"title\"><strong>Twitter</strong>\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "services")),"twitter", env.autoesc)) {
output += " <span class=\"hide\">is</span> <span class=\"status\">connected</span>";
}
output += "\n      </span>\n      <div class=\"content\">\n        Please note that badges you share on Twitter will be public\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "services")),"twitter", env.autoesc)) {
output += "\n          <input type=\"button\" class=\"btn btn-danger\" value=\"Disconnect\">\n        ";
}
else {
output += "\n          <input type=\"button\" class=\"btn btn-primary\" value=\"Connect\">\n        ";
}
output += "\n      </div>\n    </div>\n    <div class=\"item\">\n      <span class=\"title\"><strong>Facebook</strong>\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "services")),"facebook", env.autoesc)) {
output += " <span class=\"hide\">is</span> <span class=\"status\">connected</span>";
}
output += "\n      </span>\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "services")),"facebook", env.autoesc)) {
output += "\n        <div class=\"content\">\n          <input type=\"button\" class=\"btn btn-danger\" value=\"Disconnect\">\n        </div>\n        <div class=\"secondary\">\n          <label class=\"slider full\">\n            Automatically post to my wall when I earn new badges\n            <input type=\"checkbox\" id=\"services-facebook-auto\" name=\"services[facebook][auto]\" value=\"true\"";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "services")),"facebook", env.autoesc)),"auto", env.autoesc)) {
output += " checked=\"checked\"";
}
output += ">\n            <span data-on=\"On\" data-off=\"Off\"></span>\n          </label>\n        </div>\n      ";
}
else {
output += "\n        <div class=\"content\">\n          <input type=\"button\" class=\"btn btn-primary\" value=\"Connect\">\n        </div>\n      ";
}
output += "\n    </div>\n  </fieldset>\n\n  -->\n  <fieldset id=\"issuer-acceptance\">\n    <legend>Connected Issuers</legend>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "issuers")),"length", env.autoesc)) {
output += "\n      ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "issuers");
if(t_3) {for(var t_2=0; t_2 < t_3.length; t_2++) {
var t_4 = t_3[t_2];
frame.set("issuer", t_4);
output += "\n        <div class=\"item\">\n          <span class=\"title\">\n            <strong>";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((t_4),"domain", env.autoesc)), env.autoesc);
output += "</strong>\n            <small>\n              <p>The website at \n                <a href=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((t_4),"origin", env.autoesc)), env.autoesc);
output += "\">";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((t_4),"domain", env.autoesc)), env.autoesc);
output += "</a> has\n                permission to:</p>\n              ";
var t_5;
t_5 = runtime.memberLookup((t_4),"permissions", env.autoesc);
frame.set("permissions", t_5);
if(!frame.parent) {
context.setVariable("permissions", t_5);
context.addExport("permissions");
}
output += "\n              ";
var includeTemplate = env.getTemplate("permissions.html");
output += includeTemplate.render(context.getVariables(), frame.push());
output += "\n            </small>\n          </span>\n          <div class=\"content\">\n            <button type=\"button\" class=\"btn btn-danger js-revoke\"\n                    autocomplete=\"off\"\n                    data-loading-text=\"Revoking...\"\n                    data-revoke=\"";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((t_4),"origin", env.autoesc)), env.autoesc);
output += "\">Revoke\n              access for ";
output += runtime.suppressValue(env.getFilter("e").call(context, runtime.memberLookup((t_4),"domain", env.autoesc)), env.autoesc);
output += "</button>\n          </div>\n        </div>\n      ";
}
}frame = frame.pop();
output += "\n    ";
}
else {
output += "\n      <div class=\"item\">\n        No issuers of open badges are currently connected\n      </div>\n    ";
}
output += "\n  </fieldset>\n</form>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_scripts(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "scripts", b_scripts, frame, runtime));
output += "\n<script src=\"/vendor/bootstrap/js/bootstrap-button.js\"></script>\n<script>\nvar CONFIRM_MSG = \"Are you sure you want to prevent the website at \" +\n                  \"ORIGIN from accessing your backpack?\";\n\n$(window).ready(function() {\n  $(\".js-revoke\").click(function() {\n    var item = $(this).closest(\".item\");\n    var origin = $(this).attr(\"data-revoke\");\n    var confirmMsg = CONFIRM_MSG.replace(/ORIGIN/g, origin);\n\n    if (!window.confirm(confirmMsg)) return false;\n    $(this).button('loading');\n    $.post('/backpack/settings/revoke-origin', {\n      _csrf: '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "csrfToken"), env.autoesc);
output += "',\n      origin: origin\n    }, function() { item.slideUp(); });\n    return false;\n  });\n});\n</script>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_body: b_body,
b_scripts: b_scripts,
root: root
};

})();
templates["stats.html"] = (function() {
function root(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = env.getTemplate("layout.html", true);
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
output += "\n";
return parentTemplate.rootRenderFunc(env, context, frame, runtime);
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
function b_body(env, context, frame, runtime) {
var lineno = null;
var colno = null;
var output = "";
try {
var l_super = runtime.markSafe(context.getSuper(env, "body", b_body, frame, runtime));
output += "\n<h1>Backpack Facts</h1>\n\n<p>\n  There are ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "totalBadges"), env.autoesc);
output += " badges in the system\n  from ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "totalPerIssuer")),"length", env.autoesc), env.autoesc);
output += " issuers, and\n  ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userCount"), env.autoesc);
output += " users.\n</p>\n<p>Some details per issuer,\n  <ul>\n    ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "totalPerIssuer");
if(t_3) {for(var t_2=0; t_2 < t_3.length; t_2++) {
var t_4 = t_3[t_2];
frame.set("total", t_4);
output += "\n    <li>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name", env.autoesc), env.autoesc);
output += " (<a href='";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url", env.autoesc), env.autoesc);
output += "'>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url", env.autoesc), env.autoesc);
output += "</a>) has ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"total", env.autoesc), env.autoesc);
output += " badges</li>\n    ";
}
}frame = frame.pop();
output += "\n  </ul>\n</p>\n";
return output;
} catch (e) {
  runtime.handleError(e, lineno, colno);
}
}
return {
b_body: b_body,
root: root
};

})();
if(typeof define === "function" && define.amd) {
    define(["nunjucks"], function(nunjucks) {
        nunjucks.env = new nunjucks.Environment([], null);
        nunjucks.env.registerPrecompiled(templates);
        return nunjucks;
    });
}
else if(typeof nunjucks === "object") {
    nunjucks.env = new nunjucks.Environment([], null);
    nunjucks.env.registerPrecompiled(templates);
}
else {
    console.error("ERROR: You must load nunjucks before the precompiled templates");
}
})();
