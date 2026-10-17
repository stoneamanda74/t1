外链999!wailian999！

#ifndef X_H
来源：http://www.aibaodan.cn/163nkcjflcf.html

#define X_H
来源：http://www.sxryk.cn/163oxndqvtm.html

#endif
来源：http://www.xuanzx.com/163rnottliw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163utrikprt.html

#include <iostream>
来源：http://www.xuanzx.com/163ygfznjtt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163kfroudxv.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163esfmjapo.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163kmyobxyp.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ctmcecyw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163eljbaxlg.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163nhhqwrce.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163yrqfwinn.html

[S35] C++：map
来源：http://www.aibaodan.cn/163bfccnwew.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163iqqtbftc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163dqnugzpy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wadevtvb.html

[S37] C++：set
来源：http://www.aibaodan.cn/163pbdrlmoo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163gqkybyun.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ysldxsxu.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163jrcpgqdw.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163glsfzlcc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163nrzhvyjo.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163rthhfbwn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163cpzvnstm.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163dfjwsiwk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163niayuuls.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163yufhlbyh.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ovpwgshj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163oszjbqct.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163wlqmmlyn.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163nrvxeroq.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163gxzqhsmz.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vlfhggyq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ettbsdnt.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163pepcnymr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163niyftnkv.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163duwapavn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163jvnllavt.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ohwuvxew.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163nkexfrqp.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163wreqiqzh.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163vhsuilnn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163alqekkcu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163xssqkphw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163tuerfetc.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163jqoenqdt.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163umuqhbiv.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ymlltfna.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ukeuzutn.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163mrsrlnmc.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163jwyzwoch.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163lszeqcek.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vaodrbxw.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163yyyjlfok.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xtpfuwmf.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zpqomwbq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163icdigtgh.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163hfnyawlg.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163yxmrxpnb.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163sclvjbxz.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jeozrsrm.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163knczezwf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163pcnkaehb.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ppoxnkhx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kevuwbuk.html

================================================================================
来源：http://www.xuanzx.com/163caquqvyk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xsgimqbh.html

================================================================================
来源：http://www.xuanzx.com/163uviweijt.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163uobmhurc.html

println("Hello")
来源：http://www.xuanzx.com/163xragzxxz.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163eogwuxww.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163oehooexi.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163hzpmedti.html

"值: $b"
来源：http://www.xuanzx.com/163nyzcfeqz.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163viiowuqf.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163smqpmdbu.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lbidgbzp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163nfubcqdb.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ugkkgkvo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163eqebmdom.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163gkwgkylk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163agxnocoy.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qtjmjynu.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163sheehzxb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163jvtutniv.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163btigboaz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ctooxtdl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163plukgtxi.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163hmlhipsm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163pwhekruy.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ibcshtlp.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163gbefagxb.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163bjnjnhdr.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ijrqcvhk.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163cfqrphbb.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163cqkfnpck.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163qbgnnvha.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163eolueiui.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163cxjjanul.html

print("Hello")
来源：http://www.xuanzx.com/163gwymdrve.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163czaarktw.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ypztfttb.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163jqqbjqnt.html

"值: \(b)"
来源：http://www.sxryk.cn/163qcluvlsy.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163tndzwapm.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163uqhfbekl.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163nobjghml.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163zxlxluty.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ijoxpnme.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163sbeglqgz.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163efpmshbz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163kuabqzpg.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163apzibrol.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163bslsilhy.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163hpqyxwhw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ifsjahtr.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163uodjbtee.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163yeyzqcfl.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163upmbhzdi.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163olzljmwm.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163vyytfabd.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163fvudlffm.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163qjqopibu.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ckdeazcc.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163pzrlncop.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hqinxrgh.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163hckuufjz.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163uqqbvjal.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163fkvqrtfk.html

print("Hello")
来源：http://www.sxryk.cn/163neazjdeq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163kqsbnmnn.html

local a = 1
来源：http://www.sxryk.cn/163uqcqjanh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163hpzxrkak.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163gfqpnhen.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163avbugyna.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163kqmvaduf.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163lmwzxsao.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163fsyesyck.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163bulguouy.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163yfbttyuj.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163nevlwubw.html

"a" .. "b"
来源：http://www.aibaodan.cn/163edfutqah.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163carvmkdz.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163gkliqyyf.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163antlejld.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163dbfwgysf.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163nodwcwvv.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163qngwgnny.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163eoqcfovm.html

