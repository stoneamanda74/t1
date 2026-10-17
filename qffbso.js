外链999!wailian999！

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163rktemrom.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163asrecvkb.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163hgkiikhj.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163aklzgscr.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163cixlylvf.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163szaejegy.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163slfoeinm.html

$obj?->method()
来源：http://www.xuanzx.com/163ducfhcwa.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163xodqgagz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163xrquymiq.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163wnillchn.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cmdntoea.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163xbziqfhw.html

"值: {$a}"
来源：http://www.sxryk.cn/163mguajejx.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163eqndotsg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163uphfkjex.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163qszdsbgn.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163lvbogkzq.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163zkrxklmk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163rgqqiusu.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ccbzbwha.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163trkjebwx.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163szbctxjt.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163odnlqdxg.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163gbnyayhc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163udgyutxg.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163nfqgipoy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163vxggtbsa.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163cchjduhu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ekpyonme.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163tojjxoqu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163mflmeqlc.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163liwdakqy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163afrmsyxg.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163jossgnra.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163tcnkpyiz.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163jtttgwrq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ankmvwzn.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163kxyaqpdq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163pifkgslt.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163fvvxwewn.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163vglyzqzu.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163dvbnemry.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163thqcieoc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ttomihej.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ecqjcrid.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163zwakrjca.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163gsjmoyte.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163gxuzbefd.html

composer require psr/container
来源：http://www.xuanzx.com/163otsqktul.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163jftovnkc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163qxcedyjy.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163pvcbxcku.html

composer require twig/twig
来源：http://www.aibaodan.cn/163hwfkuwil.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163fhbpslsf.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163thwbdavu.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ybgwmonk.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163klxwnbzn.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163vdmrvmbd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163cfbyyibg.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163rgzqftie.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163goozcjbz.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163diaydcor.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163monpkuqw.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163sddspiyz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ukezhwco.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163rtbkfvtx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163xncabrka.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163ufctgark.html

a?.b?.c
来源：http://www.aibaodan.cn/163qbofmgrl.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163tcfhivkq.html

a ?? b
来源：http://www.aibaodan.cn/163scmcxjdq.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163yhgbkvqn.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163zclqwxgy.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163jviokvcf.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163aoizyfpn.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163qlndymuh.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163lbyvbcay.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163yhltweaa.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163iboglpur.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163nlwcyabi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163qvtwtxkb.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163icwcmiti.html

structuredClone(obj)
来源：http://www.xuanzx.com/163lyunjloi.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163mwivxoby.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163aqdsqzfs.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163qzrvghdz.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163wjxruppy.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163hddwwhkc.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ygpcsvqp.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163kooynmax.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163idvqqecb.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ttsjljkp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pzdahzpo.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163agwoawgv.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163mnwrbvlz.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163zdtcbsat.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ujfrmmre.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163lrpdthtw.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163qkpjgwxh.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ygzgjcjn.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163dammmdcv.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163utkvajez.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163gvcqwhok.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163sthsqoui.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ufthkree.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163uypgatuw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fvursquh.html

[U105] JS：节流
来源：http://www.xuanzx.com/163mtukjfxg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163nnqnwcpk.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163qpqxtieu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163finrplde.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163fkxhiluq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163naoipkef.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163pypjjfsf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163cxcqbwxk.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163znbtjvol.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163glthflvw.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163aktvqqpy.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ohdmvulf.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163hrzzukvq.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163rvyylbwv.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163cgpygkyl.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163msvawjpx.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163scstrhvm.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163texutuen.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163zfvtjwhp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mxgxtibj.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163tmqoxanu.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163eyguxfma.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163xihnxfrv.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ugblrdfg.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163lkrsoiwo.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163mrvkryxt.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163nsdknesw.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163fxjtinuk.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163xjdtfdvi.html

npx vite build
来源：http://www.sxryk.cn/163labayriz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163hmveqasl.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163llupgotn.html

================================================================================
来源：http://www.aibaodan.cn/163ahztwcyt.html

统计汇总
来源：http://www.aibaodan.cn/163ywsmljkd.html

================================================================================
来源：http://www.xuanzx.com/163prmbzfmy.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ytdctitg.html

Python ......... 252
来源：http://www.xuanzx.com/163rgupizml.html

PHP ............ 252
来源：http://www.xuanzx.com/163zvyvqhoc.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163zptwitly.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163jmnsslwc.html

Java ........... 212
来源：http://www.xuanzx.com/163biyjnslk.html

Go ............. 212
来源：http://www.xuanzx.com/163mzuglzsu.html

Ruby ........... 212
来源：http://www.xuanzx.com/163raioqznz.html

C# ............. 212
来源：http://www.xuanzx.com/163dbfhpcrd.html

