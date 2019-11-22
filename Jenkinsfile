pipeline {
  agent any
  stages {
    stage('snyk dependency scan') {  
                        steps {
              snykSecurity projectName: 'project-js',
              severity: 'high',
              snykInstallation: 'Please define a Snyk installation in the Jenkins Global Tool Configuration. This task will not run without a Snyk installation.',
              snykTokenId: 'my-project-snyk-api-token',
               targetFile: '/home/ec2-user/robovac'
                 
            }
         }
  }
}
