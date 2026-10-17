外链999!wailian999！

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163fxnisjrf.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163hujtqpsh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tpzlkkaw.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163eurcqwbq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ihvcpwhl.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163zvodeepl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vfdfiiel.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163yxurnrqn.html

files=$(ls -1)
来源：http://www.xuanzx.com/163kfobervo.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pnkzeyik.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163yxdtzofj.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163mhlqeino.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163orixzxqj.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163yohaxiym.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ojourhmw.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xgpfaoga.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163bdfcziwj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163byfnzaky.html

wc -l < a.txt
来源：http://www.sxryk.cn/163gsqztdrj.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163mninusnj.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163pksodhla.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163mzbnklis.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163fbztrlkq.html

[R45] 批量删除
来源：http://www.xuanzx.com/163oiihbxhs.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163cdqluyeh.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163befmvpqy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163tebkjque.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163mqjtusro.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163hjgucrgj.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yqbibywq.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163rilejpvx.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zereahzr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163mjaguoro.html

[R50] awk 求和
来源：http://www.xuanzx.com/163vteizswq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163moqpwriw.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ggvbpwws.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qvdidzji.html

[R52] 统计行数
来源：http://www.xuanzx.com/163nsnxesrh.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ycnxpivf.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163htscdnme.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163sviovxfj.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163bydhsapx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163pbqwtmgw.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163tdppjihe.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163shkxoinn.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163dglgzxqh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163mienvire.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163wvyowolp.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163uzgbuzxe.html

[R58] 下载文件
来源：http://www.xuanzx.com/163fgiemvhn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163frkeumja.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tndiucrh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163qhysyocl.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163stywfmkg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163fmoczxlc.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163fobxaafv.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163bpirrxum.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163vflmnvux.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163bqzqqrph.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163thganziw.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163knnfmnpr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tivytiwv.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ptrtwchj.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xepwqsbp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163iiwriiyz.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ktqvjhxj.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rasqdtca.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163kemtxelx.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163axpsjfow.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163qjgmdfjv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163sohmggfk.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163cxwiyyyw.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ekjfmlao.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163qbgkgpnb.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163pliiysgr.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ubiyayti.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jexsekca.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163dmznrhhx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163urcgxtxy.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163jsksikxm.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163jkvaapsd.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163fzxtxzfy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163xwpaytvg.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163iazbspog.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ktafkjhc.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163syhdohhi.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fplvovfy.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163iagvvjwj.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163uxjkmcwh.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163prcbmvfg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163qrgmyrhn.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163teustfdf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163qklkfydc.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163yxostzwr.html

time ./run.sh
来源：http://www.sxryk.cn/163mdrctfri.html

================================================================================
来源：http://www.sxryk.cn/163uomysirx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163dbvwbqje.html

================================================================================
来源：http://www.aibaodan.cn/163vumrsvkq.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vudqesjn.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mdibavsb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163nksiiqtn.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163frgmculk.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163imsfqzdd.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163edpauvcw.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ebbzvlrd.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163mmijodam.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163mzrvdyjq.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163boefzhgo.html

strlen(s)
来源：http://www.aibaodan.cn/163qycemawb.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163yuvckuar.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163wzpqnpic.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163aykznopb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163orgzwihq.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163zawpgggs.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163yywlhwzn.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163yblveffr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ryqejvou.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mbnalgtx.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163irvifnje.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163msrkizmo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163axbzadsj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163idntgupm.html

fclose(f);
来源：http://www.xuanzx.com/163tqtudygu.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163pipqpigq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ftcodgdg.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163olyvfups.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163pahelnrz.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163gdkhvkfd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mtfopkqu.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163hzcfllyb.html

(double) a / b
来源：http://www.sxryk.cn/163uclucgms.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ttsiquzs.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163xrpyfhwc.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163prspniaw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hkjhezxv.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163kgyxalrg.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wlkmuhir.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163esyxlgtu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nhilvuau.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163tgqlisos.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163aiqjwycl.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163xrgzcnjo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163qhpzszrn.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163etereyvn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163dvkgzmfb.html

[S23] C：随机数
来源：http://www.sxryk.cn/163jhawrgpu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ojtiuhlm.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163uayytumr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ghwmwpvd.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163jboxgpyi.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163eglnjbed.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163lgwrgbis.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163etcorzvc.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163rhmlmuaz.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163aekowwbq.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zprrdumf.html

