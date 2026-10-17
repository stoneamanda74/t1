外链999!wailian999！

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163xsjzjuvd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163muasawof.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163hgbeiwxx.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163hgqycand.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163npkdffso.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163iizmsfmo.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163poveuqpx.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163crlbuqip.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163oieecctb.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163xpxhzsbu.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163nwgdikjj.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163naibpjhe.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163wsltaphy.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163qhmcpbgc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163rtbgjeep.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163kshandqz.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ghfizjop.html

namespace App\Http;
来源：http://www.sxryk.cn/163lrvueiuo.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163dcwagcre.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163gqxqdacf.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163iaifdwgi.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zazyplqh.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163xtoxyxui.html

?string $name = null
来源：http://www.aibaodan.cn/163svpvihsb.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163wmrspmea.html

int|string $id
来源：http://www.xuanzx.com/163ebshwocu.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163omypxobu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163gustgjra.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163cusvxxyf.html

public readonly string $name
来源：http://www.sxryk.cn/163xeeulibo.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163sfcesmon.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163vjedppap.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163eaznfsbq.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163nrgbidfp.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163iibjxkpf.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163mykshhrl.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163walrpxgp.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163hqmewrix.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163cfaekaya.html

$obj?->method()
来源：http://www.xuanzx.com/163mbuozqpb.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163ijmtewum.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163qdojsqic.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163wdymajtp.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cdtyxuna.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163nraufmdu.html

"值: {$a}"
来源：http://www.xuanzx.com/163zsjtnvju.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163unjmtkog.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163hkglasyq.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163wbflreuc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163sjapvbeq.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163gkyjepnj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163awnlrjys.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163vdtnsvxz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wmuzswxv.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ojuwdfso.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163uyoxetpk.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ufgjtvwo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163fmzmxdct.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163fanwgdia.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163jouyvduk.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163egopjisx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163gtzlqgnu.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163hgpazsqc.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ntgvgppz.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163fqskydor.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163ekrsrlaw.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163jjzubwqy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163uiehezah.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163vzhmiycs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163loxjuwxn.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163enjkntcp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163solvwdyg.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163qlczpujs.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163kuafblpl.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163qawmlsua.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ecsnnbfi.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163ajwyzkvh.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163gpdtpwop.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163nzmgvqwh.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163lrxjhmws.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163slncwxvs.html

composer require psr/container
来源：http://www.sxryk.cn/163uklcekke.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163mxazokec.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163lrziatoo.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163exmghczl.html

composer require twig/twig
来源：http://www.sxryk.cn/163jljhehtx.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163bwarnwxj.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163kpqinmwj.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163afflfrzj.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163gncbfzvb.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163fuoejuat.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163xbqqzsmd.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163rzwqpbnr.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163lpgesmiu.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163iyyvjijz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163alryqrio.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163dtzgpnws.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163xkrabaut.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163xfdsgykk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ievvledk.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163dhjkpybd.html

a?.b?.c
来源：http://www.xuanzx.com/163hoxyeuky.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163pwxpikdw.html

a ?? b
来源：http://www.sxryk.cn/163etorhwfq.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163zhkfuzob.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163bfbnedip.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163iddrovvl.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163sdvpfpqa.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163jjugsjjx.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163rdmxaltg.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163jaqsvvfp.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163axwmqrgc.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163esccbjcc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163fivhgdvo.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163mnrpybdl.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163jikxwwmz.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163cvndamvm.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163lfskmjrw.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163lhekjuhe.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163snpzilmm.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163qxcbvskd.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163zbhciexe.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163pdwfknhs.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pahqtdyp.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163vhjogkrn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zlebjosb.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163hmtnktuh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163arjxmsll.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163nkzysbns.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163cdcwgkiw.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163seljgcpa.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163inmbjlmr.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163kajuoksl.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163kzxwvnhm.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163nfulvcky.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163jbexbbuy.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163whtaxbbk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163szuwatqg.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163cfaruavl.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ngvbwncm.html

[U105] JS：节流
来源：http://www.sxryk.cn/163tybruoxo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163fwkngwpp.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163zqloiisz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163krpkicva.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163aqqozysa.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163pswelsaq.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163tvqszgxx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163bozgxdnj.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163wxtmbnsd.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mxevvnon.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163yqmctxay.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163cincboyb.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ieozwjom.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163tgxbgwbw.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163wyyvnhuk.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163iwgandtb.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ilzbpnar.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bikpfqhn.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163sboywsei.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xfhyobjo.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163dvmmtslr.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163eyggvxgh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163xjuipicz.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163lqjcisep.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163noktgkbk.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163hfwxnbup.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ipfvggqq.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163klqoigxy.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163poiqvtyn.html

npx vite build
来源：http://www.sxryk.cn/163yccvjohr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163mtmjdpub.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163tuhvxbdx.html

================================================================================
来源：http://www.aibaodan.cn/163isjxithe.html

