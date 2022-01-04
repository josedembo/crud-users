import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import { v4 as uuid } from "uuid";

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