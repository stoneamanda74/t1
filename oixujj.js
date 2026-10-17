外链999!wailian999！

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163flzxlgfz.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163lifavwrq.html

wc -l < a.txt
来源：http://www.sxryk.cn/163uprznxjz.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163nguvikbn.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163waidacob.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163mecxcqls.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163easiossn.html

[R45] 批量删除
来源：http://www.sxryk.cn/163goxmzsri.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qodcusqq.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vqnruhgc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163xkfjawnk.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163gkawbntl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163acnjbnyp.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163kzzkelgg.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163kdkcvccd.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ygkpknjf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163rojaixrd.html

[R50] awk 求和
来源：http://www.sxryk.cn/163whfpacau.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163lwpuwdqm.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163qbihichs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163craksxop.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ppycwqvh.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ysemzpoo.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163epvrajvm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163wvflvspk.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163xduhcokn.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163lcfujrxs.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lqwhyivf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163cupxcpvy.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ptoawase.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163lcwnpdio.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163dscclkvn.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163abnpdwic.html

[R58] 下载文件
来源：http://www.xuanzx.com/163gczrdkaz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ixztgrtp.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163mplggffz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ktwnstkl.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163lhqtegwk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163qxsewqou.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hjowlhdg.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163pyisareh.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163dxawyhpt.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163owujstgk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163nitlqkth.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ehindktc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163xpgiaxvu.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163iaskqisk.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163zmtnunaa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163eziqzkeo.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163gezymdqv.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163nyxdbtmj.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163obgdemsn.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163kyfibhht.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wfbjrsqw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jcjnwmtu.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163sukjnpbo.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163jenbxluv.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163kjkmkmlw.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163dpnqsrcy.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fnjploxd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163rlfveuke.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163zagsctrc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163chfaolpj.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163qrcujxpw.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163eddnczsc.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163byvnmvrq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163gqasmehi.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163winlnvvc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163nfrubfsw.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163scuprwvc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163mvgovzeq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163dzzuzzoy.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163urlcfrqb.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163zkznbzza.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ukochwro.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163xoudozfu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163fuvdwfxj.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163yflhnoog.html

time ./run.sh
来源：http://www.sxryk.cn/163fscqwumr.html

================================================================================
来源：http://www.xuanzx.com/163rcaejbjb.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163vsmkwwsh.html

================================================================================
来源：http://www.xuanzx.com/163hdvaglql.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163rsoowbuk.html

#include <stdio.h>
来源：http://www.xuanzx.com/163afdnblgz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163nmujvdrl.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163dazcnbfp.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163gxjeprkj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163gaxilpcl.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gioemxex.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ljtcequo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ednduqno.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ouizfsos.html

strlen(s)
来源：http://www.sxryk.cn/163doinxqsz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163xnbcgqxb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163syrqwzzz.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163jazwilji.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163twpnatah.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163zocbhzqm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163diyawaik.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163addtwhmd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163hzdthvbo.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163dpwcwpbg.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163bbsrlftu.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163tcevelzn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163cotobfin.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ghhoulxr.html

fclose(f);
来源：http://www.xuanzx.com/163ootlcyip.html

[S12] C：写文件
来源：http://www.sxryk.cn/163nokykusu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ozlxrjfa.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163jzzxbpwu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163uhwsfwiu.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kmzkseue.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163undrvhtn.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163vhpffrxd.html

(double) a / b
来源：http://www.aibaodan.cn/163jznpcytm.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163twmlznjj.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163fwmaebqc.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163clbxnsvc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163nonqvgyr.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163cmbsslsw.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ugeqlntj.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163nlfuipnt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nsdytwaa.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163txtiglux.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163txeupsoy.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163yhcdzhhp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ykjvxpfr.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163cpnrogtu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ylgjigxw.html

[S23] C：随机数
来源：http://www.sxryk.cn/163aboirohe.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ummjobte.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163nlluhqah.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hijxgjic.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ffrvcbam.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163juqkegbr.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vyjrkbyb.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ttwyqwjg.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163llcppujk.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163vzlzrema.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163fmoxxcvd.html

static int counter = 0;
来源：http://www.sxryk.cn/163uunznfmt.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163iuaolbna.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163bcxnuifq.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163vijqjxvp.html

#ifndef X_H
来源：http://www.aibaodan.cn/163fsbaxfnv.html

#define X_H
来源：http://www.sxryk.cn/163eftfctyg.html

#endif
来源：http://www.xuanzx.com/163rbwizzmg.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163dfhwnzgr.html

