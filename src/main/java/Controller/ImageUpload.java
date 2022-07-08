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
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Part part = request.getPart("image");
        String fileName = part.getSubmittedFileName();
        String path = getServletContext().getRealPath("/img/products" + File.separator + fileName);

        InputStream is = part.getInputStream();

        boolean test = false;

        try {
            byte[] byt = new byte[is.available()];
            int read = is.read();
            FileOutputStream fileOutputStream = new FileOutputStream(path);
            fileOutputStream.write(byt);
            fileOutputStream.flush();
            fileOutputStream.close();
            test = true;
        } catch (IOException e) {
            e.printStackTrace();
        }

        if (test) {
            response.getWriter().print("file salvato in questo path: " + path);
        }
        else
            response.getWriter().print("error");

    }

}
