using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeeData(DataContext context) 
        {
            if (!context.Posts.Any())
            {
                var Posts = new List<Post>
                { 
                    new Post {
                        Title = "First post",
                        Body = "Lorem ipsum dolor sit ament",
                        Date = DateTime.Now.AddDays(-10)
                        },
                new Post {
                        Title = "Second Post",
                        Body = " ament ou du bois",
                        Date = DateTime.Now.AddDays(-7)
                        },
                new Post {
                        Title = "Third Post",
                        Body = " sit ament Lorem ipsum",
                        Date = DateTime.Now.AddDays(-10)
                        },
                };

                context.Posts.AddRange(Posts);
                context.SaveChanges();
            }
        }
          
    }
}