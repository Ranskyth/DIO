using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using TrilhaApiDesafio.Context;

var builder = WebApplication.CreateBuilder(args);

var StringConection = builder.Configuration.GetConnectionString("ConexaoPadrao"); 

// Add services to the container.
builder.Services.AddDbContext<OrganizadorContext>(option => option.UseMySql(StringConection, ServerVersion.AutoDetect(StringConection)));

builder.Services.AddControllers().AddJsonOptions(options =>
    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
