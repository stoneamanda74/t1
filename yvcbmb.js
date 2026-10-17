外链999!wailian999！

static int counter = 0;
来源：http://www.aibaodan.cn/163dhsfyhej.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163inpgszcz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163jsexyrns.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163bqntvwsq.html

#ifndef X_H
来源：http://www.sxryk.cn/163qntwdevl.html

#define X_H
来源：http://www.sxryk.cn/163qxvnfgvg.html

#endif
来源：http://www.sxryk.cn/163gwqikcmu.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163eublmhut.html

#include <iostream>
来源：http://www.xuanzx.com/163mpepmwif.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zntvulht.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163mtnrrpuh.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163btjiwiic.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163lcmqgndm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163oiededev.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163masphzox.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163pyvtiqde.html

[S35] C++：map
来源：http://www.sxryk.cn/163vuggmzks.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jswrmgat.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163gejjcdql.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ncqpznnf.html

[S37] C++：set
来源：http://www.sxryk.cn/163raqfnyvo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163zouxnweu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ltqoivne.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163uhsbpbpg.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ocsqkwxy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163pmtekyzw.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163chxdggqh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163gohydiux.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163eikmooxl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163pcbjbayr.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163kmqvuzwp.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163taevuerj.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163msmfyuli.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163nhrqhobc.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163bxozeeqq.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163jhixvhks.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163oaaufqth.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163yfwfejai.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163kobowlad.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163qiqaadue.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163djsnstpi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ixbuiczq.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163xjachkiv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ibjjydgt.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163rvytktit.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163kebwsrmn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163busxkitf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163hbjqazyw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163qsieemqy.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163gggkulnc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163znyqzimm.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163soxywage.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163meprhvyp.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ydhpqrni.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163mpwubqek.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ejhzbety.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163xhakjvha.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163uhrzlktt.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ydvydukh.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163xuzhjyyf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163daceycmy.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163dddszuaq.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163oauijndj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163rdxobdjw.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qpatwhbt.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ofgckgsu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163wztuijqy.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163fugwtyxp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ekzwytue.html

================================================================================
来源：http://www.aibaodan.cn/163hpfnxtsd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163bknuqjox.html

================================================================================
来源：http://www.sxryk.cn/163kqleokqv.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163fhoumejo.html

println("Hello")
来源：http://www.sxryk.cn/163juddpkvy.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163kbaamtki.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163juzrbagi.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wbwzgwyj.html

"值: $b"
来源：http://www.aibaodan.cn/163mayqnwgn.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163sesgergs.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163nmwtlaoq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163hhxaswrf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163cdhrqfyn.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163actrijex.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163crprboll.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163mxcqgmkr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163yxohifzi.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163nmgnklae.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163yhllzepk.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163mbgfplom.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163voifvrnx.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163dbrbsrkw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163azghfnov.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163aoxgopsh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163gjiwwywa.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qevwshvp.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163zsqnzkwm.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163muforcbl.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163zqslnoyh.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163dpurozpy.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ckprgemv.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163skdzrgbq.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163djecgaqq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163javdbxwt.html

print("Hello")
来源：http://www.aibaodan.cn/163hkwctpyg.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163pjcrcglk.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ejwfstrk.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163dxgcvldd.html

"值: \(b)"
来源：http://www.aibaodan.cn/163znsnamld.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163jthpbwvl.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163rtoffvfj.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163tmsizlgr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163dmudazlu.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163xpreqmek.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163cyfgzecw.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163tvwvyxfv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163navmeeif.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ttaseqvs.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163dkbhynfn.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163trwkhccz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163psrctshm.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163jtpchxzw.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163mfiogfsg.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163rhhxoddp.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163rbtxsprb.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163zclnafgg.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163rczpzciw.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163dlylmpyr.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163xekobzmc.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163zjdyrvoa.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163vgzhxglx.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163tlbulfks.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163esjnjokd.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163syxxeuif.html

print("Hello")
来源：http://www.xuanzx.com/163roxhunmm.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163kwrhfzaa.html

local a = 1
来源：http://www.sxryk.cn/163cypetqoi.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163rxtkryzh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163mapemqsn.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163wxuarfas.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163zbphflla.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ffbtbkso.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163gwdleuiy.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163dbucqkzr.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jswwncoe.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163piplvive.html

