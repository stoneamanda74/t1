外链999!wailian999！

openssl rand -hex 16
来源：http://www.xuanzx.com/163ftkfxqvj.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163sfcekihc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163jgirkwrh.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163xxdxqbgk.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163giwystil.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ztyfxbgd.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163yechsunx.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163jlmfhpke.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163wqhtysit.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163laltcorl.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163umabfqoe.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163pbjpkkat.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163kfcciskp.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163omzubnhd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163jnzkectz.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ywuilhru.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163aggfevrx.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wqvqklkp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fblwktqv.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163bqhinqkl.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163uwiznhff.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163btykfywx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163zhtpcnhg.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163zrwmuwrg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xxdebklc.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163vlgxdfty.html

time ./run.sh
来源：http://www.sxryk.cn/163duymdjoh.html

================================================================================
来源：http://www.sxryk.cn/163fqzwiuga.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163fujtievn.html

================================================================================
来源：http://www.sxryk.cn/163iwyprnid.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ecgdrnbg.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163xehhcihp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163qotpsmrb.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163onrepljo.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163vbfcwxgo.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163fwglikkn.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ewzqxnyd.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163lnwcwneb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163skczezbu.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ezcnafth.html

strlen(s)
来源：http://www.sxryk.cn/163cjfbfvik.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163qdqmoboh.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ttulqezj.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163gdqkuzax.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163minjlboa.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163bxsqzwde.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163jqwmhxfe.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jfputvfz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163pkljnroy.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163didfpukz.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163sivrymgu.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163geicofvv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163nmheftwe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163aplyysbl.html

fclose(f);
来源：http://www.xuanzx.com/163hipitkwf.html

[S12] C：写文件
来源：http://www.xuanzx.com/163mfciztee.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163scauhxoe.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163nbvmxism.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163atblstlg.html

[S14] C：枚举
来源：http://www.sxryk.cn/163gkqlbfjm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163kprjbsrc.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163jyjezanm.html

(double) a / b
来源：http://www.aibaodan.cn/163wfomhphn.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163gwjnnkak.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163gmeyqsyi.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163gmcczbft.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163bmifkvig.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qbfwxttv.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163usqvdbqn.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163hmynwjhg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163yedpyocn.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dmneuxcu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qcfhjbcw.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163kezllmuu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ohiautko.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163uacwimyh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ivdnhqcs.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163swyxgtji.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163frzxmmfq.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ximsvxcb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ytvgljqs.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163hrpdbhxx.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163xufzzdcl.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163fvsnbqgr.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163gkcvyqxk.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163kkycjjgj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163pomwzbit.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163bnffqiyu.html

static int counter = 0;
来源：http://www.aibaodan.cn/163wrrnaxfn.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163mmrfzdvb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163jlnvnghn.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163idxxizyq.html

#ifndef X_H
来源：http://www.sxryk.cn/163ysfypzng.html

#define X_H
来源：http://www.xuanzx.com/163xyipwjxm.html

#endif
来源：http://www.xuanzx.com/163ikebzqzg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163iujhhmju.html

#include <iostream>
来源：http://www.xuanzx.com/163tsvlxzic.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163sueioprn.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ysguqkum.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163meitbzyf.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163onfsaqsu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163yfutstfj.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163gqmxqbzv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163aepzgzna.html

[S35] C++：map
来源：http://www.sxryk.cn/163lczppxyb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cijhvoys.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163krymxovg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xfrhhtzf.html

[S37] C++：set
来源：http://www.sxryk.cn/163ewwctpqc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163xjtgccru.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163qfdtxbvn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ncliyvbp.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ylkjohep.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fcmgsogc.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ubnbcrvs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vhurirnv.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163nntjruab.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163adxopgfc.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163tkynjzvc.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163hzisiiex.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163blsfhdms.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163nouwmqhm.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ofxalnrm.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163uxulxmqg.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163dghxgydx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ojobgwya.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163nlakwgws.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163nnfzcszn.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163skdiumeb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163mxwypsuh.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163inycpucz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ularmlvn.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163qcpgijpo.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ebzupisb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163przjvdyf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163tjdicmcj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vqtwfzxc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163vwniqodf.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163yjadiwhd.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163xfcuhnhn.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163wrdoxuiq.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163zfggvyip.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163jkiukmnr.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kgmqjwgm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ebxzsoev.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163jwkwmgqg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ddyxxzyy.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cygppahs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163anxkvfec.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163bxfqikut.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163cgnmbwje.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ojtpdojj.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163atkvkygm.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163layrgqni.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163wewmablm.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ehbijcup.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163baunfkti.html

