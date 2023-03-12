/** @odoo-module **/

import { registry } from "@web/core/registry";
import { LazyComponent } from "@web/core/assets";

const { Component, xml } = owl;

class AwesomeDashboard extends Component {}

AwesomeDashboard.components = { LazyComponent };
AwesomeDashboard.template = xml `
<LazyComponent bundle="'awesome_tshirt.dashboard'" Component="'AwesomeDashboard'" props="props"/>
`;

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);