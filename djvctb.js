外链999!wailian999！

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qzvuykqp.html

[R26] 命令替换
来源：http://www.xuanzx.com/163rycgprmw.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163rcemerdi.html

[R27] 算术展开
来源：http://www.sxryk.cn/163cfxzrkib.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163uemwjtnq.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163krvfowpx.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163taclagcp.html

[R29] 定义函数
来源：http://www.xuanzx.com/163zmcdqpbv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163pppvujpf.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163grmccdkf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163djvyterg.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163msyysdpd.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jgfkbmme.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163fgdbegpo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163rgluqeoh.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163qjburlwh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163bsyctvys.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163hdtafkie.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yiopbdyw.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163sxoaoofi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163mxfeqtts.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163sphndegk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163mhcchpko.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163cgresjmj.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wbtjyveg.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163oflkjhkm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163lovtahth.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163esotdbuy.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163axhgudai.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163cqftgewx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163xbqbgzkd.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163zelfrjbn.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163opkccqpx.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163shumhesx.html

wc -l < a.txt
来源：http://www.xuanzx.com/163sxscrceu.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163yevxdinu.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ngowcocl.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163pafqohlc.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ouhdnvwl.html

[R45] 批量删除
来源：http://www.sxryk.cn/163spgxyasa.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163vxnqdfcc.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163mfqitxwm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163vmdcgqgh.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163onpronsy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163njgqywla.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163pwoyxhnz.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163yoiwexrd.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163glszkuvq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ewtjvaus.html

[R50] awk 求和
来源：http://www.xuanzx.com/163tmdxtyhz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hlevswch.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ggibtoml.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163rjkhceva.html

[R52] 统计行数
来源：http://www.xuanzx.com/163btrfxkol.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qqxzgfxb.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163gobnjnzz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163kbuuloye.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163zbkawqsh.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163vvynsmht.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lspbwfqd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cwijweaw.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163nmeiimiu.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163gqwidmgc.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163qrkkrvsq.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163mlnquvqe.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163widefcup.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163kvcbynmi.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163jtstrolo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163vvpbztfl.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163fktnyenl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163sldsrneh.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163kxojwfes.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163vwxkpfyk.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163kzvhcgkc.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ladnuade.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ultcbmuh.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163fdmugadz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163tjpkvkar.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ksiddkjh.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163meezalqj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163cwptjlsd.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163dmudoxno.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163opcgaawo.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163mbgxynfb.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163mtglrftc.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163zvnsjytu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ztepsxxg.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163haqgffop.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163yjmdqmit.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163qkzwogcd.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163chbrhopa.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163lfxgcdiy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163vgfvsxib.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163fngwjqzn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163gjvvmvch.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163vqzjybil.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163nbafovfa.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163zuozpriq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163gddtvzzp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163gtvyenab.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163frlgowjv.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163bmaryphd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ouetkmwm.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163zylqfbzh.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163fatsdvwa.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mvehrajx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163sqhptxph.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163sklypxet.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163gxvolmgb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163deehywjt.html

time ./run.sh
来源：http://www.xuanzx.com/163bywhovtj.html

================================================================================
来源：http://www.aibaodan.cn/163roevcmzf.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163urjdtota.html

================================================================================
来源：http://www.sxryk.cn/163rcxezzfj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163kcbtgmkc.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163dfdvfody.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163hfamxhbh.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jweqspcr.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163upcdneez.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163vizwrosi.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163yoqkobyv.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163einihcor.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163gndionyn.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163jhfqqbuz.html

strlen(s)
来源：http://www.aibaodan.cn/163omkqfubi.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163yfkwqzsr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163dvqahkvf.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163irtbnkbq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163leqigemg.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163bxletxus.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163bpfgwkng.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163gjlkvguh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163jzkfingm.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163odvacijj.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163gfvrwghu.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163xkigmtmn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163nemgxcrw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163unghenqm.html

fclose(f);
来源：http://www.xuanzx.com/163jldgpeqp.html

[S12] C：写文件
来源：http://www.xuanzx.com/163vsycomit.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163rzhqckll.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163awzrzrvx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163hzldpsvt.html

[S14] C：枚举
来源：http://www.xuanzx.com/163powepjdm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zmtfhelb.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163rhszerav.html

