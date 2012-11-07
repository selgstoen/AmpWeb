using System.Collections.Generic;
using System.Web.Http;
using GuitarWeb.Interfaces;
using GuitarWeb.Models;
using GuitarWeb.Repository;

namespace GuitarWeb.Controllers
{
    public class AmplifierController : ApiController
    {
        private readonly IAmplifierRepository _amplifierRepository;

        public AmplifierController()
        {
            _amplifierRepository = new AmplifierRepository();
        }


        public IEnumerable<Amplifier> GetAmplifiers()
       {
           return _amplifierRepository.GetAmplifiers();
       }

    }
}
