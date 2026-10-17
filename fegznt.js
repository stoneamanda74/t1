外链999!wailian999！

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163cfvljqlu.html

[R52] 统计行数
来源：http://www.xuanzx.com/163fclyhrrh.html

wc -l a.txt
来源：http://www.aibaodan.cn/163blnonebg.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163oqgcctee.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163rptoqovl.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163apqyhyzw.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ymztxgcy.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163okwyhfce.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163hfjoecjb.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163dktqbcfw.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ggxpiszp.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xsspjnse.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163klbycgqh.html

[R58] 下载文件
来源：http://www.xuanzx.com/163umfgccgg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163notcglen.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163pwbkzrky.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163igdrjghm.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163qushdzue.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163roejobtr.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163gzxernpc.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ucopdpny.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163lbhihovr.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163mlmkhjpb.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163cwmcqidp.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163mouefpzc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ahqhrqde.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163uymqigvw.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163waeqfgfl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163brozaafu.html

[R66] 定时任务
来源：http://www.xuanzx.com/163vurgsawk.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163xoejwecw.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ududndqo.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wmkbffbn.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163lqdyacwe.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fyqjmhkk.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ctnoatxk.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163dzlmbtfv.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163jwgdzjqx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163fvostpjx.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163hwaxtxeo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163fgwqmelh.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163jgitolql.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163mmnwugsh.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163fyvpywne.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163vrhechku.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163rdyzmbth.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163cisiacmw.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163hnlodmgy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163gslsnmwf.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163tbrryrlv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nsxwburd.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163aezgmsat.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163hvnyanaq.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163hkowveiz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163zpwzoxhn.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163boanvloe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163qoprcssx.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163wfifbzcx.html

time ./run.sh
来源：http://www.sxryk.cn/163yyunuzzc.html

================================================================================
来源：http://www.aibaodan.cn/163xcacrrap.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163znnnakfr.html

================================================================================
来源：http://www.aibaodan.cn/163hfroozgw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163tlrbstxy.html

#include <stdio.h>
来源：http://www.sxryk.cn/163pqqolkpu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163mfmcrnad.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ljtjlzuo.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163axfmanwm.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163frzqpsum.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163zlzxrzaj.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163dkzfedos.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163riycuotp.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163mjqkybyv.html

strlen(s)
来源：http://www.aibaodan.cn/163jqhwhbaz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ifioscsf.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163txwwqdrh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163qsqstpme.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163pmywtrxm.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163cflqpykw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163zlmnjzsm.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163zoatofcq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163yclqlwig.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163cqffzvrb.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qjvaopvi.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163bjcqpbpf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ivxoetri.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jpabeeah.html

fclose(f);
来源：http://www.xuanzx.com/163bymghxrv.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ktqvvgmr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163qwwuumrd.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163gauetiuf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163pzutytxf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163yruvkrer.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ckdkeuey.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nktkdlzw.html

(double) a / b
来源：http://www.xuanzx.com/163bwymjmqt.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163pfbguouk.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163sjuhbvpf.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163bgwkcvat.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163qctmbqwt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163sqrqznvc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163jbjsduvg.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qtgnnmga.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zbimlvvi.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163fvawryyq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163lagcgpij.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ycyqvxnw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163pchlaqlx.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163bfkyakdz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163orytmgal.html

[S23] C：随机数
来源：http://www.sxryk.cn/163bqvcqmkr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163kozgwsls.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vlftylvf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163dmtyitri.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163dtgmqlny.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163spdwiwci.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163yuoaofse.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163bygsmede.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163bjfjzjij.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zpzyozkg.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163bfkhayab.html

static int counter = 0;
来源：http://www.aibaodan.cn/163dhqsoxbr.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163kzysikdl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163urytvbwx.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163obieqrih.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ioxvphqy.html

#define X_H
来源：http://www.aibaodan.cn/163hvidgrgx.html

#endif
来源：http://www.aibaodan.cn/163eezsmmzo.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163nmrdhlql.html

#include <iostream>
来源：http://www.aibaodan.cn/163nabdtzbe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163cofhrnhb.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163znfzsqda.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163guxegbtf.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163efqkvdsm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xyfjnomf.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163jtlrvpdz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163buucbpfl.html

[S35] C++：map
来源：http://www.xuanzx.com/163pgnnludh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163tiezzvjt.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163fmtvxkia.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163nzpmdpbr.html

[S37] C++：set
来源：http://www.sxryk.cn/163ewbwjadg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163pvphkywn.html

