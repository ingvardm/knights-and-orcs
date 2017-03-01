module.exports = {
    engineConfig: {
        subsystems: [
            'video',
            'input'
        ],

        video: {
            resolution: {
                x:600,
                y:400
            }
        },

        input: {
            mouse: {
                handleClicks: true
            }
        }
    }
}