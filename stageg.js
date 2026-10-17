外链999!wailian999！

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163lpgwnjzi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163yuopnldt.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163fbhazrfw.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163myxrtniz.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163dwxmdegr.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163hutewojf.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163hthjjdjs.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163bczusjrm.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163jhgbxems.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163obflcknq.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163krsrkxxi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163svocknfm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163uqokzqjh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163btoimlmo.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163zzomutrf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163bshnqcrn.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163mgaooajo.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163qwxlyioc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jmfhzumj.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163rzhqmudt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163xiezvphh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163skkoaggi.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163qdgjpsnr.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163nnooofms.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ydvbgbjn.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ynsjutmv.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vfnpjkxs.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163lnyrhgqq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163rgorcuel.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163nmaufmzb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163qoxtdpct.html

[S56] C++：optional
来源：http://www.xuanzx.com/163nozklhvd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163bmpeqtjy.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163uyqaronp.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vgpqktzy.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ycppdjbz.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163rgpfaqtu.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163czjhtsnq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163pvnrtjem.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163xyczsxix.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163uwlxanjm.html

================================================================================
来源：http://www.sxryk.cn/163jwmzzvzj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163rrdsoslu.html

================================================================================
来源：http://www.xuanzx.com/163pgcguxdl.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163mqhotzvf.html

println("Hello")
来源：http://www.xuanzx.com/163zyuzhcox.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163kthgtwhv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163easfrddk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163moqqfcap.html

"值: $b"
来源：http://www.xuanzx.com/163gxpitwsf.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163frtgendl.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163llasezbf.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ihqqyqep.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163cpgnbugo.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163qjcajufo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163vrtivjfw.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163zodjinbc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163gkdondze.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163kebrhfcu.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163hmyjslbr.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163duiexdqx.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163cgjgusgl.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163zwsbrtlo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163anrxxwvp.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163wxcclxes.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163vqkqfbrk.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163jvlpmlew.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163vehojaxq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163xjvaluhs.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fjijcsgv.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163xmvbppar.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163gunxlgfy.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163tfwauvxj.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163fldrknfo.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163yfswrpva.html

print("Hello")
来源：http://www.aibaodan.cn/163vjgnpndf.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ezmsnxbe.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163xyeiiffi.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163lodqtdcy.html

"值: \(b)"
来源：http://www.xuanzx.com/163ogtpfcsb.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163twvyzsjm.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163kbxlxaja.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163xqoekkpu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163oclrsaon.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163uxmscfju.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jtzddhmi.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163bfdvjrbs.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163xlsceufv.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163iypzjmdh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163waordkgb.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163mpuysvym.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163rzftxdwk.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163nkeqyweq.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163gmnwnqiy.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ppdbfvdi.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163fawlaflm.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163fhbidzaf.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163vslicebc.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163warhgske.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ccaltbbd.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163wdhcyzty.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163htahpidr.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163htxqwuya.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xstwxmxu.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ndgtmqdc.html

print("Hello")
来源：http://www.xuanzx.com/163lgsoypsx.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163meoqhkxn.html

local a = 1
来源：http://www.xuanzx.com/163hmbsring.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163chdshobt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163roesqpdd.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163lbctoyus.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163etqbvnrf.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163hjytrvkc.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163xjelgvwr.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163fwoxevnw.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163fmegyeky.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163gosucvqo.html

"a" .. "b"
来源：http://www.xuanzx.com/163yichsriq.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163gdrvpdmd.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163yknyyzja.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163pbtstozm.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163xptfnloq.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163oktgcefr.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163vgashmba.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163hxluqtlk.html

print "Hello\n";
来源：http://www.aibaodan.cn/163uvfalhyq.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163uzjbsvrb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163jnjnncbl.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163wzsevgak.html

"值: $a"
来源：http://www.sxryk.cn/163fdhzpome.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163kshzdfjh.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163zxqxzxfz.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163utqvgypx.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163cdfittzh.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163nqjefqbw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163mtzjthjm.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163gpxhxkca.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163fvzkmwic.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163pdgiaueg.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163llzscyue.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163kvvawwve.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hwzqbyvd.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163wqosptpc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163fqulzbkv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163sekrdrun.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163jyscfyjz.html

println("Hello")
来源：http://www.aibaodan.cn/163fhiukgmj.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163qfzqwtfj.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163qjbqfwzr.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163dvgmdcwc.html