static int counter = 0;
来源：http://www.sxryk.cn/163lxetwuww.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163fvvvdokh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ayqxszec.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163zjpotudo.html

#ifndef X_H
来源：http://www.aibaodan.cn/163otudtjwp.html

#define X_H
来源：http://www.xuanzx.com/163ohxlpqxk.html

#endif
来源：http://www.aibaodan.cn/163xyxqtaxd.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163gypkntar.html

#include <iostream>
来源：http://www.sxryk.cn/163relorekq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163dqfwaoqo.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163kdacbhxd.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163xxcypwrt.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163slnqdadx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163blevtpzm.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163sdvzlfnm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163burktlea.html

[S35] C++：map
来源：http://www.sxryk.cn/163thpltmzj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qeoqertm.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163eqseejwg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mrtotpbb.html

[S37] C++：set
来源：http://www.aibaodan.cn/163pmwxrsao.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163dpotgkea.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hegkhwjd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163xvrwxkki.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163uxmwogwb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ygzgxwnh.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163jlpopqwz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163hyhhxntn.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163tnqcyicl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ouvkmtka.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163dcnnfbnr.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wcqhencj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163qofhmvjm.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163illuiold.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163kpaubuzr.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163fliwomui.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163yumzxvad.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163waorycvh.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163szfwkvny.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163apohujki.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ecxsuwbm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163lykpcebi.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vsetwebi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163oxleiaxd.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163tsxtgbyq.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163pplacble.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ckcwmbaa.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jndtfafu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163hiehjqhy.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163qaxjtsfo.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163iwrbsjmn.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163wkpnkzbf.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163qyhstkjz.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163qpwyumqo.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163jbhebmjc.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163jredbzim.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163tlikeyka.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ukadbjlg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163wbfwiwzw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163dzvpqamq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163efzmtktv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163lybdxsqx.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163fottmjwr.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163chiipavc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163udygumeq.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163awigiuvp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163pruearlz.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163snweqjvw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163jdjekycl.html

================================================================================
来源：http://www.xuanzx.com/163gmbqbarw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163fgypprms.html

================================================================================
来源：http://www.aibaodan.cn/163yciismik.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163pdpidnol.html

println("Hello")
来源：http://www.xuanzx.com/163fxtztowt.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163yxrtlukc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163rumqcnrn.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ncfslmhk.html

"值: $b"
来源：http://www.aibaodan.cn/163emjlxunm.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163hvexyumy.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163wdzufpsj.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163hathznzq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163kujmmkzf.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163wmnlcmxp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qeanwtwv.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jjrpqxim.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163usxwpreh.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qdsnooam.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gegkxbmm.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163zghrxboh.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163hreseyam.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163smalqyis.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dqhonrzg.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ewnxgbok.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163fxnsjppb.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163yafftmaw.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163chteohrf.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163dzuipezk.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ylrkznwk.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163rdpyivds.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163vvuajlts.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163kuwuhxag.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163invmzfwk.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163djuodtkv.html

print("Hello")
来源：http://www.xuanzx.com/163uuvyrfrt.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163uvytunup.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163cwieamgi.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163wgegvvqm.html

"值: \(b)"
来源：http://www.xuanzx.com/163kqxydwcz.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163vqrcycaw.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163mnkymhpu.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163gfyxfhgy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163lrakpwgo.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163hrhqoety.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163mycflbhs.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163nrzcaavf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163tswvmiau.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163yvzfrmeq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163cjwrwach.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163xcqdmgyz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163rjdmriaa.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163wafqwgnc.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ggjbnbwj.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163qfcfobis.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163rdyfaulu.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ugulfyby.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163uhoprtcc.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ybtrgrhs.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163vmmkjzka.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163afbexjvv.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163tlbrpxar.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163speiutoh.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163jvzkhtne.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163izipxddg.html

print("Hello")
来源：http://www.sxryk.cn/163ozoqlfsn.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ypqapihr.html

local a = 1
来源：http://www.aibaodan.cn/163nbpdsfbc.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163dlkjihsl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163aenzqaiq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163qevscwrr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163hfgkjmmm.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163qknupkun.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163cdtyjdbi.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163adwvzwut.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163yrzbxrbk.html


<!-- 参考信息 -->