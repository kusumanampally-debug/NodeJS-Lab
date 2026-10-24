import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class CRUDExample {

    private static final String URL =
            "jdbc:mysql://localhost:3306/mydb";
   private static final String USER = "labuser";
private static final String PASSWORD = System.getenv("MYSQL_PASSWORD");
    public static void main(String[] args) {

        try (Connection con = DriverManager.getConnection(
                    URL, USER, PASSWORD);
             Scanner sc = new Scanner(System.in)) {

            System.out.println("Connected to MySQL successfully!");

            while (true) {
                System.out.println("\n--- Employee CRUD Menu ---");
                System.out.println("1. Insert employee");
                System.out.println("2. View employees");
                System.out.println("3. Update employee salary");
                System.out.println("4. Delete employee");
                System.out.println("5. Exit");
                System.out.print("Choose an option: ");

                int choice = sc.nextInt();
                sc.nextLine();

                switch (choice) {
                    case 1:
                        System.out.print("Enter employee name: ");
                        String name = sc.nextLine();
                        System.out.print("Enter salary: ");
                        int salary = sc.nextInt();
                        sc.nextLine();

                        try (PreparedStatement ps = con.prepareStatement(
                                "INSERT INTO employees (name, salary) VALUES (?, ?)")) {
                            ps.setString(1, name);
                            ps.setInt(2, salary);
                            ps.executeUpdate();
                            System.out.println("Employee inserted.");
                        }
                        break;

                    case 2:
                        try (PreparedStatement ps = con.prepareStatement(
                                "SELECT id, name, salary FROM employees");
                             ResultSet rs = ps.executeQuery()) {
                            while (rs.next()) {
                                System.out.println(
                                    rs.getInt("id") + " | "
                                    + rs.getString("name") + " | "
                                    + rs.getInt("salary"));
                            }
                        }
                        break;

                    case 3:
                        System.out.print("Enter employee ID: ");
                        int updateId = sc.nextInt();
                        System.out.print("Enter new salary: ");
                        int newSalary = sc.nextInt();
                        sc.nextLine();

                        try (PreparedStatement ps = con.prepareStatement(
                                "UPDATE employees SET salary = ? WHERE id = ?")) {
                            ps.setInt(1, newSalary);
                            ps.setInt(2, updateId);
                            int rows = ps.executeUpdate();
                            System.out.println(rows > 0
                                    ? "Employee updated."
                                    : "Employee ID not found.");
                        }
                        break;

                    case 4:
                        System.out.print("Enter employee ID to delete: ");
                        int deleteId = sc.nextInt();
                        sc.nextLine();

                        try (PreparedStatement ps = con.prepareStatement(
                                "DELETE FROM employees WHERE id = ?")) {
                            ps.setInt(1, deleteId);
                            int rows = ps.executeUpdate();
                            System.out.println(rows > 0
                                    ? "Employee deleted."
                                    : "Employee ID not found.");
                        }
                        break;

                    case 5:
                        System.out.println("Program ended.");
                        return;

                    default:
                        System.out.println("Invalid option.");
                }
            }

        } catch (SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        }
    }
}