using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Flashcard.Controllers {

    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UploadAudioController : Controller {
        public IActionResult Upload() {
            try {
                var file = Request.Form.Files[0];
                var folderNameSounds = Path.Combine("Resources", "Sounds");
                string pathToSave;
                if (file.Length > 0) {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');

                    var dbPath = Path.Combine(folderNameSounds, fileName);
                    pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderNameSounds);
                    var fullPath = Path.Combine(pathToSave, fileName);

                    using (var stream = new FileStream(fullPath, FileMode.Create)) {
                        file.CopyTo(stream);
                    }

                    return Ok(new { dbPath });
                }
                else {
                    return BadRequest();
                }
            }
            catch (Exception ex) {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
}

