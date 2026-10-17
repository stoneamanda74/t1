外链999!wailian999！

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sxbhcqsm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163tuelpbln.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163opbonqhc.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163qlzemczw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163qudueods.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ierrmryu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163xkpjedau.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163mqwcghzn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163qcvswnpm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163amblfmuy.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163vbqhaoez.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163mndmycky.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163oflhzsfr.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163musbfvqj.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ftiwpnlo.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163fgyzjbrn.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ryeflyqq.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163tzjhvvro.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ugtrtjlx.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163pubovsgt.html

#ifndef X_H
来源：http://www.xuanzx.com/163zjqdshqo.html

#define X_H
来源：http://www.sxryk.cn/163uglkhftu.html

#endif
来源：http://www.aibaodan.cn/163kmrezylb.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163cbmbgwlw.html

#include <iostream>
来源：http://www.xuanzx.com/163qrxyfmbh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163rglxfaua.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163gwabkjfg.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163kqmpvbnf.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163hhvojsxq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163duoexyag.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163lxujvzlh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163wpuerdms.html

[S35] C++：map
来源：http://www.sxryk.cn/163zysoqvcz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vzraiztk.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163kluryzgn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lkfnlnbk.html

[S37] C++：set
来源：http://www.sxryk.cn/163eznkxlgf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163voibmqnq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163euielkxi.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ymuolkmi.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ihfjuleq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163yupkqapl.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163uklvwnck.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163iofmpkfa.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163yfzlhkgl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163wwlyserh.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163btkuxuoc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163fppobeyn.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163oyaqxmrg.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163bvyrzdnw.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163bfniltvk.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163iiuwesua.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163sufpyzey.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ivrajkre.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163yxpenmqi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163izdhaqra.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163whavmpcv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163acvidgfz.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163onxyouzn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163dmqzabqv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163lkfmbqbc.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163whdqqdll.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163bagzsalo.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163abvvdhed.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163bpbggoky.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163dmwbkbfd.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163anuqniuo.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163tzmuyaye.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163zwqomdox.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163mupsvvow.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163wughjgaz.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163yfilsrmi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163wbpjviry.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ogrxxqyy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163wazxqnwn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163clyboyzo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163krcfjtlk.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163kieellea.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163swjmdbiz.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163afisgvqk.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163whhgymjj.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163sbbxbmlx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163dtoawuwd.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163rmmqhpos.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163izbbcdnf.html

================================================================================
来源：http://www.aibaodan.cn/163beeguvgm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163cavxsntl.html

================================================================================
来源：http://www.xuanzx.com/163vxavllif.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163qijfrugn.html

println("Hello")
来源：http://www.xuanzx.com/163ublasbur.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163otrjfqzy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163swigkjep.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163inpjvrvf.html

"值: $b"
来源：http://www.xuanzx.com/163hnxeomdy.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163inkakepj.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163hbomvlqb.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163aueawqzq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163qfvokwwj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163cksjhwwv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163binfarae.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163xxxfpqrw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163vmjupwjo.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163stqitwne.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163xzrzkigz.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163tocbcuql.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163uyjbiooq.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163knlrcfpi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163mzbpvdaw.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163uqjskovq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163cznpbfbi.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163prnjrkjf.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163pzeigrtx.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ggzxvxxp.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163pwllwlns.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ymvptyvs.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163yuzkuobk.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ebjfvefg.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163sodmmvwe.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163owmsucrm.html

print("Hello")
来源：http://www.sxryk.cn/163zizpvmxk.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163avemtace.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163yifqtowy.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163enbphayf.html

"值: \(b)"
来源：http://www.aibaodan.cn/163idxjbgzw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163xxkijsma.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163otgprmkn.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163eopvkuyb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163jrojbzbx.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hlbmhkzm.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jkxoohzw.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ogovsaiw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bwdncetl.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vormvdam.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163jcymopyk.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163lvbkqwbg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163crkzapkc.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163apflfgfz.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163efqyxomk.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163clcvfhqu.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163oeebkxhn.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163gmylxfbf.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163gftrcump.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163jgxxogjh.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ybejbcac.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163aqmrhbem.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163fkisbcux.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163gownutks.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163nklfveaf.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163mynzjixg.html

print("Hello")
来源：http://www.aibaodan.cn/163kvfaxhwn.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ubfdedob.html

