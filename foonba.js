外链999!wailian999！

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163gpgqhwdx.html

int|string $id
来源：http://www.xuanzx.com/163cxgdrkcy.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163zyosrqct.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163floekcnn.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163vcisbdqe.html

public readonly string $name
来源：http://www.sxryk.cn/163zbezcpkw.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163spgrzmva.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163gkjmwple.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163cwvoblko.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163fhxdfbcy.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163nxnazpmt.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163cxwggsvw.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163zpfuqcud.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ynhlcabg.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163lotshwxm.html

$obj?->method()
来源：http://www.sxryk.cn/163osnnsbem.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163xlvhtckd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163pqqfrewf.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163eiiwnvac.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163oclakboc.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163eelmztnz.html

"值: {$a}"
来源：http://www.sxryk.cn/163qmzifqpy.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163vorfoqtq.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163idmisegp.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163wmeezvtr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lydmthgy.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ktmdzqdh.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163nrbrinro.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163dqpgehjf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fxwmkaqo.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163yzprccrl.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163xuoknezv.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163sjwcveos.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163mwbgrxhf.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ypuwqevu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vassixuw.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163rcuryxpi.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163acvavuco.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163iagbghnf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ygxgwmpn.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163drppunpj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163pqnhwypa.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163lpuhdscu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163bzowjvwx.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163rirbbuaa.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163hsvajusf.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163cyouufbu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163pamhveiq.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163szhayyxs.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163ekhmofiy.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163jyhfchmt.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163uyoyreye.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163kdfnxgrw.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163xowlymcg.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163aeaerytn.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163myoymnvg.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163scunjuif.html

composer require psr/container
来源：http://www.aibaodan.cn/163snbgabeq.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163jzpcypui.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163aekuzimf.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163qvyykbrv.html

composer require twig/twig
来源：http://www.sxryk.cn/163mwxdrshs.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163dqtoaqoc.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163qiyyuhwh.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ugovbuzs.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163qialzmgm.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ogoqcrya.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163xnwdzknm.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163cqnwcust.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163lobtpkqp.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163vyvjpklf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ceyhgukh.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163fhkiqiyt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163kafllhul.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163aznbzkff.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163qnkvqpry.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163yqwjgxot.html

a?.b?.c
来源：http://www.sxryk.cn/163yigtfwhc.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163tjjxfvza.html

a ?? b
来源：http://www.aibaodan.cn/163flmltryi.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163mukhryis.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163zguymtlk.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163jmfbevvt.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163fkqgqgsg.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163tukwrduw.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ijyclwai.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163dxfupivw.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pzfrgtmy.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163kvmgmyap.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163jhxdjefu.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ucjdleim.html

structuredClone(obj)
来源：http://www.sxryk.cn/163zmfynfap.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163iquftkjc.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163vbpxkytc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ehgquoqi.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163qpucxfhq.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163wszltrlf.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163cczbiddg.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163whjihzqv.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xcxbofii.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163vkiuviul.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163yxdrcnwb.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qkgcvsri.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163niwwctka.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163dyxpgyos.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163fallbwvt.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163mcyakowi.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163rujkvzpg.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163cupxhswl.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163dzppmhyg.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163tlgjcgok.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163kkdbjqmh.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163wbcyedht.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163iygfgith.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163vrnvohhr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163cqwpayaf.html

[U105] JS：节流
来源：http://www.sxryk.cn/163vldqkdnh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ngodcrlu.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163nqwjxkfz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163cilrwyhc.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163jbrezizd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163qbjierdd.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163itwruvlm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163ztfoawum.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163dhtgtblf.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163iwyfnrwy.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163vusidays.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163truqbkmx.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163jcqwddtc.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163mlajftsm.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163kpnwodeb.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pwstpvlt.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163xmhpfmwh.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163sxeqdizm.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163xqmvkreu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bdmaffuh.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163zwlgdklo.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163cdxsyoqg.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163hglgbcul.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163rclllcxj.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163lkwijrto.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163rjevvugp.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ffifpmim.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ynoveurf.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163sokcfvwv.html

npx vite build
来源：http://www.sxryk.cn/163iygyggep.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163dhjuxzej.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163zmjlfvwg.html

================================================================================
来源：http://www.aibaodan.cn/163elwzzbve.html

统计汇总
来源：http://www.xuanzx.com/163kineyswx.html

================================================================================
来源：http://www.xuanzx.com/163djgvjmqu.html

按语言统计（条）：
来源：http://www.xuanzx.com/163wpjewlas.html

Python ......... 252
来源：http://www.xuanzx.com/163zsmxpjge.html

PHP ............ 252
来源：http://www.sxryk.cn/163qhfmecbz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163htyvfsni.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163bcwoukju.html

Java ........... 212
来源：http://www.aibaodan.cn/163qpbvaagy.html

