外链999!wailian999！

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ithwqrbi.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163rdgmudpi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163lozwuesh.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163qecegqfo.html

strlen(s)
来源：http://www.sxryk.cn/163tohezdzp.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163llapunbs.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163fsaqvjyu.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163vjqpgdda.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163rmrmczmu.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163dgllrlrm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163pjmddtzf.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ddxzzont.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163rpiztvid.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163eaixzyxi.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163savariht.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163tmylurkm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vtxtwwig.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163wwjrbjej.html

fclose(f);
来源：http://www.xuanzx.com/163dnefhrpp.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gmcqkfnh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163rxphlvlr.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163lxhqzzoo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163eobmsqjn.html

[S14] C：枚举
来源：http://www.xuanzx.com/163hvfykawk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163fksuwhwg.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163lhjqoitx.html

(double) a / b
来源：http://www.sxryk.cn/163slsinueh.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163optbboaj.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163hqlametl.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163pgxezldr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163czyloolp.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163pjpadxgk.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163tsvbpfzx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vcorkdck.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163armbeumv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qaxdlymw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163beojxtbs.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163eykzpglm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mkdqinwz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163jbdfgqnt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163tnbuphrd.html

[S23] C：随机数
来源：http://www.xuanzx.com/163kfunrtdh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163nflmsddo.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ykqdkuto.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163omhhlaex.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qmpwukyk.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163uyuxstjp.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163lnynycvp.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163lxlpaiaz.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163yqqknikd.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163lxepnsby.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163rhnikwwu.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ofldwfrh.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163wosyukgh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163nvnxlfxp.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163zwhoovii.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zqlqlfia.html

#define X_H
来源：http://www.xuanzx.com/163riblrghg.html

#endif
来源：http://www.xuanzx.com/163nealpoyf.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163komhpqwo.html

#include <iostream>
来源：http://www.sxryk.cn/163tnxujoxo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bvydthsu.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163qozagixw.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163sjwynqlv.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163lcnvgzrw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163voavckad.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163btmzmmgn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163emwlziws.html

[S35] C++：map
来源：http://www.xuanzx.com/163svxllveq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tegcnilf.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163hwttvskh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163uqxvwida.html

[S37] C++：set
来源：http://www.sxryk.cn/163mjrcbuxf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163tlomragl.html

[S38] C++：排序
来源：http://www.xuanzx.com/163qtjwddsn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ajcejgks.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163pzuzuzze.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163fxnkwrmq.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163csiptymq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163qcpxchgu.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163lduvzaax.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163kkkgpdxl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163nstcyoxp.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163dkgutphj.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163kjhkzvtg.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163sxgrmktz.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163aquntrtj.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163qbzakhjw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163oxngcquy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163gmkqdejv.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vjmssxuv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163jdhqlysl.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vdllpded.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163nmpifwfl.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163fukeuvjd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hcuvsuse.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163dxbbeaov.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163swrtgslz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gwwjmida.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163zjuxxclq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ulubpljf.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gbmqdqzl.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163bslrcdwp.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vpnzeqti.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163cbkimydt.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163qnlvuprw.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163oxuteiqg.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ymirjxgc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163rjnjzvog.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163xhhqsouy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163utxgahzu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163pqekizxx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163sdtbbfcy.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163fqsudbxj.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163zuirjesa.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163hgllupkq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163xywgylwd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163apzgvbyh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163hnqcwkte.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163pndbpwcu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163mcqxrcti.html

================================================================================
来源：http://www.sxryk.cn/163avurvral.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ojjrtqdn.html

================================================================================
来源：http://www.sxryk.cn/163gzukzdao.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ajsvwqbn.html

println("Hello")
来源：http://www.xuanzx.com/163bviehbjz.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163kotspwmq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163sjsnkrba.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163uehdcxuw.html

"值: $b"
来源：http://www.sxryk.cn/163yzvnqxrc.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163prjsydaf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163kuqsrkdl.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163uumhrils.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163vqbndlzx.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163wsxapmhg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163cerktxmk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163cegqlwku.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163gevgzhiu.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163nadvhxgt.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163wuljtypo.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163pkrqnrki.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163gabimgsi.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ojprhxhe.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ismqejio.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163icgdlmks.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163otanuvdi.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163pqnrufhk.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163jxtelwnr.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163qujkangh.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ccndwzse.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163vvmuagqa.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163olxavmqv.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163uhlfuuwb.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163tmaocpjm.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163dlluoofj.html

