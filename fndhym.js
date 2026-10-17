外链999!wailian999！

esac
来源：http://www.aibaodan.cn/163tmuwlqug.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163euxpsszv.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163zpspqmrh.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163wowghdgi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ekcxhayp.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163purrnomt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163moqpoogk.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163yoxyiqqq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163quoejvpg.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163arkscphq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tagygmuo.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163cjihsnrl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163frtpsvjw.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163bjnnlobs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ifzxurkj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163phiyhlwe.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163fatmkatz.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163opumnxxw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163hnespfer.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163drlqlwtq.html

echo "${#s}"
来源：http://www.aibaodan.cn/163vydwburv.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ahvegjlw.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163jzorevik.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163gzgegred.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163uoohzspn.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163jbhvgnap.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ntyckhnu.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163nrhrjseo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163yngypkqp.html

[R26] 命令替换
来源：http://www.sxryk.cn/163aolfozps.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163oqtlakpf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163kmihmccc.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163mdcjbubv.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163zefpibxv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163konfljmf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163udxfjyjz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163jbdxdqls.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163erxwrnbc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jvinxzkj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163qpxzsylv.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163qzrpytqb.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ykmivxfx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163tsxxycse.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ycktwiuf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163orviotim.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163plnsipoc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lsfkrohx.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163fpjlcgne.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163fokispmu.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163mnmrhvfy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163oxlxbumk.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163nhnngfuf.html

files=$(ls -1)
来源：http://www.xuanzx.com/163otwpdxtk.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bvdnndqr.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xvjkpksx.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ukaauidx.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163xinptvcb.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163fgmgcqfc.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163rrkgfknt.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163btqupfox.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163htxgttoa.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163qomwuthb.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163frqmcwai.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163wlbbqqoo.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163pbtjiegk.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163gyovninq.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163svmfjtbz.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163uuauylzm.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163zhzbozos.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163hjlymwzh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163nbykscas.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163kmqisuvq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163xqoexmar.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163hclszfsy.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163byvgjkxy.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163cutdcwgf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ketrxwzw.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163hjfikgnr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163vlqjtxzh.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163fcrzjzcr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163lvkefqqt.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163jwxhoxng.html

wc -l a.txt
来源：http://www.sxryk.cn/163rsiqkhhk.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163iivcdrzo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163jyurhfzr.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163kpenmkgv.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163uresifcm.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163popcoaji.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163dqroxmwc.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163vnigtjuk.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163susxwchw.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163opoyfhfv.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163lktmfuhu.html

[R58] 下载文件
来源：http://www.sxryk.cn/163zhmhcbut.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163kjpuhtdi.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163rvlbfifk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ijxkpphs.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ajnsquih.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163cdwfbmyk.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163nbwxfnmt.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163lordvplt.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163vnezfvfm.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163rprtnvse.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163sdpvzbfr.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163rrkludjd.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163opezdocd.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163jvtxomtg.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163nuplcdcx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163egdtxszk.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vjjhtdcr.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163vmukvcms.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ajrunfjk.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163bgeobhgi.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163lzumudvg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ysyvxsce.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163biwnqxjw.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163twuggzds.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rpjfclub.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163hafwospe.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163xjgpfqtt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zlmibvyc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163reudyvhw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163lldmvcak.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163mezsvdis.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163lkqfdrzv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xfupwhdz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163zjtmdejp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163axcqyolt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163hmarzoog.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wzsawtpd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163aupqbzlx.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ujfkzksi.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163jijieixy.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163wpvrsuxb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163mpflgxtu.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163zjiwdxdk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163mfadcdfz.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163rwqyntrd.html

time ./run.sh
来源：http://www.sxryk.cn/163dtywaqbv.html

================================================================================
来源：http://www.sxryk.cn/163xhgrfxeu.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163snadmllr.html

================================================================================
来源：http://www.xuanzx.com/163wbrvphqz.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163drjgwagl.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ynfqfyix.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vqpewejg.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163bkvjkwak.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ryskfgcm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163djmyrzgg.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163mjmmuxtl.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vhfidqpv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ejnftpfx.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163iehnpyby.html

