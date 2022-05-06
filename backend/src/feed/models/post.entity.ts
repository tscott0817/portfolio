import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('feed-post')
export class FeedPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ' '})
    body: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdOn: Date;
}