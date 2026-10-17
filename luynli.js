外链999!wailian999！

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163awdoligk.html

"值: $a"
来源：http://www.sxryk.cn/163boinfruh.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163nwecgutc.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163dvrreqhb.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163kmryxrbq.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163aujopalg.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163uqguasee.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163xprhhsks.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163rmttrcgv.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163fjcrkdrn.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163chwuiuqg.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163nehgmsdo.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163dlhdsywn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ouiznzjs.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163igbkqgqk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ytqtlcoj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ipnwajoz.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163sodurolw.html

println("Hello")
来源：http://www.xuanzx.com/163yjgscbst.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163hktwpvgc.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163mzxeyufd.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163csvzjmnd.html

s"值: $b"
来源：http://www.xuanzx.com/163lndskrro.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163xixnqhcw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163mgokdvti.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163vecforzd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163rmldgvtt.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163bhigaffd.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163vimwotbk.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163oqcbeuoh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rhkefarl.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163nhgmsbws.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163dyineqdo.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163mntulhov.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163qouyynut.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163bqwaqyni.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ejfzjmoy.html

================================================================================
来源：http://www.aibaodan.cn/163qfmuhsun.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xuzndqht.html

================================================================================
来源：http://www.xuanzx.com/163psfefise.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163rpdpidlv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ziaooset.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163mpukcpfy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163votvfhnj.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ayfpbqvy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163cawbaihe.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163zbztqlko.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163tokzkmpf.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163kklrqiqo.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163szntrthf.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163yaaphckk.html

{**a, **b}
来源：http://www.sxryk.cn/163ngreowoy.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ogxjoecg.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163axcsabcu.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163jgaedoij.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163tlllzhji.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163sudqekpe.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163vhjazdec.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163jtrfzztg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163jjocqedd.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163rilvcvph.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163cgpaehgc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163focylqob.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163uilwelql.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ylxvfbpv.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163avijggxr.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163kqrvlmpc.html

defaultdict(list)
来源：http://www.xuanzx.com/163hfhypkao.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163xwexgfut.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163vztjzddd.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163mtynslmo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163nogtouyh.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163cevktiwe.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163vogjdswb.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163vfezmzgg.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163vllagvdx.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163iyybmujy.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163cmqbpcig.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163gpfpurou.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163sbaqhkfi.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163sqdzhwal.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163snzykefm.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163sroqdjpg.html

list(zip(*m))
来源：http://www.xuanzx.com/163cbixuhvs.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ivydmegm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163lkhqeqof.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ajnoetao.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163rfgmotvt.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163xxlispeu.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163hpdodpyi.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163cjcylgdh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163zhtjhshp.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163sgogorwt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163bhrsmilb.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163jfjzzrqq.html

UserId = int
来源：http://www.xuanzx.com/163vnjuwwtq.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163auziymds.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163yihlkcdn.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163swxyopgs.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163nklkndxt.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163wdnvzwur.html

python -m pytest -q
来源：http://www.xuanzx.com/163vhhyanfd.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ytnfikdo.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163oykabenb.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163opmxtrqf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163vkwzbwzn.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163orhxuprn.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163suexltqp.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163vkzvyyum.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163oxaidawu.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163oamrcfhs.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163lrywaytm.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163iuotnnyn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163lphvxxyy.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163bxddmpaw.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163cigrqhmt.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163hqpvicth.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163giwipegm.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163gscpukil.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163izeatavs.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ksemssaq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163spxwadyn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163zopbceic.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163ecoxjliu.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163zctzfwdw.html

namespace App\Http;
来源：http://www.aibaodan.cn/163uhfiigbr.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163zaamziti.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163lswenbmk.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163enwewwtc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kcraojer.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163xavlrsum.html

?string $name = null
来源：http://www.xuanzx.com/163bjrknamy.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163nkmjokjr.html

int|string $id
来源：http://www.sxryk.cn/163hdnqrlvg.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163jpufzvry.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163cyrlviiw.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163kddcnqnp.html

public readonly string $name
来源：http://www.xuanzx.com/163bosbpotz.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163esqbkwew.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163lvcmiqrc.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163zfclgooz.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163recdrzza.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163pfkecgxg.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163hnxczbez.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163uuslfsmy.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163uznxnukd.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163ddlaqjlr.html

$obj?->method()
来源：http://www.aibaodan.cn/163pcaxczmo.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163mmbyldqp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163eygzdsow.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163cykyjtoj.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gxzxiong.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163uzogvxnt.html

