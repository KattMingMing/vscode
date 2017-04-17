/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import { escape } from 'vs/base/common/strings';
import { localize } from 'vs/nls';

export function used() {
}

export default () => `
<div class="welcomePageContainer">
	<div class="welcomePage">
		<div class="title">
			<h1 class="header">${escape(localize('welcomePage.vscode', "Code Intelligence"))}</h1>
			<p class="subtitle">${escape(localize('TODO', "Code Intelligence for public and private code hosted on GitHub available at Sourcegraph.com. Get Sourcegraph for code hosted on your own servers with Sourcegraph Enterprise."))}</p>
		</div>
		<div class="row">
			<div class="splash">
				<p>
					<img class="integrations" src="/Users/kingy/src/github.com/kattmingming/vscode/src/vs/workbench/parts/welcome/page/enterprise/sg-ent-gh-e-logo.svg"/>
					<img class="integrations" src="/Users/kingy/src/github.com/kattmingming/vscode/src/vs/workbench/parts/welcome/page/enterprise/sg-ent-bb-logo.svg"/>
					<img class="integrations" src="/Users/kingy/src/github.com/kattmingming/vscode/src/vs/workbench/parts/welcome/page/enterprise/sg-ent-gl-logo.svg"/>
				</p
				<p>
					<img class="integrations" src="/Users/kingy/src/github.com/kattmingming/vscode/src/vs/workbench/parts/welcome/page/enterprise/sg-ent-phab-logo.svg"/>
					<img class="integrations" src="/Users/kingy/src/github.com/kattmingming/vscode/src/vs/workbench/parts/welcome/page/enterprise/sg-ent-git-logo.svg"/>
				</p>
			</div>
			<div class="commands">
				<h2>${escape(localize('welcomePage.start', "Get to know Sourcegraph!"))}</h2>
				<ul>
					<li class="showInteractivePlayground"><button data-href="command:workbench.action.showInteractivePlayground"><h3>${escape(localize('TODO-Extensions', "Download the extensions"))}</h3> <span>Integrate with Chrome, VS Code, Atom and more</span></button></li>
					<li class="TODO"><button data-href=""><h3>${escape(localize('TODO-LearnSourcegraph', "Learn Sourcegraph"))}</h3> <span>${escape(localize('TODO-Features', "Walk through the features on the web"))}</span></button></li>
					<li class="TODO"><button data-href=""><h3>${escape(localize('TODO-RepoJump', "Jump to a repository"))}</h3> <span>${escape(localize('TODO-GetStarted', "Ready to get started? Jump straight into a repo"))}</span></button></li>
					<li class="TODO"><button data-href=""><h3>${escape(localize('TODO-Enterprise', "Enterprise"))}</h3> <span>${escape(localize('TODO-RunOwn', "Want to run Sourcegrph on your own architecture"))}</span></button></li>
				</ul>
			</div>
		</div>
	</div>
</div>
`;