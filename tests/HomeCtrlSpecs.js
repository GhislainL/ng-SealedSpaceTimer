describe('HomeCtrl', function() {
  
  var $scope, $controller;
  
  beforeEach(function(){
    module('MyApp');
    module('timer');
    module('ngRoute');
    module('ui.bootstrap');
    module('pascalprecht.translate');
  });

  beforeEach(inject(function($rootScope, _$controller_){
      $scope = $rootScope.$new();
      $controller = _$controller_;

      $controller('HomeCtrl', {'$scope': $scope});
  }));
  
  
  it('default shape should be rectangle', inject(function($controller){
    expect($scope.shape).toEqual('rectangle');
  }));
  
  describe('Volume', function() {
    it('compute rect volume 1', inject(function($controller){
      //expect($scope.shape == 'rectangle');
      $scope.shape = 'rectangle';
      $scope.hauteur = 1;
      $scope.largeur = 1;
      $scope.longueur = 1;
      
      $vol = $scope.computeVolume();
      expect($vol).toBe(1);
    }));
    
    it('compute sphere volume 1', inject(function($controller){
      $scope.shape = 'sphere';
      $scope.rayon = 1;
      
      $vol = $scope.computeVolume();
      expect($vol).toBeCloseTo(4.19);
    }));
    
    it('compute cylinder volume 1', inject(function($controller){
      $scope.shape = 'cylindre';
      $scope.rayon = 1;
      $scope.hauteur = 1;
      
      $vol = $scope.computeVolume();
      expect($vol).toBeCloseTo(3.14);
    }));
    
    it('known volume 3', inject(function($controller){
      $scope.shape = 'chimpanzee';
      $scope.volume = 3;
      
      $vol = $scope.computeVolume();
      expect($vol).toBe(3);
    }));
  });
  
  describe('Enough space', function() {
    it('should be enough space', inject(function($controller){
      $scope.shape = 'chimpanzee';
      $scope.volume = 1;
      $scope.nbPersonne = 1;
      
      $space = $scope.isEnoughSpace();
      expect($space).toBe(true);
    }));
    
    it('should NOT be enough space', inject(function($controller){
      $scope.shape = 'chimpanzee';
      $scope.volume = 1;
      $scope.nbPersonne = 100;
      
      $space = $scope.isEnoughSpace();
      expect($space).toBe(false);
    }));
  });
  
  describe('Time left', function() {
    it('time left in 1m3 for 1 person', inject(function($controller){
      $scope.shape = 'chimpanzee';
      $scope.volume = 1;
      $scope.nbPersonne = 1;
      
      // time left in sec = 3600 * 1.5 * $scope.computeVolume() / $scope.nbPersonne;
      $timeLeft = $scope.computeTimeLeft();
      expect($timeLeft).toBeCloseTo(5400);
    }));
    
    it('time left in 1m3 for 2 persons', inject(function($controller){
      $scope.shape = 'chimpanzee';
      $scope.volume = 1;
      $scope.nbPersonne = 2;
      
      // time left in sec = 3600 * 1.5 * $scope.computeVolume() / $scope.nbPersonne;
      $timeLeft = $scope.computeTimeLeft();
      expect($timeLeft).toBeCloseTo(2700);
    }));
    
    it('compute time left in a rect volume 1 for 1 person', inject(function($controller){
      //expect($scope.shape == 'rectangle');
      $scope.shape = 'rectangle';
      $scope.hauteur = 1;
      $scope.largeur = 1;
      $scope.longueur = 1;
      $scope.nbPersonne = 1;
      
      $timeLeft = $scope.computeTimeLeft();
      expect($timeLeft).toBeCloseTo(5400);
    }));
    
    it('compute time left in a rect volume 1 for 1 person', inject(function($controller){
      //expect($scope.shape == 'rectangle');
      $scope.shape = 'rectangle';
      $scope.hauteur = 1;
      $scope.largeur = 1;
      $scope.longueur = 1;
      $scope.nbPersonne = 2;
      
      $timeLeft = $scope.computeTimeLeft();
      expect($timeLeft).toBeCloseTo(2700);
    }));
    
    it('compute time left in sphere rayon 1 for 1 person', inject(function($controller){
      $scope.shape = 'sphere';
      $scope.rayon = 1;
      
      $vol = $scope.computeVolume();
      expect($vol).toBeCloseTo(4.19);
      $timeLeft = $scope.computeTimeLeft();
      expect($timeLeft).toBeCloseTo(22626);
    }));
    
    it('compute time left in a cylinder r 1 et h 1 for 1 person', inject(function($controller){
      $scope.shape = 'cylindre';
      $scope.rayon = 1;
      $scope.hauteur = 1;
      
      $timeLeft = $scope.computeTimeLeft();
      expect($timeLeft).toBeCloseTo(16956);
    }));
  });
});