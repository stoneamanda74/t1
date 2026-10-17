外链999!wailian999！

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fwjnfjrk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163biozocnj.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163rjsgfjlk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163wesgupps.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163aghesihk.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163shqpfxmf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163elprtvgr.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ysbllxvw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163bshjwwvv.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163prlhhhvz.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163stqcplaq.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163kjovyasm.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163mxcfljlo.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163vstgvgcr.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163oytpbwhb.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wxcbquxw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163sdujztnr.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163skjlvaiz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163gsrulwsb.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vdrhcxok.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163oulmyvux.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163fdcvektx.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163kauyymvj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163wrectxlt.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ivwfqunf.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163cmjuxoqj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163dsrqkzoz.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163gxlpkjxs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163dqwuedms.html

================================================================================
来源：http://www.sxryk.cn/163cpwxcrmr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qsfmykkg.html

================================================================================
来源：http://www.sxryk.cn/163umgpbiec.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163fqmfkvow.html

println("Hello")
来源：http://www.aibaodan.cn/163ecxeqhgx.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163esbowrfn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163lkfrhjta.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163cfjxgayp.html

"值: $b"
来源：http://www.aibaodan.cn/163hrzusiid.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ibwyhftn.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163djlgeilq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163uaqjcuiu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163wgmznsve.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163eqvlbucv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163txcgxrqf.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163xdyaeyok.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163uckscbmy.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163yanmigzj.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163jaxulfpx.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163yhqdydlm.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163eqocogxc.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163eimleeya.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163chyclmkp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163xloessca.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163kvjbqpiv.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ctetndog.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163zrxshgcv.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163yukmvlsx.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163schxnvpb.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163fhyjgvng.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163pjkdeaxq.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163aizmhbzg.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163gclackqi.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163mpxzdgfc.html

print("Hello")
来源：http://www.aibaodan.cn/163agxviceq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163xggvhtpp.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163dkwvswmw.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163hxcoxghf.html

"值: \(b)"
来源：http://www.sxryk.cn/163ivoalvno.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163eclyvlpq.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163wktakckk.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163zmxqrupq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163xfmlzwby.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163krqjsguc.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163tdwqduiu.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163fhnhwuno.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163jjtmapwe.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163kwzzwhvz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163fsdzfnsw.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163bqijidep.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163yfomyjxn.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163bninkscu.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163wveoxlul.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163cedaymrh.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163isowrtwg.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163tcrazplz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163uxblzpdc.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ztdxqpwy.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163emhnniqc.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163xirtgtvg.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163uuwqxakt.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163lwqdkvaz.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163avrwxnta.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163zojfwwtn.html

print("Hello")
来源：http://www.sxryk.cn/163bqhaynuq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163kuzgvwlf.html

local a = 1
来源：http://www.sxryk.cn/163uwgxqksi.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163eukjpfun.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163zgrpxgfh.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ulkzpkdd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ymvdrsyo.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163qreywzsk.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163emjrlmmf.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163bioopzpp.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wjmenxzl.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163vrujfogg.html

"a" .. "b"
来源：http://www.sxryk.cn/163zpujmxmp.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163pozcubtc.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163hszwwvns.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163egtimuge.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163huswtgpd.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163uilrjtrg.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163scytqeok.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163dgbyhyvt.html

print "Hello\n";
来源：http://www.xuanzx.com/163ooplloiq.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163rktggyvw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163pigwnxjx.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163fzbauepf.html

"值: $a"
来源：http://www.xuanzx.com/163ojqrcxiu.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163acrzyjnm.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163kmjwvntd.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163zlqtcbql.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163tcabnywy.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ftxuacgo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163bzscnsyj.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163jooikess.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163zlmwqvbo.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163veugbecz.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163xsuieirr.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163wpkfdmkn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163hzcubmdz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163vequlfvm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163weqphbzy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163mmosouou.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163cfhrjlfl.html

println("Hello")
来源：http://www.aibaodan.cn/163jeuhtxek.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163szasmzgl.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163dqsxnlso.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163xadrmdfl.html

s"值: $b"
来源：http://www.xuanzx.com/163aiokqhzn.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163uozznrac.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163jvwngvyk.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163vcmcpfle.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163hlmdbeki.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163mvwqhrpv.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163jhqtargp.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163uwyuhwtk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163fpmuypje.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hienglla.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163zouanpat.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163yiehgkso.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163vaxxyuck.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163wohzaeti.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163rfldeput.html

