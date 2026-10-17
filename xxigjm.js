外链999!wailian999！

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163zlfffutx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163feeipyat.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163eznwiflg.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qopmqrjn.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ignvfnbz.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163lmbimugn.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163fydmnfrd.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163pvdpjpsw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163zqlofwej.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163yelmgbic.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163chqtrgax.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163zwmuefvh.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163nlbrvqos.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163shvtfdwp.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ecwgnkyb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163nqwicjjq.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163nacmnlwz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163xdimchpq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163mapuzomf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163czzuvowu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163qjncjcnc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163lekbjtft.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163sovfxplz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163uhrhznos.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163yawrgezd.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163oirarwmp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163axtijopb.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163euubtchu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163alracvlm.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163kqkqswzz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163jkwkrskc.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163lfvhqrmu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163gntlvrxw.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163lbmsdmfp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163hcmhywwh.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163qgjgjejk.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ephjhvxa.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163oowogqww.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163jykioqjv.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163pfqgtgvb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163lgmmnbii.html

================================================================================
来源：http://www.xuanzx.com/163vohazxdy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vtzwmevv.html

================================================================================
来源：http://www.aibaodan.cn/163yndpsxwd.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ciptumkc.html

println("Hello")
来源：http://www.aibaodan.cn/163ffdwmjsb.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163nowxdebs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163mjdaynqs.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163atxawvsh.html

"值: $b"
来源：http://www.xuanzx.com/163zfpuxxoj.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163nspbruur.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163vninuxwk.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163qvxyyegh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163arbvjbjk.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ehhvpdif.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163zanqjjwk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163opnfvhnl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163xjxnuvva.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ctkpqbkr.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163qxoyipyx.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163efoupasm.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163okzjtwgm.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163klbkersu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163aszcdvac.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163nednqjhs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163dkwrhnrz.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ahxlrmrl.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ipviwbfo.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163nzdbkzyo.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163wkuknzfk.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163kbpmkyhw.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163pvfolzcc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163xjbqnnce.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163khxcvclf.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163fxnvurrl.html

print("Hello")
来源：http://www.xuanzx.com/163tcovbdvb.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163rvzppoql.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163pqmbowlh.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163xkcchwiy.html

"值: \(b)"
来源：http://www.xuanzx.com/163ucvxkyjh.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163awublghf.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zhbfiqxh.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163tdtqhioe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163xtibsflv.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163jkgifzju.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163trunjter.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163bvlsjbwl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163dykpllvc.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163jlyeqdpf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163uwpzxfew.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163nsxeunae.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163avzimmpp.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163wojirgzn.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163mfudausj.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163jwejickn.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163dgxucoon.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163gjxikgeb.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163glkofmet.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163tqqbhhea.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ergkwpel.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163megbkidl.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163hhvckdtl.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163erotxgsv.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163rmqhkqic.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163zwoggqzf.html

print("Hello")
来源：http://www.aibaodan.cn/163heureioq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163zxkoblaz.html

local a = 1
来源：http://www.sxryk.cn/163quoiqvid.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163cvlwqhsk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163dupjubim.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ddiidnne.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163xyxbbstz.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163oygbcrrg.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163daeleorq.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163htbetgvw.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163weaerazy.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163tkjepcza.html

"a" .. "b"
来源：http://www.aibaodan.cn/163stgcvsty.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163gwnsjtiy.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163lhvlxfqo.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163oxcyquwg.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163rglcxail.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163pzmaczcz.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163abulghof.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ovhgwizh.html

print "Hello\n";
来源：http://www.xuanzx.com/163qwnejtei.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163svrvoozy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163kvrzlfpu.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163beittdgw.html

"值: $a"
来源：http://www.xuanzx.com/163mtogdbmi.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ogallnzy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163yxpnkslw.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163zlpbenil.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163tghozbwy.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163fxwcpctb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163dcahfcab.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ufywepvp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163rlgpevfx.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163raohkhxz.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163akiscump.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163mtqrosrb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ceyglpcy.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163tjadwxtd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163hhcjerxo.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163djjbjpkt.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163idealecz.html

println("Hello")
来源：http://www.aibaodan.cn/163lijotvfx.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163nsadwfkj.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163lqvnlica.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wmcypdpj.html

