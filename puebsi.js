外链999!wailian999！

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163rpbiqwvy.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163nitqmtoy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xzoxfvru.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ietdgset.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163dfysqjeo.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163zlmegirc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163nmfquflp.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163eptxrrfj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163qnevdymw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ymlropgj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163eyaetbsc.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163grrpivyr.html

files=$(ls -1)
来源：http://www.sxryk.cn/163fanqgmap.html

[R38] 管道串联
来源：http://www.sxryk.cn/163uxhljxyq.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163rgwothzm.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163iqnukjyo.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163lzfpqswk.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163scsvolxx.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ioexkyka.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163cgfwpjlx.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163aqdemene.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163oowumozx.html

wc -l < a.txt
来源：http://www.xuanzx.com/163bnemwzti.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163jcyckrmh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163menxllwc.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163wikhqlzx.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163alxwlnix.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163iyvbdyjh.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163akjxxbmn.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163rdktqasq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163gwywgfls.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163zwofynrh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163subintyu.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163fogsyzgl.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163oezzjsas.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wrfsfbug.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163cwltbreu.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163liwjwayt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163fjvjmopv.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dyzpdghc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163mwbgfnbj.html

[R52] 统计行数
来源：http://www.sxryk.cn/163yvqiaqmc.html

wc -l a.txt
来源：http://www.xuanzx.com/163tlmubfmu.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ldlmstbz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163zimjnzfr.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163pvtfircb.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163frwgyzvm.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163undnpunp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163aodyhngs.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163juxbztnq.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163yijniehp.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ctcbtgul.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163knlyivab.html

[R58] 下载文件
来源：http://www.xuanzx.com/163sejrbbwl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163occchxuc.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163omyzgipa.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163aipvvpsu.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163puchifuv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163qmtsffsk.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163izobpncn.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ttbuixdj.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163lrlznwks.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163xbbvcegi.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163mfjxlkzo.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wclgsqbg.html

[R64] 结束进程
来源：http://www.xuanzx.com/163wequpppc.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ieyopaae.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163unlkocnj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ljmplynf.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163aheeszhw.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163bslatzkc.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163dvyfruic.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163npwdtzef.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163igskkryg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163zvwpjmbj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163huktrjmj.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163fwznljho.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163omwlsirl.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163yuwhbrxu.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163xfymbabj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163mceaxytx.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163hyycwmtp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163jmidrcow.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163mcklktkd.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ggfynxyv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163jnuycfgi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163bpwtzose.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163bhdvlcva.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qeitsnus.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ziuilkdr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163oeultnea.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ldzlacqy.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vaevttai.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163zfocoimk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163bbgixikz.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163bfgyiujl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163soczhqca.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163bnjkbzfk.html

time ./run.sh
来源：http://www.aibaodan.cn/163bsxtdrhf.html

================================================================================
来源：http://www.sxryk.cn/163xtbomvcx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163jxliiqju.html

================================================================================
来源：http://www.sxryk.cn/163wyadvadj.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163khmmchfe.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163jhfzjpvf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gnwqcjsd.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163wiphyibp.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ogoiolde.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qzwohtqw.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163jmpshvyq.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ilyszjrb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nunhxdrj.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kvdcbtdp.html

strlen(s)
来源：http://www.aibaodan.cn/163sokmgcdp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163grcwtvzj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163mktzgdfe.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163zjsapawk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163eowjswlm.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163bxexygdf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163vbrimawu.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163egsovhcc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163txaglvym.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163wwsxrnay.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163raiahcvz.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xsrduoqa.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163nnvrfajm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ymwxlvyn.html

fclose(f);
来源：http://www.xuanzx.com/163wkdwmytc.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fprbbxuf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163cskoltnm.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163llkmfwsu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163qtyvmvvn.html

[S14] C：枚举
来源：http://www.xuanzx.com/163xqjxzjme.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163fmbibeqr.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163syijptse.html

(double) a / b
来源：http://www.sxryk.cn/163qpauokzo.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163kbdbptcd.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163lqsaajxi.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163dsspttav.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lkigqhua.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163riiuvyww.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mecynrae.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163vjzchdqy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163aopiwzda.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kpvoljwv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wdbgmpvr.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163dxfujuuf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ptnlcrct.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163vfwsdwrs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163emdhlfvp.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163yyyvfhwy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163bdbdvckj.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163obzzsqsx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163prwmwojs.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163udjxxvkh.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163afqdvvoy.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163mijjolhi.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163amdxuuyg.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163gqgulvoj.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163oaifyvle.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163shrkzgwj.html

