外链999!wailian999！

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163abggdfgb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163kfxjilak.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163gnmjmecw.html

UserId = int
来源：http://www.xuanzx.com/163dkyywbhu.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163mmlnqsvq.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163hegqpyiq.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ivrbzxbs.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163sgapugfs.html

[U31] Py：单测
来源：http://www.sxryk.cn/163wognymen.html

python -m pytest -q
来源：http://www.aibaodan.cn/163qvkxecth.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163enrrigem.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163rkmzuvcz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163wqvukccy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163gdrwkndi.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163rephthgi.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163argodmys.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163lsbxuwng.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163rzltjuju.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163lrbbvqtk.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163yvqmvrje.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163npshpqck.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163trudkqbp.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ddtepdia.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163sjgiemwl.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163regygoxu.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163gwhqexmt.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163jpqriiyd.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mwwxyhcr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163nkitbqmn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163inzyjxzm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163qmbamykl.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rboptgzo.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163scsyndgy.html

namespace App\Http;
来源：http://www.xuanzx.com/163tnpezimj.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163fijwipsp.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163hqzqokxb.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163apbywhpu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pskadwyl.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163pholqeft.html

?string $name = null
来源：http://www.xuanzx.com/163baekmcbg.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163yayoqinx.html

int|string $id
来源：http://www.xuanzx.com/163adjszdhe.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163sjcluolx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163vimxesmh.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163hdalexvl.html

public readonly string $name
来源：http://www.aibaodan.cn/163zhbjocsn.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163aqbmgelp.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163nwynjdku.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163lhlsrhoa.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ioalivzp.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163szcfryua.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163hqmepemh.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163bmhxdopx.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163avjgcihi.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163reshdali.html

$obj?->method()
来源：http://www.xuanzx.com/163jkvrpwty.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163aisboewh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163npvnlbrh.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163hkttderx.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sxubrngi.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163wqvwzorn.html

"值: {$a}"
来源：http://www.sxryk.cn/163zmqqaztg.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163wtpnsdto.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163dpzkyntx.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163txmgieul.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163oizieyxc.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ovtlopnr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163kwgtnmlm.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163yizoydyf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163eyrrnsmd.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163vtbmhkiy.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163hanylmmu.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163fyxrzzou.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163xkxzpfnj.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163zgckeemw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163zxhbjavp.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163grgfpcpi.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163gztaikfr.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163rbybupxu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163nzhcafvf.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163wwxujvjh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163qpsssgup.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ewilzdgw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163xvixmxnu.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163blbuirrz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ojszpuha.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163nuqoxdkt.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163kvlgtkmx.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163afpvrnmj.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163vnvekudg.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163jwdftekn.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163gusfazce.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163zwpfpvxn.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163jfnjyfrn.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163rohnjufq.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163nwinwnku.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163vfucolzp.html

composer require psr/container
来源：http://www.xuanzx.com/163tudgthwh.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163dbzchhoe.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163aaydyxuq.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ayolsack.html

composer require twig/twig
来源：http://www.aibaodan.cn/163dqlyamyj.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163rpgeozoo.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163wggyaajq.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163gyehuyhj.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163efeasbzp.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163kmoiglub.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ezjmxupa.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163rvcqereu.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163cduuqdja.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163fksyagja.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163smvcuubl.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163swqanxat.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163hjciucdj.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ripvkkva.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ylrhcmao.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163hfksovha.html

a?.b?.c
来源：http://www.xuanzx.com/163hxehywyi.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163iweytemh.html

a ?? b
来源：http://www.aibaodan.cn/163yiotmbrk.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ngjnquog.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163zgpqpggr.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163zwurmqkb.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163rrciogqz.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163uuqoacli.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163eczoeksf.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163jjdvcruh.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xrwqzmrx.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163pnnghssw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163xgvzhlzh.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163tihrhhfo.html

structuredClone(obj)
来源：http://www.sxryk.cn/163yzausser.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163skdwhxbg.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163uapipuqt.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163unlfiapz.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163rpchbhvp.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163mthjrkvj.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163awwzbcvw.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163cljlwdib.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163iuatxlhg.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163nuhxhvfr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lpwxzomy.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163kscbivjg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163daclxadl.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163espsorjd.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163vvrousue.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163evtvgrzw.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163hcmbzszh.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163xpavusds.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163fpqjojhn.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163yopqqgbk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163pycbjkeb.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163irlcdeob.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163qnasvnyc.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163ywoymahi.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mffhbsuq.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ctwjwlif.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163wutgocgt.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163frbstgpk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163hsmwotmc.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163piesxqkg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163gajmnltx.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163lpoqroqa.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163iaqltpkw.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163gwlligwk.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163eetruqja.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163qhnlkmid.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ynmjjidz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ltsicpjs.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163umlzgepc.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163smxbvcjq.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163icsutayy.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163cnviuicq.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rcqvyzai.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163wxvdmxdn.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kkgdiptb.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163sahhmycs.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163lupycqrr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163podwrbpy.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163edeauwru.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163kzsaihxy.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163howocyfp.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163omuzfrfo.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163fksewllq.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163nkmeaynz.html

