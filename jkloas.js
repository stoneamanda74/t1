外链999!wailian999！

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ecjhgsdx.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163hfaemmmr.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163gmozqokq.html

list(zip(*m))
来源：http://www.sxryk.cn/163lsrhrlen.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163jgjufvbu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163fjkyorfe.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163zxdncrak.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163toyeekps.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163pchrvrph.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163kfgeuxvh.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163hunzcyao.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163dvvnybid.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163tygvnioo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163aesayfpx.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163panqzpin.html

UserId = int
来源：http://www.sxryk.cn/163hzjogwxp.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163piyvlkct.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163wuigzgll.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163msykhvwd.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163xeiyqshp.html

[U31] Py：单测
来源：http://www.xuanzx.com/163uusmcsjy.html

python -m pytest -q
来源：http://www.aibaodan.cn/163abqvetfy.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163kcejsojl.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163zhzgzcsq.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163gmrylshd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ggsyosfy.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163zmbefvqz.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163duvweczx.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163yjtqabqk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163ulvbusyx.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163cfwrunvz.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163cgdkerur.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163vpbhoqxg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163wunltwxe.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163aayepljl.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163gtmnseha.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163ruenybmh.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163sstsggpc.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163nnkzaypa.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qancgtfc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163scbrdonp.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163edalhibi.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163bwwuxjfa.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rqxakblx.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163ufyjrfnj.html

namespace App\Http;
来源：http://www.aibaodan.cn/163kpkszuey.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163vduvstzr.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163lsuldcvr.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163tttlosrd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ppkofeau.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163dxtcwopx.html

?string $name = null
来源：http://www.xuanzx.com/163uwtilgir.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163hzsbieuq.html

int|string $id
来源：http://www.xuanzx.com/163avskcich.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163smbvgbjq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ovwgrofi.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163qkwsnfyu.html

public readonly string $name
来源：http://www.xuanzx.com/163avimujmi.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163iqswkwin.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163xpyxdzsv.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ctgzbvgp.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163qojxcjsk.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163sebqzagm.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163lcwfmkuy.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163cdhucola.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163qvlzgaae.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163wjzyjxxm.html

$obj?->method()
来源：http://www.aibaodan.cn/163memjcpkl.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163cejhhchj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163bzddpzpo.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163czngaobt.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rbqobvbs.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163iwrfajzo.html

"值: {$a}"
来源：http://www.aibaodan.cn/163dkddtpsz.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163vgdrmlmp.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163cyjaxdwd.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163dzgwtnqw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ncrobwal.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xhiklnwb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163sbdakojf.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163tzeycuye.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163omqumiyg.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163yqjizhko.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ftvdozrz.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163mjwipkyg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163mmeewkcw.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163dagfcbim.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ccctarvh.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ticugund.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163gdvxswnu.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163hswhnyiz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163jdrrzfsh.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163hexjlcbg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163puzitgde.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163bxeqlqfg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163riscstmv.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163mtjjufnt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163hiaztbwi.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ploxghxc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163kwmpxrjl.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ejxkubil.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163aikcizkx.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163uiajsooq.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ehmvqkvp.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163ibyvlusj.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163psbkqeoc.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163tipsache.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163lfcrjmqf.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163xeireead.html

composer require psr/container
来源：http://www.sxryk.cn/163xdrrqbhu.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163tgidfhcg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163yyjsticu.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163bonidedi.html

composer require twig/twig
来源：http://www.xuanzx.com/163foipjhhe.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ofimrqtc.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163teblopsf.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163wcktccbx.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163vkwqvqhf.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163xpaccwcv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163sxakkadx.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163owldywri.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ozgnwlxr.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163xpnjmmmv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163jqolwnds.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163zzhbbifx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163pjmndhqa.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163xncfgnnm.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163agcfknzh.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163objudbca.html

a?.b?.c
来源：http://www.sxryk.cn/163yqxwadnh.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163tsoygktm.html

a ?? b
来源：http://www.sxryk.cn/163zcwglwcw.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163knkassfq.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163wuyijksx.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163flbgfmky.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163mazjcdxz.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163gxafhxqv.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163vcbaiyhp.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163snftjbiq.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rtaaqrcb.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163fpztbkcq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163fmliseza.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163qpngzloy.html

