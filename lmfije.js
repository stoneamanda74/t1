外链999!wailian999！

[S35] C++：map
来源：http://www.xuanzx.com/163gdpasszh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pbbuonmj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mvyldynm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163abayrdtl.html

[S37] C++：set
来源：http://www.sxryk.cn/163wmdeamqa.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163uqdxfonl.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163rlplbpng.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ctppbxms.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ccphuthh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163motasaoq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163xntgyqdc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163dpcsldov.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163iwzxnlsw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163zjieybkj.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vokmscab.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163bkamioel.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163xuyzqzbo.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163nqaxzntj.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163utmmscbm.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163xnscpvvx.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163exvwtoek.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163vtncdafw.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163hgcpkjjh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163iouclcal.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163amcrvuyu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163enzicdgo.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163fczjwuyq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163llpwxuil.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163asrddhju.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163kqyzppek.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163aakdbzxv.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163vphtenzx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163rpzyimux.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163sjfwtgmq.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163gsupjzqc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163aobjaqun.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qoiwtwdk.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163bxctqlhe.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163gdekocbj.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163plylcprq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163pbglwxtm.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163tufzohjq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163mhdsdzdq.html

[S56] C++：optional
来源：http://www.sxryk.cn/163yexoummg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ftdouhvs.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lqnrxvfm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163qtmpjykq.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163exdngfhi.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163opugnweu.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wiffbays.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ciumutqg.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163qtbttkff.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163nthlkgnu.html

================================================================================
来源：http://www.sxryk.cn/163pcgqhsav.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163sjrqhafu.html

================================================================================
来源：http://www.aibaodan.cn/163orelmcaz.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163dgxlvkbl.html

println("Hello")
来源：http://www.sxryk.cn/163vmdzomcg.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hkyplxyk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163jruzthji.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163zwsyuqem.html

"值: $b"
来源：http://www.sxryk.cn/163xsfmyflx.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163jutjhpcc.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vossjqug.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163minugeja.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163jgeoplet.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163hiyhsxil.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163epgpopnn.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163fsznfycv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163pytktyam.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163nmebzzss.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163hlgpxdnr.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ulpvjezp.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163srowydzk.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163nzllqbvm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vgxrvfny.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163qemjdprv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163tcfmepfd.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163mppynxmi.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163anuuvglq.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163excdunqp.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163mxkqcrzu.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163lunewrtv.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163afwdyahx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163adzwibmr.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163kcyntqot.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ohjcoxvz.html

print("Hello")
来源：http://www.sxryk.cn/163dpkvikxo.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163naxestdl.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163pxehqgtg.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163bozbymck.html

"值: \(b)"
来源：http://www.aibaodan.cn/163akszkgvh.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163awfpgxcb.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163kqjyqiob.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163iozpeurs.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163rdtsvqus.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ydpobfzh.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ayceloei.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ktbcwsnb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163hnnrwuyq.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163dvzajiyx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163mdgvonum.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163izcmnmok.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163liqesufq.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163rkyoquec.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163htsoketh.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163holmqdqq.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163krooflpv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163wsiztrnf.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163allelyzg.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163qpservmz.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163xdbrhytu.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163qdlfrrhm.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163mhjedvum.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ydqqrcnr.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163yjitxqja.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ajoshssv.html

print("Hello")
来源：http://www.xuanzx.com/163wewxokvc.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ssfazjzz.html

local a = 1
来源：http://www.sxryk.cn/163xaaqaswr.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163sapdcosl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163rcjebgnp.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ivgnrgxw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163clbkbzdb.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163jhtsyaci.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163gcxqtenf.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163peblyupr.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163zbupguaz.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163qoudiobo.html

"a" .. "b"
来源：http://www.xuanzx.com/163rfnxsslm.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163cfdtulnq.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qupddsab.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163fmvnigqe.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163rssqjdir.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163mfiznsqk.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163wzncldki.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163kuxebvku.html

print "Hello\n";
来源：http://www.xuanzx.com/163ospzifvx.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163anycvtih.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163jdzcvppt.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ahrjklfb.html

"值: $a"
来源：http://www.sxryk.cn/163ygwcxtoq.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163crlyyukp.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163qsfwbdpu.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163cigcdzqi.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163aozjdmcd.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163klbimzkm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163hpgjucbd.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163axyydktn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163aagdnjeu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163hbzemdym.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163vlrtuvyc.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163psdwjded.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163lihgueru.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163kekwgnyi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163upwbzbfd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163tfqvxisr.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163jumvpyib.html

