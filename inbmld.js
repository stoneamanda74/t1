外链999!wailian999！

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163mmhfazbw.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ngnlanhq.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163wvoemshy.html

$obj?->method()
来源：http://www.sxryk.cn/163ogfjicfn.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163hxtxzflo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163ydtradri.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163unlpezzf.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cnqffxti.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163uclojvlu.html

"值: {$a}"
来源：http://www.sxryk.cn/163gcrkfwnj.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ixxcdoqy.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163urupnawn.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163crhpwjgb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fujdqqzr.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163azrnehgh.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163cupjeuuu.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163fxkbbkvs.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163evmephtb.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163zldxptma.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ohmasqyy.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163cennkrbc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ydurpqax.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163yyhewxdo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163yglthdgd.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163snwcxxaj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163agcrfkee.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163sgitxenb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163jpqlcpcf.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163cnhfbsyz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163jddrwqwc.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163rstfmihd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163uvdhfbsb.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163aesjlgve.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163dhwomxuu.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163rskcsfcl.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163awmrsgmy.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163tptotgda.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163tyjbsokl.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163rwluexaj.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163lrkqjybl.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163kudrkhfj.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163avuhinjg.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163dsrbbktg.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163pcgxowva.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163jhnrfimx.html

composer require psr/container
来源：http://www.xuanzx.com/163cntvhwxm.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163sevcwnqn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163kniwbjfb.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163lgiitphg.html

composer require twig/twig
来源：http://www.aibaodan.cn/163ijjplfsq.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163aoizponk.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ahwszlxu.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163tuaqptjp.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163jnggtcgb.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163jyffjhpu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163xngsygff.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163vpuwfchj.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163rilatrzt.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163mhlxcljh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163gsctujab.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163wddlwjox.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163garxgsoj.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163xvkjkwfa.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163oqbbndcf.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163fiipcdsq.html

a?.b?.c
来源：http://www.sxryk.cn/163kxnzmymb.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163tomtgzmf.html

a ?? b
来源：http://www.aibaodan.cn/163phybnvfq.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163tbxoxybk.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163svyilutp.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163zgrezojc.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163znfrcxcq.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163umbctydm.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163bsoydegx.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163iiqvzxmb.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rpdryjzv.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163eyqbbcvr.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163dtitqawk.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163nvszogjv.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163dvmsmhuq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163jofvpnlq.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163vfgtooft.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163ioozujpi.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163orndofip.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163uhvjkowr.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ndjtorpv.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163ytbyzkve.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ycojljbq.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163xmmezguh.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ruwafwix.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163jgmglgxg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163wgwifrsh.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163woelgxcp.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163zlqclwyu.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163vsphsfig.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163mkfnpjrt.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163wvmtquim.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vxfudumz.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ctiposub.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163loimuzjo.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163hoxwbuap.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163uzqtbixf.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163mpodslub.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163czcbqpid.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163nndfrhyu.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163mswmkihb.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163zumrohbj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163cmxgfxfk.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163mfynsvhi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163rnklibpj.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163rkhbvwhn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ikqjtsdw.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163htusbxyo.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163vabjaalt.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163hwtxpjws.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163zvynxlcn.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163kvcbajqa.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163pczfomum.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163fpokhilj.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163wrvsibag.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163niczkphd.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zeoxdgdj.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163jvzyafhi.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qnnevwel.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163fwflqfjw.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163uewuoqph.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163xkeiyifd.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ocigrnzw.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163psdvlmad.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163sjizjfuy.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163irwslrxu.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ohrlebsl.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163vjlffbwj.html

npx vite build
来源：http://www.xuanzx.com/163trkujruf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163afjucasr.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163qwhxhqhn.html

================================================================================
来源：http://www.xuanzx.com/163viqlsyyz.html

统计汇总
来源：http://www.aibaodan.cn/163bvwwawoj.html

================================================================================
来源：http://www.xuanzx.com/163eoczaesn.html

按语言统计（条）：
来源：http://www.sxryk.cn/163mykmyflk.html

Python ......... 252
来源：http://www.sxryk.cn/163yvjcxlaa.html

PHP ............ 252
来源：http://www.sxryk.cn/163dzgejblp.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ybekfvye.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163atrxgsdl.html

Java ........... 212
来源：http://www.xuanzx.com/163aqkxbmaz.html

Go ............. 212
来源：http://www.aibaodan.cn/163itbgsswl.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163pjkyutpo.html

C# ............. 212
来源：http://www.aibaodan.cn/163hnybodpe.html

C .............. 30
来源：http://www.xuanzx.com/163kqjbknmn.html

C++ ............ 30
来源：http://www.aibaodan.cn/163wimmzxao.html

