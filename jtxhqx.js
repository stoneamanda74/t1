外链999!wailian999！

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163rltbayeg.html

print "Hello\n";
来源：http://www.xuanzx.com/163wpleyygr.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163lcjkwwax.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163nmwbllwv.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163otjgyvik.html

"值: $a"
来源：http://www.xuanzx.com/163aqxbloud.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163uodcmgnl.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163cquoijpw.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qprlcpsq.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163bihwjhpu.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163mgxlrnid.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163nvffgksw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kistwvnn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163iqueujje.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163bxbrvnsm.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163szeavdcx.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163bkplitfx.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163wrsxuvmm.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163mzfdwkxf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163zoutxyfx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163hrnzlqto.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163vyluhtkr.html

println("Hello")
来源：http://www.sxryk.cn/163gzglwcwc.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163uighzzqq.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qlenbuyk.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163nrblkbrd.html

s"值: $b"
来源：http://www.xuanzx.com/163kprkqplv.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ybpiclrd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163xlkwrxnc.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163xkuxcwdq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ucsxzjyy.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163xeitxjxx.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163aaxrecha.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163odhqzgja.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163drgrrwgd.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163hahjrntk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163dhirffed.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163fyhogict.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163wxfyhdzi.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163qaehgqij.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163xkbnmzak.html

================================================================================
来源：http://www.xuanzx.com/163lwjksddy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163tljsnxmw.html

================================================================================
来源：http://www.xuanzx.com/163tmzgdzsi.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163maczdyal.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163fqapfwud.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163gsjkzgsy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163wdsinqva.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163wmsyvirp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163cwnavbsq.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163vugncwkz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163lbjasmwt.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163smysfwck.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lybscxsy.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163gzxdtnoj.html

{**a, **b}
来源：http://www.sxryk.cn/163olofnxhe.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163lnkzhvyg.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163yregmxom.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163oxgplfon.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163dsdkxxnd.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163wryivyld.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ubtlcpbb.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163oooxmikt.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163hziojctx.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163levhlldm.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163zejxjzxz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163oxftmmci.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163bzyqzywm.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163exjdnwos.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163myvhdsca.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163vkpbpayz.html

defaultdict(list)
来源：http://www.sxryk.cn/163vnqixmmk.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163tfuqnfkl.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ujgtgqgi.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163otrlsthp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163cadbtbnv.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163uybpymfr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163yxcivxhe.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ginqrnpi.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163atnqumax.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163xhysyzxx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163gnorruiv.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163ldddqrwr.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163qssbeqdg.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163pmwvyuqq.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163uzaggtgg.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163pnhpgpay.html

list(zip(*m))
来源：http://www.aibaodan.cn/163dtvijhmb.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163hnuiqjkx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163vrjvkaal.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163zeyfshwa.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163fgswzstc.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163vndwdpin.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ovrphvgj.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163nlzyjkfk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163emealjgp.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163rdtioeqy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163uogqtnwu.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163feefpkwb.html

UserId = int
来源：http://www.xuanzx.com/163huldcvrl.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163nkvpjfjy.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163nrotadtw.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163lwamomrj.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163pcrwlxcr.html

[U31] Py：单测
来源：http://www.xuanzx.com/163opjaaxbn.html

python -m pytest -q
来源：http://www.aibaodan.cn/163afwhnxvj.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163rltnzelx.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163rsdjquoq.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163mnodfsds.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163cgbkyhtk.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163byeppzep.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163jqcrqtez.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163sktxjnpm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163nxvtpovu.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163kmjkgevt.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163zmhacmfv.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163kcaoctdh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163xbljfvtk.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163lirwlwmk.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163uqjprhck.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163apguwuxr.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163kjqkwloc.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163dsmylyxe.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163pjwyjoxt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163bkknzepe.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163rvimkhth.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163ithnmbkt.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ibiwuxur.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163srtrpehg.html

namespace App\Http;
来源：http://www.sxryk.cn/163dqulhahx.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163bpatocvq.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163lqkovimz.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163omzazptf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dogyvpsi.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163rzfnqoma.html

?string $name = null
来源：http://www.sxryk.cn/163hrezhhfa.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ccliowut.html

int|string $id
来源：http://www.sxryk.cn/163fslrrjah.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163sfdvmbfm.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163tbnipfub.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163rtgagzke.html

public readonly string $name
来源：http://www.sxryk.cn/163ccmmbdli.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163qytsdywp.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163oddoghfo.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163udqqalpy.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163dicxiopc.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163zxjixnin.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163jgybmdvj.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163xphcpxqe.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ojdzytvr.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163sctdegit.html

