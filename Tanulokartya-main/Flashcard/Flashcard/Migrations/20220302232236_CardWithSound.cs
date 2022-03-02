using Microsoft.EntityFrameworkCore.Migrations;

namespace Flashcard.Migrations
{
    public partial class CardWithSound : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Answer_sound",
                table: "Card",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Question_sound",
                table: "Card",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Answer_sound",
                table: "Card");

            migrationBuilder.DropColumn(
                name: "Question_sound",
                table: "Card");
        }
    }
}
