<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Category;
use App\Models\Source;
use App\Models\News;
use App\Models\Multimedia;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // ---------- Users ----------
        $admin = User::create([
            'name'     => 'Admin Bolivian Daily',
            'email'    => 'admin@boliviandaily.bo',
            'password' => Hash::make('admin123'),
            'access'   => 'admin',
            'state'    => 'A',
        ]);

        // ---------- Sources ----------
        $sources = [
            ['name' => 'Bolivian Daily', 'url' => 'boliviandaily.bo'],
            ['name' => 'ABI Noticias',   'url' => 'abi.bo'],
            ['name' => 'Erbol Digital',  'url' => 'erbol.com.bo'],
        ];
        $sourceIds = [];
        foreach ($sources as $s) {
            $sourceIds[] = Source::create(array_merge($s, ['state' => 'A']))->id;
        }

        // ---------- Categories ----------
        $cats = [
            ['name' => 'Nacional',       'url' => 'nacional'],
            ['name' => 'Economía',       'url' => 'economia'],
            ['name' => 'Internacional',  'url' => 'internacional'],
            ['name' => 'Seguridad',      'url' => 'seguridad'],
            ['name' => 'Sociedad',       'url' => 'sociedad'],
            ['name' => 'Cultura',        'url' => 'cultura'],
            ['name' => 'Tecnología',     'url' => 'tecnologia'],
            ['name' => 'Deportes',       'url' => 'deportes'],
            ['name' => 'Salud',          'url' => 'salud'],
            ['name' => 'Interesante',    'url' => 'interesante'],
        ];
        $catMap = [];
        foreach ($cats as $c) {
            $catMap[$c['url']] = Category::create(array_merge($c, ['user_id' => $admin->id, 'state' => 'A']))->id;
        }

        // ---------- News ----------
        $faker = \Faker\Factory::create('es_ES');
        
        // Unsplash images for news (reliable public images)
        $images = [
            'https://images.unsplash.com/photo-1585829364618-1b5c29c9e5c8?w=800',
            'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
            'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800',
            'https://images.unsplash.com/photo-1524781289445-ddf8d5695e53?w=800',
            'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
            'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800',
            'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?w=800',
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
            'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800',
        ];

        // Generate 20 articles for each category
        foreach ($catMap as $catUrl => $catId) {
            for ($i = 0; $i < 20; $i++) {
                $title = rtrim($faker->realText(rand(50, 90)), '.');
                $slug = \Illuminate\Support\Str::slug($title);
                // Unique check or random number to prevent slug collision
                $slug = $slug . '-' . rand(100, 999);
                
                $news = News::create([
                    'user_id'          => $admin->id,
                    'category_id'      => $catId,
                    'source_id'        => $sourceIds[array_rand($sourceIds)],
                    'url'              => $slug,
                    'pretitle'         => $faker->boolean(40) ? mb_strtoupper($faker->word()) : null,
                    'title'            => $title,
                    'path'             => '/' . $catUrl . '/' . $slug,
                    'subtitle'         => $faker->boolean(70) ? $faker->realText(150) : null,
                    'enter'            => $faker->boolean(50) ? $faker->realText(200) : null,
                    'body'             => '<p>' . implode('</p><p>', $faker->paragraphs(rand(3, 7))) . '</p>',
                    'author'           => $faker->boolean(80) ? $faker->name() : null,
                    'publication_date' => $faker->dateTimeBetween('-1 month', 'now'),
                    'state'            => 'A',
                ]);

                // Create main featured image
                Multimedia::create([
                    'news_id'     => $news->id,
                    'description' => $title,
                    'url'         => $images[array_rand($images)],
                    'type'        => 'image',
                    'state'       => 'A',
                ]);
            }
        }
    }
}
