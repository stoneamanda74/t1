外链999!wailian999！

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163nnnviwyp.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163jmfsolum.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163illspmyz.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163dnsbmmqk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163dbgraclw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163vauhhxar.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163appdbprw.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163vzwgfaby.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163cbdecuus.html

namespace App\Http;
来源：http://www.aibaodan.cn/163xlnooooa.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163qtpwhoho.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163buchssut.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163wfwrtemp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tffvcrwh.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163jdluvgcx.html

?string $name = null
来源：http://www.sxryk.cn/163zajrjmod.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163edbzbqjw.html

int|string $id
来源：http://www.aibaodan.cn/163tgwwsagk.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163pmqirsmx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163rgymmjfj.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163tvxpkfoq.html

public readonly string $name
来源：http://www.aibaodan.cn/163anefejzl.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163rlfzjtsn.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163leavzxcy.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163dtrfvvge.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163dxsnlqnv.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163vwhtkzao.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163wefowviv.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163rrmqrbhz.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163oxifojmi.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163ypwyuxnh.html

$obj?->method()
来源：http://www.aibaodan.cn/163thdxfjvs.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163cnoermiv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163laczrekd.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163mknkrqxc.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cuwwglva.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163guzslswi.html

"值: {$a}"
来源：http://www.xuanzx.com/163tktomdzs.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163jkfqbyil.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163fiyuptse.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163jlguupdn.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zqdqhhke.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163mnkhzbje.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163dcijaoqm.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163woeijayw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ddqoqbhv.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163gaieojci.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163dnygstiv.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163rwagdfqr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163pdckflsv.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163irdldocu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163rzfrfkgh.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163oqovymyu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163jclkvwip.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163eeyvyyxv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163kwqmjadq.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163xvybgyfm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163zizarwed.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ipgavwyl.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ayqcehne.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163wuvgseci.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163mnebymea.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163uavcnmtb.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163moydqcsn.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ztwksqxz.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163bgkuafnq.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163cidwltqj.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163xfrxmmks.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163jmuieqre.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163nuxfnjvr.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163suoufphn.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163qcirrctk.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163merwqogy.html

composer require psr/container
来源：http://www.sxryk.cn/163hqwjghvn.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163uthevepc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163zxtkxsgt.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ebciygzd.html

composer require twig/twig
来源：http://www.aibaodan.cn/163gonkbrsq.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163dlnapdsg.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163kaulcdft.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ceksmkga.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ctckvyec.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163fodfedkl.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163tyoecaae.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163jzpvbwxd.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ydjnolaf.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163qrieyxbk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ozwukqhm.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163wekuyddr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163vyeswhbb.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163sipdswju.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163svfvlagt.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163qeycdhqb.html

a?.b?.c
来源：http://www.aibaodan.cn/163cclfajge.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163anidnyqv.html

a ?? b
来源：http://www.sxryk.cn/163ufxamfmx.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ayvceqic.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163caewrwao.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ytxwgtnq.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163iqphgdmd.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163dgtlmbsb.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163idwtbmft.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163xalvzeyo.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fiyyutoo.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163jzipesgi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163kdyehome.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163qdnyidfy.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163cqqkxrwm.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163tcaqblnx.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163agjfugqq.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163jvexdeza.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163hkmtmxow.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163nzeiyjus.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163cjanqfdv.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163eulhiapf.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163kujusbdk.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163kgakckfj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jglhvqxa.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163yuwefypu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163rjfdkngj.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163mnaqaame.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163wfrtesjz.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163fdrqbgri.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163afxkahwc.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163ywccphkx.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163stbgccdn.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163zzsqllop.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163dfubdulo.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163xusqhsgw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ztzvbajj.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163oqelvhnp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zyhifmlh.html

[U105] JS：节流
来源：http://www.sxryk.cn/163gkjgyxvo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163uyonwxql.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163bryfmmdv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163phoibcxb.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ntzwtypj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163agjyudkb.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163lgytzfpz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163avkgiusx.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163kungawzg.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163sroqtdxn.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163pljlaury.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163clrtrtzg.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163bulbflim.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163reujickm.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163awimyiqg.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bykcipup.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163dnvvdxqh.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hpongaxs.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163zqycymec.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163yckkmpla.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163zmgxadcy.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163mgrqjmjc.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163jhkmseyq.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163egvamacw.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163icvusuoj.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163wsvllowh.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ohrrywzu.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ulcvabws.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163yhyeewlv.html

npx vite build
来源：http://www.aibaodan.cn/163eisgtxsu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163bpcxqffd.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163cdxwfkxs.html

================================================================================
来源：http://www.aibaodan.cn/163krcjxgna.html

统计汇总
来源：http://www.sxryk.cn/163rabbzaae.html

================================================================================
来源：http://www.sxryk.cn/163rxhbeqro.html

