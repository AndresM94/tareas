public class Main {

    public static void main(String[] args) {
        // write your code here
        Persona persona = new Persona();
        persona.setEdad(17);
        persona.setNombre("Daniela");
        persona.setTelefono(9119889);
        System.out.println("La persona se llama " + persona.getNombre() + " su edad es " + persona.getEdad() + " años y su telefono es " + persona.getTelefono());
    }
}

class Persona{
    private int edad;
    private String nombre;
    private int telefono;

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }
}
