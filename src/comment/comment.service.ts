import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  findUserComments(userId: string) {
    return 'The is a comment of user' + userId;
  }
}
