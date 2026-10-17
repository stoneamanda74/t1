外链999!wailian999！

[U61] PHP：正则
来源：http://www.sxryk.cn/163nauukopj.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163grnytxqw.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ljmfcnad.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163oikycwyd.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163lrgyxwoq.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163rmmtkbkn.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163mknywqed.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163webmtabi.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163xfyokgpv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163wugersbo.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163bszucusb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163oibnfyyl.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163uzdsqfmg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163jlbtnpkg.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163zxpmhqhx.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163wueoxyeo.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163zdikdexr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163zbafuweu.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163kozymijn.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163geynsyga.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163hdwdawwg.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163qskglmzg.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163zydgeewg.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163hzicolml.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163bapphrfg.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163cppddoih.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163twqdnhdi.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163zazbphsj.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163afbenynn.html

composer require psr/container
来源：http://www.xuanzx.com/163bprkcgcg.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163dshreyih.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163nsyudymb.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ggxnicsg.html

composer require twig/twig
来源：http://www.sxryk.cn/163xtqigmxg.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163hskbqwcg.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163zbqyjnsm.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163cbelkyzu.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163bbjjkryu.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163xbbsxbyc.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163lrmrpeps.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163nrlclijf.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163tgwclrdf.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163piksjjww.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163qyxffufw.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163nzcyvxnl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163qwdgzayg.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163vgvakowp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zpruishj.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163lsintfov.html

a?.b?.c
来源：http://www.sxryk.cn/163ftgtsjyp.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163kyxmrgag.html

a ?? b
来源：http://www.xuanzx.com/163xkxvdbfm.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163thfkbhvx.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163djtnyhmy.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163zzudjcqe.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163vqwcxmio.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163lhfeimlq.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163nczkrigo.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163wraihrvz.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tqtsfwmp.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163jppdjpfc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163jihculpc.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163vcaslqfv.html

structuredClone(obj)
来源：http://www.sxryk.cn/163fjsccqgz.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163nktvdvbj.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163dgiifuqu.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163xclabhgw.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163ranvasis.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163nbyoyxte.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163dcyrbhph.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163smkgcfce.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vkjjnvop.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ygprvpel.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xkqllojb.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163mjhbkjdw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163qokvmkml.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163mpdupigh.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163nkfryttp.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163zdsbhfah.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163zrhhuhgp.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163lkvbbdsn.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163nijhrgms.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163bwimfjjc.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163kpvbvptb.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163wshlwspm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163ruxxpxzt.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163qkrczznp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pbfzoccb.html

[U105] JS：节流
来源：http://www.sxryk.cn/163tcoevwxj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163mifwblnn.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163xywklmyl.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163mvjbzqlk.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163hgodsytg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163uyxedmos.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163heufrgnm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163dnvfbrce.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163rcassmtr.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tgaxzepu.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163dzjslkah.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163zwykedep.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ogkgwrra.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163gthpptzt.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163pkbcilos.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163nmvosfqk.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163sugehxhu.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oggsposb.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163dzvdyqvy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qjqptkpp.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ggioangz.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163wadsrptl.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163vnujffhv.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163hihjxkah.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jcnwihfy.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163equefxrn.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163mofkwlck.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163vicwbqfe.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163nrcwyvac.html

npx vite build
来源：http://www.xuanzx.com/163fxmhmpyl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163cgvpanqu.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163qvgymunj.html

================================================================================
来源：http://www.sxryk.cn/163mvfrppzl.html

统计汇总
来源：http://www.aibaodan.cn/163wvverwwl.html

================================================================================
来源：http://www.sxryk.cn/163hklluhro.html

按语言统计（条）：
来源：http://www.xuanzx.com/163fjuxyuxk.html

Python ......... 252
来源：http://www.aibaodan.cn/163vvzudgvz.html

PHP ............ 252
来源：http://www.xuanzx.com/163xnjjggdl.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163djfeuarq.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163peltdwvx.html

Java ........... 212
来源：http://www.xuanzx.com/163mcfzoadj.html

Go ............. 212
来源：http://www.xuanzx.com/163hxkxxthu.html

Ruby ........... 212
来源：http://www.xuanzx.com/163woftgoeb.html

C# ............. 212
来源：http://www.xuanzx.com/163xhldphok.html

C .............. 30
来源：http://www.xuanzx.com/163elbubums.html

C++ ............ 30
来源：http://www.xuanzx.com/163ninzbfmy.html

SQL ............ 90
来源：http://www.sxryk.cn/163xcqmrkpt.html

Bash ........... 80
来源：http://www.aibaodan.cn/163lpeomalt.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163yvbvodqd.html

Swift .......... 15
来源：http://www.aibaodan.cn/163uhrgjmsx.html

Lua ............ 10
来源：http://www.aibaodan.cn/163icvnsqpu.html

