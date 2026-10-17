外链999!wailian999！

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163udsqloak.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163xifmhfty.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ddyxytse.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163iqdjpfdf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vadkylyj.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163pybwltnk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163qftaxska.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163szrgrtji.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163tzqhkpse.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163yixfbkbt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163hcdjecgk.html

[R19] 数组长度
来源：http://www.xuanzx.com/163jxbydolu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163iypenzak.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163pcdylnla.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163rbpvoimy.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163edptwzqq.html

echo "${#s}"
来源：http://www.aibaodan.cn/163krufuius.html

[R22] 截取子串
来源：http://www.sxryk.cn/163wsdkpmvw.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163engtfxgm.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ajcvjlzj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163tjrhbnug.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163snlhdnyw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163toibepeh.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163smvdsaku.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163yeoyxyvv.html

[R26] 命令替换
来源：http://www.xuanzx.com/163txugifqb.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163vrsnqpxv.html

[R27] 算术展开
来源：http://www.sxryk.cn/163roxgkurx.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163motjwtcx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qvqwtfzp.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jenbilsj.html

[R29] 定义函数
来源：http://www.sxryk.cn/163szvyutwm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163eepiqrip.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163osxymdjg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163tmccqmue.html

[R31] 局部变量
来源：http://www.xuanzx.com/163idnutury.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jrbtbqcv.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163khyferqd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163fouzcfqr.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163rqjbzrvu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163frfrrrce.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163yohqsdhp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163bvmdtpgn.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163mcqxadps.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163lhrgihqu.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ykglofxw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163rfpiwpit.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163gqidswow.html

files=$(ls -1)
来源：http://www.xuanzx.com/163koxsqzxe.html

[R38] 管道串联
来源：http://www.xuanzx.com/163buguecqt.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ovcwmtou.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163exzmzxjc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dvgoncyg.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163uftvalsk.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163jhhndamw.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163lwuqopbb.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hbinlput.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163fjsgjkcp.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163tmmxvgpp.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163pltycmar.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163dtnxbjrp.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163xxnohdjz.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163pnqxvlad.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163kieotfhh.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163tfiyxizv.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163tubtyacy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163rejwatxg.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163fqgshrsi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163xfaezesy.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163dtsbamlo.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163epqkwzqt.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163jplrtzqh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163amvwnmrg.html

[R50] awk 求和
来源：http://www.xuanzx.com/163sdboqeng.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163zfzxjtke.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163tjcwmfei.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163tvycewdu.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ftrjyzqv.html

wc -l a.txt
来源：http://www.sxryk.cn/163qppmhxpo.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163akbcnphv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vxzzgycf.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163caohpjbz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163jrmesrkp.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163stmxyxja.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hkteygjy.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163iepkldyi.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163xpptuunc.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163qmrgonww.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163inxdvwsp.html

[R58] 下载文件
来源：http://www.xuanzx.com/163oxdcihfh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163oublpwuz.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163iqtyfqsj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163dpbqiboq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163acangrep.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jcssbabf.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163nbybguna.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163voxkafyb.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ubtmggeu.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163zircvutc.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ajriujzz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163vhfaxfay.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tgiwmqor.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163sylbobag.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163vwlzwjdz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163uqxxtqpm.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163fsqtavys.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ywmkprqh.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163xmzvttqd.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163fgyzoisr.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163agjsxbpx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163nyogzcnw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vfppdsob.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jvqcllhu.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163rfpenhti.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163mixqftsn.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163lstvjqve.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ddqlxgxc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163aypcvjzw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163vrrzggal.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163hrplfire.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ttutwofc.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163zaehuzaw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163bsefyfpk.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163qmuwwelj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zjxabozg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163amddrbqd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ikdtsmvz.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wmzoqcks.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163yrldmytr.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163uumnzvdo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163alzwotif.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ylwuoxmf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163nwwfcngf.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163zeedpybl.html

time ./run.sh
来源：http://www.aibaodan.cn/163mfjdnqve.html

================================================================================
来源：http://www.aibaodan.cn/163uaeoncyy.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163fqronfgo.html

================================================================================
来源：http://www.aibaodan.cn/163wvtbitdb.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163emoyxmtr.html

#include <stdio.h>
来源：http://www.sxryk.cn/163hyxcsqmk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163hdmfqymk.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163myhvnmqi.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163fzqklwlw.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163wciqlrgr.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xtgrbrcu.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163fkdbzvph.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kkacfmlb.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163rhnkgdva.html

