外链999!wailian999！

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163yfpnbwjg.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163nrluthbd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163otvgnlzj.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163syvsrkeo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163lkllvgjt.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mmbaoerd.html

wc -l a.txt
来源：http://www.aibaodan.cn/163gxnymzja.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163lafkymwv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vowznhkg.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ciyuuyrp.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163pzmxgteg.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ysdljqgs.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163rqbxufgn.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163juzmuoza.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163wmigxchy.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163yjevjtem.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163osjlxjme.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163dtwtqerh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163tqnfnvze.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ayezgggu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163plfskuxe.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163blcpdcrb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163lhlzctxe.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163icgskkuo.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163wpyifnzp.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163vltjgqvb.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ldstwaws.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163fcxfshso.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163nfnvptka.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163klpkazsw.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163mskukjcf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163aqixgkto.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hhozhbpm.html

[R66] 定时任务
来源：http://www.xuanzx.com/163dxjozssd.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163odpwzomf.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163izrxgskg.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163onlrgmbh.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dlgmvnay.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163mxynyxlb.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163lzfscsvi.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163bsfdklab.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163vomhccix.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163bxiwphri.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163wikqiscq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ngmivdht.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163bwuqwpsb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163bljdfyfu.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163zlgpmbal.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163sgsglmcr.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163izzhduhr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163dxfvlmgn.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163rkvxmxwz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163npeiftin.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ssswoywq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ohbiamdk.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163burtkgsm.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163vjibgtar.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gptpujzd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wqvgarky.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163jxnqpcod.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wynxbaia.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163bvgnxdew.html

time ./run.sh
来源：http://www.aibaodan.cn/163vjqtzmbz.html

================================================================================
来源：http://www.aibaodan.cn/163auqckhrw.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hnqxbnqz.html

================================================================================
来源：http://www.aibaodan.cn/163tnjnxgqo.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163hijvwwwu.html

#include <stdio.h>
来源：http://www.sxryk.cn/163wladaqtr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163kkkyklnx.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163vvudhehm.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163metyqacg.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163wrekgnnw.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163lxqruwch.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163cjsgexfg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163dvfsdwlm.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163smgxbjaa.html

strlen(s)
来源：http://www.sxryk.cn/163wefyblsh.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163lcurtrkb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163kvutulpc.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163fntsqeuf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163kgnditzj.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gobrehac.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163aenkrcek.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163chthzfdh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163dlmctrlv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163rycdmwbc.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163jayqclfn.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163hmdmsvbd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163fvsizodb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ulrgbxtr.html

fclose(f);
来源：http://www.aibaodan.cn/163vejgukqg.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163tlollkji.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163tuproioa.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rpsywtei.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bwtdaqov.html

[S14] C：枚举
来源：http://www.sxryk.cn/163fpsizbrr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mwcqvaok.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163chnsrjtf.html

(double) a / b
来源：http://www.xuanzx.com/163rnrrsiiy.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vqokupgu.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163njnljowh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163wqiaunub.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jkwwomov.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163shraydja.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163dtsmuqiz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163sqgtkfzj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163glnvwajw.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ayyuhjqo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163iiceyhdu.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163aedrtsil.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163dtcltewp.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163athpnwfn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163mcblmlhq.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ulsxidjh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ipnnnzhk.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163fakeecas.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163skxuaejl.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163guoiocag.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163siiazgiv.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ipvondlb.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163iaexopso.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163tvqofxkk.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163jxigroni.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163selemobn.html

static int counter = 0;
来源：http://www.xuanzx.com/163tlevymqu.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163bdnobijm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163sfljxzyn.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163yizgutqp.html

#ifndef X_H
来源：http://www.xuanzx.com/163diaxkjjj.html

#define X_H
来源：http://www.sxryk.cn/163ybnaymxm.html

#endif
来源：http://www.aibaodan.cn/163iejyubks.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163suoxknqe.html

#include <iostream>
来源：http://www.xuanzx.com/163ncpizwzj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163mnkrmczn.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163gfdsubzz.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163rrjpvour.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163yizxbsfy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ddvttkft.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163kuetedzt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qtvqyrjg.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pkiulzgp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163cusmaldn.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163izhawfbl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vnxaraiz.html

[S37] C++：set
来源：http://www.sxryk.cn/163wxbwxbiw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163grnmbmmc.html

