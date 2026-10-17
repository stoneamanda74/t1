外链999!wailian999！

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ornwtcse.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163uxxepppy.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163bnlrvlzo.html

{**a, **b}
来源：http://www.sxryk.cn/163fxluhgrt.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ipisaibc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wyebhglm.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163sntzcerl.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163vdlbyugp.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163lptlvjwe.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163bzgpmuet.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163tzypvgnt.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163vwmzncqi.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ajoxodpv.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ahovohzn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163zsokpzky.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163oastxswn.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163qeqzmicf.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163epkbagmg.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163phgvexgh.html

defaultdict(list)
来源：http://www.xuanzx.com/163zsjruibo.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163hyhfboex.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163krizpfuk.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163bwbuihuw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ryjxyjjk.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163zxbphunf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163vofvxkns.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163knsrlufi.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163avcaazbn.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ovyjjftw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163mhcswwne.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163enxuuvsi.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163wetbuizz.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163rylsrvaq.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163hvlmugqr.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163bfqbgbgw.html

list(zip(*m))
来源：http://www.xuanzx.com/163uuoymzmx.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163dayqptsx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163cwfzzsdk.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163tcudtyrc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ttmeonxa.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163uvsaanys.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163qofeckow.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163cwojtozt.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163bjryvzws.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ipnbzqwk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163bnrskevl.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163dvdppyrj.html

UserId = int
来源：http://www.aibaodan.cn/163oftcwlpr.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163jynzhcld.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163isizziqa.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163evrbnqyf.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163imjuiuep.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163evfsurho.html

python -m pytest -q
来源：http://www.sxryk.cn/163bohliwrd.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163uwjnbtjc.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163vxylslmq.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qbdxysox.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163iykjycpq.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163padyvhcb.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163szdbaklr.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163gvovvnry.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163inwpcfny.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ggcnicqb.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163fhdyrtqz.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163oypmczgg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163xzgjkaai.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163jvlccowh.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163kbgogtgf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163vmeuttje.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163umzueitu.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163bkruqrvs.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163wxojvzzm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163aawexzjj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163qnyaonvw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ffqcmidk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163jobwvwge.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163aznrlfji.html

namespace App\Http;
来源：http://www.xuanzx.com/163eoylbiou.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163dtaqcoud.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163cttllvle.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163embfhphm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163blkumxhs.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163itmztvov.html

?string $name = null
来源：http://www.aibaodan.cn/163vqdvforz.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163dtcxbwfk.html

int|string $id
来源：http://www.sxryk.cn/163prkrjqbt.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163nfvatedz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163tdzvpzmk.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163zqaoupfq.html

public readonly string $name
来源：http://www.aibaodan.cn/163sybwpmva.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163plpoorzy.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163dzwqpwfg.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163hzungpte.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163fnyrpxqm.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163gcernyli.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163pxqlexum.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163rwoojytm.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163aivbgnfw.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163fyprcljx.html

$obj?->method()
来源：http://www.sxryk.cn/163nnfpgygt.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163kyiwfdyc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163vqtgfjxw.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163njphlrcn.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163opnkbrgr.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163khqqnqgq.html

"值: {$a}"
来源：http://www.aibaodan.cn/163hnzhlvol.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163micnfzlu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163saqallps.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163qnehadpf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163iersqzxp.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xebszydw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163hwalggsu.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163mewkbmxh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163cipnsvbu.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163emqblzsb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163mmkhbwqp.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163aypsqcfn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163jlcbopyb.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163wvugfpdu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163yezqjczl.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163yhklnctn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163kjvesiim.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163vvaknduy.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163jsffnkag.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163qgbngqsz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163lsarbiyq.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163nvukhfpt.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163sipuhtzm.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163fpvxflqd.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ooliidrb.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163rphhuiuo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163vmsuknhk.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163okhmqtvq.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163cqzbrpnk.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163mtczqqvl.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163qawatxmn.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163cacqsrmr.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ndzhxrcs.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163eovajxrg.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163vjanyaqr.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163pqkcmypu.html

composer require psr/container
来源：http://www.xuanzx.com/163heamkila.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ggofgkvs.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163hqexbxze.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163zirlvnje.html

composer require twig/twig
来源：http://www.sxryk.cn/163wwbrtavs.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163xovyohtq.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163yzuzdcos.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163rfdiwwtn.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163bgrxjhyn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163jsmggpqn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163rqdqcdvc.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163mcqyhxao.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163zzfhsqsf.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163cmbrrgwz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ptouigho.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163xbfwuwfr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ezymabaf.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163weshwyyt.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163lmpnbhnu.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163esrwebsz.html

a?.b?.c
来源：http://www.aibaodan.cn/163qvmpbako.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ubaizwzt.html