local a = 1
来源：http://www.sxryk.cn/163isqnasdf.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163qnfwpxiz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ccupvfku.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163qiubivvs.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163xwioqfgh.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163snnrnqar.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163zxbtsrpl.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163dwvhxqxn.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163hjrtjnrg.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163snnoktoy.html

"a" .. "b"
来源：http://www.aibaodan.cn/163veqztmge.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163wijyxtds.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163xckfvyhx.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163abvhsozu.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163vardncem.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dhssjqpm.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163quqvukhc.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163xzuctxml.html

print "Hello\n";
来源：http://www.aibaodan.cn/163oigwmvvr.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163fvbyhktd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163cpdlnljl.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163kfwhtbej.html

"值: $a"
来源：http://www.aibaodan.cn/163yhstgkmp.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163bmtvidrw.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163byzyojjh.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163rtdfpcuz.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163xvjucqhw.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163pgrmuidv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ygfvwhla.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163gghlgjnu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163kxsxmwhk.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163hooufvbx.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ffkcmpyb.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163azgeyiib.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163nzironua.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163qwiehvfi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163sxoxquvr.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qrzeinig.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163grxbkdbe.html

println("Hello")
来源：http://www.xuanzx.com/163dazzywod.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163hzzgetuz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163haqxcwfu.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163tclqvbkr.html

s"值: $b"
来源：http://www.aibaodan.cn/163dlutwoku.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ltndhuqm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163dtohlsul.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163szujfskn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163fudpkjbh.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163lqntxqgk.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163tfspwjgi.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163pgoryvil.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163vmhyxsht.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163kptbzlme.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163kzsagljx.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163moauujiv.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163jvedrwex.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163curyccbj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163uuqzmhkq.html

================================================================================
来源：http://www.sxryk.cn/163hmicikfp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163doywyqzq.html

================================================================================
来源：http://www.aibaodan.cn/163gfqnnetv.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163icbtnfug.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163vftrordn.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163pxjokvra.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163cdnscrqi.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163jjbxobev.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163fibfalml.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163yobzhrsu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163amnbmjlz.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ubruzsje.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vmcpgmiy.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163bymzpsep.html

{**a, **b}
来源：http://www.sxryk.cn/163uieqrsvh.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163xvzwclwk.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163jyalzrcx.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163drjtkcoj.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163nqwyhoge.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163xazmxybi.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163rsyqizsa.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163jfgggzlz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163vflkhvky.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163mguevmdi.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163oyfgzbay.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163oiksgoam.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163zphrlawg.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163iluybkji.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163itjspzpn.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163zrpbdlut.html

defaultdict(list)
来源：http://www.xuanzx.com/163udzvukzw.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163wajwsomw.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163lhrwcsbs.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163qggcgcbg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163nhpvbuyg.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163dxekwhlz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163fmsivshv.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163mfauisyy.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163khxutwor.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ctkjyfph.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163hssakeku.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163dxstigeh.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163eszjphlz.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163eldgffbk.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163wzpvfotl.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163iagcczik.html

list(zip(*m))
来源：http://www.sxryk.cn/163nkvhzaat.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ffraxstb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163kqaipkvy.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mbozuxxn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163lleivvlk.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163zfiywdoy.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163cmcenpqo.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163qrzushwr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163depbbopd.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163jhejoqwq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163rfyxuaek.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163edjbkpvf.html

UserId = int
来源：http://www.aibaodan.cn/163qdsszyer.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163mkhajarv.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163txvhoerl.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163zhbajrcg.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163aonmglyb.html

[U31] Py：单测
来源：http://www.sxryk.cn/163gesbqjia.html

python -m pytest -q
来源：http://www.xuanzx.com/163zuwnfxon.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163qeadicar.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163jnhasucr.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163niivnerg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163ahmxblaa.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163wbelirkb.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163gvgsrwgp.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163lmbsjipo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163sxokrcad.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163lyhgejky.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163bmntjjcl.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163kozqttai.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163knfwvsdn.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163jljxucoy.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163bxtcihhm.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163etcnbxes.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163pcgwhiio.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163skbjoccm.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jldtqvcl.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163yksqnylz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163bwtbcgsq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163xvtmgsgj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163yunhcszg.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163afnfzgik.html

namespace App\Http;
来源：http://www.aibaodan.cn/163rqlclung.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163wnkfsqqe.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163cnnbsuwm.html


<!-- 参考信息 -->