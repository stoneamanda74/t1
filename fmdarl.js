外链999!wailian999！

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163dljakdot.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vwwhmlks.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163xdyaqlaa.html

?string $name = null
来源：http://www.sxryk.cn/163dotzblpt.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163dodtaely.html

int|string $id
来源：http://www.aibaodan.cn/163albxyvlv.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163iuimjgyz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163gxvwbdss.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163eqjlanei.html

public readonly string $name
来源：http://www.aibaodan.cn/163tjikcrhq.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ooachsyv.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163pulwscdl.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163wcxdwntx.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163amjrzdul.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163mertmkhm.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163zuuaapuh.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163jfebhamr.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163zkpsncym.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163pjwqhwlu.html

$obj?->method()
来源：http://www.xuanzx.com/163xblvpinl.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ibwrybbr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163icczqpke.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ctzbjqrg.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cllacgqy.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163xncvpkel.html

"值: {$a}"
来源：http://www.sxryk.cn/163grwuuvmy.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163taeljapr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163htjopftp.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163vncpsqnu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163eqkuptia.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163stbwllah.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ibivnykh.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163vpeelcqb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163eqrxfkzu.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163yhyaybdq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ynvmrgea.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163vonodvzs.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163lhdxxgcq.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163stahusnp.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163lvkynxgs.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ppurxqyu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163sseelbjx.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ekbnnnvf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ilqzpqej.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163jczfxhsx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163uqhanrzb.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163lvazgyho.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163tzaryhng.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163byqaztal.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163cloxjmto.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163yunpsvax.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163hrowzrrx.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163fqhaqgte.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163kregusei.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163cozhqmpm.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163rzhxfwcu.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ctgkjufc.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ngscnpdd.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163nsuubtrt.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ijxebvag.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163vocqhppy.html

composer require psr/container
来源：http://www.aibaodan.cn/163zkttokmg.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163xikmhoum.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163fnjsmtkd.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163xelzgxin.html

composer require twig/twig
来源：http://www.aibaodan.cn/163qacnhtsb.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163xymgxgqm.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163dkigauqc.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163qrrxxmwn.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163whazcthv.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163kytokxzq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163jylefiyl.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163pvzhqqcv.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163qmccvmvd.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163vcokjvok.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163dcchudll.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163pocrrcmv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163wwqtjibj.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163zpqvzntz.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ndfqioms.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163wjpsbtxy.html

a?.b?.c
来源：http://www.xuanzx.com/163ydpeugta.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163mepjmaje.html

a ?? b
来源：http://www.sxryk.cn/163hgwkyuog.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163walnkkxc.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163oimcuoow.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163nxjwphqz.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ifmxgvwn.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163msnexcgy.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163jzafxnmv.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163kjsqyqkg.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163atwcewqe.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163qoxobeak.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163jnycgzti.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163zjvdxjaj.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163wodtadqg.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163oikuulyv.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163oglipoep.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163mbkjhkeu.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163umovswaq.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163lichcvuf.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163fiazisuo.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163mgdiimle.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163uvwnkbui.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163vrvzqwuu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tykqwldt.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163hjgkcypy.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163vqaaddvk.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163mqniubyf.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163wrpikviq.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ygiweyhm.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ftoicmxu.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163pfppoksy.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163nkqzbtbq.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163wqfhkhse.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163yetcvkfs.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ewchukpg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163iuwqpkea.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163cmxouoxz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163yupngkyv.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163qbofeyii.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163zqdblccn.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163tsdkcopv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163uoryxuvt.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163vrgtayaj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163hvunakne.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163erjukjad.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163soihmrxj.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163hzwbbfyd.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jcadzznl.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163vwmgefdz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ztadjmqf.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163kofeokef.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163rlrlnyqj.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163znxcjnrd.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hdgjhsqj.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qinzylhu.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bvspcdgg.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163uowbmpks.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xjfkjxfc.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163irqrdmdz.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163tdildiaa.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163srvsdsyq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163uvzyfyss.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163tvrqrchd.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ekzpzpqr.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163tcbccowc.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ffhyljep.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ldkoyvis.html

npx vite build
来源：http://www.aibaodan.cn/163hmbczqxq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163bbhqgozi.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163rzxjlqpk.html

================================================================================
来源：http://www.sxryk.cn/163biqkejsp.html

统计汇总
来源：http://www.sxryk.cn/163mxtpsfku.html

================================================================================
来源：http://www.aibaodan.cn/163svqgunvf.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ehmlupho.html

Python ......... 252
来源：http://www.xuanzx.com/163muhcsvss.html

PHP ............ 252
来源：http://www.sxryk.cn/163uanjsxqv.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163plmforai.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163bsrpeywi.html

Java ........... 212
来源：http://www.xuanzx.com/163iudemxyv.html

