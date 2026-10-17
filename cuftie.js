外链999!wailian999！

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163cuudjxxs.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163fhxbwfzo.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163pgtovhth.html

$obj?->method()
来源：http://www.sxryk.cn/163yozbshsk.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163bymdkalf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163hqbtptfl.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163viyjbioo.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yvjcnmfw.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163dgkdumlm.html

"值: {$a}"
来源：http://www.aibaodan.cn/163fylnrjgu.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163zufyzsba.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163mcqriszj.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163uwmcbhix.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jsvjrcgb.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163umgandzk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163tpvjznvf.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163amjggbrg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xbqsecti.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163zcmnydks.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163seqhbojj.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163fygwwzmp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163bjymdvgz.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163nhqnlfnu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ojcsehwk.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163tmuqbneu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163euykdbyv.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163dpzxmayx.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163xbvyximk.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163vpjqhpkk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163sujmeslo.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163cwbzsnst.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163wwyfvtvx.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163phvhvozn.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163hvzhylvq.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163gtrpdgrv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ovmlzvxt.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163zvhjgqmr.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163yjglnjie.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163iebcucdi.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ehuqupen.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163jsalmmqe.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163exyijkrh.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163rglirytk.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163pxmfjmrr.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ulgphcvt.html

composer require psr/container
来源：http://www.aibaodan.cn/163jmelkltv.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163tdrjkfbo.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163sigbtsnp.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163uxvgvysp.html

composer require twig/twig
来源：http://www.sxryk.cn/163qileylqx.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163cvwtnbze.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163zxplwsjo.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ivzxrzyw.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163sedqbucf.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163mmxxuxfy.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163kjmitoam.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163fgpbmlhb.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163psaruoat.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163aeroodoy.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163hiupmyzz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ypapxslv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ujkxqxcp.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163vraqnogz.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163wlhyvfpc.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163cxaahnwr.html

a?.b?.c
来源：http://www.sxryk.cn/163tgfuueih.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163snvfildn.html

a ?? b
来源：http://www.aibaodan.cn/163qbgvnehg.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163dvowhyev.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163gdlixvvm.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163ojukaove.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163xxhxmekx.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163jvmgwmpe.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163itbanajt.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163kgeijorx.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pexhrryn.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163jxtcobfg.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163tgefawst.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163yhdvjyzc.html

structuredClone(obj)
来源：http://www.sxryk.cn/163mbzxdtcg.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163udsokzkf.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163gxygipyl.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163nucwysic.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163bkurgqnt.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163uedyyqci.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163cpzmnpxo.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163lsqbrvup.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cbvvksjh.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163quzqqdfg.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xahleurj.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163hbutxswe.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163tltndrnx.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163cnltiicl.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163qrgbatyi.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163hmcuwejd.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163dlsdmujs.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163bcgqvagi.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vdtuamzp.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163qtxmunwc.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163wtpymyhu.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163uidjlggn.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163uszhzzjj.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163rwoieqaw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jyhpatuk.html

[U105] JS：节流
来源：http://www.sxryk.cn/163attnqlvp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163axcnepcl.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163fdnyyuhy.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163wpxhnntk.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163nbgyhkzp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163fuqvgbfa.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163mvztiiqk.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163bghezpku.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163zhfopvoc.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tgczsizd.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163sfxlgozm.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163vahoogyi.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163qhjovbje.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163nofatigb.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163nhjlzyrt.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163xxjpnokq.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163yututzcf.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yhyxhjvi.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163qiizfdmt.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163exxwnqya.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163gnbxhxyl.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163tpckzmxr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163onvvpkih.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163wiwbrcqi.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163wnoezjjf.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163feioanvw.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163jnkjbxas.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163uyizrfbg.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163dqeafzyi.html

npx vite build
来源：http://www.xuanzx.com/163yqvflwlh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163dkkiwvsg.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163rnugnbpq.html

================================================================================
来源：http://www.aibaodan.cn/163oimqihft.html

统计汇总
来源：http://www.xuanzx.com/163yujzxnjs.html

================================================================================
来源：http://www.xuanzx.com/163llsgwapp.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163wrbaldby.html

Python ......... 252
来源：http://www.aibaodan.cn/163sprsgecv.html

PHP ............ 252
来源：http://www.sxryk.cn/163gduiwsjr.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163esrkbrcw.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163esxkvkil.html

Java ........... 212
来源：http://www.sxryk.cn/163rxcvrjlw.html

Go ............. 212
来源：http://www.aibaodan.cn/163rttgspeq.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163lsdhocof.html

C# ............. 212
来源：http://www.aibaodan.cn/163jyzbshmw.html

C .............. 30
来源：http://www.aibaodan.cn/163tyzebbsa.html

C++ ............ 30
来源：http://www.xuanzx.com/163opxwygkh.html

