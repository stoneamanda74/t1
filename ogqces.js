外链999!wailian999！

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163womtsawz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mzjwoqqn.html

wc -l a.txt
来源：http://www.aibaodan.cn/163lnviujgu.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163jryvirvh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163gtiwovwj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163lxwsuxgd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163oxszooil.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163snporvvo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163obbovwek.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rptsbneh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163hqqpozas.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163nqulpoqz.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163qyisfepo.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163uigjovzf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163oqufmumj.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ysxcjspz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163rqslltat.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163uojsqrfr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163kvqjpobm.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163phkeoikn.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163drfapumk.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163mlacotfj.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163wbzprxcq.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163vrhyrlrq.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163lguycnzl.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ajcvvpse.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163mgjuydkx.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163dmuyqkqm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163pjsgypdt.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163qbemkqxy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163bszobuof.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163wwouoqze.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163oerorrry.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163pquteyro.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fwdkclzg.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163nbimufgy.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163hknplwiu.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ftjvsanq.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163bocjrxmd.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163psqcxdzk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163fikxfkdz.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163lpiywxld.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163teogzoaa.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163olzxzyok.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163kommryuk.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ggbjpnxn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163jjbuotnc.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163obltyrbo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163rryitlgh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163gmtfiole.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cwnbhuox.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163jmpbhroh.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163aqzodsvd.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163coireniv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163xjpdkfpt.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vvucbpyg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163uvzmkuyb.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163maaejavs.html

time ./run.sh
来源：http://www.sxryk.cn/163cwwpsirx.html

================================================================================
来源：http://www.xuanzx.com/163ifxcgojj.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163joubfbir.html

================================================================================
来源：http://www.xuanzx.com/163byimbaff.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163moyhnaps.html

#include <stdio.h>
来源：http://www.sxryk.cn/163tdwgigsp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163wmplqmsp.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163wzffpidf.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dguqzqfx.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163xccqjeqt.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163jshvhvha.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163bxnvplbk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163lcajduyj.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163cygzkauq.html

strlen(s)
来源：http://www.xuanzx.com/163emsbpkkg.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163yzctvggm.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163seolwjhu.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163skusrzrr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163kjlxlhfq.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163neabapnr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rxfpqwae.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163txouogbb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163lbctwwyh.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163swlwgqnw.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163irqyylea.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163iwanojcx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163zwnuxwzf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163idpzhyob.html

fclose(f);
来源：http://www.xuanzx.com/163usrkpagk.html

[S12] C：写文件
来源：http://www.sxryk.cn/163tzogspat.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163qbezpofh.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163bxakjvut.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163wwlmlqqb.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jbjqtaiw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163dzjhzbjj.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163kkbuvkvr.html

(double) a / b
来源：http://www.aibaodan.cn/163yowvconw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163uzajnmfi.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jrjdgnio.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163htmkzwio.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163gohhuzmm.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163mvrbdxfw.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wykrcxeh.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163uhvqemwd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dzjpnudv.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163wgqhddkd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163usbwwvxm.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ojpjebnm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163tgvwxzaq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163kvkbgjpy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163bduffbhh.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ipotphfw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163vwysfsfd.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hnzzljuq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163oklmlzmn.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163dchkulvh.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gzeinnrh.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163djgpsvyv.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163mlnoqpms.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ulsefnwa.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dwookqwe.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163nzbbvzzj.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ldnezssa.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163xliuacqt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163nljtgjuw.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163njulskwo.html

#ifndef X_H
来源：http://www.sxryk.cn/163igmantnr.html

#define X_H
来源：http://www.sxryk.cn/163ulcbcxqu.html

#endif
来源：http://www.aibaodan.cn/163pibahlzm.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ueqbfpmk.html

#include <iostream>
来源：http://www.xuanzx.com/163ruzbcnpo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163rawhbtub.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163nmolvtuj.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163fpfcauca.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ukuvjmrh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gnkwluhy.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163pedfljdi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ywmtiyvu.html

[S35] C++：map
来源：http://www.sxryk.cn/163dffmjttj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fzteeygp.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163wdbldzcq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vjsilbnb.html