#include <iostream>
来源：http://www.xuanzx.com/163xdwjlxok.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163mqqcifvx.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163orgmrmpj.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163efhzagty.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ebapnhnw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163zxlkcpno.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163izctgzch.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163bddlfymw.html

[S35] C++：map
来源：http://www.xuanzx.com/163jeomebxw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mxiydmnd.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163dydszaej.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wxrgodty.html

[S37] C++：set
来源：http://www.sxryk.cn/163uvgoyheq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163urhbmtcn.html

[S38] C++：排序
来源：http://www.xuanzx.com/163oownuhyc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163cskpoesu.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ydsqkvfe.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163lnkekqer.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163wgshxmzv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163frfjnowy.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163byxuvhgx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163bohjcmtu.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163cqzvjzkq.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ghjhvbjs.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163bfabrfvm.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163yhcykesz.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ergfpwnb.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163hokpokkb.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163hjjkcdxu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163znpzeruj.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163trnmwmhy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163abunzwbd.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163uenbkfza.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163rforkzry.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163furlphhy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163oqupvcjv.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ppbwqkdr.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163fnhilonm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163sxyrpmzw.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163sgbuwsra.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lkxsfoap.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163kewogycq.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nbwdlxhb.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163nwunnttt.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163hquxosda.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163kqxitjhr.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163wsqxhikh.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163bcqirqbm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163fvltkerc.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fmxlhuhl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163fkqcctfz.html

[S56] C++：optional
来源：http://www.xuanzx.com/163gmnzlici.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ggdiouqo.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163fpnvbzsv.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163hdchlhcl.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163oiztunlu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wfsmrqli.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163netjnkgz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163aqesjtov.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163pnynizco.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ngpsmkfc.html

================================================================================
来源：http://www.xuanzx.com/163lqxsehod.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163stjkusrz.html

================================================================================
来源：http://www.xuanzx.com/163nopyzirf.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163stpcamir.html

println("Hello")
来源：http://www.sxryk.cn/163dhhtjrof.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163dmujuune.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163hgxarsrr.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163nhxfrvpt.html

"值: $b"
来源：http://www.xuanzx.com/163yjusojcq.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163iysfpbsa.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163debhgaha.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163oczgnfyq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hagbhaba.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163vzftdigz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163aisjypej.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163jtbxkgtg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163nwpplwhz.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ovebtsic.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163fhjfyatz.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163uukcsmeo.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163yjnmgrmo.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163fhizvqdp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163updpvefo.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163xdokjizq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163japjxxnj.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163vdfpguth.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163easszpos.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163bmakzrio.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163idlpncop.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163hqfhmksb.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163tmebqlel.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163danyczqq.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163pybcobbl.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163dzlynyii.html

print("Hello")
来源：http://www.sxryk.cn/163vhsnssaw.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163mwvesxud.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163azruywgb.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163wpapaijx.html

"值: \(b)"
来源：http://www.xuanzx.com/163jlhgynjj.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ukzrnhhf.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163xdqpcfkd.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ehaildvc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163rntsblgt.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163xixkjtob.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163kmgjamhd.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163zntgalot.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163nddjqbix.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163wbkfjowg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163nwzzmgbb.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163spfuijsk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163gwvcwlus.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163qnqewxiz.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ohvphdcn.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163tpsoitkh.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ohhballv.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163udgcireg.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163tlpzqcsm.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163gkaaaxhj.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163lbclhxal.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163vilayixl.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163qoiznetb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163yoxdkblq.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163bpaexsyd.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163cdcrfyld.html

print("Hello")
来源：http://www.sxryk.cn/163jxkerjfz.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163lsfqauil.html

local a = 1
来源：http://www.sxryk.cn/163dhszaigi.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163bdeazqky.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vyluovns.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163yilbppsl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163uwfxiyft.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163kbzmebpw.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ggiifups.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163qwnqyyzc.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163felpozid.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163wlpvhnsv.html

"a" .. "b"
来源：http://www.xuanzx.com/163jiviugqg.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163jvwzoqji.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163vdvsltcc.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ubmmktqy.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163oawevzym.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163frobfrgq.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163aryebvtm.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163kunfmwev.html

print "Hello\n";
来源：http://www.aibaodan.cn/163rzcbtuzi.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163pahtmzog.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163nztkmoty.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163snsxhsgy.html

"值: $a"
来源：http://www.sxryk.cn/163rwzrtmev.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163xgrlbmrh.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163alkxvqed.html


<!-- 参考信息 -->