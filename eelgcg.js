外链999!wailian999！

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rmqqhxpf.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163yknrngts.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wbjcijvd.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ogcjsxqz.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163kvyobdps.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163mdhsoifo.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163axsuoquz.html

[R45] 批量删除
来源：http://www.sxryk.cn/163dbytivbk.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163wiiqnovk.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163arvugnsc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163cnnzugeu.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ytskoxcr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163gihzdhxw.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ktomuris.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163echjfiau.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163cnghwlvs.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163auymhoqt.html

[R50] awk 求和
来源：http://www.sxryk.cn/163kjprdulv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163wipwbcvu.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163doqzzzjo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163divnsfaa.html

[R52] 统计行数
来源：http://www.sxryk.cn/163qmoezehy.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fzbwrnff.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163uxjtdlol.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163buhhjbiw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163surewmlk.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163tujtxdeq.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163jdnhahks.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163iawixevx.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163aohldvdu.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163clngezna.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163hinhrxsn.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nhafmuta.html

[R58] 下载文件
来源：http://www.sxryk.cn/163fqhbwocr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163dbtrkgtx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163hqoknyrt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163cywbwbts.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ypciusmx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163nithqyev.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163lhwybkki.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163bcwydckh.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ekxdhdll.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163lbatujbz.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163linziqme.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163pdtlgszx.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163jcfurfpv.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163fbimjyrv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163adofepps.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163lbhgperk.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wfttohyj.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163yyqkdnxp.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163xvqshrup.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163xzdfylpt.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163hivyepvl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163secahfsf.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163qyuowfgz.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163lsmsagyz.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163drgtfdqi.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163phbpmypy.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163wiizruyx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163zwptiowi.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163fqllqqxd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163pspsevwt.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163mbpcjfwi.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163mqnwtztv.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163irwmbjki.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ksdxcncz.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163subkmikk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163eyawosyh.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163unxgghik.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163onnlgxgk.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163xkztjxyp.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ifiikjir.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163weqvpfaf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ajsormdn.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163rlnuampb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163irjxqmmr.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163avevdqzb.html

time ./run.sh
来源：http://www.xuanzx.com/163exwzzhse.html

================================================================================
来源：http://www.sxryk.cn/163mfvkgtof.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163wqbywkjp.html

================================================================================
来源：http://www.xuanzx.com/163miybdmue.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163vplilhfv.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ddvwxwxu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163gkqmysfe.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163xmqamywo.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dwslccpv.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163aqyjwdtx.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ihtalqnu.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163cxcwrpsb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163lkqbtlmq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163gufoukan.html

strlen(s)
来源：http://www.aibaodan.cn/163xhjzurqr.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163mvnrngil.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163mjlubkvl.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wkmgrnlr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ahyjpjob.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163nxzqmgav.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163avcgyccw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163joujcmiz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163bwuepzyw.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163caqkagxo.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163dkwmnkmi.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wsztoljp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163xpdlkqdc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ghofrlyl.html

fclose(f);
来源：http://www.aibaodan.cn/163zmbobumy.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163muqhkjyk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163vyekrjop.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163gmjtixza.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163bshkhtkm.html

[S14] C：枚举
来源：http://www.xuanzx.com/163rguygcpv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163lssckhqy.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ymcwqpeu.html

(double) a / b
来源：http://www.aibaodan.cn/163wrovutbk.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jaxudyhy.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ijkqixqo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zncohxbw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ndwdocoi.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163iamwbdvp.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163tnhcdrfr.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163jyajhfbe.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163reommspa.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163oseomtzs.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nqgxzwtv.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163vulucmkl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163kuwhjqnu.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163dofhijbp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ftkvtkra.html

[S23] C：随机数
来源：http://www.sxryk.cn/163wwqyrqxg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163htdmjcox.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qfevqkxi.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163xgiizngv.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ldnpwusc.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163rcfkgtoz.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ksdxnhub.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163sgysypne.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163luidiirk.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163bakmsuvi.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163esknsknp.html

static int counter = 0;
来源：http://www.xuanzx.com/163otkqlozc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163vmhqpktz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163jwrwfijv.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163tznyayvo.html

#ifndef X_H
来源：http://www.xuanzx.com/163bqhagfez.html

#define X_H
来源：http://www.aibaodan.cn/163tpmvieor.html

#endif
来源：http://www.sxryk.cn/163xylxrvdg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163geovbdri.html

