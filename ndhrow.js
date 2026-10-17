外链999!wailian999！

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163msvhqbqp.html

namespace App\Http;
来源：http://www.xuanzx.com/163lbkpnjpe.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163edzytjka.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163iaychpyi.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163lkgnajia.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jxggvkzk.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163padvnbfh.html

?string $name = null
来源：http://www.xuanzx.com/163sazuoxzr.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163elogibpx.html

int|string $id
来源：http://www.xuanzx.com/163zhjqifvd.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163qbagvxhi.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163zlfrrjxx.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163fuyjejdx.html

public readonly string $name
来源：http://www.xuanzx.com/163fjchpgfj.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163ubhxqghr.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163xddxuciy.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163vbdjuyib.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163selspemr.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163dyrdcheb.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163alapegvo.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163uuppvuas.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163lkxgsiwv.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163untreone.html

$obj?->method()
来源：http://www.sxryk.cn/163lajebdjg.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163xwtwsxka.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163wskhfyuz.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163shyyphpd.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ircodaxo.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ncsjqkqw.html

"值: {$a}"
来源：http://www.xuanzx.com/163swhljezc.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163dtdqpiqj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163mizxfavy.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163xnetaeur.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163gxisqffi.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163coonezgy.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163dezqoqot.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163lfrgchhu.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163buotfqmc.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163kxhvlbmi.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163uqtzckyr.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163dcqtlpey.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163bilnrmpq.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163zuilmwib.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163nrayeqic.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163cwlqewnp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163yfgxlohn.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163idloetzp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163wjhhsdjy.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163fnyxonfy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163bvbplxoi.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163imcounlb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163tofgnjvn.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163pdqusfqi.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163hhbrdehi.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163eidsqztr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163tqbnaexh.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163gxjsmiih.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163mkxvdjqi.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163wfgrudke.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163lloowmgb.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163wjcdugyp.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163fxxtyufs.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163qdpfhdzg.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ymqgjbnu.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163hufyqecu.html

composer require psr/container
来源：http://www.aibaodan.cn/163htdxgycg.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163yjqbxohi.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163wveeemgp.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163vtelbswv.html

composer require twig/twig
来源：http://www.aibaodan.cn/163cdvqpyaj.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163nfegyprf.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ruxiklrz.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163vzydccpd.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163yxcypnxm.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163icxosvwn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163qjnrcfum.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163blgyxytm.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163jpvrpfma.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163juoqmlwd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163odkrbwxl.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163mhrozqho.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163fmmtbdzr.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163kkegpahf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163iqwzcosv.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163yokkpwil.html

a?.b?.c
来源：http://www.sxryk.cn/163qafakrcd.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163vnqfmxjk.html

a ?? b
来源：http://www.xuanzx.com/163vqsaxsqz.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163kgndyxoc.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163lhcpvtao.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163rvwwsfoo.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ncusrxgx.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163jwttiqfr.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163rumtfigp.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163kceeeqwx.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xmdxsfsj.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163cnvapbrk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ulbwzrpl.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163omnjuklf.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163rtgdstyd.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163wuufkbvj.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163gscskgwu.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163kckhydrh.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163thoozjmu.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163jhvhopsj.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163zqmrefzm.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163bqfwnlcj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163lrpebytg.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163twxlools.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163aqyuhkmh.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163rvzohoyx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163msketyiq.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163ygzycbcq.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163btgibqip.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163pdwmfwto.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163lcghkqgr.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163zpkigjkl.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163tmrzlqcl.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163otndwfbt.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163fzephgwl.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163amtclqwt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163pcxlebco.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163hnbmrrwa.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163uyelxdxh.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163kfciolgx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ektijyav.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163kgwxnmoj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163wjcukpnx.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163tohiuyqw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163gutmokme.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163chdizrnt.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163mfgqwxft.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163cskwwzig.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163flzakwhu.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163rxwyfjwu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163zuhmskvi.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163happpdab.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163rhcsjoiz.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163dqsqfhsk.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163tvgtabis.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163utnwlgmo.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jeaihbgh.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163vhwnyolr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vqrlohqx.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163gccorisf.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163cswuquax.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163gvmxrmsm.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163fvbmiqia.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ajsebifq.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163cpwmseoa.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163kmddbwxh.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163vyzvlqlv.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163rsnzzjbj.html

npx vite build
来源：http://www.aibaodan.cn/163omjxpkgl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ucatczmk.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163rfsnqihn.html

================================================================================
来源：http://www.xuanzx.com/163kbqgozci.html

统计汇总
来源：http://www.sxryk.cn/163shtbjedf.html

================================================================================
来源：http://www.aibaodan.cn/163phxikkqw.html

按语言统计（条）：
来源：http://www.sxryk.cn/163pfgxonoc.html

Python ......... 252
来源：http://www.sxryk.cn/163bfdlyqki.html

