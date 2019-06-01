import { JsonController, Body, Post, Get } from "routing-controllers";
import { getMongoRepository } from "typeorm";
import MailSendHistory from "./mailsendhistory.model";
import mail from "../../mail";
import mustache from "mustache";

@JsonController()
export default class CharacterController {
  private mailSendHistoryRepository = getMongoRepository(MailSendHistory);

  @Post("/characters/sendmail")
  async sendCharactersToMail(@Body() data: MailSendHistory) {
    await this.mailSendHistoryRepository.insert(data);
    const mailer = await mail;
    await mailer.sendMail({
      from: "philipe <felihenrique@gmail.com>",
      to: data.email,
      subject: "Characters list you selected",
      html: mustache.render(
        `
        <h3>List of characters</h3>
        <ul>
        {{#characters}}
          <li>{{name}}</li>
        {{/characters}}
        </ul>
      `,
        {
          characters: data.characters
        }
      )
    });
    return { msg: "success" };
  }
}