SQL ............ 90
来源：http://www.sxryk.cn/163hnxucdcn.html

Bash ........... 80
来源：http://www.sxryk.cn/163uzgjguks.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163wokqmvlb.html

Swift .......... 15
来源：http://www.xuanzx.com/163bbjhbmjp.html

Lua ............ 10
来源：http://www.xuanzx.com/163ypobkvnq.html

Perl ........... 10
来源：http://www.sxryk.cn/163gitqgncs.html

Scala .......... 10
来源：http://www.aibaodan.cn/163bumlympe.html

------------------------------------
来源：http://www.xuanzx.com/163iasxsyit.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163mxrspjgc.html

按章节统计：
来源：http://www.aibaodan.cn/163roehmajg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tmwgprzh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tzsgffas.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163blmsaugd.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xgrfgjyl.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163fptevhwx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163pqgrgexn.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gsvdmhrl.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163zvterfmz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bedgfcjs.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ibnsceiz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tewysntx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uktsfbxl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163clrclcpr.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163aegmgain.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163rjlbbiep.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163omuzrvtr.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163apqdqqvm.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163khzwywnv.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163osyhpfgr.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163zgjnkxrx.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163yzpgahyc.html

------------------------------------
来源：http://www.sxryk.cn/163iiegypbz.html

合计                                  2106 条
来源：http://www.sxryk.cn/163jdraxifp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vbigsglb.html

使用提醒
来源：http://www.aibaodan.cn/163zjwlhjol.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tvleaifh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163xaqffxac.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ptpnowdl.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163qrdhulfd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163jhihrsal.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163fczlinrb.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163uzbtmnvm.html

================================================================================
来源：http://www.xuanzx.com/163sjuymnpt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163aholzwrh.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ferywixe.html

================================================================================
来源：http://www.xuanzx.com/163sbfwwkgn.html

【收录内容】
来源：http://www.aibaodan.cn/163uokqlaxz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163jvzfyksi.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163yjkzahif.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163atxawavl.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163plplcdez.html

【使用说明】
来源：http://www.sxryk.cn/163ocrdnppt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163upfbkijs.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163zxbxnpsl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163dwznsbnu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163jryqfbbw.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163fbabmgaa.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163bpygbmpm.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163patbeewh.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163cgfudpcd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163ayezenjd.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163chavgscu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163zwajgwxl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163nhcbbftt.html

【文件统计】
来源：http://www.xuanzx.com/163uqfrtozj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163cfkvwghx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163eerbutcx.html

目  录
来源：http://www.xuanzx.com/163fjqlgjdo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mllqgtpu.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163okqxtzpm.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163aecwebee.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fqzugwld.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163pussfyyl.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163wyeebaiu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163hmgucgbp.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163svrcubmo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163pzqpldew.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163cibnqgbq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163aybgitri.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163khkelfud.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zhcpjsfs.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ygfmgvku.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163cfjxhrms.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163wkfotesc.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xdvdotiv.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163gksmezvd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163mrnirzxj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163gvmuiarg.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163veceknuw.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163netqjuzh.html

================================================================================
来源：http://www.xuanzx.com/163usifnlsy.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163cpogamys.html

================================================================================
来源：http://www.sxryk.cn/163uotfhdfj.html

[A01] Hello World
来源：http://www.xuanzx.com/163hqwwpdtm.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163jfmojwrc.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163oilxjbzj.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163hbwwholx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163yrnrbyml.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163eutisula.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163rewoiwlg.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163dyrtdrdi.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163jqkjbfqm.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163otjpdhtg.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163vuefteda.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163hxiihqpi.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163dmlzlvmf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163bjpxdiwu.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wpffypzz.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163ouakjebv.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163xvgmnpnx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163jatpjwtr.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163filultdd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163dvrmkoxz.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ydvsduyx.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163bxyeysbp.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163ldeqrcht.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163vlctxnja.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163hvpoxatv.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163zcdfvemc.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163tyxrzdep.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163qropxcjr.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163cwsynnol.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163yzeojzst.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163nrsgidsu.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163myqyhjvp.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163ditdtuxs.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163ofhxtvmm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163mqqdwpad.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163gcluutnx.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163qudhonou.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163gpzjrluh.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163tovzapkf.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ewkfoima.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ueecyitj.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ttakoelf.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163mggclhnl.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nitltcmj.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163reguvfph.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163mrukbqad.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163qnnxoqvy.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163fpbihnda.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163hzgfbscy.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163uhpmtmdp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163mjukfrey.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163jdyksixy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163xahgmhaw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ycqwvrhl.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163uvpyxswl.html

Py:   str(42)
来源：http://www.aibaodan.cn/163mfdpcufc.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163hksjikwf.html


<!-- 参考信息 -->