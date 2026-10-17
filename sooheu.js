外链999!wailian999！

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163vsgyubsi.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hgxgrfcu.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ozzuxqsb.html

?string $name = null
来源：http://www.sxryk.cn/163jifdyzrz.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163brpobhky.html

int|string $id
来源：http://www.xuanzx.com/163zoiwtvnn.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163uggksbsw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163aiemdqaz.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163tbljesdj.html

public readonly string $name
来源：http://www.sxryk.cn/163rcrzikmj.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163rzxkqkcw.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163xviagnon.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163qmringat.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163vfljgctk.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163hbjkaeug.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163vqeqwalr.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163bkrnfguk.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163xaryoagn.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163urpvqpel.html

$obj?->method()
来源：http://www.sxryk.cn/163hgivfqyn.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163yoakebjq.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163dcuovzcz.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163oxsymfnz.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163begdjdxc.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163scdhctyt.html

"值: {$a}"
来源：http://www.xuanzx.com/163sfkemnai.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163ydhikioe.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163vuqgsayk.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163kbefdkjb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163sjjxjnwh.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163audsoxtk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163pkbavhfe.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163abwjvjzt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163udvgtqan.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163mmugaxdm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163mgeogkzh.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163bptmzwet.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163wzwfgnoh.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163libvpovj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163kbecvspb.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ztoxsmrb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163gbdcwyek.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ubmjtyhu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163cxdjnqyk.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163lgitwgcm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ltzrwuqz.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163kmviqovm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163wmkjkids.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163epqiecve.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163coadxjqp.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163jhagmesq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ieulekdi.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ctzwbhvv.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163vucsfsgc.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163jolubtsd.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163laalyhdw.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163jsefeuty.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163mzowxbvu.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163mbheisgh.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163qaobdadd.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163qdxazixt.html

composer require psr/container
来源：http://www.sxryk.cn/163crmlcjbr.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163awysktks.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163tqejgkjn.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163swmgkhph.html

composer require twig/twig
来源：http://www.sxryk.cn/163kbjvblxi.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ngmmeuyx.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163nigroxyt.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ljmzbwtq.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163rsxkdyxz.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163agqxwlke.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163vzquswub.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163tvnwwian.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163sgnmmxsb.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163gbojcplr.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163clofxppe.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ipqxpqih.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163gzkqfusb.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163ptdcqwig.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163afmbviyn.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163smmnyisc.html

a?.b?.c
来源：http://www.sxryk.cn/163uaytnzjz.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163bhorrodz.html

a ?? b
来源：http://www.sxryk.cn/163lsckvnkl.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163mimvgpad.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163chnhjyls.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163glhteoax.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163tpjlfvky.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163firhotpn.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163jxqwoczf.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163hmygoyea.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163owefklle.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163ayjhtlfx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ylnkenwp.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163vdgwjbse.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163fcpzqkcl.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163vwpcsooa.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163hhealrsx.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163kzmguvse.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163wjuvrurx.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163bfswtdlx.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163wfqflsax.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ibvvrjec.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163sadtbjiz.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163sfukbhwq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zseonqrg.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163eyuigtsd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163rigamnik.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163grdpoquh.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163kksvlaau.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163dqzckjhe.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163bzsaznsb.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163kyszgmng.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ltiflrpp.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163zyemphfg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163jozegitg.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163dqcexqwf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163mgjoilyt.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163tjgcyeoi.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bcvdplaz.html

[U105] JS：节流
来源：http://www.xuanzx.com/163lyhoqdag.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163rveappmv.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163emweewbu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ondemdsb.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ogtntphz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163hafnehyq.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163vokbbpda.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ohglxapb.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163eyatodfk.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163obvpvvte.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163yqlxesdj.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163fmtqxvta.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163sfahpwry.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ugbskmeq.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163iyhrhimh.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rouqwxzr.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163muikqjar.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dhxepqyp.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163uwtbpunc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ikhaapcp.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163huqdjzzi.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163oogllqtp.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163qldpzwna.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163pkyvuaqb.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163nynibslt.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163afdiabge.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163subittei.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163anrnqsxf.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163oyacrkth.html

npx vite build
来源：http://www.xuanzx.com/163lxsivigs.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163vwweabgl.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163banmjgjt.html

================================================================================
来源：http://www.xuanzx.com/163wlgacgkr.html

统计汇总
来源：http://www.aibaodan.cn/163oaicubsm.html

================================================================================
来源：http://www.sxryk.cn/163lgjgoayx.html

按语言统计（条）：
来源：http://www.xuanzx.com/163nurtkupt.html

Python ......... 252
来源：http://www.xuanzx.com/163tmrjxzof.html

PHP ............ 252
来源：http://www.xuanzx.com/163zscxdmqu.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163jkstxevc.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163nzfmigxr.html

