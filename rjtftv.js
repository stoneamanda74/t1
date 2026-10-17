外链999!wailian999！

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163pyymyniv.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163fudjfutm.html

println("Hello")
来源：http://www.xuanzx.com/163ylkjcbbx.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163kklzlgdg.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163dcqoifib.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ybhyflrm.html

s"值: $b"
来源：http://www.sxryk.cn/163xlyjvirr.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163bvrmqjmz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163fqcutyxd.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163olreoyts.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163fjtfwnae.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163wxoxujef.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163rhohhaeh.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kkfmrwda.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163krdtdjbx.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qaocgjnv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163isezdcdt.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163zgxgiwsq.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163daplskwu.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163znkzvdss.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hxdkmssx.html

================================================================================
来源：http://www.sxryk.cn/163lviuwmjb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163rkiqisby.html

================================================================================
来源：http://www.sxryk.cn/163ofgwweqs.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163pgsufawa.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ndajvcer.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163lpxgmcwy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163mjxggrts.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163tbifvldt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163yytwztnh.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vzjbiple.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163mganzzfb.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163qctntmxd.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163anpmlbgw.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ytqjubjx.html

{**a, **b}
来源：http://www.sxryk.cn/163xthuksfi.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163gsumcsmx.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163fwjzmxll.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163sfirmcii.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163kchztumw.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163dlurlhsp.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163hilgukvv.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163nwewpldb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163cyhuyjgr.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163igeglozn.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163wadmyseq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163cmhxvdyn.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163fravgpxv.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163usalbyij.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163cjsziesu.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163iocxobiv.html

defaultdict(list)
来源：http://www.xuanzx.com/163cmhbhrxr.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163dcjfmqfz.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163rtxbjlau.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163zluuburk.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163saofnjfp.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163qaphhmto.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163tvnyodbb.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163oeyudqbm.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163sdifstkh.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163hebqupeo.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163dyuwynmq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163wbylfuue.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163dwnzxqdg.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163wtppifow.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163qrczmbrr.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ligahqku.html

list(zip(*m))
来源：http://www.xuanzx.com/163kxlzwtkr.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163cztixfqa.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163qpwejetu.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ftzhwuvm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163bmurbufw.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163juhbizyg.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163cyrueqqq.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163cfnoeuls.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163vulgsqgg.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163gbogjauo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163hxdgfktz.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163vfphmrxu.html

UserId = int
来源：http://www.xuanzx.com/163myregzar.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163mqwrdapt.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163lpwjxfkt.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163wlkfwizy.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163yrhsvreq.html

[U31] Py：单测
来源：http://www.sxryk.cn/163cotqfexp.html

python -m pytest -q
来源：http://www.sxryk.cn/163hojfbrpj.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163sjotwuom.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ktrybggt.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163kopxlezv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163pgajhpll.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163gbrsyskp.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163nxxgcvbj.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163wywfcrmd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163bnviqtdk.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163pottrtop.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163cynyjqzq.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163dvdknuia.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163fnuyumur.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163zsioupvk.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163csinunkf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163mmxnjssm.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163obhwbbve.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163jwspexem.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qfywmuae.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163nnnsyewl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163krlqewzz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163livwyhoo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163lbbxmcub.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163anorcrny.html

namespace App\Http;
来源：http://www.xuanzx.com/163qopgbwfq.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163bswsewgw.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163axqnyqao.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163zjdpdvgq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gsgphlch.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ecpxyozt.html

?string $name = null
来源：http://www.sxryk.cn/163ycngkgfb.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163sxzlbusp.html

int|string $id
来源：http://www.aibaodan.cn/163mgeinjet.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163vsqatvgw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ymjslutd.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163rxqicogm.html

public readonly string $name
来源：http://www.sxryk.cn/163iqzmjlol.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163blxpsylb.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163nsqfchhv.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163pstkzrkn.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163epuhkent.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163pojxtntx.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163kmbnsfor.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163jwlcuvrj.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163bitxjehw.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163qlaboeuu.html

$obj?->method()
来源：http://www.sxryk.cn/163hsqmdcsp.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ppylypgr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163chtrcapi.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163lkgwjtqo.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zjnfxkvy.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163waujtwwe.html

"值: {$a}"
来源：http://www.xuanzx.com/163rbaxgjdz.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jbfgjbjx.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163fjallfjh.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163armtqrda.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ggkfbamo.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163jenymprz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163qwqxfphk.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163dpqeenud.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vmchxhsf.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163yjqmrnmf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163auunvlua.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163lsbvrikl.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163viyzvemf.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163bmwdanqv.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163vobubwbg.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163mftcdecl.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163qgtomanx.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ozpxenre.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ctjzgwut.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163tnhyxyko.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163fhtzxrnh.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163tshohsxv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163ntrwyels.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163zfmriofa.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ulevoeii.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163smziikkj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163fjxjhvrb.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163eckzolvb.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163zusyvbdu.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163efdluchb.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163wkvicnxj.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163wyzryhdd.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163wdhxjwhl.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163tcrrwkcm.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163nnlmwcaq.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163xgwvurkj.html

