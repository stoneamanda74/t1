外链999!wailian999！

openssl rand -hex 16
来源：http://www.xuanzx.com/163ymkaptxe.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163bnlyelza.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163mpyexyuo.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163oatazltv.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163jumyccdz.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163vibplcym.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163cuzlhylj.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163imhwvsbu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163iepdvdbn.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163asjqnmzi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163piwxbfol.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163simmpoeb.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163qwualeum.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163rbrixuod.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163etlhhjwd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163spjrgdit.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ncvtwxqm.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163fxkxdlkm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zqstgmuv.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163bazrryhz.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163rtctmogl.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xkouepeg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163shrgzepy.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ywyqnkmf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163plnhwsck.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163bwtzkrhl.html

time ./run.sh
来源：http://www.sxryk.cn/163deqydxxv.html

================================================================================
来源：http://www.aibaodan.cn/163erwbzltp.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163iuyukcvi.html

================================================================================
来源：http://www.sxryk.cn/163xtxwvlda.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163vygzqlvo.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kyibonjt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163bcqzauyh.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wchyactb.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163adgfmhvk.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163kcpuauwz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163kafulldx.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163lviogzdp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163kocqxmgd.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163bodbwbbj.html

strlen(s)
来源：http://www.xuanzx.com/163lmwcvmst.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163xwqqgogz.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163mgepfixd.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163usotxiui.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163afjbqkfc.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ueptsmpy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163xphguzvk.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163mviazymh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163unzynwna.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163jgfoagld.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qfughuqe.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163mdkbtfkn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163mgtjasfw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163uwuzphjx.html

fclose(f);
来源：http://www.xuanzx.com/163uqwwyvna.html

[S12] C：写文件
来源：http://www.xuanzx.com/163vzogbhsx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163jejatblg.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163cpesneyc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lnyhsaev.html

[S14] C：枚举
来源：http://www.sxryk.cn/163zitetlpg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163eelcpoyr.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ngisjatv.html

(double) a / b
来源：http://www.xuanzx.com/163joutpggz.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163udavfclf.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163tzwksaom.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163nljdbmrk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163nbazmrvb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163vuguyadw.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163tcfvhvwv.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wfxaxeyw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fqfkwjlq.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163raatjxog.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rmrmvjng.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163shswshvb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163veuonbey.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163snyvyuam.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vscsyupr.html

[S23] C：随机数
来源：http://www.xuanzx.com/163juprlseu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163itzwjlwj.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hykuzwoo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163aefkiqsi.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ldibmasq.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163jnwiizjl.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163elkhinar.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163tljhmfui.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163aevumvbs.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163hoadgtns.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jkijfwtf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163jkeqjvqb.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ntrsvyil.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ykybzzaj.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163hqmihash.html

#ifndef X_H
来源：http://www.xuanzx.com/163jngrqllx.html

#define X_H
来源：http://www.sxryk.cn/163irepzcrl.html

#endif
来源：http://www.sxryk.cn/163zszuxdoi.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ojsyqnoe.html

#include <iostream>
来源：http://www.sxryk.cn/163gyoqhhys.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163pbfxatoe.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163seeoekcu.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163lusbfqov.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ygdekdjk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163zubtdmpn.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163bddaighx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163kyojvaii.html

[S35] C++：map
来源：http://www.xuanzx.com/163dhlxeqtb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jsphierq.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163mzkuppym.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rqwrzppw.html

[S37] C++：set
来源：http://www.sxryk.cn/163gxhlffzd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163rinmkbvy.html

[S38] C++：排序
来源：http://www.sxryk.cn/163aqrzbciz.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163mtetgqhq.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qnkfnuxu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163gxvlirfu.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qpamowrd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163qszbpffk.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163xjyuxzwq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163jkyirrua.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163gaxctzqm.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163tzeoiqda.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163tevfwzzf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zgukpzrm.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163fdngjmbc.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ywnusyjw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163bazrzxmn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163uqxixgzs.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ypjdosaj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163yxlwjhzm.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163iubsbyeh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163plpieezg.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163jlotmzkm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163gyseuhmj.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163wzkdygvo.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163msrpxeya.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ztjnlycf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163tajvqcje.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jgxealrs.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163xudkgjhg.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163bdgbukjp.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163hrkjyizr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gpdchrpk.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163cfjioqbj.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163vpjuofmb.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ayokcvro.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163owyzraub.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163jriwbmvj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163dzlpwcae.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zshlbzvn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163rqqfqswr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163rczewnwz.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163zinuvglv.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163svcaykzq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163liaqrctl.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ynnummra.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ycpgguay.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163rxsmlkuk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163lscdtflk.html

