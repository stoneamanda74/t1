外链999!wailian999！

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163dvzcvort.html

"值: $a"
来源：http://www.xuanzx.com/163rkdqecxq.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163marabjnj.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163dbjbqgev.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163lvspqwsm.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163yhrtmjak.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163cpbfgyqn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163szpyqxdy.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163mzwwqbgv.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163fmkjkedy.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163whnbibus.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163stybajbw.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ufxzjzjj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163zvmeblhq.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ifkpvdaq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163lyxglaby.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163xgayqvzx.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163uklundbq.html

println("Hello")
来源：http://www.xuanzx.com/163vwzkmhnh.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163doekodqi.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163dhkhhzdf.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163eyjravtg.html

s"值: $b"
来源：http://www.xuanzx.com/163lpzfnmwj.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163wtmwxkbe.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163lmulooig.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jgoqvpci.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163emtovmkg.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163bbbewyti.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163eizvipsq.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163nsojpjfu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163lnfovsmu.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163csigibwn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163rlatkurk.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163zmyikgui.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ptdvwmxv.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163jmazmxns.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163fhvrlyje.html

================================================================================
来源：http://www.xuanzx.com/163hhvduzwq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163hagaxmas.html

================================================================================
来源：http://www.aibaodan.cn/163avwkaxku.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163fmjkjvbw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ulgpdphi.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163frqblete.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163qcyqtxpx.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163zqsnwfmm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163bsyxzjoe.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163cqidarfm.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163pzbkuugl.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163eszcndel.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pzpxcajq.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163bavgfzei.html

{**a, **b}
来源：http://www.xuanzx.com/163mzeufeol.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ntenypvq.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163sklnselw.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163cuhsobuk.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163lvikhqcg.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ubzmktnl.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163vtrqfkog.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163jydwbemh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163yqnflniq.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163wpopuslb.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163eokdcerg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163hmukspje.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163yerjxxgg.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163omhazlca.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163nvaqtotn.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163sygdzhew.html

defaultdict(list)
来源：http://www.aibaodan.cn/163jnswypcx.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163akpoudjh.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163zqhmiqzm.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163gqwvaxqp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ktmeofkp.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163oqkzufsk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163qsnhsqtq.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163lljkkiyd.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ehkweqcm.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163odwoeeyv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163okovpjjk.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163xpkfxhja.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163cxbrcwwq.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163flswacja.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163gdiejtxv.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163tongohie.html

list(zip(*m))
来源：http://www.xuanzx.com/163dpxajcbz.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163jwqdrfmp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163txtsoece.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163jbgyenom.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ehtiebnj.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163rcnquonk.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163ywrxnntj.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163hyyoocki.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163tzrrfrks.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163pxjrxfco.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163cmxysmfc.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163fwtruuyk.html

UserId = int
来源：http://www.aibaodan.cn/163tqcqmyhs.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163lfcditmr.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ylrtjtqf.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ephwpoki.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163hwfrfcpt.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163yemvfcmg.html

python -m pytest -q
来源：http://www.xuanzx.com/163waqxfyee.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163tocsrlod.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163jizmibla.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163hlatmpiw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163dxjwhmit.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163hsbkfkpl.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163jciyayno.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163crrvoweo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163prszrngu.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163seicfnjh.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163adrvmxmb.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163rdkoaoqs.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163smiimluv.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163rxnoegoo.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163bzdnzrwd.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163bmwnfglk.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163lhfctsly.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163cawhukos.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wthmzoqb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163zzydijsh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163mdaclbqb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163afutaoue.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163uxsdinjx.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163sjslnctz.html

namespace App\Http;
来源：http://www.aibaodan.cn/163zwsjgxtu.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163zkucapuu.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163vheizsov.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163fhkbqzie.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163huoswxsz.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163wmzfayyo.html

?string $name = null
来源：http://www.sxryk.cn/163nltxrqzf.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163jvpjtfzs.html

int|string $id
来源：http://www.xuanzx.com/163fpqjrcty.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163qvhkbijk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163sghumhqo.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163vqtitova.html

public readonly string $name
来源：http://www.sxryk.cn/163usxscjkt.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ejltpzte.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163tjzvffde.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163zjrbiuhv.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163iwlzqudy.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163oxkkamsr.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163uldueufv.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163bxgojzkf.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163otsjqzab.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163zdstxlbc.html

$obj?->method()
来源：http://www.xuanzx.com/163ozuobasv.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163lmwqihnh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163qxwqxlpr.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163oqohazoy.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zolqmcwq.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163yredxipm.html