a ?? b
来源：http://www.sxryk.cn/163ayuobrjo.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163twezcgwd.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ocssqpcg.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163zefvfrzc.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163gegumdgz.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ehqdukdo.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163wlolgpfo.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163rpwiqceu.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gxafaejm.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163ngcmmske.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163gxkgwdma.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163snoaquov.html

structuredClone(obj)
来源：http://www.xuanzx.com/163nqavqfgs.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163zvhpmxus.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163pvaywvvo.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163exxbfvmm.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163xtesssfj.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163fpuczfsh.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ttseaquh.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163aorggrpz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fnfgbikg.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163pztgzajx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wwewepnh.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163vhsxaoeg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163lzbqnagm.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163lbbkwlgl.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163neuocmix.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163vxkxmzcw.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163jhfmimdk.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163ruyjqwji.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163rqbcqrad.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163fdjbzprk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163hlzcpwrx.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163futknglr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163bjvnqbrk.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163qjbytnfu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163sfdpsyzj.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163hjnovhue.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163lptpthum.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163fzsjofnu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163saoydjva.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163pfzoysso.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163gddsmwca.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163kkdnplkh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163bbnnxtmv.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163iosalnhd.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163uolpdvpk.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163eyllnpsc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163zkyktchh.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163tfcwtdpm.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163aelgfswb.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163llhagujp.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163euvimquc.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163maiuufsy.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163clezimno.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163jhazpyec.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163psnwpgtb.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163uatxkczv.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163vknofoff.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163npbemzrh.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163abqovykw.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163rlnrxxxj.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163dugbbkyl.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163dyotebyo.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163pajwjohx.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163gbbwrtjh.html

npx vite build
来源：http://www.xuanzx.com/163slxdzepi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163eqylxdiq.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163remuzfkr.html

================================================================================
来源：http://www.aibaodan.cn/163anwcxqqn.html

统计汇总
来源：http://www.aibaodan.cn/163ypqphfby.html

================================================================================
来源：http://www.sxryk.cn/163cfvskhex.html

按语言统计（条）：
来源：http://www.xuanzx.com/163tmktxfvo.html

Python ......... 252
来源：http://www.xuanzx.com/163glwehpxx.html

PHP ............ 252
来源：http://www.sxryk.cn/163jupyhatx.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163bcjtcdsg.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163mldjruzl.html

Java ........... 212
来源：http://www.xuanzx.com/163yaevnndd.html

Go ............. 212
来源：http://www.sxryk.cn/163cswqqgfn.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ysoqqnda.html

C# ............. 212
来源：http://www.xuanzx.com/163axopfjrg.html

C .............. 30
来源：http://www.sxryk.cn/163icyrshpm.html

C++ ............ 30
来源：http://www.aibaodan.cn/163wmpvhqpq.html

SQL ............ 90
来源：http://www.aibaodan.cn/163yhnpxlax.html

Bash ........... 80
来源：http://www.xuanzx.com/163muefella.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ltfabbbh.html

Swift .......... 15
来源：http://www.xuanzx.com/163idsqtdya.html

Lua ............ 10
来源：http://www.aibaodan.cn/163gkurgzpj.html

Perl ........... 10
来源：http://www.sxryk.cn/163tumavzna.html

Scala .......... 10
来源：http://www.sxryk.cn/163bvytbfgn.html

------------------------------------
来源：http://www.xuanzx.com/163obpjuilz.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163genfuasx.html

按章节统计：
来源：http://www.xuanzx.com/163htazemgj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163kurrgcdb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tmhepcxy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163unbywcpy.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163bxwwsyww.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163mwnoixad.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163wshfbjje.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hjtdhubd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163cwuvfsyp.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vccddmgu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163huhmbmdy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hfkphufb.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163loqhqcjl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dpackfzm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163irozsvoi.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163nbmbljjt.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nicwdnmc.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163kwsldxng.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ojulixnm.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163bgphhjkz.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163liwyexij.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163xisxhlym.html

------------------------------------
来源：http://www.aibaodan.cn/163lrkyzyjl.html

合计                                  2106 条
来源：http://www.sxryk.cn/163iayekhie.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bhsjelkq.html

使用提醒
来源：http://www.xuanzx.com/163kozherof.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163srroghpm.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163ieoohmmx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163auwkejwv.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163wryncbzo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163nvpzkxkr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163cnhootig.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163heyfniwb.html

================================================================================
来源：http://www.aibaodan.cn/163rorpdsef.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163btfntyhc.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163zdknlhmx.html

================================================================================
来源：http://www.xuanzx.com/163vyyiffld.html

【收录内容】
来源：http://www.sxryk.cn/163konabrpj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163nbthtapf.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163wtcxhlmg.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163gkdzhypv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163oziubvek.html

【使用说明】
来源：http://www.sxryk.cn/163jkdktwum.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163jifaiofl.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163lwiizwzm.html


<!-- 参考信息 -->