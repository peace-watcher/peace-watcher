# Peace Watcher SDK

Peace Watcher SDK provides tools for real-time weapon attack detection and notification using React and React Native.

## Installation

Install the package using npm:

```bash
npm install peace-watcher
```

## Usage

### Initialization

First, initialize the PeaceWatcher SDK in your application:

```jsx
import PeaceWatcher from 'peace-watcher';

// Initialize the PeaceWatcher SDK
PeaceWatcher.initialize();

```

### Registering CCTV

Register CCTV information using the `registerCCTV` method:

```jsx
import PeaceWatcher from 'peace-watcher';

const initCCTV = async (event) => {
  event.preventDefault();
  try {
    await PeaceWatcher.registerCCTV({
      id: 'cctv123',
      location: 'Seoul, South Korea',
    });
    alert('CCTV가 성공적으로 등록되었습니다.');
  } catch (error) {
    console.error('CCTV 등록 중 오류 발생: ', error);
    alert('CCTV 등록에 실패했습니다.');
  }
};

```

### Handling Danger Detection

Set up a listener for danger detection events:

```jsx
import PeaceWatcher from 'peace-watcher';

// Set up the danger detected listener
PeaceWatcher.onDangerDetected((info) => {
  showAlert('흉기난동 감지!', `위치: ${info.location}. 조심하세요!`);
});

function showAlert(title, message) {
  // Implement your alert logic here
  alert(`${title}\n${message}`);
}

```
### Using RealTimeDetection Component
Integrate the RealTimeDetection component to handle real-time video feed and detect dangerous situations:

```jsx
import React, { useState } from 'react';
import { RealTimeDetection } from 'peace-watcher';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Peace Watcher App</h1>
      <button onClick={initCCTV}>Register CCTV</button>
      <RealTimeDetection setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <div>
          <h2>Alert: Dangerous Situation Detected</h2>
          <button onClick={handleModalClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;
```


## Contributing

Feel free to open issues or submit pull requests if you find bugs or have suggestions for improvements.