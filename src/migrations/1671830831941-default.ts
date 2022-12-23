import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671830831941 implements MigrationInterface {
    name = 'default1671830831941'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`subjects\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`classSubject\` (\`classId\` int NOT NULL, \`subjectId\` int NOT NULL, INDEX \`IDX_480e5cd20a97d6facd3d2b724d\` (\`classId\`), INDEX \`IDX_5593221df9749adf2581a3fbb2\` (\`subjectId\`), PRIMARY KEY (\`classId\`, \`subjectId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`classSubject\` ADD CONSTRAINT \`FK_480e5cd20a97d6facd3d2b724dc\` FOREIGN KEY (\`classId\`) REFERENCES \`subjects\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`classSubject\` ADD CONSTRAINT \`FK_5593221df9749adf2581a3fbb28\` FOREIGN KEY (\`subjectId\`) REFERENCES \`classes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`classSubject\` DROP FOREIGN KEY \`FK_5593221df9749adf2581a3fbb28\``);
        await queryRunner.query(`ALTER TABLE \`classSubject\` DROP FOREIGN KEY \`FK_480e5cd20a97d6facd3d2b724dc\``);
        await queryRunner.query(`DROP INDEX \`IDX_5593221df9749adf2581a3fbb2\` ON \`classSubject\``);
        await queryRunner.query(`DROP INDEX \`IDX_480e5cd20a97d6facd3d2b724d\` ON \`classSubject\``);
        await queryRunner.query(`DROP TABLE \`classSubject\``);
        await queryRunner.query(`DROP TABLE \`subjects\``);
    }

}
