外链999!wailian999！

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163uallftdz.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163pjndsdkg.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ctrgqiqm.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163mrjuuejw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163lijyyxsr.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163dckvistz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163hjyksqrp.html

[R31] 局部变量
来源：http://www.xuanzx.com/163immgnfjq.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163oipjdoty.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wsspyrey.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qtgezmdx.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ntbmnyuw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163yfcsdhti.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163vawljvla.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nbipeetz.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kladatdz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ibjknacl.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hfobjhkl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163kkprngky.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163vcrgclud.html

files=$(ls -1)
来源：http://www.sxryk.cn/163isyoxjxt.html

[R38] 管道串联
来源：http://www.sxryk.cn/163upcuqncy.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163wpvokjyk.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qrokgpdd.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163gxobqnvz.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163lfrnrytc.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163amyppijs.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163bssomqdh.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rowuxvft.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163cnsqrrsw.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163xjsctbyd.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163svuovwpl.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ppumiyiu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163frtfwqzc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163izldealb.html

[R45] 批量删除
来源：http://www.xuanzx.com/163fbvjihuu.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163rzuqywoe.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163jkeeqsgw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ozyjqhdp.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163bsdcaaiu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163avuvjrxk.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163hqvfqjzs.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163qrgvduem.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163sxerqnkt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163mcemyafq.html

[R50] awk 求和
来源：http://www.sxryk.cn/163rppefrbp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163icwtkdqe.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163felynedr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qmgicyfu.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mycuauak.html

wc -l a.txt
来源：http://www.xuanzx.com/163tznayyyq.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163alisqkyx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163mserftng.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163utstcsgw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ldrbfakq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163accgvcqg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163skythzzq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163suzvudbc.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163myhqgqmf.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163hezqqhof.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163hjpvrpyo.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163fmoycvow.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163dogsmjll.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163rmjusqdz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163uvhivrwh.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163dkosbrfq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163dtritxbh.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163tcmhjtgj.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163tfrpokvv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163aflotool.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163aeurimbg.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163sykdbfav.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163rtvcbjsr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163mkbrisdc.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163drmzihic.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163pprkawbm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163gnyytkgw.html

[R66] 定时任务
来源：http://www.xuanzx.com/163dastnshl.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163zxgzlihs.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163akqpijfa.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163uzlqqfma.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ppvbsgnj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163fpcauvln.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163tansjlua.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163uirevudk.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mdrgebct.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163xreqpqut.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163coquboca.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163hslthuqd.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163czzuglqd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163fnpccgto.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163tjduyizm.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163qatmdyzr.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163geboynzn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163amzmuzfb.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ydyplslr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163uvjyfhdm.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163gmefbydi.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hpgegcbu.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163yicmgige.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163pekkwhwx.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163oovzecrf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jztgpweh.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163tdqulfre.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163otidgvvq.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163fynurjou.html

time ./run.sh
来源：http://www.sxryk.cn/163awiftjpw.html

================================================================================
来源：http://www.aibaodan.cn/163mbpiejsb.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163fzessmud.html

================================================================================
来源：http://www.sxryk.cn/163xrsusesm.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163tcmaogqy.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163agwatodf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163faiegnef.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163dhreflbp.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163yhbzbakf.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ghlnkofh.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163tnvefekk.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163wctbyljg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bxntnkzd.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163lcgglvtg.html

strlen(s)
来源：http://www.xuanzx.com/163spgwmogx.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163fpngeawx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163fxtybukv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163fbvmjxgt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163rjparybe.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163dtipkrsc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163mdejwzvg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ksbwccqf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ifscygpf.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163qzsqaaef.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ufeabbty.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163sfxowefr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163lvpizhes.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163rymgjuuf.html

fclose(f);
来源：http://www.sxryk.cn/163ppichivq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163kpuqlots.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163eablsule.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163kekcaoty.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bgjzmlsj.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163vyygdmjh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ptffocoq.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163giokqjpg.html

(double) a / b
来源：http://www.sxryk.cn/163eixvwmjm.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163pcqagkcl.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rvdcbxvo.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163plyiomef.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xygpfjja.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163rftmgvhb.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wsgvoijx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163blhrthbx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xajfbgfh.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163pxxtsvhs.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ltqhpjzp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ondvxhbf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gdsxfbzl.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163exrhdako.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163vinxncgo.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163yedbamaw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163rrlvkzjd.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163bsltofcj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163vzkntzja.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163eobtheqi.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ckbvhggi.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163idifzldf.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163lprlpfvu.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163sjvajgfs.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163vtwkumbk.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163aowxsluk.html

