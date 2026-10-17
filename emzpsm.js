外链999!wailian999！

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163kwsgqetq.html

[R26] 命令替换
来源：http://www.sxryk.cn/163eqtosvyo.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ifhuewvq.html

[R27] 算术展开
来源：http://www.xuanzx.com/163xpahbeia.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163myvxkmjw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163wttiwefz.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ynfauzrg.html

[R29] 定义函数
来源：http://www.xuanzx.com/163qbccundh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vaxigbva.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ajlfqwwl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163lmjtralv.html

[R31] 局部变量
来源：http://www.xuanzx.com/163pzgjeycr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163flgfviya.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163zenvpqbb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xzubiums.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ayiyeist.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163cabhpuvl.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163kvcsmagj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ulkvocww.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163adlvrjch.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163rmtinhxf.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163rfiipasj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wqqvwntm.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163lqqfyktd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163auzeqqgy.html

[R38] 管道串联
来源：http://www.xuanzx.com/163fdckynir.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163zvywvmph.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163dldvjhgk.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163jmcfzpxp.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163qdktguzx.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163jihtwhiw.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163blxwkjdf.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163mxrjzdfk.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ohhhzfnl.html

wc -l < a.txt
来源：http://www.sxryk.cn/163atnxfedy.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163mkfpitqb.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ruoshxmy.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ngdwbswp.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163gybkznim.html

[R45] 批量删除
来源：http://www.sxryk.cn/163gzeuizas.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ulrbytdw.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ckxfvqtw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163rikatqpt.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163djwpwezk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163crrzajav.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163acjrjkub.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163keomixxp.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163pljppsyt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dzgmufuf.html

[R50] awk 求和
来源：http://www.sxryk.cn/163lbhabcio.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163srgesrkn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163uafyanwi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ysmxqeme.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ynutknbg.html

wc -l a.txt
来源：http://www.aibaodan.cn/163aythihpj.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163djmyxeut.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163yhfiopho.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163relzsrez.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ahrcsxyj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163okwixlba.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163imrjnknm.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gwwtgiyl.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163uyvspvgm.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163grxhwsqf.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xpkowbzu.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163rhefuvgm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163vldpgvhq.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163iurifxbx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vslkbbmm.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163vsuwsuaq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163xrynlyed.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163qwtuxkxc.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163uitoytez.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163obdbgakt.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ivziyppl.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163jiwsotvx.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163jtxxmpku.html

[R64] 结束进程
来源：http://www.xuanzx.com/163rapqmnnx.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163wpvupckp.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163warnebni.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163xgwkbirz.html

[R66] 定时任务
来源：http://www.xuanzx.com/163kmwukvyb.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163kuuclmhf.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163bplelpwt.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ciknpopc.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163tjkynoej.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163gkobjcpk.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163kgymlajy.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rzjzmybt.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163vetmkybo.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163fhmtsdux.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163yzwynast.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163gjcimogm.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163trdeumhz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163tsbpuziw.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163papvxqhu.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163gpmhyqqp.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163plgzjzfg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qpwwwnoa.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163qkytafba.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163oiwhwkzn.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163igetrixy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nllxxnac.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tavpjdyh.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163lgvazbic.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163umktyunu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163zgyohixr.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163rpswtddz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163brmcyank.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163plxfrhwc.html

time ./run.sh
来源：http://www.xuanzx.com/163mgjzxtey.html

================================================================================
来源：http://www.sxryk.cn/163btcokojt.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163onkemtwn.html

================================================================================
来源：http://www.aibaodan.cn/163wcegrgzv.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163xmxuvmqt.html

#include <stdio.h>
来源：http://www.sxryk.cn/163hdhmelqt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163wujjmneg.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163thpcjlgv.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163jkxptpwx.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163jhaaphoc.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163gdmgvmyd.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163hcluozgr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xtocfppp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163cmklfelf.html

strlen(s)
来源：http://www.sxryk.cn/163dqscxkyn.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163jhqdxzks.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163valpdfpy.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163mkeqblma.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163kwagtlim.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163qrpfssxh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163heluyeow.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163cgujhvzj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163eoobvssc.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163awfkufmo.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163htlwpblw.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wlezvpik.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163exwqzxsh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ypfkomam.html

fclose(f);
来源：http://www.sxryk.cn/163rjnlbsfb.html

[S12] C：写文件
来源：http://www.sxryk.cn/163dumaengi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163jxfxazgp.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163avrncdeb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163pvayzovi.html

