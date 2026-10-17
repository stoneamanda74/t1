外链999!wailian999！

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zejdhjel.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163kvogdolh.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xprtrzzc.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163xretkkhr.html

static int counter = 0;
来源：http://www.aibaodan.cn/163bunxyvvi.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163sudkrcai.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163fkzvjltl.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163lalxmlnu.html

#ifndef X_H
来源：http://www.aibaodan.cn/163msfrshkh.html

#define X_H
来源：http://www.sxryk.cn/163enozhuwh.html

#endif
来源：http://www.xuanzx.com/163aygxkcob.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163jryyjave.html

#include <iostream>
来源：http://www.xuanzx.com/163fcwqdlpo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163hmerxhdt.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163bymvenps.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163tyipkrys.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163uatycqhx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163bflhtzte.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163elbcxama.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163wbzlduka.html

[S35] C++：map
来源：http://www.aibaodan.cn/163dpebawxt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vzbemoja.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163nqpebhcn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kpilsrvb.html

[S37] C++：set
来源：http://www.xuanzx.com/163hedskbfo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163knmfjrcq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163qcgpdkfo.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163irntehry.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163yhwicnik.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163bywuadxw.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163cayzexvw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ehlhiksw.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163smjtfpmb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qhgnlurh.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163pxksyfro.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163mnohufri.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163sqsgzmpf.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163gnwhnfqs.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163cpzjncqz.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163anxthkdw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163yzzcapnx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163bdnytmkm.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163dkaznrmw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163vqcarqad.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163zyyykpkr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163nmlindpm.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wanilcaq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163xpwverro.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163hzqxvpes.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163rzxaveov.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163zdfoxmdh.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xcrwjbnu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163nnrnpmeq.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163lmykzmlq.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163uymcxdzc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vtttutrr.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ughgfksh.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163pfajtbfd.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ughfxnof.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kbkfxsgd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ooqgsmtu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163psakrhay.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163izfgdxnx.html

[S56] C++：optional
来源：http://www.xuanzx.com/163gpejpujf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163slknajdy.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163hjimnazq.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163jxschjhj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ztqxdino.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163eofevvfb.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163bckjuqgh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163kyiekuev.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163mckdjmbk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163rzozdgkc.html

================================================================================
来源：http://www.sxryk.cn/163nnhjjmjd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163fusixgfg.html

================================================================================
来源：http://www.xuanzx.com/163cfmnduae.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zmpsihym.html

println("Hello")
来源：http://www.aibaodan.cn/163gxcvkmir.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zyotpmya.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163xpsneseh.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163rjfsgvpt.html

"值: $b"
来源：http://www.xuanzx.com/163alusfztt.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vizvtjzk.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xzuchwwy.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mrccckfk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163taweakjz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163obydoavz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163upmwgakw.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163sguulbej.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163fmxfudqw.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kboyadev.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163mboiihet.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163nqdflihv.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163jhzotwse.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163gbkltvgj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163xlasuojv.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163jmjkcvrg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tdxhvacl.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ypzfgdul.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163yajahesm.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163qgbddbxz.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163mwpvilwq.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lhaeereb.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ziucwzfv.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163djknbdsg.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163bepplili.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163bnusbqcm.html

print("Hello")
来源：http://www.sxryk.cn/163bltxvemv.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ctwhapyn.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163dombraam.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163msydnyqf.html

"值: \(b)"
来源：http://www.aibaodan.cn/163qlnalldg.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163gdzpclqs.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163jsjopwtm.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163xrbfemmn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163eoioqkjb.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163yilquwrk.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163rrjwzewu.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163xlafndqo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163qpjcaebp.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163pogicrql.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163vansywya.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163tlcmtvwn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wpgokgzt.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163zcdpxwai.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163zycuehkb.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163yggfjlpf.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163lbtlqqni.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163nidqcibv.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163yizwoyab.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163wcjeeufc.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163vkzcwige.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163lxgkwnjt.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163afrkgmrb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163pdmzojuy.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163mdeaexbh.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163dfodkiyc.html

print("Hello")
来源：http://www.aibaodan.cn/163vqzaprdw.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163njesgrum.html

local a = 1
来源：http://www.xuanzx.com/163cgpzlzwi.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163iagrwtgw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163uqcdvjao.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163tfifgocr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163btfvcdgw.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ogqfemgt.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163qurubdxe.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163nedfxexj.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163hhzwvgnv.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163exccoxjg.html

