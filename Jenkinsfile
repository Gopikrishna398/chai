pipeline {
    agent any

    environment {
        PORT = "3000"
    }

    stages {

        stage('Clone') {
            steps {
                echo "Cloning repository..."
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Application') {
            steps {
                bat 'set PORT=3000 && node index.js'
            }
        }
    }
}
