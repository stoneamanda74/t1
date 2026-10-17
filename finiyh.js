外链999!wailian999！

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163zwrktxpr.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163madlqdqf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163brihdskd.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ntgzoynn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163etjiayii.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163orroeopn.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163kzjsqbbf.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163lrmiwmsg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163cftkxtmr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163scqrgjer.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163brnuqefx.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ezxqmpob.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163nbwjvhtf.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ybtmdxtk.html

wc -l a.txt
来源：http://www.aibaodan.cn/163kahehymu.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163qmbahbmc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ynwhqxzh.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163xkmrktnc.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163jvpuveke.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163laekbiac.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163iglbzeld.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163kjjehmxn.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163aurvbxaz.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163pxskicht.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163lumekpef.html

[R58] 下载文件
来源：http://www.sxryk.cn/163wcozjtwc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wigksszx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163qdbergav.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163dswbberc.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163kgizhnrw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163axcqexkf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163slnnftjg.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163detsvwqv.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163aaerijjh.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163hgpxemox.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hzbyrhgr.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163oygnnfwy.html

[R64] 结束进程
来源：http://www.xuanzx.com/163vjvmewvs.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163sohiizfw.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ryeelinr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163igjddfvd.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163zzaikfhv.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163wmtaerqj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163korugsxw.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163guqawpwq.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163igwzpzef.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163vvbroqol.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163nruuewre.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ydzphxaq.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163kxfdychq.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163izqlonee.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163kmhrmfxj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163slweoqdq.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163atgblcsx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163lizsbule.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163tciiisvl.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163tgumfeqn.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163pnxjgrzt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163rpojypvg.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163zzeaxjoe.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wizzguzq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163dfoadpcp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mffcqaxu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ekuayxst.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163wbzubdrx.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qvdoukza.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163xhxklpef.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163phtmufim.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ooivjwgr.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wstwcuhp.html

time ./run.sh
来源：http://www.aibaodan.cn/163qjjphwtw.html

================================================================================
来源：http://www.sxryk.cn/163jonevqzx.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163yjhnqtvr.html

================================================================================
来源：http://www.sxryk.cn/163muvmbjsa.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163pgrrlvwh.html

#include <stdio.h>
来源：http://www.xuanzx.com/163mwbkpkrk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ikcirenn.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163rutsctcv.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163qdzsfhlb.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163pvmolgdg.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163kmulglma.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163hbcxskgw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rlnykhgx.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163fejfxrfg.html

strlen(s)
来源：http://www.xuanzx.com/163nivghxrw.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ktlbuozf.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163pddhizbk.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163pctntaid.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163dfunmdim.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163yvfjyuls.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163anakqfkd.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163zhiaubhd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163dnaqapus.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163lassmmiu.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ghtlwhls.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163luulhvhw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163mwbvniac.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163zihonrec.html

fclose(f);
来源：http://www.sxryk.cn/163tnkedtoy.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zpeqztza.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163eaxfudkn.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163jjfmcnvt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163qiifpyhs.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163zcsvixtx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qgtaoals.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ohgaviyw.html

(double) a / b
来源：http://www.sxryk.cn/163scdfudbd.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163tnnelbuv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163kitccxpa.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163aioqieii.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163kuyyrlgh.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163xgrrrtne.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163jkeuenlv.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163thmmwmnj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163prqqdwot.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163nyyzpjdn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163pnbqbcff.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163qxejyvih.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163nltrnuic.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163accrzcva.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163vsfhyepg.html

[S23] C：随机数
来源：http://www.xuanzx.com/163migwksnn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jabbkhuv.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163otnvagap.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163wnfischs.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163smxgacos.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163fgdraulp.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163lyvdnjlf.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163jqfzedpe.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ffkevott.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vnasdlnn.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163vhppndxk.html

static int counter = 0;
来源：http://www.xuanzx.com/163diltzpoq.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163vfxswaog.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163efxuxyft.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163gqgrmnbc.html

#ifndef X_H
来源：http://www.sxryk.cn/163brvcvvwq.html

#define X_H
来源：http://www.sxryk.cn/163onvsyfch.html

#endif
来源：http://www.xuanzx.com/163nztnhvsi.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163zplojbce.html

#include <iostream>
来源：http://www.sxryk.cn/163gtwvmgzb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bdnerkpk.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qxajyxhp.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163cnznzjgr.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163asnmgnma.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163fmbbkbqp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163mbqjdyxl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163gncuijoz.html

