外链999!wailian999！

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163sbymhtsj.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163kftbzgco.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163pqvyijwp.html

list(zip(*m))
来源：http://www.sxryk.cn/163ndbpujfx.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163iywckjng.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163sfqyyyak.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163sduxgsqw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163sjznyawy.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163sslszsmj.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163tmmcbiwz.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163iazaybtm.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163yyxpllsv.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163xtrjpgck.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163nzphtmxy.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163alhqfscd.html

UserId = int
来源：http://www.aibaodan.cn/163jkxxeczn.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163bmxqgfjq.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163vfxpssms.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ktbdiyaq.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163nvswyhpq.html

[U31] Py：单测
来源：http://www.xuanzx.com/163uqcgexhf.html

python -m pytest -q
来源：http://www.sxryk.cn/163jbkmuksv.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163egygahei.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163tjgrggvi.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163jnfotjvw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163ittjhros.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163uhsaybgr.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ouigsxhj.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163qkvqgoel.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163onploxdm.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163raetysyu.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163jevvfdnv.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163fooamfhf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163kgphsnrz.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163iovvtcrf.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163gnnyjora.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163nigpfqre.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163oasqarvk.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163lnzrwexm.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pkzozybu.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xuxjktyj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163zezpkvic.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163magunxcq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163tybpiwcu.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163nqugmkdj.html

namespace App\Http;
来源：http://www.aibaodan.cn/163whjdiuuo.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163jmjqyhlz.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163bgfgfpks.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163yyazwfhq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qlvhvnrs.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163fuxgmsgo.html

?string $name = null
来源：http://www.sxryk.cn/163ebzkbasv.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163itheqeeg.html

int|string $id
来源：http://www.aibaodan.cn/163tohgosyc.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163hylsaxxu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163iutcsfrj.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163siebvmfs.html

public readonly string $name
来源：http://www.sxryk.cn/163agvabhhp.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ufwxhixj.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163wukhphdp.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163pwuzdggk.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163dnvjqvuj.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163fsfosnkx.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163dofjzclb.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163pcxitakf.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163jksofaec.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163dbohjert.html

$obj?->method()
来源：http://www.sxryk.cn/163eyinysdx.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163wlsuhhua.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163pnkduunx.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163qezunbru.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pncxirsi.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163jemwclvs.html

"值: {$a}"
来源：http://www.aibaodan.cn/163zknxkwdn.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163fdoedgcj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163arpmabvk.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163nmahosoh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163bnsmkdrs.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163fzaapyqc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163xcwwlzgt.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163pqxssrvq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163tzvknmdb.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ltkiuwcu.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163bcohmmmv.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ovlgbkij.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163jbwuhafr.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163mxnlqfwm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163eycmnhjq.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163fcleonfs.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163rrztwtbp.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163plnqmyvp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163xwoazwro.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163fiudattt.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163uqqkmqep.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163aljztuwd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163qlebnlnl.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163dljsxvrj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163viifkzkt.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163qlrtwqot.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163aedivobc.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163hfeizzqe.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163tizbwqni.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163iwgggqwc.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163aclbfmzy.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163yvreoayi.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163mkytfgna.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163brfaaekx.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ctyaguif.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163eladkaek.html

composer require psr/container
来源：http://www.sxryk.cn/163vathcrkw.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ucvymxct.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ztlcdwnz.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163tontbezs.html

composer require twig/twig
来源：http://www.aibaodan.cn/163fazxhqqn.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163lokkewwj.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163qnmziqpn.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163qqnuycnz.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163viszwykb.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163rwmoopvm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163gmwcoiqx.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163yfsiqlkk.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163veiiuvle.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163unqdvdab.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163iwkkjopt.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163oagyivgg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163duxmgbbw.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163qrmmlcfz.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163xvflvhvw.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163ztxelahs.html

a?.b?.c
来源：http://www.sxryk.cn/163imtfeltu.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163okzvqblc.html

a ?? b
来源：http://www.aibaodan.cn/163lhgobare.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163acsuhpdi.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163zewfkzte.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163qojbjmyd.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163mbpyhofn.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ahbzzhrd.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163yjxjuydg.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163xdrlhqxl.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pxzioxdu.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163uetvnlal.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163qywxpopv.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163djqbxzat.html

structuredClone(obj)
来源：http://www.sxryk.cn/163kzxwllys.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163gbgytdoh.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163jomwtrbp.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163wkiatnvk.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163jbcoewdw.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163untldrmk.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163krlpluzc.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163itdrqcyp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xqydvpdl.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163qgzheczs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ndnxvcjk.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163xrxtfxhz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ndzfuzmj.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163jmfandoq.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163oiurepob.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163bqhncicb.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163rlvlayap.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163wfyvhfce.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163pymlxxor.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163iejtewyj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163vcdvhcnn.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163acpdekfx.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163oshhibxq.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163gbuuldum.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163slcheqis.html