print("Hello")
来源：http://www.aibaodan.cn/163lpxahmkd.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163llrbdqef.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163zzzxmgtv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ccqtcfgh.html

"值: \(b)"
来源：http://www.xuanzx.com/163iktjxxxe.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163fpzvgzsm.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163vvjslfoi.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163bkcxvoyz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163pykaxabp.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163wbsnbujn.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163aagbiwhb.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163prpfgjpp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163wdarfwbt.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163pijvgsht.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163qewouryj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163hxznxsdw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163miadeeqf.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163niusnzot.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163wzqhbwos.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ncsmdogb.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163iuqmngoi.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163mbdjphay.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163tlamxico.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163agvtndbf.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163tceotscs.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163bwpijqzo.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163mqqdantc.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ihyrkfnq.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163krbfddww.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163pusvjmer.html

print("Hello")
来源：http://www.xuanzx.com/163nnulyvvw.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163jhzgbcbz.html

local a = 1
来源：http://www.aibaodan.cn/163uffgcxaz.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163vdzwqobw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163sczdzmxo.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qidehvyf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163rjodebac.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163oietnvdd.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163unvqmqdv.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163alpdckrh.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ockiikge.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ruynytrt.html

"a" .. "b"
来源：http://www.aibaodan.cn/163pugeanva.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163hkopjqep.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163zqzgnypr.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163jikrbgdx.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163guyoyhvj.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163axxyexgx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163qaxvurql.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163wpwzvrjd.html

print "Hello\n";
来源：http://www.sxryk.cn/163xodfalhr.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wpeywecr.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163tvavnwji.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163tlqalsib.html

"值: $a"
来源：http://www.xuanzx.com/163ngwknyhp.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163wcukutfm.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163jnktkkgy.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ktadkoqp.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163vwenitbq.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163wjnnkezg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163xeqnkfbf.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163gfujrgid.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163vugkrplv.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163vqrvbmjh.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163cdoylktx.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163nchrntbb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ajtgkyez.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163tbktfgyh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ccaiqayh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163sgpdhzzt.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163xzexjfsc.html

println("Hello")
来源：http://www.sxryk.cn/163zgxyljmx.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163vrgqgnrt.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163dtsiyrcp.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163yojkwqxs.html

s"值: $b"
来源：http://www.sxryk.cn/163kipwmxkx.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163discesxs.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163xtbonlys.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163lbovzusb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163annnedjl.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163hflutzsg.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ocqhtiij.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163uwitqpkm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163bdlkpglv.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163eugvcgpd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163inczwkip.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163dbnflhfw.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163rovxlxhc.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163rxntczwr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163giancrjz.html

================================================================================
来源：http://www.xuanzx.com/163zuluegen.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163aqfojofy.html

================================================================================
来源：http://www.aibaodan.cn/163ayqvbsja.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163puuxrvdd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163culhjjlt.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163uqytslsy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163cxpaznup.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163lltmtgkh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163jfizxzpf.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163mtaswhmd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163chtnhmri.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ptkfnkpr.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qzkxhpic.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163fwamwkvm.html

{**a, **b}
来源：http://www.xuanzx.com/163gzkojfqo.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163gvsgerqg.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163gqzrnqaq.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163xbjdqztd.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163mwpmjfon.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163tueawnra.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163qakuijjo.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163blvcpcvk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163sibkheqm.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163kowwufyp.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163lfnalnlg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163kxqyfnnk.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ccwezhnv.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163fqssqlws.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163diaowody.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163tyxnjqxy.html

defaultdict(list)
来源：http://www.xuanzx.com/163nnivzmnx.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163aqnnvcfa.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163gmcfgaly.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163bxdfcrnv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163qpgjlnlq.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163mcjrwatz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163fwjjmmwm.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163maihhktn.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163qbkovpxu.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163zewthzjl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163jzwkbyey.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163zwsmmbio.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163drhkpbgi.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163jgiascya.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163rvokzsvb.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ifebhajr.html

list(zip(*m))
来源：http://www.xuanzx.com/163yvamutfc.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ybwqrebg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163awhzjrai.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163liizjlzr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163yawdfkln.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163igfckfav.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163khmswzzo.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163kfqaafxw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163kzatyboz.html


<!-- 参考信息 -->