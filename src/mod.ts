import { DependencyContainer } from "tsyringe";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";

class Mod implements IPostDBLoadMod
{
    postDBLoad(container: DependencyContainer)
    {
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer"); // Item Database Server
        const items = databaseServer.getTables().templates.items; // Database Server
        Object.values(items).forEach((item) => {
            item._props.ExaminedByDefault = true;
        })    
    }
}

module.exports = { mod: new Mod()}
// HAVE FUN and plz credit me when building something with code from here I'm asking very nicely :D