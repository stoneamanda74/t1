外链999!wailian999！

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163fjxhfjke.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163chtcckrq.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163nkcadwbs.html

$obj?->method()
来源：http://www.xuanzx.com/163yqlnvbib.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163jfnnfdsm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163stnesuvt.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163mdbnwgbr.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vgusxtid.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163wvloudmp.html

"值: {$a}"
来源：http://www.xuanzx.com/163idnkbhrv.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163svdqpqkq.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163phxfemss.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ownoplqw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163uxkfnfkk.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163yuupjzcf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163znzrmkxz.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163eafavkbp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163abpjkyst.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163fbbhkril.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163fdcucmmp.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163pkermhbp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163rhpazico.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163zwjggqvo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163tzpciswm.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163slcfliet.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163wrrjsiob.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163cowqlqvd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ljvxicqf.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163zyyyayrq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163fbregrbv.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163zmtnicut.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163vfbtnaoj.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163nguiqitl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163zizhlpgg.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163fynftwwr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163jmsfvcgr.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163yrrwrjsm.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163sluxinnl.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163pbkqahvf.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163vbqfjtoy.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163tgdylzya.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163guwctjut.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163vgyzvpnu.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163qgmqbdiz.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163dzlxurxy.html

composer require psr/container
来源：http://www.sxryk.cn/163zgtzhwmt.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163yfmcasxc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163kixunyrb.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163lmwsnywx.html

composer require twig/twig
来源：http://www.xuanzx.com/163wobchwgd.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163riivarnf.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163tspccrtf.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163quwzmvvb.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163jqwzcazx.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163jyepkwvk.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163mrqbmknk.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163hzchijmw.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163wbyqwtki.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163endnkrha.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163gtumgady.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163gdhwalfw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163koirvlkh.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163iojscele.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163mpqfkaic.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163sfjksfwz.html

a?.b?.c
来源：http://www.sxryk.cn/163bcntmlum.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ndjlhnrw.html

a ?? b
来源：http://www.aibaodan.cn/163hpiampba.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163dqisltul.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163hizvmtaf.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163gedkckvr.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163xfkktdks.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163cardmcxs.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163lnslsuwe.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163kyfclgqw.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xfkocgvi.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163cjbdxdwt.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163metyayjf.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163afifrwsk.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163gyhifkvz.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163ludrimpj.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163kwwfipvu.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163djbdytxk.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163ispdzhwc.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163jijbxkxw.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163uyibdmoz.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163pffoovpr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163inpceqzb.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163olejixxq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cllnwdnh.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163pngncpin.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163vaohbdeb.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163aajyebqd.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163kdpbyylv.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163fesjqejp.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163rzssvvwq.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163bbdjmhrt.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163ktobkzlo.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163vhqvxjin.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163cltiehnv.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163cfcrycjc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163oiuacqbw.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163qlqfafdk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163sytcanez.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163rpjhqxrv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163jikldvcl.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163lraspgfy.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163hyrtycec.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163cihxqcue.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163xyhuhzbx.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163tbwdjfvi.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163qyyziyab.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163gyaaeeiq.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zwkixgpn.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163pvfmwqca.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163mgqgqolg.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163vojpjddi.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163yahvgwnt.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163uiyzfytw.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163feghenni.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163gtceqqmw.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163msijdzaf.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163cfpxkejy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163lcjsjuyd.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163idnfyjco.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163otnuxphf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163covsigwl.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163qaszqbpv.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163pbanjdmv.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163qcwdnjiv.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163qziigwog.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163qkizyyxx.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163umybbobu.html

npx vite build
来源：http://www.xuanzx.com/163ithmdosk.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163eznrwzce.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163vwvozwiw.html

================================================================================
来源：http://www.xuanzx.com/163revidnpj.html

统计汇总
来源：http://www.aibaodan.cn/163obenkjhh.html

================================================================================
来源：http://www.sxryk.cn/163yaqiqswe.html

按语言统计（条）：
来源：http://www.sxryk.cn/163usgekgzf.html

Python ......... 252
来源：http://www.sxryk.cn/163hcvuidgd.html

PHP ............ 252
来源：http://www.aibaodan.cn/163rhewdawb.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ujtgvzsw.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163arfqebdd.html

Java ........... 212
来源：http://www.sxryk.cn/163hskadihi.html

Go ............. 212
来源：http://www.sxryk.cn/163yzpkrpht.html

Ruby ........... 212
来源：http://www.sxryk.cn/163kemtlrhg.html

C# ............. 212
来源：http://www.xuanzx.com/163hlvjsqjh.html

C .............. 30
来源：http://www.sxryk.cn/163ngvtgato.html

C++ ............ 30
来源：http://www.aibaodan.cn/163hfqzomif.html

