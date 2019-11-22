pipeline {
  agent any
  stages {
    stage('snyk dependency scan') {
      tools {
        snyk 'snyk-latest'
      }	
      steps {
        snykSecurity(
          organisation: 'cloudbees',
          severity: 'high',
          snykInstallation: 'SnykStep’',
          snykTokenId: 'my-project-snyk-api-token',
          targetFile: 'https://github.com/berenicehdr/robovac.git',
          failOnIssues: 'true'
           )
	  sh '''
         snyk test
             '''
        
      }
    }
  }
}
