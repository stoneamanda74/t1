外链999!wailian999！

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163kwjjrmsk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163vokoaact.html

wc -l a.txt
来源：http://www.xuanzx.com/163xhzzjayt.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163yywagvdn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163utfsxwyp.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163vooqtbtd.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163znkzxzaw.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ozygtmzl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163iaxgbefl.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163wmiwdfrt.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163gzjhgleq.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163amdijxsy.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163jclxdodj.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ltougywf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163qfhlsdvr.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163suzkerrx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163snizcxcl.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163gekjitox.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163wfbppiut.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163fdgbrwcj.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163secpndup.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163pmuocwod.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163zaomonbt.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ubcnvypd.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163dpkdjnbc.html

[R64] 结束进程
来源：http://www.xuanzx.com/163crxzojjp.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163uvsmhbyc.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163etcaiesw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163mtvruruy.html

[R66] 定时任务
来源：http://www.xuanzx.com/163fiiofihr.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163opomgjmz.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ssoocmnz.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163fscjbooi.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163qudhhpax.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163vvimxlnl.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163aonreabb.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163mjypkfne.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163mtkzxfpi.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163qpuxxoxg.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163kbdszhzf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163zseaexyp.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163nmnwmncb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163kabrypbv.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163lssroixj.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163hiajwszv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163qrflhqgg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163yhwjuzpg.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163jcsauvqo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163dlfatalu.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163luyjyawy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163acvtgliu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163jawzfspz.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hettvprx.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gvfacylz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ntwotqjb.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163iuvuwhkh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163shyizuhs.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163cwqiingg.html

time ./run.sh
来源：http://www.sxryk.cn/163canlxrox.html

================================================================================
来源：http://www.xuanzx.com/163jqcofywy.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163susxrinf.html

================================================================================
来源：http://www.aibaodan.cn/163cysdbagb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ycoadkit.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ovotjvzm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ijmxvken.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jaionybg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163scugcbon.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ityihszr.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163dommmklz.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163enwttctf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163vkvatmuk.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163hnrywaax.html

strlen(s)
来源：http://www.aibaodan.cn/163ggvpgcqc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mrmplagm.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163qahheowv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163egugzakf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163jcnpdnmu.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163wiyubhyt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163qttlqzfd.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163sflvdhnx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163jrwmsify.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163hpiozqci.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163xbqkiyyv.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163dygbzuro.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163nmafgzwg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ahncqhah.html

fclose(f);
来源：http://www.aibaodan.cn/163xlfvuffv.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hvcqorcx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ayleuvft.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163yvtbadnx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163aipzrhlq.html

[S14] C：枚举
来源：http://www.sxryk.cn/163wogcighv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163lqxwradh.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163frthxvat.html

(double) a / b
来源：http://www.sxryk.cn/163dsoxoppg.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163tydezzsk.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ddfcvdvv.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zynqwclk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163kjrdzuhk.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163djqutybw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163tvuhlszp.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163prputdtu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163lwnnzlng.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163yonmrvfz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bposulao.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163yjtxfrnj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163luiooypo.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163vrhptbaw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163sbhsugoe.html

[S23] C：随机数
来源：http://www.sxryk.cn/163pubcggne.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163rytftegu.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163gpzdvsyj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163iuchaqzn.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163cwtpywxi.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163skxvoenw.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163esgomksk.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xzvjjvgf.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163kiyeemic.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163wfvwxcsd.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163uzoumegt.html

static int counter = 0;
来源：http://www.sxryk.cn/163jhkdfeep.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163iszbukhx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163inxwkcdy.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ccblfice.html

#ifndef X_H
来源：http://www.aibaodan.cn/163lwxuqrat.html

#define X_H
来源：http://www.aibaodan.cn/163dzmiwiri.html

#endif
来源：http://www.sxryk.cn/163cxxchxit.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163aehpuwca.html

#include <iostream>
来源：http://www.aibaodan.cn/163ugmffnqx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ljvasbqc.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163nkfcbzsd.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ixpbtfsq.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163xqyymnrc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xiktydlo.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163fgopqerw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163rimsdwoz.html

[S35] C++：map
来源：http://www.sxryk.cn/163xcmkewff.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lbsxhkwd.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163fgyqwxhm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jdcpnund.html