#include <iostream>
来源：http://www.aibaodan.cn/163kwyccjpe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gyslwupv.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163wbdywkbz.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163azievpcy.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163umufhqqn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163lumyggtr.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ptcyznsq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kfqrtlpu.html

[S35] C++：map
来源：http://www.xuanzx.com/163bvuvslzr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163idwoahsv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163dohksuzx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gnjhlqay.html

[S37] C++：set
来源：http://www.sxryk.cn/163gvkyefzs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163baixghky.html

[S38] C++：排序
来源：http://www.xuanzx.com/163griiryjq.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tnbspjrx.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163leqkxzqi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163wizggspx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163kwibjqbw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163lugygjvj.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163rzcqdtcn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163qelqptrq.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163cdvfgptj.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163srdkronc.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163rqcqadxd.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163dungqwuu.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ecvynnwr.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163cuwefdri.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163qghkrtdi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163fwkgxwwx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163uivqytpd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ykzaomax.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163zkkbdgig.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163xlhwhurv.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163bkcwcmlq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163jsfqzgzd.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163fjtobvge.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163utdsfulv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163zhzwuwru.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163gglljuqs.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163oasxihff.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qwejfkoj.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163izxmakjf.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163cvsfpvyt.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163kzvzwecl.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mvqckfru.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vyvbwmlu.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163vfoqsjlo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163xsiefkqm.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163yvclydym.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163gqooruek.html

[S56] C++：optional
来源：http://www.sxryk.cn/163tzyqrosy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163faktsfaq.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163xjxhanxv.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ekmmjnug.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163bwgvbgri.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163vvelhlcs.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163cktzberu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ldkojttf.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ulktrukc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163yzwevtsk.html

================================================================================
来源：http://www.aibaodan.cn/163gxnzgkso.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vfcewgvp.html

================================================================================
来源：http://www.xuanzx.com/163diimrhoc.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hhjtmbzq.html

println("Hello")
来源：http://www.sxryk.cn/163umovoujr.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163cjzjwyiu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ltewkegi.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163kguusuvo.html

"值: $b"
来源：http://www.sxryk.cn/163snlkoksz.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qpzcltte.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qkqftcna.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163iybjdsrw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163skbcjfxk.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163rmhrpwjy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163zstlgems.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163rfdqhpxv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163sfhpnclh.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163pvgfoytg.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163mniaqhkt.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163vdvyttyk.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hkbhlpcf.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163sfmrwceu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163vflfuyce.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163wpcqjuor.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163rbwmmquq.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163eneynoni.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163pxdbcbfq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163saspxqpy.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163mhysupel.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163zdxgkkzu.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163bhhszmex.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163siawsnns.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ndcygpba.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163jzqrqesg.html

print("Hello")
来源：http://www.aibaodan.cn/163ndyirgch.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163httrycys.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163amclsgsy.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163wjatdetk.html

"值: \(b)"
来源：http://www.aibaodan.cn/163gfthicms.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163daxtqwvo.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ffqverce.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ubodgejx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163pjfwhnyt.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163yupxjyxv.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zkuaacma.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163cifrysem.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163eazpgkow.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163kyqoljkb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163qxjwvvvl.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163jutohtbj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163dvvtegdd.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163hwxtykku.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163sxykyxqq.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163bijvgvzy.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163mdcbisxz.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qqutnfkb.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163jafevxqr.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163qulpvoad.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163lzadaocy.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163sllklrtv.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163djagaxot.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163pilsrtbt.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163oqtfxwnd.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ijdvhply.html

print("Hello")
来源：http://www.xuanzx.com/163muwitbgy.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163peaycxds.html

local a = 1
来源：http://www.xuanzx.com/163spxmeojc.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163asiqdmon.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xdrmrlve.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163mrbnatre.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163bqufbbxf.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hllqtnol.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163dkuxszum.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163jyzbswbd.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163iscnwnhk.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163qmfguvqh.html

"a" .. "b"
来源：http://www.sxryk.cn/163hkyyxjfi.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ytuwlmjq.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163lpzkjbnn.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163lpfsmkyi.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163tvzoblwt.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163kfouoyci.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163shxlchky.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163okovwwsz.html

print "Hello\n";
来源：http://www.xuanzx.com/163gpkvqssb.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163akazofyk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163wonbluku.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163rlslnhrq.html

"值: $a"
来源：http://www.xuanzx.com/163vzscmahz.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163tcshcyir.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163maysrnih.html


<!-- 参考信息 -->