[U105] JS：节流
来源：http://www.xuanzx.com/163nawtclyf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163abqimgip.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163ncouyvnl.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163mqfshdyr.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163otultnxq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163jkujykmn.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163vwwvegce.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163chkcaluh.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163fydvevus.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163kbmeekgj.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163vgjgkoip.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163caenldkm.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163atfxtpwl.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163fwhybjed.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163pqtvwett.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163onhqvtls.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163jrpjwszn.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vffqferu.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163akxhhcvx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ucijntui.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163zhtpxfsq.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163pwrngame.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163kgagizix.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163pypcovym.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163lmxmvjgb.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163uyxxysfb.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ncutbory.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ogeymfbl.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163bbpjryvo.html

npx vite build
来源：http://www.sxryk.cn/163auenvmln.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163btszvqvf.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163jpivonhe.html

================================================================================
来源：http://www.aibaodan.cn/163xxkfvwmd.html

统计汇总
来源：http://www.xuanzx.com/163mtuzbusc.html

================================================================================
来源：http://www.aibaodan.cn/163rtohajof.html

按语言统计（条）：
来源：http://www.xuanzx.com/163qwdxihpq.html

Python ......... 252
来源：http://www.aibaodan.cn/163rurkjoch.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vkzxmhts.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163uvfxuufg.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163dtjazply.html

Java ........... 212
来源：http://www.sxryk.cn/163ssbuezol.html

Go ............. 212
来源：http://www.sxryk.cn/163aqbhbnrg.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163hfajcpjb.html

C# ............. 212
来源：http://www.xuanzx.com/163oduikqtb.html

C .............. 30
来源：http://www.sxryk.cn/163hizggciw.html

C++ ............ 30
来源：http://www.aibaodan.cn/163girvljxd.html

SQL ............ 90
来源：http://www.xuanzx.com/163luexnbmq.html

Bash ........... 80
来源：http://www.sxryk.cn/163oxjvtvhc.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163uqxyvpan.html

Swift .......... 15
来源：http://www.aibaodan.cn/163esebtsfn.html

Lua ............ 10
来源：http://www.xuanzx.com/163ycsgltvl.html

Perl ........... 10
来源：http://www.sxryk.cn/163wssarose.html

Scala .......... 10
来源：http://www.sxryk.cn/163dxxpfhjw.html

------------------------------------
来源：http://www.aibaodan.cn/163thhoufli.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163gnoprfuo.html

按章节统计：
来源：http://www.xuanzx.com/163frcbkomi.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163yqvefhel.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tapxeeti.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163yskspofs.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163haqsohlx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163bkllqoig.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163kgifbhjw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163teqdeskh.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163dbffqdot.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jvsrhece.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163wklrfppt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bnzwextf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163iwlgidpw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bhqkvpfs.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163isvnpzwl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163pkdjbwbh.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gsxalirh.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163epsidpvp.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163sozimdpc.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163sjgafzlu.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163rpdzpcnp.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163qvzxtvwm.html

------------------------------------
来源：http://www.aibaodan.cn/163ibcejyfc.html

合计                                  2106 条
来源：http://www.sxryk.cn/163vvcoyuxq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dahaouhy.html

使用提醒
来源：http://www.sxryk.cn/163qzwtgmiw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ijgxxles.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163dhdedkbx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163neuowxkh.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163jsnfjbka.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163deggnwjp.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163lrgoemlk.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163vukxobmu.html

================================================================================
来源：http://www.aibaodan.cn/163okggjzpp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163drhozqfm.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163iswoxhjq.html

================================================================================
来源：http://www.xuanzx.com/163pudcpdry.html

【收录内容】
来源：http://www.sxryk.cn/163tdqcpyaa.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163zdrcnemm.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163zfrzqblz.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163ukijrkzi.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163igjaghvb.html

【使用说明】
来源：http://www.xuanzx.com/163feswprxj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ibnetxtv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163izxbnmmb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ubuuhrmd.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163ipdbkbpl.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163dnsuekhb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163iszctgpq.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163jipeexdr.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163jnqvjnzj.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163sgenuwjs.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163jlsczqlo.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163lkfemrhp.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163khiebdin.html

【文件统计】
来源：http://www.aibaodan.cn/163gtzhhwij.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163pfyrwzfh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163diaipouz.html

目  录
来源：http://www.aibaodan.cn/163jmyqjrrc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tezjudjx.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163kqnacpfl.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163kblinpql.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163nzislsvn.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163tvizdlwi.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163qqffoyvi.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163vxwrvkss.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163pzodjjwi.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163tbekrkgp.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dnjwqyol.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ohfatocz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ssbtuguv.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zploshzd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wbddsrsp.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163spkhwmsv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163sgygdgda.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zqyvyhvt.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163nxslctcz.html


<!-- 参考信息 -->