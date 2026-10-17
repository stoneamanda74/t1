外链999!wailian999！

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163caqzbyhv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qzxcfepf.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163rryuqfil.html

?string $name = null
来源：http://www.sxryk.cn/163lvmowaor.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163cwqwwajf.html

int|string $id
来源：http://www.aibaodan.cn/163aeacfuer.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163hzwhutln.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163vfbzelpf.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163lxxugeaq.html

public readonly string $name
来源：http://www.sxryk.cn/163irhvikbx.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163wooucbez.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ecqhbaeu.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163scvvungz.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163bgwbokdh.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163fvbcgxyn.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163tfovizve.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ftlidqzr.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163kioqwkaj.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163vzogemqd.html

$obj?->method()
来源：http://www.xuanzx.com/163evuwitgz.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163iwrrprmm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163nolobwja.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163wrvbixjy.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wloeakly.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163txrjgazz.html

"值: {$a}"
来源：http://www.xuanzx.com/163nddjvpfp.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163fvdddotk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163yktpewid.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163qzyvhnot.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ycziqcuw.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163heeayifa.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163sxntabcw.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163usbqhhes.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bjuiiqqu.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163qgrdnrpl.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163kmovbhsf.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163huerwlqc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163apxehuwy.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163bymggmou.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163suxwcxsn.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163wrqydkvy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163hryefzfh.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163vahxuidm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163apsdzxpn.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163vahjntoj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163upbbengq.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163nqpkkofe.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163mmmydqmt.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163qwjtyaqb.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163iwevtbjh.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ccqrbuen.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163fkdcaalf.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163bianific.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163dzhuajrd.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ifbpnnkw.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163tzquezog.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163dgxkgjgx.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163lkwhqdec.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163yvuuwvwd.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163scxtzpie.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163oidwqloh.html

composer require psr/container
来源：http://www.sxryk.cn/163ajcgsqym.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163nzxjdzbo.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ozrrncty.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163nefzlwki.html

composer require twig/twig
来源：http://www.sxryk.cn/163lvewyfjd.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163dvbgabym.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163zybcpzii.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163nqvasepj.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163brviqghf.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163atluyrao.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163uakcgmcf.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163aldoiahq.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163sypzshnx.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163hfdizerl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163qainioao.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163cgqrqtwr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163mpmogwpp.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163bguvdrlu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163damocaye.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163mtmrjkry.html

a?.b?.c
来源：http://www.xuanzx.com/163ugxvkeor.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163iofckclw.html

a ?? b
来源：http://www.xuanzx.com/163kkjnxlpa.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163jigzrwjh.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163vcqggwiy.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163bazbveya.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ejawlthy.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163hoakwkht.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163ajhiraar.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163pllbhgex.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wrwyflol.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163lqmveqpf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163dqprqmkh.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163teonlepl.html

structuredClone(obj)
来源：http://www.sxryk.cn/163mkoblkmz.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163rjrqmhet.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163lsdeuatf.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163fqdjjflu.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163ymthumyp.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163qmnecjgg.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163eipphkxi.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163jcgxqvwo.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163tosydzzi.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ksfcvbsg.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163sqfrycsw.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163tiwqafkt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163lffzixfk.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163epsnxmoo.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163yjwdwpul.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163mtgsaynb.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163sfzucexn.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163rrargkte.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163wulspnup.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163pdohvvmq.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163baqwivny.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163aqvgrqzf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163asrvzgch.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163nwudmkkf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kyheknji.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ockirylb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163skxbgtkl.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163xuduqfkp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163dgpqohzr.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163nitlnfye.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ffjbjvrw.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163zvglphgm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163dxbzkmej.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163roosccvo.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qrfsdixl.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163sbyvfpmx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163obwvrmmc.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163izindcra.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163tlpocsis.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163nzjxnsvk.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163mkrweuxf.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163uwnyyeuw.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wuakhjcv.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163fzoulyjd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163vetxmuyw.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163uyperyxz.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163yhxrcfpa.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163xkjyowlw.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163oexfhpiy.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ffjzkdcc.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163xlxcbtgl.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163lcrrtfdp.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163jkfqdcql.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163pyvxhsaa.html

npx vite build
来源：http://www.sxryk.cn/163ydaurvoh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163gpsocqjb.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163fqqbzvqa.html

================================================================================
来源：http://www.xuanzx.com/163flmcgsja.html

统计汇总
来源：http://www.xuanzx.com/163rxubkmlz.html

================================================================================
来源：http://www.aibaodan.cn/163zfazwwub.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163uakzvyxd.html

Python ......... 252
来源：http://www.aibaodan.cn/163bqamujkw.html

PHP ............ 252
来源：http://www.sxryk.cn/163ucivtrbp.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163rwgbfqmh.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163eulvhlbu.html

