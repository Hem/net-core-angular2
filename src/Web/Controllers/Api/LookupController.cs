using Microsoft.AspNetCore.Mvc;
using WebBase.Models;

namespace WebBase.Controllers.Api
{
    [Route("api/[controller]")]
    public class LookupController : Controller
    {
        public IActionResult Get()
        {
            var lookup = new LookupValue()
            {
                Id = 1,
                Name = "One"
            };

            return new JsonResult(lookup);
        }
    }
}
