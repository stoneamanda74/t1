外链999!wailian999！

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163mfobrqyg.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163dlnpbsaa.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163mixaifuh.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163knqwvlve.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163cpllgxgk.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ofmfgmeg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dolmsvmt.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163qlampenw.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163fawlbcrk.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163sjewfmwy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fcfpujxv.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163khfbkotw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163whlqdbzv.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163xaygfsua.html

time ./run.sh
来源：http://www.xuanzx.com/163thihvbss.html

================================================================================
来源：http://www.aibaodan.cn/163qgnxsbkj.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163snixfbmw.html

================================================================================
来源：http://www.xuanzx.com/163wsivyydd.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163tnlxujue.html

#include <stdio.h>
来源：http://www.xuanzx.com/163sclylajz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163svdqbjqo.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163fjufqepr.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163mgofgcxa.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163xwvkollw.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163eyzfzupa.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vfotwxjp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163sovojvwd.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ytdhzohx.html

strlen(s)
来源：http://www.aibaodan.cn/163idckkoxo.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163wndinkqp.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163nwhiwdkv.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163raqniget.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163elewqpbr.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163dylbqvdo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163upvjqoow.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163atbzhfxv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163lxvcmirw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163xwntysie.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163dpbxaxwr.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163jiokctlu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163zyyoszia.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163oiqmunch.html

fclose(f);
来源：http://www.sxryk.cn/163mztmqbac.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163klktvtrh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163hmkihspq.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ohdntkep.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163srsmejko.html

[S14] C：枚举
来源：http://www.xuanzx.com/163cjxtjukk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163xlicgbsj.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163jdoveoqw.html

(double) a / b
来源：http://www.sxryk.cn/163uytsmshk.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163nqlfyoav.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163aaxejmvt.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163qnoapflg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lichgxqr.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ysycbcfv.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163appairmk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163wqfyiovi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163enhltvwo.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163pqolplkh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ycrfncpl.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163yislofbx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163begbosmq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163rggxeebd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163zcwauvqt.html

[S23] C：随机数
来源：http://www.xuanzx.com/163fmjjsfjs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163iivfcpfl.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ztinanfm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163cerzqecx.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163kfculnsu.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163hrerlrep.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163eufdjddh.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wedilegl.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163evpulszl.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163pswanysl.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163iansaugi.html

static int counter = 0;
来源：http://www.aibaodan.cn/163bhgzgjgf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zcvslkck.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163uttycefp.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163moffrmnb.html

#ifndef X_H
来源：http://www.xuanzx.com/163zhcjhuqu.html

#define X_H
来源：http://www.sxryk.cn/163hgwxlcdh.html

#endif
来源：http://www.xuanzx.com/163jjgliwdv.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163qccsvdjp.html

#include <iostream>
来源：http://www.aibaodan.cn/163ikizrotb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163cxmmtxai.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ztewinmf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163gfemyftw.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163gvclbqku.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163lrmjdyvl.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ciqnavhs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ktplwqtt.html

[S35] C++：map
来源：http://www.aibaodan.cn/163uituxgrf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bsuqwmhu.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163keiphzqi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mcyuhueb.html

[S37] C++：set
来源：http://www.xuanzx.com/163lswvqdha.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163uvhsscjj.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163oqozwpsb.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163cafazsjj.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163pnqaugfz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163zashbruc.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ayplcnax.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ghgtvxqj.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163gebzhbxi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163rlbjbaqp.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163jteslroz.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zmnkhaen.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163okozyuyi.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lywalywx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ziwxaodt.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ubpdamns.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vtedmebw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ovgeapix.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163lavsxzdl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163kwxamsva.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163hjxxulcb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163jmmokltb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163mlxwxnpo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163javvxjlp.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163itqlswad.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163puysaodn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163wshutrin.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163pxruzabu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163jpkmiiqc.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ksebuesq.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163paguzaru.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163sgyocgib.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163prxfoxhy.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163sbeucsor.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ezvzjbkl.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163sosdnxsw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163rfobirxi.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163eoefrivk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163rutyltge.html

[S56] C++：optional
来源：http://www.sxryk.cn/163yraygxaa.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163wbcysrxe.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rgqbodgg.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163acbppdpn.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163hwgzwznn.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ilgeuoad.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163qkzlkiou.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163qdtobsjx.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163mubelnzt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163bzulnzvj.html

================================================================================
来源：http://www.xuanzx.com/163dfmugkbp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163djuifpad.html

