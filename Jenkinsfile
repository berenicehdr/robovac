pipeline {
  agent any
  stages {
    stage('snyk dependency scan') {  
                        steps {
	      snykSecurity organisation: 'berenicehdr',
              //snykSecurity projectName: 'project-js',
              severity: 'high',
              snykInstallation: 'SynkStep',
              snykTokenId: 'my-project-snyk-api-token',
               targetFile: 'https://github.com/berenicehdr/robovac.git'
                 
            }
         }
  }
}
