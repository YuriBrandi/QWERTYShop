package Controller;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet("/show-images-folder")
public class ShowImageFolder extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        request.setCharacterEncoding("utf8");
        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();

        File fold = new File(request.getServletContext().getRealPath("/img/products"));
        File[] lista = fold.listFiles();

        ArrayList<String> fileName = new ArrayList<>();

        for(File file : lista)
            fileName.add(file.getName());

        String json = new Gson().toJson(fileName);
        System.out.println(json);

        writer.print(json);
        writer.flush();

    }
}
