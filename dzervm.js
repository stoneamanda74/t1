外链999!wailian999！

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163wfkgkull.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163dfmnjdsd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163cmmymvpr.html

[S56] C++：optional
来源：http://www.xuanzx.com/163gnwpezzm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163uxrtbihp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163josllukz.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163pcyuhxuc.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163qmvuslli.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163sepxalsd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163mymggdxy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163tzziqcqe.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163rxrgrvlj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163nkqjvndq.html

================================================================================
来源：http://www.sxryk.cn/163gneeydnp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tumppjpn.html

================================================================================
来源：http://www.aibaodan.cn/163gxbmsunn.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163trkysiov.html

println("Hello")
来源：http://www.xuanzx.com/163loljxvdd.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163tbxxxtdx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zzewfvsw.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163bfkzjkxu.html

"值: $b"
来源：http://www.sxryk.cn/163qxgijuyc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163yjfbgtja.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163wasrsuog.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163vvhrkqnr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163sikkaxor.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163mejtbtnd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163oboidubz.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163fybzwtgz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163dkhsdggy.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163uuthrfrs.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163owonxvhn.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163vxkxblni.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163abcjqrgw.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163mnviqzlg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163jzfgocgf.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163xyuhjdzl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163lxyecwqb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163goliyuhz.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163jniknhnn.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163szghhpku.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163dbhdhroe.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ttimbwqf.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163uqbwcbqk.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163cybmkfat.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163lbuqzugl.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163mfmqlrjo.html

print("Hello")
来源：http://www.aibaodan.cn/163astmudib.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ptdgxcjq.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163bpupshqd.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163xcbtpmer.html

"值: \(b)"
来源：http://www.sxryk.cn/163biuoczmd.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163qpvsopdu.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163eardsvym.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163tmnqzxnk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163nvkdhzbk.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163xifuszxh.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ymhwvpad.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163eydrkqqg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163lzeftrnd.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163fliruesc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ohpbwcxu.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163cvgouawi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163llsdingy.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163kiiwmwck.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163tohxdowk.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163pfyktkoy.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163altvnqmk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163trlkfpaj.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163puolckjs.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ajnqreya.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jmlexdow.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163tvvugyby.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163kldhzbnx.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163cenqlnul.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163vmueweyj.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163xbhiqucu.html

print("Hello")
来源：http://www.sxryk.cn/163jjbiejpx.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163meyhdfvd.html

local a = 1
来源：http://www.aibaodan.cn/163umigurqw.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163tflbjowm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163pxgzjewh.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163sbwpopwc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163tatsrpfq.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163esntndwc.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163oddguunk.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163dyzfausj.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163sixmlgec.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163vxofqhey.html

"a" .. "b"
来源：http://www.xuanzx.com/163creomyex.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ckacgoyz.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qifkpsxh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163zskntnas.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163voqzkkqm.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163jntcezox.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163fpojqddy.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163xqfrutkw.html

print "Hello\n";
来源：http://www.xuanzx.com/163xmtqhvcy.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163gmaemjrv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163qjjnrwed.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163dztsazxs.html

"值: $a"
来源：http://www.xuanzx.com/163nifllkev.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163yivexpkk.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163kmyhxlwx.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163rbfgnvou.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163jvejhalf.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163zkmhgcfe.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163wvicpzlg.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163jwqkamcv.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163hiqcwvsi.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xpjthozl.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163paysuowx.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163gusctfuw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hulisvpu.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163lfzdcudm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163duqsptzl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163iazjsbsj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163mnkvwovg.html

println("Hello")
来源：http://www.sxryk.cn/163xsabroqa.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163nyswcawr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ygvydclf.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163bybvpwyu.html

s"值: $b"
来源：http://www.xuanzx.com/163hbpjtgnr.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163udfgnxjq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163kxrmmbkv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163rqqbrdri.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163pshodrii.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163trehamje.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163fmfrbycu.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163ibxcrwba.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ggwvjnio.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vezawicn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163jvfyvfgc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163mdvkvdxq.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163eaojprmw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163mkncuueq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163meqrivdi.html

================================================================================
来源：http://www.xuanzx.com/163okkcikse.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jeucajig.html

================================================================================
来源：http://www.xuanzx.com/163futjbwnd.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ienclacl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163qfpkawgw.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163jjkulcmu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163melizduc.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ymrvqaea.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163vpmfingv.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163zyptjblp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163rrumnwni.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jfnrsptj.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163nkpymrpj.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163cubhjnru.html

