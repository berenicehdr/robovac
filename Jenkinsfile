pipeline {
  agent any
  stages {
    stage('snyk dependency scan') {  
                        steps {
              snykSecurity projectName: 'project-js',
              severity: 'high',
              snykInstallation: 'SynkStep',
              snykTokenId: 'my-project-snyk-api-token',
               targetFile: '/home/ec2-user/robovac'
                 
            }
         }
  }
}