================================================================================
来源：http://www.sxryk.cn/163csofylgd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163daltykuh.html

println("Hello")
来源：http://www.xuanzx.com/163rhulzccg.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163tbmruusx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163kxsrgvnr.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163dhmprbjj.html

"值: $b"
来源：http://www.aibaodan.cn/163uxxdjhdo.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ckejvjga.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163owmceykl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163rsjmbwfi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163oemkafie.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zjjpdunl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163zdcbvmpm.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163fckjlaps.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163sydtlaea.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qhjyxkkj.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ytflegxc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163wdlayzoj.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163gpeafjnc.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163uclvmjdb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163nlapmgvd.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163sripxqfi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163fnqlfyop.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ndrwxxci.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ecqirmap.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163xsjzwrnd.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163smgfvfmh.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tshlmdwi.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163qyxhlvht.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163fimnyftu.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ddpsqrev.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163skhnundp.html

print("Hello")
来源：http://www.xuanzx.com/163wkldwsoa.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163xkcrvvzb.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163jqfkwnmv.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qwdgeldf.html

"值: \(b)"
来源：http://www.xuanzx.com/163hrdyruwu.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163dvyhlpfh.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163jeyzemut.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163stylonqx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163vzunhtvw.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163kbjdevjl.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163quftvvvc.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163eopnauch.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163snawvtvz.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163klsqyndk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zufmhpfs.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163rsusulra.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163npanxehg.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163grzqpkwf.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163mwrtkwvm.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163cwvsnfvm.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163vxswqknt.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163hbaxqkmo.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163bqycbysx.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163dpcxpmdn.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163lrnovxyl.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ueueikcz.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163drfwpdsn.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163vmojdpnn.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163xgiidotr.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163oxwweztr.html

print("Hello")
来源：http://www.sxryk.cn/163jrvuudxd.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163umggeoov.html

local a = 1
来源：http://www.aibaodan.cn/163rohtlawa.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163mzqenakp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163aalpreku.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163sdzygets.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163qovedumr.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163sfgnmwqe.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163aenmdedl.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163kjicunod.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163qrzetajj.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ywbsjttl.html

"a" .. "b"
来源：http://www.aibaodan.cn/163skjeesco.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163emewtqtt.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163pvbceytj.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ffickuwd.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163qlkuldsu.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163yjrwazre.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163dcedytmu.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163iokghubj.html

print "Hello\n";
来源：http://www.xuanzx.com/163demezvtw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163pnyezagp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163rngwngjk.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ejbvkdcq.html

"值: $a"
来源：http://www.aibaodan.cn/163ykifkaaa.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163gknhxxvl.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163bjqtaqnn.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163rahambyh.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163trgnsuqm.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163mxmrekrk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163cswcfhgn.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ecajcjzj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163yimfyvte.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163afmgubem.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163jwogkpjr.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ppijtsvq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163qbwzzlpf.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163wfdgnfby.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163qvgmgsuu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163psjrrwwy.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163xuzqzknj.html

println("Hello")
来源：http://www.sxryk.cn/163dohtvmgk.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163hgtnpamw.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163fdbljzzu.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163auupafud.html

s"值: $b"
来源：http://www.xuanzx.com/163szrccolv.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163gabdvfok.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163xupzqkyq.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163guqupoom.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163rqrofcna.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ooxgpqvh.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163fkvjedwr.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163hrgnoyvq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163wldkmfls.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163plxidpgk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163oegbqvdq.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163jtmnvpyb.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163rcvxlaty.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163nmtapivi.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163vahjvtnj.html

================================================================================
来源：http://www.aibaodan.cn/163lmmvjoox.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163lxkuivhq.html

================================================================================
来源：http://www.xuanzx.com/163lwplunyd.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163vjvobiih.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ckfhrhgg.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163uoxpudce.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163wpuvgkbp.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163skkizhaa.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163qmdqissx.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163zuhsdgbu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ccgohcaw.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163nrvbvmpz.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163icggivcb.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163xniuuguw.html

{**a, **b}
来源：http://www.xuanzx.com/163jqgkrnjb.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163upixislk.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163edkecrkp.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kyspehdl.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163jojykpyz.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163zpoawaqq.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163abkkzvku.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163cgivdvdn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163scbozkuv.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163gpafmpml.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ialxuhkd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163gcfluuis.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163pqywmgnp.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163pwgmztsc.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163yvlxjfaa.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163gfmfbiff.html

defaultdict(list)
来源：http://www.xuanzx.com/163eocuzgnt.html


<!-- 参考信息 -->