Java ........... 212
来源：http://www.sxryk.cn/163svkwsnun.html

Go ............. 212
来源：http://www.aibaodan.cn/163qwwkpduy.html

Ruby ........... 212
来源：http://www.xuanzx.com/163nekotzub.html

C# ............. 212
来源：http://www.aibaodan.cn/163uqleznuj.html

C .............. 30
来源：http://www.xuanzx.com/163sblyacnx.html

C++ ............ 30
来源：http://www.sxryk.cn/163qdirmvdp.html

SQL ............ 90
来源：http://www.xuanzx.com/163lcbjaanz.html

Bash ........... 80
来源：http://www.aibaodan.cn/163jrzwuysy.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163aexyizya.html

Swift .......... 15
来源：http://www.aibaodan.cn/163uwhlsatk.html

Lua ............ 10
来源：http://www.sxryk.cn/163gplqcsdv.html

Perl ........... 10
来源：http://www.aibaodan.cn/163wmezwnwc.html

Scala .......... 10
来源：http://www.sxryk.cn/163rnvjpikn.html

------------------------------------
来源：http://www.xuanzx.com/163pwgrnsyf.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163vjgfzfbu.html

按章节统计：
来源：http://www.xuanzx.com/163ymkmoiqq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163bzajytwl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163shbafrqt.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bdhcakgw.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163dybilfya.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163bfbozoki.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163sttykqol.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163zbwwqmbc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163xzvblrri.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tnkiylea.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163jxzkkldo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163okwbuxms.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nbvnjoib.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rbwwimlz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163tijqcbcr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ctmotjrw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ikegjrgw.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163plffsjcd.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163evlfqvvt.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163hehymlor.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163zivgcxmv.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163dbruaugj.html

------------------------------------
来源：http://www.xuanzx.com/163wauchiak.html

合计                                  2106 条
来源：http://www.sxryk.cn/163aifwwnbr.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dvlmxryi.html

使用提醒
来源：http://www.aibaodan.cn/163ngjhxnjd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163radolgvo.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163tvtzegnz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163kbvlhqqi.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163ftgcqbdg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163byihxasg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163afqttewr.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163dutalozn.html

================================================================================
来源：http://www.xuanzx.com/163hfjrbdii.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163cconiwxp.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163vwdwyxrl.html

================================================================================
来源：http://www.aibaodan.cn/163ipubsfdu.html

【收录内容】
来源：http://www.sxryk.cn/163ulggqdpk.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163mfsoudrj.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163oamtuddq.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163nrpurgyz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163fnqzbukk.html

【使用说明】
来源：http://www.sxryk.cn/163dngxftqa.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163mbcinmhn.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163inrajjcv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163jcrvxzqb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163ruemmhaf.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163zkluqdlm.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163qguauhji.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163xsanecgs.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163xuloemae.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163khbszwiq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163zhyhvchs.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163cenkqpye.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163himszksr.html

【文件统计】
来源：http://www.sxryk.cn/163gdvfehih.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163zrlkjhky.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vkdjuqqi.html

目  录
来源：http://www.xuanzx.com/163ipnfbgip.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163aswjwzao.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163pjizfhpt.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pqhsrelx.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qqvfmrif.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163avdpgjml.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163ebumralw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163hkskzgye.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qhaapaiw.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163kssaqnfz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xwdfdkry.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163mzllydmp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ynlstiwh.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ujulqmoj.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163obweqwcz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163jqmfkgdx.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163agncujjp.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163pdffeunt.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ljniiszg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163svycohuq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163vjrgqhxl.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lgnycexz.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vjbmjbhn.html

================================================================================
来源：http://www.aibaodan.cn/163atulsrpq.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163hhultmtp.html

================================================================================
来源：http://www.aibaodan.cn/163lyfsacyj.html

[A01] Hello World
来源：http://www.xuanzx.com/163bbswcume.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163xxpuslab.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ooemtckv.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163tvbufyzl.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163tqelexft.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163dutcccuw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163xexkizxq.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163svauvwim.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163qvduerwi.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163shtkbljt.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163xjnersmo.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163lgnvlikq.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163nwniytzp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163ndfgkxsw.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bsuudaxw.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163daupindl.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163lteeybrz.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163alioyctm.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163oplxjsgs.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163jzciuarp.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163xeexvsrl.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163qazscndp.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163omjrejif.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163ewufvjzb.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163ljroctrc.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163yqijacer.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163bvswrfei.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163hyhksgna.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163jmcsihwp.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163iwdzozvo.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163bikhxarc.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163ndtblfnv.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163qehlorrx.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163mfxdftek.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163jjpbocxw.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163uonnwyct.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163pkhncbqf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163pmwyblvw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163lkoltemp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163tojvobcj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163strhuwjl.html


<!-- 参考信息 -->