Go ............. 212
来源：http://www.sxryk.cn/163tgjqtyyw.html

Ruby ........... 212
来源：http://www.sxryk.cn/163moxmwrsu.html

C# ............. 212
来源：http://www.aibaodan.cn/163azbimnfm.html

C .............. 30
来源：http://www.sxryk.cn/163kfvgways.html

C++ ............ 30
来源：http://www.aibaodan.cn/163wjlimykl.html

SQL ............ 90
来源：http://www.xuanzx.com/163xqzntnii.html

Bash ........... 80
来源：http://www.sxryk.cn/163zqzkwedv.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163qopuyohd.html

Swift .......... 15
来源：http://www.xuanzx.com/163wdqotwqd.html

Lua ............ 10
来源：http://www.xuanzx.com/163sbgnmark.html

Perl ........... 10
来源：http://www.sxryk.cn/163bkeplfiw.html

Scala .......... 10
来源：http://www.xuanzx.com/163mwmwvrcj.html

------------------------------------
来源：http://www.aibaodan.cn/163qltkkwqh.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163zavkftie.html

按章节统计：
来源：http://www.sxryk.cn/163jalwhkya.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163jummavek.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163djawvfdj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tbzqljfo.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163glscoabw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163muhxbrej.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ecmmgifw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pvpqgwma.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163gsaeqkin.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wumpxfie.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163xmeikies.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hmmsgxzh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cqebkkfk.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zxjrpswm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163euelbxhh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163qjircwxs.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pxcnlnka.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163noyrxijm.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163uqdgtqof.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ndgagipg.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163whgykjge.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163lufwdqvx.html

------------------------------------
来源：http://www.sxryk.cn/163xyslibwz.html

合计                                  2106 条
来源：http://www.sxryk.cn/163lfcwqlhg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rukoqvnp.html

使用提醒
来源：http://www.sxryk.cn/163rkmntlgj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163fvcauwnn.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163wenytdvi.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163tcomorpm.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163vkhumvwu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163vkpyncba.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163sphqcidj.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163zlhgmeep.html

================================================================================
来源：http://www.aibaodan.cn/163kgtciftv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163vhawtaej.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163pqvawerz.html

================================================================================
来源：http://www.sxryk.cn/163mcbmsjci.html

【收录内容】
来源：http://www.aibaodan.cn/163mxwjbban.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163affziuxp.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163jsvdlznh.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163kifzvacy.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163lnwkjkrh.html

【使用说明】
来源：http://www.sxryk.cn/163fhzlbeos.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ldsvnpmq.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163dfclpqmi.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163uvctwycy.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163tcoktxbw.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ybedmrid.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163biwhxnxr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163qbvyopso.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163nzxgteng.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163fqidcbal.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163nosamauz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ajutzslf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163zaaohpro.html

【文件统计】
来源：http://www.sxryk.cn/163dxiodrkm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163vmeuzqbo.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ivtxeeia.html

目  录
来源：http://www.aibaodan.cn/163vmjrmgzz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wefogzid.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163vgrsvodw.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gggqiqhk.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bmimxwjb.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ehijjneq.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163seqmksis.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163jreimycd.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ybczhffb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163kzlfcgwz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xzovdjra.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ufvdyite.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163feqjqusk.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xbsgqcuy.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163mtjvprtf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163vtuglptu.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163xsezzqvd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yhazvxtb.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163anpphmrg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163arpqthyp.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163pfuihdtr.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zigquedn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163mjisjeqb.html

================================================================================
来源：http://www.aibaodan.cn/163ytikmnke.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163jvdsggnz.html

================================================================================
来源：http://www.sxryk.cn/163jfvwsfyd.html

[A01] Hello World
来源：http://www.sxryk.cn/163mnwcraci.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163yfjzmskp.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163hlzlbrng.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163ruflqvrg.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163jlkakgrw.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163loqunhbc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163uebgpzsw.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163fnipqclr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163xjhxahkr.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163dppgpehq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163frtjutlf.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163nuhowpox.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ffnyxmmb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163rdybpsbs.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jfmyqpga.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163syjnaovb.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163shnukhqp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wdiuxghf.html

[A03] 常量定义
来源：http://www.xuanzx.com/163clqmiggf.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163hxkbzhba.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163opaizcba.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163lfsfggnh.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163ywvvpucm.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163yyxpmams.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ujivuysn.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163vwlbuqrp.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163hevsnpim.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163xqcuzkjx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163grdgjwxf.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163wreslwwd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ahhpejnn.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163vqcgcuqa.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163qnrvdmdk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163yfdyipfn.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163undciqrt.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163gnexalwb.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163fssqbfjt.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163zofqsxqu.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163vpmanyjj.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163acqvaivb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163qnnxxfdf.html


<!-- 参考信息 -->