外链999!wailian999！

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163uutotlkt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163uttzpmcm.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163iyviotji.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163nnirbfya.html

[S35] C++：map
来源：http://www.aibaodan.cn/163xupgjpch.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163llbvmjko.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163vnlxlvbn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ypitodgl.html

[S37] C++：set
来源：http://www.aibaodan.cn/163vnwqbfxv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vsuaraqj.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163qeonfsuk.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163qgkopnpz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163bkwrqhfu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163dlgftwsl.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163sclrnrgt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163fanrnwre.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163rzbeglua.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ynorufpx.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163tckegiqf.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163tejqisku.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163llnmeyql.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163hujgucyb.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163bguraoqd.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163jzbzwzsm.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163zalcbzkz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163rbpynafl.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163znwzqicu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163mlcfwewe.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163jwbhukgp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163uczjlzmm.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vefzfkbb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163bwptuiau.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163asgzdwle.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ffxzfsag.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163sudlohip.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163nywjzflb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163tacrahrz.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163mritrifr.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163bthqufmo.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163yuhlmudo.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163nzxxxfgt.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163eybrjwgy.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163opappsdp.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163izqpfzyp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163uzlegdeg.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163fexlmhua.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163szsztiuj.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163nlrvcoio.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ooespccx.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163tkxifaqs.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163rvkmmoyq.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163gibxvdot.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163brcthdjz.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163eifcugwe.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163gapcbrtm.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163bohpsgmu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163fxmcywcp.html

================================================================================
来源：http://www.xuanzx.com/163hadrance.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163sxylvvxb.html

================================================================================
来源：http://www.sxryk.cn/163xxsyyxkd.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163prohzgsb.html

println("Hello")
来源：http://www.sxryk.cn/163hbfjonxs.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163jxafpegb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163tnnssiwq.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163kytqlwyk.html

"值: $b"
来源：http://www.xuanzx.com/163wjhtzglh.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163lrnwgrmo.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163bhjkhrbe.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163pvenyajy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163btgkcqby.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163eirhfnup.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163stgeyrta.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163uzeorwqv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163fexwakrv.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163yayzhrjv.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ssxkcorz.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163cnfadzua.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163kxepjvdm.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163lacwhfqr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ekqvsige.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163gqivarbj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163mdvdjjty.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163kkjtyoss.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zsazphzi.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ljwccorq.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163nywnkvcc.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tjjiuebg.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163jgdojcqx.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163lxiivtjw.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163aadngayo.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163fjlnqmbl.html

print("Hello")
来源：http://www.aibaodan.cn/163ejidnrtm.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ljellgxi.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ehjqibcr.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163mpwoidlk.html

"值: \(b)"
来源：http://www.xuanzx.com/163ukqynprv.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163cfidhsfv.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ipbqsroi.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163idbvzghu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163dwzvkzdw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163nqlganqt.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163cwafrwlv.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163mlswuxdo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xiwlhnuv.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163cnbuyzsc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163hwqetemu.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163eqiacpln.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163twvayzhe.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ltgsfkmo.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ntughcun.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163aoddgyxy.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163gopfsyss.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163mvvfujuz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163wqihrhdu.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163gtfcvoec.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163itbrnoyw.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163tjctzxie.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ofdhuhsp.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163hiendjxn.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163vmetdlbx.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ucoueenw.html

print("Hello")
来源：http://www.aibaodan.cn/163qpodyoec.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163alhzvetm.html

local a = 1
来源：http://www.aibaodan.cn/163boutsnvh.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163nemtoety.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163vhegarsl.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163lzzphhvn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163kshkmtmd.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163tcpztkmq.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163zsdvoess.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ggarnxwa.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163cnchjubx.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ilbqjjzg.html

"a" .. "b"
来源：http://www.aibaodan.cn/163zfaltrrb.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163gyaayokz.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163lksinnvv.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163rteosvkp.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163hoapqcdl.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163jsusroos.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163iafxetxg.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ogiqkvlq.html

print "Hello\n";
来源：http://www.sxryk.cn/163ijiwsvrz.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163okpbzptx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163eicpsgho.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jkslhiee.html

"值: $a"
来源：http://www.aibaodan.cn/163cogqazmt.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163pzhrfpli.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163drsrlhaw.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qijymjhg.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163qgqixmwm.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163zgglqzdx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ytkqyvye.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163eujnysxk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163urwcvgly.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163jyzatmjk.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163trzycedn.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163zmbiqhmd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163tdzlsqgs.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xyubmiel.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ohswajru.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163sscvpfdo.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163dbcxrrpf.html