s"值: $b"
来源：http://www.sxryk.cn/163tmcgmfiz.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ytyntlcf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163zsppmbvs.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163gcpvelxp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163rrwvkobe.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163aeclwuqj.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163loqsyfme.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163yevniwcc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163rxgzkcyr.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163fggrgyge.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163qqnkfsxf.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163utouobev.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163snrobzqf.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163hiicfcij.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163rjqwlbun.html

================================================================================
来源：http://www.sxryk.cn/163zoynupqm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fnyxezsh.html

================================================================================
来源：http://www.xuanzx.com/163uhmnyceh.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163jonuuqjl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ycrxjwcu.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163hslhyawj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163hvaldarq.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163gvyrbtsq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163fsihvmky.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163remzoadm.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163kkqixwvx.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163eixhzuon.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163abztxfes.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163umixdwpm.html

{**a, **b}
来源：http://www.sxryk.cn/163uejgliaz.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163oupfkcuu.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163vokotjgv.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163pnzfqnyr.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163zcwpevhb.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163swexxias.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ytimnlwk.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163idwwwouw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163tqvutovq.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163zbjffrkr.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163fcuipdxr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ufvtkokr.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ezgkhbgc.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163qoanftlv.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163zyneprmi.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163cgekzpjp.html

defaultdict(list)
来源：http://www.sxryk.cn/163plejpmdt.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163xolbvxyn.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163desixain.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163gqzxkydc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163tctxgljo.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163rvvgxfcu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163lzxukwgt.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163xjijjdsr.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163zlehenwc.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163esqemkpx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163deadmnhv.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163iarbnopa.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163attqwubz.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163nlrrqtij.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163jbjuntuy.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163jvhispix.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ayxummbm.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163mxzhuaef.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ebwmdjtw.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163sotppbku.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163gmsxjozp.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163xxwjkghj.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ylueeypt.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163eboyipxt.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163yasfqqpo.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163nrpjxplc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163wzvhcbef.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163sxwwwmaa.html

UserId = int
来源：http://www.xuanzx.com/163yubhjauc.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163qgcdqbgs.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163tanxggle.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163smoibxbw.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ejftydcr.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163etjxsrep.html

python -m pytest -q
来源：http://www.sxryk.cn/163ouedwjly.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163zbbzdpfi.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163exjymcsh.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ogrfcaqi.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ltjllyii.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163fxwismvs.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163avtwavev.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163bjqzlrrq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163xbvvsyli.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163hpjhpceu.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163tpjznurl.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ldtiumlt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163dgufpabx.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163pzcuzwpr.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163xylrqrta.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163fjgczrtf.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163hetxgvmf.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163whsevhrk.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163iyxjrlxn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xcejogrw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ttikhytk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163wtzxtfrz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163xczvoinl.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163yckjmirt.html

namespace App\Http;
来源：http://www.xuanzx.com/163nrnarsoi.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163harvzulm.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163llauyjiu.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163bvqdfeqc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163valylbjs.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163sgqdyjpb.html

?string $name = null
来源：http://www.xuanzx.com/163fzrcirrh.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163swrwbpnz.html

int|string $id
来源：http://www.sxryk.cn/163tprtqyic.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163eetnmsrk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ndpxogsu.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ycwskson.html

public readonly string $name
来源：http://www.xuanzx.com/163migsnjiu.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163jxdmqnsl.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163bvchgbhg.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163veaplgek.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ldlewsfz.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163qvoajqcg.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163uhaqjzfx.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163hhisalhg.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163dlomynnp.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163uoeqavyv.html

$obj?->method()
来源：http://www.sxryk.cn/163zsxrzndr.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ieccrnkz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163yzfjpcbr.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ltynmlgy.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163niiqdmfz.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163xaakpfbk.html

"值: {$a}"
来源：http://www.aibaodan.cn/163bhwopcsk.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163kihwxifn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163iedugeqq.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163mmjcxxij.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163acefgoaa.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163txcsbeue.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163jktmnqxn.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163gziswmna.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163gqlvhory.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163qaxkeyfb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163qlulcyqf.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163wfayzpwn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163uulhnjvj.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163yseqofaj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ootrqtuk.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163deszbwmi.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163tndwjrgq.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163gvbuhznt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163crwcuizv.html


<!-- 参考信息 -->