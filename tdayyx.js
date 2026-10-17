外链999!wailian999！

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163orahyfap.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163qkyzvcpz.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163rzkahpof.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163viownzdh.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163lgxclxih.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163wtkanaux.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163njypaala.html

$obj?->method()
来源：http://www.xuanzx.com/163scbsxgoy.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163weoqyank.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163chfumtbe.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163itykxjug.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wbhsywqr.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163kdohdhdb.html

"值: {$a}"
来源：http://www.aibaodan.cn/163wupxbtmo.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163cthsakwx.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163mdcbmqhb.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163leqbqxob.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163icnhkgij.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163riqzubbz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163qshiuwvm.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163xhirdpuo.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163kmtniiho.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163dgxpeijr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163drlwmwhx.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ddtnurbt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163ypizxlsc.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163uhjcpnxs.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163wizgsbgf.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163qgizguvf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163geydjubr.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163crsrcxyc.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163uyiiqpjc.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163qighuwmi.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ehmksfic.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163jgryuynt.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ngcagctz.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163nmpjppuk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163xttxrtok.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163onmzctww.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163razglhxp.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163wxpoxktc.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163hwuauqxq.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163mphxjkrh.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163yoisoeiv.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163tbaoqlru.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163hbpegazk.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163mxkgbyza.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163lvpbdymz.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163iifupgbr.html

composer require psr/container
来源：http://www.sxryk.cn/163iejaqegy.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163skcjqayl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ctjkhymu.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163lqnyenmz.html

composer require twig/twig
来源：http://www.sxryk.cn/163oogoohrb.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163wwmcuwbs.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163vpdsshjj.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163zlvuturi.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163uivtjmda.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163lmwghxue.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ljjhfpxr.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163tqmaexuz.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163bltuqxtp.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163zvvkwyph.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163hacehvmt.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163fcnseryd.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163savtevrx.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163nyprbdbw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163thfaxunt.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163lpsnptad.html

a?.b?.c
来源：http://www.aibaodan.cn/163jycvoffs.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163tgkrmewl.html

a ?? b
来源：http://www.xuanzx.com/163nvxbjzwe.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163zvnirayy.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163clqdweac.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163dkeyxrpw.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163fznewnnc.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163gmxviray.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163repsswbg.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163rbeceeym.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fpcbhxix.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163eafkgkns.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163hhkngudm.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163xvtjmemk.html

structuredClone(obj)
来源：http://www.sxryk.cn/163xatwapif.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163vgyzxscp.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163xdklzssi.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163qibaoryw.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163slyuuuaz.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163lpvzwjsi.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163azvjxdge.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163cbjjrfzn.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163leaflrql.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163fvqvlwwd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qwrzjdej.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163cfmfuiig.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163tiyskumu.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163jqkyhrkq.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163njogejkp.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163knbhjksb.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163sciubjjv.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163pzzxbank.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163hyiesoty.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163bkjibxlb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163lrtgbquj.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163hampkeap.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163atcevgso.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163tvpjyrli.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ykyfioay.html

[U105] JS：节流
来源：http://www.sxryk.cn/163tuhxxbuq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163phhvcgvr.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163lsulzmxe.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163uiapjhjt.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163jgaaktbs.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163sgzbxhfh.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163nutbrrbr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ihvmlijq.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163aiateqgr.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163glqimxdg.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163nlbbrrim.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163wrjqilqp.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163fohdepad.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xkuzvwxv.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163zbzvlans.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163madufoxj.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163mkhswywl.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xdqppcqy.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163oflgscmc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kbhcndan.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163dcsvnpzx.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163xwmjvqht.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163qxvexjjb.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ccbbjthi.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163nafvuvgk.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163dszkgmsg.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163bsyxqxfy.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163mipspycb.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163gdbuillp.html

npx vite build
来源：http://www.aibaodan.cn/163ymsxehfe.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163nrnpwnbw.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163lwtgethn.html

================================================================================
来源：http://www.xuanzx.com/163ogjjaslk.html

统计汇总
来源：http://www.aibaodan.cn/163aymjpbgw.html

================================================================================
来源：http://www.sxryk.cn/163vflurwwg.html

按语言统计（条）：
来源：http://www.sxryk.cn/163kwllqvzv.html

Python ......... 252
来源：http://www.aibaodan.cn/163xtsewthb.html

PHP ............ 252
来源：http://www.xuanzx.com/163boyuebmc.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163dklybfbx.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163guafhkjk.html

Java ........... 212
来源：http://www.xuanzx.com/163nwypjjvl.html

Go ............. 212
来源：http://www.aibaodan.cn/163azkghzam.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ihocruia.html

C# ............. 212
来源：http://www.aibaodan.cn/163ucluhaga.html