[S14] C：枚举
来源：http://www.sxryk.cn/163yhundwfq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163xdtlbzer.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163fyebhexl.html

(double) a / b
来源：http://www.xuanzx.com/163lrzamcua.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163nopwobfd.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163zxxpfegn.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163fhiihmuu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163gfvvbvms.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163tqvsgyee.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163dnsotbuj.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163cxeenqtl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ojqdgxkz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163gaftsdjt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qydickkz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163kkiwdwcu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163qofdmrux.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163opxzciwh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163whfgybqg.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bohzigol.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163vlcklklh.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163yolahwrw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163kolvbvkn.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163omtqqwud.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zekdgsws.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163rorqggrw.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163eggkvgdf.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163coreedha.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163zavigvcj.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qqleyehx.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tvoinvzd.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zmuvgmbb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163fldlstll.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163dktuhwyf.html

#ifndef X_H
来源：http://www.xuanzx.com/163oocfnmbm.html

#define X_H
来源：http://www.xuanzx.com/163qgaufuwr.html

#endif
来源：http://www.aibaodan.cn/163snltztgd.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163dmgcsmtx.html

#include <iostream>
来源：http://www.xuanzx.com/163qebteqqw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163begzrkjw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163spxatazi.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ocnvclnv.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163clxdzefp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163jjvljbtq.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zzspgrct.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163kktuydjy.html

[S35] C++：map
来源：http://www.aibaodan.cn/163qkvlerfi.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hiklveov.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163tvlxyutv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163tnzmriar.html

[S37] C++：set
来源：http://www.aibaodan.cn/163pnetdmjs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163wnhjldit.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ibcrtkgs.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163tbryefbs.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163fjapqbbu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ztigovvq.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163zlvklaim.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ogdmgiol.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163rrxltrwb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163dxzswrsf.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163fnmaxcxp.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163hkryvkls.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163tmblilvh.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zhifcjey.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163fklyaryk.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163qllmeflk.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163lcgquzqr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163zocsdpdh.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163tppwyzay.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163sdkqgwvc.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163wretlbsc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163umsvhyrc.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163nlqjndgf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163omfitshb.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163rbkrcvwp.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163wqpcewma.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163txsbwnqf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wkcmbfpx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163khalkfmq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163jejwyqol.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163zxeurixw.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163tculgniw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163atnxrqsw.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163pewqrezf.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163pmehezqm.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163untphnjd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163cavaqnwn.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163fkmibnjh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163qjokktxj.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ivfmjzug.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163iyqxgiap.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163imjcfnfj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163vglyiovf.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163zoflckxc.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163snlvouok.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163eqgscvjm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163kcrcavtk.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163mwurgkqn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163symdtcgx.html

================================================================================
来源：http://www.xuanzx.com/163mvyisdal.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163fesuewzm.html

================================================================================
来源：http://www.sxryk.cn/163hfdqwpaj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163dcidvfal.html

println("Hello")
来源：http://www.xuanzx.com/163zuixqnxb.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163mtoebwrk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163owsuzbkq.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163gqbfizqp.html

"值: $b"
来源：http://www.sxryk.cn/163kmxaerpe.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163kftqiovu.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163tjonldhq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ocuyrwfn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163frwcjyqk.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163cwldlqld.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163kelwtmao.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163pbmckecl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163kgrheule.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163udyqcxvh.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163hikkjkxh.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ziufndir.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163fcezcdck.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163gurxeajb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wsixsluf.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163qdqxnqey.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163prfuchby.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163vruzhihr.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163gmzrtfxr.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163wtudlsma.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163xxdsjqnq.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163athwfsih.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163zpkjeuob.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163qxuanqol.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163fcsmobca.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163iwayjzgu.html

print("Hello")
来源：http://www.aibaodan.cn/163ixbqpzjx.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163mbzxmlsm.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163xncaotcs.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163czpjbsft.html

"值: \(b)"
来源：http://www.sxryk.cn/163emsuezsz.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163qoccxedm.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163zzyinmxw.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163qomhajui.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163jztvfrkb.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163fsqfvdzt.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163dqgyxwbb.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163dibzpans.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rngimjok.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163pigwhwiv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163kexwvfhk.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163gsslslec.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163plohzxeh.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163xookzqgj.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163bjiuywdw.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163pnjtclay.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163tbetrond.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163knpwtekf.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qbzvsyri.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163hnobcwjd.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163sqhsnfij.html


<!-- 参考信息 -->