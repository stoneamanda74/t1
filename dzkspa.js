外链999!wailian999！

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ulnfzmck.html

================================================================================
来源：http://www.aibaodan.cn/163vhfowvdi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vlcaipuk.html

================================================================================
来源：http://www.sxryk.cn/163npkqgida.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163fgrxnpmh.html

println("Hello")
来源：http://www.xuanzx.com/163emdciulu.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ncqihuol.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163nssacvbb.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163klabpfax.html

"值: $b"
来源：http://www.xuanzx.com/163rolxwfbf.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163vcdupsvk.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163cafejjol.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163vsivhumh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163brrqfzfc.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163hfanpveg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163meftwgwm.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163xdecirpv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163nkuoxeun.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163rnjlbrks.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163huzlzhfx.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163vapgidze.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163qaqqodfz.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ayjtkfin.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ahqbgppj.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ezyvftzj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163zilamsgw.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163fpmunpaz.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163xghdiitx.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163qxlzcquu.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163drefdtpn.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163yrkhidcf.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163vsdswngr.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163wpnuapio.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163hbtbeiuv.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163wndiszfy.html

print("Hello")
来源：http://www.aibaodan.cn/163qynymwqo.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163frydsomw.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163qonlvbhv.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qyojpkys.html

"值: \(b)"
来源：http://www.aibaodan.cn/163mtvkumex.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163cyqfipbo.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163fkkgroqq.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163zgsznfbw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163itivcmqo.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163vqfyvqra.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163viuemgee.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163bxenmhhb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163qvkcghss.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163vcsvkubw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163xdwzsssl.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163wrubijur.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163obpoqjgc.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ndqmvszo.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163oqeefkmu.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163foeizxyq.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163wunkaezo.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163bfhjtrpm.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ebnjvbys.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163kxdcxhal.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ppucleew.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163pjntzaer.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163poezdbnp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163vklqtigr.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163kcpshwco.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163wlqjtuay.html

print("Hello")
来源：http://www.xuanzx.com/163hgwuvdue.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163gouhifjq.html

local a = 1
来源：http://www.xuanzx.com/163istxarde.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163kswpmlti.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ofrlgldh.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163gozudwjq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vjngmqgi.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163rzwvdwcr.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163toyrnrjg.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163koqfbznb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163qfuzwtxk.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163noyoiuih.html

"a" .. "b"
来源：http://www.aibaodan.cn/163eujrsbgn.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163jfzjajvm.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163xivadepm.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ecpnygnd.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163nvneywoy.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163tfsdmmeb.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163vhswcmej.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163xpvjqxsd.html

print "Hello\n";
来源：http://www.aibaodan.cn/163fdsjuflx.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163xbccasdv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163mwzatbjh.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163cnlamsob.html

"值: $a"
来源：http://www.aibaodan.cn/163krgyedvl.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163sbcruahk.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mnixnvmo.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163jmpgbjjf.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163iqyzqqcc.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ixpdyzoi.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163neglxpqh.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163arzmseuj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163dmsstcat.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163iotxuige.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163pbmfxqxq.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163afwttqjv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163acatxobn.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163fuypwqyt.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163pgqblsyl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163pzycpmsk.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163gkwprqvj.html

println("Hello")
来源：http://www.xuanzx.com/163cnqilktb.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163njhbrmhd.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163vjhfmdkd.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163qazautca.html

s"值: $b"
来源：http://www.aibaodan.cn/163qmsokkni.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ardwllgc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163lbcvsepu.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163giycvmxt.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163gaouphnd.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163pbfzlpes.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163mlqxtatq.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163hwumhnbs.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163cwaappsi.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vvjktocb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163pzpyshad.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ckbrnbpl.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163rhgoxjsp.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163trqskwmj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163qofyjmgx.html

================================================================================
来源：http://www.sxryk.cn/163gjreyvkg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xjsyzcct.html

================================================================================
来源：http://www.aibaodan.cn/163ibcmojte.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163cvbthehz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ivaudzbw.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163gpvweoua.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163htkgzrkk.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ifcpmbra.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163geytzaxv.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ybqxkgtx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163jqrbssko.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163zbzohnyt.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163kffuohvv.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163dgastsgb.html

{**a, **b}
来源：http://www.sxryk.cn/163ucrxjkkb.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163tdtjykbp.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163grcpdhkw.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ulmrtpha.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163nsbswtzw.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163byhzfzmz.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163zrfwjmzx.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163grhzigng.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163tlucyfsj.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163gjvhuhvm.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163dzasxcwp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163hvhtzzgi.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163yeravleq.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163gojirapv.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163yccsqpld.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163lgznedtu.html