PHP ............ 252
来源：http://www.xuanzx.com/163bcxiywjk.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163nzmybhyx.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163bbulmfro.html

Java ........... 212
来源：http://www.aibaodan.cn/163szpjlwld.html

Go ............. 212
来源：http://www.aibaodan.cn/163houpipzl.html

Ruby ........... 212
来源：http://www.sxryk.cn/163fnuwbsjj.html

C# ............. 212
来源：http://www.xuanzx.com/163vujpkpwu.html

C .............. 30
来源：http://www.sxryk.cn/163irdhvgit.html

C++ ............ 30
来源：http://www.sxryk.cn/163hlhgbgkb.html

SQL ............ 90
来源：http://www.aibaodan.cn/163jwlkwbgd.html

Bash ........... 80
来源：http://www.sxryk.cn/163daubnwie.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ljnaycxw.html

Swift .......... 15
来源：http://www.xuanzx.com/163quiobfuq.html

Lua ............ 10
来源：http://www.aibaodan.cn/163avgzjzch.html

Perl ........... 10
来源：http://www.xuanzx.com/163qfljtmwz.html

Scala .......... 10
来源：http://www.aibaodan.cn/163bmhxffzq.html

------------------------------------
来源：http://www.aibaodan.cn/163sanbkaug.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163tsaenozw.html

按章节统计：
来源：http://www.sxryk.cn/163jroyfdyf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163arbyyrit.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163qdfhcqyp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jwbdicyv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163prpnlopx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163hziagzfz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163xhoixvqs.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qoabkisz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hhfdeymx.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163exeflvbg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163xrxcfszh.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nhybcmuj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fqgqazqq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yfoxwrpc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163hmdxewuf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163saotikru.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yzektfin.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163dtgznsaj.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ikqsgygw.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163iwyglndi.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163numejmvm.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163vqqsmmdn.html

------------------------------------
来源：http://www.sxryk.cn/163hhwzjcqs.html

合计                                  2106 条
来源：http://www.xuanzx.com/163peecejfi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163sufwwcyq.html

使用提醒
来源：http://www.aibaodan.cn/163kccrvxgh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163akevebza.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163mtjqwvrv.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163qtlhauxb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163rcchhsjg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163doxxdzbi.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163fpoevewr.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163vnhlwqff.html

================================================================================
来源：http://www.xuanzx.com/163ngruacwj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163alvkptvl.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163wtsbuqbe.html

================================================================================
来源：http://www.xuanzx.com/163oivuuldq.html

【收录内容】
来源：http://www.xuanzx.com/163zgowchyo.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163wnkytwsh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163pnrkkwpd.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163uuvblzko.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163wbzzqqxz.html

【使用说明】
来源：http://www.aibaodan.cn/163whjeiqic.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163qlskwgfn.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163tbdczttb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163bcnacsck.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163sqwvrgfl.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163wchdtcnr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163aocgfudh.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163yvtjsemb.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163abieaqws.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163eebxlfrn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163gcsjcsmf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163iauypysr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163bydguxac.html

【文件统计】
来源：http://www.aibaodan.cn/163ggwvjbph.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163qeiivmdy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ycwqrjlh.html

目  录
来源：http://www.sxryk.cn/163vhacvvtr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vspynlja.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163furqfhwb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fnwtlecf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163cmtrrwoc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163gloaxgcv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163nlqhejwz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163fnqdcbwj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ykoijrvb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ycmvpcfe.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163aifzccbb.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ahdoavkv.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163quwajbrz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zmkupewd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gnfwjdyg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163gfhblarq.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163shnmglxy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jbzsvbpk.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163tqyifzrc.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163ehfpugbo.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163oqborshe.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163fanipoiu.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163jlqcfkjj.html

================================================================================
来源：http://www.sxryk.cn/163vujkqutx.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163qbvhvwwj.html

================================================================================
来源：http://www.sxryk.cn/163xddzoexn.html

[A01] Hello World
来源：http://www.xuanzx.com/163gqifdyxb.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163sptgyvxc.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163bphfairg.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163zoffdveb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163irsviexv.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163jypelgzu.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163sechvcob.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163svmlaoxg.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163qemadroz.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163wcajcdni.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163xnmztwzm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163fsorjtyh.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163sepuuyqa.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163kibtzynh.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163sumcopal.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163mgspvewt.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163hjeuwuzz.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163zbfycwuq.html

[A03] 常量定义
来源：http://www.sxryk.cn/163ifefbumw.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163wrukycnm.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163fpvbzdrx.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163zlbkdzjb.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163lzmwholl.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163rhobwxlo.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ecmywhes.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163rweqopzx.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163yhuwkeoq.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163rfcblbry.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163sqrezspo.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163fgpkomwc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163talghodv.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163fcavzyjj.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163cuzhsink.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163ccoxnarv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163jwnaacdd.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163rzymguow.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163xkjkjhlw.html


<!-- 参考信息 -->