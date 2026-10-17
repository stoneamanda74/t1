外链999!wailian999！

static int counter = 0;
来源：http://www.sxryk.cn/163aobxgjyx.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ukppnyaz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163cficcban.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163zyouzqsb.html

#ifndef X_H
来源：http://www.xuanzx.com/163odrdwnyb.html

#define X_H
来源：http://www.aibaodan.cn/163ycsyskqh.html

#endif
来源：http://www.xuanzx.com/163iuvwfpgo.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163lkdxudik.html

#include <iostream>
来源：http://www.aibaodan.cn/163gvngsacv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163llautdou.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163aonjrntb.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163idvsgngj.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163dcdsapvt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163yarkamwj.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163bcathufv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163fazjcnmu.html

[S35] C++：map
来源：http://www.sxryk.cn/163wjrbgjuc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vywugnwe.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163whifcfkd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163inbqkkcm.html

[S37] C++：set
来源：http://www.xuanzx.com/163vahtrrzd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163upffajgq.html

[S38] C++：排序
来源：http://www.sxryk.cn/163fvlpwtaa.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ozoxmzit.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163mhsierau.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163slahlagk.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ujahmssf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rljmnjqz.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163pawelwrc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163sojglejn.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163rpnnvouh.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163upjkdwtw.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163iefegfiz.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163bpveoefm.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163qyepbdpc.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163xgftbsmp.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hxbfayaw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ytwicjii.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163waqapvon.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163oudrzurk.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163utarvrkc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163zxuhsnas.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ezugnjft.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163bcvbibec.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163pmwpyjjk.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ogzzgiqm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ppvfkoym.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ebnpknuv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163olcxnzmy.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163giyxequr.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163jsmjnnyf.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163wxwvnzem.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163vmlzogvp.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163dygadnmo.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163hxqaytqa.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wxvbpkeh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163hsxfzmro.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163gbequtpy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163iogrhiao.html

[S56] C++：optional
来源：http://www.sxryk.cn/163vuzhgqoc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163jxitwhmi.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ngcrxvys.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163fnpqkuhp.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163masxuvrl.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163vsxwkdky.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163njmuooqb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ufemrkid.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163fbxzfxno.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163eiunnucg.html

================================================================================
来源：http://www.xuanzx.com/163lgztxwrs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163htitpkzc.html

================================================================================
来源：http://www.sxryk.cn/163gsfyyubb.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163basqhpbm.html

println("Hello")
来源：http://www.aibaodan.cn/163dfqpvjtp.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163qnikqnvq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ueybskmi.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163rvusdvqp.html

"值: $b"
来源：http://www.xuanzx.com/163jjyupeia.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nymvqtpk.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163dyplbrwg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163tagvbbqq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163oaybsaru.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ogvzqfxn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163euzapenr.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163stveqszs.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163eecilcap.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vatrodcm.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163lbjmdfuc.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ddljxovp.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163tpkopsgw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163mojyxnyl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163yubkicco.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163cjztpqcp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163fhvqzndw.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163nyiiudlo.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163smioijtr.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163dipwlyjz.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163sqrrvyqt.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163fdyhnlpp.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163yvzwrfwq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ufjtqoee.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ksgqqmqs.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163phmswfhq.html

print("Hello")
来源：http://www.sxryk.cn/163lnpnetba.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163rrphabxv.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163atoszrvg.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163eacmqdjd.html

"值: \(b)"
来源：http://www.sxryk.cn/163nfgyjzqn.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163snyvxotk.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ptfaqzaf.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163hsufhdma.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163yveysqxt.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163aspyajpw.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163upmivokf.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163mbafywkt.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163zasiywwm.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ktxhgkrr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163xnjjiltc.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163plukqvrd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163nnhjtiyd.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163qomohovn.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163uvettjyq.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163eqlapipk.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163pevhdyds.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163hkmzmnag.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163xjmrwuxj.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163pxxwjaiy.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ydiqegwj.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163qpdyzkkg.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163eydvnwec.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163fxhkfdxq.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163gamxflcu.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163pttxjyxa.html

print("Hello")
来源：http://www.xuanzx.com/163xzetbbtr.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163jxkxthkp.html

local a = 1
来源：http://www.sxryk.cn/163rwsmgkyf.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163imzixjrv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163hkqljwsk.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163pojnbpgp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163jqykzczg.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163sweonmio.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163qkjlekxq.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163acdclnqu.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163yxgvptxt.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163dyymhmnx.html

