外链999!wailian999！

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163tprnishh.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ypbqcjls.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163gqgkbsap.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163ektqceex.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163wseyhxxn.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ghostyqu.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163dpzyhcsc.html

$obj?->method()
来源：http://www.aibaodan.cn/163yjgngcsp.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163wvetvfcm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163lmgwnvuq.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163fqtmmnvu.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hytiezav.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163xvijjpdc.html

"值: {$a}"
来源：http://www.sxryk.cn/163jsykjmhz.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163sdvdzvup.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163jzadqrcw.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163fdlrxcao.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163sccrexpy.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163vzrxchtd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163tcpavfvx.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163nefumbnz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ohmhpjub.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163dpdymggm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163qprsffqu.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163wnrmpgoa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163qkckyocp.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163nkieikjz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163hcwzdjsq.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ufykeroz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163oruaikgt.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163wkyxkvhj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163iizjwtgt.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163qgorjdvi.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163aivltzzp.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163zqqyxmwu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163emlyhtby.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163fppbhndr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163vfurlqyg.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163ywggsdqo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163qnyqvsyr.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163iiqgrqsr.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163qcqmkrfs.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ovirwflt.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163zrtljtup.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163lndzpyig.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163fniqfgcy.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163zrslizzn.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163fnqznvjo.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163althwulh.html

composer require psr/container
来源：http://www.sxryk.cn/163crwknfzg.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163miebjmvx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163oltqyrvk.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163rijmaxgs.html

composer require twig/twig
来源：http://www.aibaodan.cn/163zzmtlvwa.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163bzzvawzm.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163svwzpcmv.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163tvciecov.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163izazncfn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ndqgnyff.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163goymuvir.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163bhiwjefe.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ejxkwzic.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163nvjwszee.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163atseygyx.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163xuycjvpn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ubxopitg.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163fjunpudf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163fefhybro.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163chydlbov.html

a?.b?.c
来源：http://www.aibaodan.cn/163tobhcqjf.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163dijizksg.html

a ?? b
来源：http://www.sxryk.cn/163uaodslqy.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ugmalast.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163vytfkwli.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163qbvzufbr.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163bmoougrl.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163wyifowjm.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163eiiyayqn.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163cvzmvnqu.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zmramdom.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163uksunxoc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163lsynndlv.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163eajiwvoz.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163dmvjpfhv.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163rrfrfbea.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163xxvyijvo.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163vguagpfr.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163luksukav.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163kiiqeugx.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163xvjoizvu.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163mgmvdoul.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kdsehfcm.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163tttdvgbb.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xgjnucgn.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163zttsbucw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163gclebyrk.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163yoyiaxja.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163sprejldq.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163thxkdxrm.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163gmjeqadm.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163bfyeujwx.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163tysavejf.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163xntbbrrd.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163jkqegvfa.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163yyvmbqhk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163vkymjtnw.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163uujdiyab.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163biojbhmt.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163tbydxnug.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163rfccrdot.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163yeejtvtf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163bmisblvt.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163borpiyyj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163zjmbfddp.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163zerqxehb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ivfrxcjf.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163phsxugza.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tewaaomr.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163dinmryrd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163yjgmyqzk.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163rlqxkjbx.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163arzjheaz.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163rzaxjnoc.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163yhgeypob.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163sahkimww.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aucboaug.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163jpviifwg.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kqwzrxyi.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163eeytbpxq.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163fbbjicyg.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163wsnnhopj.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163itoiomtp.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163eghqqjrc.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163pofaaydw.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163rxsnzdkr.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163karipgvv.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163yxbhwfjc.html

npx vite build
来源：http://www.aibaodan.cn/163tzylhpun.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163nmlugnmw.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163cnqzczly.html

================================================================================
来源：http://www.xuanzx.com/163uewpeeqc.html

统计汇总
来源：http://www.sxryk.cn/163roigvzto.html

================================================================================
来源：http://www.aibaodan.cn/163xujflbny.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ysljjfob.html

Python ......... 252
来源：http://www.sxryk.cn/163tykjtmli.html

PHP ............ 252
来源：http://www.sxryk.cn/163cpfasvff.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163gbpqjmtc.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163pdbsphkj.html

Java ........... 212
来源：http://www.sxryk.cn/163csrebaxi.html

Go ............. 212
来源：http://www.sxryk.cn/163gtgwpcjm.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163zqvcqrsw.html

C# ............. 212
来源：http://www.xuanzx.com/163spwaufsm.html

C .............. 30
来源：http://www.xuanzx.com/163rionrcor.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ghjwzfiu.html

SQL ............ 90
来源：http://www.xuanzx.com/163xxmisxjz.html