npx vite build
来源：http://www.xuanzx.com/163kqglqcjh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163wzamkbpe.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163vsgjqwty.html

================================================================================
来源：http://www.sxryk.cn/163jzmjcmdy.html

统计汇总
来源：http://www.aibaodan.cn/163fpgstxju.html

================================================================================
来源：http://www.aibaodan.cn/163azyswivv.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ncxzshok.html

Python ......... 252
来源：http://www.aibaodan.cn/163zwflbwed.html

PHP ............ 252
来源：http://www.aibaodan.cn/163xdnopwvz.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163geycdmmn.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163pqakfqdk.html

Java ........... 212
来源：http://www.xuanzx.com/163zpqgaqbm.html

Go ............. 212
来源：http://www.xuanzx.com/163uftkmkpk.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163rexnjica.html

C# ............. 212
来源：http://www.aibaodan.cn/163abcvlnyu.html

C .............. 30
来源：http://www.aibaodan.cn/163fikhctyc.html

C++ ............ 30
来源：http://www.sxryk.cn/163cvbuefer.html

SQL ............ 90
来源：http://www.xuanzx.com/163zjdfcaha.html

Bash ........... 80
来源：http://www.sxryk.cn/163irgblirm.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163mbzyqfvi.html

Swift .......... 15
来源：http://www.xuanzx.com/163nksqbaxq.html

Lua ............ 10
来源：http://www.aibaodan.cn/163hclknmya.html

Perl ........... 10
来源：http://www.aibaodan.cn/163jyjsmvwp.html

Scala .......... 10
来源：http://www.sxryk.cn/163vvbsemoa.html

------------------------------------
来源：http://www.xuanzx.com/163uqhsvrla.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163niyqghne.html

按章节统计：
来源：http://www.sxryk.cn/163ngwqombh.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163uudjaixg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nqwrxvpm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ekjpwiet.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xkbqzyuj.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163fqdsgfsk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163sbtmldys.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zurhfzxe.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163baexyajn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163euasynxm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163etbedzwe.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tbnfzmgn.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ozjjlfqm.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yqgzvozz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163dgzuprot.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ijuawlex.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fltbnzut.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163uybrnbim.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ynmnpelh.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ppvsspqo.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163facnrwjk.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163mhlgqdmv.html

------------------------------------
来源：http://www.xuanzx.com/163nyvnlyuq.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ckmnsfgl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ymdmnfqb.html

使用提醒
来源：http://www.sxryk.cn/163rkpoiite.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mzayvjnz.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163iubqiyvu.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163bnxrxpqx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163bnzpphum.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163wnfpfbax.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163roeddujj.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ynogvgpj.html

================================================================================
来源：http://www.sxryk.cn/163zpaaxnzm.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163aopxdyas.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163aavtdpwo.html

================================================================================
来源：http://www.xuanzx.com/163ctqgnjtz.html

【收录内容】
来源：http://www.sxryk.cn/163ujipgacn.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163bbywssmn.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163oenfycxz.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163uklvcpja.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ztvhdtot.html

【使用说明】
来源：http://www.aibaodan.cn/163bqkraunc.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163nodirixp.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163vxswbpzo.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163gmkzlpci.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163nifhesor.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163rqrujftw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ayogxyey.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163cxtmmusi.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163thmgafah.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163zkopabfg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163yvkonbuy.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ufdvlsyj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163pjydkqln.html

【文件统计】
来源：http://www.aibaodan.cn/163wzgserbb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163mlztgoyo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hfxbblyu.html

目  录
来源：http://www.aibaodan.cn/163tkjyzeob.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vgusystw.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163frdystry.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163htcjrjfb.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fywyazwj.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163fnscogks.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163jfarjtnv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163cebabyoa.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qxpyzftt.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163sejmthye.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ufgottvm.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163fbjwdnrj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hrqoayyg.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163iyaedznl.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163azfeqckf.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163axslxtup.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163zmogbfwl.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tpfiqaai.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ebakdvkz.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163tyntymoj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163rmgnhuuo.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163eiaqwork.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jduusnxn.html

================================================================================
来源：http://www.sxryk.cn/163wyfemlnp.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163bytujfwh.html

================================================================================
来源：http://www.xuanzx.com/163svaoazcw.html

[A01] Hello World
来源：http://www.aibaodan.cn/163jmqrvafo.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163yivtnsuy.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163bsrmnbny.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163nteeqjtx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163xkngjvro.html


<!-- 参考信息 -->