import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;

//package edu.gvsu.cis;

public class WebClient {

    public static void main(String[] args) throws UnknownHostException, IOException {
        String hostName = "localhost";
        int portNumber = 8000;
        
        // Step 1: Create a socket that connects to the above host and port number
        Socket socket = new Socket(hostName,portNumber);

        // Step 2: Create a PrintWriter from the socket's output stream
        //         Use the autoFlush option
        PrintWriter printWriter = new PrintWriter(socket.getOutputStream() ,true);

        // Step 3: Create a BufferedReader from the socket's input stream
        BufferedReader in = new BufferedReader(socket.getInputStream());

        // Step 4: Send an HTTP GET request via the PrintWriter.
        //         Remember to print the necessary blank line
        printWriter.println("GET / HTTP/1.1");
        printWriter.println("");
        
        // Step 5a: Read the status line of the response

        // Step 5b: Read the HTTP response via the BufferedReader until
        //         you get a blank line

        // Step 6a: Create a FileOutputStream for storing the payload
        FileOutputStream fos = new FileOutputStream();
        // Step 6b: Wrap the FileOutputStream in another PrintWriter
        PrintWriter pw = new PrintWriter(fos);

        // Step 7: Read the rest of the input from BufferedReader and write
        //         it to the second PrintWriter.
        //         Hint: readLine() returns null when there is no more data
        //         to read

        // Step 8: Remember to close the writer
        printWriter.close();
    }
}