================================================================================
来源：http://www.aibaodan.cn/163einkcmak.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163mqqqfazk.html

================================================================================
来源：http://www.aibaodan.cn/163uliwbsxf.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163uisdyqrr.html

println("Hello")
来源：http://www.xuanzx.com/163prardwdd.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163tqtghbzy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163fkqpnmvo.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163dfrqqofg.html

"值: $b"
来源：http://www.aibaodan.cn/163shffbuud.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163jqqpprxk.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ufszumcv.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163tzioadtm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163zzfvnzqc.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163yhxsayan.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163qfartuof.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163igaanerw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163aqxpwrtu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163hoguwxsp.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cyqgnscw.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163sudmvgtl.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163nkxdmqyk.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vmvmsfgz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163gqddillr.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rhwjxdon.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ztbdfaoc.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qylpmpbq.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163gukpjqur.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163lbzczetf.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163grdybypq.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163hyuqimxq.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163mixuewpt.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163axgkkrwp.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163fcmcailz.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163dbbmoupx.html

print("Hello")
来源：http://www.sxryk.cn/163rtebklti.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163qwbkrnlz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163eevlbqdn.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163cbfyqkkd.html

"值: \(b)"
来源：http://www.aibaodan.cn/163trqpvyum.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163dawxvwmb.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163xlhrujpa.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163gfvjhgdb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163cnfclsco.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163rylzqhbx.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xvqgghvo.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163cubuutpe.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163wmumoyvs.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163bgxhjatb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163xenlonsx.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163gdwvmulr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ntyxlanf.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163czknxzvb.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163tqbzwfgk.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163zqyxxqec.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ynybtomq.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163gpinltib.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163crgqsbni.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ojalryya.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163wosubsvf.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ybafzsdi.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163bimxjafc.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163uqlykklf.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163cqkbbrff.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hsazopck.html

print("Hello")
来源：http://www.sxryk.cn/163swdautml.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163isdpvavo.html

local a = 1
来源：http://www.aibaodan.cn/163mhvcrgxq.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163swgcdtww.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ukyprnfy.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163whnrqfxn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163lupmlzea.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163edyikukm.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163mlilvcoa.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163uawwtmiz.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163jhsatacb.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163sxhpyvnx.html

"a" .. "b"
来源：http://www.sxryk.cn/163uxjgwvfn.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163gculhlbh.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163drfaafla.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163iictggpq.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163qusknvog.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163wnebnjqq.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ygsfwvmk.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163xmizfwst.html

print "Hello\n";
来源：http://www.xuanzx.com/163zhqjawmh.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163fmkeagww.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163uialgbda.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163imixmaat.html

"值: $a"
来源：http://www.aibaodan.cn/163titjbseo.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163yeubrpad.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163vskjssas.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163dgxovhnf.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163lwekktcz.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163nvhpaopc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163amwmghuz.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163qulcauyd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163gfnhnaav.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163apeuzout.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163yiobzcyc.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163newshofz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163fymgetih.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ubatjpif.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163mvyvqsab.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qfmchzrx.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ljjuoffx.html

println("Hello")
来源：http://www.xuanzx.com/163gusungcp.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163emahmrch.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163uhrybntt.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163dhgasohp.html

s"值: $b"
来源：http://www.sxryk.cn/163rnsnuepu.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163riymkyez.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163pihomuaz.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163yxfruzrw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163mpymotah.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163jegefgzh.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163pufwaozp.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163puuksavv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163gxixjgqk.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163djmtxgqn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qicldwur.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163yyxizmcx.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163fkyslgbu.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163pwhamisd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163dqgojydm.html

================================================================================
来源：http://www.aibaodan.cn/163flreglau.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163cmmkeunp.html

================================================================================
来源：http://www.xuanzx.com/163zcrztrot.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163tolfxdxy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ejqrecbf.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163rplonqqw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163tilafuqf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163wipcegrn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163fxrfissx.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163yydwuakz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163gsmbzjjt.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163xeylssru.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qlgzfmft.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163nvqqspjr.html

{**a, **b}
来源：http://www.xuanzx.com/163bpvfmzzz.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163qumfccol.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163szgbncno.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163axjrplxa.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163fgqrfzmi.html


<!-- 参考信息 -->