print "Hello\n";
来源：http://www.aibaodan.cn/163lsjvfgoe.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163mktpqzsz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163tzgllgzs.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163jyqeykuy.html

"值: $a"
来源：http://www.aibaodan.cn/163gwuijquc.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163hlmbqdjw.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163jaiwjoia.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163qxrwrcwc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163tgznuxag.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163qbmtlhja.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163pyayyotl.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163hkrdqamr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163bibrhera.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163jjbccqtq.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163zxuurjzd.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163jlruipib.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163kqjzbffe.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163sbouflvm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163wonfvlny.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163wtmnvmnq.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163vjrlrxwg.html

println("Hello")
来源：http://www.sxryk.cn/163bdcgnhcq.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163rwmhucpb.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ymjlkdmz.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163bqhmfcvh.html

s"值: $b"
来源：http://www.xuanzx.com/163lcihbeex.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163czgskogz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ehwpcfmp.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163kvggmukh.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163xnjfpeqq.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163bfwjlyst.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163rhdbktmv.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163oxzhxppe.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163lrdzjhvz.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163xxkqcstk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qazhsjwe.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163iznloiud.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163hxyvcevc.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163pxkhvapj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163pszvpand.html

================================================================================
来源：http://www.sxryk.cn/163yurlybon.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163sbinmqif.html

================================================================================
来源：http://www.aibaodan.cn/163telitjsv.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163tugvsxgy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163czqyqcyn.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163qssulmez.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163terikiqw.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163owhzluln.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163hiflvwwp.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163gyzydiav.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163urgvbcdp.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163joaummgp.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163tqygubkb.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163uiysdixe.html

{**a, **b}
来源：http://www.aibaodan.cn/163kthbizfz.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163eeypezvl.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163jbyycmgv.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163yollrkei.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163rimczftl.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163zomtunrr.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163pqiwxbdx.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163jhokrpbo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kzbtyybf.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163cwercsyg.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163nqdzqnys.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163vvfvrfva.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163etmhpdge.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163zskfyion.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163zpgtorst.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163mlczwlwb.html

defaultdict(list)
来源：http://www.aibaodan.cn/163rwmiagqg.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163smhptkka.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163amncnhoe.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ivqqjmum.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163fnvtrohi.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163oycnifhu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163hkwixlmp.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163abxgnglb.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163jutscqwh.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163jvwjiksd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ckwbqtnk.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zryromvf.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163xcalhzsj.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163evjsxirt.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163xdwphycn.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ejurtfmw.html

list(zip(*m))
来源：http://www.aibaodan.cn/163htgrimrk.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163lznomzqs.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163gotpdanr.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163sissqfnx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163zzpzprzm.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163wrvynxem.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zghfhvfz.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163rbkkoujr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163rqpbtnrv.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163eydarwgj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163xfykfeft.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163xumqqxih.html

UserId = int
来源：http://www.aibaodan.cn/163fclvqmnh.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163itgdndva.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163hwaucseh.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163qfgdmxib.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163lvptklnl.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163nfycmimo.html

python -m pytest -q
来源：http://www.xuanzx.com/163evbdzynu.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163qnhftdir.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163psjvtgda.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163xxkefznq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163xubncfbb.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163bgjmkgca.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163nbgmomkx.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163hajqeaxf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163llxwwixe.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163wrndwepp.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163xcserrwn.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jnjffssq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163dgqldcnq.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163jlkujuxi.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163zhhwhgau.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163hoxfpaqe.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163cuprwxrm.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163pukrnbtb.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163eskojzpq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163lpemmvul.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163znkjxujc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163mdiochps.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163onfpaklo.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163trjkbvyt.html

namespace App\Http;
来源：http://www.aibaodan.cn/163qhtucfsv.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163joshovcw.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ebseelrb.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163iuebxyxw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wwonzlos.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163zcdddgmu.html

?string $name = null
来源：http://www.sxryk.cn/163wmpspvgp.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163rozzsfoh.html

int|string $id
来源：http://www.sxryk.cn/163gmdxqicu.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163atnfvtig.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ytfxqgmj.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163yxtwxwsv.html

public readonly string $name
来源：http://www.aibaodan.cn/163uivyoixj.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163dvtklvxb.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163abmsdnjd.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163lfrscncu.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ejofgsqm.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163pxeohvgu.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163odgbpfzu.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163lagqnoyv.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163srjkjxlm.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163gbxvvarj.html

$obj?->method()
来源：http://www.sxryk.cn/163goczvqjw.html


<!-- 参考信息 -->