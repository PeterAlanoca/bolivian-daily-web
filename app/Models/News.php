<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class News extends Model
{
    protected $fillable = [
        'user_id', 'category_id', 'source_id', 'intranet_id',
        'url', 'pretitle', 'title', 'path', 'subtitle', 'enter',
        'body', 'author', 'publication_date', 'state',
    ];

    protected $casts = [
        'publication_date' => 'datetime',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function source(): BelongsTo
    {
        return $this->belongsTo(Source::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function multimedia(): HasMany
    {
        return $this->hasMany(Multimedia::class);
    }

    public function mainImage(): ?string
    {
        $media = $this->multimedia()
            ->where('type', 'LIKE', 'image%')
            ->where('state', 'A')
            ->first();
            
        return $media ? $media->url : null;
    }
}
