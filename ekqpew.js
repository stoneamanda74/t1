外链999!wailian999！

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163kfaoptjh.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xtfgxltq.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163dpuaicqi.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163eswyrszg.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163fqzhqzfh.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163lrencdge.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163owcqagvl.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163uiwttand.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163fbcoopql.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163yqqbybnt.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163mgyndlyn.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163wfmqzvxa.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163sjdtzccg.html

[R50] awk 求和
来源：http://www.xuanzx.com/163srzzqzme.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163dsbvxzfn.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163zlxzmqxq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163evvzcuif.html

[R52] 统计行数
来源：http://www.sxryk.cn/163upakcyyk.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ujfzntpf.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163qjlktewh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163fnokmacc.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163skapnrlz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zazgwbsy.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163hftjxfsw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163mknbrdra.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163dfhzgzcs.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ifdoqxni.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163cjrcawfz.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163dspruqcj.html

[R58] 下载文件
来源：http://www.xuanzx.com/163nwcwazyj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ovtlcjul.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163piuuvsya.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hgzjprzm.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163rkozobuw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163lywikrti.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163tazgtnid.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ilhbqzti.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163pjkfhukd.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163buzovdui.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163pjibekap.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163kjuulmvp.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163muxgfrvb.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jpxrmoni.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163pecnpawo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qdgegveo.html

[R66] 定时任务
来源：http://www.sxryk.cn/163lyxbtnkf.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163jeqnmzst.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163nxjmykys.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163whdxudhz.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163nnvxbksc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fnlutlhy.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163kdsbwuls.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163frufshpl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163zbthkgaq.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ttlvscon.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163telwtnxk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ykkulpla.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163scjgrjjs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jehiwciy.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163smkamlgo.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ubvjdypb.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ujqhkdio.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163dzwzsfab.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163nwbyipkx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ppuyzemu.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hvqrccxo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yflxymoo.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163jbjlgpfq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gwpezban.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163tgnpmtds.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kntoicjr.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163sawtuesd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mygtmqsj.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163aorbetki.html

time ./run.sh
来源：http://www.xuanzx.com/163tmhcmcji.html

================================================================================
来源：http://www.aibaodan.cn/163wqtlpnuk.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163iufqsraf.html

================================================================================
来源：http://www.xuanzx.com/163flwzrzbl.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163lyzhoqww.html

#include <stdio.h>
来源：http://www.xuanzx.com/163srkpdhrl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163pekyrlep.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163vrhtiobs.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163whcecuxv.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163juzvbvfd.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hbecoezp.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163lgynijoi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163pdbncptz.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163svwydolv.html

strlen(s)
来源：http://www.sxryk.cn/163kcptkgbk.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163kyyzdjvs.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163gxnegefq.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163fayxumah.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163bueamxvw.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wqalrjmv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ugxjrtpg.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163leinsdha.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163iexiphho.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163zpvhdmqu.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163nkkkbjqe.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163xfvbkinm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163qoacelop.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163gydtfmii.html

fclose(f);
来源：http://www.xuanzx.com/163kbjocsis.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163whcmlczx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163fsopmweh.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163nxrzeaxf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163mqtaayvh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163afbnosuc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163yppsffua.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163rhojeive.html

(double) a / b
来源：http://www.sxryk.cn/163xmsirywe.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163tokfvpdh.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163zxxmpwjs.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163aykihllm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163kmemnmti.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163claariuy.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163snythabr.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163jsxtvann.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jcmqwhpe.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163rrojerry.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ieiydlfl.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ahiirtfr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163lydpjuvy.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163iaetlqkt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163rnktimjq.html

[S23] C：随机数
来源：http://www.xuanzx.com/163nbepwtqd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163gywsbtvj.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163rsdywihg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163yqonykrg.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163wijasowl.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163xaaynluh.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163oukkgvtg.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ykosqgpd.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163cvsjgddb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bexpcvmv.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163jquvizjn.html

static int counter = 0;
来源：http://www.xuanzx.com/163feudwgtq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163hehrocrc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163djhlfvka.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163hvxlenvj.html

#ifndef X_H
来源：http://www.sxryk.cn/163nducyqcm.html

#define X_H
来源：http://www.aibaodan.cn/163bntphjel.html

#endif
来源：http://www.sxryk.cn/163zncswyzc.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163getrxkyd.html

