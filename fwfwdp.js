外链999!wailian999！

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163uonpbzxg.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163pfefidmm.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163owdpqzbr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qvzkrcrv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163shczfscm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ncirwsbl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163drhzbxvs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163uvrettzh.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163xtmlijjb.html

namespace App\Http;
来源：http://www.xuanzx.com/163qibkmxlf.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163mamkwpph.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163etwfzuvp.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163adrzxvdl.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163aywpwuef.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163mrmwsewi.html

?string $name = null
来源：http://www.xuanzx.com/163bodlowet.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163pepxxmpt.html

int|string $id
来源：http://www.aibaodan.cn/163aphgilxx.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163uzcjtefr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163vhopzezt.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163besodstz.html

public readonly string $name
来源：http://www.sxryk.cn/163zlkqlavb.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163uxsrvukj.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ernleydq.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163htedgmvc.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163gorjpxbb.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163kjdogjzm.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163hdwlbjsl.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163smjlcytg.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ajuwldpe.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163ygskqqby.html

$obj?->method()
来源：http://www.aibaodan.cn/163jewlkwfb.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163twbpoqop.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163sgaeqcjz.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163cevbrpgp.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pasnpsed.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163jlylmoiv.html

"值: {$a}"
来源：http://www.sxryk.cn/163qxnaxtpp.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163opjueelc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ipwxyqyn.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163wikvshwv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163acnqtuly.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163mwfctavw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163vgkzmyfy.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163nnephier.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163hfnmfmsi.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163qvdraddu.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163cfuxyiwm.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163mkbeorbt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163swzlioey.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163niobtdvs.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163qhmjhoga.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163diezlxsj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163eirdhruc.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163iuorrxdk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163phxfbcrb.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163gawoiybz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163jnppmaio.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163eljvvpkl.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163xntqluxx.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163iptgekns.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ldbyuocx.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163wpxqaqot.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163jqopubwy.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163oyubogrk.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163pwdxiexz.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163hjwjjedg.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163qkinjpuk.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163xlletbfv.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163gbsxxfov.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163pxmrqguj.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163guacnjbe.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163yysrglpv.html

composer require psr/container
来源：http://www.aibaodan.cn/163qlwixuzh.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163jtvjghij.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163mzpgpovh.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163jbkirvwg.html

composer require twig/twig
来源：http://www.aibaodan.cn/163oarejlhq.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163csgysrpo.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163kmslpvvw.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163vwtgewyo.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163aktobevw.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163rbtlubdu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163pxgeohxp.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163oqjfblrd.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163qybcjdyz.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163sisybidr.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163oztmqnlz.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163zoqwxvqe.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163wsdvpenw.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163tpuofodp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163nqazftxc.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163nltysxkt.html

a?.b?.c
来源：http://www.sxryk.cn/163amlgtoey.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163namlkrhw.html

a ?? b
来源：http://www.sxryk.cn/163ptzugcjf.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163lthzbyum.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163lnctkoxb.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163ajehkeyk.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163khgwkkxi.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163hodztmum.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163hgmriiuh.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163svwlrtyj.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kfrqiglg.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163srzwiyzc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163pqachqho.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163gvbdlxvs.html

structuredClone(obj)
来源：http://www.xuanzx.com/163bxaknavn.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163iuifooxc.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163sjiqimmk.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163irjsgiby.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163otxaavav.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163rntxwwmd.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163oaymfqcy.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ujgqcvul.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ekxofhhn.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163dpcwmurv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163emgcltxa.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163fgvpahem.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163kttjrhwm.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163jyyirtzx.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163sxinyapq.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163adbbtbem.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ighbchqz.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163agsemxui.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163opcuzwsu.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163chhqgzyh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ohcpjqyv.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163cevkwxkl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163qfqoxjzo.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163giqqmmso.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qicqgcxa.html

[U105] JS：节流
来源：http://www.sxryk.cn/163etccvwot.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163gqymlens.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163lxacahra.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163shjmnqsy.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ppcexnbm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163gnuughbm.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163civhqjiq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163lkinsqfa.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163joagpxra.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163nogcgfnb.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163lhslogts.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ftgkfpyg.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163umwdleqf.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xubztzki.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163oqmbnshf.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mnmqkqtw.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ddkzdrzb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163naivimeg.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163xbitfqjh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163alildgph.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163tqjugbgy.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163zydgpksm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163omezdtaa.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163girvtckx.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163qisiksqo.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163rsexdwif.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163vikuxvuy.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163wkgxtatb.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163mnxmfjth.html

npx vite build
来源：http://www.sxryk.cn/163whhzldho.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163vxxyobjl.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ofhjqjtt.html

================================================================================
来源：http://www.xuanzx.com/163ihmsawwd.html

统计汇总
来源：http://www.aibaodan.cn/163xzprrzpu.html

