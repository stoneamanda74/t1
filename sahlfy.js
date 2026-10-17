外链999!wailian999！

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163tusmzryy.html

[R50] awk 求和
来源：http://www.sxryk.cn/163sqonczko.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163tupgvrkn.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163fwfxjqzh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ifztifyi.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163wmahcshk.html

wc -l a.txt
来源：http://www.xuanzx.com/163vjopoknt.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163jtzmfrzp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163cmpwrceg.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163uafsgvsy.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bcvpkxxj.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163jlgvasrx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163xjifwswp.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ouiyxlcw.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163comfjjhk.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163jhgoclft.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163uzdwnnwr.html

[R58] 下载文件
来源：http://www.xuanzx.com/163cmkgnnof.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wcpmgibr.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163bpoqeacz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163pxgfkizx.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163somcaqfm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163whaxvvzw.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163uigtxdoc.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163sfvcslrp.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163okmixfcw.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163nrzrhzym.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qowqlseq.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163mrivdxtd.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163kpdghtnd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163inwzzsro.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xknpzexk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163yadklqvo.html

[R66] 定时任务
来源：http://www.sxryk.cn/163cgufopdz.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163wqumydyk.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163gftzlggy.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163wrhqacyp.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163mnjqxrzh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163cfsmmgwu.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163tjxfiuzc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163bufkhilk.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163azbmkzet.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163nalexnph.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163bmwdzudz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163kqlfiwqx.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163mbaxhbio.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163itntqgma.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163leguulbl.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ockrnmdc.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xcezmhhm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163vjptzobz.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ycusrbar.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163vulcspet.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rjbuyxiz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ojjwwdol.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ewavfreu.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163kyxggcgg.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163wohrkqou.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163lyjrjmwg.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163zeqhjzkd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163iblwtega.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kucagajl.html

time ./run.sh
来源：http://www.sxryk.cn/163nedituat.html

================================================================================
来源：http://www.sxryk.cn/163nqchaadv.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163iwqiqmvt.html

================================================================================
来源：http://www.aibaodan.cn/163rcrhvyjr.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163lzhgggko.html

#include <stdio.h>
来源：http://www.sxryk.cn/163lsznnkzw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163epmwbnjy.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163eylqahjz.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163vuykgiby.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163htlqbwuj.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163dtkdwuxs.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163lyneygpy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163wqajhkpp.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163dbtsqiql.html

strlen(s)
来源：http://www.sxryk.cn/163shbhvchu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163jwjxzupk.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163hxvmpfed.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qnmuifpp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ldlmzkrz.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163aztnbzim.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163uefvsmak.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163xkbqdtls.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ziatadsw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vzpainef.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163rpuzpguq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163fvckeidp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163fubeeavx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163nghnpltt.html

fclose(f);
来源：http://www.aibaodan.cn/163uiogwgou.html

[S12] C：写文件
来源：http://www.xuanzx.com/163crycjkee.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163iuhkglec.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163akmqyuhn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163apxodnly.html

[S14] C：枚举
来源：http://www.xuanzx.com/163xfbkndps.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163nxgbbbzr.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163otblrojy.html

(double) a / b
来源：http://www.xuanzx.com/163wodiujno.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163pneayqys.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163kwedusop.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ygidhazh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qbxccswi.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163bbreyjat.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mqrtcmwl.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qazhfapr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qhiqurdp.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kfvbmisc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fisjrnru.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163rpuovmep.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163aewxdvsz.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163xzazvqip.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163rsktphsf.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fqgxagxh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ejgfbrdb.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vcsgnbwz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163srcchmhn.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163vrhcygfi.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163oagxhmla.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ijvtyqnm.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ipujuxfy.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163nkemlfbe.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163qupauwoi.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163qvgbdfbx.html

static int counter = 0;
来源：http://www.xuanzx.com/163riejpuge.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163hppmigzq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163xmmleppo.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lwfimotm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163mbywinzl.html

#define X_H
来源：http://www.xuanzx.com/163xmjmusmg.html

#endif
来源：http://www.sxryk.cn/163uqtqpevs.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163rxltlzoi.html

#include <iostream>
来源：http://www.sxryk.cn/163zexthiyl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163xhigfdgl.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163uhotmxxu.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163mootzwwu.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163dxlrfkqp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163qebqxkpe.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163lqlcyuxu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163qnqtyloh.html

[S35] C++：map
来源：http://www.xuanzx.com/163cpwcrwlq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wcerewgf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mnjzzguq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163sqglggmw.html

