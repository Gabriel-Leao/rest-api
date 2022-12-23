import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671830010035 implements MigrationInterface {
    name = 'default1671830010035'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`classes\` ADD \`description\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`classes\` DROP COLUMN \`description\``);
    }

}
