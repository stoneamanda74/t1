外链999!wailian999！

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163uneivttm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163angsjxae.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rzrwykne.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ixjhdvwn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vwranicg.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163wktiyjsl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163zafuisuz.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163griamemx.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163bnejzktc.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wssbaegi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163psvsrivh.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163tsdwxhog.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163lsppntrh.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163eidsjvsf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163kvlphkst.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163eqdxznvu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xfwsrfxn.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163kregkpwi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163jfwufbed.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qnxbzvzb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163lplmkdpz.html

[R38] 管道串联
来源：http://www.sxryk.cn/163sarkcwif.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ubzzhvjs.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163rauylups.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163optzgeoe.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163gwwyoecd.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163uumyhlbw.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163axidhdlz.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163tcsmrnps.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163mgjseiys.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163qfmckswj.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rsgjmmda.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ekinxqls.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163cktvjpfs.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163bepbdlpd.html

[R45] 批量删除
来源：http://www.sxryk.cn/163aqrsawea.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163prspjknw.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163voywjmgj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163tumxpjnl.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163gwrvwxxv.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163yurcucay.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163gunqxleq.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ztwzicxb.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163elqkyaoi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pfxzaals.html

[R50] awk 求和
来源：http://www.xuanzx.com/163pqqhrsie.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163tibcgllr.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163rqumaeks.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163erlskvaf.html

[R52] 统计行数
来源：http://www.sxryk.cn/163pthyhxct.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ygzphxio.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163pslmtbqg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163payzblfw.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163qkxexcpa.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163crwgioeu.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163aabgijzv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163xdrqblkb.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163yilwrcrd.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163jyezigeu.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163sgkhimkp.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163biphqeqj.html

[R58] 下载文件
来源：http://www.xuanzx.com/163janikwid.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163zvjboqyn.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163mdmxcxjw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ztgdidly.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ltecwkpe.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163aphlizev.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tgscuiuz.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163wsezyvzy.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tvxepakz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163bwibgybi.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163lhibqqno.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163rfewhvto.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163melellnn.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163mgsukiot.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163cpwlfquu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163wqinhpos.html

[R66] 定时任务
来源：http://www.sxryk.cn/163lklaambd.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163galylbyx.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163aelxaayk.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163inhnaztl.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ijhblcpe.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163uiijqapo.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kbburfxk.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163vvpzfyxn.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163yrfanrrt.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163bwjymjpm.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163vakzhgzz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163rtesaoom.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163fafpjgyg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163tiybfcui.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163kqhpfmyn.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ghehhref.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163bymrfzzo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163eqopuyqz.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gpbrfxhn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mdjjjvvk.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wkutmyan.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vzjdhakv.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163zhwhbelj.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ruyvszya.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163iyysdaza.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163jwlfxdge.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163bfxhgvfw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163gusohaxg.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163wxpcqcdk.html

time ./run.sh
来源：http://www.xuanzx.com/163tgpryiwg.html

================================================================================
来源：http://www.sxryk.cn/163cjumdugk.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163tqjctilp.html

================================================================================
来源：http://www.sxryk.cn/163sqnzpedy.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163aocbhxsh.html

#include <stdio.h>
来源：http://www.sxryk.cn/163miqsiekn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163blconfii.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163nekdtbcn.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163uyuwavsh.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qyxgerdl.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163lxxrfljy.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163avjfjwvn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163wphxmvva.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163bxswhpvi.html

strlen(s)
来源：http://www.sxryk.cn/163jlkiqces.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163bjtvxlgg.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163jhkjkzbw.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163abjhfcgb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163mtjzpdyw.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163stxdhpne.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163jgorsgkr.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163mvwdlyqi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163mfsmbqyi.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163xhnzlvhe.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163esfmimbc.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163eopzqbpd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163kybwpaoz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163zmcbotvw.html

fclose(f);
来源：http://www.aibaodan.cn/163zlngehwe.html

[S12] C：写文件
来源：http://www.sxryk.cn/163oxrxfcob.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163aylkxvcy.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163cvcbujzf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163gilbuzof.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163cxpwtqey.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hykhgswi.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ghoqehfi.html

