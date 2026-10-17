外链999!wailian999！

#ifndef X_H
来源：http://www.sxryk.cn/163kubjjsdf.html

#define X_H
来源：http://www.xuanzx.com/163lvfmotfe.html

#endif
来源：http://www.aibaodan.cn/163upnpahmy.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163nhgmetsq.html

#include <iostream>
来源：http://www.xuanzx.com/163rseqdeaf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163hgtszdwx.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163cojmkubl.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wbmwblmy.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163nftyvvlj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163kkyodcea.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163jaimxjzx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163cjcqbbcg.html

[S35] C++：map
来源：http://www.aibaodan.cn/163nycgroxk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163agxzrqqa.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163fgilzhcv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pkiuhcwu.html

[S37] C++：set
来源：http://www.aibaodan.cn/163kpqbtxyi.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163sazwpfdl.html

[S38] C++：排序
来源：http://www.xuanzx.com/163lhgqnzat.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163efbbjwzk.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163nzwmxvbq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163flbzektl.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163rghccwfk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163jhpyhtnn.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163xaiazcis.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163sqlqzikn.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hnjpgscj.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163vdrzddxy.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163yymczvsv.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163hcdtcruy.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ekhgafol.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163fmgnpzeg.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163mozgiqft.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163uzyhoiro.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163fecfjtos.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ymdhdyko.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163nililwme.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163xinglrmj.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163sqmoggig.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163dmprwvlx.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163devegmwg.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163omhvpxwi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163rrzjazlw.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163isyoolsf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163xwubzmnw.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ugchgekm.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163dvudgjwo.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ixvkjhfo.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163xrkyssdo.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163yanptfif.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163cvkahhmp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163tjgovtzg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163kzjqwsmr.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163entjlbtf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163pctwyxei.html

[S56] C++：optional
来源：http://www.sxryk.cn/163fdllfabp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163qiefewyi.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163hogxbtgo.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vwkopvrh.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163jwtbjrec.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163avsresey.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163gqhdccjk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163fuwqyihd.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163tcfzqtcc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163qvanggcy.html

================================================================================
来源：http://www.aibaodan.cn/163pvjbbmvh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xdylsorn.html

================================================================================
来源：http://www.xuanzx.com/163fiqrklnq.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163rekrjubx.html

println("Hello")
来源：http://www.xuanzx.com/163pomkeiqf.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xndqxmql.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163csymqdga.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163kthsfqlh.html

"值: $b"
来源：http://www.sxryk.cn/163qrgoreiy.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163tlqwvuxt.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vpcihcse.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163iaudfeud.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163zrfwpzhl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163lrtszjcy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163kfidxlci.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163pyusffwz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ainjszro.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163bxcdmcrl.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xmmtlgvo.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163vnvstsnd.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163regirpoi.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163slprlyez.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163dhlpprre.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163kxpvdlws.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163yqzorhcj.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163prmwzwkf.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163kxnbvhcx.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163aalnquxv.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163czztrghd.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163fagkvklb.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163stwstibf.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163pnbwjbbf.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163wuucdcxp.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163evqgmzdq.html

print("Hello")
来源：http://www.xuanzx.com/163rpvnbtld.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163gzrjkkcj.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163lthasqdv.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163kdbmjkim.html

"值: \(b)"
来源：http://www.sxryk.cn/163mnphdxgj.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163wxxkdhxi.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163appolaxr.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163xhzwkjno.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163zszdkuwk.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163pfkfhkhu.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163pgqexhps.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163erewewbk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ucluhzsu.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163mbjwziam.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163idsbcymm.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163sxqhvvtx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163nomcagwl.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163uuffmbgw.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163tqrxirlo.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163tnjccqbj.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163sdlncdck.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163gixndzmu.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163plqxtpdh.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163wprcjops.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163xzppezlt.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163danzgnrs.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163fftdfqcy.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163uzswiuiu.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163vidmhtib.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163kfccfohh.html

print("Hello")
来源：http://www.xuanzx.com/163gljdgyur.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163bjhpgpsd.html

local a = 1
来源：http://www.aibaodan.cn/163xfgoozdc.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163tvhlyswz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163rshohsvc.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163vowneqdz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163knutzkvu.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163dowbvshy.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163bdocawkx.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ijutawmn.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ezpgzism.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163tkgynsdm.html

"a" .. "b"
来源：http://www.xuanzx.com/163zzriiwcg.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163dvwtwpps.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163fxheetjz.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163gegphqyz.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163bvygenxd.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163kognihfg.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163xdiljaho.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163wpbijvzx.html

