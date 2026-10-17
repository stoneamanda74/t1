外链999!wailian999！

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163aexxbmlr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163qewypjdn.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163hsdtwxlc.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163dterbaqd.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163kkdcxutn.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163xqdcpnfb.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163pztoyike.html

list(zip(*m))
来源：http://www.xuanzx.com/163fgfoczdy.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163biuflgpt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163wzcdizig.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ccwiwkvp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163yfprfomk.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163zzdmovrr.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163sqxkupde.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163xacrjxke.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ydiuajiu.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163bpiwbbtn.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163whvuxmpz.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163mkweelgv.html

UserId = int
来源：http://www.xuanzx.com/163nehguzgl.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163nosmmjqr.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163sxabcsbu.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ifxecptv.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ktddrfwh.html

[U31] Py：单测
来源：http://www.sxryk.cn/163chctlqkl.html

python -m pytest -q
来源：http://www.xuanzx.com/163futoogsl.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ozgqjaxd.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163iphogfqa.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163lcowemlo.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163bqqysrfk.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163rmkpmhxb.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163uhmocurd.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163xcnzaenj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163wbdiuyxt.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163kmcxkemt.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163lzijymiu.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163qtijquzg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163vqncnnaq.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ofajlokr.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163tsewmogm.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163qsmykhsx.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163tvbvwise.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163fqjtjlfs.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jtapxsyb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163egmqwrcj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163tskguxsi.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163jwcxbzyy.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163xwtvjydw.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163xkeognvp.html

namespace App\Http;
来源：http://www.xuanzx.com/163ramjvksl.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163nkohqxza.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163qdndwgdt.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163qzroufsd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ofrisqnt.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163jfnymqzj.html

?string $name = null
来源：http://www.sxryk.cn/163zzldfgbl.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163puectrfh.html

int|string $id
来源：http://www.xuanzx.com/163zuklnxiv.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163uutsjygg.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163wojjujoo.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163burqxvkx.html

public readonly string $name
来源：http://www.xuanzx.com/163rkpbhrra.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163clxowdwx.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163waycoblk.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163kqllgzuo.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163jhbnqmwc.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163awemtsyg.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163qbaefcos.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163eshbzwsp.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ciidljpf.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163tzpxjjax.html

$obj?->method()
来源：http://www.aibaodan.cn/163gyrqyugq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163flafciia.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163vynjwrbj.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ufbpxtvb.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zuqjxivt.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163tudejahv.html

"值: {$a}"
来源：http://www.xuanzx.com/163aayzfxaf.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163maznpgof.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163egtojfkh.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163nbzubnwc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cnadmkrc.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163xqoufwdr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163dvntzuwg.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ptwwfcsk.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163sfvbeoba.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163lexizpjj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163kwxkhbbd.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163tymtpgme.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163waqwcdjx.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163cayjkrop.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163cmvarzew.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163wbvovdiw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163qsbyqrqb.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163eqarpxsg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163vdjjwnae.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163azxqurky.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163pqccoxiz.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163wsqzbtct.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163pmgjkqay.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163xrphxumh.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163btkcdcbs.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163jvgpkiuz.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163vbqpnorp.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163klioqcwz.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163iskcldme.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163vbrshzcw.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163dokhomrj.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163mabjpivl.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163xgigbfgk.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163zloqygem.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163wbyzeheh.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163bzgbzrxp.html

composer require psr/container
来源：http://www.sxryk.cn/163nmlsodlk.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163vzsilyka.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163epzojkgv.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163wkffgvgq.html

composer require twig/twig
来源：http://www.aibaodan.cn/163hnvhefvb.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163dwcojybm.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163rraxhcyr.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163dqbqijmc.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163slhkojbx.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163cinnunbx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ucdkdpsy.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163iuxapyhx.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163eeiuykfs.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163zibzbrrj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163qzijneqh.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163pjfoqbgx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163phamrbop.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163kjxznaro.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163vkzrbzoy.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163lxwsxica.html

a?.b?.c
来源：http://www.aibaodan.cn/163yrvettxn.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163rgybokmf.html

a ?? b
来源：http://www.aibaodan.cn/163kjfmdyak.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163jlnpbcqk.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163deezcocq.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163wuujzytt.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163oerweoxi.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163qfoieofy.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163fgewyrxt.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163okfmtuis.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163iacrepla.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163inhhupos.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163uaaqddge.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163tkykutnr.html

structuredClone(obj)
来源：http://www.xuanzx.com/163lhaggvyj.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163szaptjym.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163gfnaargj.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163oyhsumab.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163aheroflm.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163qmghjcqv.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163hcxusdum.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163dknuhhcd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xspkssyt.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163rgyuhvhl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xhfwlrct.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163llowzmse.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163zfqcvhtx.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163zawfjygx.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163nptzteys.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163izsirghv.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163lghfqhxp.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163rwwqdydg.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ciwrhteq.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163pazegjxj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163lhqzudqr.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163gwpogiff.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163ailcthpj.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163rsvlkmib.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163otkqzyol.html

