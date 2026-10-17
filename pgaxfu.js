外链999!wailian999！

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163yewjtmtt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mydrkcct.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ratudhqf.html

?string $name = null
来源：http://www.sxryk.cn/163khfcyupa.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163cdoqlkqe.html

int|string $id
来源：http://www.sxryk.cn/163gzhmjfoz.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163gpfgdzto.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163oabgkqmp.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163lnkilhzo.html

public readonly string $name
来源：http://www.sxryk.cn/163ckvtuuck.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163tojsmvrm.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163zixlsvfz.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163hvmltetx.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163lemmablz.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163smefgblo.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163ktdaouzj.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163wjajjdoy.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163xxbzmpoq.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163aebsvlrg.html

$obj?->method()
来源：http://www.xuanzx.com/163cbyvmnjg.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163fnmegghv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163fgxflggb.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163gkwuasrf.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163anbitwfm.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163rpwfkllb.html

"值: {$a}"
来源：http://www.sxryk.cn/163lmxlpgtu.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163yuhwlndh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163unwvwnrv.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163zfuxydmq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163avrxcthr.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163qzmpbfda.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163bngdpbki.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163dfdibpah.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163abfppybr.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163eltuekdq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163gribdmqj.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ngjpogmg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163syctrwgj.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163swpanqmn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163eiqjkekp.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163pvcebwpn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163bsftbici.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163hzbaqmxe.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163bsotdlio.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163akwygrxa.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163bmvowgmn.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163fdymnubx.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163vyekdjxa.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163aldvhbpe.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163vpejkwrr.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163fjlrwjoc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163jhtzkieu.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163buwixsac.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163iqfbbbvh.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163xbydssgt.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163tdzpsubf.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163fqztzpxr.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163cemkjdth.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ravxzaxx.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163atrsvusa.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163rnkuzaic.html

composer require psr/container
来源：http://www.xuanzx.com/163iexdjwtc.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163eipsdyfb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163vfznuopd.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163pljshzam.html

composer require twig/twig
来源：http://www.sxryk.cn/163amuazkzj.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163zrrnuwht.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ygxephhl.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163jycmsdmn.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163fhlrjamr.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163unhflhyz.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163wteymzyu.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163dqtempjn.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163cebxkxtk.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163exzvacoh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163myflxpya.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ebwzhrim.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163mikynqfn.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163briclteq.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163xokgokjn.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163vceewspm.html

a?.b?.c
来源：http://www.aibaodan.cn/163gozixjsf.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163twyqnkeo.html

a ?? b
来源：http://www.xuanzx.com/163zgldxqcd.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163djrjmupe.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163atjyhyjx.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163ttuoyrqt.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ochdskkn.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163gjfihmyp.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163puxngses.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163qfdkwnqi.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wuijmwix.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163bllnqygw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163sjkvrxwk.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163qgbysapv.html

structuredClone(obj)
来源：http://www.xuanzx.com/163hypbamcd.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163osqxczzy.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163yweciyow.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163vkvzylfe.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163gjxurnkl.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163siavqsgu.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ywaullww.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163xavgqlmn.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163aqsnhoyq.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163swguocat.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163volguekz.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163wovporzi.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163xbtrthrc.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163rqrgsbmo.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163zqkvrklr.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163swwemcdi.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163locluxih.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163jrzqrwkb.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163rcjxhzxs.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163cycfkamk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163nrusxwbk.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163tawjjgju.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163vyadymsk.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163jphqevil.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qylwulnd.html

[U105] JS：节流
来源：http://www.sxryk.cn/163dczwvxuo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163apwgqxux.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163nexwrpnp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163weetremy.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163xtbrmary.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163elwcpwic.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163gllcxgpu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163iixtvcrv.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163bffwlhnj.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zjjvudki.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163jmtaahrc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163omhhovfi.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163dqzaiimo.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163vadlcjrg.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rxfxfbcm.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163rkxdhaos.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163cxbsmren.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zkvzeddn.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163gczpumbc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fvmewtct.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163xbrqpetn.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163kbxlakgv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163rzsbfdzv.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ovnwfypn.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163mglnslsi.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163bbvmbqzy.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163mozkzyoj.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163vczelusg.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zwwokrbk.html

npx vite build
来源：http://www.aibaodan.cn/163ugsrxgdj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163gxstpifb.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163hyrnjjmu.html

================================================================================
来源：http://www.aibaodan.cn/163grbdgcdo.html

统计汇总
来源：http://www.sxryk.cn/163tceicrhj.html

================================================================================
来源：http://www.sxryk.cn/163rxpzxfjs.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ogiyjbrv.html

Python ......... 252
来源：http://www.xuanzx.com/163ksbhyllj.html

PHP ............ 252
来源：http://www.sxryk.cn/163llieuhxb.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ppfahkih.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163jjusvpjw.html

