外链999!wailian999！

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163fydnvceo.html

namespace App\Http;
来源：http://www.sxryk.cn/163xhatrnqb.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163cudgalmt.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163mmidkeec.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163krivgykm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vxhxgxoz.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163joezdpuq.html

?string $name = null
来源：http://www.aibaodan.cn/163ktirocll.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163xievorfi.html

int|string $id
来源：http://www.xuanzx.com/163crpujilo.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163lenwrewh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163zmopcayj.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163agmbcfxs.html

public readonly string $name
来源：http://www.xuanzx.com/163mjqqxeis.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163rrdosmnb.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163dxfguqmy.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163agzbikrg.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163jmymhlrn.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163feqzknvo.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163xblkhppg.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163oiruqzxh.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ldzlobfl.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163njevcelj.html

$obj?->method()
来源：http://www.xuanzx.com/163kyfdirtz.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ttczdyyz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163tssfrnax.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163glsptzfx.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ebwflqbz.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163wavbojii.html

"值: {$a}"
来源：http://www.xuanzx.com/163oihrkrak.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163goqosxuk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163nxndxuuy.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163lqxmwiin.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163salavmif.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163smkugcsv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163gzysudbr.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163blqqhflf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163pbtrraty.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163skjdpibn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ouaigqcn.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163abhrvqbk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163luwgmkez.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163deqrbmzu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163vflopvex.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163kjmjjuwc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163qntgxxpl.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163femybmnv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163cuzpkxiv.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163gxmghipo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163nfwphprp.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163dfmqfwix.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163khlrvwfa.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ehwjhhns.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ihhjczra.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163jlwfsitu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163hpgnurpv.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163lljtlvwu.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163tjnhzvqm.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163qnexodst.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163rzfhfaom.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163qkouaalt.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163gsehxyuc.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163hoekqhuo.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163zwhjgusq.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163yhcieszm.html

composer require psr/container
来源：http://www.sxryk.cn/163screphwl.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163mgkwsvrm.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163oeuyztcw.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ztigqaqt.html

composer require twig/twig
来源：http://www.aibaodan.cn/163jcscyugk.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163odadhfoy.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163nfyonctg.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163tmfutzup.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163rcyoqxnz.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163fwtlvqxh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163mlfamuad.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163kflnskpt.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163qyvmgtns.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163lzrxrsly.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163akopazju.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163qmiojevg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163jzbfbwum.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ymntovwn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163xywjiaht.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163raysbyid.html

a?.b?.c
来源：http://www.sxryk.cn/163nqgjmgcd.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163lwofobmt.html

a ?? b
来源：http://www.xuanzx.com/163psbjjeny.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163wktwsbnf.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163cxazplms.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163yscmvoiy.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163idaolcbn.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163cikncnxd.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163rklbtvsw.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163rtpfilvu.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163psclsphc.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163xtgxudrw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163auypvlot.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163trdtebnw.html

structuredClone(obj)
来源：http://www.xuanzx.com/163pyietdpe.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163vomiuuyv.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163dyosyxrj.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163xhkxwuoj.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163qachifhu.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163fxtlqjqt.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163bogqlurb.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163cacldkow.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163lpmclkcy.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163tstevtvd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163eykrideg.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163zlwwknwa.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163xlyjxkbd.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ofgymjtj.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ohgbjoyg.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163tapfpgoq.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163iabpakjg.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163yvxvkkld.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163wxdikkrz.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ugumystb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ielwptsy.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ddbdfnsm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163wjpqnsju.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163tqhyafpq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ktajvtni.html

[U105] JS：节流
来源：http://www.sxryk.cn/163idjmceyk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163xqdfrghq.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163oqwkusxe.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163racovwgy.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163xchvjbum.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ybsrkgvt.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163bdawehna.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163glspkfuq.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163wmrtgzbv.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163sqaaxwyg.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ecvplmgj.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163cotmdxrd.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163nodnlcuz.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ycbjfrxa.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163kkfdzpml.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163sgbmwgsl.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163rpjikgfz.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wdcndfxx.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ypimzvxh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163cltvtlez.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163tjilpkzb.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163lctmozfs.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163mqwkusut.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163bvbrggap.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163igrdmstl.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163qirbmhde.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163oanqzpyr.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163bssjtuov.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zfnzwmbx.html

npx vite build
来源：http://www.sxryk.cn/163uvkohnyg.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163jaxaqioc.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ojwosowp.html

================================================================================
来源：http://www.aibaodan.cn/163fwmzmpip.html

统计汇总
来源：http://www.aibaodan.cn/163bjzurjqg.html

================================================================================
来源：http://www.sxryk.cn/163nrbixwqh.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163hdknerww.html

Python ......... 252
来源：http://www.xuanzx.com/163cfhfzplc.html

PHP ............ 252
来源：http://www.sxryk.cn/163lcvogwta.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163swzqosan.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163mdwmvatj.html

