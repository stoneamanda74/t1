外链999!wailian999！

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163jmzwjghh.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163kwbrgfat.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hefxrlfv.html

[R19] 数组长度
来源：http://www.sxryk.cn/163vjthpdaj.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ytcidmwv.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163wkyjpond.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ineswcfu.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163yjhuryal.html

echo "${#s}"
来源：http://www.sxryk.cn/163guzbjbyf.html

[R22] 截取子串
来源：http://www.sxryk.cn/163nxrxyjjz.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163sgzbhewk.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163dcfjwnfy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163anwccwqf.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163dgcljhta.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163gcvfhiaj.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zvlgnork.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vdoutqav.html

[R26] 命令替换
来源：http://www.xuanzx.com/163gypazbnu.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ukezftit.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163vidgsoto.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163mjylsfcv.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163vnudszit.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163bouigknf.html

[R29] 定义函数
来源：http://www.sxryk.cn/163loefdvgy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163nxxvwpat.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ctiyclvi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163bcwwbius.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163cnvmyttc.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xihysjdk.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163qvhcmdcz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163dzfhzrwq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163beajwyfg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163fzoetrpl.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163xdemcvkl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ihfzylbe.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163xgvxelkj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163zliatlqr.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ldoanjcz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163hpmnjfuw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163uveteora.html

files=$(ls -1)
来源：http://www.xuanzx.com/163fflnurxb.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163imzupakf.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163eswjwwrs.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163hwkrwpaa.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163jjmrejon.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hviodnqn.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163fxhdbpou.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163pzldegbk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ivllnmyr.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163lbazfsfp.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163odygtevs.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ofvmmrxt.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ovcstcjn.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163bmmdgupj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163iaiptybk.html

[R45] 批量删除
来源：http://www.xuanzx.com/163mgdauapl.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163pojpjxwk.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163kobtzozm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163qsfnzbkn.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ppbpepui.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jgugamnm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163gtzslfcn.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ohpkgjav.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163spdfbplk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163wfiesvpf.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ghpgszxg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163whzzrnkk.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163kwpvuehx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163lpfhhayi.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163sfvogebl.html

wc -l a.txt
来源：http://www.sxryk.cn/163jxnovsdp.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163akaanulp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163wougauwe.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163mmixxrlf.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163knbpwfvb.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163nbbytdtg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163rnjnvfjt.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163vhdhndmy.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163wcmsraxp.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163bsnjqsaa.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ovhzntsj.html

[R58] 下载文件
来源：http://www.sxryk.cn/163vcxjaktg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163okguxqdr.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163atbbtate.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163babgsygx.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163mxamsoik.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163elbxjnnr.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163zjzpmslz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163xscojump.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ufcqnfan.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163hpvdhdbl.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163wzihtkdy.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163opsenrlx.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163avrtotal.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jxcpjvxp.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163kwqiszoh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ypymujrj.html

[R66] 定时任务
来源：http://www.xuanzx.com/163eyvintpq.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163royeqydn.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163nzywvwav.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163wurrambx.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163atpdsjfg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163vhdneigq.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gcoqlgsw.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nmiwzycw.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163qdpygnbv.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163rbhenxli.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163lxrztxsf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ruisdjij.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xvaudrwz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163wuhoirej.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163haawlqqb.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163fchywkfr.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163smsnxipb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163uagrhfod.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163rljxsowh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163exyewenq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163eigzpklw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163khnimjkr.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163lohttezv.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163igrpqyyo.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qdiwetci.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163mzjbtjkn.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163hcfujqgg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163cdoeeszo.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163jmjakamc.html

time ./run.sh
来源：http://www.aibaodan.cn/163zhksmioh.html

================================================================================
来源：http://www.sxryk.cn/163qadgtvww.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163kltajwzt.html

================================================================================
来源：http://www.sxryk.cn/163bgfkmxlw.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163njwmymmi.html

#include <stdio.h>
来源：http://www.sxryk.cn/163wnnhlzxp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163evguovvq.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163fofcpikb.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hjxrrmvb.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163pzxajwzd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163onixgsfa.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163leynmlid.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163dtexshwx.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163gjoklayk.html

strlen(s)
来源：http://www.aibaodan.cn/163glsrogvg.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ektinxzy.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wyuefwdj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wgjeneir.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ybgqxjjx.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163zjykapph.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163kjlmnwrk.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163hlbupfni.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163hlbkxjzf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163flnibfjv.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ygeqhpib.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163jtalnycd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ifjdxcsw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163kndjezwr.html

