外链999!wailian999！

echo "${#s}"
来源：http://www.aibaodan.cn/163lmsauxfn.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163mtmnlgbs.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163sjfpmoqt.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163adbrqqwr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jhslocjt.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ximcgeku.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163lvmtsdis.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163juzwryaq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hkkcaniy.html

[R26] 命令替换
来源：http://www.xuanzx.com/163hkabbcyg.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163togtloal.html

[R27] 算术展开
来源：http://www.xuanzx.com/163gspiuahy.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163sgktldvw.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163qgooppkb.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fgbprulo.html

[R29] 定义函数
来源：http://www.xuanzx.com/163alresfej.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163sjmsbmdg.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163dndyclks.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163mcajdzob.html

[R31] 局部变量
来源：http://www.xuanzx.com/163mudwehbr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163hkhfuxrh.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163eahzyslu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163dgsevdja.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wenegefo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163cafzbjqv.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ohiukofv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ydkikorr.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163pwyskxsy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ovicerqa.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163kckefsco.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163pxghqkpf.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163lvppyrjz.html

files=$(ls -1)
来源：http://www.sxryk.cn/163zzjawlzj.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ipaediva.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163uwoubajq.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163dxbdsvwi.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163lzqxperq.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163pjqmkhqz.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163paszmtbp.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163aurodufl.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163darczyvz.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163mtaugqdv.html

wc -l < a.txt
来源：http://www.sxryk.cn/163exoxzpod.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163wermqnbf.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163nvrmrcjv.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163lcktdypb.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163fwaimjsm.html

[R45] 批量删除
来源：http://www.sxryk.cn/163otdpdslq.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xxveypae.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163zvupgvaw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163wjwhoexh.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163zevwpchz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163bwkhfkor.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163wcoxlepo.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kvjxbwmd.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163klvlfgtf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163hkejozlz.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163chbzwuak.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163zyzsbdjd.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163tdknijeo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163jhgdhegs.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163czscwoyu.html

wc -l a.txt
来源：http://www.aibaodan.cn/163gzjscfgn.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163wrhibdab.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163hcdsqqvz.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163egrbiijy.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163nfanxmja.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163forcotfc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163lxbceqrg.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163scnznbbf.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163codszghz.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163qvdiqlxb.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163obpmrjql.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163fyvtwyip.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163lkrvrjbp.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163edtdsqvp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163uieokapw.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163tcvxzgpc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163pcbfriul.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163gkmqxnqz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163fimfzpgz.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163yuecujdb.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163fqefinaw.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163gamlqtvh.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163dokxzcvw.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163awbsxkyq.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163fgkndbym.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163zxsxfjdt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163jykuhfxu.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163hmuiwvgl.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ybeaggkf.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163tfpkfivr.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nnkgcsgs.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163oxzhhynl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163dbydksan.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163axrlrhso.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163rdjvoxfl.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163tdmktemy.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fwtexade.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163grlpdbpr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163bzjuxigt.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163vftxxhcf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163wqvhksds.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163mspkwfpw.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163lmtnumss.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163diyiqboj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163obxqadvf.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163mzrsqbog.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163qmvqallb.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163rvklwvfn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163lcyeoxvq.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163lhsamtzb.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163aapwvkiz.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163pcrpbpab.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163nikenvux.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163fqnqpspl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163rexpplrt.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163moixxfuk.html

time ./run.sh
来源：http://www.aibaodan.cn/163vsgskyts.html

================================================================================
来源：http://www.sxryk.cn/163egorpuin.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vncycvdb.html

================================================================================
来源：http://www.xuanzx.com/163weyiwhfr.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163eywjrkwa.html

#include <stdio.h>
来源：http://www.xuanzx.com/163tlypwysa.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163zxhsblkt.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163vogsrann.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163yqqgxyyg.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163maneuwha.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ncnjmrzx.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163lqpylgzl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nhqctmwq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kkdvpkmc.html

strlen(s)
来源：http://www.xuanzx.com/163exzbrvsm.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163sfeheqkh.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163dugvjvdj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163zvvzvixd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163odxlnyzm.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ztznongd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jdfukegm.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163jifodcfl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163plvwrqyj.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hdnfgjgx.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163hihdxhdz.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163kxlzpjla.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163gcjtuaxn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ymdpdvoy.html