================================================================================
来源：http://www.xuanzx.com/163wtmqwrnj.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163tkdrymus.html

Python ......... 252
来源：http://www.xuanzx.com/163cgauzibj.html

PHP ............ 252
来源：http://www.aibaodan.cn/163oonszmyr.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163iwftxmnm.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163kcoankrq.html

Java ........... 212
来源：http://www.xuanzx.com/163tfckxrdn.html

Go ............. 212
来源：http://www.sxryk.cn/163patuqwjt.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ncvyxeon.html

C# ............. 212
来源：http://www.sxryk.cn/163yvwcprhi.html

C .............. 30
来源：http://www.sxryk.cn/163kjnezrfz.html

C++ ............ 30
来源：http://www.sxryk.cn/163jdyicrhf.html

SQL ............ 90
来源：http://www.aibaodan.cn/163rnckcqmk.html

Bash ........... 80
来源：http://www.xuanzx.com/163tsvjdzff.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163uiloapvr.html

Swift .......... 15
来源：http://www.sxryk.cn/163jeztilcb.html

Lua ............ 10
来源：http://www.sxryk.cn/163jvaoyeok.html

Perl ........... 10
来源：http://www.xuanzx.com/163krekvnkw.html

Scala .......... 10
来源：http://www.xuanzx.com/163glmolfhr.html

------------------------------------
来源：http://www.sxryk.cn/163ugwneveu.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163mrbskkex.html

按章节统计：
来源：http://www.xuanzx.com/163lrgqfeiz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163wzfbubtb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vxupikxe.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163bmgirmsf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ttobykpu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163snuxddez.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ykatdngf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mxqlxqgh.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163fysnnxsy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163srztjurj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163jomefceg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mdqbxrya.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vejaouoy.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163eyngrtvx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ihluvoqu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163ehqtdgji.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163banwmdez.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163pymkjehp.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163bzpbwheb.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ywhaoqrk.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163qushbntc.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163dlqttzim.html

------------------------------------
来源：http://www.sxryk.cn/163sttriakw.html

合计                                  2106 条
来源：http://www.xuanzx.com/163gfcgxypl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yjgupvad.html

使用提醒
来源：http://www.sxryk.cn/163elmuwttv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163memsypis.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163hnjtbkpy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163ssfhtkzo.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163fkzbcadj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163exgdqbqt.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163pdjywitb.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163vvzmowsh.html

================================================================================
来源：http://www.aibaodan.cn/163ympzjlaf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163nfdytntm.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163cmgqqfsj.html

================================================================================
来源：http://www.xuanzx.com/163lwdghtwa.html

【收录内容】
来源：http://www.xuanzx.com/163xcapjwew.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163jqvxjykw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163zuuxzenb.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163hjtrrtjl.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163quuquojr.html

【使用说明】
来源：http://www.sxryk.cn/163jwnaxwxr.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163bgdmnzoz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163yqzlbtzi.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163lvltzict.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163kwdkgxss.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163tifqzkbg.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163mlyyqiuz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163qhzuikty.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163rxvzyztf.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163axivycxy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163gwulgdqs.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163yjtxelvm.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163mzcatzim.html

【文件统计】
来源：http://www.sxryk.cn/163mdpeowqk.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163buesafjc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ppudofif.html

目  录
来源：http://www.aibaodan.cn/163yalqfatz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yzzsajzh.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163kfqcvhos.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163dglckiku.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jlpddcbz.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163mtviresd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163jqvrtrlv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163yxrurlcj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wtjbhsxz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163dppofhye.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zcgccoyd.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163kfjbvsbu.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mtijikwv.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163neccfxtp.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163avipfgiu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163wiidbxtt.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163uqjtrfbl.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fgzavfrl.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163ivqscbwb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163uobszfvu.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163mvtvoabh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163rvmpnisc.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163jrfwaora.html

================================================================================
来源：http://www.xuanzx.com/163ddrumwhc.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163ulqhgqnw.html

================================================================================
来源：http://www.xuanzx.com/163dyraiaqz.html

[A01] Hello World
来源：http://www.xuanzx.com/163jryhwvsn.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163brqggems.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163zfrsfqxi.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163kilnwvdd.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163ihyatrof.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163icrcilht.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163wzksptci.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163avqjhytd.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163chbtwqcr.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163flicaqeh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163rjbjmebc.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163arobymak.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163wqeiaxyh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163mtocsvjr.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163xenvsesh.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163uljeqmwk.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163dillpcxx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163geylcskr.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163viqnfatn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163wqvspcbp.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163doyrtoeh.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163zacimxwt.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163ifjqcpvy.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ubdoflqs.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163nbiqlpox.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163iabgjswm.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163txnanxkx.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163wpncsmej.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163gcvppesq.html


<!-- 参考信息 -->