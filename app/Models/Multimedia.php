<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Multimedia extends Model
{
    protected $fillable = ['news_id', 'description', 'url', 'type', 'state'];

    public function news()
    {
        return $this->belongsTo(News::class);
    }
}
