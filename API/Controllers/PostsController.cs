using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostsController: ControllerBase
    { 
        private readonly DataContext _context;
        public PostsController(DataContext context);
        
    }
}