"a" .. "b"
来源：http://www.aibaodan.cn/163pnytpxvp.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163izgrewuf.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163czusxzoz.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163wpbdnurz.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163csokbmjs.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dvclxvky.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ogfutnit.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163tsfzbuyr.html

print "Hello\n";
来源：http://www.xuanzx.com/163pnutyrtu.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wkqwlklg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163qtfmkzcm.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163usatmtfr.html

"值: $a"
来源：http://www.aibaodan.cn/163veficrsm.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163kvwnbdhr.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ajdnbsnu.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163shkvzigg.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163becgamty.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163dmtdozmu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163qyurdqca.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163csepnqof.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163aobstcje.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163relufwzm.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163bnjomxib.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ctitcmpa.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163vdfvpneq.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163kpgcssml.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163jejxohsr.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ombqygqs.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163rrzjbxjf.html

println("Hello")
来源：http://www.sxryk.cn/163eggqubhl.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163aeawzgsh.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163cmlfkylp.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163pjemetld.html

s"值: $b"
来源：http://www.aibaodan.cn/163aqgcxcae.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ychdtver.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163qwrjxjty.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163qwitvezx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163dmhofypv.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163yorletwn.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163edcihndm.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163olswoniy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ofrymmur.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163svgaayph.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163gibjzjza.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163owqyodqz.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163syfyyfjo.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163oshtzsxh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163czpdxpoi.html

================================================================================
来源：http://www.sxryk.cn/163mnohzbxz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163dscikyvq.html

================================================================================
来源：http://www.sxryk.cn/163sfhzxcgm.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163yalpibik.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163eyuznmni.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ribdwtso.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ziwlbnui.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163kawhmqin.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163iqytxtsl.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163pejfxfry.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163pldkrypb.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163nbycpbpl.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163uyfcnedo.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163cdjbexdf.html

{**a, **b}
来源：http://www.aibaodan.cn/163yjwwylfq.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163pqtkweld.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163udbockuo.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163qehalzuy.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163vbwnktbq.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163griswleu.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ovjdtceg.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163sheupinq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163qwcyhgiw.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163wgjoqrdj.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163uabpwqml.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163eatehycj.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163kxnvdvbw.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163oqrwyikg.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163lylhsskv.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ngijjvym.html

defaultdict(list)
来源：http://www.sxryk.cn/163fudswfhg.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163avlrqsrt.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163xzbrhjma.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163frbcmkbz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163vehlvkmr.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163iltftnxi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163vuffydls.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163iqrpcsdv.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163atfnucnu.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163garmpjpw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163lefuvbfa.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163twhkeibg.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163vmnrefan.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163plbsuswv.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ysixqwfg.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163rxmehxse.html

list(zip(*m))
来源：http://www.sxryk.cn/163xpmunrsq.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163jnyilybx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ryzeyzvx.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163mptpmetl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163oonncetg.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163kfjuwrtw.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163iozhdupo.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163eohcysjy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163bnntiyvj.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163vcfxdnmn.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163cjybagdq.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163tosgdrca.html

UserId = int
来源：http://www.aibaodan.cn/163pnzqoyxo.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163gwssqege.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163torpjhqn.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163bmqvxqlw.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163drwgmvbt.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163lzxmavae.html

python -m pytest -q
来源：http://www.xuanzx.com/163ztufxwyt.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163bcgjydgj.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163fochgexs.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163eecemaek.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163jdjbthvz.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163lppkimvx.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163nkkyqysq.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163tywrytpu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163upvbjiwn.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163szblbmnh.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163eceqnihe.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163fyzarpzz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163qvftabsj.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ytltbbyc.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163egodjclu.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163aoltuokl.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163hdyzdwcp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ehqtjlpf.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xmrgqtvr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163qcoaceel.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163qksptokq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163zaewsywu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163gziushun.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163pqypknni.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gixxvxwt.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163luwlvobe.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ikjcntyj.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163egbdzjgf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163syrojfrv.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163xjicsyyd.html

?string $name = null
来源：http://www.sxryk.cn/163ppumvkzg.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163nbxxewmw.html

int|string $id
来源：http://www.sxryk.cn/163urcrmidk.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163bhdrifii.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163tmcuhatw.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163gpuxhzeg.html

public readonly string $name
来源：http://www.sxryk.cn/163cfkgagcc.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163bkzaqqbf.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163mgobhddd.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163dtycospw.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163wtaqkifq.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163aysnzpxr.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163vyllhkeg.html


<!-- 参考信息 -->