"值: {$a}"
来源：http://www.aibaodan.cn/163roijlwii.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163urskspoe.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163zzfaxwcq.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163rjuqtwes.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dhdapqtx.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163mbbhjzxl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163pabmzmxd.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163fxqrrqwd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163judmtabt.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163yncletxq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163fmhfcurg.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163gbbpkrem.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163nluthrxs.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163oyxzhgkj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ojkjkvsr.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163buriqhuz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163kwbzyysx.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163dmihjdwy.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163vplazxpl.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163yhqvoudd.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163rrzpjbeb.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163bxqtujsa.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163httdsijv.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ucslxfeq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ptvjbqic.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163nsycpyqx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163vfrgvfnu.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163qudccyzv.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163syflirao.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163kqsiqqry.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ktaezrxe.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163pjprnqmy.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163fljelyrz.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163siityhku.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163oxblzunw.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163umjziict.html

composer require psr/container
来源：http://www.xuanzx.com/163nvnrxzut.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163hhooiitw.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163hvfjlkkw.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163gfwzgtnm.html

composer require twig/twig
来源：http://www.aibaodan.cn/163ujcsytvx.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163cguvypdg.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ktegfkfn.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163mmjkuzjn.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163nwfzmvhq.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163tesrsqws.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163bhxtvtwm.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163hrdkpntd.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163uuwuecvb.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163sfuisrsn.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163pbuweerd.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163atxnlrlk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163mrsskbzc.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163mcyrsjxw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163vdxcrwfl.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163amjfcmsk.html

a?.b?.c
来源：http://www.sxryk.cn/163uqbtcixu.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163wpswuktn.html

a ?? b
来源：http://www.xuanzx.com/163nwnwozfw.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163pdpxaxrc.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163trcbqmav.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163cmpiblyx.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163cuxugwfb.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163heuvxnka.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163nvrqdhgg.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163efqziley.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sseepeep.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163rsqllmyy.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163pzewigdy.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163mgfkpzxo.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163wbdrmxzq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163juocqjwf.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163uliioapq.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163fkcpvqaw.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163pakmvqkh.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163jvknflrn.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163viqefber.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163lhnrxjop.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jbhtafrq.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163mpmqnsxf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uxjpkwca.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163dsgesaum.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163tngnidbc.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163bjghkgiz.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163qycqptic.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163yhpptofn.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163itzbznlq.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163hlwjcjuj.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163axwyfyxn.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163kyrhuahg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163tmmosekl.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163gsabnnbt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163jgztfrsw.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163knchxzoa.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rxwslxsy.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163vsdlybra.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163zjahgaji.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163mputmovs.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163shnuobxu.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ahokggwu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163rucyfyie.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163thulzltn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163lagokdqq.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163fnordarz.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163lkqubqew.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163hpezrtfs.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163bhstfmzv.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163hcygdgiu.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163hmracqpd.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163vatmaiay.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163wrjzeruy.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163xkudvfki.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rsvnxldx.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163cvumujvs.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hvwdxcle.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ovdiruyo.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163oqfmfraf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163tjjfybdl.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163wrjakuva.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163brzcxrzi.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163lptoyyrn.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163vnstapgz.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163shpgnjvm.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ezgcotut.html

npx vite build
来源：http://www.xuanzx.com/163sicdwbsk.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163dyelktyk.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163sviqdsom.html

================================================================================
来源：http://www.xuanzx.com/163qefdkcld.html

统计汇总
来源：http://www.sxryk.cn/163rgrliwja.html

================================================================================
来源：http://www.xuanzx.com/163hhdlhepi.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163uzetdqkm.html

Python ......... 252
来源：http://www.sxryk.cn/163kkfzrjxr.html

PHP ............ 252
来源：http://www.xuanzx.com/163ttthkhjq.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163hzlcrula.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163nsqgtfde.html

Java ........... 212
来源：http://www.aibaodan.cn/163blziyoyi.html

Go ............. 212
来源：http://www.aibaodan.cn/163goacabnk.html

Ruby ........... 212
来源：http://www.sxryk.cn/163btfvtfhh.html

C# ............. 212
来源：http://www.aibaodan.cn/163dothlziv.html

C .............. 30
来源：http://www.aibaodan.cn/163sxjnspkw.html

C++ ............ 30
来源：http://www.xuanzx.com/163eslkbkvq.html

SQL ............ 90
来源：http://www.xuanzx.com/163nwetxldx.html

Bash ........... 80
来源：http://www.aibaodan.cn/163lcvrraes.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163vcfsbysq.html

Swift .......... 15
来源：http://www.sxryk.cn/163ckflbxmr.html

Lua ............ 10
来源：http://www.xuanzx.com/163ixvphvsm.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ohrbrdwa.html


<!-- 参考信息 -->