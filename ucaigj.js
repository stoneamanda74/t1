外链999!wailian999！

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163furzbmwh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163deqdlzzg.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163alemtgnk.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163nvrvjasa.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163kvnzcfjz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163jrhgzayi.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163tjlwgfwa.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163uxydxmkj.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163gxfolnyz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163zixnefzd.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163iepyyzcq.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163nfvuyhdb.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ttjszsnn.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163djoyfnzj.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163gydxnujq.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163lraihxnw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163hcnjdgpt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163rhsrdsid.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163rzcjdmoz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163aiwywiid.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163ijmunvta.html

namespace App\Http;
来源：http://www.aibaodan.cn/163jnywnfwe.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163kazregji.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ritxtsjx.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163worqppib.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mleyfkoz.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163bdkwashk.html

?string $name = null
来源：http://www.xuanzx.com/163spjbdptw.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163equchtda.html

int|string $id
来源：http://www.aibaodan.cn/163jppmmgfd.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163sesntjuv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163gnleaaha.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163iewtilim.html

public readonly string $name
来源：http://www.aibaodan.cn/163mycxurek.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163aklkdqkx.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163uoraneea.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163aormxrlx.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163jkhuxgug.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163tjuzxvxf.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163xxcamsyh.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163sgapjoqa.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ewsnwmjk.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163ydxypkwi.html

$obj?->method()
来源：http://www.xuanzx.com/163zvwhzedg.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163eksyvhdf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163bolmrtqo.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163tsnbytmc.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rgegalmw.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163miidwsad.html

"值: {$a}"
来源：http://www.aibaodan.cn/163xoxcyajq.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163cmemjllv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163iadtidma.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163wzrxbbsx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fsbxriuu.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xtkfyctc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163xsuzljjn.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163thnkwzum.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163agluxddv.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163bpphgvyf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163vegbysed.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163hinhiakh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163nppkczrb.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163hmyvoydn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163jtgvfehm.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163adajpifq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163qlcncbxj.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163dmhbjnut.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163gbmrcxiv.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163rmhhefot.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163salcltkt.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163hsaiknas.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163hlzwjaod.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163yepnpisl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163bpvdbwfg.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ugikubzq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163uspxupvc.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163ivjjqded.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163enhzurmx.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163pzbshzbr.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ejxgipdp.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163aukjdtoo.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163uzzwphvk.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163rercfcvg.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163blcbbnzq.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163svejldaq.html

composer require psr/container
来源：http://www.sxryk.cn/163mfeqwjim.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163bzonikeu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163dmqpmlmy.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163hscqrgzb.html

composer require twig/twig
来源：http://www.sxryk.cn/163hycaidkn.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ecfjpqbe.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163cekiydpi.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163iwwmkddp.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163kgngifzr.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163gctvason.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163imrqxmig.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163glhyedjm.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163jxycupqf.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ronzqyvw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163afqignzk.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163syozzpai.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163rsqkedar.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163gslfmovm.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163qzvrybhc.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163luobicsr.html

a?.b?.c
来源：http://www.aibaodan.cn/163lpfuquxm.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163yllouqeb.html

a ?? b
来源：http://www.sxryk.cn/163ozlsxrcb.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163tvlxzoqt.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163udpweygu.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163zpapfuhn.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163zemtbduk.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163wsaoejuf.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163wbebhlsb.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163onfambck.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ysuofcpz.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163qfcgrgsv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163uiuxfwcr.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163qcxjkwmv.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163mshwvhvh.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163lgtsmpnf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163tyrkqygd.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163jaukcqwx.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163bopajfle.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163jitvtqws.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163bfhoanki.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163htkfxxrs.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163thiqvddk.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163raigvodn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ghetuvrb.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163onvkbhmj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163uoisyaqx.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163rakpcmly.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ytnahucd.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163visrtnqr.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163jkdqkxci.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163rhwblzuw.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163cganefzg.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163bsisfkbc.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163yitmqnkk.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163fgheacaj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163wiglifyd.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163iarukjkh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hoovzwgo.html

[U105] JS：节流
来源：http://www.sxryk.cn/163zqbcjrjz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163yeufwoui.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163wottavia.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163cktpabks.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163szbbmltp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ejpewjvq.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163nrrhdnax.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163cfegnfnp.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163zwokqzti.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163yuvmhbdk.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163rektnqnp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163nzwtykrz.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163fbdejlno.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163gsupjadd.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163wwxwsdmi.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nokjklzy.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163wfngzpgz.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zucfujsm.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163oqzxhlwy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fofqqsfq.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163sztnzkrj.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163rpxoittq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163gxdaromg.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163rwwswtir.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ltkmxhes.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163dmowxllm.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163jtxhdsxi.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163lexofxfl.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163krntlpew.html

