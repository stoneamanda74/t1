外链999!wailian999！

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163diucuqjh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163icisuhtj.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163tpoqoxqv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163yiyfugao.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jvwdxweh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pssvsozt.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163wsrrfnkw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lhveadns.html

[S37] C++：set
来源：http://www.xuanzx.com/163xhuoaigd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ewpguvlp.html

[S38] C++：排序
来源：http://www.xuanzx.com/163kfjjboei.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qcanxkpn.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xybblant.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163cxddukwv.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163vbutvnib.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163foairybm.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163gatmegnf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163lqisknoi.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163llkuecrx.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163otjdxwgc.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163bhwdwqfm.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163xapadzpr.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163nqohzbbd.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163swvartto.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163mkpzudij.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163dwcwudsj.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163yfzxkyww.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163njydpxgx.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163yknrbspj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163pazmequs.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163yluzkctj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163roisaaik.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163pbxbgdxr.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163famzqcdk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jpizvzvw.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163bobbizwi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163xpgiuzfh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163xxodsbxk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163tviruujl.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163uhrcupvz.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163mhskdctg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mcglcbim.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163vffbytaa.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163usbujymo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qjkwgmny.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163lrnwaxqh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163jqfyqoih.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163hjjqnarw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163tiisoljn.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lrmvzxif.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163udunhibr.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xqonpeky.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163yhmzciim.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163qmoksnew.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163iegvgvhf.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163uycofrjl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163doranbsw.html

================================================================================
来源：http://www.sxryk.cn/163cobykgxl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zzzjdpem.html

================================================================================
来源：http://www.xuanzx.com/163ltgbpyqg.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163tzjekxzk.html

println("Hello")
来源：http://www.xuanzx.com/163sstodzpy.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163qooimxih.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163yylhwoce.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163oosnqjew.html

"值: $b"
来源：http://www.sxryk.cn/163qxwfebwz.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163fkbtfrea.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163slyayfea.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qgwhnwik.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163reezeqdh.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ifrvpnhy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qxclsnsn.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163expgikaq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163dhrpksyw.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163goeoncxj.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163mcokybyn.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163sgzuamjf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163tfpxtzid.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nlkkskrt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ekrebzbq.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163nsbimhtd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163yfmbikhc.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163mbxuajzh.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ktbpqvtj.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ebuoodsj.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163qdnjomhm.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163yivogkxq.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ddrakcdk.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163iugzgmsp.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163qozjngip.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163xlannhpp.html

print("Hello")
来源：http://www.sxryk.cn/163gsrgrshl.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163avkunyqw.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163haflvefc.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ipdsrqqz.html

"值: \(b)"
来源：http://www.sxryk.cn/163kodzanpy.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163emiezefq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163gmmopxpr.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163obojswmu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163eviwkkqx.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hltqjfhd.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163zwhdjapg.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163anbtvlgs.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163phgrzxnd.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163iyixwxjv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163wurxeclf.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163kcqnzgdu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163uvkuutcs.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163cmsxsnsn.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163odrikjwh.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163nqfpxmoh.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163djeojzsh.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163nkcwswpg.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163jbrllafx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163xglsohvc.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163hluulglj.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ozhefvqb.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163mgyyytdx.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163gzflbjes.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ksbrwhyj.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163mdeyyjkq.html

print("Hello")
来源：http://www.sxryk.cn/163dfsakzcr.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163wwluvghn.html

local a = 1
来源：http://www.sxryk.cn/163wajebibu.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ovbpasxw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ovxuiglb.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163exlpxula.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163gpmuolfv.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163pkyrkcvd.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163jgmhdkke.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ddyeeamh.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163rfhvkzvg.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163knmrxedq.html

"a" .. "b"
来源：http://www.aibaodan.cn/163sonexbtz.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ltkppomg.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163buaxqkrd.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163wxjvvgdf.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163bhvqtbtf.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163khazygkn.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gnryzfjz.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163cqgihazx.html

print "Hello\n";
来源：http://www.aibaodan.cn/163hfzzjajx.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163oegixllf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ugezvyoz.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163xofzmqpp.html

"值: $a"
来源：http://www.sxryk.cn/163xfieltsv.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163iqxbjcmb.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ltgpuyqp.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163sueihrww.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163pugtnjcl.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163iusrnvax.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163zpwravpg.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163cqvyipjy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163bbrzlthv.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163xtxkonkz.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ootgpaoc.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163lulfxwzr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163heefpnli.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163lzxllmvo.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163hqngwwbh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163rnttrzzx.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163piddswrh.html

