外链999!wailian999！

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163msnsylsw.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163unybuxzp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163aqvakyvx.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163qrwkwfrs.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163nfzaqvwx.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ibqkihgo.html

time ./run.sh
来源：http://www.aibaodan.cn/163qhordmnz.html

================================================================================
来源：http://www.xuanzx.com/163pemdunky.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163rilzshvl.html

================================================================================
来源：http://www.xuanzx.com/163pekxfqcx.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163cluvogoq.html

#include <stdio.h>
来源：http://www.xuanzx.com/163rsnrhonb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163eybjigjq.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163svlbreno.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ueuulfpj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163owhgjaub.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ofsjnrmq.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163zlsjxhqz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rnvdrobl.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163tliwwoij.html

strlen(s)
来源：http://www.aibaodan.cn/163quicuqan.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vgakqusg.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163euwtzzyb.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163gdhyxfoj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wqanigfd.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ctadtpox.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163zeojlglo.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163kjntxajh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163riypdrbp.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163jtmiqoru.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fnqfsulx.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163donwbhmt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163prrrrgjg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dtxymcko.html

fclose(f);
来源：http://www.sxryk.cn/163pjvsdfxc.html

[S12] C：写文件
来源：http://www.xuanzx.com/163tlwyptiu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163oyznpeer.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rdjrzyvl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vlnpzvyp.html

[S14] C：枚举
来源：http://www.xuanzx.com/163azeymjvw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163uydlrnlg.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dkwwykff.html

(double) a / b
来源：http://www.aibaodan.cn/163bviwyuwu.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163lhkcznnv.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163hdbmccdl.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163bpxbvkqo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qgpqdjbk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163pdytfyrw.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wbrzjxpc.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163nsustfmt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mbhzgwyr.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ortwrfxq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jpunezde.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163woadamcw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163dnviwjgd.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jxngwqsg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163jdtbsjto.html

[S23] C：随机数
来源：http://www.sxryk.cn/163emkiwseq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163huohnzfz.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163dygmcpcd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163lmvkklmh.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163xnrlpawq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163vmmbbcfb.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ivztbchv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163qcnrkkvq.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163gkfbglxo.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163niwaphqf.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tjdavbzk.html

static int counter = 0;
来源：http://www.xuanzx.com/163hitfhxod.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163siejuqys.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163zbvsaasw.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163cuyeoxze.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ngfwyipy.html

#define X_H
来源：http://www.xuanzx.com/163axfikubf.html

#endif
来源：http://www.aibaodan.cn/163oehgmbym.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163qxygwumn.html

#include <iostream>
来源：http://www.xuanzx.com/163xblgyjir.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163wqkvosfa.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ymdlwgas.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163qwvzldrf.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163fbthhgay.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163dcdvrkbn.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163yjgquoat.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xfvnzety.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ytrlcpck.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ngfskyzf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ocrgcjae.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163moaekfel.html

[S37] C++：set
来源：http://www.aibaodan.cn/163gektcddl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163uvafmqvn.html

[S38] C++：排序
来源：http://www.sxryk.cn/163jujcjawm.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163pmirhbeh.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xnayhskt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163vyucmitm.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ybqtxsfc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163mmknccis.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163pszzlcym.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163dfpskokf.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wfduokyq.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163kbspnaxf.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163peklhfhg.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163oosdcxjw.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wdyykllu.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163zsvyjfnu.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163qzswvlqx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163jdkkptoy.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163jhnoyjox.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163uicbxetg.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163tiqebytt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163iymruovw.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163oneiwvzr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163bowexsxe.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163lkxzbcys.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163erigcscd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163sqdaxcwp.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163omripfnx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163osudwerq.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163flrkcnth.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163muvkdofy.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163gqxkbnfa.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163pjyzakcn.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163lwqagunp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163kfnwhnwb.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163bvwwmwfd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163tuacglew.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163nuzusikj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163imtgqwav.html

[S56] C++：optional
来源：http://www.xuanzx.com/163hpacstdh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163rllfxxam.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163seelhefb.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ygzaibql.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163qxcapxmk.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163vjebboee.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163rwpivfwv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163xsazutpz.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163gatgnxcp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ltwovrkp.html

================================================================================
来源：http://www.xuanzx.com/163iilsiksf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jasgbtdw.html

================================================================================
来源：http://www.sxryk.cn/163dysnxpfp.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163iziokbkc.html

println("Hello")
来源：http://www.xuanzx.com/163adapuwjm.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163nbyzcdiy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163upqgktdg.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163nbnjciok.html

