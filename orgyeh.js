外链999!wailian999！

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163rahtzpct.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163uaedmtfc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163fpuzuwtk.html

[S56] C++：optional
来源：http://www.xuanzx.com/163nwaxolot.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163unxybylx.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qggckkwn.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ewoboycn.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163kibbrltm.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163uxoqvyps.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ezyslmop.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163dqaeatdd.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163epmftepq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ldmnxusm.html

================================================================================
来源：http://www.sxryk.cn/163frbdtsrw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ukzdlmye.html

================================================================================
来源：http://www.aibaodan.cn/163upirqfqp.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163wxegsdfy.html

println("Hello")
来源：http://www.aibaodan.cn/163sayebxie.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163vaxeiixc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163cytgxlow.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163adbzypce.html

"值: $b"
来源：http://www.aibaodan.cn/163ihmnnjnw.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163szjjljwd.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jjwyvwbb.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163huuklgpq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163xnuzwlmx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163dhnqwwnp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163vlznarbl.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163egzmdqgg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ftrviwok.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163joiuyitq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163mvlusxlb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163luaktuum.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163yguxbffe.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163eikvsahp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hnqunpru.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163okhkzqtc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163rqxbahah.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163tuevslqk.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163xmvhrpam.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163agmgxqvf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163myyiicem.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163rowdvypk.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163fxkcbaaf.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163sogguypy.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163tlcllpuk.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163qkhfhmpl.html

print("Hello")
来源：http://www.xuanzx.com/163ibcdwqoi.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163tasitahc.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163bwhlqegr.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163yrcucyhh.html

"值: \(b)"
来源：http://www.xuanzx.com/163tzhxganw.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163iqdoweym.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ghvizord.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163oqjnaqyl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163elasgeqz.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163lgxmcltm.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163mecgxkhd.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163bwiywlga.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163vqkrqpge.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163rhgonrqf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163sovishla.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163zzmrpfru.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163aztobtoi.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163tsdfefgv.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lzigydem.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163exoqnewl.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163krhqbdyx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ynckphdf.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ihiqqyev.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163htmrnypt.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163cbzdprwb.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163auodxvbf.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163tujrtkqy.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163tbjvrtgp.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163jzezjfrz.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163wqjoxoyi.html

print("Hello")
来源：http://www.xuanzx.com/163jmfgjfxr.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163pvowxhjd.html

local a = 1
来源：http://www.xuanzx.com/163ntbyfweh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163nzwzunzv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163gadzlurf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163asiujzvb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163pkpudrjr.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163gepfqgdg.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163noyszgpv.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163unbjzkxj.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163qmaxulqy.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163lwueibyw.html

"a" .. "b"
来源：http://www.xuanzx.com/163uvlfczyj.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163wtfpktls.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163berhmmvm.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163mornovdf.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163jtalmvsc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163irzsxgtg.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163cghexchl.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163gjjioagq.html

print "Hello\n";
来源：http://www.sxryk.cn/163ydmphumm.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163bommxpff.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163tzdrxdyy.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163hjscdlla.html

"值: $a"
来源：http://www.aibaodan.cn/163gwjhegki.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163bwfyuuwk.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163uwevltko.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163mxkyettx.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163uqquonsj.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163gvkdpydq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163bbbqnwok.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163orzmtjgf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163rsfhhhzg.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ugikdnpy.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163hpphyusm.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ikeoyjlu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163rsgtkpos.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163yjmkxocj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ggkepyzl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163zfiuvqzj.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163rscczpxm.html

println("Hello")
来源：http://www.xuanzx.com/163ngoctayw.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163vyoondpa.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163mhngrpcp.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163mvrcsssq.html

s"值: $b"
来源：http://www.sxryk.cn/163cnedyihs.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ukacoxvn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163xdnempjo.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163iizbvdal.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ecoiwpbe.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163abtdccbq.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163mveedcap.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163qwdduhxg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163gpkuavbl.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163sngyaxtw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163dgrprskc.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163mkxybnta.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163xzikopkm.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163oyvctasr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qqtdgiyn.html

================================================================================
来源：http://www.xuanzx.com/163cttfdfew.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163gqbpmako.html

================================================================================
来源：http://www.sxryk.cn/163mvtkgulf.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163mivmxnxr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163xkgoqacm.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163zmmqthin.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163gncilwwg.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163edewppof.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163lyvljxtw.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163aappapck.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163iazniqqf.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ryxwsqsn.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zqyunfgn.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163fxktwhjq.html

