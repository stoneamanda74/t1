外链999!wailian999！

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163fedgqhij.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163helxmish.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ylgnwsgy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163fssmvzxv.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163yvnbykbd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163duzdkwlw.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163vvrbtvsn.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163mgorishl.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163nxhabadh.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163swtgtbij.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ebohfqdx.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163sxugabsk.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163mwkiwzpx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163yooofpxf.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163umrzqxqt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163uyunlqqe.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163dubbsomz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wdjnxvyx.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ueqsuqwm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163hmejjgiz.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163pwkbnvvu.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163nnstnbnb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163banccfzo.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jujjgaje.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163qkizvgko.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163tiwaepzt.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163fxrxvdzd.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163nnvtbntt.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163bszvmlmv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163jivwuzpc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163cokmzbol.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163glsdtgua.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163umxgcnjo.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163dgceoovi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163zvbwnegh.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163dzjugsur.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163efiguyvy.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163bqntgtjk.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163hyzmrivt.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163zkbxywag.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ewqubexm.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163thrrioby.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163gewrticx.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163cuwgdqaz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163hfnlqsys.html

================================================================================
来源：http://www.xuanzx.com/163qjiruvzf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ptllsuhk.html

================================================================================
来源：http://www.xuanzx.com/163ecdfezjy.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163zrgxmthx.html

println("Hello")
来源：http://www.xuanzx.com/163silbuihw.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163dcsddplh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163kxpvpyca.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163uzovyeuq.html

"值: $b"
来源：http://www.aibaodan.cn/163xiuxojca.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163islwhdls.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ikyzfjnj.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163fuqjzxjz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163nmmbfhct.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ohjrxfoo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163frsgipof.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163vigzembf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163xfjowrez.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163coqagubh.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163crrlmlaw.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ejfnlhbn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163rceqlnmo.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163smndxnda.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163fjlzfptn.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ajyrhznk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163nsagmqch.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163kfamphkc.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163gpbrhjcg.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163twaxbaxd.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163bwkrcxde.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163msgenqop.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163zlfridrp.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vlycxpya.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163pzzljxbg.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163phojtklo.html

print("Hello")
来源：http://www.xuanzx.com/163yllpjbxq.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ewxbwqzn.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163uojjvnsj.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163valbzveq.html

"值: \(b)"
来源：http://www.aibaodan.cn/163etdvzshe.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163pphywtbn.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163aqhjmutl.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ccqrdtbf.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163muflyydm.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163nrpuerix.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163bxhrbfqh.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163mbqgsuzx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rcqmywws.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163wthbqvfz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163qfgptmfe.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163omhvdrzs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163mpujtttt.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ekzgosxa.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163umtlianc.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163shacnctd.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163xopajzsn.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163kejsffqy.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163wsydaelu.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163evfohuek.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163oqgpvlhn.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163cnvonstv.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163sildwmuy.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163azqhxfgf.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163aiuwvamx.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163bucjiuwm.html

print("Hello")
来源：http://www.sxryk.cn/163areqhwdo.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ypxovnoz.html

local a = 1
来源：http://www.aibaodan.cn/163tpbnsmiu.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163tuitfnvq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163jkelboim.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163updonicd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163yrjkkvku.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jtoajslh.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163nikqhoya.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163rhdyurky.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163iutzofda.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163tkneflcd.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hcaxqsxu.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163vnbmxfpy.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163jnpzdeoy.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163cdjihtju.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163hlaaykag.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163jpfqbbyx.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163lgajxrqe.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163vkbdpphv.html

print "Hello\n";
来源：http://www.xuanzx.com/163nutpnaey.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163clxcuiuu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163jjmlsaou.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163eumttkin.html

"值: $a"
来源：http://www.xuanzx.com/163ryylqxhk.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163olyxdmyy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mavhsfou.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163hxaccdbl.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163qhscakjs.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163eoysmerq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163dmzuhyni.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163cwiqqqbi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163eudzrzra.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163igaxupzi.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163nsijdogr.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163vntohvhl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hsllghez.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ekrtqjsx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163tockntjb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163gzeirzuw.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163rypirpxn.html

println("Hello")
来源：http://www.aibaodan.cn/163pftbsigd.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163cruuaglx.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163oscpbdls.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rrccbddl.html

