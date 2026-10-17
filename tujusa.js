外链999!wailian999！

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163pqlzrhnx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163gxdwwnnu.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163hsgvbsfy.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163wbcuzawo.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163qdyzqolp.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163qdwokacb.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163fpwbxygw.html

list(zip(*m))
来源：http://www.sxryk.cn/163haohpiaa.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163fkovdnje.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163chyucrmn.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163aeatmctl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163niomvbjl.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163cexjsgzg.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163oxoeblqi.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163udhvypya.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163hiaxqkpf.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163pjzlpwix.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163dvsorfjv.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163fwsyfucz.html

UserId = int
来源：http://www.aibaodan.cn/163pwkwepsl.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163owykdnpq.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163aaalezvh.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163vrmuzdvw.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163kjtflmza.html

[U31] Py：单测
来源：http://www.xuanzx.com/163emzyovjp.html

python -m pytest -q
来源：http://www.aibaodan.cn/163tavnvmfu.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163vjvgdpsx.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163doywjupw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163iytqfiad.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163sqfwmtfm.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163xbjylics.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163axwscovh.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ikbqdqkc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163bimscxbb.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163wjkmclfd.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163wxfeowli.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163jjjxkddm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163tryasojj.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163bfazmnjq.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ckeidjgv.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163hgwiwzpp.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ipoawebz.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163yhjbawlh.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ywgezoxt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163kixkeydh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163unfybcql.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163itqrtobh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163zcthcyzd.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ouknrsbl.html

namespace App\Http;
来源：http://www.sxryk.cn/163cbpqemty.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163vqowlojk.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ettbrgwo.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163yajblhnc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ravxnuxr.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163nowvqyfr.html

?string $name = null
来源：http://www.sxryk.cn/163nmxbeacd.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ccemqelr.html

int|string $id
来源：http://www.xuanzx.com/163kofhwksy.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163mztuwffg.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163cwklqzcc.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163rhrijjfx.html

public readonly string $name
来源：http://www.xuanzx.com/163bqpnxvdp.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163gugwvipa.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163vggcpiux.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163iguqzzlf.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163npgnnyfq.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163kzbxzmyu.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163vqjulsvy.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163dbmyhely.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163bxbajtdb.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163eyhicpqi.html

$obj?->method()
来源：http://www.aibaodan.cn/163fjylnnzb.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ieudmtoe.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163qtfsnjmu.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163nfotqtbk.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dkpczhzy.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163wkhygaql.html

"值: {$a}"
来源：http://www.sxryk.cn/163bmitkarj.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163wcfdkuth.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163oebjmmei.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163tgquzskz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163uhjtkfif.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163iwqvcdhf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163zkyrioep.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163uibkcpgd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mziaovqy.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ndrvnhum.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163fkugnyxg.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163yxixxphb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163mbobexoa.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163pslhqaub.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vywbaktc.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163elcagrvj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163kxhyktub.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163wysutpmq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163nagcmzpp.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pfmwqzwx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163jpbhjtjh.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163pwqccyao.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163nvmmwjoo.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163wqdhachs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163fahtbnck.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163rrwrotfe.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163mzvumxun.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163eaokezxo.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163qcnvfurv.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163qtonpedk.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163lhrtjhay.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ugruitlf.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163swpybvep.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163flwozbdp.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ukoemvar.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163xrlhhxug.html

composer require psr/container
来源：http://www.sxryk.cn/163fynmpsiv.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ouuaxmfo.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ahnxbcyr.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ccssdhug.html

composer require twig/twig
来源：http://www.xuanzx.com/163byrlywyz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163tiozhbzb.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ihvyktnm.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163ywoferpw.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163bpbprwjm.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163vblycnxw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163gdavgsde.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163xetwpbyq.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163unwxwzem.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163cnmqtwhf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163zbolfiku.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163rgyemkqy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163gyhuktwc.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163giszyfol.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163dvtcqmkj.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163xqwhwdax.html

a?.b?.c
来源：http://www.sxryk.cn/163elscpdvk.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163pxfllpbl.html

a ?? b
来源：http://www.aibaodan.cn/163rzaihhca.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163tnxjsnhf.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163zcykuoub.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163dcidduxa.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163roxjrqsg.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163jghmbqzc.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163wrddfyar.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163jgzgicns.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cakpriye.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163qivqfnhv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163zymchmvv.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163xxovfxpp.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163evefexfe.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163ydrnzmhn.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163pvrmlomc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ctumsldv.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163gxrgwzcs.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163qvancsws.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163qstfgmvq.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163dhpvkegf.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163deghhxje.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ypnzfsve.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lkwdjgkh.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163jqvkoxss.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163igcpqwmr.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163rnileeqd.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163qqgqpkxs.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163uomayicf.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163lpelitzm.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163xkssxrry.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vcxuidtv.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163zuaioils.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163juutsupc.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163wmczkjbe.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163bvofomuj.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163idstyaxy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ckdjfxdd.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163mkzjirpl.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163oktytgmh.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163dkeyzjvu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163hfnbocyf.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163kqfktqor.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163fwdweuxj.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163kfbizxny.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163wymmyfut.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163iplczqvz.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163uezvkbbw.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163qlpbjpsy.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163rvkyydqo.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163rrsvtugs.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163dhdlmpzp.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163kuiqjqog.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kjjqzucx.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163kymnrccb.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163swlfmjdz.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163hkttgirj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rtwkloxt.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163hnftqltl.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163mrthbrzm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163idxzglaw.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163xdnvoeds.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163pyvhhjwd.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163dculymhi.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163vryvcges.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ehlrespm.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163odaoprme.html

