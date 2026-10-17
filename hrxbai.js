外链999!wailian999！

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163hmpxwqtr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163hfdmefsm.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163munoumlp.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163khixoooz.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163lxrioutu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163vqgkiukq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163dcofvwkv.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163xmyocwxs.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163nxbudteu.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163lnkkgyzm.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163elvbzzhm.html

list(zip(*m))
来源：http://www.aibaodan.cn/163oghzbfal.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163cqlpnuiy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163xjscmqdk.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163eauwqyfh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163hbvjuvsx.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ftcpkwtm.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163lyakflft.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163tdkkxmht.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163vqqtdpkh.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163mzhixhuw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163bxdzbsdd.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163tdpaxfag.html

UserId = int
来源：http://www.sxryk.cn/163gmppvnfs.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163fqqjasdr.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163zpafzvji.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163uepnjffp.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163qozidmns.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ygxezuyb.html

python -m pytest -q
来源：http://www.sxryk.cn/163jzbzmwrs.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163zfpekqaz.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163vvnjxujx.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163kshfxhac.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163qzjugjxv.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163jpdnxevt.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163lbseobhn.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ivamdsrl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163soasaugs.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163hnqghaut.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163rnkbzfqa.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163dkvojevi.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163nbnejcne.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163uxnzcddt.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163dmqhhbmb.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163tchaqdwv.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163rwppavmp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163zkwehfdx.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163lndruprc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163lvzaipzw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ndtijbeg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ncdmyqwg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163kamalgwu.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ddojpjar.html

namespace App\Http;
来源：http://www.xuanzx.com/163gggmbhjq.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163kulnyzxz.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163dsqlwbvh.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163savbvzar.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rxsgakgq.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163unvazkul.html

?string $name = null
来源：http://www.aibaodan.cn/163avhbtlhi.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163uccfoogl.html

int|string $id
来源：http://www.aibaodan.cn/163ckqwiwpf.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ixuqifmh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163meplfvua.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163oggirlnx.html

public readonly string $name
来源：http://www.sxryk.cn/163ruphjtma.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ttkqvkdz.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163eibylnvr.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ghcbgwwk.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ecubnkdt.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163vvolwbtz.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163sgercmjz.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163mpsjxufo.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163gxubczmw.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163jxrtxikf.html

$obj?->method()
来源：http://www.aibaodan.cn/163auigaucm.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163tzeoqvmd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163vdrymexy.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163zwthcwpf.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ykkkofjn.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163uutadexb.html

"值: {$a}"
来源：http://www.aibaodan.cn/163tqcyuyff.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163kcjxxgup.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163jhbdbzgq.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ojzwyaaf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163jrnvclic.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ytketlkv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163opygneej.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163hduhcpta.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163qkcsajrj.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163bjyluauq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163jbgdkhrr.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163wsutzfak.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163xwybsawc.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163oekiqodi.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163gybtrjnb.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163tfqixvsz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ggxkbgbl.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ghwxrlbq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163dvxjawpf.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163rdkaaaep.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163uwpdsawm.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163pzdmzsgs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163efztyceb.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163fxvyhrvt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163onfsvbum.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163wmaahweq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163shvjfyuj.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163zspajilz.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163shhxevhb.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163xsnjjvwx.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163uhfzvavp.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163cfvibhkz.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163xoztsdzj.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163cacpppmv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163durlxudd.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163crkbnopq.html

composer require psr/container
来源：http://www.sxryk.cn/163jkmsbnhf.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163onckapyr.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163empxteik.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163mtwzcohk.html

composer require twig/twig
来源：http://www.xuanzx.com/163nqztwfnt.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163svkgmdab.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163mrqotntx.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163qnwxyjry.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163jqvidpsz.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163peyteqio.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163xhkptplh.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163ejmthrwc.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163xvulioce.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163bdypshle.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163chqrmifh.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163yqxweeje.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163nnuzjhrd.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163sfwbrpuc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163kynlpffn.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163tscqhzpb.html

a?.b?.c
来源：http://www.aibaodan.cn/163hqeximca.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163oieskedd.html

a ?? b
来源：http://www.sxryk.cn/163rjwzseky.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163lcscjvfd.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163munmimmi.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163yuhsghzr.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163prktejhb.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163pbimrdug.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163wttgywvm.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163rdchjexk.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163egfbdecs.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163vyjulvwc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163onwuidsa.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163ngdkqzyz.html

