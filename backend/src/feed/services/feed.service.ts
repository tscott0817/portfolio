import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedPost } from '../models/post.interface';
import { Observable, from } from 'rxjs'

// Injecting repository from entity 
@Injectable()
export class FeedService {

    constructor(@InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>) 
    {}

    // // As a promise
    // createPost(feedPost: FeedPost) {
    //     return this.feedPostRepository.save(feedPost);
    // }

    // As observable; the from() method takes in a promise and changes to Observable)
    createPost(feedPost: FeedPost): Observable<FeedPost> {
        return from(this.feedPostRepository.save(feedPost));
    }

    // calling find method that is being passed to 'from' and converted into Observable
    findAllPosts(): Observable<FeedPost[]> {
        return from(this.feedPostRepository.find());
    }

    updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> { // UpdateResult == 
        return from(this.feedPostRepository.update(id, feedPost));
    }

    deletePost(id: number): Observable<DeleteResult> {
        return from(this.feedPostRepository.delete(id));
    }

}
