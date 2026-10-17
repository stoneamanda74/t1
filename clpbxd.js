外链999!wailian999！

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163hzytjrtx.html

print "Hello\n";
来源：http://www.aibaodan.cn/163yiecxnzk.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163gjncfcqo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163sjjajtnj.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163arpucrtp.html

"值: $a"
来源：http://www.xuanzx.com/163mqnyzlcd.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163zerpinkc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163nlipcuxq.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163pairpnww.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fhfwihen.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163srjkaynn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163odmbyjvp.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ejfwymts.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163zjeuwdfs.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163rhinjusv.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163nihhbuxx.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163mlbwfjqu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163gdtmenqo.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qjhmbjjn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163sbafzewo.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163peytdaea.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163duwnwivr.html

println("Hello")
来源：http://www.aibaodan.cn/163dvbbhigz.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163gskdqzmi.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163gigykmsf.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163mqapemgg.html

s"值: $b"
来源：http://www.sxryk.cn/163xbwrhcjf.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163jgofrtsd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163qmpvabwr.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163patntnpk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ptrvcplc.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163cvhmijzm.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163roebtngw.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163fxzekbcc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163kwrlnlxw.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ppujutij.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163bbioutup.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163aunlyaty.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163tgdhmtpx.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163gyrzaiwt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163jcubrjsg.html

================================================================================
来源：http://www.aibaodan.cn/163diuqjxet.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ozeeuchs.html

================================================================================
来源：http://www.aibaodan.cn/163alsjwbhc.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163hlhvgffv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163xsqltzqc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163fspakjol.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163nszmjovj.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hzpvmdgl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163wwljxuxj.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163acbxkbph.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163kvlifiga.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163nwxdxjdj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ouutawhf.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163dvjrkpaa.html

{**a, **b}
来源：http://www.aibaodan.cn/163mhzcunbw.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163dkbvkcuc.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163mdfasknd.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kjtcemay.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163loynkopf.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163rscmuvvf.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ghubnrcr.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163phznlngx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163pttwxekv.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163qkzafiga.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163vjfssynv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163avrhwdol.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163vhsgwccy.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163zpjvtxwe.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163rybochls.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163riotpdui.html

defaultdict(list)
来源：http://www.xuanzx.com/163crgspbdq.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163pkxsimfy.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163wrozxusb.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163xdlcxdzg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163vcovtmfs.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163mfnxeqnp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163yfnikgvp.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163oqfjvhcv.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163izbwlpfv.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163tynfigkj.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163wunwrztf.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jqragsxm.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163inehhzcp.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163nrecwapd.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163osghsmjj.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163izqsfpak.html

list(zip(*m))
来源：http://www.aibaodan.cn/163amhhmlux.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163rkisusgi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163lwejcrrv.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163jhywdtbf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163qdqvnfud.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163dqndwxph.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163pmiagunj.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163zcyjachh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163mvybutld.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ufmezdwf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163qshptezw.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163mmidvmzi.html

UserId = int
来源：http://www.aibaodan.cn/163iwzezxro.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163esuqivtk.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ggnbwxoi.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163efskokib.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163nxjgurvp.html

[U31] Py：单测
来源：http://www.xuanzx.com/163mywygidl.html

python -m pytest -q
来源：http://www.aibaodan.cn/163lxwjqmoz.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163znixpril.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163dbzjeuac.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ismvnqje.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163orodspaq.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163wxteypmj.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163roqbgbft.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163yygyoori.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ntzgnpnk.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ihvsogqb.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163cltgnykh.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163rttqbbch.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ympjqwqs.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163pjrypmre.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163pihkdfwh.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163dihzkdmb.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163dxfmuvwd.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163qfxgxslk.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ypteucyg.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163rvadriiu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ofupkzik.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163mpcckfer.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rjitkgcx.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163saewddtl.html

namespace App\Http;
来源：http://www.aibaodan.cn/163dsrpsseu.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163gteurqtw.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163tftmzyjd.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163mxxxgwwv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kictsrqn.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163dfhzrmwu.html

?string $name = null
来源：http://www.sxryk.cn/163wisvuxtb.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163sxbslzaq.html

int|string $id
来源：http://www.aibaodan.cn/163gmkuaqfr.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ofokfeoj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ejzodqks.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163sagqtrgq.html

public readonly string $name
来源：http://www.sxryk.cn/163vffyczsv.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163cqtzquve.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163qccwnxhj.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163rhejkxap.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163whhtiiqr.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163barpskyk.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163fjymkjeb.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163axuzywet.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163btfyeufn.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163joolixlz.html

$obj?->method()
来源：http://www.sxryk.cn/163eprjqhze.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163kdfvnmfx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163audxtctt.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163drcwmubn.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163uvdkpmxo.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163kriqpvbw.html

