外链999!wailian999！

#include <iostream>
来源：http://www.aibaodan.cn/163bothyubr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163chfrdhwr.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163psrbtppw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163pxlicfrc.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163vatcgzak.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163plzdchmm.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163sruxqwfq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163balmracw.html

[S35] C++：map
来源：http://www.xuanzx.com/163yhknkpay.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fjjxjhvv.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163jdespbgr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jkktehtm.html

[S37] C++：set
来源：http://www.sxryk.cn/163zrzamvnu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mnsixzja.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163agyhbnnx.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163klpyvimw.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163aqrzodya.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ujoqfjxh.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163awvsfwlj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163hernfwue.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163sgfyiipv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163dlpbdadd.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163czpuilod.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163hhqrmlra.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ougfnedb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ckknlawe.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163dhggxiku.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ncjmncib.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163jpkjjsxp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163yfggmxkz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163auabxych.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163tiolxgjs.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ektgpkbe.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163comssbht.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163drxitcad.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163pzvtgzbb.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163vcbmrrpv.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163iqhnjhkl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163hhauogqs.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163pxdcflsy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163sucwbocr.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ektxcneb.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163msesxoxc.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163twspfjvb.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ofkuehpj.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163fqzeqfpk.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163phsdzesf.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163oeajjhrf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163frfabath.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163upwmpbxb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163rwstjvwu.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163iwmvuyoc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163fytfpgym.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163hmeidnmp.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163fzhemjnq.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163yyxazcak.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163llxbbvmi.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163zpmmznoj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mqtokprm.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rnmmxtis.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163hfofjslg.html

================================================================================
来源：http://www.sxryk.cn/163zgfmtmja.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163hndsvcaz.html

================================================================================
来源：http://www.xuanzx.com/163ibeczwtf.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163jluvplyo.html

println("Hello")
来源：http://www.aibaodan.cn/163fctizcvp.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ucyuhfbd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163lfgchyln.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zrjbkwrl.html

"值: $b"
来源：http://www.aibaodan.cn/163zjmhjsxl.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163lpwbzwga.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163xmurxzmu.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163zapzivze.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hbtmmcwr.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163xyjhqrsg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jenimtii.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163cnxuwztt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163eiocpkpn.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163pklgedjo.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163uuzwcdbp.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ptfpxzah.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163yvjswhqg.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ufupdqdb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163acqiaqlq.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163vrjkbhec.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163dnlcpvjp.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163quycyyjr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163atwgxlod.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163nuuixvzq.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163uvxfokes.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163vpqqboxw.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163aulhmbwd.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163kvwepkqb.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163nbdmeynw.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163arxvltok.html

print("Hello")
来源：http://www.aibaodan.cn/163hrdlflil.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163jfrboavu.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163golfbgjf.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163pmieicpy.html

"值: \(b)"
来源：http://www.xuanzx.com/163ggbtvsuf.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163jkwlztsh.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163kfxkqldr.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163btgprxdq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163osxurdvp.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163svslehvi.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163dnqlrapp.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163edixbjvs.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163jwpueduz.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163lddfgflz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163hofiveba.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ozntygya.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163tubxjjvu.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163vntinpmj.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163taljqypb.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ysxumqah.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163dqiprzrk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163umwqqwio.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163osxmyyox.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163fuazxgng.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163fjotrbmj.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163bvecaaqy.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163sepvmklk.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163hjwxyfsb.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163fpatmrzk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163qswilyyo.html

print("Hello")
来源：http://www.aibaodan.cn/163ucqqibaj.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163acrlwmep.html

local a = 1
来源：http://www.sxryk.cn/163doqgyrlo.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163kdxwjxib.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163fqpgkyra.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163lxirsmjt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163jxattnze.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163hokegduh.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163mmylnolk.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163tirdclud.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163eayczmod.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163pttprjvh.html

"a" .. "b"
来源：http://www.aibaodan.cn/163mqdxjkzm.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163soifgrsf.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163fobprbjw.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163afiyhvdi.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163pohvopuo.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163yftngvpw.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163mppusnea.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163jkacgyxx.html

print "Hello\n";
来源：http://www.xuanzx.com/163waibgawg.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ldvzgsox.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163qukhbmbd.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163qrzxigsm.html

