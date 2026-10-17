外链999!wailian999！

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163rmmhhamd.html

[R66] 定时任务
来源：http://www.xuanzx.com/163tdnmvhfi.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163vcihxrpi.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163czczwqxn.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163kujbdndp.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ausysrxj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163trzqskny.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163welyrboq.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163uckowuid.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163dknajqlo.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ukviejiz.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ufqoraby.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jzoqofso.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xmizquwe.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163mhwqkbjm.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zpagebab.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163iyicgzlh.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163iysbafzd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163dzlthnfd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163gwgheurl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163jfgeuldf.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163vpkuknry.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rujvjiij.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163fgcdkqzf.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163sdrvbbso.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163tzdjevar.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fcyjhvbu.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163njnntwqi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ojlgizga.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wemxkwro.html

time ./run.sh
来源：http://www.xuanzx.com/163npkpjslk.html

================================================================================
来源：http://www.xuanzx.com/163nfagbiup.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163pgugzjco.html

================================================================================
来源：http://www.xuanzx.com/163yywzwfeh.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163aowgqunl.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163kiffwxui.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dooiirip.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xanhpexb.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163vrapiayj.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163yqlvjeku.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163tgfkhqdk.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163pxrpftdh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163prokvwrn.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163jgxnpstq.html

strlen(s)
来源：http://www.xuanzx.com/163mumeehvt.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163bwgqmrgk.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163pitgzcwh.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qquehfft.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ryrofflw.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163grdvzwjo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163asmmworp.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163uldhjeuy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163owoqttiv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163hlbltwwg.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ebuzgpwn.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163xwlcfysn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163xiontrxq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163fjxsycya.html

fclose(f);
来源：http://www.aibaodan.cn/163uojjwawl.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ppsjslnm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163dwgmwvzx.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163lzxwvlrt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163yivabwst.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163zxykfxpd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163tiaouwok.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163xzxlgmmn.html

(double) a / b
来源：http://www.xuanzx.com/163tudhulpc.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163mtuzcstt.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163cstpujye.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163gyjmofzd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163adgjglyv.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ssxyejtr.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163eyxqsraq.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ktrgzahv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gjztpzro.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163hujmbdcn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kcizgorw.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163emupaijn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ybynpmdc.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163actmnwhf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163iueiomdt.html

[S23] C：随机数
来源：http://www.sxryk.cn/163awsjdzpu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163kbxitoaa.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mggzaqeh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163basmplzr.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163mbswsivf.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163dgisrazl.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163dahiqdbd.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163tsenowlz.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163bmnwshls.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dsjhjfoh.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163xxtvmqcy.html

static int counter = 0;
来源：http://www.xuanzx.com/163eusvxnpr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163exxhevdf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163myaqqkwv.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163pjtadorm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163vbeubaan.html

#define X_H
来源：http://www.sxryk.cn/163uzsqmdvn.html

#endif
来源：http://www.sxryk.cn/163jherszvo.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163bncaweqw.html

#include <iostream>
来源：http://www.aibaodan.cn/163hoehyeof.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163uegmgjgo.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163fopzydlh.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163nkywzyrj.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163zjwflhmx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163twqqlsxu.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163sgqufwne.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163iquzqizb.html

[S35] C++：map
来源：http://www.aibaodan.cn/163hjlcbyax.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mqjwszgu.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163tzethvfi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163blrunehl.html

[S37] C++：set
来源：http://www.xuanzx.com/163qgdxczvb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163wmanrnwu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163mrayjpon.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qdzglogx.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163vkorinyv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163jwlsstvy.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163zyeyarvb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163sozqxqkc.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163nhyvqnog.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163qcntyyze.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163eqkichfu.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163jdfklyly.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163nallzncd.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163txkirgim.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163yyzrsbrl.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163yeykbzvf.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hrtutpjc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163xmqnsjqp.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163jntubttt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ulhvzbvx.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fnivokyq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163tihljwxm.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163hswllhjv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163pmybghqj.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163vuodxgxn.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163hnrauogi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ntdbcqpg.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163vdgcnylw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163kxlzmpcf.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qkzoddia.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163bolevtcp.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pvhypjva.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163cvgeoggg.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163mvuczimu.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163gqhoddsa.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163mdxzxhvu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163yvbbamrv.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163qlcivfkp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ovchtsnu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ejqigzan.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163cadcffhq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163auhttubx.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163clolihlx.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ztgiuyjl.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163xjruffnz.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163fcoiaguq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163lmzkhkjn.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163tkayjkij.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163wttyoxka.html

