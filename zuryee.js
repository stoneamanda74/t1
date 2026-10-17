外链999!wailian999！

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163nyuthyjo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163zvewfccz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163uuukuibg.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163jjhcfstl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163wqakblrn.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163zmoarvqn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163pifpwcyg.html

================================================================================
来源：http://www.aibaodan.cn/163mehcwdxf.html

R. Bash 专题
来源：http://www.aibaodan.cn/163pkyqiazp.html

================================================================================
来源：http://www.xuanzx.com/163nuvhjilm.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xsugynrq.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163pvvnkeqm.html

set -euo pipefail
来源：http://www.xuanzx.com/163dfcwubsn.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163bqhtkqok.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163jgfxfuzb.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163cyknwplp.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ghasulwm.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ogcdpqlr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163suuzhswv.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163emcemspf.html

name="${1:-default}"
来源：http://www.xuanzx.com/163hzlnykzx.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163siyfgmtt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163exyqxgvj.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163dclhfgvr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163rmaqmzre.html

[R08] 数值比较
来源：http://www.xuanzx.com/163hobyjzou.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ytpltvra.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163hzalwhfi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163hjouisni.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163jpiyuuox.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163mfdgussj.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163qwuneusk.html

case "$1" in
来源：http://www.aibaodan.cn/163pakwcyot.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163trtrbuif.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163rynhenmb.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163xxfbzoej.html

esac
来源：http://www.aibaodan.cn/163oghwghbv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163irwvjaln.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163amgazegi.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163nogmfdss.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163iwozvdlh.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163noptocoy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ohlxrlwr.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163uzulxpcn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ehrnyojs.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163tambktbv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163wutdadpk.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163kbpauigu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163dvgakzpu.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ozjwbcse.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163wvbprjzh.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jfeabshu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fcbczdxb.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ffbolfby.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163fdyljjlx.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163hunmwarp.html

echo "${#s}"
来源：http://www.xuanzx.com/163kjtezaxv.html

[R22] 截取子串
来源：http://www.sxryk.cn/163nerrlvhw.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163wzftqdwv.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163tjadoaci.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163nkultdzw.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ntdrejzb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163yxhozdlg.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163bkpclwcg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zibusmcq.html

[R26] 命令替换
来源：http://www.sxryk.cn/163nuuuxwas.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163kopzesjw.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kpjcpdhk.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163sbnsxenr.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163zvirbgoy.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163rcwunjfb.html

[R29] 定义函数
来源：http://www.sxryk.cn/163uesvyrpe.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wjyqotqp.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163eonxkfzp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163nlcokubk.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163kqdqhssp.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163tsxnyyqe.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163nirxzcin.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163pwjtwpvo.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163kmvfxhpv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163gsttjgln.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163hsvdqste.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ccuotblv.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ejhffogj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163gqyqdrmg.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163tvuxwcjo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163cqdgdudj.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163trayhreg.html

files=$(ls -1)
来源：http://www.xuanzx.com/163cfhkfjli.html

[R38] 管道串联
来源：http://www.xuanzx.com/163yjvpmbqm.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163jbbbxbtv.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zpkvskcq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163serfepdx.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hglpwisj.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163asvqacdy.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163bolboyll.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ufqmdqto.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163bmcpjdsa.html

wc -l < a.txt
来源：http://www.sxryk.cn/163surfdete.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163upcskgdk.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163fpqmhnvo.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163codgxxyg.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163unqjzhew.html

[R45] 批量删除
来源：http://www.xuanzx.com/163njkmghla.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ficulrzn.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163onrnhdkl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163zvwxatuz.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163fbgvhzzh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163rlpgfqmu.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163erjdxipn.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ajmwsoav.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163bmnyebra.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163kpyfiqqi.html

[R50] awk 求和
来源：http://www.xuanzx.com/163bhfkqhgn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163pashtyei.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163vmkzzidc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163iffkwunp.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ntljmykp.html

wc -l a.txt
来源：http://www.xuanzx.com/163vangttsj.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163nhnzqffk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163uwyablod.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163fcoxnyxk.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163zajruwts.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163lhdjzjhh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163fwmdpiic.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163tkgxuuqi.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163djnftaww.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163htrefwow.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163kpoldmwp.html

[R58] 下载文件
来源：http://www.xuanzx.com/163fssaqbjg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nlisrzby.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163voibuswe.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163lewphydw.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163tyuticma.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163dfehponx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tholjjzd.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163senuwgtp.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163wsdqcttr.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163axzppxpa.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vkswnpip.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163jclrnbpm.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tsklegyf.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163qjeoimsl.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163guruqdrv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163neagcksl.html

