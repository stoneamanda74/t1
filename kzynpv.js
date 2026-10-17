外链999!wailian999！

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163zmvquzcc.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ewtypzcn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163qbcapdmg.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163crpxyscg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hddtajxy.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163xtuxyixr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163njdghhjm.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163txuxmobw.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163blhhzcov.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163rjmhtjwb.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163fmbbgwxd.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163nuprrpkl.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163nnuzncxw.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163kjfudpqc.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163coiathqd.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163kozutqzp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163expbmmxf.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ytsieort.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163fwsleevh.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ojzsvcye.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163rkqqezac.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163eixzmzbv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163slnfxykp.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163iafparca.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163vlsxzsik.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163vjpldmia.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163klzkwgie.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163hxgoivir.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163fznshlck.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163srpzmbvq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jobyukvk.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163lpsthyge.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163jarqgdey.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163byjuemzr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163omvbnbjf.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163shvexcbt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163omcgrkfk.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163hkehjfrl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xoxfgeww.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163oobjzmfq.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163aciirnha.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163gqsqlaud.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163sumqtajp.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163hmrvtpaq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163xtdcvpdn.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163tqtvnimj.html

time ./run.sh
来源：http://www.aibaodan.cn/163fncmngnc.html

================================================================================
来源：http://www.aibaodan.cn/163fqknlaey.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163kcrfnjzc.html

================================================================================
来源：http://www.xuanzx.com/163fhtuoenm.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163dnszitwh.html

#include <stdio.h>
来源：http://www.sxryk.cn/163iwyhneyc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163oyznpphb.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163krooocbf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163rxpbomhp.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kfbnoqfl.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163uthnmidi.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163wawtsxgl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163virtolkk.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tgzgewfs.html

strlen(s)
来源：http://www.aibaodan.cn/163qajjijqa.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163lvhgqfmk.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163bkorxvfj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163hoccmwfq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hutgzewc.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163tjqikxkn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bqwswpyj.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ojaupjhl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163qcejbgfz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163uzvnkzox.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163epekhkre.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mkqwcmou.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163qmbjdjie.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rratnsrt.html

fclose(f);
来源：http://www.aibaodan.cn/163zuxkzbav.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ueuixcbg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163rsofuybo.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ryikbcmm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163tyhmimej.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163lhlnperj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163wxcbmhzb.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zryylxxn.html

(double) a / b
来源：http://www.aibaodan.cn/163mkkloldt.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163rhajrteb.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ckkgssxn.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163uradjqip.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163atkmicig.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163enubvizc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163lgzhlvnk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ijuaxdwb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bopcjcvs.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163qddabffq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ahzirwxf.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163bwcomncr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163wezuarlh.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163eocesfbg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163hjuntzdm.html

[S23] C：随机数
来源：http://www.xuanzx.com/163mqqwwxyk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163bmsxbykj.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ryvvqnwr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163tpodvrzf.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ylbznbiz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163mjccwrql.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163mivjvdtz.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163otafjwrz.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163lemnovcs.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ftlakbzr.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tpiupusd.html

static int counter = 0;
来源：http://www.xuanzx.com/163ozqqjqok.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163vghkmfla.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163elkcjpna.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163qwxlbmmx.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bpuagoxl.html

#define X_H
来源：http://www.xuanzx.com/163rjjmsule.html

#endif
来源：http://www.sxryk.cn/163mmpdsqmt.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163xuczuycv.html

#include <iostream>
来源：http://www.xuanzx.com/163cxcbsanx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163fuyhfvnu.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163fkhijvav.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163eymgtfmc.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163cfhntccb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163onjocjub.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163fgqhdsyd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163tnnpvwrp.html

[S35] C++：map
来源：http://www.sxryk.cn/163fdhxxgap.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dbizhika.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163oinrqmvm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dtmxtevh.html

[S37] C++：set
来源：http://www.sxryk.cn/163gosohxvx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163yxpiqfge.html

