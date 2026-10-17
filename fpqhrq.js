外链999!wailian999！

static int counter = 0;
来源：http://www.xuanzx.com/163mshpzsjy.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163qqvinmuv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163infwccwr.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dnoiiynr.html

#ifndef X_H
来源：http://www.xuanzx.com/163oohqjjdd.html

#define X_H
来源：http://www.sxryk.cn/163zqdtpfen.html

#endif
来源：http://www.sxryk.cn/163swnvttxk.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ksemjhzx.html

#include <iostream>
来源：http://www.sxryk.cn/163gjleffbe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163gxkvgmwx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163jgxqxqqy.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163pgqwatka.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163oqnhvmlv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163mlwtgdch.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163rzyinxon.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163zttqsfoo.html

[S35] C++：map
来源：http://www.sxryk.cn/163rtnmrbfz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mnrwaduh.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163reiqsyqj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vxyphczj.html

[S37] C++：set
来源：http://www.aibaodan.cn/163pygjgtys.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163jhgxqikg.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163xageyxfw.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163natqoely.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163pzmzmmjs.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fzxrxshw.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163pdsjzzpc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lqxikzju.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163zcyasxzu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163xwonacvm.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wbzwpmwn.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163fneidqae.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ivelhnoz.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zscjfihm.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ybsggebv.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163yqpramxy.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163amfilgzh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163swvvqpex.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ddbuzdmo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163omqwuxce.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163mdyecfpy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163chvfwdfw.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163nbmppiro.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163fhiklfww.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163gfjhwrgo.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163zkpmsjmv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163mmptcrmm.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163snsbywux.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163liirpjrg.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163jnaagnkb.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163pyjipadx.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163fqcgplpw.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163zdkftdws.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163utemrjdh.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163cfqsnyms.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163kaewzxgu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163wludqxfl.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163tisszvuc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163jdfqyged.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cuawpngx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163pmmiyfbv.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163yfigmuue.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163zrbdkuuw.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ftdrswdu.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163evupwwiy.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163perjqgcu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163jijzifxa.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163miqmhtyo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163csosefio.html

================================================================================
来源：http://www.xuanzx.com/163wncexqgf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163aynswzuv.html

================================================================================
来源：http://www.sxryk.cn/163guqpclkf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163jzgzeoju.html

println("Hello")
来源：http://www.sxryk.cn/163iqagkksr.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163gxhmsvyt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163prhowjlp.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163qjybtntd.html

"值: $b"
来源：http://www.sxryk.cn/163ydmxtfld.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qahqpoyu.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ggtnwqix.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163nokgidri.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163zwxbmnor.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ignmddwb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ekodmtxe.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jsdytfsc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163hxcxicoc.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163prdqncue.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163yjbgybfw.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ipmmcafe.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163lsfujifb.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163rdmeydse.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163zunesgsz.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163wrzpwtbc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xfegesrv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163sqagwyha.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ssjzalfl.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163gqlavppn.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163guasdlpf.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163odekwabr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163wretwcmi.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vjfxsoeq.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163dwjymgjj.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163obprnioa.html

print("Hello")
来源：http://www.aibaodan.cn/163lvgptewy.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163usxdxrzt.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163zbzmwgau.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ijwjkwxy.html

"值: \(b)"
来源：http://www.sxryk.cn/163vjitktzf.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163xlhjipkh.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163xvlvrcek.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ppenrtjy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163eqnrwwzh.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163cddxmtyu.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ntfznoom.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163pghovvio.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jkvuwozz.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163twekntov.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rdrridom.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ypllzfbv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163glqadbwi.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163mvoonjei.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lrwjqemj.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163brlkcyoh.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163mjxpeczr.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163mhukptad.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163btwzdpxj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163rlmaigto.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ffsaoesy.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163riydjcqh.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163nupzejjn.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163danhfaim.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163wgwjrlms.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163nbnywjpw.html

print("Hello")
来源：http://www.sxryk.cn/163mkbharmj.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163krtgrfko.html

local a = 1
来源：http://www.xuanzx.com/163xsczbnpf.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163wtervumz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ujfvidon.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163scchdznl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163rsqcvwha.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163mdiuomvo.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163pqtktsqh.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163psdqtvxf.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163zwptfnmh.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163fpdrpsnp.html

"a" .. "b"
来源：http://www.xuanzx.com/163wvwsiblx.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xjqxjghv.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163kduewbla.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ikeoqeyk.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163raciaurm.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163pgnzejsq.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163yhyjqtzm.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163zqclvlbd.html

