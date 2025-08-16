<?php

namespace Database\Factories;

use App\Models\contact;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;
class ContactFactory extends Factory{
    protected $model = contact::class;

    public function definition(): array{
        $nom  = $this->faker->randomElement([
            'Ben Youssef', 'Ben Ali', 'Ben Mahmoud', 'Ben Salah', 'Ben Ammar', 'Ben Azzouz', 'Ben Sassi', 'Ben Jemaa', 'Ben Hmida', 'Ben Abdallah',
            'Bouazizi', 'Bouzid', 'Chakroun', 'Cherif', 'Gharbi', 'Guesmi', 'Hamdi', 'Hamdoun', 'Kammoun', 'Khlifi',
            'Krid', 'Mahfoudh', 'Makni', 'Mnasri', 'Mokni', 'Rekik', 'Saidi', 'Salhi', 'Sellami', 'Sfar',
            'Soltani', 'Toumi', 'Brahmi', 'Gharsallah', 'Sahli', 'Sassi', 'Boussarsar', 'Ksontini', 'Ben Dhia', 'Bekri',
            'Abdelli', 'Haddad', 'Haddar', 'Mabrouk', 'Jebali', 'Hadj Taieb', 'Hajri', 'Jemmali', 'Masmoudi', 'Bouaziz',
        ]);
        $prenom= $this->faker->randomElement([
            'Mohamed', 'Ali', 'Ahmed', 'Nizar', 'Mounir', 'Rami', 'Karim', 'Habib', 'Hassen', 'Fathi',
            'Hatem', 'Walid', 'Khaled', 'Youssef', 'Nabil', 'Jamel', 'Lotfi', 'Wassim', 'Majdi', 'Samir',
            'Wajdi', 'Riadh', 'Sami', 'Rafik', 'Sofiene', 'Said', 'Anis', 'Foued', 'Mehdi', 'Bassem',
            'Marwen', 'Houssem', 'Chaker', 'Oussama', 'Adel', 'Tarek', 'Fahmi', 'Emna', 'Salwa', 'Nadia',
            'Dorra', 'Imen', 'Ines', 'Nour', 'Mouna', 'Hela', 'Zeineb', 'Amira', 'Wafa', 'Asma',
        ]);
        $term= $this->faker->randomElement(["@gmail.com","@yahoo.com", "@hotmail.com", "@outlook.com", "@mail.com"]);
        $var= Str::random(4, 'alnum');
        $email = strtolower(str_replace(' ', '', $prenom) . '.' . str_replace(' ', '', $nom) .$var. $term);
        return [
            'nom' =>$nom,
            'prenom' =>$prenom,
            'email' => $email,
            'numero_telephone' => $this->faker->unique()->numerify('########'),
            'message' =>$this->faker->paragraph(),
        ];
    }
}