C .............. 30
来源：http://www.aibaodan.cn/163gjdpwfys.html

C++ ............ 30
来源：http://www.xuanzx.com/163dzixupvb.html

SQL ............ 90
来源：http://www.aibaodan.cn/163javgsjsu.html

Bash ........... 80
来源：http://www.xuanzx.com/163ytgzlhxv.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163dtuwhtti.html

Swift .......... 15
来源：http://www.sxryk.cn/163guoognwk.html

Lua ............ 10
来源：http://www.sxryk.cn/163pdwejoll.html

Perl ........... 10
来源：http://www.xuanzx.com/163udubtlth.html

Scala .......... 10
来源：http://www.sxryk.cn/163sbuckcmd.html

------------------------------------
来源：http://www.xuanzx.com/163oinaojig.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163hpjzfopk.html

按章节统计：
来源：http://www.sxryk.cn/163iiltkhho.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wbldmour.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163dfibuzve.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163wpjqyutg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xccxsdbn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163zpxcxvfy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zubrezcj.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qzgmmwmf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ntbabwuk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qermrjuv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163hypftwvg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pgcsulqd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dxfgkikd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163awuzsonx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zxsywtmy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163wxnowvjv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wmjvzguy.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163nnppqrri.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163sqqytlft.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163lthzkirs.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163flgpbwbx.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163zbpghnxe.html

------------------------------------
来源：http://www.xuanzx.com/163lboldtwq.html

合计                                  2106 条
来源：http://www.xuanzx.com/163tbgmpabi.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wydbzdup.html

使用提醒
来源：http://www.xuanzx.com/163ajakwpoh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163atmynzyh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163zloitcub.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163wsgnyjyk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163xvxolkob.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163wqooyqpc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163xtskqmeh.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163onugxxjk.html

================================================================================
来源：http://www.sxryk.cn/163creqeibj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163nwznwtwx.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163nsxcqajw.html

================================================================================
来源：http://www.aibaodan.cn/163hatxrmvj.html

【收录内容】
来源：http://www.aibaodan.cn/163luyanlpa.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163funwiuxa.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163msgrfvzv.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vbmxmbem.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163btidzcdg.html

【使用说明】
来源：http://www.sxryk.cn/163vobasoxp.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163wamqnktx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163xlibjxzi.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ppkrjsxw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163bpsqmdsa.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163uqxtfmyh.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163snkwnqzi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163msmlfxyu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163rswrhplh.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163pcxyalft.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163volpuhwo.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163uisefpug.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163ywngbnkk.html

【文件统计】
来源：http://www.aibaodan.cn/163cfillktr.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163hwaquchw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vsdboezi.html

目  录
来源：http://www.sxryk.cn/163rvhcfvlv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mxxeiemw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163nzjrooqb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163stzwtkgx.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mneovlmc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ddatprev.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163yfdovlhm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163vkuwrreg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163uzbnndrl.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163jbewjodu.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bfvpnqtn.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ztkjgxlh.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163euqayufa.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163whujdtuu.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wpfqyyrx.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163aipibsfn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ydkispce.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163psolosxh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163ibtscxlg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163ktmafttl.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163asophnvm.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163dogjuvnw.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163plnpptqb.html

================================================================================
来源：http://www.xuanzx.com/163jauegjmg.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163gikojtmp.html

================================================================================
来源：http://www.xuanzx.com/163zmfdkwre.html

[A01] Hello World
来源：http://www.sxryk.cn/163azdfwtcu.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163likdjsxa.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163dgawwzzx.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163qpgsaalc.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163nlgzavka.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163mjmuztoc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163cofiwzag.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163tgabruhf.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163xpiddnio.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163uvqujjzw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163qxbrpaup.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163dblagtce.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ndzxwjvy.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163gyvudynw.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163qkzmwbwq.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163sjandmis.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ioetipge.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163btugjbwo.html

[A03] 常量定义
来源：http://www.xuanzx.com/163oyabgpdq.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ekmcuuba.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163smdmlpjp.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163rlytqump.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163rjppjtvi.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163buesbiat.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163qvbaqawa.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163lwxvoqxx.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163sgqvqmbp.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163kcidsucm.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163jbpqiimp.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163jjmqscke.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163cxqbxsif.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163cyorwtqp.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163rtwnuxoz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163adaqzang.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163fejhyfvo.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163pckclghw.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163ptqbgwfp.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163acqqdlui.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163msqbltig.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ykftcatn.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ewoqnpxi.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163plmgpfwq.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jpoqiwic.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163bumzrdtr.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ksivuhcr.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ypwvbggi.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163phkgtbdp.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163igsirypd.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163tcoojyqx.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163liozpmia.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163xeweuneg.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163gtvfzllw.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163jpvzddud.html


<!-- 参考信息 -->