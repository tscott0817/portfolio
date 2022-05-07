import { Body, Controller, Post } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import { Observable } from 'rxjs';

// request to /api/feed
@Controller('feed')
export class FeedController {

    constructor(private feedService: FeedService) {}
    // 'Post' decorated forces it to be read as POST request
    @Post()
    create(@Body() post: FeedPost): Observable<FeedPost> { // Not sure what @Body decorator does
        return this.feedService.createPost(post)
    }
}
