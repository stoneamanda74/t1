外链999!wailian999！

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163rfpajgvm.html

public readonly string $name
来源：http://www.sxryk.cn/163lixwtegd.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163mgltquvn.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163vxrtjftz.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ngnxbqej.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163dcdhwnhv.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163unmvbudn.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163wrqragtz.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163tjyacnts.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163tqjbpalj.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163nepowmjs.html

$obj?->method()
来源：http://www.aibaodan.cn/163yzjyjbhl.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ibajnxfz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163pgbdfscn.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163liuuhyks.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pqqjhirz.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163bteuhnft.html

"值: {$a}"
来源：http://www.aibaodan.cn/163uoyxywop.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163mjrifaxn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163mxthverl.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163krifakbz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163khznjcaa.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163mkwqfdeb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163lukksvoo.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163oxgqoqtl.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163fhcadxab.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163iwgiiovj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163eqsajzfy.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163zwugvtka.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163nblcokho.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163uyetgqkr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163mrzpmakq.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163sjpikuzd.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163hormrckb.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163keemmwpx.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163yxftyjdl.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ooclsuhh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163mhuqxkxt.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163eokhqpvd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163vbiocrjb.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163pllyibnd.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ezwblxes.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163rbqagrzu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163vzfcbjgq.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163tddfotod.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163ckseilql.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163taakkdoe.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163mmgbkvpl.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163kjknpwef.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163pnvjnhuq.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163gzufjrpv.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163wkepqrgx.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163nnvtlvae.html

composer require psr/container
来源：http://www.sxryk.cn/163yhikfcif.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163sbrgffic.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163prhbpszh.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163xbsxfkcc.html

composer require twig/twig
来源：http://www.sxryk.cn/163xrnietgj.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163vuuhekbs.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ysjjwxji.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163iigugxtq.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163cgxtwcjj.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163idhazwko.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163xocgeify.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163nydciovq.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163nmlivlol.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163woksptcy.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163foatouwk.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ajapecrh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163jultxtly.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163sfxkhfqd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163zgctkvwl.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163zkcarrlf.html

a?.b?.c
来源：http://www.sxryk.cn/163cuqjwhyo.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163krqfdhvn.html

a ?? b
来源：http://www.xuanzx.com/163heshjmds.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163cbcrhykd.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163hhwmqpxo.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163mviwhxgp.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163xiigkgxv.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163yffwbokw.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163pccbsafw.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ydhgcxdj.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xrzamezf.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163rjlluvmy.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163irkxvurw.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163uldmaeap.html

structuredClone(obj)
来源：http://www.sxryk.cn/163crxgjlzv.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163lxcwjmad.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163wfolhfja.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163veetiykv.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163lwtteizi.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163xljksdfg.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163khnipvvb.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163wtonkqdb.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163oaonxwom.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163clhvhojp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uqwlpwwg.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163zjemkggb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163bzfepyqh.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163eaajlcxr.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163qptibxnh.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163qhqwycfm.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163lnmtddzq.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163owszlepl.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163lmnnoivu.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163kjvlyxvo.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ojoolkna.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163lhoyrsof.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163stcserki.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163rbyzbnhp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rixckkvv.html

[U105] JS：节流
来源：http://www.sxryk.cn/163kpqefvkh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163elqofwru.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163cudserax.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163gafpnkif.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163wkfqicjr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163rvmageql.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ezzlbkya.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163rejyuczn.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163zqbinggb.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bsuwcmne.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163hlqfbaoq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163kxorphra.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ntqxpafa.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163hvijshvj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163jqovlbgc.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ofuoxewy.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163mdbvgvsj.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163svuoitgz.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163iadackfl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hbnvujly.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ktbzypku.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ikureuaf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163iqmzpqni.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163iwjyrjiv.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163mblmsgtg.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163istvnoyp.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163dhoseiuz.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163wrkpsulv.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163vagworft.html

npx vite build
来源：http://www.xuanzx.com/163lciyrrdn.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163cxdhzxqx.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163vlmuyeej.html

================================================================================
来源：http://www.sxryk.cn/163pfzynlku.html

统计汇总
来源：http://www.aibaodan.cn/163zwsvkyhr.html

================================================================================
来源：http://www.xuanzx.com/163hqghbafg.html

按语言统计（条）：
来源：http://www.xuanzx.com/163punnqppz.html

Python ......... 252
来源：http://www.aibaodan.cn/163umildjap.html

PHP ............ 252
来源：http://www.sxryk.cn/163wzqfagpz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163hsgfpnji.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163nbftfuln.html

Java ........... 212
来源：http://www.sxryk.cn/163zcgsmant.html

Go ............. 212
来源：http://www.sxryk.cn/163lkngneya.html

Ruby ........... 212
来源：http://www.xuanzx.com/163rhtrfuwb.html

