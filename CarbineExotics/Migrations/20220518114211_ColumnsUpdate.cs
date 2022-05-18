using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarbineExotics.Migrations
{
    public partial class ColumnsUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "User_Password",
                table: "Users",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "User_FullName",
                table: "Users",
                newName: "FullName");

            migrationBuilder.RenameColumn(
                name: "User_CreditCard_No",
                table: "Users",
                newName: "CreditCard");

            migrationBuilder.RenameColumn(
                name: "User_Address",
                table: "Users",
                newName: "Address");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Users",
                newName: "User_Password");

            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "Users",
                newName: "User_FullName");

            migrationBuilder.RenameColumn(
                name: "CreditCard",
                table: "Users",
                newName: "User_CreditCard_No");

            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Users",
                newName: "User_Address");
        }
    }
}