================================================================================
来源：http://www.sxryk.cn/163nvdnnipd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163uxdygqbk.html

================================================================================
来源：http://www.sxryk.cn/163hhqfryai.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163dtjsyisl.html

println("Hello")
来源：http://www.aibaodan.cn/163vzqgonut.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xhihwoqp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163dbivusdr.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163oyzgtgrg.html

"值: $b"
来源：http://www.xuanzx.com/163nctdfbtm.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163irmdrqtx.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ywqztncn.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163mpqfozxm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ztgbuwsj.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163lxvtjbcj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ruhzkumy.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wwfssrqo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163nwpkmspc.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163blulhgll.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ardqieag.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163yaykyvyz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163zyctulru.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163liyaucge.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163vaiwvbtj.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163kdgcsmfm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163zadnijfq.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163smpkdart.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163drfgziaz.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163xuxinash.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ssckvtwy.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ruxdhtpc.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163jqybyzug.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163pejwteiq.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163qhcirstd.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ahxttwig.html

print("Hello")
来源：http://www.sxryk.cn/163mikfcuxg.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163sdwcsiwe.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ndcwtpic.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163nwtaqszq.html

"值: \(b)"
来源：http://www.aibaodan.cn/163trakddun.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163lbcvkszj.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163sqootxbm.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163aymrbtkl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hryedihw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163euvakucg.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163saeqyusl.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163rldmmbga.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163poaogwdw.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163cbosfxwt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163bvjshmud.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163cylnxhnm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163frzczdqs.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163skwvkcoz.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163vsoeavng.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163wfxlglja.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163vfrltyba.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163uwuzblnm.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163zsdtxpro.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ouptyixx.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163rxsiggcm.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163fnuroknn.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ixakujth.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ttkmiqen.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163nvjctctx.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163wbzdyonq.html

print("Hello")
来源：http://www.xuanzx.com/163qmwkmnho.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163otykfaow.html

local a = 1
来源：http://www.sxryk.cn/163buwvwvqx.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ljffxcfk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163wpizymuz.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qvmgvilo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163buktlnfz.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ebrrkkvi.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163lndaomsg.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163qmhekvwu.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163uqzkkfun.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163mlydjxch.html

"a" .. "b"
来源：http://www.aibaodan.cn/163grhparjr.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163cuswiuql.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ocvludmd.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163kqlpbjxs.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163qhmheyqs.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163hgbbljxu.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163rhrefeoc.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163usahsztr.html

print "Hello\n";
来源：http://www.aibaodan.cn/163xtgaacfs.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163soescobt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163uxitmdge.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163nyrdljsc.html

"值: $a"
来源：http://www.sxryk.cn/163ynwlprsu.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163zvflnohu.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163jtqhpaah.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163yqlbgzdf.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163exfdjmoe.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163twhdbwuq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163pmczywyc.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163huhmcazp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163tjtbjlev.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163bvbaague.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163zuhjqfxr.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163sesqzuql.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163zgjboiui.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163aetjkeuz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163nvcjfbpm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163dvoxeupb.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163unxkhsgd.html

println("Hello")
来源：http://www.xuanzx.com/163iedxtjoe.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163kgffnxlm.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163crgtfdkq.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163sqgplecz.html

s"值: $b"
来源：http://www.xuanzx.com/163xxnbabzg.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163yzaefxwb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ijaymkzh.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163jjayehjd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163jnhgmurz.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163bajnllbq.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163yytkrcbh.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163rcwekdtb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163qwpbbcgd.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gpkqauqz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163wporglrp.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163jszplmdk.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163crihhxnb.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163xtoteese.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163yufakaws.html

================================================================================
来源：http://www.sxryk.cn/163zptfsuom.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163fceqgenb.html

================================================================================
来源：http://www.xuanzx.com/163dzqfupnm.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163fomdopav.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163bncbpvjq.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163iwcnrzls.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rzzsipjw.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163dedpqjeu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163bhuwprbm.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163lgzeaadm.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163pecrkmbi.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163aofsjldw.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fxmxsmfp.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163onqwhspq.html

{**a, **b}
来源：http://www.sxryk.cn/163kuxaheiv.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163zuounckc.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163qlsxyjfs.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163cjfyhkvp.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163sdqduwsj.html


<!-- 参考信息 -->