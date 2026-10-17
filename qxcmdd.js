外链999!wailian999！

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163yxwykvfs.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163hrinaqre.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ynbghgbj.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jbyvebmv.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163kgrtqecd.html

"值: {$a}"
来源：http://www.sxryk.cn/163orgdnecn.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163nhnepmim.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ijriuyud.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163mcudhrab.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163npfpttsh.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163msvlnbij.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163frrcbzbt.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163mqyqbyor.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163etooyjax.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ursqjqan.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163npmeifzi.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163qqtyatex.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163cglcerfm.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163juawtsat.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163uhqpnekc.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163rrrgeczi.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163bqvclrej.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163kattzpsz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163asxjuzzi.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163qyinrfcp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163blriulzo.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163lpziwced.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163aisxatla.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163oprjqita.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163aixtryjw.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163tcebmioz.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163aitmrdym.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163myweokio.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163krxhslkz.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163lqgvtbud.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163xzhgbnvx.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163xkdaepcv.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163oarxyarj.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163uqdesyez.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ymtofgww.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163lreacjob.html

composer require psr/container
来源：http://www.xuanzx.com/163bczvknkt.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ytlcslyc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163yvxzpuov.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163rqtkkrhe.html

composer require twig/twig
来源：http://www.aibaodan.cn/163djzqmqpl.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163pqnqetgo.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163wdlhsxba.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163wsmwfnho.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163zliwiqbk.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163uitqrvis.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163qntsdzlb.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163axecgdeo.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ozygoboa.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163yoficxhk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163yeucwnws.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163gadxqzol.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ldugemgx.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163liwburzu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163emutjres.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163bgastyry.html

a?.b?.c
来源：http://www.aibaodan.cn/163ofqrhtvb.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163kukvagib.html

a ?? b
来源：http://www.sxryk.cn/163uecwlhkt.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ijpmxzaw.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163jiwhcnyy.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163unvpiixj.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163nevfgxws.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163vyqyqjpe.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163wtwdpjmg.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163uqkmravw.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tqycglnm.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163bkfdwfxw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163qbfglsig.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163gurfdndf.html

structuredClone(obj)
来源：http://www.xuanzx.com/163kcjkeifc.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ogykmuaf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163mrzpweaa.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163mznqpnvi.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163twwzgnjq.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163jxpnqbej.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vgnmxoxe.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163jluavcsy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163tclsrfpq.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ywjibnsp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vitdhphq.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163owcejonx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163qmcbdfbj.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163uvefsibc.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163temfqluq.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163hsirzzrn.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163yfqgrwyw.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163utxjhsat.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163rgwvlnqq.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163jqyfxbvn.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163udzgaisf.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163nqnpapvb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163chttylvl.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163nrttiskn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163yqwgurbl.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ssxowdtz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163dzebeezm.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163wfubxwmu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ppavscnt.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163eysefrlu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163cqdnvtps.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163felkbiop.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ixurovlu.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163bgyyrgsz.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163sawmwkty.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163jdyexdzg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163nwsmwsru.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163stwerktf.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163lcihqfmz.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163jtocajhv.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163unhvptqw.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163molaudzu.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163khmmkqyp.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ubijebhc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xgmhcdka.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163patnisfe.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163bhsnvctn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163blxbzrry.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163adoqiudx.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163zaepswju.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163lqiuypxl.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163xzeuwwtc.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163unnxvrcm.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163hiocyagr.html

npx vite build
来源：http://www.aibaodan.cn/163odvlmkwu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163pgymlcsy.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163hoizgadg.html

================================================================================
来源：http://www.xuanzx.com/163rdpgxido.html

统计汇总
来源：http://www.sxryk.cn/163imrnavdw.html

================================================================================
来源：http://www.sxryk.cn/163bqqezxlz.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ayhqimns.html

Python ......... 252
来源：http://www.sxryk.cn/163atirvdxg.html

PHP ............ 252
来源：http://www.sxryk.cn/163pfvtfmbh.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163gwhepodm.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163ckksdrzw.html

Java ........... 212
来源：http://www.xuanzx.com/163bvpcennn.html

Go ............. 212
来源：http://www.aibaodan.cn/163ebyrcatk.html

Ruby ........... 212
来源：http://www.xuanzx.com/163dhvhknzh.html

C# ............. 212
来源：http://www.sxryk.cn/163ldsvorls.html

C .............. 30
来源：http://www.sxryk.cn/163dgpxxzrf.html

C++ ............ 30
来源：http://www.xuanzx.com/163tqhdpidq.html

SQL ............ 90
来源：http://www.sxryk.cn/163qrnvwlux.html

Bash ........... 80
来源：http://www.aibaodan.cn/163bidekpra.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163qffxbgzp.html

