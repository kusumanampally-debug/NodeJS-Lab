import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ShoppingCartController")
public class ShoppingCartController extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
                          throws IOException {

        String action = request.getParameter("action");

        if (action != null) {
            switch (action) {
                case "register":
                    handleRegistration(request, response);
                    break;
                case "login":
                    handleLogin(request, response);
                    break;
                case "addToCart":
                    handleAddToCart(request, response);
                    break;
                default:
                    response.sendError(
                        HttpServletResponse.SC_BAD_REQUEST,
                        "Invalid action"
                    );
            }
        } else {
            response.sendError(
                HttpServletResponse.SC_BAD_REQUEST,
                "Action parameter missing"
            );
        }
    }

    private void handleRegistration(HttpServletRequest request,
                                    HttpServletResponse response)
                                    throws IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        out.println("Registration request received for: " + username);
    }

    private void handleLogin(HttpServletRequest request,
                             HttpServletResponse response)
                             throws IOException {
        String username = request.getParameter("username");

        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        out.println("Login request received for: " + username);
    }

    private void handleAddToCart(HttpServletRequest request,
                                 HttpServletResponse response)
                                 throws IOException {
        String item = request.getParameter("item");

        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        out.println("Item received: " + item);
    }
}
