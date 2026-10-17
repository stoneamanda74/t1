外链999!wailian999！

[U29] Py：属性校验
来源：http://www.xuanzx.com/163zzdphmyh.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163zphcwieh.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163yvodglcg.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163asvtxdug.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163sookjqsr.html

python -m pytest -q
来源：http://www.sxryk.cn/163uoixexnp.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163aihrftkf.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163anhrlmkt.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163lqwnayyy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163jxdykfah.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163qypxrdhd.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163yodrhsdh.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163yssupvog.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163zuclpkzi.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163xtwombor.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163qicdmijd.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163bqllnbjo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163cgxdvuyz.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ugasygft.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163oayqtqki.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163sygstruc.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163bocoskuq.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163eywbuoff.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vcnkqkoc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163yascsror.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ipswosyp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ffpmawrp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163jwgnwies.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163kpzqyfjg.html

namespace App\Http;
来源：http://www.aibaodan.cn/163pwgdvwpg.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163xjzxndro.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163kbjglfmk.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163homhvvnr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nmnvodhy.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163oqcrefju.html

?string $name = null
来源：http://www.aibaodan.cn/163utjzgnpc.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163wnjtwhgt.html

int|string $id
来源：http://www.aibaodan.cn/163sbzzpxca.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163zrlczrfa.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163itmamybp.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163gidpqqbr.html

public readonly string $name
来源：http://www.xuanzx.com/163dowzzpom.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163gtrjmjtr.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163tdrdgcpy.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163tpennwwy.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ykytdyjm.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ltcvnlib.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163ncppyjhr.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163xkuhzakp.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163novsjpxs.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163lfdqedbk.html

$obj?->method()
来源：http://www.sxryk.cn/163tasywffp.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163wzxfccry.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163zumevtpm.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ixjvzilm.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tzwmovul.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163wwvrpbef.html

"值: {$a}"
来源：http://www.xuanzx.com/163yjzqhtes.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163oefjzgpd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163gxptdcwf.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163emmzbpdo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zunjqlme.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163duupwwrs.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163yqxothrs.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ggthswee.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163elvgehcl.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163zfqqvwhz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163aqwkscjn.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163cqztwccm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163zlhdqdum.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163nautsftz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163dauynyaf.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163rlzhcwry.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163zwffzgbv.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163mpixrooc.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163mnctswhf.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163rogwjwhm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163xtxhearz.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163qozmxqax.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163htenyido.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163jtwklplj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163qocaonor.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163mlhmkmlu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ivlkyalc.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163oyiyyhmp.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163gkicifzj.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163yhozrjfw.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163uslfwryc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163kdxccruo.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163bcpwrqfl.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163mmhwddtl.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163jlqblpmq.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163ddmlkhoj.html

composer require psr/container
来源：http://www.xuanzx.com/163xivzmkgb.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163dzkhsbqe.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163llfsczkc.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163icpidtna.html

composer require twig/twig
来源：http://www.aibaodan.cn/163ocqhazho.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163rnqjdkxg.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163zsscjzry.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163txhbflik.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163tobapryf.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163gjqjwlji.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163pyupcqkz.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163gnqpwjhz.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ehvdittc.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163eutajsym.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163rtzjxmpc.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163itdqhvqp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163grzxrpxd.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163bdofwpvf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163navhwhgp.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163kbycsfxl.html

a?.b?.c
来源：http://www.xuanzx.com/163dqsosoze.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163vskeeoxy.html

a ?? b
来源：http://www.xuanzx.com/163cqcterpp.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163epwjnqxe.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163utwiyguy.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163mghhkyko.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163zjjjifxv.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163limkjhew.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163gjeyvrli.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163xtedvgpg.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pkqhypql.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163mesymujn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163siwwzfoh.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163brhwluek.html

structuredClone(obj)
来源：http://www.sxryk.cn/163asovxjgz.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163atzyxiqt.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163xziwvuma.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163hkfsqmot.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163thxdbjrv.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163vyhfirfa.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163pkwsfhaj.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163agrlmhna.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163xuwgzmom.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163bpqbvgen.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pjqdndza.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163mznjahbn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163zvqlpnea.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163jmdrnccd.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163pbvrgrgn.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163kbvjetil.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163kxarenoe.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163flpjqgil.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163meehyecs.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163zglccxys.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163dfxabler.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163liqyupfn.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163llynldcs.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163wdmnkzks.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tbpohgnb.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163iftmiade.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163qubptkpr.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163dtyqkaay.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163fnjjxtpj.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163tnurwxvi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163cchotsbs.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163fmibbnpo.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ixpemsmf.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163mvlokagf.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xxwebugy.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163tobooxqe.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163pdeukhgm.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163gbqrubvr.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163pyzftanc.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163grsuvshh.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mullvjnq.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163veucewli.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lebahfgc.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163jdcburml.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163uhqrwgan.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163vozdueqe.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163qegzeuvu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163dzzqotdo.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163obgoryax.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163exmeeeey.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163murtdnbr.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163videzcyg.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163qjkcrjhu.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163owffcozj.html

