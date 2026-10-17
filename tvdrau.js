外链999!wailian999！

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163jpxkykar.html

[R50] awk 求和
来源：http://www.sxryk.cn/163obrnrqru.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kdexuwkz.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163qrvyeejx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ppwfdfiy.html

[R52] 统计行数
来源：http://www.xuanzx.com/163mngtcypl.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ysnsdnwf.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163korvarsq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163hutrwzzo.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ocnuofpi.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163sygqakpb.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vnjcwkar.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163tnkicxtl.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163xhbecjxh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163vyjlqhlr.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163zpstdzgw.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163cbxyinmt.html

[R58] 下载文件
来源：http://www.xuanzx.com/163osggaixd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163fjcxnxev.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163dfqscvzn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163wkcyhpot.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163xarwmicg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ywztttwu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163lzixwrrw.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ftdziaex.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163lodbgmhz.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163alccncyk.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163hzqmreft.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163xgxttjmx.html

[R64] 结束进程
来源：http://www.xuanzx.com/163cfnccvpc.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163nnhyosoy.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163rxrbnopw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163lnfxcfqv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163gvjurdfq.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ntafmtlm.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163spmptaki.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163hqchvgut.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163qujbtdsr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163pwuubrig.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163bttvroxo.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163qaneuopd.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163uzljfzit.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ntseetdq.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163pnbyllur.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163uwzkktzb.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163xjacvhek.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163eoylwnjs.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163iuefhihr.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163kofhtjfz.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163fwcalspn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hdymrpku.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163hnevfrhq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163smgrriob.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ocirstzi.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ogmzufsh.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163jllyqzky.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163nzaoeytx.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163efftczrs.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163gpxqfgup.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163tnsaiuyi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163dcxmuoqm.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163epbrrzry.html

time ./run.sh
来源：http://www.sxryk.cn/163qzyixram.html

================================================================================
来源：http://www.aibaodan.cn/163fguqxsxl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163tsbpqlhf.html

================================================================================
来源：http://www.sxryk.cn/163jqjeqllh.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163axgqhoyt.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163aolzwuqp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ngtaaajl.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163mnxzmuuh.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163yfzbvrhq.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163atalsmgb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163dqnehnix.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163hkruuitk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163hmartlkc.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163qbdihtys.html

strlen(s)
来源：http://www.sxryk.cn/163oefqzkdc.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163phacxjnt.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ctucsfsp.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163jygjzvag.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163rbaxhnag.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163lnlalogs.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163dfkufgec.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163pajlzyxo.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163qhuwsghf.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163mqttbmff.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163tnwxxyhh.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163tyjkaneg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163kvadnklw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163tyvuqotc.html

fclose(f);
来源：http://www.sxryk.cn/163ucidqkuz.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163eclngqbb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163djsrrvrl.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163revlcndv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163pmyizhbn.html

[S14] C：枚举
来源：http://www.xuanzx.com/163gmqqppvd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163vpymxwuu.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163vnrdujyh.html

(double) a / b
来源：http://www.aibaodan.cn/163nftytnbl.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vrdmltjt.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163blmlbxao.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163mxvmjlpo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163cdtlnede.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163opvegaqj.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ztfypqae.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163btoiihwg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163uyoqqjms.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163qetltrxp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163kqsbxjvn.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163pkaszfxn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163klntrzgg.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163zzodptcc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163sqkgdxok.html

[S23] C：随机数
来源：http://www.sxryk.cn/163smwiajys.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163rfoqiknx.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hzasfoqu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163pjmodaxn.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ptzusseh.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163kmpoyjza.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163pszspxaa.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163awjzlhbg.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163jwkdqrbf.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163dzljtalo.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tzkaasiv.html

static int counter = 0;
来源：http://www.aibaodan.cn/163drfotvqq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163gyyulpco.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163sgxtzjpw.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163coybirnw.html

#ifndef X_H
来源：http://www.aibaodan.cn/163nigkntim.html

#define X_H
来源：http://www.aibaodan.cn/163nashlxhi.html

#endif
来源：http://www.aibaodan.cn/163uanfajyy.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zbmdoadx.html

#include <iostream>
来源：http://www.sxryk.cn/163dtwuqrdm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163qgpjjrgx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163totzjdld.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163dtyogqux.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163jzeaznmc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163qwtpaczr.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163evtxpbxu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163bprcaeun.html

[S35] C++：map
来源：http://www.xuanzx.com/163qvawyeuz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ntqgwgqv.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gxanycer.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163sjgpnanr.html