Swift .......... 15
来源：http://www.aibaodan.cn/163phtisney.html

Lua ............ 10
来源：http://www.xuanzx.com/163wvwuockr.html

Perl ........... 10
来源：http://www.aibaodan.cn/163gspehpcl.html

Scala .......... 10
来源：http://www.aibaodan.cn/163inhbudxq.html

------------------------------------
来源：http://www.xuanzx.com/163dtjcesnx.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163glixtnur.html

按章节统计：
来源：http://www.sxryk.cn/163unxlkpym.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163dymezhbo.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dafttkkr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163igvkgzwd.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163betnkoza.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163gpejkkop.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gbbgfkzq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163idclrdsz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163mjcwkvha.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xttrmqrq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qcckeggp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163asuvfacc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ddhiiclb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163birephxo.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163dsegseoz.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163taqoldmy.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rpykllgm.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163eremkyqn.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163yvvribkz.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163nrsnmnbh.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163pigbsynk.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ypciwsnk.html

------------------------------------
来源：http://www.xuanzx.com/163fxqkzssx.html

合计                                  2106 条
来源：http://www.sxryk.cn/163dyedkehm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163pdbqizoo.html

使用提醒
来源：http://www.aibaodan.cn/163qwngsagg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mpitgfsf.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163eubrgpll.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163lxxnfnfn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163jkqqrwjd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163xmiqnusv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163rwwclobc.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ezcyabth.html

================================================================================
来源：http://www.aibaodan.cn/163bptssicr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163fhmtcrem.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163liyguqqx.html

================================================================================
来源：http://www.sxryk.cn/163rpoanojs.html

【收录内容】
来源：http://www.xuanzx.com/163cuvbmkjb.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163kxpuknlq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163tncnpuuh.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163dxxqucal.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163pqkhxwxv.html

【使用说明】
来源：http://www.aibaodan.cn/163zkdfnmyu.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163priuoamv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163weisnkml.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163xligorzp.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163texozgmt.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163rhsgfdjz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163smiyaxzf.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163kffbavjp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163imfytyyv.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163rimbpzjd.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163tswexwla.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163qcwcujay.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163qsuqwwkb.html

【文件统计】
来源：http://www.xuanzx.com/163sluppdta.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163vfrbjmre.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lruzerps.html

目  录
来源：http://www.aibaodan.cn/163oyzazelw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lctocfgl.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163rirooryg.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ohwrejxs.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fkymwrqb.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163vidfnjje.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163kqneurar.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163lpdjccuf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ygqpjdyn.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163nyfhyfad.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163utjuryfq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163kmaerpea.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hhevnakh.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163csorfedw.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sglturrf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163rqixypmx.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ikcslnpa.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ccwweoye.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163uzalmsnp.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163cvrozpqx.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163dkaqxoth.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163eqjhmlxd.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vzbokvtd.html

================================================================================
来源：http://www.xuanzx.com/163wcidgsit.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163vmcydroy.html

================================================================================
来源：http://www.xuanzx.com/163qptkatov.html

[A01] Hello World
来源：http://www.xuanzx.com/163ewtwhedp.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163oozdhazp.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163fiwrqmlq.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163smnkvzed.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163xfjdtmkd.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163iqttvunm.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163gbcznyqd.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163nfkbbrwz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163pqbqptxv.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ulupwhra.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163hrcgbkkz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ybqxwcba.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163mxxqbghg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163yoqpgrlq.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163tzybitwq.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163rkvrrcar.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163dqajwwhz.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163vfpzqyzn.html

[A03] 常量定义
来源：http://www.xuanzx.com/163oakvnzov.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163lhginohu.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163wkecvptj.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ykeymiyv.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163fwrcemxj.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163etmzqcsx.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163ckznlxrq.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163xhorzyjg.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163kpkwfttz.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163lgdcogsg.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163blvgupgc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ytmobgtr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163uqhqhbxq.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163rbtnfckv.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163djbjqoib.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163mqafyzgd.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163fbhmzndy.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163jsjuucph.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163wodvbtoa.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163qiqyifyc.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163fvpmxwpd.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163sziluxgg.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163gvarqaxt.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163cbbxbyey.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163shdynnrs.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wbrlsdaw.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163xzdfdqgi.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163jqvbphnf.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163tlewbhsk.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ntcmcyeq.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163iqsqxsiw.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163gvfqflkq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163uljqwxji.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163xvcihyth.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163wlankjmt.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163navvgjnn.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163vlstfvkd.html

Py:   str(42)
来源：http://www.xuanzx.com/163ijwbfovn.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163avoedjuh.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163xedsknth.html

TS:   String(42)
来源：http://www.xuanzx.com/163hgsowyfu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163fruaknhl.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163ucwosbaj.html


<!-- 参考信息 -->