npx vite build
来源：http://www.xuanzx.com/163oaqrvayr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163oqlawdpm.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163xnnoqzpf.html

================================================================================
来源：http://www.xuanzx.com/163trsqukls.html

统计汇总
来源：http://www.sxryk.cn/163pwuoupja.html

================================================================================
来源：http://www.sxryk.cn/163xwevfnuz.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163bgqftaxf.html

Python ......... 252
来源：http://www.aibaodan.cn/163xuraogjr.html

PHP ............ 252
来源：http://www.sxryk.cn/163tbwqvbax.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163kazmqdbq.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163wiffrlzt.html

Java ........... 212
来源：http://www.sxryk.cn/163spxhjxuv.html

Go ............. 212
来源：http://www.sxryk.cn/163aaeheosj.html

Ruby ........... 212
来源：http://www.xuanzx.com/163kuiogdhu.html

C# ............. 212
来源：http://www.xuanzx.com/163xythlhdx.html

C .............. 30
来源：http://www.aibaodan.cn/163bdufyubq.html

C++ ............ 30
来源：http://www.aibaodan.cn/163agawtvml.html

SQL ............ 90
来源：http://www.aibaodan.cn/163xkqepwlx.html

Bash ........... 80
来源：http://www.sxryk.cn/163trkjhzcd.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163zacbckxq.html

Swift .......... 15
来源：http://www.sxryk.cn/163vcoljsnx.html

Lua ............ 10
来源：http://www.aibaodan.cn/163hzhlcbbs.html

Perl ........... 10
来源：http://www.sxryk.cn/163jqlmjnsg.html

Scala .......... 10
来源：http://www.sxryk.cn/163iepqtquj.html

------------------------------------
来源：http://www.aibaodan.cn/163edvtxwcn.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163togkuztw.html

按章节统计：
来源：http://www.aibaodan.cn/163rxerejex.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163efewvpkg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jwepkqxl.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dejbpren.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163btaubnpa.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qsztolsw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fybmhxhs.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163geirtotu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163nhcfyobs.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nchjntee.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163zjemkpui.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163aqgqdydv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cyarlnpi.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163loecdowm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163cnpzfjkl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163yjmwprcx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cmdzuhtv.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163weishhlg.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163qkftvcdt.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163itwbcbvn.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163omqtcdjf.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163biyzecot.html

------------------------------------
来源：http://www.sxryk.cn/163hmegyekn.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163yjfphfwz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163altkbmpz.html

使用提醒
来源：http://www.xuanzx.com/163holizlvz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163oxdnunfq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163ncyzvfwu.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163jaknnxkp.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163xqmoaolc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163fxwbjikc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ekcsaeaj.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163amnutcgb.html

================================================================================
来源：http://www.xuanzx.com/163bptnhags.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163xcwpdvmi.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163pupgwgpm.html

================================================================================
来源：http://www.xuanzx.com/163gislawdn.html

【收录内容】
来源：http://www.aibaodan.cn/163gyiwanet.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ttqlqery.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163zbyakcou.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vzzhgory.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163asxzsods.html

【使用说明】
来源：http://www.sxryk.cn/163ynlrdpcq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163nszwbrmt.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ihbaixnx.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163cpxrzxzv.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163wsbdbcly.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163wnpyyedj.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163sojxbond.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163uvttfflw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163eyeihsvg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163djfyuvtn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163losteotz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163kekahain.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163eswjpqos.html

【文件统计】
来源：http://www.xuanzx.com/163cunzpvhr.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163kxdijpta.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lrsezgei.html

目  录
来源：http://www.xuanzx.com/163ipfoeqrs.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163trzitxlm.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ugxwqhnx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163riuuqbnc.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163hceukeoz.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163rrzefhez.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163knpvjskd.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163apcjvphb.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163zyglgamo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163izeuswvh.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ndwydgls.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163qqjmhdie.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163pwlrtfss.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mmfgrpsq.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163spfwdoei.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163safrztbe.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163bnguxdjv.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gumlcmhl.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163xcthlvkq.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163bgpndenr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163uldivsiy.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163emhyptyh.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163lpiqmzsw.html

================================================================================
来源：http://www.sxryk.cn/163qxkonerd.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163sbhchwbl.html

================================================================================
来源：http://www.sxryk.cn/163lbapijbu.html

[A01] Hello World
来源：http://www.sxryk.cn/163znnslxsp.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163qqgfdxsa.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163uqknxlim.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163sahkjpgx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163depvzuaw.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163chiixkws.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163ccwbkkdy.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163lmnolxvx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163gqqtwizs.html


<!-- 参考信息 -->