[S37] C++：set
来源：http://www.xuanzx.com/163yvhsjyxh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ozadiwwo.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ouqlvmay.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163zeqwumji.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ghbolpab.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163xqzbzrmy.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163gdhoxawb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163yyznpbak.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163cfyztoye.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163jkdmfguq.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163yxlfwzle.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tfwdznsy.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163dvwuhjea.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163obrusnsl.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163oalsqkaz.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163lxfyiyiz.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163owinccep.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163iktsbsxj.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163dfbexzto.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163hneeyezk.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163kmvxyuhk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163bnalarbb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163njbccdet.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163wuhgvnqv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163knnqiepm.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163inpjhwqr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163rslwdnix.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163bvsrlmov.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163cchgxnzm.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163huvwycyl.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163xqxhwxyf.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163lndvaadc.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163fhjhphtc.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fuhvcimi.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163bgpzoasn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163tslepjtn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163cergeoaa.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dypxfdri.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163fuxetrgw.html

[S56] C++：optional
来源：http://www.xuanzx.com/163irwnksmp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163oqhheazf.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163imqpbshd.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163sarflkiq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wgznjpcb.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163begyztca.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163lhixmmke.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163gktvhxfu.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163qcfsqoyg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163znhoadzw.html

================================================================================
来源：http://www.sxryk.cn/163ekqzwpqd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163wesjujor.html

================================================================================
来源：http://www.xuanzx.com/163jasdhehf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163qmplkowl.html

println("Hello")
来源：http://www.aibaodan.cn/163kccutixt.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ddysbaai.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ifqwqhgy.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163xqraitlo.html

"值: $b"
来源：http://www.sxryk.cn/163mzbygphg.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nqloxffb.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163fqagqhdn.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163jgnevaye.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ykllitee.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163lddiyfwh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163lbceeoow.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163icurjtjw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163awiqdpqx.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163xwjoxylr.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163apggwmrx.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163qfzlqdor.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163hffstevr.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163cjibzbuz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163voxavwxk.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163udxfldzd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163lpqiurky.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163qebogahp.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163tizrhzko.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163mlfipbwk.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163znovhcka.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163hgfdhytx.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163cpjkzozi.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163vjpykgnu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ecskbzaq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163wkgigbue.html

print("Hello")
来源：http://www.sxryk.cn/163jnccsdka.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qhlwrakq.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ttnnblwx.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163xsuhoxtw.html

"值: \(b)"
来源：http://www.xuanzx.com/163gznofify.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ylvhitxr.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163euzxtxtg.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ykssejkk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mmqdzeny.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163tldkabln.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163bsafyabh.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163axlbfcyo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163brwtvspx.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163foyhfsrc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163wvyorqao.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163wsdzdend.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163mdnwbcrz.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163tgejmmga.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163xogdjigo.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163cbzccxso.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163dbfbwcee.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163xunnbwlc.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163gvsntedd.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163eidwzsuv.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163iqwnnuhy.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163uuovuvdy.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163mnqmpjau.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mgtdtzvc.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163pelwmfqz.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hbzbyelq.html

print("Hello")
来源：http://www.aibaodan.cn/163fhkchwll.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163yapsbesw.html

local a = 1
来源：http://www.xuanzx.com/163ureabukl.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163hkfmucho.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163hagzlstt.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163skgtnffb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163xiinyewg.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ajlhhhgl.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163jmngzpyw.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163narlsmuj.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ngiknoqb.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163efetcjlf.html

"a" .. "b"
来源：http://www.sxryk.cn/163ecykmlvu.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163vcdkecrm.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163dnxmfffe.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163pcsrdcbn.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163lvwsyyrl.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163pixbywlr.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163cncrsjal.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163jfcxprcw.html

print "Hello\n";
来源：http://www.aibaodan.cn/163feirqjvb.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163eirxvxgs.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163fzeqmnvq.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163rvwxhlls.html

"值: $a"
来源：http://www.xuanzx.com/163cwgqjyqb.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163egukiogj.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163lrdeidat.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163achbvpsd.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163wsljfhyz.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163pgfhcrgg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163npeovlax.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163mabgciba.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163bwzgzvji.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163swazkslm.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163yxnezyht.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163uxnhjomh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163cpyqqalh.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163qaeocech.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163iaxjiqmx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163nmeqplqk.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163jhtexeyg.html

println("Hello")
来源：http://www.aibaodan.cn/163vewvhfgp.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163bwpwfxdz.html


<!-- 参考信息 -->