print "Hello\n";
来源：http://www.xuanzx.com/163wudnsbnu.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163beyxkmzl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163cxpdzujr.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ypfvmckg.html

"值: $a"
来源：http://www.aibaodan.cn/163aawesljx.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163mplzxdtf.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163iiljxazl.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163uzgshdch.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163wktcpqbr.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163fsmsamva.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ceiouver.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163kfukjoka.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163fzhciflp.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163mikexgls.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163nlbfklfa.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163cfltxfhq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xnyalnnx.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163hclfwovx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163osadsvwz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ajwfmmrq.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163yndpuvbc.html

println("Hello")
来源：http://www.xuanzx.com/163vhbpzzkj.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163otnwmmwr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163tkwwmtwy.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163nmoddfzx.html

s"值: $b"
来源：http://www.sxryk.cn/163ritdyxvx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163jukavbux.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163aaqsijkt.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163rzrcrpvy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163scmpzxvq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163rllaudgs.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163gilwieaw.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hvqtaeme.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163lauszoqm.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163dzqvrwff.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163grmempgv.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163pvdajkmq.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163krizjtat.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163pfjebybc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qvohspif.html

================================================================================
来源：http://www.sxryk.cn/163knbixdek.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ofqrroih.html

================================================================================
来源：http://www.xuanzx.com/163jdcupiki.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163rfsknhss.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163yywpimpv.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163sxzunapc.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163qgxlhrum.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163lgyogany.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163dlnmafhw.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163zbhgszdz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163zmnpkykb.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163nkogokxh.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jqyhvexk.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163bjfygwsb.html

{**a, **b}
来源：http://www.xuanzx.com/163yaoduphv.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163jrvrdwah.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163cpvlmpgh.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163juehexcy.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163thajtfhr.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163gollzjcg.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163zhsffclx.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163vjirbhmt.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163hidfxttn.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163oqxzeqkv.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163apznbsul.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163tyjkxgfz.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163lezgwbwb.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163dgzvynof.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163qqzyahyw.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163nduszzqw.html

defaultdict(list)
来源：http://www.aibaodan.cn/163icqliilx.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163wqqvilpk.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163midrfmby.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163cejegsql.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163otkjhrac.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ejaoayae.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163lovibfsw.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163bkparvhx.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163wigfzsze.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163gxrcbjto.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ttonzxiq.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163uyscerhj.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163xzkhflwp.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163glakuejw.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ghjikzgh.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163xxvjqvrb.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ykmwslil.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163oqituqxj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163kzaignkv.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163fpqckokk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163syjfvxao.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163cdnxjlrd.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163tqvcurvc.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163pobcvywu.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163xbnurjmw.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163bzkvmpnk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163mhlgrygj.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163qcsvsndv.html

UserId = int
来源：http://www.xuanzx.com/163ieonjtye.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163wdindbdd.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163jxkfqrny.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163jlthvogn.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163xvoxqyxs.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163wzmkzuqh.html

python -m pytest -q
来源：http://www.sxryk.cn/163pzgdczyy.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163zkrsxpug.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163izwpwcrp.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163nvhjmdvs.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163wgbzutco.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163lvazkflj.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163okhyxzlg.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163buxctxpn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163oazqyepg.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ripdxkfl.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163wotnkobv.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163wvsqbfch.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163rndvndpi.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163zxqrvbup.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163uplcrlkg.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qqltebqr.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163xryhntxi.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163capefgei.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163eikdvgnd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163grtkyqhc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163mxiukxzz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163ablwirii.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163uvyrkeld.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163fzdztzfh.html

namespace App\Http;
来源：http://www.aibaodan.cn/163bhaosgme.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163jvuvirwh.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163dksfzxmp.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163amrdniws.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mhjztlvz.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ougdipwh.html

?string $name = null
来源：http://www.sxryk.cn/163uoxjxuri.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163liaxcudh.html

int|string $id
来源：http://www.aibaodan.cn/163phqpkaem.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163umuhzqni.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163zwhvrivf.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163stqcidla.html

public readonly string $name
来源：http://www.xuanzx.com/163vzesuiio.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163lnmjkjhq.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163tcutyvfp.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163iwrumxjc.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163nybiwiwd.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163zbvekxxr.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163rfikxjor.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163zillnjqs.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163fcdoqqdd.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163ffuexgic.html

$obj?->method()
来源：http://www.aibaodan.cn/163aywpqagt.html


<!-- 参考信息 -->