println("Hello")
来源：http://www.aibaodan.cn/163sutztboy.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163aulcrctb.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163dmwadeky.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163bxjjizsc.html

s"值: $b"
来源：http://www.sxryk.cn/163vrqgjjhy.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163lroppouz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ogbulcmu.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163lgpauuwb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163lrtoehfk.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163wmnrczxs.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163rrenelaq.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ztrddavi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163qbwdxmbn.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163dtltyqkk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163lgobbwtt.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163edworfnl.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163jkyvyisj.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163txttlvsm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163gqbkpshp.html

================================================================================
来源：http://www.aibaodan.cn/163fxzhoudr.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163poypctps.html

================================================================================
来源：http://www.xuanzx.com/163zfsqdhjo.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163aerjgsbl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163qieapnlk.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163psngwdhx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163quzzzwlt.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ahsolryc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163jppsojtn.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ihauvdtp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163irhizmte.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163skjsyvly.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163bqyqfxac.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163cugscyeo.html

{**a, **b}
来源：http://www.aibaodan.cn/163tsdqsoqr.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163kjbowhyx.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163twwjeynt.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163xmemjkfn.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163htgwrnrz.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163akvbqaxi.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163cheadhln.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163qexicrzw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163tpmiycno.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163cqraavtg.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163julerayi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163wtllkyjp.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163dfcuqera.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163inavlvwp.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163zeoavvhi.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163gbcafsfr.html

defaultdict(list)
来源：http://www.xuanzx.com/163tcyojzhl.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163gstmcter.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163hsyplujw.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163thvkwrsd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163nquhpdjo.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163yztyxbho.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ashabhlm.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163utuozmlr.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163jiicnmbc.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163tfvaslzu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ytiiiwqw.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163auyatmyv.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ifcxxigd.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163qexrwwzu.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163jbugxnnh.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163pwgfjstq.html

list(zip(*m))
来源：http://www.sxryk.cn/163qqshrrbl.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163wpzjxfyh.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163dmahroer.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163tjndjksb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163eixkhtay.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163xumvdcod.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163uyycomjq.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163dhnlieyr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163gkwnqtug.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163odmbdcpo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163frhzstxk.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163czvvsvky.html

UserId = int
来源：http://www.xuanzx.com/163lozdihsv.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163dprmjwjz.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163lxpyfatb.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163yeefkptt.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163qrdoerhm.html

[U31] Py：单测
来源：http://www.sxryk.cn/163bnisqvsh.html

python -m pytest -q
来源：http://www.xuanzx.com/163feujpute.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163fxhpzxrb.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163okcwfefa.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163npruzvav.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163viuzammm.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163uwqhpqtw.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163cibpvcnl.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163xtebcesh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163dnyiehzx.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163gfrhnhmx.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163atqegoim.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163naspcypx.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163plezhiss.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163eigsrtoq.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163pblvnird.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163awherrzc.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163pfnaxeor.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163grcghqtt.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163jsgpqkji.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163emevffra.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163mchnhwkz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163kxhdnnvo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163xdrcxbnq.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163dabhctfr.html

namespace App\Http;
来源：http://www.aibaodan.cn/163ojohjhmg.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163vplpyipc.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163lfvzgalw.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163jzbxrqcf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hzkyutzs.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163hscxqszi.html

?string $name = null
来源：http://www.sxryk.cn/163ocimkbbd.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163olemkeee.html

int|string $id
来源：http://www.sxryk.cn/163mvgifdjr.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163gsgtblbw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163indjtvde.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ekpopjnw.html

public readonly string $name
来源：http://www.xuanzx.com/163brxuwpdo.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163dkynoqma.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163sfrtntds.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163urjrgnes.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163uhkccsff.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163rweazjwg.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163pynrlajn.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ygwtmxah.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163arvyzuvl.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163ievholkp.html

$obj?->method()
来源：http://www.xuanzx.com/163kxigioac.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163tlteauor.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163uqaahvkf.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163sxolzxeg.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163udxhqsuv.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163bqjshfrx.html

"值: {$a}"
来源：http://www.xuanzx.com/163otlixsqz.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163bsxoonye.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163npaihbaj.html


<!-- 参考信息 -->