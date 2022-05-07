import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class FeedPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: 'Test String'})
    body: string;

    @Column({default: 'Photo filepath'})
    photo: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdOn: Date;
}