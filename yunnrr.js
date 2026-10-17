外链999!wailian999！

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163gsgmqjfp.html

[R64] 结束进程
来源：http://www.xuanzx.com/163vsymjfif.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163szabgarl.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163slacuxob.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163efsbbihb.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163tpljfvfl.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163enguiwhi.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163glchlxxu.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163fphcnfpo.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ngodwymd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163hudhzhsi.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163kakjofsr.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163vipvmegj.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163jewbgekw.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163oqtfsykk.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163nddfyjxf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163pbvxfynn.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163hdclmhvo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dfuupouh.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163mtlfqmqg.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163felployy.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163uzczerbh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163wopzrdsz.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163gfvziezm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163zlitrjne.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163nlhnhjye.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vtedjzjq.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163higoapos.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163jhjimwfu.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163cyoabbif.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163pjhfbrcp.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ulntcjkb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163odhjnegg.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163rvoiljyl.html

time ./run.sh
来源：http://www.xuanzx.com/163ezfiibzr.html

================================================================================
来源：http://www.sxryk.cn/163josoylfo.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tlqeckvk.html

================================================================================
来源：http://www.sxryk.cn/163uhmtgzwt.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163yrpqmsta.html

#include <stdio.h>
来源：http://www.xuanzx.com/163nhtqgijz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163guhswntn.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163tmnuuskz.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hafwthcm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163zxodqwwp.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163dtjbsvsh.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gpawdnma.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163xhbenqxf.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163sceldogu.html

strlen(s)
来源：http://www.aibaodan.cn/163uytpxgjn.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163pzgowjax.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163aspexdvv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qgntcrpr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163zxzuxmjv.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ezpdtrtp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163pzyqqccb.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ccebybxk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zusedrzr.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163hlcdszcu.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163wdzusvjw.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163trzxszis.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163najpwmqs.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163uhvrlxvv.html

fclose(f);
来源：http://www.sxryk.cn/163kjetpegx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hcqnatgg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163krlgujzw.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163oxmbophf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163vxhetdxo.html

[S14] C：枚举
来源：http://www.sxryk.cn/163tgxajxno.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163htjssmqz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163vxuwhhse.html

(double) a / b
来源：http://www.sxryk.cn/163wgwacxzz.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163rzygtgft.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163qlftnkor.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163fogtpjzz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kfzorrtj.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ttvacnbs.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163pnpmtvyg.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163yavxtvin.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tjckjqaw.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ckkfhtuw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163swfvorgg.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163xmndgxqo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163cxuomgyl.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163fnafhjfj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163miimzwbb.html

[S23] C：随机数
来源：http://www.sxryk.cn/163whnadhea.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163bgvlnlah.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163cyhcvqfj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163fcxjsmcn.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163uwvmtrtx.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163deyjorpg.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163wdyqmqfm.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163mladiqdr.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163qjjfzxjl.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163kvnelxga.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zixsbbin.html

static int counter = 0;
来源：http://www.xuanzx.com/163odszzsbe.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163cmurpgxg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163pnxosmpv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163xwtgnlga.html

#ifndef X_H
来源：http://www.aibaodan.cn/163kwtmvqey.html

#define X_H
来源：http://www.sxryk.cn/163ceptpqit.html

#endif
来源：http://www.sxryk.cn/163ztbndqwj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163temmsxdu.html

#include <iostream>
来源：http://www.sxryk.cn/163zqxqtmwj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163noxjsmkp.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163xkinpqhn.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163piszqjhb.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163zrgvmuea.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163dydzqpav.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hetjwtim.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163lmrbbphs.html

[S35] C++：map
来源：http://www.xuanzx.com/163odjzrgwg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hyacikfg.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ddgoorzn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jrzzorkw.html

[S37] C++：set
来源：http://www.sxryk.cn/163ryzsptbm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163cfboeqtp.html

[S38] C++：排序
来源：http://www.xuanzx.com/163orbvtuqz.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163uuljywpz.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163mkldllhu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163csbcjupc.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163fbnlqxxi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ammanzwx.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163yvzfrycr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163mtcsgvot.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xnwuxazo.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163nemghdje.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163cfttookm.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163cgmvpgvj.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163tqxsrffu.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163fwuvcvco.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163twidrovu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163gzgkzmzr.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ecfjyvhi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163dcvrmitf.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163grxszuzo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163oeahnxjv.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163mjaebchr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163yvrguczi.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163hjonbtof.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163digvclta.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163bomorqhd.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163bvnshwul.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163osplkbhs.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163cjotells.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163hqgyxqpy.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ycphznaa.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163qmgsdpzv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163xsausiex.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vovdnqej.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163nryioerq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qbhwziwp.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163mjfylhbq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163dahksniz.html