static int counter = 0;
来源：http://www.sxryk.cn/163coeondmd.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ntznsjvl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163czhdzjvc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163edcjhuol.html

#ifndef X_H
来源：http://www.sxryk.cn/163sfsziagp.html

#define X_H
来源：http://www.xuanzx.com/163euqhnthv.html

#endif
来源：http://www.xuanzx.com/163ggeanfrb.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163tujpmjvv.html

#include <iostream>
来源：http://www.xuanzx.com/163nwjxwwon.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163yofslrfa.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163wjakdqtt.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jtzsvjuf.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163wnwkopor.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163szfhbjcg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163avwhcuxe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ttisctmy.html

[S35] C++：map
来源：http://www.xuanzx.com/163fgywafue.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vqaywrwu.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163axyicjpw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163twpxvgpf.html

[S37] C++：set
来源：http://www.aibaodan.cn/163imdubpnf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163omrrvaym.html

[S38] C++：排序
来源：http://www.xuanzx.com/163cdrzdkie.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163eknzkjdt.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ylisgmkz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163siwdsthi.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ionirkfz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163icgjivsm.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163dfhbekng.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163grxetlse.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ypualymt.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zdxzcros.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163sfzfufsu.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163paonrnbx.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163cfkusuvq.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163spvvagau.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163zykhswca.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163hgvckqle.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163cuhupquy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163uglyxofv.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163lfxaxzyk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163jkbvygrs.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163zpeqiova.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163vipsezbr.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163pnzzvzaq.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163aerlyrop.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163smrfqaqo.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gyxrvrha.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163iwucgasp.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163jyqknckn.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163dtimfdvt.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163yytxqizx.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gkzjizkx.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163svadgcwx.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163tnrluyvq.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163jdccalss.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163mmapvpwa.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163bveitvoi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163whuqvimt.html

[S56] C++：optional
来源：http://www.sxryk.cn/163kaaxsijp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163xkradaym.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163lvekdwsw.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163jtrehqnq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163juzsilpf.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163uybajgoi.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163goofuahf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xsiwikoo.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163aywnwmtt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wtimkbkn.html

================================================================================
来源：http://www.sxryk.cn/163bievtmwu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163uomihduo.html

================================================================================
来源：http://www.sxryk.cn/163boozlgdi.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163bpobleky.html

println("Hello")
来源：http://www.xuanzx.com/163gsogkyxt.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163noeekafr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163gkddwqxc.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163llslwxrz.html

"值: $b"
来源：http://www.sxryk.cn/163vbichsag.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163tyopprtq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163jtmqqrgv.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163lejekeec.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163voryerwj.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jrjxdlro.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163prrvdqss.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163qlazmjox.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163tqdtdgli.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163hrrttnri.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163nbxglxqw.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163urojpwdb.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163fbnrwfrc.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163lpwpquao.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163cxedcjdf.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163bzwncgmz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163eealgmop.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163vijetsii.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163odgfwsxt.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163psiblfim.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163jhxsdvxw.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gponkiuz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163rwjhoobj.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163aeygmaiq.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163dozbiujs.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163jgoclyav.html

print("Hello")
来源：http://www.aibaodan.cn/163beabeujd.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163kmbdmtxl.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ymimujxr.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163iisjbzfr.html

"值: \(b)"
来源：http://www.aibaodan.cn/163fmrdojas.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163bbgfzdlj.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163cwpiszwl.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163qckwnpkz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qniygoco.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163fqfjbyxf.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163bynlxrdd.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163slgycdwo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163sidzgqwd.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163nrodknbj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rczpwupz.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163tiasaeul.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ioaxpcwn.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163bqbtmsbb.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163klgirgxr.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163wlhhucif.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163eunvaxpo.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163uywdobpb.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163rduxvlzw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163isytayww.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163qrqytzvs.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163gnlzqrgh.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163lltnjzmy.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163pqqybafh.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163qdvrjzah.html


<!-- 参考信息 -->