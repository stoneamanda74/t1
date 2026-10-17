外链999!wailian999！

openssl rand -hex 16
来源：http://www.sxryk.cn/163jxlmeudw.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ohkmvskt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163sswpipna.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163wisucklf.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163tfxtswgi.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163uaxtyiyo.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163lpjsexpx.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163wsyuixfj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163tdpipfak.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163elkntenv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163jkhalqig.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163veuryonq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163heesscsu.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ymbshlwy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163josqmyvy.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163jeastiba.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163hyioztlv.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163wkesnjce.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jpkryhhg.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wcysxhvx.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163rqbnlqmv.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163eztvavqw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163zqpjerlt.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163edfvhxgb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163jhfdnxgh.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163grxuziqy.html

time ./run.sh
来源：http://www.sxryk.cn/163tflntjpc.html

================================================================================
来源：http://www.xuanzx.com/163rwpdohmz.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163xgoxdwjx.html

================================================================================
来源：http://www.xuanzx.com/163gvynnbkq.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163tlynijoe.html

#include <stdio.h>
来源：http://www.sxryk.cn/163wimhnehv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dstlpuje.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163paatbohv.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163kvnaeheq.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ttosfhgw.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ogxefygy.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163pvyvasun.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163vcqqakab.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163atfyqpnn.html

strlen(s)
来源：http://www.sxryk.cn/163tytucytp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163isrmadfk.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163wqpyxrad.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163bqgfapty.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163slqsmrfp.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163mqalcgcs.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163hyskbayd.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163snufwois.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163wlxlzjwh.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163qhgevvoz.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ajuzxmex.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163jkulnvvg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bdwnxkuc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163zsdjngml.html

fclose(f);
来源：http://www.aibaodan.cn/163umfmownq.html

[S12] C：写文件
来源：http://www.sxryk.cn/163kfmvkfqm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ydbzxcre.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163vcmqrhzo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mvnwixzc.html

[S14] C：枚举
来源：http://www.xuanzx.com/163oqwhctjt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163jecltnfi.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163holbyylb.html

(double) a / b
来源：http://www.aibaodan.cn/163bddeodnu.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163lmunqqbm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163nelcsdsx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163xdcwdmtv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ftbzvrmr.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163xpmsjoki.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ylmxbksr.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wbelcmll.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mtguikqw.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163vdsypkyn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wtywuvfa.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163rxsjhekc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163hzflqihd.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163onnjxerc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163fyzidask.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qpevqgpj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163jprhhrld.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163bgsywygm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163flgwcvxp.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163rtoviwhd.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163lvrainkf.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ffmrqkhl.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zxfwyeac.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ujcbdxzo.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vjteojfq.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ahbimeaw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163wwhhszfe.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163reoxfhym.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163mheygfta.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vwpbdsdj.html

#ifndef X_H
来源：http://www.sxryk.cn/163obcjtral.html

#define X_H
来源：http://www.aibaodan.cn/163ztrobdnc.html

#endif
来源：http://www.xuanzx.com/163lxqpzbqi.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163mgkeunkz.html

#include <iostream>
来源：http://www.aibaodan.cn/163aaykjqjv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jdihzklu.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163lncckhzj.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vtqjavur.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163kfedmwrg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163crwksueb.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163toyabhwb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163hdqnjqib.html

[S35] C++：map
来源：http://www.sxryk.cn/163sepuwzar.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jykokhyz.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163tvzaavyw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zcwozgsv.html

[S37] C++：set
来源：http://www.xuanzx.com/163bnrvbwfk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gmrdyhou.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vfbnbqzv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163pfzidaef.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163imalagid.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163zbhyzbqx.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163eveqbntz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ezvkcqyy.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163kvetwdte.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163xgyuqemg.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qbypgzyk.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163zxlajfoi.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163kurhxtff.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lotbpzlj.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163cxaeryvf.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163eqijljzr.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163qtjltetj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163nrotukap.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163gzomhcdc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163jdqpyjpg.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163uaovmdtq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163vdfckuuf.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fhepjtvh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163emfinjaz.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163sulxlaro.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163znrbclyo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163wwlbibkh.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163juzmnnml.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163gqipplso.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163smnipnuc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163hjxahqrb.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163sqapfsid.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163krbbypmf.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163bdguudwa.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163zwrkcwye.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163sqoecwwr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ztsmmcbf.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hsfhqdqw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xuqezpmv.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tggytilh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163dmlxaohc.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dqmtllit.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ryiedgml.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163aiqagypy.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163fqniqzwq.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163qmcopvoq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163pvxlvndo.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163mrwtfimk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163fcatehbn.html

