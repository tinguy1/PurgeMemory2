/**
 * @name PurgeMemory2
 * @authorLink https://github.com/tinguy1
 */
module.exports = class PurgeMemory2 {
	
	getName () {return "PurgeMemory2";}
	
	getDescription () {return "Attempts to flush discord's memory. Doesn't always work well enough, but I have observed best results when used multiple times. But better";}
	
	getVersion() {return "1.0.0";}
	
	getAuthor () {return "tinguy1";}
	
	load() {}
	
	stop() {this.onStop();}
	
	start() {
	 BdApi.showToast('Starting PurgeMemory2', {type: 'info'})
     this.purgeMemoryScript();
	}
    onStop() {
        clearInterval(this.purgeInterval);
    }
	purgeMemoryScript() {       
        this.purgeInterval = setInterval(() => {
          DiscordNative.processUtils.purgeMemory();
          console.log('Purged memory'); 
        }, 2000);     
      }
      
}