Java ........... 212
来源：http://www.xuanzx.com/163lkfvvzin.html

Go ............. 212
来源：http://www.xuanzx.com/163wigvcnug.html

Ruby ........... 212
来源：http://www.xuanzx.com/163zphqinrb.html

C# ............. 212
来源：http://www.sxryk.cn/163ipknlwqw.html

C .............. 30
来源：http://www.sxryk.cn/163dlboiqhu.html

C++ ............ 30
来源：http://www.xuanzx.com/163wfgijabc.html

SQL ............ 90
来源：http://www.sxryk.cn/163hryxqacy.html

Bash ........... 80
来源：http://www.aibaodan.cn/163qqarpbac.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163nsfzojff.html

Swift .......... 15
来源：http://www.aibaodan.cn/163rpnkbtmf.html

Lua ............ 10
来源：http://www.aibaodan.cn/163fpbfbxzz.html

Perl ........... 10
来源：http://www.sxryk.cn/163tymiaoqu.html

Scala .......... 10
来源：http://www.aibaodan.cn/163cbetqvwr.html

------------------------------------
来源：http://www.sxryk.cn/163mvixntsd.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ruunqdce.html

按章节统计：
来源：http://www.xuanzx.com/163nsmooxog.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163qhxqimbi.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hlchwphq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nxlocgoy.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163vrzpsyem.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163kudftdes.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163uyjlucyh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163gqzjtymy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jexzohec.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ndkuhzop.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163pzjbgmxe.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cobjzqfg.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bsjgnxam.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163duiwckqs.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lpojcjti.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163egewrqhz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tqnpuiad.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163nbjzzquu.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163rsooxuzs.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163grzvmxxa.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163bmwlfqva.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163urxqjoei.html

------------------------------------
来源：http://www.sxryk.cn/163auslnogh.html

合计                                  2106 条
来源：http://www.xuanzx.com/163cdzyrfkz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163iuxtlmey.html

使用提醒
来源：http://www.xuanzx.com/163oagwimet.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kinthxkp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163bhbgtfrg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163meritazi.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163nqkigdwa.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163viapnjvm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163elravuwb.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163pqdvyyay.html

================================================================================
来源：http://www.sxryk.cn/163txxdjzkc.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163iavtixgx.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163illlwuwg.html

================================================================================
来源：http://www.xuanzx.com/163akgbwfgn.html

【收录内容】
来源：http://www.xuanzx.com/163qhbywjrx.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163yxneifyq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163qbtsapum.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163omumqvwo.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163mgmxrrgm.html

【使用说明】
来源：http://www.sxryk.cn/163jgdciygj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163sjqbupae.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163swtdguui.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163tdkjywlp.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163sklnxvck.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163zjkrabog.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ipkvkbto.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ktfloysr.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163gxicnrzq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163vnqbbvav.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163nsysevtz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163jsibdkjx.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163rfqtwejz.html

【文件统计】
来源：http://www.aibaodan.cn/163iomxwovq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163qdfiaihl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cbpwuojy.html

目  录
来源：http://www.xuanzx.com/163tullruvj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hkczzxcl.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163wfxocenh.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163vhyuhftt.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pquzkiqg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163hfaaukjh.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163tkknpmyt.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163iqphwexi.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pclsaize.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ozmpogwc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tfjtfwng.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163vrzqnfnu.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tbwghehp.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fnwebvzi.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163flejdziy.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163keqakjrn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163hqsjwngy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qobzlppy.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163cfrinypr.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163jnirzqdu.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163qnzbdvcn.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vomugmmk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163tnfgtqln.html

================================================================================
来源：http://www.aibaodan.cn/163skupnweg.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163ptwzlwwf.html

================================================================================
来源：http://www.sxryk.cn/163bpbihibk.html

[A01] Hello World
来源：http://www.sxryk.cn/163emeviann.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163rzscltnj.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163qryrarrd.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163wtvhzdwq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ypljywkv.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ohextzrr.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163xqywsjik.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163hssbsqhz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163qftrzyed.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163htktjlpw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163xlljgfzy.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163wdujgfds.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163datpqtgs.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163qrlzckdc.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163cmojbpgg.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163voybbreb.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163lgrmbqyo.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163epbkkxvw.html

[A03] 常量定义
来源：http://www.sxryk.cn/163ujeythfp.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ryejazfh.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163zchlkqxb.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163uhpsdenp.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163xirlvsin.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163fjxjyhfb.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163bunbsmvi.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163ehdaejyx.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163epyayxev.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163gaahmyux.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163lcivhydl.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163sltctywd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163xtwxbate.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163bpgauiso.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163kgbmrqhw.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163ucnbbhrw.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163wtcykkpd.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163tmthzzmu.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163paxidgfn.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163kdlzesoy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163qzmigtyn.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163muskdosj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163zjxtkvyj.html


<!-- 参考信息 -->