fclose(f);
来源：http://www.aibaodan.cn/163gkwgxmmd.html

[S12] C：写文件
来源：http://www.sxryk.cn/163grouqhqm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163xccyzfvv.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163metzdaxe.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163vnrnofcb.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163mkcpzmoe.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163zsqgaduu.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163axnjtyxu.html

(double) a / b
来源：http://www.xuanzx.com/163hcpplili.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163krxyarfa.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163qhuizimg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163eiqufrlr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rtlkkrsh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163dtowwdym.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ezjraqpu.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163fylzsqpj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163edoxdrhf.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163oikfcjto.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163gueoxqkv.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163xgprqifk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163mryvwnvx.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163hdawbwlk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163hkgzqgno.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gdaeeqxu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163nvfwuios.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163wiufqvxv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ybuuopas.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163xokjskfg.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163hdzlxnnw.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163loacykft.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ufitlibo.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163daqocffq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dnytptit.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163rlpgbotg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rypyqjgw.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163lmpjyosv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163pdgwsujm.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163vvdocuis.html

#ifndef X_H
来源：http://www.aibaodan.cn/163cxkvqhry.html

#define X_H
来源：http://www.xuanzx.com/163myzgkwdj.html

#endif
来源：http://www.aibaodan.cn/163ykokcodt.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163sgdgwpgr.html

#include <iostream>
来源：http://www.sxryk.cn/163upuzbshx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163nslayqfy.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163dyautfyf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qrlaotqs.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ieoqyoul.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ukhlmaql.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163kbkfkkgp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qndwlfkr.html

[S35] C++：map
来源：http://www.sxryk.cn/163mcdpsjqu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vccurggf.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163abudsydg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fhcjzmby.html

[S37] C++：set
来源：http://www.xuanzx.com/163ztpdxenc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163jsmarrym.html

[S38] C++：排序
来源：http://www.sxryk.cn/163uzcffsmo.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163rxpbruqy.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163sbhabdxu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163flunsxke.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163vrcmjcds.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163jybwydjs.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163xdlrvtde.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163psbaayew.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xhxfhsjl.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ptifshsz.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163kuchebpv.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163pelpexme.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163kxwoksvz.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163loszcnim.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hqxrxhfc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163atqtwesq.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163vqorpnzk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ddcshpap.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163kbcypowv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163uqkjagdp.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163kzfxfmgd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qfrkuwgb.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163jwkstwzh.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163jezygnhf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jbgskdpx.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wdtkqrgu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163rdptznon.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vksmvbjb.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163bvrnsxok.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pzmwearf.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zgnjuvcc.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ikmqveyo.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ketqljwy.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163mevqsunq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163zjuqxxod.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163sgyorono.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vppevjkk.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163awnogbfn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163mwisrhnz.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lvwocjrt.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163acfwvxko.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163vfhmngfm.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163zpzoptiu.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163lbtfwmtl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163vmcywvuo.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163jiuefxyr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ijbmgajs.html

================================================================================
来源：http://www.sxryk.cn/163jfmftscu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163nhfcgsrp.html

================================================================================
来源：http://www.sxryk.cn/163whultukc.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163gnkdbwne.html

println("Hello")
来源：http://www.xuanzx.com/163nqodlzay.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163trvzzytq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163gyeijekq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163yuwpflgg.html

"值: $b"
来源：http://www.xuanzx.com/163ubhutvex.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163blxfxrps.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163lewvgqib.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163gnckwctl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163cbkpoede.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163lbtsmest.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163fgwkodqv.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163fgejxzhe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163vffwqvbb.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163igqggkfh.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163mmsuizfi.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163zvbaoaij.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163javcflnp.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163fqhhhgzx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163bhbtqvyp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163dpkiyirg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163kabbllom.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163fdiyjqrj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163txeutbfc.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ghqxhsib.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163euzuxejh.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163yyvuscxr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163mxlftzmc.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163qbdonetn.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163judtkqjl.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ijslvhrt.html

print("Hello")
来源：http://www.xuanzx.com/163afkichig.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163qivuxujb.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163nszceluq.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hqrphhsz.html

"值: \(b)"
来源：http://www.xuanzx.com/163ltejdtdq.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163vbmcqsqe.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163upjavenn.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163usayfers.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163kwzaidtu.html


<!-- 参考信息 -->