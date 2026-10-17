外链999!wailian999！

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163qiwznzfz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163snrilmug.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163fnxrvcqk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ansqharc.html

[S35] C++：map
来源：http://www.xuanzx.com/163rnsfwzas.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gjulhgbz.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163eobwflxi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cfscfbul.html

[S37] C++：set
来源：http://www.aibaodan.cn/163hhlrvjlu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163auueirew.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163dnivjfpg.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163iwrelokp.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163roaijxbg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163sawfxqib.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163llakrrjw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cbxcnpie.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ealisuxd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163aqalmaex.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163dhvcuxmv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163xwihqewj.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163yeatromx.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163fljlolpr.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163lvlwvior.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163waqwwurj.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rhetmlgb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163zddftpyh.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163clnhmccc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163hccvwviu.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ftuaweht.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163avpologu.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ednwxrii.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163lasmmvmm.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ldjylenm.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163kpkymhjs.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jvrrmjgu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163coswfvva.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163glysvgpm.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163lddeoekw.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163utvrhbkj.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163lmjttiky.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163iqbpnqcb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163benfuhvg.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163wothicgy.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ctzzqlbh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163xxqucprc.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qadprlax.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163lxbfyzcs.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tmamttew.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163omltruyv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163nrrtacta.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163pfxxxsrz.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163jdkkjkir.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163gpmbcrzd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ihyryztr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163cvgimflt.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fuvlkivn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163uwllkknp.html

================================================================================
来源：http://www.aibaodan.cn/163nqprfdrz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163roijcjbc.html

================================================================================
来源：http://www.xuanzx.com/163oykmhdmo.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163fhfvcghm.html

println("Hello")
来源：http://www.aibaodan.cn/163jbaonuzq.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163beavcjzv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163wgczbucc.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163dajjuwru.html

"值: $b"
来源：http://www.sxryk.cn/163nnazcxjz.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163qvhvvjhp.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ygsvmfuc.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163jnwopzex.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163xvqbdrtv.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163bearwwvi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163mxkmwgeo.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163rzggahqk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163dfejqydr.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163wrtzrwzv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ebcyqusp.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163jwjicomb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163glozirdk.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163umsarodq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163diahmhso.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163adsrqilt.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163pjgxkyqu.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163nabcwwch.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zhlnfjij.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ldwzpadx.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163lpqherxn.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163bvevvtkt.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163azprnhko.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163woakyvhd.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163oymufwst.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163rurfkfep.html

print("Hello")
来源：http://www.sxryk.cn/163cjopzbyu.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ajremdlz.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ngqwpmxb.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163pzmfsraz.html

"值: \(b)"
来源：http://www.sxryk.cn/163kaaalslt.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163lcsexsca.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ulimaxof.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163jmeonqgk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163jstgdbuv.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163mcsgcdsw.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ygmkzxqs.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163wcuvzzlg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163docncrga.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ijkfcobr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163jypvlzjl.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163wqjuivkw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wrfbwomb.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163fqxgbjhj.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ygylxpjv.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163hfyclbcl.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163pizeraih.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163cdqvbcwb.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ajtvnzin.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163izngqlxj.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163pemqsfsn.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163feufhrtd.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163wztyjdwa.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163bxhejwvk.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163tmitxocz.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163rejdpypm.html

print("Hello")
来源：http://www.aibaodan.cn/163qsymekwc.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163yjxykwpg.html

local a = 1
来源：http://www.sxryk.cn/163gyaqfeaw.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163hlzrhprn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ibirvbdo.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163gehsklqu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163vvdinlhz.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163pqgtkpmv.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163vrrwrkyc.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163tbaajivd.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163yqdyhltc.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163rivdamkc.html

"a" .. "b"
来源：http://www.sxryk.cn/163kvmszdpj.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163xbykusvm.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163vbzacqsx.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163apadfwah.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163szdulwpx.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163wtsgqnqh.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163tivtdide.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163nigrfwjl.html

print "Hello\n";
来源：http://www.xuanzx.com/163babzygrw.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163oqxmevdv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163jfhnxusb.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163mvpkoljx.html

"值: $a"
来源：http://www.sxryk.cn/163uewxdybp.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163nzbrwflt.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163tmctscjx.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163svtbuhvv.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163spvqmqzs.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ptoaxsln.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163axryghmw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163askpmkue.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ysylajbl.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163qvfhbrlt.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163fwddaybr.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163bfvijxse.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163yowvqlib.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163zdpoyptt.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163vjdlchuz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163xogkaeqn.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163kxqlklhq.html