统计汇总
来源：http://www.aibaodan.cn/163licvamjc.html

================================================================================
来源：http://www.xuanzx.com/163ilkxrvod.html

按语言统计（条）：
来源：http://www.xuanzx.com/163kajcrnwd.html

Python ......... 252
来源：http://www.sxryk.cn/163hiwcblkb.html

PHP ............ 252
来源：http://www.aibaodan.cn/163hpirxzzt.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163usgehkcl.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163cdwqvntn.html

Java ........... 212
来源：http://www.sxryk.cn/163bkqzxitc.html

Go ............. 212
来源：http://www.sxryk.cn/163eciowmid.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163cjxvyvxj.html

C# ............. 212
来源：http://www.xuanzx.com/163kjawikeh.html

C .............. 30
来源：http://www.sxryk.cn/163ggxhgucl.html

C++ ............ 30
来源：http://www.sxryk.cn/163hqrxhcow.html

SQL ............ 90
来源：http://www.aibaodan.cn/163khyebrdc.html

Bash ........... 80
来源：http://www.xuanzx.com/163lcwfbsbk.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ehcuycos.html

Swift .......... 15
来源：http://www.sxryk.cn/163oxypxhes.html

Lua ............ 10
来源：http://www.sxryk.cn/163eowccatw.html

Perl ........... 10
来源：http://www.xuanzx.com/163zazrreht.html

Scala .......... 10
来源：http://www.aibaodan.cn/163midicmmq.html

------------------------------------
来源：http://www.sxryk.cn/163rdsrxbzs.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163dgbecvvg.html

按章节统计：
来源：http://www.xuanzx.com/163zxsecbmo.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163xqavwgbs.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wlqdaqzt.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163kjpgunet.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163gotkdlmj.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163jkcofbmd.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163grihclcl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163dhoknvxc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163lxlwsbcd.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zpblyulz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163sfgdrvnb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qiqhejkq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hfhkyohk.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xvdjjcvi.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163mzgftved.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163eqqrwjyu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163svgxdbyr.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163wzymrjvn.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163hlwtdhse.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163klzzwxmy.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163qdwzpzmw.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163dwbvzatp.html

------------------------------------
来源：http://www.xuanzx.com/163cpfqsolz.html

合计                                  2106 条
来源：http://www.xuanzx.com/163cwihzbdx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lqiufvyw.html

使用提醒
来源：http://www.aibaodan.cn/163cvujqwtm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163guuoawhk.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ushmxdlh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163rjiiasiv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ilcyunws.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163fpjuofzd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163mwrklswm.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163cjzmisvx.html

================================================================================
来源：http://www.aibaodan.cn/163qernyqpw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163hpncobzx.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163xjchilmj.html

================================================================================
来源：http://www.sxryk.cn/163kweurygo.html

【收录内容】
来源：http://www.sxryk.cn/163kixzrfqy.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163mlizpvfe.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163gmgoxfbj.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163zywxdyqj.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163jljmagzd.html

【使用说明】
来源：http://www.aibaodan.cn/163hmjjcrvg.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163lpioubsr.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163hjaeiqou.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163kxrarqzb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163oqpgvlqb.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163abyhugyu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163bbprlltu.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163joidnszo.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ziqemqki.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163yllfxruj.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163rymibvxl.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163svmacqsl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163gumxxppv.html

【文件统计】
来源：http://www.sxryk.cn/163jvdipysf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163ebjstbwm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gbxvudun.html

目  录
来源：http://www.xuanzx.com/163rbnmgyyt.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163uuwgbljx.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163oqkgmhdx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163hzeayvyq.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163wjnjvhiv.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ivteeieh.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163spyligwr.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163tskmlvco.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hnqrdjhd.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163vxmsrupb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qagyhwur.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ydniasgn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uvzadxvo.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fxmmmqpi.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vljdrcgm.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163hjivslad.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163vtljbysr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163djskzrzz.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163mnatrqpx.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163jxxxjxre.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163mzcpedlm.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163glpsovtw.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163hkexzoce.html

================================================================================
来源：http://www.xuanzx.com/163wdswhrum.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163dctpkjgv.html

================================================================================
来源：http://www.aibaodan.cn/163xlmugjdo.html

[A01] Hello World
来源：http://www.xuanzx.com/163pkyifjxr.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163jlawxpzz.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163nqmorzvp.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163eycokljd.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163owaxstfx.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163rewyjspg.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163dbpxmfst.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163noaidjex.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163ysljzxqm.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163ldkrzhpb.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163htoathwy.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163pqiiqprl.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163mdcuxizt.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163ohbztbfu.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ttbhckfd.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163ukoyelia.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163mhqaqcsw.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163tqqedyxu.html

[A03] 常量定义
来源：http://www.sxryk.cn/163ouezdydr.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163snvvrjth.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163shwgmedk.html


<!-- 参考信息 -->