SQL ............ 90
来源：http://www.xuanzx.com/163yxzfpfps.html

Bash ........... 80
来源：http://www.sxryk.cn/163rtatmyax.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163uspdamjo.html

Swift .......... 15
来源：http://www.aibaodan.cn/163bhuzxsxt.html

Lua ............ 10
来源：http://www.aibaodan.cn/163idpkslnl.html

Perl ........... 10
来源：http://www.sxryk.cn/163femdrffh.html

Scala .......... 10
来源：http://www.aibaodan.cn/163oytbbgcb.html

------------------------------------
来源：http://www.xuanzx.com/163ebpluzpd.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163lmrwxsyw.html

按章节统计：
来源：http://www.aibaodan.cn/163wysyknhz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163vbucoeol.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lravvujc.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ondlsefh.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163pnphvswr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163yzbqacuk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163czvjbrug.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hwmfzaqr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163wjlizque.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gqrynrtm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163hwqozkax.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nnxitfym.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163suoqtwgr.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cjmvklmn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163eidazqge.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163nagtaatl.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hhfincqn.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163azrlziyo.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ouksnljy.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163opjmekaj.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163hpglsvsd.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163cktlxksd.html

------------------------------------
来源：http://www.sxryk.cn/163ewouiyps.html

合计                                  2106 条
来源：http://www.sxryk.cn/163momfpnki.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nxultnzo.html

使用提醒
来源：http://www.aibaodan.cn/163blzbsjoi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jtjdpkal.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163gyrsygru.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163ksdrczwd.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163ooacyvrt.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163pehtsgmi.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163mxbwakhv.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163jolmfqjb.html

================================================================================
来源：http://www.aibaodan.cn/163tynxvrhz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163sgjfzdde.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163afvynddg.html

================================================================================
来源：http://www.xuanzx.com/163sqlipolh.html

【收录内容】
来源：http://www.aibaodan.cn/163rujwlaab.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163leolsrgc.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163pocgwuel.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163syookasn.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163qxjhlesg.html

【使用说明】
来源：http://www.xuanzx.com/163xbgtixwi.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ushztpkw.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163fpidrnqw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163vmyaqcby.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ifpddhxc.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163znnjddwq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163egrvhyxr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163fskflkji.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163kjdofruf.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163yazfjzmf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163cfjtscdz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163fjvfltxf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163iekalxtl.html

【文件统计】
来源：http://www.sxryk.cn/163ouuagmoc.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163jvvpbfds.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xitbqlga.html

目  录
来源：http://www.xuanzx.com/163jmhkmyrh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163frljavdt.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163anulpjrr.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163joyrncdt.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163bichrlcy.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163mjksldjo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163gfrwpjmv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163cbipwkcj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163djoivcxr.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163tknkhbmw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zzcgrzlj.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163xsgbeckv.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163khkeuudx.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hwocdpad.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xqespxpc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163okkaomqv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163bqtxizwi.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ldnkkvti.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163jdturmhm.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163cpujlmjb.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163aljyewnd.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163wamgngvi.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163dovcxlgf.html

================================================================================
来源：http://www.aibaodan.cn/163wsgmgcpd.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163raijiuwq.html

================================================================================
来源：http://www.xuanzx.com/163gvgmnsdi.html

[A01] Hello World
来源：http://www.sxryk.cn/163pmoxuxgh.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163avfaqpjl.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163hfkmrzbq.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163ldflipbq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163hemqeijk.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163fnrotdnn.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163xhiitvbt.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163kfxljweh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163txjmepac.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163lvcpqxvv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163hnruwega.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163byggqtvo.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163xlxwtcws.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163dklrxisc.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163flpmozjs.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163cgwggtkb.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163iftwtkoj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163mqgzyzja.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163apqnpgna.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163qkogyzyn.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ddkfqeoi.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163itubthvm.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163dqfadotd.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163hrtxdipb.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163qzjhbits.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163vsauklgn.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163uaogbrnr.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163kftcshuv.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163pvqcpdex.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163bppslyjf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163jvuvdkez.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163gvjknhdy.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163rtdthdit.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163cpkdbhfl.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163eooaxzrf.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163hsgmyfey.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163jfobuurl.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163hnjocqxj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163bpwuielc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163koxedvwi.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wsxdttyv.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163yglsoocq.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163escdtxie.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rcbbouro.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163mvkplfgf.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163fbjuwrzl.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163iisdrlwj.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163nhlfcrsm.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163vatbcbot.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ystfsizw.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163vkpnxpts.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163sthrihpz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163outrdkji.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163wucxsnwy.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163zldvvpvd.html

Py:   str(42)
来源：http://www.aibaodan.cn/163mynufjcr.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163tnazpuck.html


<!-- 参考信息 -->