async function connectMetamask() {
    try {
      // ตรวจสอบว่า MetaMask มีอยู่หรือไม่
      const provider = await detectEthereumProvider();

      if (provider) {
        // หากมี MetaMask ให้ขออนุญาตให้เข้าถึงบัญชี
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected:', accounts[0]); // แสดงบัญชีที่เชื่อมต่อ
        alert('Connected to Metamask');
      } else {
        alert('Please install MetaMask');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to connect to Metamask');
    }
  }