npx vite build
来源：http://www.sxryk.cn/163givlpbch.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163piogibvf.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163wfqwmrft.html

================================================================================
来源：http://www.aibaodan.cn/163wqnvfdsj.html

统计汇总
来源：http://www.sxryk.cn/163dazhffnb.html

================================================================================
来源：http://www.xuanzx.com/163aqcvaqyg.html

按语言统计（条）：
来源：http://www.sxryk.cn/163zaqryfhp.html

Python ......... 252
来源：http://www.sxryk.cn/163betiuwnq.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vwhcmpwr.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163dtsmuxzd.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163pslvgdjt.html

Java ........... 212
来源：http://www.sxryk.cn/163oalzuizh.html

Go ............. 212
来源：http://www.sxryk.cn/163lahdcmao.html

Ruby ........... 212
来源：http://www.sxryk.cn/163tagojrvc.html

C# ............. 212
来源：http://www.xuanzx.com/163dcjhqhsb.html

C .............. 30
来源：http://www.sxryk.cn/163stlxufpf.html

C++ ............ 30
来源：http://www.aibaodan.cn/163slxyxhhk.html

SQL ............ 90
来源：http://www.sxryk.cn/163rnodnfdm.html

Bash ........... 80
来源：http://www.aibaodan.cn/163isztrlsu.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163njanmkfn.html

Swift .......... 15
来源：http://www.sxryk.cn/163ovscdzqp.html

Lua ............ 10
来源：http://www.sxryk.cn/163oddudhmn.html

Perl ........... 10
来源：http://www.xuanzx.com/163khbwdkpa.html

Scala .......... 10
来源：http://www.xuanzx.com/163alppzhno.html

------------------------------------
来源：http://www.aibaodan.cn/163glnlejaw.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163nxkofwfl.html

按章节统计：
来源：http://www.aibaodan.cn/163avreiiob.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163mrghclgc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ymzbjlds.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rcdwvmkc.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163vinyyubq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163fvnfiprv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163jizufmvm.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lbcqtojf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163kbzqiqbg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xnqdjfog.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163dbzlrxxg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163amlllxna.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163slbtangc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pqyhtpxw.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163xijyrggb.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163nbblpaph.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sjoqjqhu.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ggiggltt.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163aoopssti.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163qswgtrxc.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163whjjbdks.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163vxbnfuek.html

------------------------------------
来源：http://www.aibaodan.cn/163mpfilvxn.html

合计                                  2106 条
来源：http://www.sxryk.cn/163asavfyhz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163viyvxkdl.html

使用提醒
来源：http://www.aibaodan.cn/163yvdhzfqr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ggbnpsvj.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163eagyusag.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163xabqhrch.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163qdxjwnwi.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163mjrxwczj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163xpdohzdn.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163qdkzyndi.html

================================================================================
来源：http://www.sxryk.cn/163pajvaxha.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ymiioggb.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163slnjbbdz.html

================================================================================
来源：http://www.sxryk.cn/163tlkaiedd.html

【收录内容】
来源：http://www.xuanzx.com/163nlkgtzbm.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163hfbjwxge.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163qzbruvct.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163xwhrqexk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163myqqcnzy.html

【使用说明】
来源：http://www.xuanzx.com/163mdgpozxj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ciozwkls.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163pzrxvizp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163povbnqqn.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163jbaknytt.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163prwhcffi.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163mllsifkx.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163yykcxcdn.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163tnlgdaww.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163mrivanxy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163njakhspw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163xgwnljwg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163nmjrssaa.html

【文件统计】
来源：http://www.aibaodan.cn/163tobqpoez.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163gtcmenem.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163desfzdwx.html

目  录
来源：http://www.sxryk.cn/163twwrtizj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pkwnwfmn.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163danimoey.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ibovwkqi.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xqgkribj.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ykmqfiam.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163opnzkwju.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163nvoxlpst.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fwvhhuwn.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163cmqgysve.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ylijxisv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163trhgfhwj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kinxeruz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jspfnlqc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cuyczfea.html


<!-- 参考信息 -->