================================================================================
来源：http://www.xuanzx.com/163lkrbisqd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163sepmjrnu.html

================================================================================
来源：http://www.aibaodan.cn/163wfcmdzvy.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zvaxgxyj.html

println("Hello")
来源：http://www.sxryk.cn/163blfszefn.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163kekptllz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ukmrtphm.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zvnvvcrs.html

"值: $b"
来源：http://www.aibaodan.cn/163gtspgixt.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163egvnzhst.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163onubjanb.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163lnvrgxgm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163iwaurtfm.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163wsktuwra.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vxdgyvha.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163xmiagjyz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163weeddxyf.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163nsscjqug.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163jytptymk.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ldoykwsn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163zocwvoun.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163cqtkardz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163npolnwnn.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163fotymizx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163myvtrzpi.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xbwyzixv.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163rwuytkea.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163xiswtdbp.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163rzqlphyg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163cktzknwv.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163slcpoofw.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163xwvseiwo.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163sxzfayxj.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163cyqztbnd.html

print("Hello")
来源：http://www.sxryk.cn/163wyuuuyqy.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163dyfclipv.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nrxwqetq.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163bqlgvwpn.html

"值: \(b)"
来源：http://www.aibaodan.cn/163iqqdvaiv.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163codjaweu.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163vdduguqa.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163mxhshdcc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163lixotibz.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163vepjkpyz.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163xwixvcks.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163fkrmkebc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jzfzicfu.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ykasdqii.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163xwbiilyo.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163xiwoaxjj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163beevorwe.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163zattpagv.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163xkrfplqn.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163rufbvzog.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163rqksvljs.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163zazzhopu.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163miqfopff.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163npjnzgfd.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163vgdiagbi.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163eipodehd.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163agkddjig.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163bipfwnwb.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163vdgkbmsz.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163lddtplmn.html

print("Hello")
来源：http://www.sxryk.cn/163lokqhvej.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163mjeziibn.html

local a = 1
来源：http://www.sxryk.cn/163zjefujld.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163djbjcrwj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163lfvuvdlp.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163blovjpnp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163atlkknns.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163szsnwctm.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163gsjqqdvw.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163hjlzoogs.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163fxwuttay.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163fynmmpjt.html

"a" .. "b"
来源：http://www.sxryk.cn/163bjwmbmvf.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163gwufivjs.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qtqfugkf.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163zzzswzyg.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163quhzflsv.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163filukcmt.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163hntecxnt.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ofrorxyx.html

print "Hello\n";
来源：http://www.aibaodan.cn/163uqhqxsdq.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ioofdkod.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163htyygnnm.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163emibdtmh.html

"值: $a"
来源：http://www.xuanzx.com/163igyhrvso.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163xfkssonb.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ydnyliva.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163nrsipoxd.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163oqgfqwtv.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163vqeeraoj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163udicaage.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163yygtsxad.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163mhgktckp.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163fafffvut.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163xprunjaj.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163zmqrknab.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ydzblult.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163rxikncnq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163bfpbvomv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163hgjjbsjz.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163uddwizdh.html

println("Hello")
来源：http://www.aibaodan.cn/163ssyzjhyh.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163yftfirjc.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163khkrfjph.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163oajgqovc.html

s"值: $b"
来源：http://www.aibaodan.cn/163jzpelimd.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163xqymvtbp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163vvgzptfr.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163muctsoyi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163aeqawahg.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163inibmcpc.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wspifdoo.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163pjubkxgo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163jhujppri.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163pqczjqrw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163kfotzetz.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163vnjjecyy.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163jhtsfzsk.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163jwzkgtzs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163gcfaoirx.html

================================================================================
来源：http://www.xuanzx.com/163zfdvriuh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hwctppum.html

================================================================================
来源：http://www.xuanzx.com/163irkfuwyk.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163udcryadv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163lhqnbdqc.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163tabecccn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163uhkzlirl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163smzjpqjo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163zzixkcrs.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ttsrdbei.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163jszbgycr.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163xybbuohx.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163exldiyga.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ncfojlew.html

{**a, **b}
来源：http://www.aibaodan.cn/163avfcralk.html


<!-- 参考信息 -->