SQL ............ 90
来源：http://www.xuanzx.com/163wdhblafx.html

Bash ........... 80
来源：http://www.aibaodan.cn/163rcgmxmej.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163dyekfxif.html

Swift .......... 15
来源：http://www.aibaodan.cn/163kqghdsyk.html

Lua ............ 10
来源：http://www.sxryk.cn/163kyekisdn.html

Perl ........... 10
来源：http://www.sxryk.cn/163oavbewwv.html

Scala .......... 10
来源：http://www.xuanzx.com/163mxlghaol.html

------------------------------------
来源：http://www.sxryk.cn/163pvglhbnh.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163vjvqzixw.html

按章节统计：
来源：http://www.aibaodan.cn/163mumpwasd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163nttoheiv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163wysyaitw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cvhrayde.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163eprpjipf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163aacazhlz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163baokbgzn.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tnppthwi.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163tpudyueg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163phrbzxba.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163mlwesngb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163synsvmvu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163eacnssrq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kxlfazpm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163gmcyoxga.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163kekylhvb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163czxgvldl.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163juomsgrt.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163uajesquh.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163kklogbiv.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163abanipst.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163rymxuybx.html

------------------------------------
来源：http://www.aibaodan.cn/163wscibhzr.html

合计                                  2106 条
来源：http://www.xuanzx.com/163lbcynnse.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pbeeiqvu.html

使用提醒
来源：http://www.sxryk.cn/163gjpxwyom.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163irozdlom.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163uqgscjjb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163vxeularg.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163khnchxzq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163zazsqloq.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163prxxwbqn.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163hxrjvaig.html

================================================================================
来源：http://www.xuanzx.com/163bdehutyl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163gcwyiadz.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163yhprxslf.html

================================================================================
来源：http://www.aibaodan.cn/163vlmgensn.html

【收录内容】
来源：http://www.aibaodan.cn/163itybgayc.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163yyzmipma.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163dsuwswzm.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163vcpuprxb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163beksyose.html

【使用说明】
来源：http://www.aibaodan.cn/163ctvbgtxd.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ralpcglu.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ejydrjkg.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163ceesmrqd.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163kxrcfmqa.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163eglqchjv.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163udvuiuii.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163jugruywv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163xyppftbm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163uxjgmgkd.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163eulhwdlx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163qrogepen.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163kragqifd.html

【文件统计】
来源：http://www.xuanzx.com/163bivvlwby.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163qvdwdjwu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mihdwgxh.html

目  录
来源：http://www.xuanzx.com/163ylnxfvkc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ezqrlyos.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ejgnxnvw.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ikehlrps.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gppwnkil.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163umlnwmjy.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163qqnekpyh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163wnwgyozf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ljdpzuze.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163asxxajps.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xnjsovfg.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163xkvmvutj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xsfhygyx.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qbfaotts.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163psmacadx.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163cofnsvfw.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163qpgovwat.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rausoeqz.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163fchgjadm.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163dwuudkwd.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163skskcigv.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163aledhiit.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vamkqwzv.html

================================================================================
来源：http://www.aibaodan.cn/163lorfgauo.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163rbizzntd.html

================================================================================
来源：http://www.aibaodan.cn/163bfssmpyj.html

[A01] Hello World
来源：http://www.sxryk.cn/163yolguxqb.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163tnndzjtc.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163seehehvm.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163pdloytuq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163fpownfwk.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163uiksegzl.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163pqhnzgee.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163qsvsesrw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163lfxvlnuz.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163ylbtwjqc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163wsvlqvze.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163wveausdk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163tvgsnqzc.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163tlwdnbkm.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163olqogttu.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163qeekflxk.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163gzdwhpzi.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163kdasljeo.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163oltewhex.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163fjeizhrd.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163qvhstpfr.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163tcskhlbu.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163aqtanfpk.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ftazgyzc.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163uenuasjd.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163xpspuauf.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163oixoflge.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163oaerwxri.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163erakquuw.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163alkowrlb.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163orycvwyf.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163xmqeodjj.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163zslcxqrs.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163ubznbhby.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163blasvkia.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163zuzmajma.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163rqpcpnbr.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163raxmlyrg.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163vodptsxc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163yxewuxba.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163bajqrkqj.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ehpyvkaz.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163bwbgexog.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163rozzvcrx.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ohmbrbss.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163vzjgoiyo.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163oxholcao.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163aeswrkbo.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163lwctsnee.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163eqclbvnw.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163aaaptoxv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163qbziksft.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163mwifjukn.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163jujazwhp.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163avhfeiwu.html

Py:   str(42)
来源：http://www.xuanzx.com/163bzwubahb.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163yiskenwy.html


<!-- 参考信息 -->