[S38] C++：排序
来源：http://www.sxryk.cn/163knuexkjq.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163gxozrkww.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ckkrqfba.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163viohbxin.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163owidughk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163gnpxxrzl.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163xegadcgn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qpceeqrp.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163jckfqhpj.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163xurrdvsh.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163fkueiiki.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ydgshoji.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163iggpgacr.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163zukpfjtq.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163uecawqit.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163pwwikhjd.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rogjnzsp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163dkcdaskw.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163qhpsrrea.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ibyodgtm.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163vxoreiia.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163danhusja.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fyonvlcc.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163xikohtez.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jsmwgsbz.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ehrjfuae.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lvwjrpoy.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163wvgaufeg.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163cjfpwnco.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ywlgxbwc.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163tghiuxyx.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163upzwayup.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163eijlqbge.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163qktwtrrp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163lecaevyg.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163pizekuhu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163zdujndbd.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163rrutbgaf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163nlxsylzg.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ytkqxoas.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163vpvgirrx.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163gdfkhltq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ybvrfznu.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163keisoehe.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163hvltbyox.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163pmgwakjz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163pjxflqdl.html

================================================================================
来源：http://www.xuanzx.com/163dguicsrt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163cpijqbpc.html

================================================================================
来源：http://www.aibaodan.cn/163hvhfjyqa.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kfofxjoq.html

println("Hello")
来源：http://www.aibaodan.cn/163cwvaabrq.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163bdydznjw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163apwmppmx.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163yyfuvofl.html

"值: $b"
来源：http://www.aibaodan.cn/163knhsbhqj.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163tvebxbmt.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163aekmzpqr.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163xsgcwxew.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163bwsyyssz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163iluxbvky.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163fozqtckg.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163qnljxiqr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163fxundmyq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163cepshfcm.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vgvwnopz.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163sdyfihiv.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163bchounoh.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ktgwuzmk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rzjzomjo.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163khzocupv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ftydeobc.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163exrujzbg.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163nhotqolg.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163nrcddjqr.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163cnkpcxvw.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163balhrqjj.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hwueejvq.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163nzslqhih.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163tdktsgwi.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163jcbarnuv.html

print("Hello")
来源：http://www.xuanzx.com/163tqjnsqdy.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163mtsvrvam.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163bmqnztxe.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163iqgigttg.html

"值: \(b)"
来源：http://www.aibaodan.cn/163vwmhnhav.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163dsjfaahw.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163hvfrqfnb.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163rxxucrry.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163issygiku.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ywnnuxoe.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163lcucosen.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163iyntigrr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163sawpfwzw.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ltjafosk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ekxmdwmy.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163yvxdlzxh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ovfegdrn.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163gxseirxq.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163aplkyedc.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163eqtrvwml.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163nlitzhwn.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163idsxpjcb.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ruuuxzzt.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163crluhifm.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163xngifbfa.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163vzpbltjv.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163rxkyromb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163xofrxrhi.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ppvqehev.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163okdfbbax.html

print("Hello")
来源：http://www.xuanzx.com/163qtjzcvbq.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163bhfdgzew.html

local a = 1
来源：http://www.sxryk.cn/163fuibltio.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163kofnlzkj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163udlrcrlb.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163dergpqtq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163qlkljgcw.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163pcaoczzv.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163iuxvoixu.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163mdzsdeva.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gibuswjh.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163hxyzmuhs.html

"a" .. "b"
来源：http://www.xuanzx.com/163ncbqbwjn.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163idyetagv.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163npfzpoat.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163sabxogbb.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163qegwyhfh.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ptqhclkg.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163sbwlymss.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ekrghejo.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ugywscey.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163luoxklky.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163djqxybnu.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163fnxejjim.html

"值: $a"
来源：http://www.aibaodan.cn/163xwesyfcc.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163xrlogfya.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163vcrduxjc.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163iwgjpfit.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163cuavdyzg.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163omemiryb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163sppurhsv.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ncfhmhzx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163twygxord.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163znzawatz.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ydrbicxf.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163mizupqzf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163zrzjwvyv.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ovcsnqyh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163oclguost.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163wjsijile.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163mbcoczmp.html

println("Hello")
来源：http://www.aibaodan.cn/163icmtypiw.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ioheubxz.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163icvvcqwf.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ctfvbwkx.html

s"值: $b"
来源：http://www.aibaodan.cn/163vjikwufy.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163yfvejitu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ozhxmuhz.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163xjmermcf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163mmflessj.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163prmmnoyk.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163xxbirigm.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163uimwxpav.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ksygnctm.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163zcjdztvz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163xqfqnphm.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ybposjxz.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163cnvdzbme.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163ixvuozom.html


<!-- 参考信息 -->