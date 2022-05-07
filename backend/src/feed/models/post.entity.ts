import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class FeedPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: 'Some Info about the main post'})
    body: string;

    @Column({default: 'C:/Users/tyler/Desktop/Coding/Web/portfolio/photos/code_snippet.png'})
    photo: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdOn: Date;
}