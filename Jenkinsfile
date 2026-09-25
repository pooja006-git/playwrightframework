pipeline {
    agent any
    tools {
        nodejs 'node26'
        allure 'allure'
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
    }

    environment {
        TEST_CREDS = credentials('e2e-test-login')
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                export TEST_CREDS_USERNAME="${TEST_CREDS_USR}"
                export TEST_CREDS_PASSWORD="${TEST_CREDS_PSW}"

                bat 'npm run test:login'
            }
        }
    }

    post {
        always {
            allure([
                results: [[path: 'my-allure-results']]
            ])
        }
    }
}