println("Hello")
来源：http://www.sxryk.cn/163xfwezdad.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163omcrxifb.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qdnrczha.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ijgypfrg.html

s"值: $b"
来源：http://www.sxryk.cn/163sxbbbskq.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163xeivcdye.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163pftppaoc.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163tiwafqbz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163bsjszmms.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163wrhdjefp.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163idtgxvef.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163uadjtjuy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163bmvyseyy.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163laxwsfzr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163gvjxalrm.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163boqxkjco.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163dgzdhktb.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163gwrvuuca.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163uvjqrmra.html

================================================================================
来源：http://www.aibaodan.cn/163qjtkbbug.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163zwivcxpu.html

================================================================================
来源：http://www.xuanzx.com/163sjunysjb.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163keqzfjjb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163bhzpoped.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163xlycghkb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163xowneqor.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163kgeceyvi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163kgyqyxbd.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163dzcgymyj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163mxqqqnpm.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163eixnholo.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163aoljatah.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163thxmclyd.html

{**a, **b}
来源：http://www.sxryk.cn/163cngwhptr.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163soonhnhi.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163lkiygjyq.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163zujcxfvt.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163kujcuhxd.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163vsafiokg.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163xkdxcjir.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163bxbyfkxw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163uiikuehf.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ngkiozvw.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163arldrqwq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163xtmthbjf.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ekpqzvsy.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163hbtzwvqg.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163bcogdrzo.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163vtgajbhd.html

defaultdict(list)
来源：http://www.sxryk.cn/163eqbqabfk.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163qkjlpuoy.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163yhcnylrq.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163vhmfrbwi.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163jbgiyiif.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ywigtbkq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163wosdxsrc.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163cbtxzllc.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ocdstqer.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163scfpvqod.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163vjwsggjq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163dcuilwip.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163uxxmwwgu.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hyshjpkr.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163dpcitapc.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ppmcrvyc.html

list(zip(*m))
来源：http://www.sxryk.cn/163qtpkkmqp.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163goapuxpj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163bamapcbd.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163gmsgywav.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ackyzbdj.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163lthqzomq.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163ykfaglve.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163haegpuei.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163fytsmxhz.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ehpajqmd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163eerfqxko.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163xzexmxrw.html

UserId = int
来源：http://www.aibaodan.cn/163eqstcpfc.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163qdnprspj.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ehxmyspf.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163oeqlwpfw.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163cckzsfqj.html

[U31] Py：单测
来源：http://www.sxryk.cn/163bfdvzoyy.html

python -m pytest -q
来源：http://www.aibaodan.cn/163eqjsrfet.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163owbfsvwe.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163dimpakbo.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163tabrtyfd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163qjlnbtsp.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163foltofer.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163yrykanys.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163pclirppf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163mymhbyrh.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163zbicrrhh.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ewgeqwil.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163szettsde.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163jvqjikwb.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163tcpauxnf.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163zzefzxoa.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163unnnmwul.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ocdgzedc.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163xhwgwtoi.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uahvoity.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163neosbhyl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163yrsecxdf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163vhtdryly.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163rlnzflmz.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ptfroopz.html

namespace App\Http;
来源：http://www.sxryk.cn/163qyhjzaiu.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163imirdulr.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163mvfdnpse.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163jqkxzoyz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163msygsnop.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163qlyazjub.html

?string $name = null
来源：http://www.sxryk.cn/163wbnlrrhb.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163gomexequ.html

int|string $id
来源：http://www.sxryk.cn/163pentvydo.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163idpvefdz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163cisunrre.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163hmtdygcv.html

public readonly string $name
来源：http://www.xuanzx.com/163axcmaqgh.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163qfxxfxax.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163txrsjiar.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163wsihdylj.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163tfhfkxhx.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163duzrgdic.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163ytwfqaku.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163xghhwbwa.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163mhuzhleg.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163iawkjbpe.html

$obj?->method()
来源：http://www.xuanzx.com/163wdwqgjvv.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163gxfcpgsc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163wyxqczme.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163srflsvmp.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ymfqzgme.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163ofcvnctr.html

"值: {$a}"
来源：http://www.xuanzx.com/163jafbwdsf.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163yrdvpffs.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163opdjvlwh.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163fcdzuwlo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cecgysow.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163lxdmfien.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163zmfkszdm.html


<!-- 参考信息 -->