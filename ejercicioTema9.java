public class Main {

    public static void main(String[] args) {
        // write your code here
        Cliente cliente = new Cliente();
        cliente.edad = 23;
        cliente.nombre = "Andres";
        cliente.telefono = 9118998;
        cliente.credito = 2300;
        System.out.println("los datos del cliente son: " + cliente.nombre + " " + cliente.edad + " " + cliente.telefono + " " + cliente.credito);
        Trabajador trabajador = new Trabajador();
        trabajador.nombre = "Santiago";
        trabajador.edad = 22;
        trabajador.telefono = 9117887;
        trabajador.salario = 15000;
        System.out.println("los datos del cliente son: " + trabajador.nombre + " " + trabajador.edad + " " + trabajador.telefono + " " + trabajador.salario);
    }
}

class Persona {
    int edad;
    String nombre;
    int telefono;
}

class Cliente extends Persona {
    int credito;
}

class Trabajador extends Persona {
    int salario;
}