================================================================================
来源：http://www.sxryk.cn/163vnlpuatn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ikrsmpid.html

================================================================================
来源：http://www.xuanzx.com/163nnozkqvl.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hylhtgyp.html

println("Hello")
来源：http://www.aibaodan.cn/163ygotjbeu.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zxowyczx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163sawbvezi.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ljgkxspz.html

"值: $b"
来源：http://www.xuanzx.com/163triuykaa.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163usoyfxxf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163rbcucljl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163aactugvt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163nqvmicgv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163qbnlitgt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163zgadydku.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163kfrrwvww.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163tgtlkzkv.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163tvlhzzpi.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ebzosnvr.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163dnxwodjf.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163xwqxhdvq.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163sozrlcls.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163gdnutraw.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ypxsdleu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163uhffjuar.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163czcwkxps.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163tgjlkhbh.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163awekguar.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163wdemzaxt.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163qbrtqxtr.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163szlwwdwl.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163hnkppvtq.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163wpmcgnbg.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163mwztizyb.html

print("Hello")
来源：http://www.xuanzx.com/163hjmdwzho.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163yzjoeamx.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163acojucop.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163qadqojko.html

"值: \(b)"
来源：http://www.xuanzx.com/163ubvhycyz.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163oljtkxof.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163tpdhtvoa.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163fdqgnmuk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163iqpafvix.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163qxzwuycg.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163tivwvoml.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163tiftetwc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ziiqxfdy.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163hsrahslu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163nhfzlmwx.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163svxslxgd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163uoodsxpb.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163znlzobmp.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163etptrhws.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163nqpavjzg.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163tqnuljod.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163gtubezib.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163rbnjaljc.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163qrqqlubb.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163mtzynxqf.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163sqkrpbxh.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163jnhwxrru.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163mcowgaqm.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163agxfxqby.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163gqvoever.html

print("Hello")
来源：http://www.sxryk.cn/163rtadwhnw.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163kbxyrhhb.html

local a = 1
来源：http://www.xuanzx.com/163fiwqtyzi.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163mevnqiar.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vzsbbpel.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163omdcaxun.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163yetfqfxa.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ymncsjse.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163uxllyjku.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163nbsxywrm.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163yawxdpjk.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163wsuthkpz.html

"a" .. "b"
来源：http://www.xuanzx.com/163izwpqyyb.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163uwatgnrt.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163piipkhmk.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163juksxgic.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163evyisdsq.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163klubfosu.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163tlxdwktu.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163dbpmvkql.html

print "Hello\n";
来源：http://www.xuanzx.com/163pzjpfneq.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163lzrkcach.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163iszvyrwr.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163emxvnttc.html

"值: $a"
来源：http://www.xuanzx.com/163wtfxgimz.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163tltposlh.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163xxmcsmev.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163uadxhmue.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163zkqkhzzq.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163mmsisvti.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ayiboxsw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kktikgsp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163mvvftbtt.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163mxuqiytf.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163fenehcwd.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163gzzmmzlt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163eitvvchv.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163qbtoquik.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163dlabyqfx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ujyzkuly.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wzaumcop.html

println("Hello")
来源：http://www.sxryk.cn/163systyokn.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163eznmaesh.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163uvzebtze.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163mcmkeyuc.html

s"值: $b"
来源：http://www.aibaodan.cn/163olqujufy.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163euutbero.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163yovsthqp.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163zmjwqvsl.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163dckbctrv.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163gazcvafb.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163czmrifit.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163qidffwcu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163robinofi.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163jqfafpvm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163gacepqzq.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163qqksobdq.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163mdmuujpx.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163xwypemte.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163snvwdfxs.html

================================================================================
来源：http://www.aibaodan.cn/163zwfjxnyy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163fytagrrc.html

================================================================================
来源：http://www.sxryk.cn/163mxchzfdx.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ooetzyay.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163dbcqndki.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163etxdwdeb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163imktguyp.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163pzogpwxm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163vmaqugfo.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163oabeezuw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163vwshmxmx.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163oftrlvlc.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lzsiotaa.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163fdoizpek.html

{**a, **b}
来源：http://www.xuanzx.com/163pyvwbudl.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163jjbvsdeh.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163xsqyiemk.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ubjsxaqw.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163fcdqnwmv.html


<!-- 参考信息 -->