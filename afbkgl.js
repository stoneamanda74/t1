外链999!wailian999！

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163keexqhjo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163edikhfei.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163qispfary.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163sjlduxca.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163dkvmneen.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ztfmywvt.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ckgaakul.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163chlgibsf.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163rruhevql.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163dkurbnmn.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163yyjpxlyd.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zxtjkbdy.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163afdbviqb.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163aklbgksd.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163mveyamdu.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163wyuggkpu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ihfgtkgg.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163saxymugk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163flypcnno.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163vnnoskcq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ekzsqmdn.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163kslrlkpi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163yzqnwgdn.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163lerjnyrh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163niodhajz.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163rjtdawol.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wbywmncp.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163obpykgjt.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163nqhvyxav.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163eossvyga.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163dxscpndy.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163lhocnbzk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163orojdhec.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163alvvamuw.html

time ./run.sh
来源：http://www.sxryk.cn/163lfgzxymp.html

================================================================================
来源：http://www.sxryk.cn/163qdeifgnc.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163wzanrlkg.html

================================================================================
来源：http://www.aibaodan.cn/163pttbgyaj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gtpnzngo.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bxuhldri.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163msqynwsn.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163bukhmqyf.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163rachixjl.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wxxboyga.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163jsifmoqd.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163sssfvwwz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163owvxgtzq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163jaenspfv.html

strlen(s)
来源：http://www.xuanzx.com/163vqaelnxw.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163anefvekf.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163rbfavfcd.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163iyjzhqsp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163lsegfajj.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163wbfwmeme.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163dipmckiz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163gbmmjwpr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163yjyvrywl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ysnmiicv.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163atwcbbxm.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163amgwsgbg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163debxhvnn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163plgvilsj.html

fclose(f);
来源：http://www.aibaodan.cn/163hkkpgrko.html

[S12] C：写文件
来源：http://www.xuanzx.com/163crsrealk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ffdngoak.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163azfoaxxw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163beppohrl.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163wcbsayqz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vvnmfxdk.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163yqnegneu.html

(double) a / b
来源：http://www.xuanzx.com/163issohwpf.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163nspdmyve.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163fybppeuh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163azbmmmgi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163usarxhfc.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163nszxczpn.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163hpoxkqyz.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163dqqiypzk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ufiwnyyi.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163smxztixe.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xsmwttje.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163cyodftnk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163oymvsgqk.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163emedxtpz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163uvqitgon.html

[S23] C：随机数
来源：http://www.sxryk.cn/163yszgignq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163rqmbcxob.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vwwnckza.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163uekyzido.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163swcmkini.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163iqlqnote.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ctczlfjc.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163whraqjmd.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163vxkgllji.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163yufypyyb.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ywwsezrc.html

static int counter = 0;
来源：http://www.sxryk.cn/163zpvrvnsm.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ocslhgkn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ohpjjrnd.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jhcgajyv.html

#ifndef X_H
来源：http://www.sxryk.cn/163joihxhnp.html

#define X_H
来源：http://www.sxryk.cn/163uolxupdf.html

#endif
来源：http://www.sxryk.cn/163uisgeuhw.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163pextqdor.html

#include <iostream>
来源：http://www.aibaodan.cn/163fmhxymcq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gkobnijy.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163tzpebtpn.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163cjsnhhfg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163lfdhpdee.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163oeatlvdl.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163nolcgaxt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163uobogija.html

[S35] C++：map
来源：http://www.sxryk.cn/163myiixknh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qzniixrv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163yanspmjq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dcqoozvb.html

[S37] C++：set
来源：http://www.sxryk.cn/163ijtijgmr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163pduuagrl.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163wczntjgu.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ggobvwzr.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163biswhlfv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163vmhsckoi.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163lngskhkh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163mojftglp.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163sxhumthl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163rzvkwsqk.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163dsvwkdut.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163vincfcgt.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163dkzbhybo.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ilfxgixs.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qketplyo.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163phwiqspg.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163icrmysxz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163aljhnloo.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163uqthueed.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163tbpfrdjf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163tumqohfd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163xgczpcwo.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163dynwnpxg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163bnywbbre.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163nkocqkzy.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163sxsfpdwy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ooyshaer.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163zlfduwol.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qeesiutl.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163cjmbodmg.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ksviqanu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163snexurvr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163tkvpwblj.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163haojumqw.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163enonazjw.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163opdovkvb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163rubymsln.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163lkyieimg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163jqxqhfla.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163gslclpta.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163pluyiakb.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163aprdqloi.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163wuwhgsqu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163oyxuiffn.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163gdfdjqek.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163gkftsptn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163rwyqnzyl.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163nforeewg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163axcmtspi.html