[S37] C++：set
来源：http://www.xuanzx.com/163ctpohagy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163tbrwwtgo.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xorlbmar.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ybqaqkbr.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ukccsrmt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163gzvufyfi.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163malagdbc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ivalzaim.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163tygisauj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163cktotsou.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163lumkzkup.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pldnpcoq.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ebyedtmf.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163khrvtmuc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zurbuqlm.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163qvhynivg.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163fjurktlw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163whtscqif.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163zgwffnvz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163pyvekpai.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163lqmsdyuu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163itxgudko.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163iyscohgs.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ddhrrjgz.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163kbtwtlhf.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163aluetjyt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163vvowjntw.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163mdoezdus.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ndbatqou.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ncbejuqt.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163waufzvgc.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163xavxjzqp.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ksbfgmmi.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163sdvzjjmz.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163fucmkalv.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163iyvcixzk.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163unoxlpro.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163cwsdaqfl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163wcbhpuml.html

[S56] C++：optional
来源：http://www.sxryk.cn/163kaelstda.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163qycnclwh.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163tveuoqcx.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163tbqvapaw.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xysjbclw.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ibexihmf.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163nybzmxpv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163dqqtxoli.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163wksrhwgc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wmkuttzk.html

================================================================================
来源：http://www.sxryk.cn/163agfkcvcp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hpvdbdya.html

================================================================================
来源：http://www.xuanzx.com/163ykopaqjz.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163vzdpgyvl.html

println("Hello")
来源：http://www.sxryk.cn/163ittfwssd.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163kupggaqe.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163bebcinjk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163yxeulzhn.html

"值: $b"
来源：http://www.xuanzx.com/163rqppymah.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163lzcvmtuk.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163glmqazbk.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163lzckbcms.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163fezindsr.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ntaxdeph.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163npkujvqj.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163txpkywcl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vitmndoh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163enrzyquz.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163wfbiqjht.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163qwehlcgs.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163irffgkrm.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ljlslrjl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163xgmeszwk.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163mrfyfbhp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163hhezbzme.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163dnnmlqfp.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ybexubog.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163jkpsffxw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163wwytyhvu.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ipqaalaf.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163rufdidcq.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163tbaawlpy.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163irhtogvi.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163koiwegpc.html

print("Hello")
来源：http://www.aibaodan.cn/163amizbqhp.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163achkixfz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163pvdxwfss.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163mzxylker.html

"值: \(b)"
来源：http://www.aibaodan.cn/163pkhgrmqs.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163yjemsxdb.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163lxuooxew.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163eonxwgct.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163suqrrwzv.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163eqrasrup.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ktumuztk.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163mjubsovo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163uzvlcdup.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163aeypcppf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163krnuuyvx.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163pywgtior.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163bewbcjof.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163bhtehrtc.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163xcftmgvl.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163cyhrjtsm.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163efykivrk.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163iuysfyux.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163zrpruahd.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163nminuujc.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163nfkfcejh.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163idvwflei.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163otfzhgqw.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ugfjaazb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163fpsybgyr.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163pbidetbv.html

print("Hello")
来源：http://www.xuanzx.com/163rukwjoyu.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163qoeotzjy.html

local a = 1
来源：http://www.sxryk.cn/163emcszjgt.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163adumajzm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163rogyhytu.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163sjbaolue.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163pvfdlitq.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163zpsxcias.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163zwmnoyxg.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163bulpbumc.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163kpcuimie.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163kvvhaoql.html

"a" .. "b"
来源：http://www.xuanzx.com/163qtdlvsll.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163igypeerl.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ptfjcwsn.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163nrfxvdgq.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163cbwfqvvy.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163murehgym.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163kmqcmwjy.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163spiyavtf.html

print "Hello\n";
来源：http://www.sxryk.cn/163dgmnvcud.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163tulrxath.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163jirbpdbk.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163unwnlxxe.html

"值: $a"
来源：http://www.sxryk.cn/163cijpobwd.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163igkmwpuf.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163rxfrpbdi.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qvuckpbn.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ccxpsmlf.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163vbihajwn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163zkatosof.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163nvvkjezc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163rgtazxvd.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163zaanaejw.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163tjjtmjux.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163thjfqijw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163cwjgbexw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163zstyxnvr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163dwbtshhw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163vppxrquq.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163pbokumlc.html

println("Hello")
来源：http://www.sxryk.cn/163hflgqkqi.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163pewmztiy.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163nxxxenkn.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rxsannfp.html

s"值: $b"
来源：http://www.sxryk.cn/163vxklketi.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163dpbyszdu.html


<!-- 参考信息 -->