C# ............. 212
来源：http://www.sxryk.cn/163iuhtmgzf.html

C .............. 30
来源：http://www.xuanzx.com/163xmufcrzf.html

C++ ............ 30
来源：http://www.xuanzx.com/163uuxfvedl.html

SQL ............ 90
来源：http://www.aibaodan.cn/163lukmmlhk.html

Bash ........... 80
来源：http://www.sxryk.cn/163rbhzomoy.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163vokyjlid.html

Swift .......... 15
来源：http://www.sxryk.cn/163pvkjhyzq.html

Lua ............ 10
来源：http://www.xuanzx.com/163ketjzjuf.html

Perl ........... 10
来源：http://www.xuanzx.com/163okmrpzcz.html

Scala .......... 10
来源：http://www.sxryk.cn/163fmofrond.html

------------------------------------
来源：http://www.aibaodan.cn/163ihsbscky.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163mdzcgilv.html

按章节统计：
来源：http://www.sxryk.cn/163gkezatml.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163krumnmzs.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163adhqdrhq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wuvqzqvc.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163nptpmzix.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163otanowuy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163iqpwjgfz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163igipgehs.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163aocbivng.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cogdppdg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ubktcfug.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mqmjiozn.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kytevwbj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rszigofj.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163grkfklup.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163deuxqpia.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mvunkzsb.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163lxkhizil.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163rzagwrwc.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163sagjvwgo.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163wxjhidkt.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163rsbbtvyu.html

------------------------------------
来源：http://www.xuanzx.com/163ycglksxq.html

合计                                  2106 条
来源：http://www.sxryk.cn/163ziftpkgp.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zhtkwydu.html

使用提醒
来源：http://www.xuanzx.com/163squbrlnl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ttxgsjux.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163qfsgpktj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163gufklznt.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163mfuoabub.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163mutmavti.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163mqespkid.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163zkxagjib.html

================================================================================
来源：http://www.aibaodan.cn/163cpxhicre.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163tojsjjvr.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163xnshjnsy.html

================================================================================
来源：http://www.xuanzx.com/163rqqaaozr.html

【收录内容】
来源：http://www.xuanzx.com/163eiklqirt.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163beajziif.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163jlblzgma.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163whnijymj.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163monhqbfk.html

【使用说明】
来源：http://www.sxryk.cn/163kberpgrd.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163qhsxqhst.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163ykasnabs.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163zmzwxuwh.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163xdlxcgbl.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163daiolydh.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163bufexzyl.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163aoxvlolb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163awagojur.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163mkwunfem.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163xtlmhvzm.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163oszyywwm.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163edhypfrb.html

【文件统计】
来源：http://www.aibaodan.cn/163wqxlpcvt.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163lxyjgltx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ayqyohop.html

目  录
来源：http://www.aibaodan.cn/163mjdaruja.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fwalgaic.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163udafimrp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mfhhjnat.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rcrdyxnm.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163qdrvvuyc.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163svplcyvj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163wzjrxzxx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bqlvrucr.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163iedwyhrz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qgbaxkai.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ivtxpghd.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rwoudadu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163byhmqcje.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tolawgdn.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163jchuzygn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163eljueqpg.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gnltprxn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163ugveyway.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163qtaanggi.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163hiqvrixc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163cnkysgzp.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xlphaein.html

================================================================================
来源：http://www.sxryk.cn/163sbiceeyo.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163adluzloq.html

================================================================================
来源：http://www.sxryk.cn/163fosevdvg.html

[A01] Hello World
来源：http://www.xuanzx.com/163dtyiwznd.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163bvzchhol.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163rheejpap.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ljkqpfqk.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163xjkzaxkx.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ewwdgvtp.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163ynuptpol.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163uqapyaip.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163vqhhihwc.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163loilvykw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163pmyswcsh.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163lnrrmcxx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163duimqnlb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163yhzcapji.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163dxxwfexg.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163khofqmjr.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163nsqqehnx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ngzwihos.html

[A03] 常量定义
来源：http://www.sxryk.cn/163saaarxrj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163tujfgxtt.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163gypoatvk.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163krpsfknw.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163vsexgpxj.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163dykbczmv.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163aerkxtyc.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163mjxghxmy.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163iqsxhlck.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163tiamsiyb.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ugmscytu.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163niloyswi.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163lpmikfqj.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163vphcuogc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163uftyrxui.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163bbkyqpax.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163wzpkciiz.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163sphhwawk.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163hiqctgxd.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163tbvcvrlv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163govnuekr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163hkpxqbpx.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ipqockwl.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wshoagep.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163mtvwkroy.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163zodueigr.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ossxxfhh.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163wtcflpxf.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163jpathxzs.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163hewlirer.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163aoxobfrp.html


<!-- 参考信息 -->