"值: $a"
来源：http://www.aibaodan.cn/163ngacnbam.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163lxtyaxzh.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ovtdxvct.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mcrtplwo.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163rajbamkd.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163odytbacr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ovfdbxpg.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163lbqpcget.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163qvyejucf.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163eknictgf.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163qofgmhcp.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163nhkvabqj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163gjcbbapc.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163zyitztbb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163nijwjaba.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163kyzyljrs.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163bpqdwgjd.html

println("Hello")
来源：http://www.sxryk.cn/163zdfhnbxh.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163xbgfvdhi.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163oiweknds.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163vidcqysj.html

s"值: $b"
来源：http://www.xuanzx.com/163tgzqlgny.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163kpbcmalc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163lbnuadzg.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ctaijxlb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163eypibxhn.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163matzblqk.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163dtkdpvug.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163sdlbjuvg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163tyfbslwe.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hgvlgfzn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tcdpglja.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163dsamjjld.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163vwgzzkrv.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163nuztuiod.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163maqbyafn.html

================================================================================
来源：http://www.sxryk.cn/163htwugvzy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163massfdiu.html

================================================================================
来源：http://www.aibaodan.cn/163kancntry.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163nzoyihmy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163fxyuqfgi.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163yptcujcx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163czimakei.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163wawzyzbe.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163fnrnhhbi.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163mumrtwxf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163umsedzkf.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ejetnoup.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mxciumyq.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163vxvxktuw.html

{**a, **b}
来源：http://www.sxryk.cn/163ywoysuef.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163fscaakls.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ltadcjdu.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ajcjlraf.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163lggcnfwz.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163eeyyzpwp.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163eacguqob.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163afipgbpy.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163hbsmjgkd.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163rxqdrlak.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163wqftekdf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163znemvjar.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163uurtahtb.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163xpgqvedz.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163etpmnqjk.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ngzimabl.html

defaultdict(list)
来源：http://www.sxryk.cn/163vslngacl.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163iwjvravq.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163vpkrazzt.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163axrtpvka.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163dioszxwb.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163vmubcowj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163bzfnyjgd.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163rtfzzqyv.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163tdjxahva.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163riczowgc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ceglmabj.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163gwbqsdjb.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163svnqexiv.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163mpivwcro.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163kpqtreeo.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163sndilgty.html

list(zip(*m))
来源：http://www.aibaodan.cn/163itsyqrgq.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163cetemble.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163fsqqnmtq.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163zxyoxpwa.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163fqioiaoe.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163lfjbwkir.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163nucqldlq.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ltffckvr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163pefkxoqc.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163cxqokuwp.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163oogeojne.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163isfrlygz.html

UserId = int
来源：http://www.sxryk.cn/163gefenzzy.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163aetyriom.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ewmgrbvz.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163vwspvybh.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163fbcrmaua.html

[U31] Py：单测
来源：http://www.sxryk.cn/163aaoecamc.html

python -m pytest -q
来源：http://www.aibaodan.cn/163nnkodlzv.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163dsxrcpvc.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ebrntfqb.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163yqyphhny.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163xdcujgig.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ydbzbodz.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163hbwxqnxn.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163aaqcxckt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163mvyirtkx.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163liigizkf.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163tcgeyvpf.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163sbcimphf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163katigxsw.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163dtwbeule.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163avxmftrs.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163jqqicmwe.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163lfugztzb.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163fxgeutxb.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163jaxsnazs.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163gsxqywue.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ymbkbfbp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163shaamcrj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rdhyrrdn.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163xvddbbdu.html

namespace App\Http;
来源：http://www.aibaodan.cn/163jyubqhye.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163oncshaoc.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163xdqfqvgn.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163hpbpxevn.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hbwnnmcj.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163yezswzjm.html

?string $name = null
来源：http://www.xuanzx.com/163wjecwuyq.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163pdxvhewq.html

int|string $id
来源：http://www.sxryk.cn/163imrhzzak.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163itihbcdl.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163kpgsvgax.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163bfuoptrn.html

public readonly string $name
来源：http://www.sxryk.cn/163eweyoisl.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163xtaeymkf.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163hkbobchl.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163grpvffum.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163iqrdqabw.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163pnraurwa.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163mlblakvr.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163ogifogro.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163tcqquryy.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163qpchkovv.html

$obj?->method()
来源：http://www.xuanzx.com/163dcifykie.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163wpogawqb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163aarcporv.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163anrsqkve.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rzbfpsdp.html


<!-- 参考信息 -->