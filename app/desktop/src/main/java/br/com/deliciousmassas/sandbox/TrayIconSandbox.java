package br.com.deliciousmassas.sandbox;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

public class TrayIconSandbox {

    // the size should be 24x24
    static InputStream getLogo() {
        ClassLoader classloader = Thread.currentThread().getContextClassLoader();
        return classloader.getResourceAsStream("icons/blank.png");
    }

    static void printCounter(int counter, Graphics2D g) {
        if(counter < 10) {
            g.drawString(counter + "", W - FONT_SIZE, 10);
        }
        else {
            g.drawString("+9", W - 2*FONT_SIZE, 10);
        }
    }

    static byte[] writeOnImage(int counter)  {
        try {
            InputStream is = getLogo();
            BufferedImage im = ImageIO.read(is);
            Graphics2D g2 = im.createGraphics();
            g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
                    RenderingHints.VALUE_ANTIALIAS_ON);
            Font font = new Font("Serif", Font.PLAIN, FONT_SIZE);
            g2.setFont(font);
            g2.setColor(Color.black);

            printCounter(counter, g2);

            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(im, "png", baos);

            return baos.toByteArray();
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return new byte[] {};
    }

    static Image newImage(int counter) {
        return Toolkit.getDefaultToolkit().createImage(writeOnImage(++counter));
    }

    static int counter = 0;
    static int FONT_SIZE = 8;
    static Image image = newImage(counter);
    static TrayIcon trayIcon = new TrayIcon(image, "test");

    static final int W = 24;
    static final int H = 24;


    public static void main(String[] args) {


        if(SystemTray.isSupported()) {
            SystemTray tray = SystemTray.getSystemTray();

            trayIcon.setImageAutoSize(false);
            trayIcon.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    System.out.println("In here");
                    trayIcon.displayMessage("Tester!", "Some action performed", TrayIcon.MessageType.WARNING);
                    trayIcon.setImage(newImage(counter++));
                }
            });

            try {
                tray.add(trayIcon);
            } catch (AWTException e) {
                System.err.println("TrayIcon could not be added.");
            }
        }
    }

}