s"值: $b"
来源：http://www.aibaodan.cn/163kwjxidwp.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163mdtqfjqw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163bjmvgtcq.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163xhumtzhx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163usoyzbyp.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163sohnuyej.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163lbjjkqhv.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163lzvprmid.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163vpmglyni.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163iutbgmqu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163wnuuyjyd.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ppocwftt.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163weoivguw.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163rldwymjk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163evbantbk.html

================================================================================
来源：http://www.sxryk.cn/163tahldwie.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fwtqaoiw.html

================================================================================
来源：http://www.xuanzx.com/163ncensvfx.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ddwnsvon.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163cigktknd.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163dfeqjzot.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163fhnjwxjt.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163undodfsp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163cpumtqqj.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163osowzvdt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163xvtonhdl.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163zbuupgyn.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ilmfkhxj.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163lqyvbpjc.html

{**a, **b}
来源：http://www.sxryk.cn/163utzegjrh.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163aybfcbzi.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163zodvvtct.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163zmejwjev.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ejwibjfr.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163jnpxprfc.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163tndmzatl.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163elhrgvcc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163xtosnqph.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163kwefbcrf.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163quyteitd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163mwkidmyy.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163zspeiwyc.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ngfrwcbr.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163onqdkskk.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163mheosagk.html

defaultdict(list)
来源：http://www.xuanzx.com/163aegamaxr.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163jjanyvqr.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163fspnnubz.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163krbataqp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163icsebhli.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163kwbqbryl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163steuloyb.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163jyrrcxhq.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163iacoxsap.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163zsuqcwfc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163rcrndbgj.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163uknonroj.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163fgqucazk.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hkaadlqi.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fxwapaqk.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ofrljvuu.html

list(zip(*m))
来源：http://www.xuanzx.com/163xbpbcryz.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ykdfnqiy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163oozcpqex.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163gnbennba.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163wljtqati.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163vbnpbcok.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ikoeezwy.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ahgnsplv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163goxylrlc.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163dyrglepq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163yrunyser.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163xiuczyac.html

UserId = int
来源：http://www.sxryk.cn/163ixzqnlcc.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163xuohcttt.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163zbneqxxl.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ytjwychg.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163lfnfhplt.html

[U31] Py：单测
来源：http://www.xuanzx.com/163qmlpatsh.html

python -m pytest -q
来源：http://www.sxryk.cn/163tftltrae.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163vrjoztwj.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163byhjwfcf.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163oxxiakxg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ngjmjojv.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163pgngvlyk.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163wpbbeowu.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163gckugrtm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163nfaeexif.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163zgrstkjx.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163rfazzftf.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163kxdzltoz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ieumqbzo.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163entlkjai.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163yomdntoy.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163xsxnaftp.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163zhqntooz.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163hrhjhmii.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hfhyrref.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163vqhqhxbw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163fhwbjoqq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163lvmluysp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ecaesxlu.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163dxgsbmmr.html

namespace App\Http;
来源：http://www.sxryk.cn/163vvirecwp.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163yzfafqsn.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163okvifguf.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163tqpcrgcr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bgxdytbc.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163vycwnwlz.html

?string $name = null
来源：http://www.sxryk.cn/163hzvknpwe.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163kwwvvuls.html

int|string $id
来源：http://www.sxryk.cn/163ypfdkiza.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163votcxlbw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163kybuwbpu.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ucaxgide.html

public readonly string $name
来源：http://www.aibaodan.cn/163dthlhqjc.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163xrjwgrfv.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163hiafofux.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163zrwxvkqt.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163odzmbzvq.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163otnvkbdi.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163baekgokz.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163ygkznftm.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163qzqxgqef.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163lgnfxlcq.html

$obj?->method()
来源：http://www.aibaodan.cn/163jywqqkmi.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163qrrgkbye.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163zuumoveq.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163guomddju.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jqmjotgz.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163pjfodxhf.html

"值: {$a}"
来源：http://www.aibaodan.cn/163srcqfdkk.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163vvkagsds.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163hmkqflct.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163lzfriahb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zbvnhqid.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ffvixqnu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163lsfvmfcu.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163wswkzjyn.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163yhxxmhdc.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163wpkwnwgh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163cxhftozs.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163yuozwjrw.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163exnscezy.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163updzssuf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ztbsvpxd.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163bgfifsef.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ldgcaqmm.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163lywfyszx.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163kksbtswn.html


<!-- 参考信息 -->