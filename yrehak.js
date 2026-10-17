外链999!wailian999！

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163usnqwmda.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ksyfatjt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163eecvfwxk.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163hjywcqqp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163shgeipha.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163krlzmohn.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lfkussuj.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xfktwkje.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163gkhtemwq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163yaszzbvs.html

fclose(f);
来源：http://www.sxryk.cn/163diktaelc.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163hrhjnons.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163qniramai.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163tlcuelsj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163iqdwbwjm.html

[S14] C：枚举
来源：http://www.sxryk.cn/163zwfpmfse.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163jdgetjss.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xmbiyshc.html

(double) a / b
来源：http://www.sxryk.cn/163liowovsb.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163eihxpitu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163gjtjbrgm.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xuyamtrf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163btfhawev.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163lpszdmrw.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wqjxftnp.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ataayyuf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qaefvnlk.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163qtxekvqk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163uheuopgh.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163iquwldee.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163nqwgzrwr.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163oszwcfye.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163vpkvghzz.html

[S23] C：随机数
来源：http://www.sxryk.cn/163xeljungv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163yxsdqald.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163okanmyyf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163uokdvqjv.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163xzlcbbhe.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163qtiafahc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qypgqttk.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ypenjjff.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ptalwxvr.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nqtkpyhh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163jvmteyaj.html

static int counter = 0;
来源：http://www.aibaodan.cn/163vnjqgsvs.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qrincujs.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163knozcybp.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163cpjlxxno.html

#ifndef X_H
来源：http://www.sxryk.cn/163utdktlsj.html

#define X_H
来源：http://www.aibaodan.cn/163nxhejvut.html

#endif
来源：http://www.aibaodan.cn/163gtjhetcu.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163syjtdogx.html

#include <iostream>
来源：http://www.xuanzx.com/163etcmegcb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163exhczghs.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163jcwqodwp.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163tuayfztu.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163uvktvdro.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ckrtdhfp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163mvsbyzmq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163hpjjcytu.html

[S35] C++：map
来源：http://www.aibaodan.cn/163skmfaufu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ksjdblgq.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163lvgeaoyt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nigryysg.html

[S37] C++：set
来源：http://www.sxryk.cn/163bcqpmufw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vkggnftr.html

[S38] C++：排序
来源：http://www.xuanzx.com/163usrjmvwj.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163fhukostz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163hjtsftkf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163dkxvoukp.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163edgwlizd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163zleojmyl.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163bxruhkty.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163gzflyutt.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ftvqgtqb.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163glgswyka.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163kezlofut.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163sgiuvumw.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163geunljey.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ucgsxaag.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163alautcjd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163cjdjcugw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163kyqwibxc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163rmolyfuw.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xqxnalpp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163fcdvofng.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163cpabegfv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hzjckoob.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163gxaficdo.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163pciorlkp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163euvwddry.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ujsxmqyw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163llgafusz.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163dklvukxm.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163qnoyeklk.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163azaqyxin.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163gizbmlhi.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vhemacsi.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163pizrkuiv.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lnkqytlx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163tmueoejy.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163bplqkmow.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163twcgtuxq.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tkzwomdm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163hylligfm.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163tikqenhb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163lpxxpgsb.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163rklnkvxm.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163pnqlnjij.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163liqcyjtz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163drrmgycs.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163boyiqsnq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163dlrlmzzt.html

================================================================================
来源：http://www.xuanzx.com/163geklatxd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zrpkklsv.html

================================================================================
来源：http://www.aibaodan.cn/163valeqjjc.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163gzzhublk.html

println("Hello")
来源：http://www.xuanzx.com/163xczbgiuu.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163jvjejabe.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163vysyarbp.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163hzcqbtgh.html

"值: $b"
来源：http://www.xuanzx.com/163fodnrwbj.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163vlofmnll.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xxoltohf.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163elgavajk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163zcoecnrp.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163xzlwpvqu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163fknhoauu.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163emgwyusn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163dyrbfszt.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163owgsraji.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163oneqdatn.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ybfksaml.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163fmxwrjir.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163movcogoc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ojjetmjp.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163nssfckok.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163jfmfstht.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163djrhcmeh.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163kiheemtf.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163pkevaodf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163khukejmj.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wzcdigxr.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163jovlhohe.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163rovzxarr.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163cuxmxrzs.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163moxzrbvg.html

