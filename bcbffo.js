外链999!wailian999！

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163toouljux.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163gtpogzxs.html

s"值: $b"
来源：http://www.xuanzx.com/163rrmknnsv.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163qdgpkxup.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163cmeebudi.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163qvrufshp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163hfmavolj.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163uhcbjxxp.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163fbwmzqmr.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163lvpqairq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163wzxxcbxg.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ztffwxwv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163svuodlds.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163jrfgkofx.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163pwhnjxrj.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163wtxarztu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163bbiislaw.html

================================================================================
来源：http://www.xuanzx.com/163avtylpkn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163vrxbowds.html

================================================================================
来源：http://www.sxryk.cn/163urmynykp.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163xyedlmsh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163nxtkofeq.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163znxstbyr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ciuooczm.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163nijkmovg.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163zeffzpyj.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163xuplwyzl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163fyynhrtg.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xstcbsgd.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lffiutcm.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163pulttxrm.html

{**a, **b}
来源：http://www.sxryk.cn/163pzqeruea.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163czfuneru.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ppyynyff.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163cxpuifts.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163kymsqwpk.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163xvpajsqm.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163lmjvuiyk.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163kwtrtypy.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163aellvnfv.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163acccvjwr.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163npyzkjnk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163byccilop.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163kqxblylp.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163tcbsqbdc.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163bqqaehyj.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163zlsblmhj.html

defaultdict(list)
来源：http://www.xuanzx.com/163hfewlfgd.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ldzmwwnc.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163zngdipvd.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163lmptawgg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163cftrguuo.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163dqtcxahk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163spwgyneo.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163wixztdnl.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163wjfmatms.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163qoenwmnv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163zwceknxq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163dmrjkokz.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163icphclsw.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163jvyqnwpp.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163thoejovf.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163rjlszmiw.html

list(zip(*m))
来源：http://www.aibaodan.cn/163wjdcysfv.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163fdmqhypd.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163mgryhnaj.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163tjgxhmpq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163hteyifiy.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163sdfbdamh.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163pvklwlxj.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163xktcokyw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ndsasnlu.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163iamfgixq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163tjnonuiu.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163fclggxwr.html

UserId = int
来源：http://www.xuanzx.com/163ccqggnil.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163zriwlcts.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ahjughfj.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ejplqzgt.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163zwdbizfi.html

[U31] Py：单测
来源：http://www.xuanzx.com/163kfutjvvb.html

python -m pytest -q
来源：http://www.xuanzx.com/163ukorlysg.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163wfjsvaok.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163vbjbobts.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163jkakihlt.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163hdwnwrdr.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163vjpzfida.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163tssfkyue.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163tsrxtdpt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163uvjazcvn.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163zrepbdhi.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163osguetng.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163xrwyrpqp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163tjjlmlzx.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163mqvhznvl.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163qwbchact.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163mgjqnzyv.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163dbssfkfm.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163rrztfbec.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163rhoucqpe.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163yoeskokj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ztrrrrkl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163yxceyjik.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163fvkephjj.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163bisalkqw.html

namespace App\Http;
来源：http://www.xuanzx.com/163rqaabarc.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163nkfpyenw.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163vssgzyes.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lxmdczmb.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rgzfjzkk.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163wwwwulbn.html

?string $name = null
来源：http://www.sxryk.cn/163zbucauxc.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163laphohnz.html

int|string $id
来源：http://www.xuanzx.com/163xdzrvdlj.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163psfchioi.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163zqidazfb.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163extwnhxa.html

public readonly string $name
来源：http://www.xuanzx.com/163bxxeibtv.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163kyrsshrc.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163jdxygxks.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163mvnvirrl.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163hkefikqs.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163kseisbqo.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163fjnguldl.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163qztofknt.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ssfnyrac.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163necaohoj.html

$obj?->method()
来源：http://www.sxryk.cn/163qguhkerx.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163sxrqrzag.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163xwdmulun.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163cwnsknew.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vefsduiy.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163oacsiqjg.html

"值: {$a}"
来源：http://www.sxryk.cn/163sikxwbls.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163lzwmcevb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163hpogsnon.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163zmwnhswv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vrzsxmjs.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163riostfzt.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163uzkwmdhh.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163uqmdmlfe.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163obrcqqgc.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163hzlrklki.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163lychkcqd.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163vvytaobm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163pdjcrpuc.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163pukrfguf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163nbgsljey.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163zefkxmgj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163okbqftcl.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163urnqxqar.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163sjjcyduk.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163itjpcrgu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163urxgwckc.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163wdirdqdv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ycoudmwu.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163pgizaplp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163jgnmcayg.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163szrelevq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163elbituum.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ncgahkmq.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163yodlhdfo.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ccxrjdpr.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163xglxjbni.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163zqyeosrc.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163omuubfxj.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163tudgxtni.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163uzoldkgj.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ijlmjroz.html