{**a, **b}
来源：http://www.aibaodan.cn/163vbfagxmp.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163smokrvhw.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163jkpfhelt.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163vltgkadk.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163fuyzzphg.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163szcrlifw.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hknghzch.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163umzersvi.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163fexmlavc.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163buiokshx.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163tdybtcmy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163cetgnmxy.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ozylsyet.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163dkjdhqet.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163weqtrrvo.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163rrcovaeo.html

defaultdict(list)
来源：http://www.xuanzx.com/163nykeffya.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163uucehrgg.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163yqckfjfc.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ktnikpev.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163yeezghfc.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163utbfblri.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163mazkqldi.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163pslfqxsy.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163blcvvcak.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163qbvmmizm.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163zrsrsrrr.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163xrwqysnm.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163oeqkfbky.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163tzfuypyy.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ssokppea.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163fppvtbbh.html

list(zip(*m))
来源：http://www.aibaodan.cn/163bpeegawu.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163dzehhgum.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163itagcnws.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163xfvyrycq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163bzdozwyh.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163vsjabbwf.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163nofywpfd.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163qxtlxnem.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163zaqstwgf.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163gotxovmd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163jxejbixe.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163draawocf.html

UserId = int
来源：http://www.aibaodan.cn/163kzkqmrpx.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163uimkznrx.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163upuesnar.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163qhbdjqyq.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163imjtmivn.html

[U31] Py：单测
来源：http://www.sxryk.cn/163yalayvtk.html

python -m pytest -q
来源：http://www.xuanzx.com/163aiqqluir.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163nlvwtnkz.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163xfqgnmfx.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163hayxdopy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163fogcznyq.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163segibpfe.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163xfgovldz.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163iyktmcri.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163jdrvhjzg.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163jmfybwcv.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163gxhdvlfp.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163cirfzxif.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163zattzbzx.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163tfstfsha.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163nfqdjznj.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163lmouhcnw.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163eoupqwtd.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163punfsmap.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163cqjzlhcf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163sovlphtd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163vplkajnu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163sddpxpxn.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163ndxvqnbt.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163tupxewqu.html

namespace App\Http;
来源：http://www.xuanzx.com/163zjggtsxq.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163qricyrst.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163dbshuwkf.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ctviobcc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fsjrxjfh.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163coalalsa.html

?string $name = null
来源：http://www.xuanzx.com/163qhagermv.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163opuevlkd.html

int|string $id
来源：http://www.xuanzx.com/163ylxvmxcd.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163vyqzrpom.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163unizrytk.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163jdddjhlv.html

public readonly string $name
来源：http://www.xuanzx.com/163guqyvvjc.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163cmhibtju.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163isapafpn.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163bjkwggiz.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163cmtrqgqj.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163pfkzvnjp.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163czgoacdm.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163aelampbf.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163vfluleiq.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163itpqfjpi.html

$obj?->method()
来源：http://www.xuanzx.com/163emwfblhr.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ybrfxfbt.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163jfjqvgeu.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163mxsivgfp.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lqgokhhw.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163mlytjvxe.html

"值: {$a}"
来源：http://www.sxryk.cn/163drfiocxn.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163gynckcpv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163nlebhngx.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163kxpiaosy.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163rdluiarb.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163nuqvytmu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163lrvkhcxa.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163qgzhdbag.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163gyevwjwc.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ujaycwyi.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163qwaiofxh.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163vbfchkys.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163kpxvzxww.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163imnvqunu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163xrspdizq.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163hyjmztzw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163kckcpdzw.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163evdsrarz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163yhbrfqyg.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163pomfvbnh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163haritvsh.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163vwjtmgdp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163bwxceoip.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163iwpngvbv.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163jkodtjcm.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163wvazweov.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163lsdciqgs.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163dovraxry.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163thzwdnxf.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163puyetxvs.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163zmxlmufx.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163vpdhbisa.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163pemlowjh.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163pmxcewgv.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163kctcffhp.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163vdnkvshx.html

composer require psr/container
来源：http://www.sxryk.cn/163ssprgowl.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163djmoycry.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163sdkzwtsq.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163wsyxyoew.html

composer require twig/twig
来源：http://www.aibaodan.cn/163moqvmauz.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163qvmchjqf.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163mkpixhni.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163agpbxokr.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163gobfhiil.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163lojmbuwn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ygfzupzw.html


<!-- 参考信息 -->