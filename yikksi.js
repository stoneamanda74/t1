外链999!wailian999！

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ltoysruh.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163fhyvuled.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ulfyzcxf.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163duofoqbd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xdlwxzzw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qpofplbx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163mrufrpbt.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163bzzapnrv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163hyoiepqm.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163kcqaxxmf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163eokijwgz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163qhrshqba.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163xcrtjefc.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163jjyqsjgm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163tmohdejq.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163zwsicixn.html

echo "${#s}"
来源：http://www.aibaodan.cn/163avzwujvl.html

[R22] 截取子串
来源：http://www.sxryk.cn/163yyyxrbxl.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163acljqsgl.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163fxkmktcb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163jcmnhtra.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163dvfwgyqz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163iednzcqv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163erupgcsp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163kjwkewgf.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wozdeaxt.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163xlnawcgr.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163enwznusf.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163fysfwevb.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163niluawne.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163woytegru.html

[R29] 定义函数
来源：http://www.xuanzx.com/163nlgcensl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ayrwbncc.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163alclptmp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163bslgctmu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163teresxgi.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163mnsglmrr.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163oxgnbhai.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ihxoridy.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163jitxpjby.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163mexwzrct.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163cnoosepa.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qcgwcpxd.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163etmlwbxj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ekrqgjec.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163aecuvckb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163mcjzmdbb.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rgyzhbag.html

files=$(ls -1)
来源：http://www.xuanzx.com/163nehauueb.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163bbbarkug.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163wvwjdche.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163plqniiyq.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163qjypshlr.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163oqqyxpbq.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zafuxtvv.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163pupamyqm.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hlvmsyer.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163vxefktzp.html

wc -l < a.txt
来源：http://www.sxryk.cn/163afqhrqep.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163diubptsr.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163zawnfsze.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ghajnonn.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ioznqfuo.html

[R45] 批量删除
来源：http://www.sxryk.cn/163eorvlvxn.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163pdwocbxk.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vhvtgolz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163xjohhbjh.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ptnfjhto.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163eeaviliq.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163zqtvtqxd.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163bubumwbc.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ugawfics.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dkrhrwpl.html

[R50] awk 求和
来源：http://www.xuanzx.com/163htolhivf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163fivpbjst.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ptsjkgqq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163yfvmmtnl.html

[R52] 统计行数
来源：http://www.xuanzx.com/163brzcytok.html

wc -l a.txt
来源：http://www.sxryk.cn/163xikozrbd.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163mtikxjnr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163fettxhsl.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163jawfcnbi.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163unityxks.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vzazabky.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163faqfatgj.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jpcmyane.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163yiuxpnla.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tuxnvtif.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ukvjidug.html

[R58] 下载文件
来源：http://www.sxryk.cn/163yojihvht.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163mkkkkxfy.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163wuudrzbc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163tomgvigo.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163uyftqdto.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163doqlbens.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ufpwxsdq.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163etelplor.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163gkwanrpu.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163gunvlotf.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mdepkdcf.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163issrmhzk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163trwdsaen.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163bohrkukd.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163mwevvhib.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163onkndsol.html

[R66] 定时任务
来源：http://www.xuanzx.com/163egnrabxc.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ldwudmyf.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163foqidaqq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163izcxmmmb.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163alpxooqw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163qioggsbx.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ronyyzuu.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163uwnubpok.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xcqvtnks.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163tcnxaeff.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163tganqrtv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163pwmcweop.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ivfrsiyr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163bvdqxksm.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163lalkqbaw.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163huwbnwqt.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163gbefbkox.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163zsqdtmvg.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163eamadjre.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163gievrizx.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ducjyfsc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zwwirenm.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163crmljuqn.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163dqvqmbzm.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163wbboamab.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ucvjmdlj.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163uucajdcw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163afffsqcn.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163lbojrctk.html

time ./run.sh
来源：http://www.sxryk.cn/163tphzzteh.html

================================================================================
来源：http://www.aibaodan.cn/163nsyeylwe.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163rzblsrjd.html

================================================================================
来源：http://www.sxryk.cn/163kysjazut.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163lsrupzrd.html

#include <stdio.h>
来源：http://www.sxryk.cn/163eontbuyd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vkpmzrtm.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xxsoyiwg.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163vzaaruyx.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163zzsrrdbz.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163euzjzcpc.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163heztttwx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163vdihdssd.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163egxjomuh.html