println("Hello")
来源：http://www.aibaodan.cn/163jtiyhkrc.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hpbgmjag.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bbquszau.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163npkwxnxq.html

s"值: $b"
来源：http://www.xuanzx.com/163udchygpm.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163fckspwhe.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163qhopbeus.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163itwlvjus.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163aevjnxnq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163aswntdiz.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wdclqsoi.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163jkpthdbx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163iwzdddgm.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163vqnatvcz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163pfmykdmu.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163qekjanon.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ysqkfnhy.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ridcowbf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163tgwuekhs.html

================================================================================
来源：http://www.aibaodan.cn/163yztrdlcn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ujrfzbmi.html

================================================================================
来源：http://www.sxryk.cn/163hrdlfwhw.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163bsbjdjtp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163llfsxxkg.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ooifjoqr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163dwckhgvx.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163aamejobq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163byntwpwh.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163yneenfda.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163dqisyomh.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163vdvakeay.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163hnzngyot.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163yssvckqr.html

{**a, **b}
来源：http://www.aibaodan.cn/163rvimtjux.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ncuacfgz.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163vjpqwsgv.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163aqsqbqat.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163xaapuyqe.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163hiwuytzl.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163wofrwoxv.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163larpvclz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163qdkffpep.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163mqagqnbc.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163moqxhetj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163exivuoyt.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163lwpzvbkz.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163nmlubeen.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163lbozqbqm.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163glugnmtc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163uwatadmi.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163zyjwlnli.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163hgfbxgjy.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163hbgdcjqd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163zqllllff.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163qyarukhz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163xvmljcvb.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163nmmdwmnb.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163hfpsjyfy.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163sunfqzti.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163plideqft.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hndtvulk.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163avotujph.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163aonwbxcf.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ojrzlcsz.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163gjnrcrkg.html

list(zip(*m))
来源：http://www.aibaodan.cn/163cmdmamuk.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163admtqmhg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163wymhlmpe.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163winbiupj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ceeddziw.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163qulsqhqt.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163jjoahqca.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163pksgdyrd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163lsinbxqx.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163plldoatl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163inkkimek.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163mfwpoeuu.html

UserId = int
来源：http://www.aibaodan.cn/163rwcjeuap.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163cwubpoxg.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163emusqvrb.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163wknmyakc.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163edouuzul.html

[U31] Py：单测
来源：http://www.xuanzx.com/163otylndzq.html

python -m pytest -q
来源：http://www.xuanzx.com/163cjylgaou.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163zzojkuhu.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163abalqrvz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163yjmsigky.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163sszrsdnp.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163vmpdqsny.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163yzjbchjg.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163efjjecnv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163kajbhdyq.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163qwmuoigx.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ektattpl.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ghtueqog.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163istufjug.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163hfevbxkw.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163gtvsddrd.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163byrsbwoo.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163lfuwtffq.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ohqybjcu.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vtxzogws.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ejnyefbf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163aaskrfyv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163jkrsmgrg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163idurwywy.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163bagiigsq.html

namespace App\Http;
来源：http://www.sxryk.cn/163qczgtulx.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163yivmrtfu.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163fyfoqnso.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163arndboty.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163osgyhiqr.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163rujtzugj.html

?string $name = null
来源：http://www.aibaodan.cn/163bjusxchr.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163lhzwukkt.html

int|string $id
来源：http://www.sxryk.cn/163lkxgpwsq.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163gawrlysu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ogweswke.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163zxinuirb.html

public readonly string $name
来源：http://www.sxryk.cn/163kmmdpjto.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163pjxiztzu.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163kveqahfr.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163bapjmjvv.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ikmuxtqa.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163rwhrttmc.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163kreufeyx.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163oggygmqa.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163rwpvugwa.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163rjrgdwco.html

$obj?->method()
来源：http://www.xuanzx.com/163uazaibgb.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163rejlqhfh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ewmhxrwz.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163swvfbkga.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ympqavgj.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163vjbyevlv.html

"值: {$a}"
来源：http://www.aibaodan.cn/163rzaiptkb.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163avvqtzyn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163ufkqfann.html


<!-- 参考信息 -->