print "Hello\n";
来源：http://www.xuanzx.com/163joyvsjkn.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163aieehjgg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163odydlhxk.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163glnwhtbk.html

"值: $a"
来源：http://www.sxryk.cn/163nhhthsfp.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163psvuecae.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163vvmyigij.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163rpmoqfhn.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163eylsiduc.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163robgqrvq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163bmwerors.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ioekfpxn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163chftohcp.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163keedauvy.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163pqxxsdjc.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ozuazqer.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163hgoqjhra.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163rwyxlnqh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163vxyaipif.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163dlinkkbl.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163sdjbhkoi.html

println("Hello")
来源：http://www.sxryk.cn/163vumwmrpv.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163jpbxazhq.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163turlbasc.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163mmpmflsx.html

s"值: $b"
来源：http://www.sxryk.cn/163kgkscknv.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163hcggsuhx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163hfofshmz.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ywdazuff.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163xtnexqxs.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163vbpgwebu.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163yekohhzq.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163qdtldxqj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163axexjwxt.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163vybzssvv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163cjbqcdlh.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163tcejutzd.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163dvtpsssd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163yzcrrjir.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163djrvhprs.html

================================================================================
来源：http://www.xuanzx.com/163izdwpovk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163usdyfskp.html

================================================================================
来源：http://www.aibaodan.cn/163yvpowunu.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163xuipkkzj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163llqdxayk.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163xwkhafia.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163elsbhduz.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ulmigyfa.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163kltzxbam.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163afaajmon.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163anumlbhk.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163mmdpmvxq.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zyuqldkm.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ihgetzjz.html

{**a, **b}
来源：http://www.sxryk.cn/163eayjqaxo.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163fhcgyngd.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163winxgldy.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163aadsfsng.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163nqnnmvux.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163afweuvok.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163aknjpfgs.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163oatgnbry.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163xkuynsla.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163mhdvgnts.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163vaggcwxx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163nvkarmdz.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163iwdeaknc.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163lqdmfdvk.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163rdpicrpm.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163jjvtzgrq.html

defaultdict(list)
来源：http://www.aibaodan.cn/163gwfdcwoo.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163liiflhsx.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163alcifwhh.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163hgbisnmc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ywugrefk.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163bejjuenf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163jxfohwkt.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163hqvkesxd.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163xwhyvtin.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163zmiqvdpa.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163uggmejww.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163dfzkcgnv.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163zkztwlct.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163zptqdssb.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ovfetwtq.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ydhghnoe.html

list(zip(*m))
来源：http://www.xuanzx.com/163gthxunvh.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ssmwctot.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ihcsonry.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163fmjxqbmq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163bnlavfyg.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163gxybkfok.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ttfzqkge.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ovucxjco.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163qheuslwk.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163bhnrcyeq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163gseexgae.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163qtzzyhps.html

UserId = int
来源：http://www.sxryk.cn/163pasndhun.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163rytydram.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163umarqcyc.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163dhbqietc.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163jttjikft.html

[U31] Py：单测
来源：http://www.sxryk.cn/163nyuzlfii.html

python -m pytest -q
来源：http://www.xuanzx.com/163gntiyywv.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163bsfvltgr.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163tzcihvpf.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163cbjfbiwn.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163rlytuecc.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163thbsuaqm.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163glmwxqrb.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163lljmuppe.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163tfagygwi.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163cofkfspa.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163uixlfzox.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ycdtqamp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163zgjyxofy.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163bttypvcc.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ykqpqoac.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163dyykcqrr.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163bavzopub.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163fufmuteo.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163yxikembq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163yxzpasyk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163xxrdkxzk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163yfhqflmg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163oggarzps.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163vltyfdjy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163knulownj.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163iuwppaut.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163nsoewlvg.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163deeogdhl.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163eogalmao.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163sofyveew.html

?string $name = null
来源：http://www.aibaodan.cn/163gtlazlfh.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163atatttmn.html

int|string $id
来源：http://www.aibaodan.cn/163dksnaeht.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163cqoaznrx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163xggiljwx.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163zukpasul.html

public readonly string $name
来源：http://www.xuanzx.com/163ajrckgsp.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163xoqyaxzm.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ogjmfyxf.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163bmslbsiz.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163zxilryyb.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163gaduqflj.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163qlqeqhef.html


<!-- 参考信息 -->