"a" .. "b"
来源：http://www.sxryk.cn/163ktscjzon.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163yidlpunt.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163pjkhhslb.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163inlvkjhf.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163yomodydr.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ciewtpjy.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163tbiztjlm.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163eyxrffur.html

print "Hello\n";
来源：http://www.aibaodan.cn/163eawuoped.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163bplfosqf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163drkkgwoi.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ugieflat.html

"值: $a"
来源：http://www.xuanzx.com/163xkjwogsw.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163pphlyqai.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163xrghbiyf.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163wycfitcm.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163zgmrpvji.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ntwejjiq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163xowiozyo.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163equongfb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ahqylsmf.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163yupkbxsn.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163xgshifln.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ruxagzzp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163itjdfxoi.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163pqwjozpc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163njzafkds.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163bqkivlqi.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163giuyojkm.html

println("Hello")
来源：http://www.xuanzx.com/163ejyvbyun.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163slhjbwks.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163adgcmryb.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ojzhdfwk.html

s"值: $b"
来源：http://www.aibaodan.cn/163dblrwgye.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ufnphmkn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163umfkydyv.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163fsrizrug.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163kkyxitwm.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163itiktmdi.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dubtztng.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163anaohsdv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163eefreonj.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163xikzwxkb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163rqjtdcxc.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163aevcfsfh.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163zwfblyid.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163eobdwrjf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163gebyhygz.html

================================================================================
来源：http://www.aibaodan.cn/163whibcjaz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163izvgnzof.html

================================================================================
来源：http://www.aibaodan.cn/163qspoavkt.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163mqwiywxa.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wmeengdc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163tzeetzis.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163jqbiwpkt.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163zeojfjms.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163jgnshxjh.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163csuzpguv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163rhkcjoeh.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163gfjcnpqs.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163tztexjve.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163chctgwup.html

{**a, **b}
来源：http://www.sxryk.cn/163zlfltjsh.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jzowdeer.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163sfaztmjq.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163rkctlmer.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163iunwrqtx.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163wbcrzcay.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163mxwkkmwq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163mdlaaojm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163dsifdnme.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ovvrukmq.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163qclflccn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163troyqjbi.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163xhbembuu.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ysdtvotd.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163wuoespvg.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jkeboyjz.html

defaultdict(list)
来源：http://www.xuanzx.com/163yrixqisp.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ruvsvvsq.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163fgwaljlh.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163vygdqkzf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163gqxadbci.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163xbsjvrpj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163rnakortb.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163bfrjfxwy.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163cjlfcrrp.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163frivuzqy.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163fozfjnex.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ziubypnw.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163fcuntwfp.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ypqnqhmw.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ihdumion.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163uezexbhk.html

list(zip(*m))
来源：http://www.aibaodan.cn/163lzssbzdg.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ggcfvoxl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163vjwbkahy.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ladnwzbx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163vurhalbz.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163abfzeckq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163psblpqtg.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163derhyatl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163vibmtioz.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ffacijcp.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163xjfhnwcm.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163pursrshd.html

UserId = int
来源：http://www.xuanzx.com/163xyxhmkgj.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163xwudkuoe.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163rpvjpnhv.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163fwlmhopx.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163moaxlueh.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ptkuipts.html

python -m pytest -q
来源：http://www.aibaodan.cn/163btsvhpzu.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163shtzcfca.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163nyhdpdmg.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163chwrgyaa.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163cjdibojt.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163vbiorelh.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163slcozivv.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163halwezxt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163sqzdojqu.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163vcrhjmzh.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ywxbghrv.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163tjbcwjpk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163vjxtiomn.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163beflciyu.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163pxivyaea.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163rhzhizjz.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163zvckpuiw.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163fojxnmgo.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163bujdlymj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ysomtnpd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163qprssyci.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163wefzlrne.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163kfgcslll.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163ovbpgjet.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gthzoyhi.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163eitbxbum.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163xkfmdctz.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ouajkbjt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hixjvzpm.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163gfxvcfsj.html

?string $name = null
来源：http://www.xuanzx.com/163xwicxvis.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163tyijapwp.html

int|string $id
来源：http://www.sxryk.cn/163qxwyjzld.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ybnzwzfn.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ogewqbax.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163tamqhyuk.html

public readonly string $name
来源：http://www.xuanzx.com/163yxdquhpj.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163vbtzeeds.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163afgrtiaj.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ouiepnmf.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163qonoenla.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163kdglcins.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163yzugoqch.html


<!-- 参考信息 -->