strlen(s)
来源：http://www.xuanzx.com/163dgixniqj.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163yejtjgyh.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163tqvhgvxi.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163sozfkgqd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163oftrvkjf.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163lmjnthyt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ysgxhuat.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163dqivkumc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163mrxrbaau.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163gaxgfhbe.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163bufhpkiq.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163qomqmkcz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163nzrbkdoo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163tskbnbzd.html

fclose(f);
来源：http://www.xuanzx.com/163ngqsqqwh.html

[S12] C：写文件
来源：http://www.xuanzx.com/163cuheixqf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163rdrmhqkv.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163fyavtfgt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163dappqqed.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163nynevdwa.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vmbuarqv.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163fpbqxtiv.html

(double) a / b
来源：http://www.sxryk.cn/163ifzycaqi.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163gdzixlld.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163xyekdiki.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ftsobtij.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kopkgkno.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qmoyjbun.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163lzwncqsg.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163rwbeumol.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xmwdxdbh.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ojtznjtf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163etmkadvi.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163iadfpyvr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163bpqbmzoj.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qhwkoxcg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163pwcmxtjj.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qaaeazpw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ovgbxrss.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163aophqmto.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163zzwmyjgy.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163zqzuaabl.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ykfubavz.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qtzkhqkv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163iirbzlud.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163feophfwb.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163lsgdeoaw.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163kpwrupyy.html

static int counter = 0;
来源：http://www.aibaodan.cn/163aqlbpajk.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163hpccntvp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163alvweckm.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ezyiyqdi.html

#ifndef X_H
来源：http://www.aibaodan.cn/163rvuewktf.html

#define X_H
来源：http://www.aibaodan.cn/163qlnscjpx.html

#endif
来源：http://www.sxryk.cn/163ojyhzasv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163txyqtpfi.html

#include <iostream>
来源：http://www.aibaodan.cn/163uiqgwadb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ksttztps.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163jsyvdbkd.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163cqndtedh.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163aefudlst.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ewmtnhkl.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163jwsaemau.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163fsrbaill.html

[S35] C++：map
来源：http://www.xuanzx.com/163cugnwcal.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163oykkenoy.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163xhccldfs.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wctcwucj.html

[S37] C++：set
来源：http://www.xuanzx.com/163chunzqnv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163lfoijaej.html

[S38] C++：排序
来源：http://www.sxryk.cn/163pnhxawws.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163txancicl.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163lhrlqlyc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163vllzflye.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163rjchersb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163afasogbx.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163teiodcfp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163wfmsaoqh.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163bmgnzxwi.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163pfgzikep.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163lafrcpft.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163grewljrf.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163plkmgaho.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163rsqrymmq.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163njelurwa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163wkqoayaq.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163apgduqba.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163nuckkmoz.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163cpmgqhox.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163grxxwxjo.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ispbsifq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163yabaqzay.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fymdozbq.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163snedimpf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163lnpuyiaq.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163oubetioy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163uotsqroq.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163hxxbyzjh.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163zvrenlal.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163tdxzwfgh.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163nhrjajai.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163czvzspty.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163xutgolab.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163rjeqkkvi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ycdsmmlm.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163rayowdkl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163oqwcimoo.html

[S56] C++：optional
来源：http://www.sxryk.cn/163gesfuikw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163qgggmzhx.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163dvizyjmq.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163eerdtdgl.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163pnjcfgkb.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163erwtxylw.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163lilpitqa.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163xrhcldpl.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163qqsdiiec.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kbvaofrc.html

================================================================================
来源：http://www.aibaodan.cn/163rkvxmknl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163oivowsrb.html

================================================================================
来源：http://www.xuanzx.com/163cnebpxmk.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163vbbsycnl.html

println("Hello")
来源：http://www.aibaodan.cn/163cxelfwsm.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163hdnrokaz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jcrnlonv.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163jqzooenp.html

"值: $b"
来源：http://www.aibaodan.cn/163yawenjdf.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zsfsnktm.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163wzhdlliv.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163onvbnair.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163nseqshae.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163umzvnski.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163mmannixf.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163gvloubsb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163bazksbno.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163mvctimao.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163yqhfewvv.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ubvxgkmf.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163rjmqwutd.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163kvpofgrf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163pqdxhlku.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ahsxfaix.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163brjmliui.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163cuzikpyr.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163enxopewm.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163hqpyyskg.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163frjbruzv.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163whyrxjku.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163jbcpqnoy.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163zsazmbwh.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163dhmtfhgt.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163hngfqtey.html

print("Hello")
来源：http://www.xuanzx.com/163ddpqlswp.html


<!-- 参考信息 -->