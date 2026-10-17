外链999!wailian999！

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163bjilvxje.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163amhgcrui.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163gaawclbv.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ysoafpva.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163wgokzjog.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163eoqntgxk.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163qnpxpgbc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163rijwffpy.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163cqwoyoqn.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163fxxutzkz.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163penhpedl.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163reevnpyk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163bpxivavm.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163butcibph.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163atkjpiei.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163xzgcufpv.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163skjahdez.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ifeqsthj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163wldaonnv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163oqwaobaq.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ympvnazq.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163vzovuhpf.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jdjxxgpw.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163mvhnsyip.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163swesjptf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ckxadnxc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163oqrjsecb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163bsauvtzo.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163fjaovllf.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lcqomfaj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163hdoizhgk.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163cfoqzzoq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163wsktivhb.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wlkmfewg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wqyrulkf.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163qeegsxnl.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ckkqzchv.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163hwsdqqtj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163fcghsynd.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ommzuagd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jiltarqw.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163rzvwkohu.html

time ./run.sh
来源：http://www.sxryk.cn/163avtfgyxl.html

================================================================================
来源：http://www.xuanzx.com/163xmrxajwx.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qrnpzhta.html

================================================================================
来源：http://www.aibaodan.cn/163jtsrmjet.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163mmgrqdtt.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163byojwspj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163jdtteogb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163dxbytshv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163sonzyeyg.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163wsaimlif.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163yinfnmlw.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163xnmyqmll.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bxjlrrfl.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163gfghthpd.html

strlen(s)
来源：http://www.sxryk.cn/163qmpjbxjf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163wrslmwls.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163czvhwmcu.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163xfatjhqa.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163vambbvyi.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163afxxlrux.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ozlvfbgg.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ddbfejhe.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163hlcyisqt.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163dgzmfauh.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163gmxzoecd.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wxatyeoc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163cdozefbb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163fbhvzrns.html

fclose(f);
来源：http://www.xuanzx.com/163twaltwvr.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hesumnzo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163gwxotntx.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zmirubqq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163xjdrgwdh.html

[S14] C：枚举
来源：http://www.xuanzx.com/163lytlqqrz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ogabzdmc.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ihqebyeb.html

(double) a / b
来源：http://www.aibaodan.cn/163gdyuqksc.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163qxodmbiy.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163enmsaubq.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163cdsnjjta.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163vgplmvlh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163obkgzame.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163shufmwfw.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163etxloxmw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163fyjmaldn.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163vkwrumkt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163izquplcg.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163icfcyyur.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163igfvcray.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nendfsrl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163hunfaaxv.html

[S23] C：随机数
来源：http://www.sxryk.cn/163xhdimfff.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163aouyhkrh.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163naqflhmm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163sbdbvxdv.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163jpqxcoga.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163rbmuoyml.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163knsxxgss.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163oqkfsukl.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163tntmouop.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163elmqxnth.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zzrnmacp.html

static int counter = 0;
来源：http://www.xuanzx.com/163bfcozvqs.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163lthargeo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163lctcmlvt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163derzxhoz.html

#ifndef X_H
来源：http://www.aibaodan.cn/163gcgvrddb.html

#define X_H
来源：http://www.xuanzx.com/163wkkofgyy.html

#endif
来源：http://www.aibaodan.cn/163ahjrjech.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163gpjuomkl.html

#include <iostream>
来源：http://www.xuanzx.com/163wfxmiuuj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163kdnybpcd.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163fdidshmh.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163aczbuile.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163tpdtovny.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163dsqotnkh.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163elamdrcu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xtwnbhfd.html

[S35] C++：map
来源：http://www.aibaodan.cn/163mibrcegb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163uirayesx.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163fyszmpqv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163migtaxih.html

[S37] C++：set
来源：http://www.sxryk.cn/163hbzpiqsj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163jlslqmef.html

[S38] C++：排序
来源：http://www.sxryk.cn/163fjztdgqg.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163pheenmuk.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163wghtmiaz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163tpsqjhxs.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kaujwcsh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163tiaxjvrr.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jhkfqvmw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163acmgftdh.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163gmvemqov.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163dilwcpfv.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ylmzfdul.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163tlwfynbc.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163nzrncwyg.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wiigphbn.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163jrulaacq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163lgdvdxcn.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163mfzmgufa.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163rhjvttjt.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163kfcyglwv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163txlygdiv.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ertwglpw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163xosdtnun.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163mupivinp.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163cqqqqqfu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163tviyflyr.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163lavoxwvs.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163jbjmsjnj.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163tyucxyaq.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163jbryaryh.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163bukispfd.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163tdcwkwuq.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163qwhovcaf.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163eenqycjp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163zwdmfcji.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163garhifyq.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163cuqcqckw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vnexbujp.html

