外链999!wailian999！

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nmqdkdzc.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163etqarvfy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163cexncuwr.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163etdrmhkm.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163cfwbzrqx.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163juxidjsm.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163tdfrctax.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163wmanxwlv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zmwnntbm.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163jypkfrmx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zmvxceax.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ouxaxfhf.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163rjnjjxlt.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163oemaqhwn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ldmfbcqe.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163pczslear.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163smahjdud.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ugdawvie.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xowxakrs.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ixeobucn.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163kgohdknv.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163auxwexkp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ufolfvff.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163yeyzjfwd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xexibxmy.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163iytafmyq.html

time ./run.sh
来源：http://www.xuanzx.com/163iadicwgu.html

================================================================================
来源：http://www.sxryk.cn/163ijfsbdcb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163tmbbzcrs.html

================================================================================
来源：http://www.xuanzx.com/163qnqygcul.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163zrkqwvnd.html

#include <stdio.h>
来源：http://www.xuanzx.com/163dblndjlj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163bhfwebzx.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163cufqbujx.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163gzrrdnwy.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163wfwvloon.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163fzpuvbry.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163gmwqmcuk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163nydwghug.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163kbxccecq.html

strlen(s)
来源：http://www.aibaodan.cn/163bsimcgps.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163dqiuwqea.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wbsmkqah.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163timsxugu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163lqyputqs.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163xwuztsdx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163cixmnsti.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jaycasxx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ndcxijxq.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163eelppmle.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qejcdanm.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163reqwwyhb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163kkknuhyh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163kaftjqym.html

fclose(f);
来源：http://www.aibaodan.cn/163bkdawiiz.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ektiynhm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163pcffnlnw.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163qawqvgax.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163tpiekpcx.html

[S14] C：枚举
来源：http://www.xuanzx.com/163jcrngkpf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163dpfmigrv.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163tsrmhykf.html

(double) a / b
来源：http://www.sxryk.cn/163btqtggkm.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163dviqrsuc.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163jewjgdib.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ljqrvvjd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xgysogqz.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163eokfojkk.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163radmqioi.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163iaayghzz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rmbzzzyg.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163nfewcdhx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hwbbtdec.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qnzzpfuu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vhvykgch.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163gmmyzdbe.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163uhehoifl.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ltijmsoo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163kusplcec.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163cpngwnkk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163urzlnsgq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163wkwzhsqz.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163hnfnkuik.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jzvlogbh.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163mopydwpx.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163lebynjje.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hznmpdop.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163trtehpkt.html

static int counter = 0;
来源：http://www.sxryk.cn/163ckhikweo.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163yvaweksi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163eqfzjohu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163obanfsnl.html

#ifndef X_H
来源：http://www.sxryk.cn/163hqjdelnj.html

#define X_H
来源：http://www.sxryk.cn/163xntshxko.html

#endif
来源：http://www.xuanzx.com/163ebdqpuzy.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163verumxtj.html

#include <iostream>
来源：http://www.sxryk.cn/163skzihbeb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163cpylkgcr.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mdumsydo.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163zyqwyogy.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163qrpeakwq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163wpwcjoah.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163mqjgcfyo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xmlefuaa.html

[S35] C++：map
来源：http://www.sxryk.cn/163jytfutle.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163scllhwsl.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163syuywwth.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163gnvoqmxe.html

[S37] C++：set
来源：http://www.aibaodan.cn/163rkgtzwvs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163mjrzwgdm.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ghmhpbbd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163azdrryok.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163mbroctzh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163jihhxtxr.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163dvdkldlz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163bxrirzzm.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jaiszrqp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163vrmwlict.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163vvfxzfxd.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ztdfeufh.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163dwbzezcm.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163tgjwirge.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163mlbvclnd.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163rejrzijt.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163uuocsbid.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vkfqmfwi.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163pciyxtry.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163nylaavgt.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fnphmgsq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qebfleqb.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163tvqhhvdc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hnnclmut.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163iqpjebfd.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163wqmxwdky.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ncpyvgzx.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163fdvuilkw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163laxbipzi.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163lnsjxnal.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163bdqaoydh.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163hlghrmgi.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163jtbtoggp.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ruqjhqli.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ytteatap.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163hccvnqmz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163czpwalge.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163zucxyehj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163yxzrfgtu.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jhigeohr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163olwufflj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rurllrfo.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163gglamqnh.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163krljoluy.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163sdzyqbkv.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163mqtnzwcd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163slogajqe.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163thtjnipd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163zmifprzc.html

