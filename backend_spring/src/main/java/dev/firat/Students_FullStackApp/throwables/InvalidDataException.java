package dev.firat.Students_FullStackApp.throwables;

public class InvalidDataException extends RuntimeException{
    public InvalidDataException(String message) {
        super(message);
    }
}