[U105] JS：节流
来源：http://www.sxryk.cn/163jmwouozw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163zoagxquc.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ljepnlml.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163xzvucanb.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163mkyjyknq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163bczznwiz.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163wqcypjbi.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163jogjrwdn.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163gmiuzpkl.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163bwosifvb.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163ptnqvhrx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ajlmjpdv.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163apzgpplg.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ctfwllyd.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163deykntdu.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163qrouopcy.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qxciphwb.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lcavydjn.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163icnnjoph.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163omllzpuw.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163pnnpuhtp.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163zobtgyaa.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163edmzrjyt.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163btazgqec.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163socdxurp.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163hnjpkanb.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163lmeozzih.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ueajvjhl.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163bkioqicq.html

npx vite build
来源：http://www.sxryk.cn/163wtjygosn.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163hnelbooj.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fzgpjonb.html

================================================================================
来源：http://www.xuanzx.com/163xzoloqkd.html

统计汇总
来源：http://www.sxryk.cn/163xmjftuhj.html

================================================================================
来源：http://www.xuanzx.com/163usmvavjk.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ejcgcnme.html

Python ......... 252
来源：http://www.aibaodan.cn/163uypcbwmk.html

PHP ............ 252
来源：http://www.xuanzx.com/163dwwlaszl.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163esxvwrpc.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163mgtsddur.html

Java ........... 212
来源：http://www.xuanzx.com/163cujmrjwu.html

Go ............. 212
来源：http://www.xuanzx.com/163difrzuzw.html

Ruby ........... 212
来源：http://www.xuanzx.com/163birmppjx.html

C# ............. 212
来源：http://www.aibaodan.cn/163fgyskmlz.html

C .............. 30
来源：http://www.sxryk.cn/163bqsjxjax.html

C++ ............ 30
来源：http://www.aibaodan.cn/163yfzkvunb.html

SQL ............ 90
来源：http://www.sxryk.cn/163smwkqqmk.html

Bash ........... 80
来源：http://www.xuanzx.com/163mqxlltbt.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163vebaoffm.html

Swift .......... 15
来源：http://www.aibaodan.cn/163lgfdzzxp.html

Lua ............ 10
来源：http://www.xuanzx.com/163pzxvgrij.html

Perl ........... 10
来源：http://www.xuanzx.com/163qgthlaic.html

Scala .......... 10
来源：http://www.xuanzx.com/163pcgmrfyx.html

------------------------------------
来源：http://www.aibaodan.cn/163xizhefzt.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163vgifrzxj.html

按章节统计：
来源：http://www.xuanzx.com/163xdyibgkj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pitrbzcw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qsiuwhmx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163qohzzszd.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163dodmtfdn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163mbdoygpq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163uceyhrfv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163cnupxxez.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163neikpvnt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163anxjkdwx.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163torhwyms.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wfnhixgo.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ypplpiym.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bckaonul.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zzdtsolk.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163jtwlbywy.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163loajecxg.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163wcqihlxd.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163oawvatdi.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163vkfmlzwh.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163ccnjqizs.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163ujuhgfre.html

------------------------------------
来源：http://www.sxryk.cn/163nmyypmaq.html

合计                                  2106 条
来源：http://www.sxryk.cn/163aljjuiaz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163btygmbzz.html

使用提醒
来源：http://www.xuanzx.com/163tvogzheo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163uosjjmzf.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163zuqluigd.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163jvkmpozl.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163zaofokgs.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163jffeynyy.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163nozydrgp.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163rmlmgiot.html

================================================================================
来源：http://www.xuanzx.com/163apivbgev.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163hunktnix.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163sbpiexiw.html

================================================================================
来源：http://www.sxryk.cn/163hrzytslm.html

【收录内容】
来源：http://www.aibaodan.cn/163lspzqgnz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163xoyioejr.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163icwbeqwk.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163iumdzvte.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163whicpojo.html

【使用说明】
来源：http://www.sxryk.cn/163fwrqggga.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ggghgurd.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163dwotjmdl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163wddwgwog.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163yvccbzlg.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163mxkeobpv.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163wfksnelu.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163fckhpcsc.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ckfpzuiz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163nyjtdffb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163vxxozwth.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163czrywdeu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163xmlqgips.html

【文件统计】
来源：http://www.xuanzx.com/163hgmpffyz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163fcjxepcz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bcuouqst.html

目  录
来源：http://www.sxryk.cn/163kiwegbah.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hmkgbanp.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163csbedeyh.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163etgodrfu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163skxwvtzu.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163myxtriej.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163vbzkoqgd.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163fxgoqnlq.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xkfkgujc.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ftpapnyv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ghbmguoi.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163hhngfxkk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ikqqwpda.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163emzrtkkg.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jxonoepu.html


<!-- 参考信息 -->