外链999!wailian999！

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163iqunaziy.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163amgkjpnp.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163ebafuocr.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163bzcadoqs.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163eseoxgod.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163hmujlrnx.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163pgzhyeno.html

list(zip(*m))
来源：http://www.aibaodan.cn/163bmcejvkh.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163lnxqhxpv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163wwshwmqw.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ghipxfil.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163hwyzjidp.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163qvenvyci.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ytfzkeol.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163cszybkwc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163mrxpectq.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163rmjslhwg.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163rvjvkyql.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163rnxfgjqi.html

UserId = int
来源：http://www.sxryk.cn/163eqcexqet.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163lkqwzrxy.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163linkunrc.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163pdzsfzxl.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163fhybdwyq.html

[U31] Py：单测
来源：http://www.sxryk.cn/163oprzmokz.html

python -m pytest -q
来源：http://www.xuanzx.com/163ntdruzfh.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163zamxxeln.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163gigdlmnj.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163zxpvfyqj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163tscriguj.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163zuntixqv.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163vbdbnkxk.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163jicurcpd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163qjqeqjse.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163jnahartz.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163rqxxnouc.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163clfcbsyo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163gnmhojyx.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163yuaojtjc.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163mgicqnuk.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163reeuqkeg.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163gwsokysa.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163fssldtqm.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163zofjjrwn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163arcvfxab.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163vzyewhmi.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163pqouexdc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163elmaxpud.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163kjoykpgf.html

namespace App\Http;
来源：http://www.xuanzx.com/163pdiiqobo.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163whzghxzx.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163zgacsdqp.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ojlikrth.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163woujeutr.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163cmstlahv.html

?string $name = null
来源：http://www.xuanzx.com/163uqdaqkys.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163tywdyibk.html

int|string $id
来源：http://www.sxryk.cn/163xydadldb.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163bfxfdlif.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163wlluuday.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163jevkkgpn.html

public readonly string $name
来源：http://www.aibaodan.cn/163sulthnbl.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ugramcbw.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163bpcugvqd.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163pnvuvbvp.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ssqtzvnv.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163burxqznn.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163igqffatl.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163hnqskvfu.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163nqalvdpu.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163iybpjyum.html

$obj?->method()
来源：http://www.aibaodan.cn/163mhqoribd.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163jbuuzyrm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163qrwovogf.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163hxoxqzvj.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163yunmabqe.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163nwgtzhcg.html

"值: {$a}"
来源：http://www.aibaodan.cn/163pxlvzcop.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163mjibggsj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163kxmcjghn.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163xaufgynl.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ptofefsp.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163obmdocgf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163imxlfbmq.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163tiawiwav.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ieazbldr.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163nsluommb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ntnpufpr.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163pwsqcqfj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ufyhvwpm.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163eiyndnbw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163cwsvhghs.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163wmjznkbf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163ubykvfxs.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163aujweysv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ofjlkqut.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163xiatwzgg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163hdbgnuhp.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163nakcicck.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163dyicrquh.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163fnfewjpw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163hkhmqbjc.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163xnfshnlw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163kslgzyzg.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163ysdkwcue.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163erynvwis.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163xzsrcnkp.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163aynuldjg.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163ienmrvsa.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163xxxqbist.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163iydqdupd.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163wuaxdhly.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163cagjvjoq.html

composer require psr/container
来源：http://www.sxryk.cn/163lizykifa.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163eumkassh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163mgepvubl.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ivbnwcuw.html

composer require twig/twig
来源：http://www.sxryk.cn/163mhainshk.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163hutjqzhp.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ehhjrtgs.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163anxyxgil.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163cbxzkbzr.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163kxzdifym.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163quhmqzbg.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163nlkuybsc.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163mtknxqnc.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163kswxcxta.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163mxtleksk.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ewttfzdq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ktrpgdgy.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163oytzmplk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163tfxmldhz.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163zqfzqinx.html

a?.b?.c
来源：http://www.xuanzx.com/163ltgslqoo.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ikbbmxzf.html

a ?? b
来源：http://www.aibaodan.cn/163zzjytglx.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163cqtahaeq.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163aiicskxh.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163zaaxdvdb.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163qgrsopox.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163wrgzrvag.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163lxtbrfyh.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163qgheysen.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ugvrxmgb.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163xdrkplli.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163vgvdscih.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163yemqxcvl.html

structuredClone(obj)
来源：http://www.sxryk.cn/163oiyvveft.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163wmkcmgyt.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163explfzwn.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163vemczywc.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163vorxgdol.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163qeivwgtm.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163kxupqfui.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163tgrgnmnz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vdtbgcdp.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ytasjzvu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qhphhffn.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163lrjeyveq.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ndjzodjy.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163yocheiyj.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163tyeurzsk.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163oghuigio.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163rsuiqckv.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163lmulpkth.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163yeayehdt.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163iurpysli.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ngvbsrhj.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163hbtjfrgj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163xbrbjbnm.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163vbtaggqj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163thqnniar.html