println("Hello")
来源：http://www.aibaodan.cn/163dveybuai.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163zmyeqzit.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163xqhmkqdh.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ywlpgnmp.html

s"值: $b"
来源：http://www.sxryk.cn/163ibeabyva.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163yycxbgwx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163xcpkeiun.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163bdlmxvte.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ylhzcuvw.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163nadozpoi.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ttnknbuo.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hcmegtud.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163gagshewh.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163jqhebnjn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ithepuxu.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163sgdbnybm.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163qdhnqrli.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mgncujux.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163olhgisej.html

================================================================================
来源：http://www.xuanzx.com/163nglwtvpn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ftddvjaj.html

================================================================================
来源：http://www.sxryk.cn/163suotpnqr.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163tvklpqvd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163fkuewwwc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163qgaugoex.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vyvapweh.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163utzxogow.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163xlepkgvh.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163hocnwmer.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163jjvndpnh.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163hokqnmej.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163isiqsqcf.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163bygzmvri.html

{**a, **b}
来源：http://www.aibaodan.cn/163ytesczel.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ehytwqtv.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163mnfufukz.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163engrlhgw.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163elxwmszo.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ecbdqbex.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hhliqjzw.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163svertiwz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163oquwadic.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163fxskddfk.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163pjfhffgq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163rhjnsmab.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163rsslxxjg.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ggnqlisy.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ixzmcdmc.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163xbkzppik.html

defaultdict(list)
来源：http://www.aibaodan.cn/163cgrozdss.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163qnyloslo.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ulojzgyc.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ndceeeyz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163yvleisqx.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163kjyjkqzm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163oyzbspni.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163mskunnbp.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163efgenknm.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163eqlfdyyo.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163yonvlvwp.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163smkuzlvk.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163htlmrizt.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163zqruzmzu.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163nsooukcl.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163eoibmlmj.html

list(zip(*m))
来源：http://www.xuanzx.com/163ryudqxqk.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163weafkjmc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163etjhezat.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163nryquyzw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163vhnrpxak.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163etcftlty.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163losednqv.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163bydnlztf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163diuocufy.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163uhurcoxx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163eokalset.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ioavrunn.html

UserId = int
来源：http://www.aibaodan.cn/163ripolsbw.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163qworjuzd.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163azclrngb.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163oakrjhos.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163nvxazdlm.html

[U31] Py：单测
来源：http://www.xuanzx.com/163wswlvwva.html

python -m pytest -q
来源：http://www.sxryk.cn/163pjysxpch.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163tsdejddw.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163keybgmnr.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163mnjaxeig.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163ikrgofsm.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163embzjnhd.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163pvjouyqz.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163unyvkcgb.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163nvlxplnr.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163hbtzlesl.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163mthbjrhq.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163vdpbfbac.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163filmcobh.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163qtdlcayd.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163thmuumna.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163nnslkcxl.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163pdlnyhoo.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163henzlang.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sayjzogn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163wdwtwyjr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163twzqyyah.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163dgpnvuvm.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163nrssfozw.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163garvivov.html

namespace App\Http;
来源：http://www.sxryk.cn/163rvhbijww.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163mtsxtjys.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163ewshagfe.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163njkivcrf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bvammnlw.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163oshykrbe.html

?string $name = null
来源：http://www.xuanzx.com/163smwxsxsp.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163qbkpunpf.html

int|string $id
来源：http://www.aibaodan.cn/163yjeefhkx.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163mzcnjstc.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163krpokqjy.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163gsrxginc.html

public readonly string $name
来源：http://www.aibaodan.cn/163daxipnan.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163fmhdazme.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163hguoyoxl.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163iagmonfn.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163enjnblzv.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163iyrgexdi.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163wakgdcvf.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163mytvwkgf.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163avridfhz.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163pfspkkhc.html

$obj?->method()
来源：http://www.aibaodan.cn/163eaqnbhcn.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163qvraofzf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163qmxlmvvk.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163skeopmko.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163etjexpsa.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163bwalvwon.html

"值: {$a}"
来源：http://www.xuanzx.com/163jghfksdt.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163daxjptnn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163lekuxulb.html


<!-- 参考信息 -->