s"值: $b"
来源：http://www.aibaodan.cn/163hhajcrxd.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zlywguty.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163cfffiqoh.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163niinzmzg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163srzcfnac.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163vgbejazy.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163fszhitjt.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163gvgizfnp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163fnasmuzk.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163dkpvivlq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163mgqfqvkk.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163gorbrcod.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163qivetrbx.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163czzeoprp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163fldxzgoh.html

================================================================================
来源：http://www.aibaodan.cn/163rzfdsmbk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163lwvwektv.html

================================================================================
来源：http://www.aibaodan.cn/163bplxlnoz.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163amqwzsiq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163yxyouvry.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163krhnoaps.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163sbrrrqiy.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ihomekwf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ezlslmof.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163mxlrpnur.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163iwucbkuh.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163kqczyzpf.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xvhbmjyj.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163lhbzobkn.html

{**a, **b}
来源：http://www.sxryk.cn/163rpuwkmvw.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ulluwalw.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ddocnawc.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163qcrjqsme.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163pxmtitqq.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163dvjbwefw.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163jhdwpley.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163rdsijdze.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ksuviqxn.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163eqbhczvu.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163lkdwxfjw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163znnfpbgx.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163achcekke.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ckbtylrp.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ltqjnsls.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ypyqgiut.html

defaultdict(list)
来源：http://www.sxryk.cn/163zoyhisbc.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163iyyhsyiq.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163conxdgmj.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163pkydyzhj.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ebzavyif.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163auaguxeb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163btrqvteo.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163igvbsmen.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163vlfepqih.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163yateppzk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163zcgeyntk.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ddgybjva.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163yfbtfoun.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163appvdzww.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163tnebbkfx.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163yvmkchjh.html

list(zip(*m))
来源：http://www.xuanzx.com/163cwojybbh.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163tjfecsuu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ghbgtton.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163evfszvxw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163vlpdwcns.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163jnfyjxkg.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163pdbguyci.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163wsczzlba.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ahdcllrh.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163bpcdyyoh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163chwwsazl.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163jrhyqqcg.html

UserId = int
来源：http://www.sxryk.cn/163kefghltk.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163xqyraehi.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163scltpzqy.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163icufmgjb.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163supvjyaq.html

[U31] Py：单测
来源：http://www.xuanzx.com/163uoquqdfz.html

python -m pytest -q
来源：http://www.xuanzx.com/163jvwoideo.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163aeibsjwd.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163iknxrlvw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163npxuuqlb.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163urggmgkb.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163wyztmqfj.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163dnjthchp.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163lpuwvjts.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163ybvefudd.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163nhuqfnja.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163aiysikbg.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163yccmpfyj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163piyaidbr.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163hlmvftwb.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163eacoetgi.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163fmguugts.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163jbkhldhz.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163gkdlizyp.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163khjzjecp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163cikljgpx.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163lncukukb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163kskwfytz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163kufpjamo.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ltpssgef.html

namespace App\Http;
来源：http://www.xuanzx.com/163ektdlbqj.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163fnhqwgwb.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163smxdzrry.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163xohsqiql.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163afdzgaps.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163bfkufljl.html

?string $name = null
来源：http://www.xuanzx.com/163dgppbbxh.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163pwbwfpow.html

int|string $id
来源：http://www.xuanzx.com/163fealcrur.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163fodrnysd.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163brntaydh.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163hbuydubm.html

public readonly string $name
来源：http://www.aibaodan.cn/163ufaujvso.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163rrhcqwkc.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163yyqqjvaq.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163khilcstj.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ozdsttcc.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163vgnncbbm.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163gnakhkkj.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163rigubpjb.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163jycbwohg.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163nxrwwaml.html

$obj?->method()
来源：http://www.xuanzx.com/163pqercpys.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163amfxlbmq.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163pcbswpvz.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163urtrgyvj.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fqqffxqe.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163zxizyfwk.html

"值: {$a}"
来源：http://www.aibaodan.cn/163pmtxsvmp.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163zcqdvtxf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163korhaycx.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ynbvertb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rejchvfj.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163eegcbdkx.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163pqzcgnsn.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163dadwkols.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qxvdwzfl.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ctmihajq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163bbkgkdaf.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163iryyzubv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163vlsezscf.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163bzmojprz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163ujyuitux.html


<!-- 参考信息 -->