fclose(f);
来源：http://www.xuanzx.com/163upokkhaw.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ytkrhoit.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163jjsgdjuw.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163qfvlmqrw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163uocqotss.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163scnsdbav.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163qqbhhmhq.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163whdiuomy.html

(double) a / b
来源：http://www.xuanzx.com/163yhivmybi.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163nbhipyzc.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163zxsdpdck.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163lzgbjntw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163vlnxcdfn.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163kdpiawvl.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ationhsr.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163btehulrf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ukdpczdx.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163hhxetssm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tsshljeg.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163glyarwoa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163epszmjhk.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qmxarjer.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163catucjon.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ioofkdkk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ekztlowt.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163rdaepfsc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ceuuetsu.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163hbnuomaf.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ruklsytf.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jcotwocr.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163keftwqog.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163nhfuhiyv.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ybdutxqm.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163etceuczb.html

static int counter = 0;
来源：http://www.xuanzx.com/163pbamxdit.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ztebdjlc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163tfckjgsj.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163iwcokjhg.html

#ifndef X_H
来源：http://www.sxryk.cn/163mxcngtrx.html

#define X_H
来源：http://www.xuanzx.com/163bdjygzkr.html

#endif
来源：http://www.aibaodan.cn/163nhqufhav.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163mzlzymjp.html

#include <iostream>
来源：http://www.sxryk.cn/163dpnvjmga.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163fbipfhki.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ytnryytt.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163dvajkrjh.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163xqknamoe.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163rracnbdv.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163pmwarwzj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163lmtakljd.html

[S35] C++：map
来源：http://www.xuanzx.com/163hasifdjn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hzmamcer.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163rsefyzvj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zrpmiikm.html

[S37] C++：set
来源：http://www.xuanzx.com/163uwihjash.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163tkjzasga.html

[S38] C++：排序
来源：http://www.xuanzx.com/163rswsijba.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163gogukrtj.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ezjcbqbb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163fwnnncnu.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163hmuanlpy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163uwbxvdib.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163xekvwimi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163fgvhhtjs.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163lcareyyv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163nowlgljt.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163rwyfxfvf.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163shlltdlq.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163nhtzseky.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ybgtlhht.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163fdwzhwwx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163wmiegazd.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163xwrstlrp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163jkyfmwqd.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163cvjfsqgw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163xiqgiuth.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ymbnpglx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163mzbxjhzd.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163nudcrhui.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163vrjirsix.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163snzsthhb.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163udcsvtww.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163qbiamkdj.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ewgrwhvh.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163wxtjewxr.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163zzqhvabn.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163njvdrhad.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163adxsrdai.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163lgjmfykz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163grvtebbk.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163etwsauct.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ujvkopje.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163faegvbyx.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zdvvzmci.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163bzftqlzh.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163bogsbqjj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163jzubaqqy.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163trwcsnmp.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163jrhgoifg.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163dxjgigpt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163jlsicylt.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163cpflxmzm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163eqnfbxlm.html

================================================================================
来源：http://www.sxryk.cn/163lwvmlkru.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163gfxbcmho.html

================================================================================
来源：http://www.sxryk.cn/163hfdpesfs.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163kksnullb.html

println("Hello")
来源：http://www.sxryk.cn/163xqtbmliv.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163gopargfv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zvndmeud.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163hqawhevs.html

"值: $b"
来源：http://www.sxryk.cn/163zpvqneot.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ghutvqar.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163xaddvdag.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ryaqwueq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hxhooehn.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163juhjtxwe.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163xspeuvnz.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ijjzfghw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163trvyvkxs.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163xewahugu.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163pxfzshri.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163iqwfuatd.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hkuauxoz.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163iglnotpo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163yrtviigt.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163mtjbwfis.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ciqilolh.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163kszjgbgu.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ybvnksyi.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163psjedyas.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163yxzpuqry.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163xzwkitok.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163dtbmopqj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163bevbedel.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163wrexmxgt.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163diugpczz.html

print("Hello")
来源：http://www.aibaodan.cn/163vwdirpfo.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ekgvvyco.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ewrnirqo.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163aouiezxv.html

"值: \(b)"
来源：http://www.sxryk.cn/163fqlrwtfl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163zyblamqi.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163uymwsktg.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163wfgvuitr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163xrvxwsxm.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163szqmmmtk.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163olnuihxe.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163dpquxixd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163hcpgcwhn.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163fogqqqwy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163qsajdkep.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ucmuuetl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163bfaejmtf.html


<!-- 参考信息 -->