"a" .. "b"
来源：http://www.sxryk.cn/163kkyomjaz.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163qzfcfewm.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163knosgtmf.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163hshgmatj.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163cfnxqmtn.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163fyrvsixv.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163xbkjacqr.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163oonczvwj.html

print "Hello\n";
来源：http://www.xuanzx.com/163ihyiwtdq.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163dvwxowou.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ianvkhsd.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163bmgtrqcg.html

"值: $a"
来源：http://www.sxryk.cn/163eqpskgiy.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ioowlesd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163vmnwcbkl.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163eyugmshp.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ykdrgyax.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163cmdjgzxc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163qnbjtlde.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163rdihnyxi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163jluaosfb.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163smhaftyz.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163rarbwgrr.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163dfmpjveq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163nzhrefai.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163olftqumo.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163dbtrekrh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163zemnhyll.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163hzcpyjjs.html

println("Hello")
来源：http://www.xuanzx.com/163tvvdoqsj.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163dypdweic.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163aggtiwbu.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163jvrkgbrc.html

s"值: $b"
来源：http://www.aibaodan.cn/163mnxtiiqg.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163acggfxos.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163lmtzlxpj.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163oxohtlmc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ngvwnmov.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163hvotyyqz.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163htybxzah.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163yefblrej.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163aieolmph.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163dlfwgyxw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163raamgrxn.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163yftnoftr.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163azsakcob.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163tnvjhkjv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ktuujxyy.html

================================================================================
来源：http://www.aibaodan.cn/163gvqogfte.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163avbqawdt.html

================================================================================
来源：http://www.sxryk.cn/163ozwmxqca.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163dlwbftmu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163muoxnwok.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163lbebvdbq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163yoogrlzn.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163vcejblyo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163lsykwfzd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163xocqwujx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163smtyrgbt.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163oamuudse.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zvkfjkwq.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ozjdiwxl.html

{**a, **b}
来源：http://www.sxryk.cn/163gvdkvzhd.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163lzlfamno.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163bdrjgzrz.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163tegabhtj.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163bxfeyfow.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ihyolpzu.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163myeqlpum.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163zszdiftf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163rxzrtupe.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163hmmmrrro.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163yauyplqu.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ldrvwkeb.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163kkjqflju.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163iugxnttx.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163mseqbblt.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ulqtcrvo.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ewbzjdiy.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163pghzdjvv.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163lpzzujgk.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163hnoteaxo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ypzfwxvf.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163bstwrpnm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163zkpcaryy.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163cbvthtrp.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163yfcfiezg.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163bhzdoofh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163jqfzxpfz.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163cievyhjn.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ndcqlkzw.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ebwdibar.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ridoosxe.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163dnnbfhnh.html

list(zip(*m))
来源：http://www.aibaodan.cn/163crxjcekn.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163rrabhdqx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ygdwwcel.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163hnceaghb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163vhqxuxbc.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163htgugrtb.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163ggguieim.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163vrpkuymy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163vharwybi.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163jfybkxmz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163tkfmllqg.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163roddmljt.html

UserId = int
来源：http://www.sxryk.cn/163uchijgkv.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163mhljshxh.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ozzexzyk.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163yxoboiyc.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163fcqnwzgo.html

[U31] Py：单测
来源：http://www.sxryk.cn/163wowoorhm.html

python -m pytest -q
来源：http://www.aibaodan.cn/163gaofiwto.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163opsbszyi.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163cpstkzmx.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163dofhxeyy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163jsszalto.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163sqwxpqbn.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163lqklmtjo.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163apkyndyq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163nyraviwg.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163dflphoyc.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163xgrtpkri.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ayrchqfe.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163vttmreoh.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163wwrzytqo.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163gxdczkng.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163lhmtnzey.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163jgheaxpc.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163youdorik.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hefxrqrn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163knuuhoxc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ushchoza.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163tqlzicea.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ozcyrphc.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163exduuzmg.html

namespace App\Http;
来源：http://www.xuanzx.com/163yootpshe.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ywtnmjde.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163mtziqfca.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163gstnqkll.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hezzmpxj.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163hbldmxel.html

?string $name = null
来源：http://www.aibaodan.cn/163fncmwnqs.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163flgrvzzj.html

int|string $id
来源：http://www.aibaodan.cn/163kszhibgt.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163ekbubrrw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ubflnurf.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163fxdftpcx.html

public readonly string $name
来源：http://www.aibaodan.cn/163gkddnivw.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ygfkrrbi.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163xrbryfbf.html


<!-- 参考信息 -->