外链999!wailian999！

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163xeswhisb.html

[R52] 统计行数
来源：http://www.sxryk.cn/163rgofekdm.html

wc -l a.txt
来源：http://www.aibaodan.cn/163usfvrixi.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163qswohags.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163lnstifpc.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163adijqkii.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163gitplaov.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163mtwajtfk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163jovnvyfa.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ymwbdsbe.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ozmsqzsk.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163gvpznljo.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163fakgejqc.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163tdsehkfh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163qofccuic.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163tdtslmww.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jpqwxchy.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163lzertqvu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jtrhkgvy.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163lbrbwfyg.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163itqobeyx.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163saadmmyc.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163amcvkooh.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xcvjgkdh.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wxriqpbb.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163qjlpgumc.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163crjmghgh.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163tjzpdqek.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163bdnrrcwq.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163jnmabnoy.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163zjldfsjs.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163oimtgfsf.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163aimcknqb.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163vdlgysto.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163wjiixswv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163rkjvbbmg.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163biddnzxk.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163deimzshf.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163oponmjjv.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163gbbgwhuz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163kvekgocd.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xbkhntnd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163gkabohie.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163pstsvwnz.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qidczosp.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163qiuzjbks.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163bpmxoqsf.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163uthsgqkz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163oywshrth.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hqbtadin.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vubocdyn.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163rolzycxa.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163wxirywxv.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gldbcssa.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163fucvifze.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163uovdtmjq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163eudqdbzh.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ykhnwmcn.html

time ./run.sh
来源：http://www.xuanzx.com/163cdstcfml.html

================================================================================
来源：http://www.sxryk.cn/163loayvepx.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kzxtdhbb.html

================================================================================
来源：http://www.xuanzx.com/163vhyxfckp.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ylzyypaa.html

#include <stdio.h>
来源：http://www.xuanzx.com/163lywwomqr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163jnhjylhs.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163okcderud.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ncfpkxxc.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163esprbtuy.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ttyyjzti.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ahnzgetb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ehlxzsve.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163hesxbuyl.html

strlen(s)
来源：http://www.aibaodan.cn/163opmhwqzb.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163tonwapph.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163huvxxafo.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163hqepoduo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ejvirsam.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163imtxorgq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163hmhtjybu.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163fsngxfsq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163chrndqzw.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163pqmvmypc.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163grrmvnqv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ebrppozi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163xxrpumaw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163gcwjqqiz.html

fclose(f);
来源：http://www.xuanzx.com/163rpzasefw.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163kbvbpaof.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163swgtnucu.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163shsqtvpr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163vuyjzwax.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163zmrogcgf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163sjqsfpvf.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163tryvzzms.html

(double) a / b
来源：http://www.sxryk.cn/163yysaetoi.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163azkabfje.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163awpgwrcc.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ejzhlsuz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163gtasvekp.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163wfgawmtz.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163wuehcwex.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ubvbliyl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163swmzluby.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163wqbxzggi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163poxhoiaa.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163qjqvodsu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163mivnigcw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ifmzcgad.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163zycbmkow.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163dhpksgkc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163kgfhipzh.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163twswtyny.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163clkdniks.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163kterbavs.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163lzncstov.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163nuiprrvn.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163kxhopidq.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163nuyhvsox.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163bpnmhldr.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163pbbqkcvp.html

static int counter = 0;
来源：http://www.xuanzx.com/163ynjnjloa.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zpqvcyoa.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lwiylfvj.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lhzwriou.html

#ifndef X_H
来源：http://www.sxryk.cn/163fjszazbe.html

#define X_H
来源：http://www.aibaodan.cn/163dhsmwyij.html

#endif
来源：http://www.xuanzx.com/163tvujurcs.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ugzmoufk.html

#include <iostream>
来源：http://www.sxryk.cn/163hjefmksd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163fefopsmg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163jngmbcnx.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fjpcdvwh.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163oizmehbr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163udurzarn.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163aoweaeub.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163afjbhkvw.html

[S35] C++：map
来源：http://www.xuanzx.com/163tlzcfkuc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mttnmxtq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ujyvwtqf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wubrgxtw.html

[S37] C++：set
来源：http://www.aibaodan.cn/163lipxyftt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ewkyzdzi.html