[S56] C++：optional
来源：http://www.sxryk.cn/163bzkolxsh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163jquwyxcg.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163arfohkle.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163xvcqlgfk.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163uupagvfj.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163urxrysbn.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163dbwctqoj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163iwdaixnk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163nsupivpv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ooacamao.html

================================================================================
来源：http://www.xuanzx.com/163mcvpefoa.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163foyvpkst.html

================================================================================
来源：http://www.aibaodan.cn/163qlyrnoag.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163rufzfydz.html

println("Hello")
来源：http://www.aibaodan.cn/163jvbzfmkj.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ixsewuuv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163gnihmyyq.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163osdksmef.html

"值: $b"
来源：http://www.xuanzx.com/163npbovowb.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163tbeanamp.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qqpiriae.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jkuqcckj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163unbdnrjq.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163xyudxihy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163lefqgobs.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ubfrprkc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163fggjpyyt.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163cyuobbki.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kjccjxgp.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163khfcitor.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163vqwbnzci.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163tlbxovso.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163srmdmguz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163wguqfrsz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163iwkschwx.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163tdlpqlsf.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163sedhtnzg.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xwayhqcq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163dcbflegn.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163hdohslpi.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163gbuewznj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163jbnznsyo.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163gexyxjnm.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163vctfumlc.html

print("Hello")
来源：http://www.xuanzx.com/163cwoiqybn.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163lderjbyi.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163adpzxxkk.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163vubbzknd.html

"值: \(b)"
来源：http://www.xuanzx.com/163mzdmqxlo.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163qpyheqpd.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163hqrzvhpv.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163dtjsares.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163eaapgpmk.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163upygyacw.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163etkhmdog.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163jjbciksk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163otfelnqo.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163dvmonqbk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163yoqiizyv.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163acijnsif.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163lxwatzdp.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163oczxsizg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163fjsvunka.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163cmhplsaz.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163plwpxvvu.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163fqmmlnwf.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163haohdhdu.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163hrzjknab.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163jvfrujtx.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ctmvctrb.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163qulqudwe.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163kaztqchd.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163hvpbcsfc.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163qfqcvewt.html

print("Hello")
来源：http://www.xuanzx.com/163bypgqeum.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163txulscop.html

local a = 1
来源：http://www.aibaodan.cn/163yugtgqta.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163kirpolnj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163qkzkqixq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163qmpmjrng.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ketsnxbn.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163lnobtzfn.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163mgbsjugg.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163fvudcncu.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163yzkvocyq.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ayrszjpw.html

"a" .. "b"
来源：http://www.xuanzx.com/163qxqergmn.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163uphpqigd.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163efnhwsgf.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163yhblyswv.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163rqzwmwhi.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163xmlgrkaf.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163rvuhsnon.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163smljeblp.html

print "Hello\n";
来源：http://www.xuanzx.com/163fvnooiuw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163lhtwwefs.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163fdjmzffk.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163mperidto.html

"值: $a"
来源：http://www.sxryk.cn/163kqycpdrw.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163fgdlprky.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163jahqklfs.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163cajmbkga.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163vcgzpnnt.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ffnqqizv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163outpdrmn.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163hbrlbngr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163orlmgloe.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163zmqlxjvk.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163sllmcvez.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163fmrfbzdy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163sqtfswiy.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163edabnchq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163glsfzlrj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163encaolmo.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163qsoftelu.html

println("Hello")
来源：http://www.xuanzx.com/163djyldsfj.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163kpkxaarh.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163xtdxgujo.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163oktzimhw.html

s"值: $b"
来源：http://www.sxryk.cn/163fmctpmmd.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163abtvzsmp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ebthogzi.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163atskbrul.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163bhyqaxbg.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163xbnoawll.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163xjctpvkm.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163nldzjapr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163qiubgfvj.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163eevxezkw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163zbkahjza.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vttrrqsw.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163fhojophp.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163bbpbghtx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163bmdznfuu.html

================================================================================
来源：http://www.xuanzx.com/163hpdrtsco.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bthtidwb.html

================================================================================
来源：http://www.xuanzx.com/163tnxayinm.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163mstcoabf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163hdibyhle.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ccmtyduf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163yuzlrbzs.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163sqfszkyr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163izzxloat.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ntgfrujx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163tryxgwst.html


<!-- 参考信息 -->