(double) a / b
来源：http://www.sxryk.cn/163uulmhszo.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163efkpafoc.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163vbefcile.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163jognohta.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qffmaack.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ffygfzqg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163syyfnuil.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qdvbludo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kvjgjvpr.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ripdlqyk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gaauhepm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ngxqwvac.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163dwhnectb.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163svqgrwli.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163bkivuvov.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163aoehsdku.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163iwpjdjaf.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163gqfpaase.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163moyodurc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163yjwztnwt.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163famhbinv.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163fwdzazat.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163rhshrscf.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163yaenolib.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ajtwbgax.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163xamwrduf.html

static int counter = 0;
来源：http://www.xuanzx.com/163iipmkcmh.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163egckgrmo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163cktikehx.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ebdzrflt.html

#ifndef X_H
来源：http://www.aibaodan.cn/163vgnpaatx.html

#define X_H
来源：http://www.aibaodan.cn/163hyupjfqb.html

#endif
来源：http://www.xuanzx.com/163vvolkdcc.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163cfsjzorv.html

#include <iostream>
来源：http://www.sxryk.cn/163yxrcktpp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163hklpmxoy.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163umjiasxf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163coylmxye.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163anbeeyet.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163wqsenoww.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163cqqvfgxz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163yqbigtsg.html

[S35] C++：map
来源：http://www.xuanzx.com/163dplcgljc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ioftlgrj.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163jpwtfjrw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lxgcuyjm.html

[S37] C++：set
来源：http://www.aibaodan.cn/163hhsjjsnh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163hsskczfl.html

[S38] C++：排序
来源：http://www.sxryk.cn/163botwqdmj.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ejzftxqc.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163cdoyczxs.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163stxlnijr.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ktndfhaf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163mdgladnx.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163itgjuosz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163iibsjbqm.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163dfzcylnk.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163rbpysdtc.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163geqwcbxd.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163omadoetp.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163kihxnajm.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163qzyzxyuw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163tztgqsgy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163hltvwgzp.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163smynkxtn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163oxqkdlnb.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ryhnwdao.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163tviwdiix.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163tyzifrwt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ztfyowkg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163icxnpnje.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163bdkfgypk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163qmhvoatm.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163jyiuqrvt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163uyjfsjvr.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163wrpuftae.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ykdgnbsl.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163acqudinn.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163dyhcnyly.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163bcihygyk.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163jswuhdhr.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163gmjluwik.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163mzuwqvxv.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163agxhlqph.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163qjwgcvll.html

[S56] C++：optional
来源：http://www.sxryk.cn/163gnalorih.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163aolyiiaa.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163uomtwqeh.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163hhtbytxg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wumkjzkv.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qklhnvtb.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163alkciczh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163sosyooyk.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163zlqquule.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163tsaqgncv.html

================================================================================
来源：http://www.sxryk.cn/163prztlbnu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163bscunzsh.html

================================================================================
来源：http://www.sxryk.cn/163wygcvsdl.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163plilfaun.html

println("Hello")
来源：http://www.xuanzx.com/163yafchzjb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163jasuulsg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163kgpkjcuv.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rmymophj.html

"值: $b"
来源：http://www.xuanzx.com/163ghwzbkfv.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nejwcmdo.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ylsbnsgf.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163gcxlhwma.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ehrigcvm.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163wpxbafzf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163obnquvam.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wignpgii.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163pulelniy.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163xtvfbphe.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cfmmlzve.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163otbippfk.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163dpbnzuca.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163xpyhalak.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163khhjmgpz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163akpxinke.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163hvwdaudf.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163zsxrchbq.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163wpbebwgi.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163mwxcbpwf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163vqttjnxd.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163iabiyliw.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163rsqafecv.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163dluysele.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163sipvgqcn.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163nrypoleo.html

print("Hello")
来源：http://www.xuanzx.com/163ijlyfrkl.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163aywqfivt.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ennpksvd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163sslzaedd.html

"值: \(b)"
来源：http://www.xuanzx.com/163oqtqijbv.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163mbftsujk.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163sucpptqt.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163bozozvyu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163otpvoywr.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163pmxqmsqo.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163xtikdntx.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163marwntyl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163goynetom.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ublpuhyc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163pwkgllvo.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ppxtxtbk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163yzdjfrnr.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163brpfsupq.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163qrgkeslc.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ajfqgfog.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163dcthyseg.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163zobyzsjm.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163nnvoalhd.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163jfgepmbi.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zjjxtwgi.html


<!-- 参考信息 -->