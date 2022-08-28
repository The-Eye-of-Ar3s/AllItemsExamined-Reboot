import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

class Mod implements IPostDBLoadMod
{
    private cfg = require("../config.json")
    postDBLoad(container: DependencyContainer)
    {
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer"); // Item Database Server
        const items = databaseServer.getTables().templates.items; // Database Server
        Object.values(items).forEach((item) => 
        {
            if (!(this.cfg.exclude_special || (item._parent != "5c99f98d86f7745c314214b3" && item._parent != "5c164d2286f774194c5e69fa")))
            {
                item._props.ExaminedByDefault = true;
            }
        })    
    }
}

module.exports = { mod: new Mod()}
// HAVE FUN and plz credit me when building something with code from here I'm asking very nicely :D