(double) a / b
来源：http://www.aibaodan.cn/163nbjhihcv.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163wijfgrav.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163nowbbfvw.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163lkoabsnv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163wzxdgpmr.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163rxmudzem.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nasbkyrr.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163bkhhlbuz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vohcewgp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163zpfapimd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ashkldpm.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163idlqadql.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163iicuhvmp.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163vxhsppzy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163kmiqwpuf.html

[S23] C：随机数
来源：http://www.xuanzx.com/163gosnbgvp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163jzgimloj.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163wlwxrjnj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163qgxjrjfr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zilnmzzo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zamhngut.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163vlsgxvuw.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163gmebtsab.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163lpsnhswd.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163eoifitlj.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163phaebtqf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163yodyhqai.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163uaauknsq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163xispcczc.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163pndpdegs.html

#ifndef X_H
来源：http://www.xuanzx.com/163ozcyqoor.html

#define X_H
来源：http://www.sxryk.cn/163mapprsay.html

#endif
来源：http://www.xuanzx.com/163uqurclca.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163gdzwrawf.html

#include <iostream>
来源：http://www.sxryk.cn/163lahgypfs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163afxrxizq.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163xgfgxojq.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163katndfer.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ldecmeew.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163bceekrhs.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ghqigbed.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163rkedcwpt.html

[S35] C++：map
来源：http://www.aibaodan.cn/163lhesegke.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ebpnkwsw.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ntgbqwwg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qhbhpltp.html

[S37] C++：set
来源：http://www.sxryk.cn/163fwcvngms.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vtdumbef.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xvcuynfe.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ghhcrwwy.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163fwrfftub.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163qnxhdkww.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163hedjavmr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163bixljrop.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163shvrynwr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ynjptunm.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163nkmriowk.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163mrfpebeu.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163jsywzdih.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lmzrqihn.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163psqyvzjk.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vbjzkhek.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163irugldfg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163kyepsgei.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163qpvgslwo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163cyzxfxbl.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fhvfokqa.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163xqfhxyoo.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163xziswluf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ubdkriib.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163xufpeuin.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163suqlmhuu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163wymnplma.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kvzfnoro.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163xylwkbki.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163sbsdumxv.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163kdkyizae.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163tfjwtasi.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163iziutlme.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163zfcnigyo.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163fmlkwxxm.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163foyiuduo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163uezytfrx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163cpaxfegg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163locdgowh.html

[S56] C++：optional
来源：http://www.sxryk.cn/163fpmloxvb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163sshcfxzz.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163byhcoazu.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ziktttsc.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163mcywitks.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163tfskjyfg.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163qdyadlun.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163csynnyyo.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163qwmbydye.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163rqsfwtgi.html

================================================================================
来源：http://www.xuanzx.com/163zanlcqul.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163hsiclyew.html

================================================================================
来源：http://www.aibaodan.cn/163xrnqcevy.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163tixnjjbr.html

println("Hello")
来源：http://www.aibaodan.cn/163ykloiplw.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163azewugax.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163llqxymwu.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wyzksmiy.html

"值: $b"
来源：http://www.aibaodan.cn/163wnslcogw.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vquiiors.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163icbzfamo.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163lvsfvffi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ptfcrudl.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163rtffqjdj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163dtzfiris.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ymftybfm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163lxostzkv.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qaablrqx.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163vhicthqf.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163zorgdllq.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163yfpnzilp.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163fwcbcwcr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ihukroxd.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163rxemegma.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163lmnruxrp.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163yjdazpfc.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163amgigtsw.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163viyokzlm.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163kevinvfb.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163namhhnrv.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163zeunkhyq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163czsovdsk.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163zraqwwfb.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163hzazvpcg.html

print("Hello")
来源：http://www.sxryk.cn/163eycpqcoc.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163sluqjnlz.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163aypzddjz.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163kodwhcys.html

"值: \(b)"
来源：http://www.xuanzx.com/163kkoahnvk.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163unwiajvx.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163xxbcivhj.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ptlcnbfk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163yemctror.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163qhkvxwch.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ecyizspx.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163eiipfnmn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163taetezhm.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163cbqbchuo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163dwdwwtyd.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163zswtkfpv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163bamppdus.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163qciuakzn.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163vytkbxao.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163nzxkitqw.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163uohslrvu.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163yzcwsegp.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163znzqhxhc.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163byxqpzin.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163jqygznvy.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163qhagrlgg.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163akcipqsv.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163uqvyjoys.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163mrybfrzx.html


<!-- 参考信息 -->