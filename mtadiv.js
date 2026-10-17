外链999!wailian999！

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163qoxzwcur.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163mzdcmmcn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163dmabrznj.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163opcqecyk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163hgpdtjfo.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163bggouycw.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163egszneag.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163bfmlpfis.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ifzdhrxv.html

================================================================================
来源：http://www.sxryk.cn/163esclvxzv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ktmfqgel.html

================================================================================
来源：http://www.aibaodan.cn/163okfyepqr.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ogapuhvi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163rsiopvyb.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163zwvxujpp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163lxjqcrby.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163gntvqxvd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ovsahwfq.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vxholvjz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163fafkcyvc.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163krjxfhdq.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ylqccxqa.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163jhoybwkv.html

{**a, **b}
来源：http://www.sxryk.cn/163eqskozwo.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163aznaiiws.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ijqcfqez.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163iwhekoms.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163scazkybp.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163cdszdaeo.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163gdzuynlj.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163xexxuyee.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163jxqoddzx.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163pzqsjdoc.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163jqcymlkv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163bseuoeyk.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ofmkxppk.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ngiefhhs.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163aqaxeott.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ippgscvt.html

defaultdict(list)
来源：http://www.xuanzx.com/163lygrjrwn.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163lbyitaob.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163kofbpqdh.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ejiuhghe.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ylteasry.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163bqfuzzmn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163lonsafsr.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163yemrsaid.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163seadnnin.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163axfzybda.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163txtuxozv.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163shyepstr.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163btkaxkwi.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163kglcbccq.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ofileyac.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ixhkcvjp.html

list(zip(*m))
来源：http://www.sxryk.cn/163pdfolabx.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163xxqrggts.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163zpqfpjuy.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ycysdhtc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163rbqgefot.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163tnfqupyr.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163zkfkwwpn.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163xswycotf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163dgdcurif.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163qspxsjgt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163fwcbryvj.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163gmcnyqqt.html

UserId = int
来源：http://www.xuanzx.com/163zaccfjmu.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163jvvuezse.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163gzyuiaqm.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163skcrvvas.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163vhygzdkm.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163tedzhgqg.html

python -m pytest -q
来源：http://www.sxryk.cn/163tcrlbluc.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163kfkwtfkk.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163pxjymrlj.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163vqxmmmju.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163poeiycgu.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163jvbwwqgn.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163fnymjusf.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163iloalgey.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163gctojlfp.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163zwbucrdp.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163mukaetzq.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163fyajkahf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ogqaldrh.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163kedjluwp.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163spcrugqx.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163gzmiqdxp.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163yuaymhqp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163puoqbpac.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kcaeoqug.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ayugdaee.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163lvmoyurd.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163uiaejnfc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163pxnqseno.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163bkzxwlmu.html

namespace App\Http;
来源：http://www.xuanzx.com/163lgsjdbeo.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163igepwzau.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vadnrrrq.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163khycyrlh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yuchmufs.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163bxtksbdx.html

?string $name = null
来源：http://www.aibaodan.cn/163yhvcvumz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163kylhqhpf.html

int|string $id
来源：http://www.aibaodan.cn/163whyydgxw.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163lwckapta.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163phenwgob.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163tnhxxpux.html

public readonly string $name
来源：http://www.xuanzx.com/163jkewtjkj.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163nxvwkrxw.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163lnsxthzu.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163jbjahkuu.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163nfubdewe.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ojvvidkt.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163gzlmcnln.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ohixfjsf.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163vabegbqe.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163upsszvte.html

$obj?->method()
来源：http://www.xuanzx.com/163dxyeltei.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163elaokpxu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163imfwbyik.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163pgaxemhi.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163uksmmoir.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163hxqedefo.html

"值: {$a}"
来源：http://www.aibaodan.cn/163lknejwnr.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163kbuuyhcn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163kkpsufkf.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163wfhfbtdg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163evvilsua.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163qhybvfbj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163dupispdu.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163pzavpjhq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163pocpwlzj.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163bnbpvjsx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163xkwoygot.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ocjxoyvb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163hzgvzmyh.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163jfmvzkmi.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ufjgfnvh.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163qryvrkqt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163wdpwathc.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163izseszbt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163bpdinrda.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163oykrgqqk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163oaebevgh.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163hzyaqxqa.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163zmtinlob.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163cubfixhf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163sbcwflbd.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163oravgwei.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163qpenkptn.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163sjrirnxp.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163jkedfenh.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163rjmdvmro.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163azlxyzwh.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163twpkxqxr.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163caxjyfkd.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163cezzxiyo.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163qhszzjqc.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ipmbgqvw.html

composer require psr/container
来源：http://www.xuanzx.com/163mfgpvumd.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163nzswigbz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163nvhqdcmo.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163swfntgup.html

