import { React, MessageViewExtension } from "mailspring-exports";

export default class MyCodeFormatter extends MessageViewExtension {
  static formatMessageBody({message}) {
    console.log("Logging message body: ", message.body);
    message.body = "HELLO";
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