strlen(s)
来源：http://www.sxryk.cn/163lokkehoy.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rivlgrvq.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wgphnnqy.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163gtfgohrw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163qlcizbkn.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163cnmtkaxu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ofhtjxtv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163poxbytrn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163zrlwdoht.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163vyyhkxkh.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ccuchffx.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163yvmmrghk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163tgprswlq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163wlcvhxyd.html

fclose(f);
来源：http://www.xuanzx.com/163eqyfojuf.html

[S12] C：写文件
来源：http://www.xuanzx.com/163itpkiflq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163mwzvahuw.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163wypxusna.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163pkklgrix.html

[S14] C：枚举
来源：http://www.sxryk.cn/163qznthhbv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163iobpykid.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163eagrrkhm.html

(double) a / b
来源：http://www.sxryk.cn/163woebcntb.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163hxdjcwth.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163bjpowblg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163fzpbivkl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163jptqwqdj.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163okhnaljl.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ajrfuqvv.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163qvbzihlm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163aukfpnck.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163kntyymup.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163crozdwok.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163gfgxvfwa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vdvjxmtq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163zjgbirqg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wdxclzos.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163wfrmlbvi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163gwfkyrzb.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163saodyxce.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163rceuwhut.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163uwrccnmv.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ypcwwllz.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163hiwzhpyp.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wxlygxcg.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163yxrxgcpc.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163raaxulkj.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163udqzfbms.html

static int counter = 0;
来源：http://www.sxryk.cn/163xgbjxifa.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163yrxcupxf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163runubqpq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163weldgqgd.html

#ifndef X_H
来源：http://www.xuanzx.com/163wbqstzvh.html

#define X_H
来源：http://www.aibaodan.cn/163kmotsemm.html

#endif
来源：http://www.aibaodan.cn/163lbrgmdex.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163lbholtdd.html

#include <iostream>
来源：http://www.sxryk.cn/163hynekjfv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163cfdmnsup.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wkttzvvj.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163yirmiqxu.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ixfsquya.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163doemjtgt.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163wrgzwegr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ksgsllme.html

[S35] C++：map
来源：http://www.xuanzx.com/163zyteodyx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163gptttlvc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163occgebje.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gjdbmtxb.html

[S37] C++：set
来源：http://www.xuanzx.com/163pftoaxso.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163kvonsljw.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gsobyhbs.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163jrvsilao.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163fvkejmao.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163qcpmpjdk.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jaenjhqb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163senzwzsg.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163zwefjzkm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163oxswmtkm.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163jylwpdzr.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163uivyklgj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163xucbqjnw.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163uesugekx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163vgeygvrj.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163afhgkbbh.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163chowgqon.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163fpaihlzi.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vofeqmio.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163sonavnsm.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163eggctabc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wrpshmkp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163mblesxir.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163pkiqofjy.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163tioczzfx.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163lzazowwd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163duovqcxo.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163zmlipjly.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163pdgqudhu.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ueadyvqd.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163kwlioxbn.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163wvxnytqy.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163cxeoxgpx.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163iqqxyqlv.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xapwphfs.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163xtafrdxg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163imtstpzo.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ivceiury.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163miaacyzl.html

[S56] C++：optional
来源：http://www.xuanzx.com/163wwuxdklq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ulamsisf.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163npkuufub.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163yefnuquu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163rvdtbqfg.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163arfgrvuf.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163fvhnrgmc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163pvhcwobz.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163hbwcbwnd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163zlxombei.html

================================================================================
来源：http://www.aibaodan.cn/163zxtxznrk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jcaxsuqt.html

================================================================================
来源：http://www.xuanzx.com/163pqpxtnor.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163pwwyyiso.html

println("Hello")
来源：http://www.sxryk.cn/163idimykpb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163wzvllrnh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163uyimqbkq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163spdjizoi.html

"值: $b"
来源：http://www.xuanzx.com/163kfinvsof.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163bpflnvdy.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163tjnozpnh.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163yfbivxwh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163tkewtbtu.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163xkpftcib.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163xslryoru.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163hgihovyd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163uveurefx.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163tefiidls.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163bygukfsq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163qrsjejrl.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163nhoxyyjg.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163dssisjir.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163cklreult.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ewmuxgzx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163wmhcbgxi.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163vdywcrrl.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163kntgiggn.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163zbkejyxx.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163gdxiakmh.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lwptcczk.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163fzvnrsxm.html


<!-- 参考信息 -->