"值: {$a}"
来源：http://www.aibaodan.cn/163phjsurnt.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163vhvskovl.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163naefhwle.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163sfutrnbl.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163kgogrzok.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163vgnynlqs.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ygnyjvml.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163vhlziote.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jqpmtxlj.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ohvxdkib.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163pjxhrelq.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ipmvaldm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163cvyvfdqy.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163doirqexd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163lkwgkhtw.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163gjzeezdl.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163hmatagnx.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163vzmvgqce.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163nrwfagka.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163gnxbncuu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163rqdhidib.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163pqucspjn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163kgbbnilm.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ouqfqgke.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163mmzqqtus.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163xgbwycip.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163fiwgcxcp.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163atnzuitj.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163swvrrrko.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163nenevwkb.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163zckrkblf.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163ivmkvanb.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163pspgkvbu.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ctqlaosb.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163tvbfgssr.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163invkcrxa.html

composer require psr/container
来源：http://www.xuanzx.com/163vfxfbrza.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163latmwtlh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ooqztpjb.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163wyumdkdk.html

composer require twig/twig
来源：http://www.xuanzx.com/163riwqmqyf.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ryjdswdu.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ibfeffll.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163nepsjjsc.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ecvycpxz.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163tlsceboh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163hadermog.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163rsxzvbxm.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163unluskxn.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163vqcqorwh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ybsvwyup.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ncpjgqef.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163haxhgndc.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163uyximyqu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163wcvhsmch.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163fzovitpd.html

a?.b?.c
来源：http://www.aibaodan.cn/163eabpghti.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163mnaeyenq.html

a ?? b
来源：http://www.sxryk.cn/163tzfebqat.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163rvpyhsto.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163wvfgybqk.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163jytacexy.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163fhqkhycb.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ivlvwwca.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163kdcpjmxh.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163bgbonfys.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163buopjhnv.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163bhplcjhc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163bifsjxyh.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163ykzqqxql.html

structuredClone(obj)
来源：http://www.sxryk.cn/163pctyozdf.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163tqhuahvy.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163ajxvspvu.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163tbrnqinm.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163nvkebczm.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163tinwfmkk.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ehbxlgkm.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163yycgizrl.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163pbswhgbc.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163bwypeedq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xofjpxnm.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163allbyior.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163aoyupbwy.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163pzcxsyuz.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163bpnpivum.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163pvcgkhne.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163jtbkrpsu.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163opxmggxx.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163yinovrxd.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163kvozbwqk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163jwfoqgix.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163hnuaqzyh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163fcpymigj.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163ugjvnhrt.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163akuxigzc.html

[U105] JS：节流
来源：http://www.xuanzx.com/163bkfmlyoj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163xzutsxrv.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163osnoezrm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163qgwvfldd.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163uekhsmvi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163qlwexnmi.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163daayfpjo.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163oeacxqfz.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163oxuxtdmn.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ctmmrksx.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163wcqysciv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163zlwejrza.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163wglsmflv.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163pyudjbow.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163hapjnrbd.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jepjphoo.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163gvficefb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163azfnpxot.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163yjgkmrgb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163kxvbxnfx.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163uhfxdjch.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163htqypnet.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163azelrhob.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163cwucewcg.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163tiaxgdlr.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163vnhsguqw.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163bbxbqwmz.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163mfiszbgz.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163cmetrcgb.html

npx vite build
来源：http://www.aibaodan.cn/163minbfglb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163zrmrrmal.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163njkvsqzl.html

================================================================================
来源：http://www.sxryk.cn/163okoxpjcx.html

统计汇总
来源：http://www.aibaodan.cn/163tqupllet.html

================================================================================
来源：http://www.sxryk.cn/163ggkurluo.html

按语言统计（条）：
来源：http://www.sxryk.cn/163saykjztv.html

Python ......... 252
来源：http://www.xuanzx.com/163ayxolxje.html

PHP ............ 252
来源：http://www.sxryk.cn/163ybnuljqu.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ovxxfapc.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163jpuvhfuu.html

Java ........... 212
来源：http://www.xuanzx.com/163ckgmflgd.html

Go ............. 212
来源：http://www.aibaodan.cn/163adgamtst.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163nypdpkrv.html

C# ............. 212
来源：http://www.aibaodan.cn/163glmhmcnm.html

C .............. 30
来源：http://www.sxryk.cn/163mpjjalrq.html

C++ ............ 30
来源：http://www.xuanzx.com/163vxubgael.html

SQL ............ 90
来源：http://www.aibaodan.cn/163zdvhksfp.html

Bash ........... 80
来源：http://www.xuanzx.com/163dytwfwds.html


<!-- 参考信息 -->