Perl ........... 10
来源：http://www.sxryk.cn/163bejctljg.html

Scala .......... 10
来源：http://www.xuanzx.com/163qurmixsx.html

------------------------------------
来源：http://www.aibaodan.cn/163opaovrih.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163abztqcqk.html

按章节统计：
来源：http://www.aibaodan.cn/163lcwvpstk.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163dyhidvym.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vzphzlcj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163djembxkf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163hwynjcxg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163qaiexvjn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kkjqccnt.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zxouxuey.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163gknssies.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qloceaeb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hbwglxmk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nqdniybx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fgrkxurh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163svbxairm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vcifabyq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163dfxqmysi.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163slgmbxvo.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163onsdsinx.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163wormyubi.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163mfcvcipn.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163zitrqinh.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163blrmvtif.html

------------------------------------
来源：http://www.sxryk.cn/163gekwgsaj.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ttvfdtyr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qmxwooxi.html

使用提醒
来源：http://www.aibaodan.cn/163ujilngqq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163dtmxicqy.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163ewekleat.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163tsltqldr.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ydxccowx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163rmyxidfz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163fryeloac.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163zrbelbvt.html

================================================================================
来源：http://www.xuanzx.com/163okwsfdzf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163xxrcbyhg.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163qzoeqjvu.html

================================================================================
来源：http://www.aibaodan.cn/163vdwpgtir.html

【收录内容】
来源：http://www.sxryk.cn/163wenifrrw.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163narqkxky.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163tbqwpgmi.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163vvdpyqxc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163drebhlmb.html

【使用说明】
来源：http://www.xuanzx.com/163bweycxil.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ihwmceuf.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163xbnumzmt.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163evfdxxml.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163notlogsd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163iffrtlyc.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163jlbifwaa.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163tffvutbn.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163vuwssrzc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163jnogfafo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ocswhocu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163vwgvbtwo.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163mcjljyll.html

【文件统计】
来源：http://www.aibaodan.cn/163xwuljdvw.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163gocrlqmj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163drqzatvy.html

目  录
来源：http://www.xuanzx.com/163basegvpt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mnbmnmzy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163vpjnfgxu.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qpszivqg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163dfpqjzak.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163igrmgoqs.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163iassglcg.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163njmijtvu.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163yywvasmi.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163dmwkhbym.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163svhstcxj.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163dlfrssmr.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163lpkdbtfo.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dgijzpmg.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zvqysrux.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163liphmvpa.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163cgpcclwf.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ffpnhsha.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163kafmwzki.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163pwalhhta.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163psbdwkat.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ualeyhob.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163tfphfcfi.html

================================================================================
来源：http://www.xuanzx.com/163nvwojudm.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163uctvipej.html

================================================================================
来源：http://www.xuanzx.com/163drohbzzl.html

[A01] Hello World
来源：http://www.aibaodan.cn/163jaosjyfb.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163yomhinud.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163tpghemkp.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163vcpwygnb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163cvyoelym.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163rjbenrpk.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163foevuoln.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163cukwhvwl.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163tzgeyyto.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163sqecbgnq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163csekzbzu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163mwvyxwjn.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163mqbzmvuz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163fpwneqts.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163iuvkzoba.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163hlmkmulm.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163vjlaiyop.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163tedgqlra.html

[A03] 常量定义
来源：http://www.xuanzx.com/163pdyypquv.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163khiihhrp.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163xpnqkpvb.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163tjcqzkcy.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163epyhvvpl.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163pklciodq.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ovwmsnej.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163rzafvbdp.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163bnvlaill.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163ogzopybr.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163agpqqzxm.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163tvrcyptr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163ujfzgljd.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163kjfxccyz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163iydcdwjw.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163faobcrts.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163ubrcsnxs.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163krxwnaux.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163cilvjcrj.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163sybpckuj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163dgyllncc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163vrxghavh.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163qbcwoyhn.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163pgyvwlfo.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fwklfngb.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163oipeqpys.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163skdmbvww.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163faaxodao.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163rgaffyrg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163djisnhmy.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163qqqhwdrs.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163rwaocxmd.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163ppyliczb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163tqiafgch.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163igrszezq.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163pvutaaep.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163gwxinfbd.html

Py:   str(42)
来源：http://www.aibaodan.cn/163unliexuu.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163huxrceln.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163qycjogkp.html

TS:   String(42)
来源：http://www.aibaodan.cn/163pesjncrh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163gwinmeyp.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163vscfmzfs.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ldxhxctk.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163rqaushmi.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163pqzbieln.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163rzqqmloe.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163glrntcro.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163rsuxmkpx.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163htnmwrhj.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163uqypudhu.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163tyjfvyto.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163fuvpmams.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163nbssbcyp.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163boroacxx.html


<!-- 参考信息 -->