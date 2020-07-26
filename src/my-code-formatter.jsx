import { React, MessageViewExtension } from "mailspring-exports";

export default class MyCodeFormatter extends MessageViewExtension {
  static formatMessageBody({message}) {
//       var style = `<!-- CSS -->
// <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css\" />

// <!-- Javascripts -->
// <script type=\"text/javascript\" src=\"https://cdn.jsdelivr.net/npm/diff2html/bundles/js/diff2html.min.js\"></script>`

//     const Diff2html = require('diff2html');
//     const diff = Diff2html.parse(message.body)
    console.log("Logging message body: ", message.body);
    // message.body = "HELLO";
    // if (AutoloadImagesStore.shouldBlockImagesIn(message)) {
    //   message.body = message.body.replace(AutoloadImagesStore.getLinkTagRegexp(), '');
    //   message.body = message.body.replace(
    //     AutoloadImagesStore.getImagesRegexp(),
    //     (match, prefix) => {
    //       return `${prefix}#`;
    //     }
    //   );
    // }
  }
}
