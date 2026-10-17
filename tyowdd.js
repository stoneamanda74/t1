外链999!wailian999！

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ufvgksfj.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163unhlfnkb.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163xpbhuvgg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163kqopghsv.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163psebtufh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ctsqozdj.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163uitrialk.html

UserId = int
来源：http://www.sxryk.cn/163ablghycq.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163zbowkdxp.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163irfedjgb.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163arghgxln.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163tyaekpat.html

[U31] Py：单测
来源：http://www.sxryk.cn/163zehszcry.html

python -m pytest -q
来源：http://www.aibaodan.cn/163sxsbyarq.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163yhtqrbyf.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163kuyabojp.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163cbjfygff.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163wpwtgryl.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163iqgqldbl.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163gxdpqwvn.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163xicgqukz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163athgrqhw.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ijzwolmc.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163yisvlyfa.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163lanzrlug.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163xxzkjmdv.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ftplzdxb.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163iriowmad.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163mnqjwbxa.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163wmageehw.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163tohfnxvn.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kokmuhwf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163nltwmzoi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163yaxyqutb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163lzjdskzf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163vvhyubbd.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163dwgffnam.html

namespace App\Http;
来源：http://www.xuanzx.com/163jwgilnot.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163gadnoykh.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163zznatgab.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163tamubdqx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qmnpvmya.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163blhtodwu.html

?string $name = null
来源：http://www.sxryk.cn/163klnlyffx.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163vrsesnec.html

int|string $id
来源：http://www.sxryk.cn/163oyaawavw.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163vrqitvpt.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163txlbhoyc.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163rouqsvve.html

public readonly string $name
来源：http://www.xuanzx.com/163zvqmypqh.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163tyupvnxk.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163rbbohbmr.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ehxmbubd.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163uutbnmft.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163nvmxmknm.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163wjaeyxph.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163lyjblohd.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163eyjuwqrj.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163dqfshlwm.html

$obj?->method()
来源：http://www.aibaodan.cn/163accmuqwk.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163kxxdaiel.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163rmkxeloc.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ifobambq.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tscfufbd.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163azqxxryj.html

"值: {$a}"
来源：http://www.xuanzx.com/163byfxzdmg.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163edxkoiee.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163mxjokxlu.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163ofwnrpqz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163womdpkcu.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ifqymqys.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ifrfzhvh.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163gjhdrsxd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gcffgtpy.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163zbnlypzc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163pbplprgr.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ubdwmgqv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163znflyctg.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163mphihixb.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163hxujubem.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163zspaxldu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163blrtitng.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163aqyxbsrv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163tarxwwgz.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163zpcluewa.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163xnhdjbqg.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163sbqyjvwr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163rankcjlh.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163utpuriri.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163okyjndnn.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ogglxqpn.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163quwqkvpu.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163duxsmqrq.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163ovnbfoqv.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163dcgqjzvi.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163wjrwjeie.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163obaxghdw.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163abxusbdf.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163pbzbpfin.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163qajizkml.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163bpffzuzd.html

composer require psr/container
来源：http://www.sxryk.cn/163wpuukcur.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163cadxvdld.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ihvofiow.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163tmsovvtr.html

composer require twig/twig
来源：http://www.xuanzx.com/163afszuloh.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163cykuogiq.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ovrrqjpx.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163unkwvvhn.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163dgbuiycv.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163vmtrvade.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163oimrmxrd.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163radimnci.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163gnbkgwhv.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163kixdogxo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163fubtjlmi.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ghglgjsw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163bazhcmui.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163drhwnphs.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163cbonrkkq.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163mzumpcev.html

a?.b?.c
来源：http://www.sxryk.cn/163lmpqbums.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163vscrneez.html

a ?? b
来源：http://www.aibaodan.cn/163ekopuxla.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163xpcpcqyx.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163bhjgpxxo.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163paxtdvuq.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163zgindvua.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163zxbwalje.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163mtselrge.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163wbkbfmoi.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dzkpnsif.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163brtsjgnt.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163okqyillh.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163lfxmmecq.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163cnqyonza.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163lfwwlnok.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163opkcobdh.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163fjemkmsv.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163lezwfnuf.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163lxekhtvv.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163bhsanfox.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163qqzpantq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wjwaqpvl.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163acuzsshw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dhmiduwk.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163vsjqwcfu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163diyeqgrs.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163idmrommx.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ulgzemau.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163kzywznvx.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163lioduzya.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163tixsgswl.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163jogktvqm.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163pyqgshhv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ljhrzlrq.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163myutirtt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163petuzmng.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163kxpxrvbi.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163buchshtu.html