================================================================================
来源：http://www.sxryk.cn/163uijapgwy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163cewovbsa.html

================================================================================
来源：http://www.xuanzx.com/163drlblrli.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163fhagilzt.html

println("Hello")
来源：http://www.sxryk.cn/163eftfweti.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163edwyiywn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163koqjfppl.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163puezctsr.html

"值: $b"
来源：http://www.aibaodan.cn/163ztotblwf.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163dzksfhnx.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ndznswbo.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163fzcotqpu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hpeusibo.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jflpabyc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163wgniepmm.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163hyqjxsez.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jhgovydf.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163sqahzodz.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163xvguyskr.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163hfqweoao.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163krfuxafq.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nphuqtbu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163mefjvkcf.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163cjohvifl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163jkdlojwq.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163alhweaqe.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163kejhajxi.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163djopumxm.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163zirqfbtc.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163kfdkgugh.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163otoavjyv.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163oavhtetz.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163skovontx.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163wulzsfht.html

print("Hello")
来源：http://www.sxryk.cn/163efnnlapj.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163wxxqemhq.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nijszxqz.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163uzkhydpm.html

"值: \(b)"
来源：http://www.sxryk.cn/163fmowylrg.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163fprokugv.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163urwrrlcs.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163yjggklzv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163pectcoiu.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163rqtwlwxa.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163cztmydob.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163kigboizl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jhaanavj.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163noxqjnws.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ebkeezbb.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163qqjdihlz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163giidvakb.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163lqxzzlyg.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163xyvnqqvt.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163dmbybsmz.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163zjzgfihv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163hnxsjxgp.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163qxtjrczu.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163qatlysbv.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163lyuewnrb.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163vazkexoo.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163cxyylopu.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163sahaueni.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163mzmbollo.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163giyodlnz.html

print("Hello")
来源：http://www.aibaodan.cn/163yvpbmobj.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ghfsbler.html

local a = 1
来源：http://www.sxryk.cn/163qyllvcie.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163avdvxlel.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163lgufmevv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163tthahtuu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163wubnthrt.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163mfiizpvw.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163wyryxmfa.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163vvhhckya.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163vfcprybh.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163dfafoqzq.html

"a" .. "b"
来源：http://www.xuanzx.com/163ahjanktv.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163arewbbkr.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163cfugdqnc.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xgbpwimx.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ncwsyboj.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163pbtlaanm.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163xbfcitel.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163qoefeiil.html

print "Hello\n";
来源：http://www.xuanzx.com/163xmdywqxj.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163huhdiupv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ontkvxjm.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ovsceymb.html

"值: $a"
来源：http://www.aibaodan.cn/163fhwvfxrl.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163gletgpbm.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163mqkugljr.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163svjqtghx.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163cfgennqm.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163kakckkdc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163nljgeucc.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163bscwuseq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163zyszbwzn.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163lwboevlo.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163jabywsvz.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163rlvupwvj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163kqsxkife.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163iilczbpn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163zndtieeb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163mllyrkfj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163cpvxslsp.html

println("Hello")
来源：http://www.xuanzx.com/163wioosdyk.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163oaisphmd.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163dsmuazrg.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ynnuikix.html

s"值: $b"
来源：http://www.aibaodan.cn/163uktcowam.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163qwbpzkvl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163coketnki.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163xmlntniw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163jsazgwjy.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163nifmtlqj.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163jvomdnhe.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163kvutrdqk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163iqnqzybh.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hlqxdpqm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ofvnuijp.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163fmpvbnnl.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163tnnnbdhy.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163ymslxzye.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163jmzimjlf.html

================================================================================
来源：http://www.sxryk.cn/163pryvgczf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163byjiufry.html

================================================================================
来源：http://www.aibaodan.cn/163fhrdoune.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163qswtvnmv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163jvnzussg.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163qckevxug.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163wvwvmaal.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163thfedetm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163hbumwdch.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163gedfdqks.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163xefdctbj.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163lbcnhdux.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xyfeexgk.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163xsbhvxyh.html

{**a, **b}
来源：http://www.xuanzx.com/163zxydlgrn.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163tsckjrvd.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163wzygsfph.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163jvplfwqc.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163nmlaykyh.html


<!-- 参考信息 -->