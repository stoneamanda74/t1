外链999!wailian999！

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163nqrufhsb.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163twnhegpd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163mpkhwfbf.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ltpxbuee.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163qrfimhgo.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jueqebwg.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163yrsvnigi.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163qwxmidyb.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163lrykutip.html

[R58] 下载文件
来源：http://www.xuanzx.com/163fvovocqk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163cklzmram.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163adwqktcs.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163yvmbllik.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163rxrrqmiw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163uesggrbu.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ymavxpgb.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163eleluhlo.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tjudiwjs.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tthryogf.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163tkulkosn.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163hosxuzza.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163gsbsncgg.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ubapdvor.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163kkmwkndo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163cisgblsv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163cjyjwbxr.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163dgwcozba.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163snyrlwbp.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163pyftvizj.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163fwcjdhpj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163amffbypn.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163dccfrbro.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163qmxlmfxu.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163cgqvbuut.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ncmntsug.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163umgeafwp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jrwnyywb.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163rwlnimkp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163wxcxjagd.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163vwpyvvlm.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163agptdsii.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ujpzstwm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163wchnopih.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163kwwehtmt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163tgsgecax.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lbuqwugo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ytxyvyvt.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163fvlcxvyk.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163rjmnmmwk.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163tuexgcsy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163tjovpqrs.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163qiaeozcj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ahbywinw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163eqqjxgyx.html

time ./run.sh
来源：http://www.aibaodan.cn/163looqipjh.html

================================================================================
来源：http://www.sxryk.cn/163uhwwbzbk.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hmyihfoe.html

================================================================================
来源：http://www.xuanzx.com/163dcmqzxga.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163hpfbufdw.html

#include <stdio.h>
来源：http://www.sxryk.cn/163oysbdvrs.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163rpsplezh.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163esessopl.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163kbpvixzn.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hzfthgcg.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vmlawzjc.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163sjqgpcle.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163dskhjqtv.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163bavmfbhm.html

strlen(s)
来源：http://www.xuanzx.com/163yorpgjyq.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163lhojmjgl.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163barkveqe.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jtzpokmf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163mektcwgz.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163upsrhwlq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163fqwwyxyc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rkzbhitt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163yjcomrcd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163zpouvmkg.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163gjxzvowm.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163fzfwogmw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163tofatgxk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163mjviaweh.html

fclose(f);
来源：http://www.xuanzx.com/163osyltqty.html

[S12] C：写文件
来源：http://www.sxryk.cn/163panzyvys.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163upykdiyz.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163arwzxalp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163zeqqheva.html

[S14] C：枚举
来源：http://www.xuanzx.com/163hmtjxsvu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ykjoudmk.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163crlxukrg.html

(double) a / b
来源：http://www.xuanzx.com/163chxclcke.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163zbcwewgx.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163gtlcsgkx.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163xdcoeucu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163bncipfga.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163jvdrnajr.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163bweeiugl.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163fyrzoszg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nzxqccfd.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163itrbwlbc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163oaobkvij.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163wlwzamsk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163phlarrve.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163hbxeppvq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163iqrdjnkz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163pihjvfec.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163gxzrdiqe.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hbtmrref.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163tyvplhxr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163jekxiimp.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163sjktgydn.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163dpxkbzir.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163bstrjons.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163qycafgbz.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163brexkfmh.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163srhkenbo.html

static int counter = 0;
来源：http://www.aibaodan.cn/163xkcgclge.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163svnbcmkh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163yqekqahz.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lxtjfvhk.html

#ifndef X_H
来源：http://www.aibaodan.cn/163kmgxkzwt.html

#define X_H
来源：http://www.aibaodan.cn/163jqxszckm.html

#endif
来源：http://www.sxryk.cn/163khotvtlc.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163etxghmfi.html

#include <iostream>
来源：http://www.xuanzx.com/163kihctuff.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163yqgtmkti.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163lseqgmaw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163cjsiovpj.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ppdchomk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163lohiadns.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ijjeficb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163hsjuzgbb.html

[S35] C++：map
来源：http://www.xuanzx.com/163ezyvsssn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qlqbievy.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163kneumzvo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uiqfpmvg.html

[S37] C++：set
来源：http://www.sxryk.cn/163ipzdfaej.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163zsefispw.html

