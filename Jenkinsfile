pipeline {
  agent any
  stages {
    stage('snyk dependency scan') {
      tools {
        snyk 'snyk-latest'
      }	
      steps {
        snykSecurity(
          snykInstallation:’SnykStep’
          snykTokenId:’my-project-snyk-api-token’
          organisation: 'cloudbees',
          severity: 'high',
          snykInstallation: 'snyk-latest',
          snykTokenId: 'snyk',
          targetFile: 'https://github.com/berenicehdr/robovac.git',
          failOnIssues: 'true'

	  sh '''
         snyk test
             '''
        )		
      }
    }
  }
}