Bash ........... 80
来源：http://www.xuanzx.com/163gafdzdaf.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163olkmcvvi.html

Swift .......... 15
来源：http://www.aibaodan.cn/163kczzehil.html

Lua ............ 10
来源：http://www.sxryk.cn/163yztmwzmy.html

Perl ........... 10
来源：http://www.sxryk.cn/163bltfpymg.html

Scala .......... 10
来源：http://www.xuanzx.com/163vcpwmxsf.html

------------------------------------
来源：http://www.xuanzx.com/163moiizqsj.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163xtditvto.html

按章节统计：
来源：http://www.aibaodan.cn/163tcqdrszx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163mbseaalh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163spzzzren.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163owbsvsyn.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xfxasahq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163rqkdjnfk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163jorwaylw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163oajivgox.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pprtiltx.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zldonmvv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163wlwhykik.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163leqpmfxr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hobkwcdr.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qamtfhew.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163zfjmklry.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163gngzmobq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163oktqgtvx.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ybkrboem.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163leqtvkqz.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163hjjoqgei.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163zxzvictg.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163jxfvcqhw.html

------------------------------------
来源：http://www.xuanzx.com/163dqpfhymy.html

合计                                  2106 条
来源：http://www.sxryk.cn/163zakvbnlr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163rzhltqmu.html

使用提醒
来源：http://www.xuanzx.com/163bxrmpokk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163alcfnzwp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163kyqzupif.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163motrkfqd.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163zvowpwbc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163lpzkslrd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163zwehnmoe.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163wvizxfbf.html

================================================================================
来源：http://www.aibaodan.cn/163fjooucei.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163jkktblvg.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163mabxivyc.html

================================================================================
来源：http://www.xuanzx.com/163tftfmhqo.html

【收录内容】
来源：http://www.aibaodan.cn/163kjbvoltj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163aauaumoo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163rbocmtid.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163bcqgtwxu.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163hhfwdzeg.html

【使用说明】
来源：http://www.aibaodan.cn/163zizjucqa.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163nqsnjgyk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163zjirqkec.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163rntnfomt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163baoquwtj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163lkvimlgd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163yqseemrr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163gwgvdpro.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163fkhtaxbh.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163rubamvxn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163kxpheqwr.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163rzxuzich.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163tocyvnty.html

【文件统计】
来源：http://www.sxryk.cn/163zfuelaii.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163mgbiqlan.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kbyzqzao.html

目  录
来源：http://www.aibaodan.cn/163lkdrerrv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163iagwugrp.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163mhbdvtpk.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163iozmzlto.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163guauntfm.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163pbxkrhrk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163whkockrr.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163tzocrdpj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163asgbgtag.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163irwxshwk.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rxqsoclr.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163gygjcdwa.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mmjkdivl.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fteuqbzs.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hjtibats.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ritjfqkc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163vlwhbgzz.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vildfhvs.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163haktijmh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163ksbhnklw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163tzdukopu.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tmagiiyi.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163wqyakicr.html

================================================================================
来源：http://www.aibaodan.cn/163tfgqrxvj.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163xnpuyjfv.html

================================================================================
来源：http://www.aibaodan.cn/163zjhrvjyn.html

[A01] Hello World
来源：http://www.xuanzx.com/163rujluaqf.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163kuphcgvv.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163vnchobfb.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ehgskuqr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163mftokjnd.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163vlnbkegi.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163zewwpzvi.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163shxhgamb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163jhljixto.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ogugvphm.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163pcaseihm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163behrjvfl.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163byhyigdh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163mwllxcek.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163izhczgmr.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163glufqlkv.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163chzvlsuv.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163nitvwlus.html

[A03] 常量定义
来源：http://www.xuanzx.com/163vkzfqhgi.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163xqrhnlqi.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163axyleodx.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163ntffjazh.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163rdlkzzox.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163wyjfqucl.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163tbflclbx.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163jywckbla.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nxjwkgsg.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163hcpkxswf.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163pwnjjtuc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163pqifhsab.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163hygsyufe.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163xxinlglx.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163uuzrnpgg.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163vyemgbru.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163fdpkzvlb.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163xxapzzhl.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163thotksgx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163gaonmpbu.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163iejyhhhh.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163rgenwykx.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163zqyuxuvq.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163lyblsiev.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163uuvpcgse.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ddduvbof.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163znaycdzh.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163oirvwyfd.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163oxqkqxxt.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163tvhmkuil.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163omvgkvto.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163wtdbbfkb.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163tjbocwwx.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163rojlccpw.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163ujifepsd.html


<!-- 参考信息 -->