structuredClone(obj)
来源：http://www.sxryk.cn/163pmutkzie.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163mipjrkdo.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163lziukrru.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163efomvxga.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163pdbjjwuh.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163naytoxxh.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ppgvmdjd.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163qlorvjvk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163gjjdpvca.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ksfrqrhc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pswgagpi.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163ncwtooqb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163nnlzppjq.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163yedgtejo.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163kwhqmgjy.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163kpayuukf.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ujrdjpfk.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ojzhdusq.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163suvbkyrw.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163vtkpdasg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ihntssme.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163rahttgsg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163qclujvof.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163zyzeiquh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kcjyaovq.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163pkhwhbvx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163nspwtepp.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163msuqkypk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163pkavjsgl.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163vzzjdkhc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163wjozdqtz.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163usoymkzn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163iqlqouua.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163bclsvhfq.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kyfdqebh.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ragkjvkw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163jeacwgvi.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163jzzsczun.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163awrrljyw.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163cvaucdgn.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163tleecmyv.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163lfxfdtdt.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lqalcvdh.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163xzaxrxxt.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zyfcvnfh.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163mvimwfew.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163vujhhsrl.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163wjnrwpvh.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163hvhqqhpm.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163luozvpsf.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163orgqomjq.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163nuavhpep.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163oimrjdes.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163nybtzarl.html

npx vite build
来源：http://www.aibaodan.cn/163orclwcgq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ogbopezm.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163gollvano.html

================================================================================
来源：http://www.xuanzx.com/163faiidwtm.html

统计汇总
来源：http://www.xuanzx.com/163pmqexrms.html

================================================================================
来源：http://www.sxryk.cn/163zujoraif.html

按语言统计（条）：
来源：http://www.sxryk.cn/163pnfuohsn.html

Python ......... 252
来源：http://www.sxryk.cn/163phjyilab.html

PHP ............ 252
来源：http://www.aibaodan.cn/163sozwwbeh.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163nncwjxol.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163hyqqjlfv.html

Java ........... 212
来源：http://www.sxryk.cn/163hgkrzvxp.html

Go ............. 212
来源：http://www.xuanzx.com/163ehgwzpfb.html

Ruby ........... 212
来源：http://www.xuanzx.com/163stehxwki.html

C# ............. 212
来源：http://www.xuanzx.com/163kbteotnb.html

C .............. 30
来源：http://www.sxryk.cn/163jvryppbj.html

C++ ............ 30
来源：http://www.xuanzx.com/163wvixmdna.html

SQL ............ 90
来源：http://www.aibaodan.cn/163kgjvefyq.html

Bash ........... 80
来源：http://www.xuanzx.com/163cdlojokj.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163hmtavtba.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ctuaeakk.html

Lua ............ 10
来源：http://www.sxryk.cn/163vmqiigrv.html

Perl ........... 10
来源：http://www.xuanzx.com/163emuhrbtd.html

Scala .......... 10
来源：http://www.aibaodan.cn/163swxfwekd.html

------------------------------------
来源：http://www.aibaodan.cn/163kgambbwf.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163fsamxoee.html

按章节统计：
来源：http://www.sxryk.cn/163ivaesbvm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ztbazuwk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ftphigfo.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nuimfzhh.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163oycmstuq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163jppfusvi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vezzdlaw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163adpxzagx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163afclkjsw.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zmcicfsk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mzsmlvfo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kffkqdtq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163uirebvbb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ouvpjijv.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mpgwarhl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163lpwqbncs.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zsbsucfg.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163rnkiesfb.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ekigewfy.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163sqconifn.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163fblqvytc.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163mymlycnu.html

------------------------------------
来源：http://www.sxryk.cn/163irdumhbv.html

合计                                  2106 条
来源：http://www.xuanzx.com/163acuocjsd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ezsjrqau.html

使用提醒
来源：http://www.xuanzx.com/163dwxellsq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kswzrdgx.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163glogrhvq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163pjgmjjrc.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163rrulkurp.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163tyjkbomk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163tadvflje.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163llwnvxzs.html

================================================================================
来源：http://www.aibaodan.cn/163pvlhalnq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ryewfwqb.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163bcqpiydz.html

================================================================================
来源：http://www.sxryk.cn/163lmukbzrj.html

【收录内容】
来源：http://www.aibaodan.cn/163icxmykju.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163tjjrppjz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163hllagvpi.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163pnyiecfo.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163bnfmftuf.html

【使用说明】
来源：http://www.sxryk.cn/163lrcaeiat.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163cdvqsggn.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163vpnfvqjw.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163tojxfipn.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163ezbofbyz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163imeruugd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163bncwiizt.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163igcpqdrp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163bprzqhnb.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163ysxpefti.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163zxwkvnna.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163lmsdicfm.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ycbarvdj.html

【文件统计】
来源：http://www.sxryk.cn/163zzhyjgac.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163iootzesg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nwpnbwyb.html

目  录
来源：http://www.sxryk.cn/163bhetbiul.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163svsxpora.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ptycgefg.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xxbdjueu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xcizlolg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163hydbnbih.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163tgddqrtf.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163xwrbcucy.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dhessmzt.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163tkxenrlw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163asmxtbwl.html


<!-- 参考信息 -->