[S37] C++：set
来源：http://www.xuanzx.com/163hosgdcke.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163uafxyzjy.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gkmabejc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163dyudnfbb.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163kyrqwtjk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163mfhmbgub.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ghbrutbg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163hmzkpyhi.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163smexvmqh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163cjmremha.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ddrtdvcd.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163kzfvyctu.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ymdwmpvs.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163vcqukkzu.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163erpumhvf.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163dodsomeo.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163siiaphhk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163nlwkguie.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rpmrgfkz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163clgktqib.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163slrajtpt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163tdflcafd.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163nzncsvhy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163shfnaxbz.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163shrylltb.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ytanowue.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163oholdgpr.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163nobubhzh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163zbpoaast.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163unjmtluo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163zsnbygkc.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163obfxlowf.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163lwxtjkjm.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ppmegubz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vxxugquy.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163bdifnhga.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163uypmefww.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163kjtmpbse.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163lxdmdgei.html

[S56] C++：optional
来源：http://www.xuanzx.com/163txssmtnh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163rnboweyq.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163usscqyqb.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163yurwmjbb.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wtoaaego.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163xxorptzv.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ckknqlbb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163xslrgirj.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163bulopxky.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163oqekpyab.html

================================================================================
来源：http://www.aibaodan.cn/163rewuawku.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163azucptbr.html

================================================================================
来源：http://www.xuanzx.com/163dwrvceue.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163uwxaucsv.html

println("Hello")
来源：http://www.xuanzx.com/163nizosqdi.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163cvyapahw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tfityenh.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163mizivbmt.html

"值: $b"
来源：http://www.xuanzx.com/163fballvuj.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163mbumskvy.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163hufijqat.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163kddwcapp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ktetbyos.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jbwgxyjj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163errnjavi.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ycccvlnh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163mjdifxfp.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163oltbmxrq.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163hsaxvzpr.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163sfafusma.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wpjsltnw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163syrynlem.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hsuhvtfk.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rffrrizv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163kzprbntb.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163glbdpbre.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163xpnxzleg.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163uagsaxsc.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163qlnuuhjo.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ftdzwdak.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163kffgobuj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163sdherfzw.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163htjdlxsj.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163evdsavuf.html

print("Hello")
来源：http://www.sxryk.cn/163ftzscluo.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163rjnirkxf.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163jamibwwt.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163rwfzugxw.html

"值: \(b)"
来源：http://www.sxryk.cn/163omkmviqg.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163dxxmjyzc.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163jdbvhpnd.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163pizpekss.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163jmwldllp.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163wtpjdinw.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163tvyxgzqa.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163uqpfajwj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163oprvzhnv.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163rwoxaufk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163hwsdugvh.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163euqjdzsq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wszbopeg.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163inkpoxhl.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163bfnjmqcr.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163rwuvaswf.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163xeeabwec.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163fnibvoaj.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163pewramez.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163chxnwlou.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ltvctkgg.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ulwvqfpz.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163oajjfwwf.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rzmqjkqg.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163zqhjjpsi.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dllottiv.html

print("Hello")
来源：http://www.sxryk.cn/163ujkijwdx.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163fyhwrrjo.html

local a = 1
来源：http://www.aibaodan.cn/163dgrgxoul.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163abldsgfq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ltkcoykv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163aklquimn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163yrgwmpnt.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163iigcustc.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163aumlhzri.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163uqcwpwun.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163hhbrhgkp.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163siknkylw.html

"a" .. "b"
来源：http://www.aibaodan.cn/163bcslnmgj.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163quluugpu.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163leqeoufk.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163vnbafzwh.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163wippfkzx.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163efhbnxrv.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163vipuyiqi.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163xxkbsrkl.html

print "Hello\n";
来源：http://www.sxryk.cn/163pjfzuyqy.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163akslqjww.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163rebckmig.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163aolkgali.html

"值: $a"
来源：http://www.aibaodan.cn/163yarwwlxf.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163szofplnr.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163xmrcesal.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ehuqhjmu.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163qukgixwl.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163gtwkrghn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163dlyznxdt.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163benhincm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163lxkkdgbs.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163hmiabqzo.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163glyfwnkz.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163jetpltps.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163fawgpfyo.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hovivmnd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163koednhcs.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163yjivfprl.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163aphwnjnd.html

println("Hello")
来源：http://www.aibaodan.cn/163myqpjwxi.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163xedhxjqp.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163xiufxosb.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163fgiuxojj.html

s"值: $b"
来源：http://www.aibaodan.cn/163rxoranhg.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163cicwknuz.html


<!-- 参考信息 -->