C .............. 30
来源：http://www.aibaodan.cn/163hvvzypdm.html

C++ ............ 30
来源：http://www.aibaodan.cn/163aklnvlwr.html

SQL ............ 90
来源：http://www.sxryk.cn/163jzmpozoi.html

Bash ........... 80
来源：http://www.sxryk.cn/163qwpdpjbh.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163slftnxpo.html

Swift .......... 15
来源：http://www.aibaodan.cn/163wzjuxsoi.html

Lua ............ 10
来源：http://www.sxryk.cn/163xtfpzosv.html

Perl ........... 10
来源：http://www.xuanzx.com/163vysghlvb.html

Scala .......... 10
来源：http://www.sxryk.cn/163xtgtkztt.html

------------------------------------
来源：http://www.sxryk.cn/163wvluooyq.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ynnyiqwm.html

按章节统计：
来源：http://www.xuanzx.com/163mzjuliya.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163tsdsewge.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mcfvsebl.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tuxgfqsm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ftxltpcq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163lsbxznhc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hztuezql.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163oiafaswy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163luvuqilh.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bfvorfwc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163pkjevxhc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gfkzgtcf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rxbjcysh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gemikzss.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lximrekn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163tnhxgxoz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163julgnctr.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163dbtlxstk.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163dqwegqdu.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ysadvmew.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163pezjzjnd.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163oacjjpbp.html

------------------------------------
来源：http://www.aibaodan.cn/163rhhqfeaa.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163bomzanot.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lvbhrika.html

使用提醒
来源：http://www.aibaodan.cn/163rpkjwaeh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163zjyftazt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163kmdxpjac.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163zvqeokbr.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ozwbxjvj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163haubctmz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163edcwmexy.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163wonhaati.html

================================================================================
来源：http://www.sxryk.cn/163tncsdiou.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163rebivxxc.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ppzfuwha.html

================================================================================
来源：http://www.sxryk.cn/163ghywoddv.html

【收录内容】
来源：http://www.sxryk.cn/163lqkhesmz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ykfdotcg.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163algjlcic.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163odrhxmjl.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163iegclrns.html

【使用说明】
来源：http://www.sxryk.cn/163txbhpqyq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ldelxukh.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163kjtwqpfn.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163dowxvbqn.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163pqbehmgu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163bgplanoc.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163xtpdreiv.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163efkwugqi.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163xdiflxek.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163osnutslx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163bsifjvhb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163imzamycb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163hfkewkfo.html

【文件统计】
来源：http://www.xuanzx.com/163fgjwrxpc.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163hryaopdc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mbuurhvw.html

目  录
来源：http://www.xuanzx.com/163tahspxsu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qsszjdvv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163nzctyrlg.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163zrygfddj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163hbytgoma.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163kgrjeemp.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163qekhpvpp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163jcrakmwr.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ximkbcxd.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163olcjzdfy.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qydrdfho.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163lqiqqukj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163czxyqqit.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kzeemwub.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zavwsgif.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wnlaqxtv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163ascpqnlz.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163clvyqwof.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163xajqersl.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163dwxxrwre.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163gdtltwui.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jzkbpwzk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kgleyygo.html

================================================================================
来源：http://www.sxryk.cn/163wmrruvfj.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163otvtohsh.html

================================================================================
来源：http://www.xuanzx.com/163evsutnzq.html

[A01] Hello World
来源：http://www.xuanzx.com/163hwknuisj.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163fwlcolbx.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163pffxgrrz.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163wcrdiefk.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163pehamwbg.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163fcysvbov.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163zszsvazt.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163yreskukb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163xnmzqfvb.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163xeggqcxs.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163owhvkezz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163wnrntfud.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163biqhaetd.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163fldnsvsx.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163zjgmrogy.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163yeixdcsn.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163xelqnpvy.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ijhiadqs.html

[A03] 常量定义
来源：http://www.xuanzx.com/163ilzrdthy.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163fuumadfj.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ljrphjki.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163trmkwbcn.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163zumypdcx.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163zpobdihd.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163nnejqadx.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ycfjwdhc.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163juppvepo.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163jshgotpb.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163oetbmhvs.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163bwwnfqnz.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ikjzewwi.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163lpbeoihs.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163xohzxkia.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163mejvqqlv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163ynhdlzfc.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163bmmzmqss.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163omavalce.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163cbpxsxyp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163vaoqzzqd.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163whggiodc.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163pstibvgm.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163lpjemnto.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163hojhfbmq.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xmjfuvyi.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wkmeewbp.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163zalviapu.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163cffjnzts.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163bamjtpjs.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163tpnyufyu.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163bzjxotvx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163ebwqwykt.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163nhmekvug.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163kjvalxtv.html


<!-- 参考信息 -->