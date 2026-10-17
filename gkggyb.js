外链999!wailian999！

openssl rand -hex 16
来源：http://www.sxryk.cn/163pkiaqntg.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163iwyslwfe.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zxsivhil.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zgvarrlc.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ypwnpeng.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163nftbpqcb.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163bmoinwyd.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163syrsheld.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163cudnemwk.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163xqcqeyfk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zrfwjesx.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163pybpeimy.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163rbozfnbf.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163jtjigajd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163fpykcrbe.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163tdxbjdyn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163reytctkq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163gwqhreyn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bczsqjfv.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ttyqotxv.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163pkrlpinp.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163eodpwgcy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163rimdkomz.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xavquwvw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163zdtvvycw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163hiozuksq.html

time ./run.sh
来源：http://www.sxryk.cn/163uhevzjam.html

================================================================================
来源：http://www.xuanzx.com/163wctnsipg.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163sqfcmgzj.html

================================================================================
来源：http://www.sxryk.cn/163ilpjfqew.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lmixofia.html

#include <stdio.h>
来源：http://www.xuanzx.com/163obbnhzfg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163swurljuc.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163fpujblvl.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163vefiazkg.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ffewnwru.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163kqykpbeh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163gqgjxlkc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rehaqrvm.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163amgawtck.html

strlen(s)
来源：http://www.sxryk.cn/163gdhcklyy.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163lzcjlpnb.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163vukdpsnr.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jwqkzvpp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ukbwifja.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163xlbadplt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163chmhztgn.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163lkezsrsi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163dhmiuvki.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163hpnnlxiy.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163vfralccu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163kwottpgq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163mswxtntp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163uxdotcwp.html

fclose(f);
来源：http://www.sxryk.cn/163jffiyymq.html

[S12] C：写文件
来源：http://www.xuanzx.com/163zgkizdhs.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163hljuvkpm.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qmtzylnv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163luaxiqbm.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163oxatgtxg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163vtnyedzg.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163thfctthg.html

(double) a / b
来源：http://www.xuanzx.com/163yfuqukqc.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163wrqfubmi.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163axfsnury.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163skiblupq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163snujuytn.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163dckgbulc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163fbzmnidw.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ghcqenew.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tvlfmxhw.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163uapdyssb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dnhddutr.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163nfcosxqi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ngcokesu.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163lqcrtivj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163tghceseo.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qewdxeeh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ugjnybuw.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163utlcszrp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163yvazqycr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163skwwxpea.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163cqhgjgdu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163uqmkylwq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wkmpbjsr.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163pastepzh.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163nhcpbglm.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163jfrhubms.html

static int counter = 0;
来源：http://www.aibaodan.cn/163uwapnxrp.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163dtppwdqn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163kwnjpilm.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163jkenyxwt.html

#ifndef X_H
来源：http://www.aibaodan.cn/163srzuhowf.html

#define X_H
来源：http://www.aibaodan.cn/163idgpkxgw.html

#endif
来源：http://www.sxryk.cn/163kguaoqac.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163gjscbvic.html

#include <iostream>
来源：http://www.xuanzx.com/163daoyxvui.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163zvyadmlo.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163evlsgdlb.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163nnivzrkt.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163guoqezbw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163glvxswnq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163llcaftyk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163lcuuvtai.html

[S35] C++：map
来源：http://www.xuanzx.com/163opeowyjl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wgeudprc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163cobgklyu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dylttsbf.html

[S37] C++：set
来源：http://www.sxryk.cn/163fhwmalef.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163jwrcbqyi.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xgzcttmn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qlxjtlwr.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163adiafjap.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163xcjkikpz.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163rrcszrag.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163pmelguzn.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163kborrhac.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ffsctdbl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163krdgwelo.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163fodxnody.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163qgkwnbqn.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zwcitirj.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hdscvucj.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ffjrnreb.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163lyalbfee.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163cjeeizly.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163msxskmbj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163hgltmyzf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163vhnxecnz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qnibzbem.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vovovjfu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163mivkulng.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163scsqtrbn.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163swhjyplj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163lsuznjvp.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gudkyhyu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ancbxkor.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163pizqfqsm.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163hndjtsfh.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ezygkjny.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163oampzdxd.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163eeabdybf.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163trhudhzy.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163fxrytwrw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jcytfmkd.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gwiisfiu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163anchbnos.html