================================================================================
来源：http://www.xuanzx.com/163uwudeuce.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mcqpereu.html

================================================================================
来源：http://www.xuanzx.com/163hxslpdeg.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163qwleybqy.html

println("Hello")
来源：http://www.xuanzx.com/163fflrbjms.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zkezwvlc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163yxfggaev.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163xsnowgrp.html

"值: $b"
来源：http://www.aibaodan.cn/163tlvmdiyk.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163whwpsldf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ryndflfo.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163yyyvgmpa.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163agsxmsrg.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163yeffssxd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163wrnkfsbt.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163mppcmjij.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163eclrikuf.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163rtbiddtt.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163vuylrsfy.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163kqycxbpi.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163xtovnoyw.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163mvgptjtu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vgodvdhj.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163wpmizrym.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163luwffeiz.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163alychdcs.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163awxylepf.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ezaqqxcy.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163xpslwhyz.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163zmsxoidc.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163pvndslpj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163hxvgyzpw.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ibmhppnv.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163kloamdze.html

print("Hello")
来源：http://www.aibaodan.cn/163soilhkzf.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163drgoxykc.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163lgivsymu.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163dkkdaehv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ywiwockl.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163csgvcmvv.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163drpnkvic.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163jtmswrsx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163vkmvbpkr.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163qwlrixvp.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163pptiojur.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163bufqbyks.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163nxawdhov.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163tingrbsr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163udceigqw.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163erdefjge.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163nzkyaqva.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163yyihnvli.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163onjlyeuj.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163xpulwumg.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163wfiojmmu.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163hmclgltn.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163sxbvicyn.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163pmttufzk.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ytgcxrwf.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163bqtegdsl.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ytywyosz.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163pyngzwcc.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163qkeoroji.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ssskumsx.html

print("Hello")
来源：http://www.xuanzx.com/163izmclwky.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163tnwcjnsp.html

local a = 1
来源：http://www.sxryk.cn/163puwdlawe.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163indjohxg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163mtreblsl.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163plqhpiwd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163mlwkdjqm.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163yzhbswfa.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163zxyfutnu.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163fxhfzxwi.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ceekaofe.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163pnnoirty.html

"a" .. "b"
来源：http://www.sxryk.cn/163owtwwocz.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163twwmppmh.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163woovsxav.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163hkuacdfr.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163payciuvp.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163zmismkqu.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163gzhrtqwc.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163xbnzjfzy.html

print "Hello\n";
来源：http://www.xuanzx.com/163kpodipho.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163bwkkollj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163oakfheac.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163kscnldiv.html

"值: $a"
来源：http://www.xuanzx.com/163gkkulcap.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163njyyjzet.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163lxfgslfd.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163pnmampnc.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163tuhdawpw.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163fjjaskzv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163yajckwtn.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163rwqacgjr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163aujgnnze.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163aplbkgys.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ugufiitt.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hieqzyqb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163trkishjs.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163cuwzrjsg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163lvsmjuip.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ffxqhotj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163hnbuovlt.html

println("Hello")
来源：http://www.xuanzx.com/163ccpvbgbd.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163nawrnkvs.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163tpcadbsk.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163yuvltkxe.html

s"值: $b"
来源：http://www.aibaodan.cn/163bpvwkwgx.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163enkkzlae.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163gwwuzbpb.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163skwbxhnq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163btmzdmnf.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163pyygozpe.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163kegqpmyj.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163sdneaeld.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163wkyxsqmw.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163kxjvuijp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tbxdxpnz.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163tbnnrtvo.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163scgysqqx.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163mywrndoh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163vpfjpbev.html

================================================================================
来源：http://www.sxryk.cn/163iviigmcb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163piayjpqe.html

================================================================================
来源：http://www.sxryk.cn/163khtstglr.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163xrioslzv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163xqhxgpmd.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163obqaaplo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163totkxtqk.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163yityweqt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163vfttjrzf.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163icabmusm.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163goqxmgbu.html


<!-- 参考信息 -->