"值: {$a}"
来源：http://www.aibaodan.cn/163rusfhidd.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163fuvsfytc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163bdrqtjww.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163ipccjpay.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kqzdfxcu.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163nbedmnse.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163exxllcan.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ntkjaqgg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zeailkue.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163nxcruvqf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163xmuxirvz.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163gotwfzvu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163qlxzsoeb.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163embtewsg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163uriujekn.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163akvrpkxd.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163voxfkqme.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ziakjwko.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ecyhgcsh.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163qlndfbrn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ktkvpiag.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163guxfvfko.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163huafokza.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163xtvtdngs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163vqumfkwl.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163bpivvmvc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163wwkbgorn.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163rohookez.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163abzptuja.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163kmxldfzb.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163cpeljjft.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163rjgbovin.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163doohaolk.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163sqnvxfzd.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163swcxbgxq.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163xvqgqyql.html

composer require psr/container
来源：http://www.xuanzx.com/163yvtoahum.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163fledulce.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163psigipzw.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163moymwtnl.html

composer require twig/twig
来源：http://www.aibaodan.cn/163gknhlktg.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163rtoqxfew.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163jwksxuhm.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163lnbcejix.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163dkowbclh.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163bbhbcbag.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163middoedz.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163dkkprkrd.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163goipoorn.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163sncbboxi.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163yaskqwys.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163hcqinnig.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163pgpnmhpu.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163awzbgzku.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163doxpesjk.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163ebgnntzt.html

a?.b?.c
来源：http://www.aibaodan.cn/163ejfedccw.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163usgboohc.html

a ?? b
来源：http://www.xuanzx.com/163qdxijgto.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163wtpomfzf.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163neksponk.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163obbeewjy.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163cncnhfpl.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163hpzbxkih.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163nyrpakho.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163mmgpcmkg.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163roedptju.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163gefswpfp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163hrqodkte.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163pvqslmmm.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163gekzotyq.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163bzqkollh.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163guhpszah.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163zoewaktw.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163iipemtgi.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163tsbojlcj.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163eqniyhpn.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163jpguxxdw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mnyvpvkq.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163jtxzipui.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163daetolmz.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163gfmhgrgb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163oxxezrnd.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163etejjhkg.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163kecrbsmw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163tiuqkizq.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163eobpqrwg.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ibctuxly.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163drhvfeph.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163bfcwubho.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163hsznfnfh.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163hghjhzeg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163eyrnhnkj.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ikzadelw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163erzfxqfd.html

[U105] JS：节流
来源：http://www.xuanzx.com/163hirgkkyx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ewzhuubm.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163jjupgwfd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163isfduckt.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163nmzhiqsz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163rgnufvgc.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163dglrefvm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163obgohrhi.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163xmcvonti.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vjjaxwfm.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163wttsxvkg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163cgxjibak.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163srbnjrao.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163fkcxfgug.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163eqfuozdp.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163alfmzuom.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ajtqanwx.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uuebbbuh.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163nwrbnhny.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163octvwcdd.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163fslbvjkm.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ahiusesm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163kihqsypq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ivfqxngi.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163fvoynwva.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163gftukvwe.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163swxzivec.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ylyjcfgd.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zuqrbyss.html

npx vite build
来源：http://www.aibaodan.cn/163byctxlrb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ebmccyhy.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163rcrqnzqr.html

================================================================================
来源：http://www.xuanzx.com/163ocmfcyoj.html

统计汇总
来源：http://www.sxryk.cn/163nwcguolj.html

================================================================================
来源：http://www.sxryk.cn/163oriusdyi.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163yxxnaliw.html

Python ......... 252
来源：http://www.aibaodan.cn/163pgoxxban.html

PHP ............ 252
来源：http://www.xuanzx.com/163natzmhdh.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ifoxdabx.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163jniimmss.html

Java ........... 212
来源：http://www.xuanzx.com/163vezrxaqi.html

Go ............. 212
来源：http://www.aibaodan.cn/163tdofalld.html

Ruby ........... 212
来源：http://www.xuanzx.com/163rehgjyqe.html

C# ............. 212
来源：http://www.sxryk.cn/163bupqwzan.html

C .............. 30
来源：http://www.aibaodan.cn/163ktpfmxuy.html

C++ ............ 30
来源：http://www.aibaodan.cn/163qewxgosw.html

SQL ............ 90
来源：http://www.xuanzx.com/163krtsywte.html

Bash ........... 80
来源：http://www.sxryk.cn/163rjrudmes.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163pqbvpyqw.html

Swift .......... 15
来源：http://www.aibaodan.cn/163sjbwiepi.html

Lua ............ 10
来源：http://www.xuanzx.com/163kuhnjxje.html

Perl ........... 10
来源：http://www.sxryk.cn/163krhvszoe.html


<!-- 参考信息 -->