defaultdict(list)
来源：http://www.sxryk.cn/163zjaomztv.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163yguouibw.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163tayjrzdg.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163bojxtvqo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163igfzyepv.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163inxdzhcj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163iihqqiiy.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163envogtol.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163dhjeycdm.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163kcvtfjvf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ygofodwn.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163weokzwdk.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163bkcsiehz.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ciwjgrro.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163dtubxfyx.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163miuuuiri.html

list(zip(*m))
来源：http://www.sxryk.cn/163lpvdgshx.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163lqpgfoda.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163lrrzksxq.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163vqqkuqby.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163jraowqgp.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163bsvonhcy.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163xzajcgay.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163tzssijdd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163kwravtez.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163fsaehptw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163wlpdlqzh.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163oyylqhfy.html

UserId = int
来源：http://www.aibaodan.cn/163yvjjfamu.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163gnwkdbex.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163lmtyemqx.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163fmgtexkv.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ndxwijyx.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163ihjcxwkg.html

python -m pytest -q
来源：http://www.sxryk.cn/163islbkvzs.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163bdunzhig.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163vxkzfnks.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163jewcnxya.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163zuypyuia.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163sqahzzrj.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163jrbftlao.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ulljfwdz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163pvqvahmp.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163hjzwyyrk.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163yfyndvis.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163wdbvvrpu.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ambswhkq.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163sdbczbjc.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163apfoojwx.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163tszythzb.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163yfuusinj.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163dfnchjnc.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163szisebyb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163xcuxqbys.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163lnoyscvz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163falevbmz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163jrapkqoc.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163fkrllnvc.html

namespace App\Http;
来源：http://www.sxryk.cn/163tfjxxllt.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ghmmwvlk.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163jrkuvxhi.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163scirjvxw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163iahnfqah.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163jchzzdxu.html

?string $name = null
来源：http://www.sxryk.cn/163pykbjcna.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163fiipvmcg.html

int|string $id
来源：http://www.aibaodan.cn/163xgmzqlvs.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163rmsrkfcf.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163osyssflt.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163skxgthnh.html

public readonly string $name
来源：http://www.sxryk.cn/163cyvssfye.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163nahfkmxh.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163uchtalnn.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ernzescj.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163nphpkxqg.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ibixjbka.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163fmwpxicx.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163yftaflww.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ucskvchg.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163hdvlonaq.html

$obj?->method()
来源：http://www.xuanzx.com/163wvzylnxl.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163zuftlqjo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163nxinkhaf.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163oesopgfu.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pzvzalgy.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163defwhnyw.html

"值: {$a}"
来源：http://www.sxryk.cn/163qbmnjcqg.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jglbgmoz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163suukhnco.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163uhxzeisx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163liexbgag.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163radjdjmj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163yefxanda.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163mpujgvad.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hrqcvhlu.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163jntsjggb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163qenlzmtk.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ioanccuq.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ckgtdobl.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163hbzdpoje.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163qzzncvzb.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163jegrmveu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163qhlicskq.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163vtujesjz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163dqawdatr.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163vuxoylax.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163dtppecvm.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163uitudemx.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163otshceti.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163khspqzko.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163wjfeaugb.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163omiscppt.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ujpckgis.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qekkzval.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163cxmsplmq.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ypgyppxr.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163kuiudvgl.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163syqiqrwq.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163gpvfahbr.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163hvwworjz.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ebujyftl.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163ihhlebih.html

composer require psr/container
来源：http://www.xuanzx.com/163obobgqug.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163gwfrdyjt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163rjakjldn.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163iuxlktsp.html

composer require twig/twig
来源：http://www.aibaodan.cn/163gbocudtf.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163tbfheefc.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163cjxizvki.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163insqfube.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163kbynqvfd.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163fowlmisa.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163rqpnmzpp.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163isfxaned.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163squzxtmp.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163aekqkzmm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ombthttv.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163buoolfnp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163kndhapku.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163brsltotb.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163xbsdsxsc.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163aazfezwt.html

a?.b?.c
来源：http://www.xuanzx.com/163envykygs.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163feofwumz.html

a ?? b
来源：http://www.sxryk.cn/163cidlhpxy.html


<!-- 参考信息 -->