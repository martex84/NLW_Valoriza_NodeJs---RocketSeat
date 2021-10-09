import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Expose } from "class-transformer"

@Entity("tags")
export class Tags {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    uptimestamp_at: Date;

    @Expose({ name: "nameCustom" })
    nameCustom(): string {
        return `#${this.name}`
    }

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}
