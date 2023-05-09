using Microsoft.EntityFrameworkCore;
using polls.Models;
using System.Data.SQLite;
using Microsoft.EntityFrameworkCore.Sqlite;
using Microsoft.OpenApi.Models;
using System.Configuration;
using Microsoft.AspNetCore.Cors;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<PollContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DevConnection"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(builder =>
 builder.WithOrigins("http://localhost:3000")
 .AllowAnyHeader()
 .AllowCredentials()
 .AllowAnyMethod());

app.UseAuthorization();

app.MapControllers();

app.Run();
