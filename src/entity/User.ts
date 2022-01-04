import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Index(["username", "email"], { unique: true })
@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    phone: string


    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { User }