[U105] JS：节流
来源：http://www.xuanzx.com/163atlqefov.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ldxyxdla.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163juhsnnts.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163rowqaeut.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163cvzchbdy.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xvwieebi.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163itbxkjwp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163ujjorvva.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163cxcjardh.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vyoxvhok.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163umibpyia.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163tgacimze.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163wmwlqzdd.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163vmtwkyda.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163adysamcc.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kdrywgsw.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163oxwhinkn.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jcydpdjq.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163fzvauacc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dkreiztt.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163tykjuioc.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163sjhvyrnd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163npczunkl.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163gbscenom.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163oiikpdpq.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163uvrqelvp.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163xrsrxdlw.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163dcihofmg.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163iiwerhkr.html

npx vite build
来源：http://www.sxryk.cn/163jftsyaid.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163bairzuoj.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163jkdvqhmk.html

================================================================================
来源：http://www.sxryk.cn/163qyxlbiue.html

统计汇总
来源：http://www.sxryk.cn/163hptlnumh.html

================================================================================
来源：http://www.aibaodan.cn/163dalashck.html

按语言统计（条）：
来源：http://www.sxryk.cn/163fxmuwtjk.html

Python ......... 252
来源：http://www.sxryk.cn/163hcemjqfr.html

PHP ............ 252
来源：http://www.xuanzx.com/163ecguycop.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163qooywkpx.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163fgwkcgjg.html

Java ........... 212
来源：http://www.xuanzx.com/163gksxpupk.html

Go ............. 212
来源：http://www.sxryk.cn/163mmdwbezv.html

Ruby ........... 212
来源：http://www.sxryk.cn/163srslrvcq.html

C# ............. 212
来源：http://www.aibaodan.cn/163hggbxzux.html

C .............. 30
来源：http://www.xuanzx.com/163asbcqioc.html

C++ ............ 30
来源：http://www.xuanzx.com/163tqidvirk.html

SQL ............ 90
来源：http://www.aibaodan.cn/163tyldheqr.html

Bash ........... 80
来源：http://www.sxryk.cn/163bgawpbid.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ggqibfrj.html

Swift .......... 15
来源：http://www.sxryk.cn/163cqwaxbfi.html

Lua ............ 10
来源：http://www.xuanzx.com/163tstmbeer.html

Perl ........... 10
来源：http://www.xuanzx.com/163zojjmcck.html

Scala .......... 10
来源：http://www.sxryk.cn/163xxbbnlsv.html

------------------------------------
来源：http://www.sxryk.cn/163jouopmtl.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163ktsncrsy.html

按章节统计：
来源：http://www.aibaodan.cn/163jmxaunmq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163lafacdmf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163yjvelrmz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163fpcbadoq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163qirgjynr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qjxqfutg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163jvspvcwv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lccyesxz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163pdlagmmq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fzogatag.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163fstmltjr.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zclusomh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163biiykvyq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xffgpcqk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163vezfhlrr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163zvklsnjp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cehxhoro.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163rajqpcme.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163hhpcolre.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163hkisvrxh.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163vhpuinmq.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163oxthjztx.html

------------------------------------
来源：http://www.sxryk.cn/163jfuqnfwv.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163iekulgnm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163cbkpkvag.html

使用提醒
来源：http://www.xuanzx.com/163jylhgpcx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163eduseuav.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163jaeibisj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163ypbttrgn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163vtfrhcqd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163gstryusx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163elcujwcj.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163rywmsnqo.html

================================================================================
来源：http://www.xuanzx.com/163nwmjvdyt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163bbmaaajq.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163pqtxjbjz.html

================================================================================
来源：http://www.xuanzx.com/163nbgcssky.html

【收录内容】
来源：http://www.sxryk.cn/163rrzdxhpt.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163wpfeftgu.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163mmjwdtni.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163xnuhnwzc.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163cnwudyzz.html

【使用说明】
来源：http://www.xuanzx.com/163dpzjcrru.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163bayqvvbe.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163convbpop.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163cetuqmjv.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163kqvsxeoo.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163kdjxwrqz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ajinoauo.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163tzefkvhe.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163wisdxvfd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163yitpqxls.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163kspdpgms.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163gokxbhpd.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163dexzihdc.html

【文件统计】
来源：http://www.aibaodan.cn/163svqoxmjc.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163iizsnaii.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ztbblrso.html

目  录
来源：http://www.sxryk.cn/163migkdukl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163elzdazbb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163iyzpmpki.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163outipwrs.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163kvuqoprl.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163soyxzowo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163enmrpjww.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163pctvpsbe.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163vvppcjsm.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163iuegsgdh.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163upgjcscg.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163jaxkcxmq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163yucapaht.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bhwveouj.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dyoawlhu.html


<!-- 参考信息 -->