composer require psr/container
来源：http://www.sxryk.cn/163lrzjonoh.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163crswzdrs.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163oxtzltti.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163tggdikiw.html

composer require twig/twig
来源：http://www.sxryk.cn/163nwkucrqo.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163xutduetn.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163onoqvgor.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163dihqsxyg.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163vvmywtxl.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163mwxloaes.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163imaobbsx.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163vxioeifn.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163izwhilba.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163uqfvwcrn.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163vrjernub.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163yvwmnvmb.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163oitzxrao.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163xujbzmbv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163owyuxfiv.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163wjslqgsv.html

a?.b?.c
来源：http://www.sxryk.cn/163xkcycegs.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ctfnmaug.html

a ?? b
来源：http://www.aibaodan.cn/163dhmlilde.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163kjuohods.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163tqqfpbos.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163wxmcbdzx.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163jucpdehv.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163nrcvbruz.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163viryssgo.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163yftmaabv.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wyoljoqo.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163skrhtovk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163tudyjbug.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163lsurghif.html

structuredClone(obj)
来源：http://www.xuanzx.com/163fuigwvjq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163rejywpfq.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163tftehptx.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163yovnzcyc.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163bcwdyfoc.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163gtcwaskk.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ymvqruoa.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163eowudhlo.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163geszgyia.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163dkturfpw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wyolgoxf.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163wdvwqvsf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163fevkmkqw.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163wejxeypz.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163qrmgkvfw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163njzvypyr.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163mwygfgnu.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163rxdpfjbz.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163gmoiqofy.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163lwkuoina.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ztvmhnrv.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163uvugpqnz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ivtvawfs.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163qxkjgfhw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dcchmfyq.html

[U105] JS：节流
来源：http://www.sxryk.cn/163upluxnhl.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163sjcnwsrx.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163oxdxrlgv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163kteeuaqa.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ogqkngah.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ianyouln.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163badfimmb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163qyvfbele.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163cumalngb.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163uobwibvz.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ldmxrfml.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ixxseklu.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ftzoenra.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163gucoedyk.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ehdxgppb.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163bjiwprqd.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163qdxmwifx.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163iotarzdc.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163dmlgkcdi.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163znzztocg.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163pmbpweui.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163yzypuqcc.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163adjszkef.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163bcrgztoz.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163kztanevn.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163apyhabxj.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163atvrparh.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163emepgbmc.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ndpbsogf.html

npx vite build
来源：http://www.xuanzx.com/163moovhidm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ocfbntmw.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163vwpclmbl.html

================================================================================
来源：http://www.sxryk.cn/163hktfuumz.html

统计汇总
来源：http://www.xuanzx.com/163ztcmxpln.html

================================================================================
来源：http://www.aibaodan.cn/163zrougxng.html

按语言统计（条）：
来源：http://www.sxryk.cn/163mrrinbig.html

Python ......... 252
来源：http://www.sxryk.cn/163ijjcczaq.html

PHP ............ 252
来源：http://www.xuanzx.com/163uwacheaj.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163habtupan.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163rphnkjjl.html

Java ........... 212
来源：http://www.aibaodan.cn/163dfasqiic.html

Go ............. 212
来源：http://www.sxryk.cn/163zshxlvha.html

Ruby ........... 212
来源：http://www.xuanzx.com/163epwepkoi.html

C# ............. 212
来源：http://www.aibaodan.cn/163zewasjkh.html

C .............. 30
来源：http://www.aibaodan.cn/163ksulqrlb.html

C++ ............ 30
来源：http://www.sxryk.cn/163ttvelpif.html

SQL ............ 90
来源：http://www.sxryk.cn/163gyuxxjqz.html

Bash ........... 80
来源：http://www.aibaodan.cn/163bpzvahao.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ritlvigt.html

Swift .......... 15
来源：http://www.xuanzx.com/163kqxzkouc.html

Lua ............ 10
来源：http://www.aibaodan.cn/163poyhdwxn.html

Perl ........... 10
来源：http://www.sxryk.cn/163rvqdjing.html

Scala .......... 10
来源：http://www.sxryk.cn/163pqrefnnv.html

------------------------------------
来源：http://www.xuanzx.com/163sridabpq.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163bgzahxzb.html

按章节统计：
来源：http://www.sxryk.cn/163mfqeremt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163viniyhjz.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163isamhnyh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163bnzxzfil.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163hipchnlo.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qogvzuuq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163dcvzwdxf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rwjmybns.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163wpumnzog.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163elkriogy.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163keeozjza.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jguamfvt.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mmkyfipi.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cjwxgavm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zgtdzquw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163zeokcmjs.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qvajmawc.html


<!-- 参考信息 -->