[R66] 定时任务
来源：http://www.xuanzx.com/163nuuslbzp.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163vbfqnorf.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ldajhysz.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163tdbgzlsi.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163tgsbyifa.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ysaxtkfy.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ueohsndd.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163trmuhzzk.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ugfvavas.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163zkiatbvp.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163gifyexjk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163vukkihuv.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163kyhiucox.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163xrseheaj.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163mpngyslz.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163dhcastjh.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ivelretk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163wbkyicbo.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163rcevrhnr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163twuffhor.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163aeryhazx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xpedbahi.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163vaenbkqn.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163npitptyn.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163iicdnbwb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163bpbuoetr.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163avjrijji.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163fvjodusk.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163munhtxzb.html

time ./run.sh
来源：http://www.xuanzx.com/163owlxxrsc.html

================================================================================
来源：http://www.xuanzx.com/163yxakwecr.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ocbzirco.html

================================================================================
来源：http://www.aibaodan.cn/163oohldybu.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163atsxgdpl.html

#include <stdio.h>
来源：http://www.sxryk.cn/163jpxjjsty.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163becvyhdq.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163lchmcmra.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163hzcktfcz.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163jykpzuac.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163mfjsqaen.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163zcfncxkl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kcyoyjga.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163hgpayidz.html

strlen(s)
来源：http://www.aibaodan.cn/163muudeaif.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163vynfjzwk.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163potniriv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163uaeppced.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163noxkkkxv.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ysvhoivl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163tldinwpe.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163duighcqa.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163dmvoyeua.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163otbelssm.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163vvgljorf.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163qqqbbfvj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jaxguvii.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163bndgqxrd.html

fclose(f);
来源：http://www.aibaodan.cn/163vnsqzheh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163wgmbonqy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163kjylpbif.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163pnhliahf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163zqcswmuw.html

[S14] C：枚举
来源：http://www.sxryk.cn/163flfijfbd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qauttymd.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ddfzhjpy.html

(double) a / b
来源：http://www.sxryk.cn/163osudqjjw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163lkfmkkqf.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163imkjzvle.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163gldmvxhg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163vxejpfda.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163llylngmt.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163znsgbqnt.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163oxihbjnc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tlhcyjqf.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dedtkssq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wzcavjei.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163cuawomsd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163mkvryixk.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163arugxoxd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163wgauwcfu.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163oprhuclh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163fbgykvac.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163zqdgfvch.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163kigprsrx.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163xuuyfxsb.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163slnnmvie.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163yrsxzdhb.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163rbxzjxge.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163qmnlijne.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163jbmrkote.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163wnzdycfw.html

static int counter = 0;
来源：http://www.sxryk.cn/163mjfgrnpk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163dvsgwgji.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163pibmilnj.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163mxyplqch.html

#ifndef X_H
来源：http://www.xuanzx.com/163cnwacvup.html

#define X_H
来源：http://www.aibaodan.cn/163kvsyvyqq.html

#endif
来源：http://www.sxryk.cn/163uosklcmu.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163sgpzwrrq.html

#include <iostream>
来源：http://www.xuanzx.com/163axynwyvr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163zyvtpbjz.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163elckhywv.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gmrhduwd.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163xoallnmq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163nowhndtp.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163fiptnbex.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163edijapvo.html

[S35] C++：map
来源：http://www.xuanzx.com/163jhuqxpzv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ymjuaouy.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163tjickyqx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wwuvfuza.html

[S37] C++：set
来源：http://www.xuanzx.com/163srsykfxy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163uguwawzi.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hbgnmbcb.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163banyhrkh.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163dwvimgua.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163dcbbkivm.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ycwvzoim.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163jwigjbxp.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163haoplhzo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163twolefcz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ficmhaji.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163bfitafnh.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163xxlltxyx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163wamlqxoo.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163rtsgajxj.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ekpifjpk.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163vkkmjpmc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163fscqpvlg.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163lawlbkgg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163wwsysifz.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163hzqfkeih.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163bqtmynqu.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163aeybbyae.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163lovuiykq.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163qdfxfdpw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163kpokisnc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163flpsarvy.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163gzgxpftj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jsdwvygr.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163tyoaiihe.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163qhltlgiu.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163imqrzdox.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163fgzsiqdu.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163cwfrdddw.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163lhirpkfc.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163nltpgcjh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163nppclxdv.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163cvvenzkw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ktuaafdm.html

[S56] C++：optional
来源：http://www.xuanzx.com/163whyfflcd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163jzchtmdn.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ouoexdwk.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163vwvelwis.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163glaivrlb.html


<!-- 参考信息 -->