[S38] C++：排序
来源：http://www.xuanzx.com/163zzzcztzj.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tghwxlcy.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163juotokvc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163nuaruqwr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163mzznqggd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163txtxenvr.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163lehrvvbk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163eipvwppr.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163thhcqugh.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163abfwioiw.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ubjmsost.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163pnkbkusk.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xiuvbeet.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163jbnxpwwk.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163xjesmcaf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163lfudmaml.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163jsxleafh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163mwgmgihz.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163iwlcajvb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163bdotkjum.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163svwnspbj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163dpskryeq.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163yresczgi.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163gsrjxwxw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163tgncfnmi.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163mqgsnbnf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163xlcdrcbm.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163pccetkrp.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ybjtzvvm.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vmkhqdcv.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ttokwnwd.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163kyuzwvhk.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ptlalfva.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163khrimguv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163qibsjaxh.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gggsolqp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163euqjumat.html

[S56] C++：optional
来源：http://www.sxryk.cn/163eszcusdu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163nmonhfdp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163goiybfuz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163laerbvpa.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xcgrcxaq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163esvhrwsg.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163xzfhkcja.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163nxacifje.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163wdmjwtkk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ewigqzsx.html

================================================================================
来源：http://www.xuanzx.com/163ztpksyjz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163foocysxq.html

================================================================================
来源：http://www.sxryk.cn/163rosqykgp.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hryjwhza.html

println("Hello")
来源：http://www.sxryk.cn/163stdxodow.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163qepasdae.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163xznroqlp.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163xifukusc.html

"值: $b"
来源：http://www.sxryk.cn/163xeegkaka.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163gxffsnza.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163mnhoqhqj.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hqnjpnql.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ciqgcysn.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163djoifvqg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163qgspbkwp.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163lfjizaoh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163hedtvzbl.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163mmavgtov.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163fwttzpzc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ivttguzx.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163vlhcmmrm.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163riqrpume.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163mdlxtdko.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163aguefzio.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163scicabcw.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163mmvkjsjm.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163rcsxjvbt.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163gljukjzq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163qxlycvmb.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163gbsmiaiw.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163jubfltmb.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163hpvogepc.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163cjqqhzvw.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163dlyqfcwi.html

print("Hello")
来源：http://www.xuanzx.com/163ktttvggj.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163dgtqaqih.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163tnfhrnla.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163paynuqpj.html

"值: \(b)"
来源：http://www.xuanzx.com/163bwxazxar.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163efomiefx.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163lgbakuef.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163xscsobeo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ywqzdvbw.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hjrehesv.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163beipemmp.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ayjasida.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ukoaqczf.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163csuxkvtk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163nbidizmh.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163uytuxyjs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163umyvnroh.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163xadcmbyg.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163vccegxwt.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163djvfuycy.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163hpzmkkus.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163vnfakqix.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163kpqvbxpu.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163cuqhoxsg.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ywekprsh.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163leulzmoj.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163gedudkrs.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163pnxfluki.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163jhhurqaq.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163lgsjhuxo.html

print("Hello")
来源：http://www.aibaodan.cn/163gezzxcwd.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ztttmbsm.html

local a = 1
来源：http://www.sxryk.cn/163jvzxajfv.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ysozweby.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163bwmxsnfh.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163adaufqbf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163dczkmlhl.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163leojieoy.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163dfjmscto.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163nyctbjte.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163eswkzyor.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163fcnbqkre.html

"a" .. "b"
来源：http://www.xuanzx.com/163joblnhrv.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163uusvbaxu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rajcleud.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163gxeinzit.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163kaqqgmbh.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163rcdevwfv.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163uxvgummb.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163aurlzrpr.html

print "Hello\n";
来源：http://www.xuanzx.com/163iyjegmcg.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163gomhdcec.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163evnlxdjx.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163qqmjlscb.html

"值: $a"
来源：http://www.aibaodan.cn/163sfoolubo.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163pvvoiump.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163xngmnwlq.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163qvtohbmt.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163gaskorhx.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163lqdrgidn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163hiygoruw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163dlchknue.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163tibleaiu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163ubaweoyd.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163mvoiluls.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163yxdaqpri.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163hrchklpi.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xqtpuggo.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163dezvwbsw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qjagsmul.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163wgdxkycj.html

println("Hello")
来源：http://www.aibaodan.cn/163gbjxpnnw.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163dxpoyibd.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163qudrmqvu.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163miasmhbp.html

s"值: $b"
来源：http://www.aibaodan.cn/163aglrlcds.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163qhcjmxpc.html


<!-- 参考信息 -->