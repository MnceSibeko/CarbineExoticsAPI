using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarbineExotics.Migrations
{
    public partial class CreateInitial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Car_Images",
                columns: table => new
                {
                    CarUnique_ID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Car_ID = table.Column<int>(type: "int", nullable: false),
                    Car_Exterior_Front = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Car_Exterior_Rear = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Car_Interior = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Car_Images", x => x.CarUnique_ID);
                });

            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    Car_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CarUnique_ID = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category_ID = table.Column<int>(type: "int", nullable: false),
                    Car_Year = table.Column<int>(type: "int", nullable: false),
                    Car_Make = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Car_Model = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Car_Color = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Car_About = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Car_Price = table.Column<decimal>(type: "decimal(10,2)", nullable: false),
                    Car_Mileage = table.Column<int>(type: "int", nullable: false),
                    Car_Image = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Car_Transmission = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.Car_ID);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    Category_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Category_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category_Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.Category_ID);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Order_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Order_Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    User_ID = table.Column<int>(type: "int", nullable: false),
                    Car_ID = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category_ID = table.Column<int>(type: "int", nullable: false),
                    Car_Make = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Car_Model = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Order_Total_Price = table.Column<decimal>(type: "decimal(10,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Order_ID);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    User_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    User_Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    User_FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    User_CreditCard_No = table.Column<int>(type: "int", nullable: false),
                    User_Address = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.User_ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Car_Images");

            migrationBuilder.DropTable(
                name: "Cars");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