[S38] C++：排序
来源：http://www.xuanzx.com/163suigwlna.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163xcftvqgz.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163zygqlvrc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163relqdhfa.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163azwzcugn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163esaxcsck.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163gxekjsph.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163wapltmsw.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163vinhrqvn.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163sjphissu.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wyohgdzs.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163axvmhzqc.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163zofexkeh.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163hgurpfev.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163wavydcny.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163rcscaqcf.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163idtlqcqt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163iyzdcode.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163eqprqpcz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163rcduqcvh.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163oynhbhhf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163kkmsgcua.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163domstmww.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163rbjjxnij.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163tzvldpzo.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163icyhldkg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163joncdsyt.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ibrjznqe.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163sxqvwdmc.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163uledxceq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kqaeywyo.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163gkkbwtox.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163rqalpnln.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163xkporgwy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ohqsnqrd.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ndkxjntj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xcwtmqwi.html

[S56] C++：optional
来源：http://www.xuanzx.com/163azdwsnhy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163hacjeqsf.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163rsyohhiq.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163cphlwigv.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ycoaxhie.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163obygbxbe.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163dknwdxnn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163yzmtyajm.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163egrtwpbz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163laoxtbsv.html

================================================================================
来源：http://www.xuanzx.com/163lluwilkj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163putndsmt.html

================================================================================
来源：http://www.sxryk.cn/163atcstwkb.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163gcemzktg.html

println("Hello")
来源：http://www.xuanzx.com/163lsktbfbn.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163iwbigqdc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163keqczuwq.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163insmypfg.html

"值: $b"
来源：http://www.sxryk.cn/163ijccwdvv.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163cuaeuurj.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163vekjjajn.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163nakpetwf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163pywblsoh.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163kqvabffj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ovcotkga.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163jzpwzxwb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163gbmbzjxc.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163tobajsqw.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ligkxlmo.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163toahsazy.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163pztgurpb.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163olxytlwc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163nrvyupaw.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163eqhbcowv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163heauzslr.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163xhtoeycc.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163sedsezvh.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ytwyjjuc.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163jzplhkui.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lwlncfxg.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ozwypofc.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163rtnupljf.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ifzuebqu.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163hichgnmf.html

print("Hello")
来源：http://www.sxryk.cn/163awkbeobs.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163tdqckbyd.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163tnlhrmvh.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163fvgvesfs.html

"值: \(b)"
来源：http://www.xuanzx.com/163jpgzqzmj.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163pdkidjiv.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163tjetzrou.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163tlfmngeo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163sbykktyt.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163mboofueg.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163tpoirxea.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163hjitqhho.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163mkcdxpsw.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163qoennrbk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163xpctfugb.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163obqvyudd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163szpiipvu.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163lqqjwimg.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lfmpzjdm.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163cozkwcwo.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163pcdkflch.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ogpoqtjr.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163zacgtfpo.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163yqupapnk.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163kanrdntb.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163dxvzboqz.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163evwagtsk.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163pvyuafac.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163tcohoxnp.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163vlkuzovh.html

print("Hello")
来源：http://www.sxryk.cn/163pasrztyn.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163obsvpzun.html

local a = 1
来源：http://www.sxryk.cn/163gjllfucc.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163bindhakd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163lbsfufzl.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163fmffncfm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163toankdlm.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163cqsisjrr.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163vyklfkio.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163wwegfllh.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163hwnmhued.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163vwyfpspy.html

"a" .. "b"
来源：http://www.sxryk.cn/163hxbyqlvm.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ejspczcr.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163uvwfsvxx.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163kjbmfxvj.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163hozaukjq.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163aonpmbct.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163zscfbocs.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163txwjxwzd.html

print "Hello\n";
来源：http://www.aibaodan.cn/163vfgksqgn.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163tpxzfiew.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ilruinde.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163qizcxxcb.html

"值: $a"
来源：http://www.sxryk.cn/163egyndwvr.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163rckcbmxd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163wdtcllvc.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163kyunahhh.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ekgypgar.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163xqhmbzeg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163gkdbmhsg.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163wgmyqxhn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163pvzavrri.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163fsfbsmce.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163gmdzsqzr.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163yordvpeq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163mdkvroid.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163rzitqbxn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163fgpyioyi.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163mgubmyte.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wnlogyag.html

println("Hello")
来源：http://www.sxryk.cn/163qmygdnhy.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163gffhelbs.html


<!-- 参考信息 -->