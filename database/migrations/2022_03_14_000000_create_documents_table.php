<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            // $table->id();
            $table->uuid('id')->primary();
            $table->uuid('user_id');
            $table->string('penandatangan')->nullable();
            $table->string('file');
            $table->integer('size')->default(0);
            $table->string('nama')->nullable();
            $table->date('tanggal')->nullable();
            $table->string('nomor')->nullable();
            $table->string('deskripsi')->nullable();
            $table->string('password')->nullable();
            $table->boolean('mark')->default(0);
            $table->integer('sign')->default(0);
            $table->string('status')->default(0);
            $table->json('spesimen')->nullable();
            $table->integer('read')->default(0);
            $table->integer('view')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documents');
    }
};
