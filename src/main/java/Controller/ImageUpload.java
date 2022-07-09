package Controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;

import java.io.*;
import java.nio.file.Paths;

@WebServlet("/image-upload")
@MultipartConfig
public class ImageUpload extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        response.setContentType("application/json");
        PrintWriter writer = response.getWriter();

        Part part = request.getPart("image");
        String fileName = part.getSubmittedFileName();
        String img_path = getServletContext().getRealPath("/img/products" + File.separator + fileName);

        part.write(img_path);
        File img = new File(img_path);
        if(img.exists())
            writer.print("{\"fileName\" : \"" + fileName  + "\"}");
        else
            writer.print("{\"fileName\" : \"error\"}");

        writer.flush();
    }

}
