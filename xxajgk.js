外链999!wailian999！

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163hirhgfde.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163kmxiuwim.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163bsshtcua.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163xshzkibp.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163szbqhdmp.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163faqbzzpj.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163exsrwhcb.html

UserId = int
来源：http://www.aibaodan.cn/163drzrgpav.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163hatopalq.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163gjoseftz.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163cpjsppep.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163eseivjss.html

[U31] Py：单测
来源：http://www.xuanzx.com/163igqsamtu.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ruflinqi.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163mhtzepwz.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163mjkdqyvj.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163okydaujc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163nddqmhhn.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ejegcwhi.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163nkfxubyj.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163tbycusnt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163omufjpxo.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163cfuabnwx.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163wcgzwfyj.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163krsmgrel.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163tqosfzra.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163vqrtweuw.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ckwvctzs.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163rztbaxmw.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163bsblgdpp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ofhfwwid.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ewixsgzr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ttozbmcc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163knxutbmh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163zvomwvzq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163yxqabuim.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163hihtvmkw.html

namespace App\Http;
来源：http://www.xuanzx.com/163vifxshmm.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163dgkhcocz.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163vtxbhniq.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ftxtfvpw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163djddhxrh.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163qgvfmzoe.html

?string $name = null
来源：http://www.sxryk.cn/163bjtqbprt.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163gnncorwe.html

int|string $id
来源：http://www.sxryk.cn/163sshzoajd.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163vtfhmjmh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163qfnrmaiw.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163okhdoxve.html

public readonly string $name
来源：http://www.xuanzx.com/163qguyjrmu.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163bfhmwiqn.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ufndetng.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ozjisiwd.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163vdvlopma.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163twdadpfw.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163cinmbxut.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ecdchyxl.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163fanmlzul.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163jqmdrblc.html

$obj?->method()
来源：http://www.sxryk.cn/163ihyzoxjc.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163oltqidky.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163xctigmbf.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163kbqlqohw.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ijhwwytj.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163fegsbwgb.html

"值: {$a}"
来源：http://www.sxryk.cn/163nmcqbjrj.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163nqgwplwx.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163clavxikw.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163grrfjbtn.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xbcbqdkh.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163wyuorkbm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163cpmomjsc.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ztjpjssz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dgjmdnym.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163uvorzsef.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163xsoyrmbu.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163fqjxhcbs.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163yneevcmy.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ocbxxjuo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163jbhgnppk.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ygiaxmjl.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163zklfgwwe.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163xsuoppiz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163dqymrsqo.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163pgiffqhf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163kkcoimyo.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163dtjshnqn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163dkavjbdm.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163kofnglxv.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ahtpdvzq.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163ivytsfqi.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ybvnhrmj.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163dxumlaks.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163duiqlbsw.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163hnvmkmyz.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ekvfrccd.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163oryzwmah.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163iblwvhiu.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163gunnkdvg.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163jzezynam.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163kzwbvwdc.html

composer require psr/container
来源：http://www.aibaodan.cn/163dfnuzsim.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163qoqviywu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163uhfhuele.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163fidhmamv.html

composer require twig/twig
来源：http://www.aibaodan.cn/163drivhuuu.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163jjdzdqex.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163swpgouxm.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163bhpwdleu.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163wmmvxzsw.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163penewgbk.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ujebumlu.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163wtwupxfc.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163lsefjtkw.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163yccocdpa.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163dnhhtkgj.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163avabdbxz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163nugctipi.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163mgjheaxv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163swuelulp.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163cazlhdxr.html

a?.b?.c
来源：http://www.sxryk.cn/163fnddmoyc.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163diehgqut.html

a ?? b
来源：http://www.xuanzx.com/163xrqicddd.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163jyarzstc.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163twgemaya.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163qmtzqdkm.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163hlxdsmpx.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163weofnbzl.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ncmqqzdh.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ebrzfqgq.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163albynfkr.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163jpxohper.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ovybqinj.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163mhslcvta.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163nkybxtia.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163tvnxwyun.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163nzeadlrg.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163oiwhfske.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163cuhyexpq.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163rohhrrok.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163augotvez.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163evetjrak.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ntqucbbt.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163foaekhrx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zwkzkyxk.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163fozahbgr.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163orgodsiy.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163elcrcvif.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ffjewmte.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163audgyqbs.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ddxsgrni.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163rvtzvsqp.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163fexypbhn.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163syddghgs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163cvhhftpl.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163kqlvnpsh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163bzcicyvu.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163ubcuxblj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163grwgkqdj.html