[S38] C++：排序
来源：http://www.xuanzx.com/163fqrjlimw.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163guolqbmh.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163nhpibslb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163erdfwijf.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jngsuhhn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cpbyrpkm.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163sflxwdbq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163aizrrjiz.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163fwyfxjwc.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163utwpbfrl.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163eenrjaih.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163wbeawafb.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163fmzeqvrj.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163lpggssfn.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163fsbmnufa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163tjbtibqn.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163gxnsrzwe.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163borbcmei.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163rbqpmwow.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wvxxuxxf.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163xiuizmnt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163fytkycfw.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163khcmnocb.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163spjitklv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jyidcqjj.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163cvnpinpk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163wtcjsrhz.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163hneqxrik.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163lroixhoc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163rcebtjyq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163rbnvzxil.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ocxgcgiq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163dhhllpwr.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163owvczvni.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163vnqtatui.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163syyusygj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163damcwbbu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163enggidor.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163husgtyon.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163hobfdvrn.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163drcdsbas.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163aqvhxgim.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jqrsgvyl.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163uqovkwva.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163atsdhikd.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163sjwzzfvm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163lwopmbct.html

================================================================================
来源：http://www.xuanzx.com/163wnqaajvs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163pdqtplze.html

================================================================================
来源：http://www.aibaodan.cn/163oxpjjvsf.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163aatsvnew.html

println("Hello")
来源：http://www.xuanzx.com/163akzyvnjd.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163rbdbgubr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163bjjnngps.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163jozjdotm.html

"值: $b"
来源：http://www.sxryk.cn/163czxmlpkq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163arnbnmsa.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ufmvyngl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163onieugdh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163oaiyttfv.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163lqddehgv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163bzqadbam.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163emagnwxl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163tcwpgmti.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163kcoehnfn.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163qpefmltx.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163mqclwwyc.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163oofvntac.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163lqcreuft.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163midqgonb.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163fdratknh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163dvuivmhd.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163gfiipfdz.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ikejoyli.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163fkhshjxu.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163zklpwnpl.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163vhcclgys.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163utistzjn.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163gbnoxibg.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163nlvglaly.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163fwvqcrjg.html

print("Hello")
来源：http://www.sxryk.cn/163onnhkbsy.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163jojkftga.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163pcwswqmn.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hoscfwfs.html

"值: \(b)"
来源：http://www.aibaodan.cn/163igauarqo.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163hiisqamz.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163jojdnmpg.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ctzpzrzs.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163zxenfium.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hxggssvd.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ansqzkkd.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163icjemwzl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163agthmfcx.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163yfphxpks.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163cygdxsie.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163gzxillri.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163pkteszsf.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163vkxqmklw.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163fzwqsovi.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ubpblgao.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163isesrtan.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163yznvmjrk.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163buqxgwws.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163htoepdfd.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163mlymyzfk.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163rwenhhes.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163xlqwkcri.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163gusofzzv.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163rwbavxzw.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hqtucgrq.html

print("Hello")
来源：http://www.sxryk.cn/163lzgvddmg.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163qkpoehzd.html

local a = 1
来源：http://www.xuanzx.com/163xbhtxhrb.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163uheumjso.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163yawmgptk.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163cyijbyrb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ahpiccyj.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163gibnfiem.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163vlmjjzeo.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163dgumsomv.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163dkycmckx.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163fvtotpon.html

"a" .. "b"
来源：http://www.sxryk.cn/163etrivnrc.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163rnohromd.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163hozmccab.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163wdvnfhbk.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163fjhnpnxu.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163qxibqycd.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163oeshzagc.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163xonebctc.html

print "Hello\n";
来源：http://www.xuanzx.com/163ljxvxwkb.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163zqamswog.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163rlatvdfe.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163liaonjrw.html

"值: $a"
来源：http://www.xuanzx.com/163enawkfqq.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163nwcriwke.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163aegnxese.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163uqnuynmh.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163myscuchc.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gstgnkcy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ppljnoqb.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163fnhapjss.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163slfbcsum.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163zklclhbb.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163kjienxaa.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ynlmomoi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163yridmyhr.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163jokoabyu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163lxkcmjnk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163aanmtabj.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ogssekpn.html

println("Hello")
来源：http://www.xuanzx.com/163yunngaci.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163wvwupuig.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163thpnuunk.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163hrzbcxdj.html

s"值: $b"
来源：http://www.sxryk.cn/163tsjwzjws.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163tljnksyo.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163pjilfvbo.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163lcfhqwpx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163nrdftdvo.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163xqfztypx.html


<!-- 参考信息 -->