[U105] JS：节流
来源：http://www.xuanzx.com/163zksnoxpw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163vkmkmdri.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163uawpztrd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163hzptjjko.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163edbdmmlk.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163xdglskax.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163mlqzzarx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163wlnobeif.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163zlmzdyiy.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ledpzjmx.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163doekflko.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163hhpzxhco.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163jugpqdfu.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163bfqejriw.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ckxqsqzv.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163cfcnkqez.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163mygezekx.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163saipfrlv.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163kwuofuhm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163duevnuiu.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163bgrprguc.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163dyxzfrth.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163qlsaspqa.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163rjsfnspv.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163waaflfcp.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163mbmquhtz.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163yibrxjue.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ybcpdyrt.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163tichxjhq.html

npx vite build
来源：http://www.aibaodan.cn/163hovatcdc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163pyplekjq.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ttbjqaia.html

================================================================================
来源：http://www.sxryk.cn/163jbzvpfsn.html

统计汇总
来源：http://www.xuanzx.com/163mmmsfpff.html

================================================================================
来源：http://www.aibaodan.cn/163xihrmuxe.html

按语言统计（条）：
来源：http://www.sxryk.cn/163typajzoy.html

Python ......... 252
来源：http://www.sxryk.cn/163ohvlagpx.html

PHP ............ 252
来源：http://www.sxryk.cn/163awnhsuxk.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163kmcvggzv.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163iverolye.html

Java ........... 212
来源：http://www.xuanzx.com/163btuwgqog.html

Go ............. 212
来源：http://www.aibaodan.cn/163xfinvire.html

Ruby ........... 212
来源：http://www.sxryk.cn/163poaxrunh.html

C# ............. 212
来源：http://www.sxryk.cn/163uctdymvy.html

C .............. 30
来源：http://www.xuanzx.com/163orprensi.html

C++ ............ 30
来源：http://www.xuanzx.com/163gfkuqhlq.html

SQL ............ 90
来源：http://www.xuanzx.com/163kdqkhxqd.html

Bash ........... 80
来源：http://www.sxryk.cn/163nldfsyij.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163bwhzotlr.html

Swift .......... 15
来源：http://www.aibaodan.cn/163rsrxlpdh.html

Lua ............ 10
来源：http://www.sxryk.cn/163zwqgzwil.html

Perl ........... 10
来源：http://www.xuanzx.com/163ylfjwstj.html

Scala .......... 10
来源：http://www.aibaodan.cn/163rcafeyjm.html

------------------------------------
来源：http://www.xuanzx.com/163ehdmxpvb.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163nmrtqvto.html

按章节统计：
来源：http://www.aibaodan.cn/163ttacqbcf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163mrsgujzu.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ytiagemb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163zmcxnenq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qyuzafim.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163ouoviajw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163yljgghky.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jpgfwgiw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163euevmjma.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163shxtdkvn.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163lfezrwlp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163aemkrbin.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ovecmfzs.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ujldjgfm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163uyjmldqh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163pssslydx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163iiljhral.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163roxlqsmm.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163xirkghvz.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163dcmupbhv.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163xhyevihm.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163raawnsgm.html

------------------------------------
来源：http://www.aibaodan.cn/163gpakkvvx.html

合计                                  2106 条
来源：http://www.xuanzx.com/163benoyijz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mhwluzwk.html

使用提醒
来源：http://www.sxryk.cn/163czjhmnam.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163oviphvxz.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163jqjdelqy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163sbbbcbyv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163cxlnaahc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163fiuhsuck.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163doyslxsx.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163yhhoyzot.html

================================================================================
来源：http://www.xuanzx.com/163gxoiuupe.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ymtfqzvg.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163rhmhppzb.html

================================================================================
来源：http://www.aibaodan.cn/163oribhtuk.html

【收录内容】
来源：http://www.aibaodan.cn/163xeudhhef.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163emeephxp.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163upvbnelb.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163wytqkeww.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163wfwfuxbg.html

【使用说明】
来源：http://www.sxryk.cn/163ihwbvdsp.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163aglqazcw.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163yrqvwajx.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163xhyizejr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163oqgixzes.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163srgpqbfn.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163fcbjjcoz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163wizgqmel.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ctxsgnxu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163bprwfwbo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163sfnbdhnu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163zobgrjfb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163awixckjm.html

【文件统计】
来源：http://www.aibaodan.cn/163seujlfcj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163sdmsxmwp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ikdytqvl.html

目  录
来源：http://www.aibaodan.cn/163kpcwkhre.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fptuyzvc.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163weuiesll.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gzjviufc.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163cdznoxvu.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ksqtzgty.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163iegfymkg.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163sablrbhn.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rkjjyquc.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163uurocvgg.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163txwaaqzl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163uemxggum.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nduohdvg.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xzxopusx.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163pxaflyrz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163wggzdebx.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163znlbzkgt.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ibukhxau.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163cutwefvt.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163wqmcxakt.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163wdjwfifw.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ztusfxgl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163pzmwgqxb.html

================================================================================
来源：http://www.aibaodan.cn/163icaexlej.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163jslvwavx.html

================================================================================
来源：http://www.aibaodan.cn/163paobmypi.html

[A01] Hello World
来源：http://www.aibaodan.cn/163wugazcxj.html


<!-- 参考信息 -->