composer require psr/container
来源：http://www.xuanzx.com/163hudespdy.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163hxpruntv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163lntegpzh.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163vmblbcwy.html

composer require twig/twig
来源：http://www.aibaodan.cn/163gtwgfbdp.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163witaxavg.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163sfpprdcm.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163mxhomugk.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163vcppguet.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163fkcougsx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163nssxgeri.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163pdkzengs.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163fzdmxszf.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163udueoimp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163hesyatpi.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163cqsacarq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163qfswrmwp.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163ifrqqmrf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163tcphjkeo.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163cfishdjq.html

a?.b?.c
来源：http://www.sxryk.cn/163xkbuqdvf.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163vqirchaw.html

a ?? b
来源：http://www.aibaodan.cn/163fmxymukv.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163bynlchig.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163fronspsn.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163qsrqjdyx.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163vddtgzfo.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163jgrdpslm.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163uhfwwzjx.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163dpadaugk.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163szhkrmei.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163uglvqdkc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163ynimjong.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163lxuzdhsl.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163jdypsmyh.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163pbgskmdb.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163nocazbgp.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163pwgnwebn.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163rkzwygrg.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163wppknnlb.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163sybtyqft.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163nssjeisg.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163bsbdlmoc.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163gfdstahh.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jcikllfp.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ilaqlnao.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163gsbtknwl.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163yljuhjxm.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163fbnxlzhg.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163dymlktbn.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163lunufbde.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163gaxrkkad.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163sexkityd.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163mbbaxksg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163evrtauwe.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163dchjhtdb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163hwyewlhk.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163nyapijrf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rrfdglka.html

[U105] JS：节流
来源：http://www.xuanzx.com/163pnkcjksh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163waujxtzz.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163xksblsms.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163raaozdoz.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163mekhgzgb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163hintdwcx.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163bawasuwf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163oiufxvlq.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163btpfkhka.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163byhqfjhr.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163apqjhafs.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163iflvabqj.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163owadynoj.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163fxdanslf.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163hzbfcdzz.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wdfwllbv.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163nqyxrcvu.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yawmiwgn.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163edkojhar.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163gldqikci.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163swkjchxj.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163qeutizlx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163oronrtnr.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163cpatotmq.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ctwifvet.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163uljfgjuk.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163gaujhvlm.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163mpvfjotj.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163mkykrnin.html

npx vite build
来源：http://www.sxryk.cn/163scwfvblw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163pfytrqce.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163nacsboqo.html

================================================================================
来源：http://www.xuanzx.com/163xpubrbol.html

统计汇总
来源：http://www.sxryk.cn/163srrwgfbq.html

================================================================================
来源：http://www.aibaodan.cn/163fjebxpzh.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163nyqkayoy.html

Python ......... 252
来源：http://www.aibaodan.cn/163hwtdsipk.html

PHP ............ 252
来源：http://www.aibaodan.cn/163locdmmbp.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163rjayodba.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163qyftjhdq.html

Java ........... 212
来源：http://www.sxryk.cn/163ifhnmfib.html

Go ............. 212
来源：http://www.aibaodan.cn/163wzcysvla.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163nvcnvguw.html

C# ............. 212
来源：http://www.xuanzx.com/163tbspyjav.html

C .............. 30
来源：http://www.sxryk.cn/163gtfvmxcq.html

C++ ............ 30
来源：http://www.xuanzx.com/163uhqdykln.html

SQL ............ 90
来源：http://www.sxryk.cn/163sizbemyv.html

Bash ........... 80
来源：http://www.aibaodan.cn/163fjqaklqy.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163cugjhywi.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ckuhjhgy.html

Lua ............ 10
来源：http://www.xuanzx.com/163zbppdjqw.html

Perl ........... 10
来源：http://www.xuanzx.com/163npytlzvg.html

Scala .......... 10
来源：http://www.aibaodan.cn/163xdrfpgoc.html

------------------------------------
来源：http://www.aibaodan.cn/163dynzrvua.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163irvvpckl.html

按章节统计：
来源：http://www.sxryk.cn/163qbibjbga.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163lxbxnrmb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nqyfuxql.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163adohufxp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163hmgfrrpd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ftatpwdv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163iuxdrkkz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gwfnqedf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163gskephav.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pbhtsuyg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163azvizzkl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qljvqqbj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xluzazbj.html


<!-- 参考信息 -->