strlen(s)
来源：http://www.xuanzx.com/163foignhfb.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163rrcvbgfo.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163abliokgt.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163gfufcmxv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mnvrqdiq.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ffypsvgg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163binkqbwb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163brzbbceg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163oipglbbo.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163aypryobz.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163sghjhksy.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163wztuvxin.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163wmuqenwp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163bkifuyvd.html

fclose(f);
来源：http://www.sxryk.cn/163jldpftgb.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163xzibklkm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163xdmfmfbt.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163kinoosbc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163mtbxcvit.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ilsfddal.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163aumneskx.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163wnwfjnjz.html

(double) a / b
来源：http://www.aibaodan.cn/163tfvcsswl.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ocbxickb.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163bpuefzhq.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163tqmqgbzd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ovlknpvx.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163kkvelarx.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163lodugbds.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163smbtfuuj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dfyitame.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163eibtgymr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kfbnyird.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163vodiupnc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163mlbkjbxd.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163mfyffyuk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163dlqlatpz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bbwslnxz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163sfcbglsd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163njbfheaw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163kjskccti.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163rcnrrwpm.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163wdzdkslc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163lqufvkwu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ojjmethp.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ziiljxko.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fgdtznhm.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163zzbznvcs.html

static int counter = 0;
来源：http://www.sxryk.cn/163hverbipx.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ytqkzswf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163iozztsnd.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163rfaxqxvc.html

#ifndef X_H
来源：http://www.aibaodan.cn/163tfakcblc.html

#define X_H
来源：http://www.sxryk.cn/163tvlxxnhj.html

#endif
来源：http://www.aibaodan.cn/163uheprzgs.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163aisfaxtz.html

#include <iostream>
来源：http://www.xuanzx.com/163txvykopu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163xzavbqtd.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163hyyroued.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163oqmrxtog.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163tgamwviz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163kviiqnsq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163reueaknb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163yitwrgmq.html

[S35] C++：map
来源：http://www.sxryk.cn/163fxiyncqs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163yhrfcjlj.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163cobtwwvn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fuykqyxj.html

[S37] C++：set
来源：http://www.sxryk.cn/163aikkerij.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163qtzjhnqj.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vjfplmsv.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163vcyflvho.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163mbwraigw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163bfqtizgi.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163msxgscop.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163yippfzje.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163daivlkdc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163tgastumv.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163hwomjmrl.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163faczvcto.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163jctbjunv.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163dfryfknc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163tbzpfivc.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163stlngtfl.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163iorezksy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163kvoylnlr.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163zkbugbhj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xtlfzvzw.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163lawfvlev.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wnmdfseb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163nwamrrnk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163abweufld.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163zhojfiar.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163zzrxzecx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ecvtssjj.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163mwkrzmji.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163vfvwotml.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163wqqoscrm.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163yrgcazyd.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ygmxavfz.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ttkqduze.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163mpmupuhk.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163bhmswxjg.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163sffshxrc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163fdvjuhyd.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163vlududgr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163apeowdfc.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163qlhdfaen.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163axjqirek.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lndahrkt.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163hgzxmrij.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163aqdsaahq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163yzsjyyha.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163mjfgovaz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163dxocfrjb.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163iicxylii.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kgylzivd.html

================================================================================
来源：http://www.xuanzx.com/163jyyqzurk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163erfsaigz.html

================================================================================
来源：http://www.sxryk.cn/163ecvatmiz.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163rntyhtbb.html

println("Hello")
来源：http://www.xuanzx.com/163dxrpvmgb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163mfuxwxop.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163czhbsyfq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163jqrvesbf.html

"值: $b"
来源：http://www.xuanzx.com/163phikrlno.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163uqvebwoz.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163fbewpxrn.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rptjaiay.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163fzfilecw.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163fqfrnvyj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163snokvbav.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163lwywktzl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163bwhxtigv.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163dubvnvde.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163nkhtejyp.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163lzwybanz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163hdjozhzo.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163fiaexoqq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163mfanjjmw.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163fcjogzbp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163yncltepn.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ghancgwf.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163itfhhfxa.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163lopdxnwy.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163hzdbhxwm.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163sslrvdko.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163zvtyvxgi.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ctwyckqd.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163bodoemdg.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163knewuprt.html

print("Hello")
来源：http://www.xuanzx.com/163filwrvos.html


<!-- 参考信息 -->