[S35] C++：map
来源：http://www.aibaodan.cn/163yeatgrpf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ntqzinjp.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163qjeeoxtb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dhnrqtip.html

[S37] C++：set
来源：http://www.sxryk.cn/163uvuxsark.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163qzztibbp.html

[S38] C++：排序
来源：http://www.sxryk.cn/163vavwbwtd.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163xzkozfbx.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163eaiccrzl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zosjesnf.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163yfpdpivr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163izlnvdjz.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163qlqpuvpu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ikogbvlo.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163fuufnrav.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163iswmzzou.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163tteyfblw.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163fqgdjkle.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163uctycamb.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163fgujvvro.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163yrqhzzsm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163thcoltiy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163xtejdjub.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163wcozlzrm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163frjosufu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163sfzqksww.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163wxoshtrd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vnipmyhw.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fbihucts.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163vrlatnwp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163pnhzlguu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163hixvcggq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163nyasayjc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163aibtlgfc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ysbjrmdz.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163gqzkzirh.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163lwtaxptn.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ifrixjnk.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163tlbdaikp.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163msyarbpg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163oyzlqfrk.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163hzrwnjuk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ybydmnbd.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ftcsuzko.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vxcbnsoh.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ftrqinin.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ftsmlozh.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mvgcswnp.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ylncbffk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163pojukyon.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163hfxczlex.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163diopijxb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163vljgznfd.html

================================================================================
来源：http://www.aibaodan.cn/163nvpjvwod.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163gagsdnaz.html

================================================================================
来源：http://www.aibaodan.cn/163rakslvgf.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163mxzzwjcf.html

println("Hello")
来源：http://www.xuanzx.com/163cemtvyab.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163xtzyecle.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163fqsfrsrg.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163dxmkjsrk.html

"值: $b"
来源：http://www.sxryk.cn/163ruysfsux.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163gcgcolut.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163hdibdrkq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163qxkraqbo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163levricxm.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163mgmnkznu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163mtkhuuut.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163rxrvvdlk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163yfhcvcms.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163eqedjqlp.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163buhcamag.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163twzdootm.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ywkdoeoi.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163hwilxyvm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163kvhabqfa.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163rgkbcjai.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ozlkrrcl.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163sawsaibs.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163uepcdujh.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163nghmgjvh.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163wufkglbe.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ofzuuwup.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163efkrcbpo.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163usrlynys.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163anwbkwxk.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163tpfxqrbc.html

print("Hello")
来源：http://www.xuanzx.com/163nhendlxn.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163upvmrosh.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163tqicwdgi.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163khivzlru.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dfbshlcn.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163lctifoom.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163fckqninn.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163vlgjejqu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163lurnpxxg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163gtflijep.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163qhemncfs.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163mmoyxmcm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163xegshncm.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ovyktsfe.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163saonfnox.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163lfgujepm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163rzdzmjoo.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163wqgicduf.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163tuxfodcy.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163xwjsstof.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163yraezypr.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163wkkcstvp.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163atntdpqd.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163eumgnmlm.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163imozgirz.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163xbwzgosx.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163yhsjxbcc.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163jvvbkfyp.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hlhextnm.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163pouugpue.html

print("Hello")
来源：http://www.aibaodan.cn/163lkqcwwci.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163lmgjcstq.html

local a = 1
来源：http://www.xuanzx.com/163mvodaotu.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ifimrccr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163jpcsljxp.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ebiitlpb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ieqceekh.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163kkgllrqn.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163spsgctbe.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163rcmdlzgf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163johwdwej.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163hkieanpm.html

"a" .. "b"
来源：http://www.xuanzx.com/163uadgisfn.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ibeakbtp.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163lmbqrodl.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163cjzqyrjw.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163frthxdni.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163mvedumwl.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163egllajlq.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163bnzwxsro.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ylnfazka.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163gcgxzxjb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163wmqiyooa.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163hgspvkrc.html

"值: $a"
来源：http://www.xuanzx.com/163fmcewrhq.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ehbotgvb.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163glpmlhun.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163dhwvrjvo.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163xygyiauo.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163trhevrje.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163yrpgovie.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163kqrfjvaj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hweoynjb.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163tqbwymdo.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163pghkpjou.html


<!-- 参考信息 -->