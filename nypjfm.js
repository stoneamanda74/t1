外链999!wailian999！

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163lwwvsaga.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163esccdqmm.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163wgyofpse.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163jkcqwlax.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jdtearvb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163esmquzcj.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ykhojhly.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qevtggys.html

[S37] C++：set
来源：http://www.sxryk.cn/163ravzqgvl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163qqlyhbjp.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163eoerhrww.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tmgjvyol.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163bgjctfcb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163wcydhlbj.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163gpmtnhko.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163rcnwzddn.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163vjtsksfi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163tmvuisbm.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163wenfezss.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163kyqmsrov.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163uccarnpw.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163crcdxjyx.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163qucbsxvr.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bkfpsuzm.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ivysxzcu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163gixdxjpt.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163qanmslni.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ytsqheng.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163glpawywi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163kvrdvnra.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163oowfhkvd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163tqqbiyqc.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163itfpsklk.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qiezjvif.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ehwpyibm.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163lfsahmwt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163wnmicpfk.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163zgjfbubx.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163xsnbrtvt.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ywotmcgq.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163izuepdpg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163flfjsapc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163elqkfegi.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163vnyrxwxm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163snwhmeep.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rdzgzgnc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163hspkaitw.html

[S56] C++：optional
来源：http://www.xuanzx.com/163eaacinng.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163zruaucyc.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wynvpwof.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163tjcatidm.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163zbfiumrq.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163wslhmkqd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163sgipszlu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163baqcmved.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163kajgbgkn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163zdtncpxx.html

================================================================================
来源：http://www.xuanzx.com/163ragvxasq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163necpdevk.html

================================================================================
来源：http://www.aibaodan.cn/163uumshwwz.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163xkyycuic.html

println("Hello")
来源：http://www.sxryk.cn/163hzrdfstb.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163iaderkky.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jdavoncp.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163jbfnccjf.html

"值: $b"
来源：http://www.xuanzx.com/163tkntevtg.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mnhibqmr.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163givwhrbx.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163dkxdkkye.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163bitijuqb.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ntohkuwa.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ogfaxbfn.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163cavwvdqe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ygvliqfs.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163fakretyv.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163iexzejhe.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163yeyqxuiz.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163qakrtutm.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163wiocoivn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163wbgelljt.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163awchppfz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163goieszls.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163pucxnwia.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163sadtsgwp.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163vmzhqiiz.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fllouzhy.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163jalksqlh.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zfcgocgc.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163wlahtkyp.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163mvjtynbh.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163sfexlrnw.html

print("Hello")
来源：http://www.aibaodan.cn/163aytinqum.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163fgrcbkyg.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163hotwiixe.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163vqjzmvfh.html

"值: \(b)"
来源：http://www.aibaodan.cn/163kulyyysf.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163zzjzojnz.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163uopnylaj.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163uztqpjpa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ogvxsnrm.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163zordztzz.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163fqcetihu.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163vttbrqdg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rsluotpf.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163udpdniyj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163mnicerok.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ighqaatm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163jtiukptn.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ibluvfji.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163mmywhuxw.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163yreldjsj.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163uyqpugtc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163pkjjlzds.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xuymykhn.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163uxtqcvnn.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163hdswgfvg.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163egtfkvrw.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163gkrgrmvp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163rkfseoyj.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163lmucbcai.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dunahkbo.html

print("Hello")
来源：http://www.aibaodan.cn/163dpquuobs.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163cqopuwgp.html

local a = 1
来源：http://www.sxryk.cn/163cxsrntsp.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163neqphbqm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163feolfbkc.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qzhqwwnn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163zriobblm.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ztiktkcl.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163jlhfglna.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163tdrwssii.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163mssillju.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ehztqxvl.html

"a" .. "b"
来源：http://www.sxryk.cn/163rgxbyffa.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163lwvxflzr.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163dgqoyjgg.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163dkrlgepa.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163wpppvtrj.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163hberzlbh.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163fekcdawk.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163pgnasxgk.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ndoudvrt.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163sfpfdfaz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163fpbiuhyp.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163phxcwgjh.html

"值: $a"
来源：http://www.aibaodan.cn/163bsjjyehv.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163tlvgzhko.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163qmvwtata.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ptnjjugb.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163hfownrph.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163glqswnbz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163tksgizow.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ffxeiulx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163kpfqkirt.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163brsqmsep.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163jafhoaxo.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ajhyaiwi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163hebaxzdc.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163sypagdwe.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163alawyltp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163bzqkwaus.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163lugditjo.html