Java ........... 212
来源：http://www.sxryk.cn/163iwactowe.html

Go ............. 212
来源：http://www.sxryk.cn/163zbsxazaj.html

Ruby ........... 212
来源：http://www.sxryk.cn/163kotihunv.html

C# ............. 212
来源：http://www.aibaodan.cn/163ctolscpd.html

C .............. 30
来源：http://www.sxryk.cn/163prpoffub.html

C++ ............ 30
来源：http://www.xuanzx.com/163disnevib.html

SQL ............ 90
来源：http://www.aibaodan.cn/163cwpjekyn.html

Bash ........... 80
来源：http://www.aibaodan.cn/163rrcipzul.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ukrkrvcp.html

Swift .......... 15
来源：http://www.aibaodan.cn/163agbmccck.html

Lua ............ 10
来源：http://www.aibaodan.cn/163nnkytjsj.html

Perl ........... 10
来源：http://www.sxryk.cn/163aurxcmax.html

Scala .......... 10
来源：http://www.aibaodan.cn/163npnruirz.html

------------------------------------
来源：http://www.aibaodan.cn/163zdtcelaf.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163jptqmmec.html

按章节统计：
来源：http://www.aibaodan.cn/163oeuuvmro.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163evpxugix.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cjsknifk.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163usqpvigu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163anpcrgpf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163lgsiybkg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163gdgzelut.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163creffhsn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163rqxvfpfy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cbjmgtui.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ngdvqnvh.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163inoqnvin.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ekyrurbn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gvypqgua.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163xgioxolw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163netjzqep.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ulitjebk.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163rrlaocsd.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163auluuksj.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163rasiyrkk.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163gnjzobcp.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163snunqcwu.html

------------------------------------
来源：http://www.aibaodan.cn/163opxoblag.html

合计                                  2106 条
来源：http://www.sxryk.cn/163bsofhelo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163eqkjyuec.html

使用提醒
来源：http://www.xuanzx.com/163prhqbcfh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163knfendmo.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163hoviipqg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163saqddihp.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163lbvvcpyh.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163ndqlrhka.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163orndhufd.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ftxbazdh.html

================================================================================
来源：http://www.aibaodan.cn/163ezkbxkpv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163guolhlcq.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163unokcpmx.html

================================================================================
来源：http://www.aibaodan.cn/163yrmxugyt.html

【收录内容】
来源：http://www.aibaodan.cn/163girudzbm.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163viqzvqrh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163alvvxlft.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vgnuwbno.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163vjxziquo.html

【使用说明】
来源：http://www.aibaodan.cn/163zlsfliew.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163pbhyhrdp.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163nbqlblgv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163bfvnycso.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163mdavhmpd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163fcgzvnmb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163wrrfyztf.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ohussfka.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163mgvxpqac.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163xavvqfhq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163woskgfiu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163tfbbehjz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163kjkkzxtm.html

【文件统计】
来源：http://www.sxryk.cn/163ljhfjccl.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163gynxvoll.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dvdgvmcx.html

目  录
来源：http://www.aibaodan.cn/163yfijamim.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ohywqyio.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163zspmadnk.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xnskynjb.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163uxbaoqhr.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163pdwfwemz.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163rglgsdlh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bmlirraz.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fmkgxgen.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163pmlqkniw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lvmgirkr.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163erzipxmc.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ykamotko.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xqhlyzjm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bajlnrbo.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163sdvnqghy.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163fvezcbtb.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dhrqqksl.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163uunvlkyb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163tpbucyvk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163obqdzyvf.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163yvxixcgn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163pwxqifzk.html

================================================================================
来源：http://www.sxryk.cn/163crjbbafv.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163ihmhxuxe.html

================================================================================
来源：http://www.aibaodan.cn/163eqxcsetc.html

[A01] Hello World
来源：http://www.aibaodan.cn/163xdjsbonc.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163idtnkhyz.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163xxdzckql.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163dnyxdglu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163tsvmpjnw.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163bzobuufp.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163xaguxndo.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163kbwvcmam.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163vrsvahxx.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163kqlxpylv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163ffqgnycx.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163evwvmogu.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163wuwsrcnb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163kovkufbr.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163renzzzkl.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163eadgzpfb.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163hlqxspqo.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163cdlboykh.html

[A03] 常量定义
来源：http://www.sxryk.cn/163hianugit.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163zauzapvu.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163zdahefiq.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163piootsfq.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163oolgcyqr.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163phpbnqqb.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163rrdrdekt.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163tsyajzkx.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163tzuncygb.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163dqrgjtqn.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ercziagu.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163yusnpneg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163qoubteue.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163peibtchf.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163rtywhuhw.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163xxaqdiyu.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ppincsth.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163rfwwztax.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163xfuplrkn.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163nypswvll.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ssfewdcr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163hdjuoexb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163pfxsbake.html


<!-- 参考信息 -->