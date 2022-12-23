import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671829311686 implements MigrationInterface {
    name = 'default1671829311686'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`videos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` text NOT NULL, \`url\` text NOT NULL, \`classId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`classes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`videos\` ADD CONSTRAINT \`FK_b2759a809fd4e2583585acdc858\` FOREIGN KEY (\`classId\`) REFERENCES \`classes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`videos\` DROP FOREIGN KEY \`FK_b2759a809fd4e2583585acdc858\``);
        await queryRunner.query(`DROP TABLE \`classes\``);
        await queryRunner.query(`DROP TABLE \`videos\``);
    }

}