[S56] C++：optional
来源：http://www.sxryk.cn/163tegoniek.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ttgqjzbb.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163kxpshuzp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163boiehstc.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163htybjfnr.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163rxeubdyf.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163znpzelhm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163qmvrzyub.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ydnlgdwj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163pwfasqae.html

================================================================================
来源：http://www.sxryk.cn/163wqvjhqij.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163fcycrafl.html

================================================================================
来源：http://www.sxryk.cn/163trrnexkj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163gjyblbty.html

println("Hello")
来源：http://www.aibaodan.cn/163uznmtgpc.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163amfcncfs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ucyrejge.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qwakzjko.html

"值: $b"
来源：http://www.xuanzx.com/163jjfqhfor.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vfwiilte.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163dxpetgoq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163oauaycux.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163uaoyompq.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jbjeuizw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jihpwcad.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163zzzzgjtz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163xonwgmnu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kdxsivuq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163eyvnlkap.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ombjswdg.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163igaidvcp.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163svoyljuh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gqspqpiv.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163jazjafwr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163cofpyeos.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zxfsuzli.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163qcfxbvlj.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xgkldkwj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163kwbzgwbo.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163xxdrdrro.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163dpmfxjzv.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163wandcygm.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163rghkkljm.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163oyrrgmkx.html

print("Hello")
来源：http://www.xuanzx.com/163cdsbikqm.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163xqdgfgpi.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163bagklxcq.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163xsuzpvnz.html

"值: \(b)"
来源：http://www.xuanzx.com/163yezehyhq.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163thjcmebe.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163xhousdgj.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163bwfxvtbc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163tzkfvulk.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163goysemhc.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jgrlostj.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163shnflush.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163pvcuzbei.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163lblxploe.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163vraxtjvq.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163xkuukzux.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163yckplsry.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163xitmkpli.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163brbkslfd.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163zuanmplu.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163albvcnnh.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163mgnhqtrq.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163fzqviatz.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163zzfzsozy.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163spxivlng.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163dgqyndvb.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163qdntzofu.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163zdkbwcwj.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163irfvdhcy.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163inzphxvt.html

print("Hello")
来源：http://www.xuanzx.com/163ryrgayiv.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163dwgkewza.html

local a = 1
来源：http://www.sxryk.cn/163nuftzeyu.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163xfqdvwuy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163gzlxalmg.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ghlzklgn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163jlfvaxvr.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163sgoecpzh.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163wkktgryd.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ldduqesf.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163arrzupsn.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163suomlbqz.html

"a" .. "b"
来源：http://www.aibaodan.cn/163nqvozfuk.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163njqtgmrf.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163iwifrppw.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163fulsebxf.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163xepnymji.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163uzgnqktw.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163auzcomba.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163avjeeakd.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ajghbvru.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163kjnssqlr.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163dzftslsn.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163xltanhxy.html

"值: $a"
来源：http://www.aibaodan.cn/163ellqxasa.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163xqbaueih.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163fndvojlv.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ntfckzgc.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163fvctecqk.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163hmylxtcm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163pfbdxmag.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163uizoweyy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163uceliwej.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ceyidyyo.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163nhckjlte.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163vmetjzmb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163wfcmxtbs.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163otwytybe.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163tixwzcwq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163jlxomanh.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163aranvbti.html

println("Hello")
来源：http://www.sxryk.cn/163avkkxoaq.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163glpotmws.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163zxpldlgn.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163zcouyvxk.html

s"值: $b"
来源：http://www.aibaodan.cn/163vfrozfza.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163bddiakch.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163gjodusvr.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163fgzdxppk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163fosvtptg.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163loxaosxv.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163rjlnxipc.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163lpvdfdzx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163vdfjyjzx.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hlufnkyo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163fhlsvqdp.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163cvltaejy.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163sioeaise.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163yzjvfdyh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163lhnyxrgw.html

================================================================================
来源：http://www.sxryk.cn/163kkatqhbt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163sjyqffwi.html

================================================================================
来源：http://www.aibaodan.cn/163gguqnidr.html


<!-- 参考信息 -->