[S56] C++：optional
来源：http://www.sxryk.cn/163auorclek.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163bwfwouxp.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163bchlktmd.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ttirnssj.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163dqyljjim.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163gctwxvoc.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163zjhyowxc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163tdatjvpg.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ycjwjjhb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ggkdhztb.html

================================================================================
来源：http://www.xuanzx.com/163fjfjjlna.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163grylfovi.html

================================================================================
来源：http://www.xuanzx.com/163hgsmjcat.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163poslgtup.html

println("Hello")
来源：http://www.xuanzx.com/163weyjtavp.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qubrbdpk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163bstwzajk.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ssddswsz.html

"值: $b"
来源：http://www.xuanzx.com/163rgtbffag.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163aksttiyz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163lmlhjcpi.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mfwywhhv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163eoccrgee.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163dsgegpfp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vnojkntc.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ryoudyhu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163mvbnxlqa.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163tpsboeyo.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163qvaiziuf.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163itgpknmm.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163jkyjrkpv.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163zqucoqqv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163mxbrrppx.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163iivryile.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163fpmngslr.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163klggyacm.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ckzxpgsl.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163rhhvewny.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163wzyqiraj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163gztxrxdr.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163kcvfcakj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163mpojoluh.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163kletzegs.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163adbpiusq.html

print("Hello")
来源：http://www.xuanzx.com/163fpziqmpf.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163jdnzjthf.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kwphbyrh.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163airleqyz.html

"值: \(b)"
来源：http://www.xuanzx.com/163upftcikr.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kxnlexmr.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163qiyrzxue.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163nbqckhcz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163xdpxmgdv.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ssrxwiyr.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xgzrlwvu.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163qwnxogis.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163hahnfulj.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163hahshppi.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163xrqyfnkc.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wlfjdhjp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163adlsxpui.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163gmrwbtaa.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163vxirgoyw.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163hhxsijwk.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163xsgqhipi.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163rbxvgydv.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163hvbgbpdl.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163vwefnuqv.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163kscbvjbu.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163opbuxrzq.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163wvjmsjzf.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163mmikuqvi.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163zfsdigri.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163axeujcnh.html

print("Hello")
来源：http://www.aibaodan.cn/163qoesepvv.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163mupmffpj.html

local a = 1
来源：http://www.sxryk.cn/163fkafvvpz.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163sqfcftll.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163elmyyqlr.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163egquqvlg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163tpitjbhw.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163kkvigiiw.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163edvnvkms.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163xoqwawfp.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163qpmtnkbo.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163yrjrbsgj.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ojpqpmfv.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163voppqhgb.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qqfqtkod.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qawnwgkh.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163vhmxyymu.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163lpfrgmlu.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163xwcdclmn.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163llfalmxn.html

print "Hello\n";
来源：http://www.aibaodan.cn/163vqkthqpe.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163moftuawd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163snlhdqsk.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163vktyliqa.html

"值: $a"
来源：http://www.xuanzx.com/163ujzzrtmr.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163wxiubums.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163wryvgqbe.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163smghrimw.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163xiqpljtp.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163hkbqcpei.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163fbpxekyt.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163vslttvuc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163lsmiaibi.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163povsanej.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163dzjiwnma.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163qyrrshqt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163accjbijo.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163zltybppe.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163sclmimdg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163pobbeuza.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163znajsvvk.html

println("Hello")
来源：http://www.aibaodan.cn/163jkweptoa.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163vwpzmzkq.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163iveedidc.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163gaqqysrp.html

s"值: $b"
来源：http://www.aibaodan.cn/163eqtigghr.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163jvbmcjji.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ecdwmxxl.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163iorovbti.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163rkmqtdiy.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163vvnteeou.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dppuwalc.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163sigpjumx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163olmyxiad.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163jkhnevgo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163vjcwpijl.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163spfzrpzm.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163optqfvst.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163yvxfqihv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163odslvarr.html

================================================================================
来源：http://www.sxryk.cn/163krinerin.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xefwgiwy.html

================================================================================
来源：http://www.sxryk.cn/163pefcutth.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ngllcqbt.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163adctokqi.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163xnhaoqrd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163dspwisgv.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163zblbxywy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163rmjurkca.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163zblqmxrq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163gsdbetab.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163obnlgkwk.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163osyoxfdu.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163kxqpwgjh.html

{**a, **b}
来源：http://www.xuanzx.com/163pizxfekf.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163gtbbruqj.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163gucvhvgw.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163rzgmzite.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163gykaxpkw.html


<!-- 参考信息 -->