println("Hello")
来源：http://www.aibaodan.cn/163lzorwzni.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163feteqrrh.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163skufoblx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163eagwkvax.html

s"值: $b"
来源：http://www.sxryk.cn/163lwwvhgjo.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163mpkynaih.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163jorknlej.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ytfvgkxq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163dphabnfq.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163fdlsdvxw.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163xqsixatn.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163onekmjpa.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163xozkmawq.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ibgndwsx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163wtldfcna.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163evoppkem.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ymwfwero.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163dkjdoaae.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163dogbfzga.html

================================================================================
来源：http://www.aibaodan.cn/163spddffbw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163folmppvk.html

================================================================================
来源：http://www.aibaodan.cn/163oxrvgepy.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163doigwmzu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163cjbngosd.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163opkheqot.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163levyvdbi.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163pdwyayff.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ercjlzfp.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163pvhzbvhb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163knnmwhnc.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163nuadxcsk.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163frhbobtp.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ysevzxrt.html

{**a, **b}
来源：http://www.xuanzx.com/163tkehetak.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163rjuzfoes.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163owwfdiii.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163herjbbmh.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163qydasixf.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ifgodqie.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ulfnjosc.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163xfxhqxuq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163otrcxemz.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163qeqblamn.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163lrilrhcw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163mcivoeyy.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163rostvldk.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163hhhlspnv.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163egivbqrg.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163kmwbleib.html

defaultdict(list)
来源：http://www.xuanzx.com/163qrmebtrm.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163qpcolwhb.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163eeebespk.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163dvkhfmsb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163bmfvntfd.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163dauvlwtm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163jzzjenhg.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163mbnpeorc.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ebmtpmub.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163suvfregy.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163clsorual.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163uhpyjbse.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163kfupnkyq.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163bmmhzgyx.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163wlodppmi.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163iiyjepir.html

list(zip(*m))
来源：http://www.xuanzx.com/163vppijmob.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163nnvuadas.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163yixbbedv.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163vmbjrbgi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163pvzvlajo.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163npkhpklb.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163wdglzenh.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163znpkjdku.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163tyicxjgf.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163grbcoqum.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163hqljcrnt.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163goylxpim.html

UserId = int
来源：http://www.sxryk.cn/163noxotaju.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163bvgtlawb.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163yhkbwtbn.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163tguaimnq.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163rnifitzx.html

[U31] Py：单测
来源：http://www.xuanzx.com/163sxpezcnd.html

python -m pytest -q
来源：http://www.xuanzx.com/163xnaikixg.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ttakspcv.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163dcicybbk.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163tozpxhqd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163xuytjggi.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163cvjipsai.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163jbbkgpky.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163tqbopobd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163ejeniblu.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163eqiiyvgi.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163lrhzuqgj.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ttauqqab.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163hvpcspyv.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163cuixwjym.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ermmirmd.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163gedfrjhx.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163qcuqckey.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163sejcrhun.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zyhgzbpw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163erkbbvkp.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163nmpikats.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ojjbicwa.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163sfqkmzow.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163orijuiho.html

namespace App\Http;
来源：http://www.sxryk.cn/163axnqjipx.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163dcugztzx.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163wvpdceev.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163vfzkdxiy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kjgvokau.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163pdseueym.html

?string $name = null
来源：http://www.xuanzx.com/163qwuzubku.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163pzkghvbx.html

int|string $id
来源：http://www.sxryk.cn/163rsknfwsl.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163arwuuupq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163nnhvrfqd.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163sqwuftzr.html

public readonly string $name
来源：http://www.aibaodan.cn/163bbpmibwg.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163cbvwqmhm.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163naycxmgt.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163jydhjkqn.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163eslqnrzw.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163torcaxvz.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163twvgnmto.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ulygvjeo.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163cbqzrtny.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163stkxotgp.html

$obj?->method()
来源：http://www.sxryk.cn/163rkfcedfn.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163pdjblhry.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163yuqgaygs.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163emmakbcw.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ubnodyul.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163dtjrrxsm.html

"值: {$a}"
来源：http://www.sxryk.cn/163icnjorox.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163ejwzffkm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163fvlgaaml.html


<!-- 参考信息 -->