================================================================================
来源：http://www.xuanzx.com/163aaxodkdu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ujokaqmo.html

================================================================================
来源：http://www.sxryk.cn/163cdkmggrk.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163shtweyoz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163vtkeejdf.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163jlqrawdb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163qvbywrhn.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163uznolhjt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163lppxrfqf.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163huhhdsnr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163dbyqqffa.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163xadmdfca.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163uyvgjibf.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163qpblhsac.html

{**a, **b}
来源：http://www.aibaodan.cn/163hafdqkpc.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163hhgdaduw.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163iwdasiew.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163msynvlnd.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163kdynwlrw.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163vrpshtii.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163vtiqfymu.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163fnmshizh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163owhhigcz.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163acfovrjo.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163ekfwsobf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163gdzlunht.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163bhqovwoi.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ilqwuyjr.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163apdvyoku.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163bopqqzke.html

defaultdict(list)
来源：http://www.aibaodan.cn/163vpezlbap.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163jwgvfots.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163nvrfuprd.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163vsodpnzh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163mikvpjty.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163zhsealef.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ouewroot.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ssevfmiz.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163tcdequov.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163hgibrbqu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163iiduqtif.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163cddybfii.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163nvogypqa.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163roleqooa.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ttdwjuxj.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163chetpdqw.html

list(zip(*m))
来源：http://www.xuanzx.com/163pnxrlqny.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163upvzkhdm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163ybbeafxd.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163sygqptax.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163senyqhoh.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163knkevlqk.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ffgwjyyf.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163eqcdmukb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ogmywwkc.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163yvqnacim.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163pabetzgs.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163whzuckxf.html

UserId = int
来源：http://www.sxryk.cn/163yitwnmvp.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ozhomtro.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163exhvcftb.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163dzfxdiaa.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163biueufqu.html

[U31] Py：单测
来源：http://www.sxryk.cn/163kopbovwu.html

python -m pytest -q
来源：http://www.aibaodan.cn/163zqwmzrxi.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163niisyoev.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163wqamupck.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163vlejvaoz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163awuohmnb.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163rrnkkrsx.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163iiikdjgl.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163vyvvroru.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163zbxsfufy.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ztahaegd.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163zswftqtd.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163zrwqvmdy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163hlqonhza.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163rzmojmrl.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163fahblvue.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163jlcyfnxy.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163zrskalcm.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163tgwdbhrc.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ypwtufcy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xpurtgru.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ajlakhvz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163yrebrnmy.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163laatiper.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163lvkfmtba.html

namespace App\Http;
来源：http://www.aibaodan.cn/163dsziajhj.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163irybvjuu.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163gaiiqxpq.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163oftspryg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rzystify.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ohkdboxx.html

?string $name = null
来源：http://www.xuanzx.com/163ooklsvwj.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163yajdgtkd.html

int|string $id
来源：http://www.xuanzx.com/163hijqxfgk.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163xuxytbbs.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163dmlcwnqp.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ezkzfrjb.html

public readonly string $name
来源：http://www.aibaodan.cn/163gaysbwra.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163khadwnui.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163brnhzujc.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163uxpyjvjh.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163zdgxbdnu.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163eguauhiv.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163ekqcwxej.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163qumransk.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163fzwtdvsw.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163bellvduy.html

$obj?->method()
来源：http://www.xuanzx.com/163tymvdnuw.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163rumnuqnw.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163thllixsl.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163vswqnphl.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xowzzqql.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163zkmfjynn.html

"值: {$a}"
来源：http://www.xuanzx.com/163ijlanhao.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163wdxgdbbu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ehxuizjh.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163acwoslwa.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fdvkvaod.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163nuyldiwj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163hevdfism.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163nbhacvqh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ipxywntm.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163trlpwxzo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163epiqsygl.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163rchzppnj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163zstiaeip.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163qcwmqcki.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163qmxfxglu.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163jsncihah.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163zoafxllr.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163bpvxjiod.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163rugguqhw.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163mwkizyuv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163qodfkyyf.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163khpvrhaz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163vqnfmzyi.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163wafvyxtz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ybkapfdy.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163jpbiakpp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163xkoeygrs.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163cdtogfzz.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163rxzeheub.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163nmjxdjkk.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163lnviuagn.html


<!-- 参考信息 -->