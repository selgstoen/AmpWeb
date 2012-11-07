function ViewModel() {
    var self = this;



    self.entries = ko.observableArray([
        new Amplifier("123", "Marshall", "JVM410"),
        new Amplifier("234", "Marshall", "JCM 900")
    ]);
}

function Amplifier(regNumber, manufacturer, model) {
    this.RegNumber = regNumber;
    this.Manufacturer = ko.observable(manufacturer);
    this.Model = ko.observable(model);
}

var viewModel = new ViewModel();

ko.applyBindings(viewModel);