structuredClone(obj)
来源：http://www.xuanzx.com/163psbuklxp.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163padzcpnf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163zayrlgru.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163riuoisvf.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163gavyloiu.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163vktkdong.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ubpgyzsd.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163fnhbaaun.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163uqbhftqn.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163sstehgng.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163scgpliex.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163ryzpyppl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163tzknomtn.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163jucenrch.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163blopumby.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163timfgwtb.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163rjhkiqfj.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163pdqxrbbm.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163gmdrnjxs.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163rhctnyio.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163nxswmzqs.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163onpcelpl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163wjeplqvw.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163utxpbecz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lzgreiyn.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163mmzetofs.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163xnoitgry.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163jktgdrzd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163hhzbggrw.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163pyidmffx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163okaqkolf.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ctnfxsvc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163tjfodtrn.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163sfzlccyg.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163kajhltft.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163puzpxhmi.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163hqeespgh.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163geyrublm.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163gndbpyqp.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163kegladyi.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ojufbkty.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163idgrfisz.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163apwueidx.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163fidrgzyc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163nvorgkuh.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163xyggipkk.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163pqryxtuz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163wjcrrqew.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163hmtefscd.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163iwdjdzli.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163jrvqxurc.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163xndzxehv.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163bobnlsth.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163nwmzkjhp.html

npx vite build
来源：http://www.xuanzx.com/163zufismxh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163rcyqrtom.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163xtegylqc.html

================================================================================
来源：http://www.aibaodan.cn/163whrnttnt.html

统计汇总
来源：http://www.xuanzx.com/163ioknkjzq.html

================================================================================
来源：http://www.xuanzx.com/163odfnihyu.html

按语言统计（条）：
来源：http://www.sxryk.cn/163kjkqrlhl.html

Python ......... 252
来源：http://www.aibaodan.cn/163tbcjiuqs.html

PHP ............ 252
来源：http://www.sxryk.cn/163kkyfkhfy.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wteqgkdk.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163zjbhtyom.html

Java ........... 212
来源：http://www.aibaodan.cn/163rezdkwxv.html

Go ............. 212
来源：http://www.xuanzx.com/163ngapafxu.html

Ruby ........... 212
来源：http://www.xuanzx.com/163iukzxduw.html

C# ............. 212
来源：http://www.sxryk.cn/163jstlthbg.html

C .............. 30
来源：http://www.aibaodan.cn/163jzrtfcom.html

C++ ............ 30
来源：http://www.sxryk.cn/163rxejdwqg.html

SQL ............ 90
来源：http://www.xuanzx.com/163kycqbqdi.html

Bash ........... 80
来源：http://www.sxryk.cn/163mxdzjpwu.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163dnnqpasj.html

Swift .......... 15
来源：http://www.xuanzx.com/163vudaubxk.html

Lua ............ 10
来源：http://www.sxryk.cn/163aalsvekl.html

Perl ........... 10
来源：http://www.xuanzx.com/163rqybojun.html

Scala .......... 10
来源：http://www.sxryk.cn/163mcctytat.html

------------------------------------
来源：http://www.xuanzx.com/163aqntoonj.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163ajacodfi.html

按章节统计：
来源：http://www.xuanzx.com/163maijqiro.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163oehwcvwc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gekrwqwb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163zxjttnwz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ulkngwzi.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163lawszfsn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163edjkehum.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hlkmtnhv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ufvzfdsj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163abqqmzqa.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163eqperhdk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ntchppcj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yjhlcnak.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163welbsuwi.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163anbsbvhr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163lvavwijr.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163czmnzcvz.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163cwsdcwwg.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163nnfnvfqk.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163aclnosus.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163xgjmmsoc.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ugjpqgwt.html

------------------------------------
来源：http://www.xuanzx.com/163dzbjfkze.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163jtvrhctg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hhmbnvvd.html

使用提醒
来源：http://www.xuanzx.com/163ftrisxnr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163btoiqfsx.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163tlrvdcun.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163gxzcjjyi.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163iqplzljx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163fzzgaskr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163llpeaeab.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163wafexjdi.html

================================================================================
来源：http://www.xuanzx.com/163mtihuvzw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163tmjviico.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163fwhyhnhe.html

================================================================================
来源：http://www.xuanzx.com/163zuwrwvxy.html

【收录内容】
来源：http://www.sxryk.cn/163lxrywozk.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163vyohwagi.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163bymhxrkr.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ohoylaow.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163lqibaaql.html

【使用说明】
来源：http://www.aibaodan.cn/163ouwbvmqq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ejlsyvgp.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163tgbwbilz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163sabcpkrx.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163hgdubbcx.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163zdxwmadh.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163jvqluhly.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163tzrhofif.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163hpsbmgnj.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163yagpdfkl.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163czpveqhy.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163kepqruzt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ymxnhsvq.html

【文件统计】
来源：http://www.xuanzx.com/163tmbuhnib.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163zivviwgb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163axynuaeq.html

目  录
来源：http://www.xuanzx.com/163ylbpsqcm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fxeikabu.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163azxkkszv.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163kusvglxl.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163trplhiif.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ieifxiuy.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163xmtppreh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163wsyvuwhi.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163tfkuvpgz.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163nqzyiygj.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163iwoaqpnt.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163fdrbtadp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dgqlgqho.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zewgamqh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gdspdnnm.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163dposkwuc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163vsowqtdf.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163atbtzwor.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163nbiqquvk.html


<!-- 参考信息 -->