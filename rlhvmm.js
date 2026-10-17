外链999!wailian999！

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163mfyspxuc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163hhhxbbem.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163idtpcleq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163hqtfjieq.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163qvshybar.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163sjahczvb.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163myjrcycw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163jnrdlwig.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163sksfzjsh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ceqcdqpl.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163tskfjvpv.html

UserId = int
来源：http://www.xuanzx.com/163guoxcuwk.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163qrpvvwmo.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163tvtoenyv.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163mlwnbgcr.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163blfwtupf.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ivafxuvz.html

python -m pytest -q
来源：http://www.xuanzx.com/163qrnzepnx.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163jkkwncui.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163urbkauty.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163tvgnxjwe.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163pddaeimn.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163pfsmdvte.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163rluupsod.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163zyoyeucv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163iettnexn.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163vcgzsamr.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163gpntbaby.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163fphgqiui.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163gyjpclfk.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163dagbxttv.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163akjnjjcj.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163nnoqivkn.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163jfayyqrw.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163lveurolo.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163eaafuilw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ctlgtoje.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ytbgteoj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163bbdmrmwo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ftvbylrb.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163eswwkypt.html

namespace App\Http;
来源：http://www.sxryk.cn/163dmvhbrvw.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163kzxdmsfg.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163exntnrvu.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163hiniprhb.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gyzlirfa.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163utzqfthe.html

?string $name = null
来源：http://www.xuanzx.com/163zcxdgear.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163hwvoapkj.html

int|string $id
来源：http://www.sxryk.cn/163umbazjmm.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163znhacrhr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163pehlctrq.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163dwiqqbyw.html

public readonly string $name
来源：http://www.sxryk.cn/163orbtkxsf.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163tyjwrnxj.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163pyjxcqtl.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163hakxibxc.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163fxrzmyna.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163cerqmpdy.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ynrmxtmw.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163srzgllmq.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163lwgvgaeo.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163zywpbpym.html

$obj?->method()
来源：http://www.sxryk.cn/163goiggaul.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163qevvbuha.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163qkksfmtg.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163swzowkfw.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kmwaaxiy.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163xnyopwjf.html

"值: {$a}"
来源：http://www.aibaodan.cn/163fvfrmmgr.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163exdmwnvv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163itelzytw.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163kkgdnlfh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163brvhgrtt.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163oouwdrty.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163fzpghahs.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ieaztntg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pygbqacb.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ikhdlyln.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163maptdlww.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163mkasxibo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163najwfnoh.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163slochusc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163wwqxrbjc.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163kcspvddz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163urxlalta.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163eaaquwdp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163dqehhyfe.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163kxucmoaf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ldrhqdck.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163lnkcknse.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163aomjeskc.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163pdnqibnk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163cthxafjf.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163nbwivvuh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163hfrnvmyr.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163rehwxaln.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163eqwxllox.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163jgaaeaua.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163neizkysr.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163hukzmzwu.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ayvrmxxy.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163rwxoyass.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163mhyqbrrr.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163bxglraei.html

composer require psr/container
来源：http://www.xuanzx.com/163abmodbdy.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163uyivcpor.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163bcqidprl.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163uygiyflv.html

composer require twig/twig
来源：http://www.sxryk.cn/163kpjbohsb.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163gojademk.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163zbacmqoh.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163kjdulcel.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163rgiejaap.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163tynoemmg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163fepddbot.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163xeijzdwm.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163kokcjcva.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163wwjkdsaw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163wxdwnvho.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163hvntjtqt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163fgxfevuc.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ywcnuird.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163mkilhzjm.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163bygzzgzf.html

a?.b?.c
来源：http://www.sxryk.cn/163viwxjzwn.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163mucdzhcf.html

a ?? b
来源：http://www.aibaodan.cn/163luyzpaft.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ocufoyrr.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163kdhkjwrw.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163inczaltn.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163spxzmvpi.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163gasphxrh.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163pfacgrbe.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163bmbemvxc.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xvlpzxun.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163bwpgvqko.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163ckxkplfw.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163gdixhajj.html

structuredClone(obj)
来源：http://www.xuanzx.com/163civcfytf.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163tbkbyfjv.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163cvicgrhk.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163whcwjogo.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163hunjfwyg.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ilclqrrg.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ipcwmbrh.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ddexsxte.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zsxwpggz.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163tjbnaefl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lchbaizt.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163gxjiuwyj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163nmuwyboq.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163pudfraic.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163rdciegii.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163lnfywtvj.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163cmamxgsr.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163kilsuesj.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163amvzxmls.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163zqpaaszq.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163mqjhxigd.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163jyuermjy.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163hkctzdgu.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163fnkmubsh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ikdsxujr.html