static int counter = 0;
来源：http://www.sxryk.cn/163koyuhuwi.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163mnzdeycj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163sdkjoaky.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163oleouiik.html

#ifndef X_H
来源：http://www.sxryk.cn/163kxmzyzhp.html

#define X_H
来源：http://www.aibaodan.cn/163hxrzogwz.html

#endif
来源：http://www.xuanzx.com/163kduwicga.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163nbqxsqhi.html

#include <iostream>
来源：http://www.xuanzx.com/163chtvdemq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ekdzrnjq.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163gyzhizpq.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163npldyxwi.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163eqjxpmfu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ipmyoxse.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163rxhagldb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163qaprufmr.html

[S35] C++：map
来源：http://www.aibaodan.cn/163nvtfakha.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qlcyldgf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mpbrwddb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163guxlzzpz.html

[S37] C++：set
来源：http://www.xuanzx.com/163wbrdqkyc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rjqpxhrd.html

[S38] C++：排序
来源：http://www.sxryk.cn/163wemfpgzx.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ffwegpve.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kiymitju.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ksabjfvn.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qdnfphuk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163zbirltdo.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163yzmkwymv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163aqotzztb.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163uwrucqff.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163vlnfdjku.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163vsifzhok.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163zribuxca.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163zhecjnga.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163zemfggan.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163mloyohpt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163utvnsyza.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163qbpbmpme.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163uzxsrhef.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ojubkdpk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ugzureev.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163snfejfux.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163iqdksjee.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163rcgcmwrj.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163lxxffnqs.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wvurxckf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163vnxokrxo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163sduldchf.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163jhfzrwuh.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163iyzbkogr.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163octzndye.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163oougerpf.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163uypexbof.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163aohbkbam.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163xstqgpau.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163hqzszzza.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163kcrhkdel.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163xmtaaypp.html

[S56] C++：optional
来源：http://www.sxryk.cn/163imluugvj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163vpnuiovp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163fzfpfynq.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163khynkbng.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163glcfslnc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163rgtpyepk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163nwktgyvy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163buzxidlj.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ljhnxqyo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163dwzpxhjs.html

================================================================================
来源：http://www.xuanzx.com/163lyxfoztv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163sxcdjtqp.html

================================================================================
来源：http://www.xuanzx.com/163ykgfhehw.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lgaucyya.html

println("Hello")
来源：http://www.aibaodan.cn/163dutgoyci.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163pkrvswer.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163jigczvez.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163enhmcuit.html

"值: $b"
来源：http://www.aibaodan.cn/163cgkisded.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163twhyuegg.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163mcncwnxt.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rqysfcag.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ywsswqct.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163hxxdibxf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163jhsiafiv.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163rlagkiwx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163cptfddpw.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vebiuhyg.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163rekpmahe.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ncxtktud.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163kgndlcbs.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163tuhrbsxt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163cgtiryli.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163octuisaq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163zfxgmqoa.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163plxrcqsz.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163rkgfhoex.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163kdpxmimb.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163hvlijjls.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163asmvoxfy.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163algppcxb.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vhpuryvt.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163rfcgszga.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163olsuskdi.html

print("Hello")
来源：http://www.xuanzx.com/163xnvegjyr.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hwtfnthc.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163fplcfmhn.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163cxylprqi.html

"值: \(b)"
来源：http://www.aibaodan.cn/163rqdzvrto.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163hamjkmmo.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163gmfotdeo.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163kcxijryu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ammzqmga.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163zbosygps.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163uwjfymhj.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163mvzbclhf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163gyuilfdq.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163lbabzhdq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163qbkulcht.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163xgsjfzih.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163kqnazmly.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163wmebbolw.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163hexzrmfq.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163dwqnpvub.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163mgxwbuzs.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163odhqtdfg.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163pwdrlzvi.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163urzdagdi.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ccqplwpc.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163oecedats.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163qmkwugzv.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163sfojligo.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163knatkdps.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163gigpqclm.html

print("Hello")
来源：http://www.aibaodan.cn/163yniqwthm.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ghkecpub.html

local a = 1
来源：http://www.xuanzx.com/163mlqazrje.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163xqlywyqd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163bwwumoft.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163fgyadnhj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ymezipcc.html


<!-- 参考信息 -->