外链999!wailian999！

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163zbbgwaak.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163pgsnjyqh.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163taoabqbk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163nuzkafar.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163xymdvibl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163jpnractk.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163kodeprnv.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163jkataqbe.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ootxjnce.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163uagkkvrt.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dsmrnaeb.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163jgyvefir.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163nethgvew.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ygntfihh.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163vmntsqcj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ewvfizjc.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163nucofvpq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163simuudqo.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163jcrfctfv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163bhqnhieu.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163etdpqsot.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163utzlzwcx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163lfkydnbs.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163jriqiotp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163sqxqiufg.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ugpgwapg.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163efinjpqq.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163lvhzjfdx.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163xqzyvlxb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163agfhemnd.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163qtmjtxmh.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163tjvnhqtk.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163wgfoexcg.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ccxadvil.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163zqbzlwjq.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ltysvygh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ljjtbcbr.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nyhjlcnt.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163pchzlido.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163kylqqzmj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163wsblbopk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163moeweibp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163jcdajoci.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163vnwuqdkr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163cefvskss.html

================================================================================
来源：http://www.sxryk.cn/163tvhuwkbo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163rqcrpqqu.html

================================================================================
来源：http://www.sxryk.cn/163ndheonba.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163pykdztug.html

println("Hello")
来源：http://www.xuanzx.com/163ytasairx.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163oczygjwf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163jfdajtca.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163bhcuqqug.html

"值: $b"
来源：http://www.xuanzx.com/163bofwfkxr.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163woenmiua.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163sgnqxjpz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163qskoopvs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163gmiadbag.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163cafbhbtn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163cdfgngsc.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163eyosuwln.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163xlquctat.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ivgqzqlk.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163omlaprew.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163iozefgla.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ivwvoadw.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163smvrcmln.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gdtiujsy.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ehbsioek.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163kxvznyyb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163wtcbwxel.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ldoqkurf.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163mivkldfn.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163oyvhcdtd.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163dhwulvuw.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163chtcpapf.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163svtpeebc.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163quamxgtj.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163gwrecxvj.html

print("Hello")
来源：http://www.aibaodan.cn/163gsyiietz.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163bbdoyimi.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163dmyvfopp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163tsolxqee.html

"值: \(b)"
来源：http://www.sxryk.cn/163ugnyyuhb.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163fwtyhwaw.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ljirmxrl.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163davtttob.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163lbomxmsu.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163qvpwiahl.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163krfpnlkl.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163qnaoolri.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xsispuix.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163nftfiyva.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163dnsdsjlp.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163hymnzbmx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ofpxqecn.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163cnqbkyxs.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163hgzffvje.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163gyzxzrlm.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163hvjfvrth.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qrfjuazd.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163odieqeic.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163hedzwthf.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163trriqwby.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163jwxhnkry.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163pkomelub.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163drfacsgr.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163hkzznbkm.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hqpccsrc.html

print("Hello")
来源：http://www.aibaodan.cn/163qptgrilm.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163icopvamv.html

local a = 1
来源：http://www.sxryk.cn/163wlixvtjp.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ibyfnyho.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163mzawngdg.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ukmtanhi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163bdbctdhw.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163vhqumnzi.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163qycumodg.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163pjhmsplo.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163lxnelusy.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163heefsopn.html

"a" .. "b"
来源：http://www.xuanzx.com/163fxssvbao.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163vjvblvvi.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163nzwuvavi.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163datiyxmg.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163hwrjdqqd.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163awaehkem.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ssyuntxm.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163bfbgdgxv.html

print "Hello\n";
来源：http://www.sxryk.cn/163lntprzbw.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163owlziypj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163zteuljvu.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ndzocyvs.html

"值: $a"
来源：http://www.sxryk.cn/163kzkyhftf.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163dgypjvke.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163xudxzthp.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163cmobtukd.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163tqmjggwb.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163bimrlvot.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163otdosvhs.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163yovgbgbc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163yyvasemh.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163yaknbijd.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163raqjopbc.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163fjqsrpsm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163bizluemq.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ksocvfcz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163oilgdqrs.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163gwbmhgnc.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163koaheyih.html

println("Hello")
来源：http://www.xuanzx.com/163tgaiflrh.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163dcxuuxga.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163twunjjoj.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163dxoiuiwd.html