[S38] C++：排序
来源：http://www.xuanzx.com/163llldfrwa.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163sbndqwfn.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163sifzdbpp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163jepfzmrv.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163dabcqibu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163idscawda.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wltdxkwe.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163tphxmjfl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163wuaybxeu.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zsluzayp.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ocprecnz.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163kgtzybnt.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163puizockr.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163swgvjppy.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ypviqihf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ywdehhar.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163nlbaetgr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163eksktdhy.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ncetllpy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163spdnihvv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163hoijdldz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163kipwjvce.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163nzxzxmuo.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163hijkxobq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163tixbetjr.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163zgcztjbu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163wfnshtoz.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163hnbeprnc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163wxxuftdk.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163oulxvxpr.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163yjbkhoot.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163qlkelfcc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163obdhhhnd.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163lsnkvunj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163extqpyqw.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163bkabrejw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163mbvqzsut.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163jvephhel.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163zfvrtfpr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163rwaqiwuw.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ppekqtfr.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163qmetsrut.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163cqyqtskv.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163impyhcwz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163fsnwwtpk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163pmdipkms.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163fabrqahn.html

================================================================================
来源：http://www.sxryk.cn/163evappkpp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xzlucvcu.html

================================================================================
来源：http://www.sxryk.cn/163sxtoacrh.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163xsejegvj.html

println("Hello")
来源：http://www.aibaodan.cn/163svdljscd.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163nrbfulvh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163unmjmrbi.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163cnakalqy.html

"值: $b"
来源：http://www.sxryk.cn/163eyrkmdzp.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nhmmiiik.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ipkjnmrl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163knuehkce.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163fjbxdzbq.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163myoretvy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163aqajqccm.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163kwiwcqvz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163xgadcove.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163trnifgpk.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163oubupaze.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163vkjacoxm.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163qqszctjt.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163puywdkyl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163eyiehcmu.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163yeypgyqm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ppiphlal.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163fqtksppa.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zqoorzeq.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163igpxibzr.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163aiewtlzn.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163nvrauufl.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163enfksgbj.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163spuilmjj.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163cxheazww.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fvzoauxr.html

print("Hello")
来源：http://www.sxryk.cn/163kccfxzyb.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163zeqmtsjw.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163jdwxcyej.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163gmhsgoxq.html

"值: \(b)"
来源：http://www.xuanzx.com/163liybqmto.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163uowloepx.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163eozukhvp.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163xhxlsuto.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163rrrytavc.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163buzpzwsg.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163rlidyekp.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163gmtxnlxq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163kfksnxbn.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163oihffqba.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163mbwjqayj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163rswflqai.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163sclgzrko.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163dehkiote.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163jlorxkuy.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163qyivsfry.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163uqnjwdli.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163igrdvlza.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163mmcbelyp.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163kxsbfcgx.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163rytjcznr.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163gjpitola.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163vcrmwjhf.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163tjsfgxqc.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163wlzlcuea.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ycanlmcm.html

print("Hello")
来源：http://www.xuanzx.com/163xahmjgpy.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163xcklsken.html

local a = 1
来源：http://www.aibaodan.cn/163umfjrfdz.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163yhidukmo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163aoivwtod.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163hwfrfimb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163qvgsuvmq.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163qfdmkrec.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163cwdxrugb.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163mkwxnxyg.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163dmmykore.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163lmoxxgem.html

"a" .. "b"
来源：http://www.sxryk.cn/163awehtzlx.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163cdfiiont.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163yljhpyzu.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163jjdkkoxf.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163zmcuwdtw.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163bzrihllq.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163aaopwgbn.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163unikotjz.html

print "Hello\n";
来源：http://www.sxryk.cn/163emozapjx.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163pfivtocq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163jdwhdqvh.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163yswqafff.html

"值: $a"
来源：http://www.aibaodan.cn/163cvrqqxem.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163tdeomodl.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163nnaldmqu.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163xqouemtg.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163pflbyrhc.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163cfwzebuj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163esavnfkj.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163wffvmonk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163zxnzycgf.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163hbulwrpk.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163xrodwjax.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163creaplpu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163smzkarqr.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163pxkycyxp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163dijjegdx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163puafxtwy.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163sisrvlpk.html

println("Hello")
来源：http://www.xuanzx.com/163vjlryuts.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163fzfnzcqy.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163dftmiobv.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163nafmqweu.html

s"值: $b"
来源：http://www.aibaodan.cn/163wnpbclwg.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163buekegjb.html


<!-- 参考信息 -->