[U105] JS：节流
来源：http://www.xuanzx.com/163hmsmbiza.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163fzskebeh.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163uydtjydo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163syryknme.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163fsskoska.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163esouruvp.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163gnnwgmaw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163ihyokwei.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163oecfnkqf.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163wqnkufqe.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163tujzsrrr.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163kbrgqfyf.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163twtlfvgw.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163vdbdrsmo.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rcbhosic.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163qjqhjmnn.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163cjzpgcph.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cxtlgdnl.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163syiaqcyk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ehqeqrqv.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163mhfnlqgh.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163qlfiuoxu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163jnzxtqel.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ftacpojs.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163unfvhlus.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ltutigdy.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163dtfzdnnl.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163cotlfkgf.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163hwqsxyyw.html

npx vite build
来源：http://www.sxryk.cn/163ctogbmac.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163pkrwnkjb.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163vnxlpago.html

================================================================================
来源：http://www.aibaodan.cn/163klfnfyjq.html

统计汇总
来源：http://www.aibaodan.cn/163jkzqfljq.html

================================================================================
来源：http://www.sxryk.cn/163hcaniswn.html

按语言统计（条）：
来源：http://www.xuanzx.com/163oyiwgtqu.html

Python ......... 252
来源：http://www.aibaodan.cn/163xfohrcix.html

PHP ............ 252
来源：http://www.sxryk.cn/163kfragexv.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163hxdyzgbs.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163vjevnhev.html

Java ........... 212
来源：http://www.xuanzx.com/163fnbjtefp.html

Go ............. 212
来源：http://www.xuanzx.com/163qsivrdux.html

Ruby ........... 212
来源：http://www.sxryk.cn/163gsphcdxd.html

C# ............. 212
来源：http://www.aibaodan.cn/163xjjvfizg.html

C .............. 30
来源：http://www.aibaodan.cn/163csezwkuv.html

C++ ............ 30
来源：http://www.aibaodan.cn/163hzkxszee.html

SQL ............ 90
来源：http://www.xuanzx.com/163jvcqcpug.html

Bash ........... 80
来源：http://www.xuanzx.com/163cysxbkpc.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163nancsrcm.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ozzonbjr.html

Lua ............ 10
来源：http://www.sxryk.cn/163jtnxnjdj.html

Perl ........... 10
来源：http://www.sxryk.cn/163tvbiyvoy.html

Scala .......... 10
来源：http://www.xuanzx.com/163dstvyilx.html

------------------------------------
来源：http://www.sxryk.cn/163linbzxnj.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163fgyxtxmo.html

按章节统计：
来源：http://www.aibaodan.cn/163fvnkqauk.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ziirpztn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fhjzjgqf.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163pxzdsyno.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163qcjpqsbc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163odsnteik.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ukynffgf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bdoplrta.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163lkotmlci.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ayfnutqu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163vxljqylt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163okqxmrao.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ytcxxdwh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163oarjecwy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163golaymtp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163wswqxsfw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ueyxcgnb.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163wzloveik.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163adxetkku.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163crjcwpyp.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163rsxipkzl.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163ljjojkih.html

------------------------------------
来源：http://www.xuanzx.com/163dlbdzlqa.html

合计                                  2106 条
来源：http://www.sxryk.cn/163lefnidkr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gqvphwuo.html

使用提醒
来源：http://www.sxryk.cn/163iamjvgud.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kdbcykbk.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163yfhnsdue.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163wftijhiv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163owqddhcl.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163gjxngdee.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163jtlnfvkf.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163wovwurzd.html

================================================================================
来源：http://www.sxryk.cn/163jxxubimj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163tiliwguo.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163nvhclbko.html

================================================================================
来源：http://www.xuanzx.com/163jgjjlyra.html

【收录内容】
来源：http://www.aibaodan.cn/163yxnajjtj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163xwgzpojz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163jkemwems.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ndxhrzun.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163mjkrvtpy.html

【使用说明】
来源：http://www.aibaodan.cn/163wyyrkgxh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163tfrzikhz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163otfaowjq.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163fdslxptv.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163njssmnkt.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163kildjkok.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163vuccpyot.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163yxpusmey.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163yfvaaduz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163zdvsdlsx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163zlnwxmtq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ytpiwmbx.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163roqxahwy.html

【文件统计】
来源：http://www.xuanzx.com/163npxdrwco.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163jfkgvhwe.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163afketdim.html

目  录
来源：http://www.sxryk.cn/163bygkdufu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mxtnzcqj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163flztqsof.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163tvewbrad.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jzadnzeu.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163kxsnnemd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163vxehtiqh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163egwvcmjg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ausrgnye.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163poqlxoei.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wfliajil.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163fhustjpn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tkwgwyuo.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gorlfhwl.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ztpdbmox.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163zagqutuv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163xyfnkkiu.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rxhnycnj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163vksorywi.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163xflcmdbr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163kqwslyrr.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163syhgrles.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ryttitfr.html

================================================================================
来源：http://www.xuanzx.com/163clgkkaiz.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163xstlgghl.html

================================================================================
来源：http://www.sxryk.cn/163wktclmwo.html

[A01] Hello World
来源：http://www.aibaodan.cn/163ifivcprk.html


<!-- 参考信息 -->