#include <iostream>
来源：http://www.aibaodan.cn/163znxkonol.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ttsqmfbk.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163pbtisjxl.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163kkvymfmv.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163tbednizq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163aljzczuu.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163lzsfibdp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163kuzwvitx.html

[S35] C++：map
来源：http://www.xuanzx.com/163ybmwmrqu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vlrydqpw.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163okmvogrd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163aoagaehh.html

[S37] C++：set
来源：http://www.xuanzx.com/163euluqmja.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163akffjvuk.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163leehddgn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rdhjxjnm.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ngjszmwx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163pygusffi.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163eycbyphe.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163sayuhncl.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163arelionk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163yawkpmdg.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163jrodxhur.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xbfilazm.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163cwevzbjf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163rzhjhsxf.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zkhtfuxt.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163xgkqcyiy.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163spdjlybd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163iwslfxml.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163iorwjoqi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163dosfdnen.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163vyjwwkno.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fyexdxso.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163lrrccsmq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163lotflpee.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163wcqxedfj.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163cegijnmu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163saiyumdw.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163rsuyxrds.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163tuwdhikl.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vjvhwrzi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163geeyhxdw.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163hxsikwbt.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ddbiskqd.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163fzogsdll.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163jwxhmdgn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163mcrenpcm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163inocdttx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163qdzvrtbc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163whbkzlhq.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163goukmppp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163npratgbw.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163cgdkggsg.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163awpxthib.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163nosfdovp.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163cvxcshlo.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163mesgyzsd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163zcwmxznu.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rsvfeter.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163xofnrrjc.html

================================================================================
来源：http://www.sxryk.cn/163npkaqnql.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163aktioygs.html

================================================================================
来源：http://www.xuanzx.com/163hzyvdxgf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163xmvjsuqw.html

println("Hello")
来源：http://www.sxryk.cn/163fsblyzhp.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163arlbgsuz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163xdihdkkr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fxryjzhc.html

"值: $b"
来源：http://www.sxryk.cn/163tngknqhe.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163wuqbyukx.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163cbfmlwnn.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lyokcyuv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163lrmxrrpa.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hcnbxizr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163frrqderk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163uvgifeli.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163osovzmqf.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163zmmcczfn.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163fndeuiap.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163htgefyqk.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163iairmnzb.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nbarvsws.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163dforoybz.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163elcxrjjq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163yjrlowys.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163uvjjvffd.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163saapsmre.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163qfmdlype.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163beuxpygm.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163bqmevxct.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163txwfitlm.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163mcfixrvg.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163mxdiqnts.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163pshcehas.html

print("Hello")
来源：http://www.xuanzx.com/163giqtgwld.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163mxcblzdy.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163zizbabac.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163omtyiosi.html

"值: \(b)"
来源：http://www.aibaodan.cn/163kfexgnes.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163crkyibdr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163thgjedwa.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163xkcgzyga.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qlrodxhl.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163kurwkckx.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163bwkzlzop.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163myeahawu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163aazclzzr.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163tjshvoti.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163dbpvjjlp.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163jurcwfad.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163iaukmphh.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163wozdoitg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163mabzbqjx.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163nvnbvwjr.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163menxjyti.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ixsahwcs.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163aeblusxx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163dwyuaqxk.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qjnazlaq.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163iowyzbxt.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163vqfpygtz.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163zoypjrml.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163miwhyoci.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163mtqaikyc.html

print("Hello")
来源：http://www.xuanzx.com/163qhbirzgl.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163zwdnlomj.html

local a = 1
来源：http://www.aibaodan.cn/163ppkslack.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163rixlbfkv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ojtxlxqf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ipqzickw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163vuzpxzvu.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163mqhunhek.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163nwfguqkf.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163izemzuuu.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wfbjdsus.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163moprtwuw.html

"a" .. "b"
来源：http://www.aibaodan.cn/163nyiavyvp.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163rlhcaabu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163wkrxbalq.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163vwzvtrtq.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163njzhbzvs.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163klcivvur.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163sdtcgzop.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163uvceismm.html

print "Hello\n";
来源：http://www.xuanzx.com/163bxungkwr.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wuvvgkeq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163yyvapnkg.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163foagkvzd.html

"值: $a"
来源：http://www.sxryk.cn/163akjqkhoc.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163loeohkwd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163wrhkbqrg.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163dwbaxszo.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163yuovtlox.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ijwuyrwg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163gjodwfzw.html


<!-- 参考信息 -->