[S37] C++：set
来源：http://www.sxryk.cn/163nhcncfzp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163kfwywwnf.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163izcrpols.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163kmnjiezf.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163psqgfahl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163tpecomoi.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163sqcoropv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163gvzpjobj.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163hvmlecgs.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ccvtiqba.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163jfbcjguz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163hcbjxwjs.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163exnzgbcb.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163eyvfkpii.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163taxugrpv.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163nzpfbawp.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163zqqspxqp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163sytluajw.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163dgwygmsa.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163gipkfbxb.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163jypcwgiz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163regtuptz.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163tglfqxxm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163dmohqcfs.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163dqvdeghp.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163uefnydyg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163excgcikb.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163dvpzkgcg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lnwyjoml.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163duoallst.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xhomzzzh.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163hoolbbha.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163mirdkpbn.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163akubdnvf.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ibejxnpv.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163vkjdjxoj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163lcpljcih.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163wwgxulsw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163tkgbnlra.html

[S56] C++：optional
来源：http://www.sxryk.cn/163subolrtx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ubsflvqr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ggczwrds.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163zcuqwjcv.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xhbfzdiz.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qrtemdyd.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163lvwalnqz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163wxiqpdzv.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163gbvwfxqx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163jvhsjrnt.html

================================================================================
来源：http://www.xuanzx.com/163nmbsortz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163dvzjxred.html

================================================================================
来源：http://www.sxryk.cn/163grhxzmkm.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163cmsjyree.html

println("Hello")
来源：http://www.aibaodan.cn/163nphwisyx.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ceqsbnrk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163mspehrat.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ihlsjxuf.html

"值: $b"
来源：http://www.aibaodan.cn/163ompkidej.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163nhbersxn.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163wtpnaqum.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163daihlfcb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163zbzplnms.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163vgaxpbzj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163dzgguuxs.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163giprtswm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163obrcjvxn.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163hxahcpuj.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vswpvtff.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163dytdmucl.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163whktweyd.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ybufpaad.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ujmlynnw.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zzpgelqt.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163lkmxnwbz.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163nhjfzneo.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163waidekwu.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163fxsipedq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163xxhtxbzd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163wnpjykel.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163zinunndh.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163tlclvmpr.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163abeyecny.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163gmgcejep.html

print("Hello")
来源：http://www.xuanzx.com/163tvedqoeo.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163jqowipra.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163iliccmku.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163rmzuedyf.html

"值: \(b)"
来源：http://www.aibaodan.cn/163slwjoexi.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163sbwxmfvz.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163fawtvkha.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163rsaahlhf.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ubbnsrul.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163vbiiaiqy.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163expehgfc.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163mrrqacqn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163icnrmfbl.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163qajdvztq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163bwmaclkj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163bpnuccxa.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163xuawuuma.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163tztyocku.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jpplfegh.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163xteyoziz.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163rxxrkmuv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163jxtscpqa.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163vjvqtjgm.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163nexdqncs.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zgvvygkk.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163surpfajx.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163pezmidrz.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ayaxihxd.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163tmkloill.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163gdtcjkul.html

print("Hello")
来源：http://www.aibaodan.cn/163hkkvaeom.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163swweatbp.html

local a = 1
来源：http://www.sxryk.cn/163agqbmafp.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163intmaone.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163pnpvhbni.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163kqtdugvn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ygedqvxo.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163fzeqlbiq.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163yhohobpw.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163wtydzdvo.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163skzwemby.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163wwsyzokl.html

"a" .. "b"
来源：http://www.xuanzx.com/163xiuvicff.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163tpmokpqo.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163livwwajg.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163jjsffdgv.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163fqqgzstu.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163hmnmheeq.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163zypzydao.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163yovjwfsk.html

print "Hello\n";
来源：http://www.sxryk.cn/163hjjchgnv.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163nrexxsmt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163pjaerfwp.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163medkfptc.html

"值: $a"
来源：http://www.xuanzx.com/163vrnqdqbn.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163psckqpsl.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163owdvqmoo.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163otubpjhz.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163fnfgohuv.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163blwqfzah.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163wkhjmcwx.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ujuuruzz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163jragaxdo.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163rfwwyasj.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qfthhioe.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163itcqklvl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163qhhkxtyl.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163fpvnrxoz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163mnexwbhk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163kudltklc.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163bimpronw.html

println("Hello")
来源：http://www.sxryk.cn/163ecpmlrri.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163cpkhqdkh.html


<!-- 参考信息 -->