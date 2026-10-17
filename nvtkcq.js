外链999!wailian999！

openssl rand -hex 16
来源：http://www.sxryk.cn/163dswefyfm.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163nveditzn.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163wblnsxsa.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163xfkdrzii.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ahpufkul.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163vnftiumq.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163rnuetkcn.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tuvwojiw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163jlmhazsr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163yegfjlpj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ybmehanc.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163kfvskkir.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163wnhhccdr.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163umwsbvxx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163sfbvhspn.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163tmswpuph.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163fwgjmoop.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163edvcvgeq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kahfoahq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163xpboxskb.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vfplincq.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163vegrwlil.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wdtsacev.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163flssdxfw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163dpuwhuer.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fwkgjinb.html

time ./run.sh
来源：http://www.aibaodan.cn/163qhrgzpwh.html

================================================================================
来源：http://www.aibaodan.cn/163mqxfsqnm.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163oikklgvf.html

================================================================================
来源：http://www.aibaodan.cn/163skrklryz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ifwxnslf.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bkprxilx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163aftdtnsu.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163izjoqlnd.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ndplrvqb.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163yngfoyac.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163cahelemq.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ogvugrnr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163jjmfnuuw.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163uwjrmvcy.html

strlen(s)
来源：http://www.sxryk.cn/163gduraebk.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163cgfswpic.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163vmentcgw.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163gxjidqze.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163krlwkyxg.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jvktrxle.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163bumppqyg.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jthbbeml.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163arlutkks.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163jovxcggf.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163dcbwvuea.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163bjjpjtjm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ugjprxzk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163uaozxsth.html

fclose(f);
来源：http://www.aibaodan.cn/163yxojhrgi.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163kicshzyi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163laijmdch.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zydbyppn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163kmkppzvx.html

[S14] C：枚举
来源：http://www.sxryk.cn/163koyjqjgb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163wopgcwpg.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163wzzlhonj.html

(double) a / b
来源：http://www.sxryk.cn/163yvhsucng.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163vkkregwc.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163fpfozaye.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163iyfcfdnq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163yjnvclps.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163munvyady.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163owzgbnru.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163cviardmw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163djjvlmuv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ncsowevb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xesqajkz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163tebsirdh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163mivegcbi.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163zpepcfaq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163tlbkxscl.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hffsofzi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ceqmytir.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163favtuasu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163gqrqnaqs.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163dtkqvbtc.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163aoxhonjs.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163uqwoaygr.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163laqpvdzg.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163tvikqgpa.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163cjqewend.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163pyfcnpdd.html

static int counter = 0;
来源：http://www.xuanzx.com/163mbuvazrk.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zvakmswq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vbylcebr.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163vntfwkpq.html

#ifndef X_H
来源：http://www.xuanzx.com/163bduoqoty.html

#define X_H
来源：http://www.aibaodan.cn/163hjcrehcc.html

#endif
来源：http://www.xuanzx.com/163ewjnvdjr.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163sumlifff.html

#include <iostream>
来源：http://www.xuanzx.com/163jnqnsflq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163eoqvwmkl.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163uiylfwik.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163akbsrvgv.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163iqytrlkr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163efbfhsqs.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163bxwjraua.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163bugxjuzx.html

[S35] C++：map
来源：http://www.aibaodan.cn/163lyurpzvr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rtfwalze.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163crtefmyx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nrpkzomf.html

[S37] C++：set
来源：http://www.sxryk.cn/163kcruyzrb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jcgngufr.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hmydiakk.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163lsfwiqbc.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163hzxawssm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163zioshfpk.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163hgesbvho.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vkecmesp.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ghvzjwyj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163cwtiuoei.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163jtmhhtmu.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pntulcbe.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163pbouvxtu.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163usfjoord.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163kdnrvzvl.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163sycpodck.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163mmdwkcjg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163isfvthrb.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163wwjbmkvo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ckidnbkt.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163hbvpvqgf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163letfgwsi.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163zxwfwqqn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163nnmopxeh.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163iszexjqb.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163wixtewek.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163efqmcytb.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ngcacyfd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ukoncula.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163owtgvniz.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163tyzewanu.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ztpgwczx.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gdgqanlx.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163demzxhol.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163lwuvfybw.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163gxjhgqty.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163vdnfnxlc.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163beoihnqd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163njdounsb.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163wvsstczf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163vgtdwvga.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163qywecsfa.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ggnaxsgb.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ecnjvgpv.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163upvowvlq.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163isnxehyi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163swyqugme.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163tnhxrqhn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163wlpvqxgp.html