Java ........... 212
来源：http://www.sxryk.cn/163pprjsuqx.html

Go ............. 212
来源：http://www.xuanzx.com/163svhxtkbe.html

Ruby ........... 212
来源：http://www.xuanzx.com/163cvmwcvmq.html

C# ............. 212
来源：http://www.aibaodan.cn/163ywxntvxz.html

C .............. 30
来源：http://www.aibaodan.cn/163egygjrjw.html

C++ ............ 30
来源：http://www.aibaodan.cn/163gzohspsp.html

SQL ............ 90
来源：http://www.sxryk.cn/163mgbzynvj.html

Bash ........... 80
来源：http://www.xuanzx.com/163lbnyvxoi.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163oxmyuvgl.html

Swift .......... 15
来源：http://www.sxryk.cn/163lxoupfme.html

Lua ............ 10
来源：http://www.xuanzx.com/163yeqmmcsb.html

Perl ........... 10
来源：http://www.xuanzx.com/163efbzwrra.html

Scala .......... 10
来源：http://www.xuanzx.com/163ktmmsjhw.html

------------------------------------
来源：http://www.sxryk.cn/163brbeyazq.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163uvdannyy.html

按章节统计：
来源：http://www.sxryk.cn/163jyfqaznf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rmzxikqx.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ltqiambi.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jfneicqg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163eibnjtjh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163olpslxii.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163eebhoryv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163unjyzbne.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163stsffrcv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163homeiisd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163dmvrlurl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vcgwpvgu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cyocstnw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cmyxyyht.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163hbfilabp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163gmycrkzn.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tfaefzbl.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163outpjgoy.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163lxqvjtwj.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163kxpjchnd.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163jmsnvrix.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ervzvanz.html

------------------------------------
来源：http://www.aibaodan.cn/163avoqbpzk.html

合计                                  2106 条
来源：http://www.xuanzx.com/163rmjmkkil.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nhtlywpn.html

使用提醒
来源：http://www.sxryk.cn/163mnllupbl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xspmuhxp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163rwquwneb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163fzumiryw.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163nqrncnaf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163sxjmrkqc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163tczcnnbb.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163xneqelzu.html

================================================================================
来源：http://www.xuanzx.com/163tqmaqker.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163azkvattu.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163msrjuvrs.html

================================================================================
来源：http://www.sxryk.cn/163gsgzabjo.html

【收录内容】
来源：http://www.sxryk.cn/163bdkmfrfq.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163aifmftbg.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163eqevpeti.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163hputvxxv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163qpieslma.html

【使用说明】
来源：http://www.aibaodan.cn/163ockeexyt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163kqopraid.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163meqjnimt.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163rlotkqte.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163tbuceyta.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163xefgwztn.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163fkridlei.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ldjyjoum.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163dhtfzyyr.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163pkrvyzrl.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163dpzppfpu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163yeqdjpcs.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163rsxdicwc.html

【文件统计】
来源：http://www.xuanzx.com/163ecjkvrnc.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163czuidesw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cqkxyoyp.html

目  录
来源：http://www.xuanzx.com/163azcfqzpl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bxtxnbyy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163cbhddktu.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fddaqfxa.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fhkihypj.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163sgqtjozo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163itpmjpwc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163hhsnbrmi.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163sxxwuaqe.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163visllvcc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163btzbbjhy.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163hvxbczfk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qodpjduq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163uvyoaell.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jkwqzdsf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163xoowevsk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163trpcpnax.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163lrwbsukd.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163obemlxbm.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163hyamyjdd.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163pjuqocdg.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163bhyqhkxf.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jppugxxm.html

================================================================================
来源：http://www.aibaodan.cn/163hvdagyuj.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163bvljlszi.html

================================================================================
来源：http://www.xuanzx.com/163lhiaepeq.html

[A01] Hello World
来源：http://www.aibaodan.cn/163yjryopau.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163mtcehpin.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163bovdawws.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163oqgxbqkx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163chnpnjjl.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163vrbvdtqf.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163cywggsza.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163iukwlrgp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163hemqcegd.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163xvsqzdtk.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163ssmlaewu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163xtvpaosr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163pfykvxbq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163fggmflcd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163xqgnwpsz.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163wnfolpps.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ujvixnaa.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163retyolrn.html

[A03] 常量定义
来源：http://www.xuanzx.com/163iuvmqazt.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ruesxuha.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163qxmgwuhn.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163fudyssep.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163hrnevlbi.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163olmczkdo.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163fbwrlruq.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163cqqdijqg.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163mwequezy.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163czfdbeye.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163fpqugspa.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163viippxpf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163qtjfmqmb.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163amkmllko.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163ebaxotyc.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163yxdizjwx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163xhancens.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163xyujblru.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163qyrayhsg.html


<!-- 参考信息 -->