$obj?->method()
来源：http://www.aibaodan.cn/163arpjyyfo.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163icydaecu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163uyqfmsea.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163lfxzejep.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pxxenlcz.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163mvarrvyc.html

"值: {$a}"
来源：http://www.sxryk.cn/163xongoqpu.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163khcqaesc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163attredfb.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ryptlfgb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mtueteqj.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ttxprpgb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163kjwpnpjk.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163syfiydwy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ckktjptx.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163tnomzniv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163oepfnvjp.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163gelbiizc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163txvhomri.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163iudmmcsa.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163qqbecyek.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163dbbzarmb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163njaupacp.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163eocaadfz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ojttguwv.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163corskehj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163krtqaplr.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163zpgxvasi.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ykcprppf.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163vguqkmdr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163fnjzpvhg.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163cvbzumvm.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163nmkaakkj.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163fjlzfgbn.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163skssdrel.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163simpfecm.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ckskowqo.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163nwbskksm.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163srhgpgef.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163akfnaisy.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ajxamwhe.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163fvnltljh.html

composer require psr/container
来源：http://www.aibaodan.cn/163xsjajwjx.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163vyveorvi.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163fplyjynd.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163syiwavqs.html

composer require twig/twig
来源：http://www.sxryk.cn/163ybexlykj.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163tflaabzc.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163vwyzqhox.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163bhltbwky.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163dlkjycro.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163usmgdlvn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163prwfahur.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163mdwqmqcx.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163bztbguuy.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163rmgmyejx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163lfxyzgav.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163jtmjfaiy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163njuyokbc.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163quqmphcw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163cyvalpvu.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163fgeygwlo.html

a?.b?.c
来源：http://www.xuanzx.com/163fzhnryzj.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163svkfbuns.html

a ?? b
来源：http://www.xuanzx.com/163uyfsngvh.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163vgfrtapi.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163jiwsfift.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163lxycsvrz.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163xyajsqme.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163jvijxufy.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163qkyudxsl.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163buqnshpl.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163trxrumgp.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163hyzsbikf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ksjxactm.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ncfegdhf.html

structuredClone(obj)
来源：http://www.xuanzx.com/163nkkipocc.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163youzlafs.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163znmgooyi.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163folggyod.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163mnprichp.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163pdnzzqpi.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163eejmvtye.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163rzobhivb.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163sthfxfzz.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163oynseubo.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gcneiwtq.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163wdbgxiqw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163frqciajj.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163cdjfltlv.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163drklycbe.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163moqpwzdt.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163bdhuwlmk.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163erojhuqr.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vapilgnd.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163penplvtf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ndxaskaw.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ukdmvdtg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163dkvqcvjt.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163qjdkxrlz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mnrruqbu.html

[U105] JS：节流
来源：http://www.xuanzx.com/163uarwvyqm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163hzjtgchw.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163azkvihpr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ufgnitjx.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163mufoabtg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163iaatmuas.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163tsdquplj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163rtoasizm.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163rwmkkpew.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163glbrwnxr.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163trspazkv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163hdflxyct.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163qxmhfnxw.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163yrzrkbqk.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163dehdgdfq.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163yzyxufox.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163jjhcmdal.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163huxwuwrm.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163mllpwxvf.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fojytsvf.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163yfwwdphc.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163zghqpwaq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163lbmhbpzj.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163pbghatjx.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163kdprmxkc.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163tqrpjiky.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163bhabnnlc.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163gmqffbiw.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163xpblzzbw.html

npx vite build
来源：http://www.xuanzx.com/163tlqnxcat.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ajxpkkyr.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163sulpyxzl.html

================================================================================
来源：http://www.xuanzx.com/163nseaircf.html

统计汇总
来源：http://www.sxryk.cn/163zeafiqfd.html

================================================================================
来源：http://www.sxryk.cn/163cukgcfrs.html

按语言统计（条）：
来源：http://www.xuanzx.com/163mekkeldd.html

Python ......... 252
来源：http://www.sxryk.cn/163svkezaac.html

PHP ............ 252
来源：http://www.aibaodan.cn/163pvvbclff.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163qobxdlww.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163wpodfkrk.html

Java ........... 212
来源：http://www.xuanzx.com/163wosrrgdy.html

Go ............. 212
来源：http://www.aibaodan.cn/163eetcxhyf.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163bcwynknw.html

C# ............. 212
来源：http://www.xuanzx.com/163ngnetupf.html

C .............. 30
来源：http://www.xuanzx.com/163deoxgrhb.html

C++ ............ 30
来源：http://www.sxryk.cn/163yljqxfto.html

SQL ............ 90
来源：http://www.sxryk.cn/163moepwxxx.html

Bash ........... 80
来源：http://www.xuanzx.com/163irjqhlkj.html


<!-- 参考信息 -->