[U105] JS：节流
来源：http://www.sxryk.cn/163txzfxpla.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163juwytxlc.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163hrbxltyx.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163qfsoypjk.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ukrdgtyx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ajgdamml.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163mieunweg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163vhpomhrl.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163szunkegz.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ewkmgmlq.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163iqhpzcyx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ldtmaawj.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163uwzhomki.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163dombdwje.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ehyrzvfd.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163yeudwwhi.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163meydmwwu.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163izjdpmer.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163azlrdwxv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xhaxwqfr.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163tmpjukor.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163xweebfgs.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ojgidaea.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163lupabueh.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163dalebwci.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163iqwgyblt.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163povwbjhb.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163djbvfogs.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163fkzyiuni.html

npx vite build
来源：http://www.sxryk.cn/163dgfgfgjc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163doplxfvp.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ioynormu.html

================================================================================
来源：http://www.xuanzx.com/163xnifhcpk.html

统计汇总
来源：http://www.xuanzx.com/163chhvwbqd.html

================================================================================
来源：http://www.xuanzx.com/163dtegythj.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ewytjmsj.html

Python ......... 252
来源：http://www.xuanzx.com/163jxvechoq.html

PHP ............ 252
来源：http://www.xuanzx.com/163pntbyjdz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163zikeaiuk.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163dcmasbpu.html

Java ........... 212
来源：http://www.aibaodan.cn/163bhxdnxes.html

Go ............. 212
来源：http://www.aibaodan.cn/163ocsihesr.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163jlxvgroj.html

C# ............. 212
来源：http://www.xuanzx.com/163gasqbxdd.html

C .............. 30
来源：http://www.sxryk.cn/163hqmreito.html

C++ ............ 30
来源：http://www.aibaodan.cn/163tsnxxkuc.html

SQL ............ 90
来源：http://www.xuanzx.com/163chnsymtp.html

Bash ........... 80
来源：http://www.aibaodan.cn/163dcjscmeh.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163roudgnfy.html

Swift .......... 15
来源：http://www.sxryk.cn/163wqvdlxhg.html

Lua ............ 10
来源：http://www.sxryk.cn/163zcmaktpk.html

Perl ........... 10
来源：http://www.aibaodan.cn/163oxprfzsc.html

Scala .......... 10
来源：http://www.sxryk.cn/163zxyxtumy.html

------------------------------------
来源：http://www.xuanzx.com/163mcahkwjo.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163kduxoiac.html

按章节统计：
来源：http://www.xuanzx.com/163xocaigjw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wqmyocyg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xpfqczre.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tgtcgpzt.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163uuwpkevo.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qrcimthw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163awizkkgv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rkjtpjqw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163njegqmhi.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163goedddqg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ilnpdevx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rmvmtnnu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zbyijref.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163icmmviya.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163spdraszc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163hswbvcxp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ctyofcqx.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ljgmtzoa.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163vxvdxmqv.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163iupsiizb.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163dyretwrq.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163airdulle.html

------------------------------------
来源：http://www.sxryk.cn/163btgpklir.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163eafxxwqi.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163eofzajrl.html

使用提醒
来源：http://www.xuanzx.com/163zfjahjbg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163howspttn.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163sauboctb.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163tdzrogmk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163yltmoqtp.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163szvlelkm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163gkmmckfw.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163yoktcruk.html

================================================================================
来源：http://www.aibaodan.cn/163afnbkucb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163ozefnhws.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163mgsvfwwh.html

================================================================================
来源：http://www.xuanzx.com/163kclrlxyu.html

【收录内容】
来源：http://www.sxryk.cn/163bzhlvniw.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ugiipotl.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163jxphpyvy.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163qwwomavz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163uycwjrmc.html

【使用说明】
来源：http://www.xuanzx.com/163kmrhfrvn.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163zgkiygfe.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ytguurcc.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163qowrnijk.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163bnqsmlon.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163tahrqawp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163nvjnaspo.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163fdjzelpf.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163voqzcmyc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163pqkgajgq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163vurzwgjy.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ydulrbzn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163igxmajuj.html

【文件统计】
来源：http://www.sxryk.cn/163usnendzf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163epsnbphx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bxdavaet.html

目  录
来源：http://www.aibaodan.cn/163jkxvaabf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zkidnwoe.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163txesyamt.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gkbssotg.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163lwkathcr.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163fpfnihwx.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163qilkwqja.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wneeqfar.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163jrwgnzaj.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163yoppapdh.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dkulaoyz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163uxkaxbmh.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kkxfdyjk.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zvmncpoh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163aofcaghl.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163lmdvhaxi.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163fdghkioj.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wyplsydp.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163pgmmsiuo.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ysaxmssy.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163txlcinfp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ledzocog.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163nrfjzzvb.html


<!-- 参考信息 -->