print("Hello")
来源：http://www.xuanzx.com/163utkwtzbr.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163lqietatc.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163zgjpkqac.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163grixtife.html

"值: \(b)"
来源：http://www.aibaodan.cn/163lchdzmjf.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163zdyggjfw.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163bndqznhy.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163maopqpdt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163cfjkgjpb.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163luholace.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ktkagiph.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163lpyzdcqc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ziombmnw.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ikcwqxcw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ougauhyr.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163uuseytmj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163janekppx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163uncjshvh.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163dpnakpdo.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163gjusfjpk.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163olarcwbn.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163vllwecjm.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163imhgwjxh.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ummekuoh.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163arjbtthn.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163wceryxlj.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163pfgkmhsa.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ggrtkyue.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163qnclejwt.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163vqvwqpzn.html

print("Hello")
来源：http://www.aibaodan.cn/163dhadecaq.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163uwoszafm.html

local a = 1
来源：http://www.xuanzx.com/163shkxityh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163gfolhlyu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xzwjrhcc.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163bgqknrkb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163psjojzbo.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163hrwfpetm.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163nrceiomt.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163dbjmafvs.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163yzcbbyan.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163iefpgwtb.html

"a" .. "b"
来源：http://www.sxryk.cn/163mqjljrkf.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163uktimnuj.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163loyyitfb.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163pytotfoe.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163bqxdatba.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163qoktkhlc.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ogkvslvl.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163kmwczbyy.html

print "Hello\n";
来源：http://www.xuanzx.com/163vbnzhkus.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163deraavam.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163eoavfuly.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163avrwyhml.html

"值: $a"
来源：http://www.aibaodan.cn/163sfqfqkij.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163hlqtcwpc.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ouuimbkg.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ushzamlp.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163umaefhiq.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163nfmfvovq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163pgaddegw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163yclrxyjg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ilouxagh.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163aejrzlrl.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163gsyxvarh.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163swixqyfj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163slrqhjud.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163yimzrufc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163hmummtku.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163xhxoqyuc.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163rrqcrdxp.html

println("Hello")
来源：http://www.xuanzx.com/163avzzrqai.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163rsfrhhep.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163kkirnrgc.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163otpuzxkw.html

s"值: $b"
来源：http://www.sxryk.cn/163iyeylcfc.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163trzjmlqs.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163eeedyqdk.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163tjrwnoak.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163cwpeqbfb.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163xdgmzdoe.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163mupaxuub.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163egxzapsz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163fhwcncun.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ptxydkfh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163lddvbhen.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163przhuddf.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163mdggyxqm.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163uvdkdzrz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163vlgzutif.html

================================================================================
来源：http://www.xuanzx.com/163wuycfzvq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163khzproua.html

================================================================================
来源：http://www.sxryk.cn/163gqjleiww.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163ysmsbfwp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163fydzwboc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163xlefcksm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163gypokqsa.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163jfjqjnjm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163hdehqyhw.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163bxzqlokf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163sguairzi.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ehfruage.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dmygiary.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163huwgxsim.html

{**a, **b}
来源：http://www.aibaodan.cn/163qrarwhzs.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163legsjpvy.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163vmsqqhlq.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163omxsxjpk.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163hhqdivoi.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163bhvclwps.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163iwuqryzk.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163cufylnsl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163tupoykee.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163tabgspcu.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163yjvlqtnr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163cvlvreah.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163onuneivh.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163tvmjbxuy.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ztyzxsdb.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163igtknzaq.html

defaultdict(list)
来源：http://www.sxryk.cn/163tcjkoien.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163phmxavhv.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163gzjeiuke.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163xknyueir.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163eoeuovrc.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163zqypqemh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163xerksaor.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163olqhrlad.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163thkwcihr.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163geqdmcpk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163qvlqksix.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163llklubdd.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ynmgetwr.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ylpltlse.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163avwmucca.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ngkwscit.html

list(zip(*m))
来源：http://www.xuanzx.com/163xkjoinee.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163scnbxhbi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163qkbtsmlw.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163rycppfss.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163tlfqdsym.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163xpvkpjiu.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163jwrvduhy.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163zzsshwzt.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163hmpdowyx.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ofswwjvh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163vfkucpnn.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163nplmrpgy.html

UserId = int
来源：http://www.xuanzx.com/163vdpqnipz.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163dnemdcvy.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163skbqourv.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163cbpxbxsf.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ncjjzuab.html


<!-- 参考信息 -->