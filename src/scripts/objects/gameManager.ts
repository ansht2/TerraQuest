// GameManager.ts
export default class GameManager {
    // Properties and methods of your GameManager
    score: number = 0;
    country: { x: number; y: number } | null = null;
    player_name: string | null = null
    coins: number = 20;
    ownedTerritories: { x: number; y: number }[] = [];
    playerName = 'HUGO';
    currentWeapon: { name: string; imageKey: string } | null = null;
    setCurrentWeapon(weaponKey: string, weaponName: string): void {
        this.currentWeapon = { name: weaponName, imageKey: weaponKey };
    }

    getCurrentWeapon(): { name: string; imageKey: string; } | null {
        return this.currentWeapon;
    }
    // other properties and methods...
}
