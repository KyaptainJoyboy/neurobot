
# PAULI-AID

PAULI-AID is a mental health support system for students and teachers, designed to run on a Raspberry Pi with a 3.5-inch touchscreen display.

## Setup Instructions

1. Clone this repository to your Raspberry Pi:
   ```
   git clone https://github.com/your-username/pauli-aid.git
   cd pauli-aid
   ```

2. Create and activate a virtual environment:
   ```
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

4. Initialize the database:
   ```
   python
   >>> from app import init_db
   >>> init_db()
   >>> exit()
   ```

5. Make the startup script executable:
   ```
   chmod +x start_pauli_aid.sh
   ```

6. Set up the system to run the script on startup:
   ```
   sudo nano /etc/rc.local
   ```
   Add the following line before the `exit 0` line:
   ```
   /home/pi/pauli-aid/start_pauli_aid.sh &
   ```

7. Reboot your Raspberry Pi:
   ```
   sudo reboot
   ```

After rebooting, the PAULI AID system should start automatically and be accessible via the touchscreen display.

## Usage

- Students can log in to track their mood and access mental health resources.
- Teachers can log in to manage tasks and access burnout prevention tools.

## Troubleshooting

If the system doesn't start automatically:
1. Check the logs: `journalctl -xe`
2. Ensure all file paths in the startup script are correct.
3. Make sure the virtual environment is set up correctly.

## Security Considerations

- This is a basic implementation and should not be used to store sensitive information without proper security measures.
- Consider implementing HTTPS for production use.
- Regularly update the system and dependencies to patch any security vulnerabilities.