"值: $b"
来源：http://www.aibaodan.cn/163rcpjiczt.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163qxfgrogg.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163prwnplze.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163nrzvngiy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163qvdlxppl.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163suchqwmn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ypcutgxk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ywclxqac.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ckicvrre.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ptcmprpu.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163dmcrcsgu.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163xdpmkgxc.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163gtlbylsy.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163mxzchsfk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163dubbwerp.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163wxabzolw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163nrqadbum.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163evbnxkdf.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163kejwutcz.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163yorceukl.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163lblvthix.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163rkqzuyrs.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163lfndfhff.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163txlntjes.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163yrwttpah.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163jnsxhunm.html

print("Hello")
来源：http://www.aibaodan.cn/163jbhrjdgt.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163xptonyuz.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163mejguzwa.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163isqnciku.html

"值: \(b)"
来源：http://www.sxryk.cn/163ljlcsnaa.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ygapogxl.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163osofnwtd.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163hklvwoqx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163lifztygm.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163flrunyjh.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163xslkykan.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163xxqidlyt.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163mncsxmqz.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163wdjlodjx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163dytytzfi.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163utzuqlof.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163bsgzkctx.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163vphosagr.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ocdzbvyx.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163fuuzmixv.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163swugijyf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163xkxnfyqj.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163cszjzowi.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163otxrcwzk.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163maozbfxs.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163pkqcfnvg.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ssivencx.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163rpjqjyul.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163qbkjrpur.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163dbizpmgb.html

print("Hello")
来源：http://www.xuanzx.com/163kpaayqza.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163nmllsvsj.html

local a = 1
来源：http://www.aibaodan.cn/163maqicyxa.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163rmbfuosp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163rwydvuqj.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163fzlioski.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163gsmdmjiz.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163solzorjm.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163xfgrtpem.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163tcdfdcdi.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163eiusytmr.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163txkxeqrh.html

"a" .. "b"
来源：http://www.aibaodan.cn/163pqieutkb.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163mdzkkcnc.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163jynledmi.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ptinvsdt.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163cszmmdqb.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163drdelnis.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163fpkaksrw.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163yplconnf.html

print "Hello\n";
来源：http://www.sxryk.cn/163fvyxzwzs.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163aqmwxyvs.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163gjnrjesd.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163lyikammm.html

"值: $a"
来源：http://www.aibaodan.cn/163hwhahvpi.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163wvklzauj.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163wznnzjdo.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163okbzcfuo.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163zcuabdjv.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163efwvamov.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163kbqnmosj.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ipmgafvm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163latmkymh.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163hobnmjyz.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163kpmtzjrc.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163mzcvjhjh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163uqwqimdx.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163qdobagne.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ovtyiodh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163tohgzbqf.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163azjjqmrz.html

println("Hello")
来源：http://www.xuanzx.com/163qyddfyhu.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163vatmprxi.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163sfujxcwo.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163lootgjmn.html

s"值: $b"
来源：http://www.sxryk.cn/163symohhsn.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163wfubuugx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163vqsljryk.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163satzsevw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163mkjnmqht.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163rqzkxuar.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163lvytuljx.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163axkobjpz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163dxpusrwy.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ybeffedw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163xhtgoudo.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ypbyhhtk.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163mykmzoyy.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163pgbrjhke.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hbdthddu.html

================================================================================
来源：http://www.sxryk.cn/163iqpzevhl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163twcguiyr.html

================================================================================
来源：http://www.aibaodan.cn/163nkumucbq.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163ynvpsstx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163frwrznkg.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163iycszprs.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163qrwzqyqy.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163peuewnso.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163iomzeaqd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163glaolzmh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ndlazthi.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ebgrhbyg.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fyqipzum.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163xuhqqkxo.html

{**a, **b}
来源：http://www.xuanzx.com/163flwaplze.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163xlhdaygk.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163tuixicss.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163htjhaapn.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163tkwxgxjb.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163owgwbutf.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163jdrxllaq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163kooinmqd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163khstopkm.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163owgaujrn.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163idskipvt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163uycodlrp.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163nirkevhl.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163saiorqqf.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163hoiptogh.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163cdyakmff.html

defaultdict(list)
来源：http://www.xuanzx.com/163jmsxouts.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163oubyxzpa.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ntaloasd.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163pjwzjrke.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163uopjmhni.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163boyynvio.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163rkluvcgs.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163xqaynmfl.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163jddqmzqg.html


<!-- 参考信息 -->