================================================================================
来源：http://www.sxryk.cn/163wmvulqpy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163esrqicod.html

================================================================================
来源：http://www.sxryk.cn/163wdyzigku.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163pxhbassu.html

println("Hello")
来源：http://www.sxryk.cn/163pwvdrkhz.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163yfhslfut.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163fecvhsxv.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163xuoixjpr.html

"值: $b"
来源：http://www.sxryk.cn/163gdcxjjmr.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163yzosiuzn.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163itcqvbhc.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163dkdrbdbf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163gflduiar.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jyvsgnmh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163canmvvvn.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vtheftft.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163zbbfnqsh.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163dvgqqhjn.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163rzpmfekc.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163vtmwrmnw.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163yemrafst.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163gwctggfj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163oqxijlsf.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vizernaq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ybbkgccj.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163vbgwbdsr.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163fdcxsasy.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163xlqvecla.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163jvrpgjsq.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163vnaxqgxu.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wieejtpq.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vocdpdku.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163eibmmajy.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163lmkezyxy.html

print("Hello")
来源：http://www.xuanzx.com/163nxvbimlq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163yoslibzp.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163hkmyippy.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163syascvus.html

"值: \(b)"
来源：http://www.aibaodan.cn/163zwimdqwo.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163jerqopjg.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163plxrnpcq.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163xwbaabro.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ubegjuiz.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163iocqrlwd.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163cfchuvoi.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163fzojhohq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163aqxbuvoh.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163okhlkygh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163peomefuj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163karkcuhu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163zmobswwp.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163lumvvemc.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ddcntmep.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ztctezvg.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163lgylwoje.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163wsfnrkwy.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163dacsrnhw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163oclkzddq.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ugtoyvln.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163xfmvrjtk.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163qbpslqfo.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rojswszl.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163rgyshefd.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163iiacrxwg.html

print("Hello")
来源：http://www.aibaodan.cn/163ygqdksza.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163mzdfcdny.html

local a = 1
来源：http://www.xuanzx.com/163ykpakdji.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163sgcacdbi.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163khsiuecy.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163lqhnsqtl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163udvmbmjz.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163zxkouzvo.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163xywdfzes.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163wflklnss.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163yrboxoiq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163satlayli.html

"a" .. "b"
来源：http://www.sxryk.cn/163ackfxltl.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163cvmnyyeq.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163nebybjiu.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163tajjtnwq.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163vcuwppkz.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163tsebfymr.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163gfehmsbg.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ptuhxiba.html

print "Hello\n";
来源：http://www.sxryk.cn/163kmztmugq.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163blvpayes.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ohcxhdbc.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163czzwbpoa.html

"值: $a"
来源：http://www.xuanzx.com/163zmuhsofs.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163lufjtvue.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163dbiwfdia.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163igyldnxz.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163uxzmenjb.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163upftbaxt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163mmefbaja.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163yihsztrz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163behlmcgy.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163cechvaqd.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ijljjdba.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163kewcniqi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163bduhjwkn.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ubtayokl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163wdklwhdj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163xhvjkgrc.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163fashjbdg.html

println("Hello")
来源：http://www.sxryk.cn/163tdzvicuq.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163zulpemzt.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ecjfdrtl.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163hyhhcqzd.html

s"值: $b"
来源：http://www.xuanzx.com/163cdiyagzh.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163smxgchsl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ivdadmel.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163qjjbpfgm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163hnzpyvaa.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ejjtsolg.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163emihdzys.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163amyqpwdp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rentyunu.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163myrfcztf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163xngxpywk.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163cmxmcwmg.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163hqllymro.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163kbvistzu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163twlngokn.html

================================================================================
来源：http://www.aibaodan.cn/163alxcapjk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ofretfhm.html

================================================================================
来源：http://www.sxryk.cn/163vobnkeic.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163vfkyxiug.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163fozgxlfh.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163kacilnaj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163sfvbbylp.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163mcmhoblx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ukpifnba.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163evwwqutg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163dbajvhsz.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ahnatwps.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qwgupqsd.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163xevpvhzq.html

{**a, **b}
来源：http://www.xuanzx.com/163cwshpggn.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ddbpiikm.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163mzpylrfc.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163qauflewi.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163xuyddrqo.html


<!-- 参考信息 -->