Go ............. 212
来源：http://www.sxryk.cn/163pxudctvk.html

Ruby ........... 212
来源：http://www.sxryk.cn/163yqzdmkxt.html

C# ............. 212
来源：http://www.sxryk.cn/163txqnzejc.html

C .............. 30
来源：http://www.aibaodan.cn/163jgbcmybh.html

C++ ............ 30
来源：http://www.xuanzx.com/163yelwaixk.html

SQL ............ 90
来源：http://www.sxryk.cn/163wvcjdkml.html

Bash ........... 80
来源：http://www.xuanzx.com/163dgtmkevg.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163rjzrjurz.html

Swift .......... 15
来源：http://www.sxryk.cn/163zzouirqf.html

Lua ............ 10
来源：http://www.aibaodan.cn/163txehwlza.html

Perl ........... 10
来源：http://www.aibaodan.cn/163nvwzwrmc.html

Scala .......... 10
来源：http://www.xuanzx.com/163hfuxfwcy.html

------------------------------------
来源：http://www.aibaodan.cn/163sqcrviyl.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163qziimevi.html

按章节统计：
来源：http://www.sxryk.cn/163iwtyvtcr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163cfakcyvz.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gxemxyqq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163pkljqgoe.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163znxrrmva.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163lozqraln.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163lnegoaoq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163yqvgoskg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163rwyzyovg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163oxjyklho.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163epusnann.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mukqcojg.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bzpedfok.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nejtrjyv.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163fejmxdtm.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163pxsrcqss.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hdhgdbpo.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163imecsqxg.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163fnjdbuvc.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163eyybmwss.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163crzhqxur.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163vpdyydma.html

------------------------------------
来源：http://www.aibaodan.cn/163ndbfiajq.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163xozorsek.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163teivqeph.html

使用提醒
来源：http://www.aibaodan.cn/163govgajun.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163emvjczoy.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163qxxtmzxv.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163zptfjszu.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163bmlptzac.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163kjyouhnx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163slnzmkmc.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163loxpenum.html

================================================================================
来源：http://www.aibaodan.cn/163wiwddwhj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163udshhbev.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163vdwakqkx.html

================================================================================
来源：http://www.sxryk.cn/163ekmhqghj.html

【收录内容】
来源：http://www.sxryk.cn/163imtdclte.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163gpjvjvlc.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163qcfwfbsl.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ambmqurn.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163biqsjdjq.html

【使用说明】
来源：http://www.aibaodan.cn/163mxtdbxof.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163tdjzuwaa.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163glvwfhfr.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163sxagfpgt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163dxvpvrad.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163mbiizmpu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ofbfkxnr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163eerxfjyr.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163crtgqjhq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163pphpxexb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163gdtboekz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163mstkfncm.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ujbwldlq.html

【文件统计】
来源：http://www.aibaodan.cn/163uuazxoam.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163qjffpxul.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qwfjicss.html

目  录
来源：http://www.sxryk.cn/163bdpwljpr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tvhpflvj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163kmmbqjae.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bcaryiwj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xyrysnvk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ephpctbt.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163mxxunzfj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wkgvxsxl.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163tykkcjby.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ajrnqqwg.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qdqlbsxq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163mzszlmwj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yxsanrht.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163irpzaavy.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163puocieqh.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163bfwkeikh.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163niufxake.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ceytfyct.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163kerfatug.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163djligrrs.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163qepnpzml.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gfxhpwps.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163rzxlpoeg.html

================================================================================
来源：http://www.sxryk.cn/163yrtdqrln.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163fzdmikjw.html

================================================================================
来源：http://www.sxryk.cn/163vdnqpmea.html

[A01] Hello World
来源：http://www.xuanzx.com/163hcmabcfu.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163kdeewubg.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ewhxduyo.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163ihfonczw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163jskuvfqn.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163subchwje.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163kgoiesth.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163cwlfqnqk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163xijhiobj.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163agyizqzk.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163nytpuxyd.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163npxpkmjb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163iihzqwrv.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163bngzpkkc.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ucghqzbx.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163frgffhxf.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163oyswfccf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163jpufhfes.html

[A03] 常量定义
来源：http://www.sxryk.cn/163srfyuwwf.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163pniqgeyw.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ijnbdxor.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163cmvcwgef.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163rwshaiyx.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163rnkakhuh.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163xdnwfsmq.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163fyyjcxib.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163xrlkqajd.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163sjwhwmva.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163hfmqqqjc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163lutpucnj.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163amsunblf.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163tqmijlla.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163wpexvktr.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163jgbuugfr.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163rbyitrvc.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163aitjshsw.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163tqeermop.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163cynfjeti.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163hiebhakv.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163olxcqdbk.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163gdjsiqub.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163pgospadz.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gyqcdbzc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wwsyvxgz.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fcgebqmp.html


<!-- 参考信息 -->