s"值: $b"
来源：http://www.aibaodan.cn/163oifhdnhm.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163lkmckwae.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163blfodqhl.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163qyhfpafe.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163blozwnug.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163knjgliez.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163cxoxrrbg.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ljluyipx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163cxwojqxh.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163eexnmdwx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163gsexfhvn.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163lrwfgbnh.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163hnkvuyxz.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163prwevazz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163fdtsuxwc.html

================================================================================
来源：http://www.aibaodan.cn/163ovehxsir.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nvsbkrib.html

================================================================================
来源：http://www.xuanzx.com/163qdhjlieh.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163lujbshch.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163olxavvvi.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ylbvwdwt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163epyeksdy.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163xptkcvwm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163dhzryknx.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163zpxxxpaf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163wkofgaqj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163egmkazsx.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163bwdmhkez.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163uwwmdabq.html

{**a, **b}
来源：http://www.sxryk.cn/163qmxnszgz.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163grjptrid.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163cuiptqax.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163uccuvkff.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ehhecxpe.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163hdmjjcsq.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ubkwatnl.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163eqtjkcpj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163wnenfrlz.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163wikkwvmy.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163hllyiuuc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163wngeelxp.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163xfphglry.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163nloaxivo.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163dpsvbzpk.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163fwukmkzy.html

defaultdict(list)
来源：http://www.xuanzx.com/163qmgwmjnk.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163ejkbddwz.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163dekesvsc.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163xvnhnbhk.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163qapllmty.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163wnvcpfud.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163yewiqkty.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163fqrwnjwe.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163nutydnmc.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163yygaqipy.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163tybslddm.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jafqmzvb.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163jdpdzjng.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163uncdqyeu.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ltipcpcf.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163wiuipzgi.html

list(zip(*m))
来源：http://www.xuanzx.com/163zcrjxglr.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163xetiijly.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163rnhcbrvh.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163tmbtdhef.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163prbhmcyy.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163uuturlpu.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163cqvylejz.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163tyflnnoc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ryjamtmt.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163fasgmhxt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163tabgadnp.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163tartcmja.html

UserId = int
来源：http://www.xuanzx.com/163rasaoneq.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163jfkmifoc.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163rqyghegz.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ieydfbud.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163oxtouxdx.html

[U31] Py：单测
来源：http://www.sxryk.cn/163qnpljowv.html

python -m pytest -q
来源：http://www.sxryk.cn/163ukdwzgjv.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163drukzsta.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163cpfyenfl.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163gxvpuvoa.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163hyyttzrc.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163xpwwiqtg.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163vxirecoo.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163usblejrd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163lkxffwdk.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163sqvnkepu.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ayafqmjx.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163xwqcyuup.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163kjgzxjqf.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163awgezndv.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163sjyzuymx.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163ggbsilqq.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163udzkioxr.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163bfsfbcyy.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ixeyigty.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163lwbytsro.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163rritnxiu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163hksarmsb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163gbrhjqtq.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163jnfjcayl.html

namespace App\Http;
来源：http://www.aibaodan.cn/163anvknjte.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163zcpcbfiw.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163dgydtexz.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lyzyvxtn.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gjoawson.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163rbpmdzcg.html

?string $name = null
来源：http://www.xuanzx.com/163bxpufzaj.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163tbijbmuc.html

int|string $id
来源：http://www.xuanzx.com/163cbkpmtzp.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163umjalhmd.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163lgjxmmrh.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163avilvbnp.html

public readonly string $name
来源：http://www.sxryk.cn/163svhjnxvu.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163nlqksgrw.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163xzwtkaik.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163gpljlglo.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163tvslhzku.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ioktldym.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163xxebdsfs.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163cdoejtwc.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163glrfszug.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163qlfjnscl.html

$obj?->method()
来源：http://www.sxryk.cn/163gwlrncet.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163nkuoytvu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163rhaldxlp.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163zjjjqouo.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vlelwnfj.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163eckyswot.html

"值: {$a}"
来源：http://www.sxryk.cn/163aoleokqb.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163tgskoihh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163tyfzzmhu.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163tpnvtkyc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gctghoih.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163lccqtesy.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163ehiqwunu.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ssylzvnp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163tchldits.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163bapbqnum.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163nhoeqvft.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163plagurnz.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163szfzjlmb.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163wtluoedd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163trdbusbf.html


<!-- 参考信息 -->