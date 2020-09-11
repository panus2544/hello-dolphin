
// Define variables
def scmVars

// Start Pipeline
pipeline {

  // Configure Jenkins Slave
  agent any
    environment {
    ENV_NAME = "${BRANCH_NAME == "master" ? "dev" : "${BRANCH_NAME}"}"
  }

  // Start Pipeline
  stages {

    stage('Clone Hellodolphin-WebPR code') {
      // Steps to run build
      steps {
          // Use script to run
          script {
            // Git clone repo and checkout branch as we put in parameter
            scmVars = git branch: "${BRANCH_NAME}",
                          url: 'https://github.com/akira2542/hello-dolphin.git'
          } // End script
      } // End steps
    } // End stage

    stage('Install dependencies and build files') {
      steps {
          sh 'whoami'
          sh 'pwd'
          sh 'ls'
          sh 'cd /var/jenkins_home/workspace/Helloworld-dolphin_WebPR_dev'
          sh'''
            #!/bin/bash
            whoami
            . ~/.bash_profile
            yarn
          '''
          sh'''
            #!/bin/bash
            . ~/.bash_profile
            yarn build
          '''
      } // End steps
    } // End stage

    stage('Build Docker Image') {
      steps {
        sh' sudo docker build -t hellodolphin . '
      } // End steps
    } // End stage

    stage('Tagging Docker Image') {
      steps{
        sh' sudo tag hellodolphin gunfluenza/hellodolphin:build-${BUILD_NUMBER}'
      }
    }
    
    stage('Push image to Docker hub') {
      steps{
        sh' sudo docker push gunfluenza/hellodolphin:build-${BUILD_NUMBER} '
      }
    }
    
    stage('Deploy HelloCockatiel WebPR on Helm') {
      steps {
              sh "helm upgrade -i -f Hellodolphin-PR/values.yaml --wait --namespace=develop hellodeploydev  Hellodolphin-PR "
      } // End steps
    } // End stage


  } // End stages
} // End pipeline