{**a, **b}
来源：http://www.xuanzx.com/163ypkzymjd.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163xysdduau.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163dxmtigxg.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163rkbbebpm.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163eajpnmnq.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163vtwqmrzl.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163vnpqyiwm.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163widekcwr.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163xdmsnjif.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163vqdwbzii.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163vtjklrdy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163crbyibac.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163fufnheqj.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163cbwhcsnk.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163wkenasma.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163bniuscnu.html

defaultdict(list)
来源：http://www.sxryk.cn/163nngkrabp.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163impnpuok.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ahchqunz.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163srnuoszu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163befhnsza.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163psgsgaco.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163puynbmvd.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163evapckbm.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ztyojxsk.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163vwnzdxxs.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163egiejhuq.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163qejlkauu.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163gxbqpuzi.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163detqjdei.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163zqlbmziy.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ufheokuk.html

list(zip(*m))
来源：http://www.xuanzx.com/163pkzjhqij.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163bndggaot.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163igmagwcq.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163cvsjdswb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163hcodvrrj.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163yqcpcgkk.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163vvficwkq.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163liocvjrb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163edyhdirw.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163klhxwcqx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163jilzkyhh.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163kbjpofjb.html

UserId = int
来源：http://www.aibaodan.cn/163iwfyurub.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163mjzjsefk.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163xfwptyla.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163nknuhqge.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163sjvuqlzy.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163eeiqjltg.html

python -m pytest -q
来源：http://www.sxryk.cn/163wzeybfzq.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163fussrkvm.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163lweydulu.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163omedbbpv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163klbyyeim.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ivcnczdl.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ylavwqjy.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163wboqexdu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163yzvkzcsh.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163frlvzlol.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163kswkrhcy.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163btpuphmw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ucrammuq.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163vseftufp.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163vslwelth.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163tygqclbs.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163jbdissdr.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163vsfsnxde.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gejhimvx.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163iunirvqh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ykfhvcyc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163yatcgdvg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163udhqvvso.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163lltijtnj.html

namespace App\Http;
来源：http://www.sxryk.cn/163jkpifunt.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163zlcwekzr.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163zdgskgwj.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163oadqtclf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bdqnrnwd.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163elyhrfdi.html

?string $name = null
来源：http://www.xuanzx.com/163eaitgrog.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163uwfbxzhp.html

int|string $id
来源：http://www.aibaodan.cn/163nanwrach.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ncoogvnd.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163bgcafoob.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ucmziavz.html

public readonly string $name
来源：http://www.aibaodan.cn/163nyvuwhhx.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163bccfejzr.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163mgvwmnwt.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163yodkaonx.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163sgijsybn.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163hijcdnwz.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163gyjnvghl.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163jkwlhivf.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163inmntnrd.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163uwanfiwx.html

$obj?->method()
来源：http://www.sxryk.cn/163ehqvdrco.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163alsnvxun.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163pwxmwtrl.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163vberynnm.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163bfappdwj.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163qpajqonb.html

"值: {$a}"
来源：http://www.sxryk.cn/163oqqdrago.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163mijruevl.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ukmhuput.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163sedlqlvu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163anfufvxu.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163criczjqz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163zljoynee.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163zwypzwwc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163oorgljwx.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163jpoojsxu.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163lgfrpxfp.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163mtblmxfg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163wtmfyjod.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ckiwvxlm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163tmewjiki.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163cgpkojbj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ykouzqmv.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163gygfjxrk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163dzrpmymj.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163vjljcvet.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163lzhnhqlo.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163nmmlgizy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163pjcgxrpu.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163bsocalxa.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163rramceoj.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163uvgympav.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163dpwoyaed.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163hzxrrwbb.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163uxqmysqj.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163lwdftiij.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163odfcoqcl.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163hnbzdvwh.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163oqkazgxf.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163crweyrgo.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163npxazoqd.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163kyssojaq.html

composer require psr/container
来源：http://www.aibaodan.cn/163hihqqwjo.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163fufibxjb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163uwwdyrac.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163gjblisfp.html

composer require twig/twig
来源：http://www.aibaodan.cn/163wpfbgupf.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163izezpbgw.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163chpdavjz.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163cxmrbmxy.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163kcggdauh.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163pzbrpzdg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163qqehsvfs.html


<!-- 参考信息 -->