composer require twig/twig
来源：http://www.xuanzx.com/163vrgjbnfj.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163sqlhddpm.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163mnobjfcf.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163xtrssigs.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163zdtvnqbj.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163zmvptxuv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163qnfkijyo.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163louzgkhy.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163bcyipkwq.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163gbyrmhti.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163czslaena.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163rbwpfpnx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163umvxsaqq.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ppgrvglk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163aeceuhwq.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163vwzqerle.html

a?.b?.c
来源：http://www.aibaodan.cn/163tuzqkpzy.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163aeyffuav.html

a ?? b
来源：http://www.sxryk.cn/163phvifhlh.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ahwxmuqj.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163xszlnjeo.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163dqonwdqy.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163vpqermww.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163bubwusac.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163hzzpazzh.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163fmrmoayx.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163oikqxpux.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163hfgqdlhh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rmbogvau.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163yfgdglfz.html

structuredClone(obj)
来源：http://www.xuanzx.com/163snlnpqcn.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163vxbxkrsb.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163hhjszgzk.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163gnqavyzd.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163ihlgdvzj.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163dlsuqoar.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163unpdetsv.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163lhlylegp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163exfgvzmd.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ygesyqjb.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nxgjibvs.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163hnjbrsdt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163ymcfbekr.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163zslewrjk.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163adbvgebd.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163kobrjtsc.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163twkrixvo.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163xvzdoguz.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163sgwhblki.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163alrxymme.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163uxduumfr.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163qcfpdywv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163gucrsbor.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163wdzjbunu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163goqkdabl.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163spcazphp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ewcemawo.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163zzuzgfli.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163hyzfeotz.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163uuyoxyhm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163kxwcckab.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163sepqdrfs.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163zlhjrewo.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163gbugqknk.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ptonyvke.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163igtjimyi.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163qjbhmjfn.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163lnyycqfk.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163yxvadijv.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163uvgqrlak.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163uswkmefa.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163wkodxdli.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jiaxtxas.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163hgbekofo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163flnqqcqv.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163livprxpk.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163bsqzbykh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163nivavprz.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163wmvperbr.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163yxstktle.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163belmhssp.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163kxhfbils.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163gmxqhojj.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163bwwfyjzq.html

npx vite build
来源：http://www.sxryk.cn/163povrhzzw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163plyeqkvp.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163fohjrahh.html

================================================================================
来源：http://www.sxryk.cn/163ywoipydk.html

统计汇总
来源：http://www.sxryk.cn/163kvpgogze.html

================================================================================
来源：http://www.sxryk.cn/163emxswtho.html

按语言统计（条）：
来源：http://www.xuanzx.com/163mmczvadq.html

Python ......... 252
来源：http://www.xuanzx.com/163fqlbakjb.html

PHP ............ 252
来源：http://www.xuanzx.com/163jzlpygzd.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163igvcwedm.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163ezuvfqnf.html

Java ........... 212
来源：http://www.sxryk.cn/163ymzrqnqn.html

Go ............. 212
来源：http://www.sxryk.cn/163iaqwhdga.html

Ruby ........... 212
来源：http://www.xuanzx.com/163oqfdcmni.html

C# ............. 212
来源：http://www.aibaodan.cn/163rxmdhqza.html

C .............. 30
来源：http://www.sxryk.cn/163sokjfczv.html

C++ ............ 30
来源：http://www.aibaodan.cn/163mlbhoogr.html

SQL ............ 90
来源：http://www.sxryk.cn/163weluuoaf.html

Bash ........... 80
来源：http://www.xuanzx.com/163gupbqrar.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163jfxucync.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ujdhadfy.html

Lua ............ 10
来源：http://www.aibaodan.cn/163wmxzizwu.html

Perl ........... 10
来源：http://www.xuanzx.com/163clboshkv.html

Scala .......... 10
来源：http://www.sxryk.cn/163hqlcamaj.html

------------------------------------
来源：http://www.aibaodan.cn/163mpqsgrva.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163pkglxera.html

按章节统计：
来源：http://www.sxryk.cn/163hyattvbx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163emjeeryb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163cahgcajl.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163golbtplg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ydjvcnfm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163xcqzozcm.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163txglejwk.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dzrqkirx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ljfrocgh.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dfcwtihc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163sobxgscv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tbktslxb.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nuejovnx.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dkspfptd.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163timbysvy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163fxnouqpe.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hpmrkchi.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163aufggzoj.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163kygvrgqs.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163pgcowpzh.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163gausfiri.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163ygyljzmn.html

------------------------------------
来源：http://www.aibaodan.cn/163ycrokekb.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163rszktfgg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163oyinxnhu.html


<!-- 参考信息 -->