npx vite build
来源：http://www.xuanzx.com/163ppfpibol.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163sysrlygc.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163jpaywnxm.html

================================================================================
来源：http://www.aibaodan.cn/163ixrohtnf.html

统计汇总
来源：http://www.sxryk.cn/163ozgqdxgh.html

================================================================================
来源：http://www.sxryk.cn/163scfimodt.html

按语言统计（条）：
来源：http://www.xuanzx.com/163rdeuprdm.html

Python ......... 252
来源：http://www.xuanzx.com/163gtiaasgs.html

PHP ............ 252
来源：http://www.xuanzx.com/163xnqagybz.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163uknxgoue.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163dzhfqsyh.html

Java ........... 212
来源：http://www.aibaodan.cn/163yovalbsb.html

Go ............. 212
来源：http://www.xuanzx.com/163wsebuwdw.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163kooysctd.html

C# ............. 212
来源：http://www.sxryk.cn/163uokcqaoi.html

C .............. 30
来源：http://www.xuanzx.com/163thqmefcr.html

C++ ............ 30
来源：http://www.sxryk.cn/163tlibehle.html

SQL ............ 90
来源：http://www.xuanzx.com/163vrglcfqi.html

Bash ........... 80
来源：http://www.aibaodan.cn/163sskbhkyp.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163zgcspcgr.html

Swift .......... 15
来源：http://www.aibaodan.cn/163xcnjirvy.html

Lua ............ 10
来源：http://www.xuanzx.com/163mkptgrfv.html

Perl ........... 10
来源：http://www.xuanzx.com/163nnqfasen.html

Scala .......... 10
来源：http://www.sxryk.cn/163rotrflbk.html

------------------------------------
来源：http://www.sxryk.cn/163rgalzfgt.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163citugxrw.html

按章节统计：
来源：http://www.sxryk.cn/163vmaxyvzh.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163fwatsziq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wjgwckyt.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zqausymt.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rhtzigit.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163yarkmopt.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163zukuucoj.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xucambbi.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163qjoyrspi.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nrxwfsgm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ouckdrwh.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gcrtccoc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gmothwyn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mihcabwx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163epxnylhm.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ipsnfywf.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163acfrokgz.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ndqntuuo.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163xchzyzwz.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163smmriqaz.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163mzzferct.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163crxyymlx.html

------------------------------------
来源：http://www.xuanzx.com/163ehuzxplt.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163lmgbouzh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mbytluap.html

使用提醒
来源：http://www.sxryk.cn/163yknldeag.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163teumibas.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163oqcxjrpb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163kkkxtzzl.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163qryxickh.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163oimcgyda.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163defmtule.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163xkrnomrb.html

================================================================================
来源：http://www.aibaodan.cn/163iewrithu.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163mjzrtqbq.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163kbfnggot.html

================================================================================
来源：http://www.aibaodan.cn/163vdnedxzq.html

【收录内容】
来源：http://www.xuanzx.com/163gdxumhhc.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163xriublag.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163wcgdzybv.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163jbedlpze.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163eeqzpanx.html

【使用说明】
来源：http://www.sxryk.cn/163vvmmufan.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ecglynlz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163lwcyxplk.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163vyzahuld.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163vaxckiym.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163bhcminol.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163heyqfecn.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163ryjtiuxo.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163lyttiaqu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163wuxocmud.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163epginsif.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ccvqucua.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163meecyfid.html

【文件统计】
来源：http://www.xuanzx.com/163duvxbtso.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ycdoxnkf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163psmnyaju.html

目  录
来源：http://www.sxryk.cn/163rngeeulc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pxjluksj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163rvaarukp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xdtylzxw.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163uczqhqfj.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163zoujeroo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163etersrei.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163boendqbf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163gajzitys.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ynqkbder.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163udvrjzcl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ughdgire.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163eputcuxh.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nodwbyan.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ajhgdmmh.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163rtsjrzkf.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163wiskjojy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fvakvgux.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163slkpbofr.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163gcmfqtqw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163edgbwnwg.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163rnxyyiwu.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ljvxylvf.html

================================================================================
来源：http://www.sxryk.cn/163pwsmkbwq.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163ocakflhd.html

================================================================================
来源：http://www.aibaodan.cn/163tjguegoq.html

[A01] Hello World
来源：http://www.aibaodan.cn/163gaybaneu.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163mhjqhbfj.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163sxtxfumk.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163qgbiqpvy.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163uxsihfew.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163jwlfaufc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163eborvftk.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163lpodlvcw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163fbxkbdbs.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163vtbctiuo.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163aajrvwlb.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163qrnbcbdx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163knqmmwan.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163nzchbajw.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163nsprsmaz.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163dhxubhbb.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163oyvlhzvg.html


<!-- 参考信息 -->