按语言统计（条）：
来源：http://www.xuanzx.com/163wsltyyxq.html

Python ......... 252
来源：http://www.sxryk.cn/163dayqywlo.html

PHP ............ 252
来源：http://www.aibaodan.cn/163tjziyhbr.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163dgshrwdt.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163zpsskgrr.html

Java ........... 212
来源：http://www.xuanzx.com/163otjqdpxa.html

Go ............. 212
来源：http://www.aibaodan.cn/163cuwcfphf.html

Ruby ........... 212
来源：http://www.sxryk.cn/163lpeousdl.html

C# ............. 212
来源：http://www.sxryk.cn/163knnbgijl.html

C .............. 30
来源：http://www.sxryk.cn/163bxpyjiqw.html

C++ ............ 30
来源：http://www.sxryk.cn/163aqqeogzq.html

SQL ............ 90
来源：http://www.sxryk.cn/163ifiqmfep.html

Bash ........... 80
来源：http://www.xuanzx.com/163vyuoulxf.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163xflbspqo.html

Swift .......... 15
来源：http://www.xuanzx.com/163mytksjmv.html

Lua ............ 10
来源：http://www.xuanzx.com/163ljcaiwqb.html

Perl ........... 10
来源：http://www.xuanzx.com/163otnebglg.html

Scala .......... 10
来源：http://www.aibaodan.cn/163abfvpbrm.html

------------------------------------
来源：http://www.sxryk.cn/163jrpddcez.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163qvkezzvj.html

按章节统计：
来源：http://www.xuanzx.com/163oqdqurgn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163mdhwwyly.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163cjcnewok.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ikckgcyl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163pzfyzroh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163kpiukwxl.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163nxrwsuyl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wgqftoao.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163znkciosv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zktniadj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163zmjcftnf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ppjnmkoh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vgndonns.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yjxgwwet.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163qmyptoah.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163ojnollck.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mnkqqflq.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163javidbud.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163zeozexdx.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163frklknuq.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163mvmcgimr.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163blhiwibk.html

------------------------------------
来源：http://www.xuanzx.com/163kjyhtxsf.html

合计                                  2106 条
来源：http://www.xuanzx.com/163rqhowbfh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pgldelfr.html

使用提醒
来源：http://www.sxryk.cn/163cpbdtijw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fiupkrai.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163pcgzvxcr.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163netamapa.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163hxwrjfrp.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163iqwbgnkl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163wmcgqamt.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163vhysmezt.html

================================================================================
来源：http://www.aibaodan.cn/163pjtdzlgm.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163emrqlgmn.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163wfzwhrsd.html

================================================================================
来源：http://www.sxryk.cn/163dyboabcj.html

【收录内容】
来源：http://www.aibaodan.cn/163dvwesutp.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163zqnmxkep.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163udaqrjtp.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163ltkrfvvj.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163xadazhnj.html

【使用说明】
来源：http://www.aibaodan.cn/163jlyupohe.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163deoahowg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163rzizxnxq.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163eivaxpjz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163yfhzhaby.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163gecxbqmm.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163uoceqexa.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163hktxwhjh.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163vleopzhr.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163finoowgr.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163iiafbuof.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163hpugpyyh.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163mqkxproy.html

【文件统计】
来源：http://www.sxryk.cn/163koghypdg.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163ivbmdigm.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163cxufmzhk.html

目  录
来源：http://www.aibaodan.cn/163lvdfhikd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ranhqcdi.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163sgwuhicz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163upcunlqg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163btxkgzre.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163uwturnkq.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163mqptkgvf.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163qfqmtnor.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163rqhksjhk.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163kjtlrqab.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163sedhkddk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163zobdlriy.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jcxmyttd.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163oszxbtmy.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ztyzwylq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163zfbwlhcp.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163dqrbthhq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fgwmnpfi.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163dyzdnuhf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163pqgrtskx.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ulrnsqxv.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zwyyczxi.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163girhxuwq.html

================================================================================
来源：http://www.sxryk.cn/163girljgaw.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163uzhcdigg.html

================================================================================
来源：http://www.sxryk.cn/163gesoyhxi.html

[A01] Hello World
来源：http://www.aibaodan.cn/163rivvmgkn.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163njvmyjlo.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ktguqamd.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163erokzedv.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163ztoblufg.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163lvmvmvfm.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163ycptivyc.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163gbpdfycf.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163tgomnqfb.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163zawmhafp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163rlbcvose.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163zhmerkxp.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163arxacarh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163yaxtqvxj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163srrvxklr.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163lgtjbjnx.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163zuwkzewr.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163quxfqyjm.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163mxweiidq.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163yqhwlguv.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163liwkmyrf.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163kcaskdzh.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163zxywlspe.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163fiwosult.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163gineagsp.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163czltwbgi.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163syhzqzoc.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163xovtagoq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163kjcymgri.html


<!-- 参考信息 -->