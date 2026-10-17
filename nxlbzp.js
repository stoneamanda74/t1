外链999!wailian999！

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163itykgiql.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163dchjwbih.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vgluroiv.html

================================================================================
来源：http://www.sxryk.cn/163lzhxuquq.html

R. Bash 专题
来源：http://www.sxryk.cn/163kkoftfat.html

================================================================================
来源：http://www.aibaodan.cn/163daqzvbtz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163rpxrhmoj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163jtnazbwa.html

set -euo pipefail
来源：http://www.xuanzx.com/163iedygmcb.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163tipdlwyw.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163qhschjav.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ftakilbd.html

readonly PI=3.14
来源：http://www.sxryk.cn/163hlzhjdso.html

[R04] 位置参数
来源：http://www.xuanzx.com/163jpfxhtnq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163xcahhxgm.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163stfgbnuf.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163vesdjgug.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163fahwsixi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163yxitvcki.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163zylebvgm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163kuclwqlp.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xxtrrdam.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163slwjivzu.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163pywfbwru.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163kemiccqt.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163flrhkftx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ilojbgks.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163qzcympsv.html

case "$1" in
来源：http://www.aibaodan.cn/163qsxwcvqe.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ipgajjqy.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163gbqcubiy.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163pgniwyas.html

esac
来源：http://www.sxryk.cn/163zsmapqcq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163uvuwxyvh.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163himcepib.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fbewdkyu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jkxwepen.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163gdtndsci.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163mceajdhc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ukwxlfyw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163lggsjfhd.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qdxxhrqi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163eemmclhq.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163xpdgmams.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ynwjntcg.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163tycykcle.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163fdaebacb.html

[R19] 数组长度
来源：http://www.xuanzx.com/163vjttemzg.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kdeeaqpz.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163dslrnuhv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163mpzpdzct.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163nbmexbym.html

echo "${#s}"
来源：http://www.aibaodan.cn/163wceahhbt.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163hsqapohc.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163lwuevyal.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163wwgsesug.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163mkusyqbw.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ectrcogn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163jiulveun.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163wbulhybk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qwzknldn.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ircnkshs.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163mwujvipr.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163wkzyuedz.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163tijjgamw.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ifmtyvgf.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163xuyllbnu.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163mampffkv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163dnmcgvty.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163vefdusby.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163uofurqqu.html

[R31] 局部变量
来源：http://www.xuanzx.com/163gzcbnemx.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ttvigwyd.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163cinzitno.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163kczhokyx.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163lbqrupop.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163cemdikuq.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163owgffiin.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163cbyqvlou.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163uobdzhln.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ebdhpjga.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ajdyjubb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163psauytyy.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163wtqkwpef.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163tbrcbpgb.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hdftapio.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163djutwczo.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163jphazdvm.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163wlshibts.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163odvpzckj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163fcpothbn.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163oirgdojc.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163uivloixg.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163wzbtnwvh.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dalcwccv.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163sshqbooj.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163vgevfwqt.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163drwhkimj.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163nnkftfco.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163rplvgsmo.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163pzofycwl.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163swbcnvmi.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163iuppprjr.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163zqaxorkm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ikaqdosw.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163yfzphqbk.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ihqgppfc.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163aiaohmxi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163fhjzmygu.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163fyevamje.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163tnjbxgfw.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163cfqfqjre.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163wiculnql.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mlrnfhgg.html

wc -l a.txt
来源：http://www.xuanzx.com/163scrmmejv.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163zubborte.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vgxbuerb.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163iuorsicx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163qydvlcue.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163nbbyagjm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163hhqzrlzs.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163rvnnayjb.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163mwrowccz.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163fwcfjuwy.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163yqncckyz.html

[R58] 下载文件
来源：http://www.xuanzx.com/163wpanbxdz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163nsspeudw.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163vnkorocf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163wpevfnuc.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163jckmhutj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163movtloxs.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163jumplvhv.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163lvancyrs.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163nkwfrgjh.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163dykndssv.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163xzmoazuk.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163olpumlaz.html

[R64] 结束进程
来源：http://www.xuanzx.com/163gmddezig.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163khrwrkpo.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163sviqjzci.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hqeiemeq.html

[R66] 定时任务
来源：http://www.sxryk.cn/163mtgbmnsn.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163hhnhmrtv.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ngsrcyvw.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163tzumuheq.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163zemsthqo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163bjxxzbrl.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163rwemchls.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163wiwfbonl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163dfipwact.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163utwaykhf.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163amubelmh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163oicyzzfo.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163zwtwchca.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163pkbwlhmd.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163uileywbq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ntsgospq.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163mdqfnvra.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163dunnhwkx.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163bqrsolvr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163vyqnhcxm.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163qcueppim.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jlzemkdb.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ykrxrdzu.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163awkorokm.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163zzyfwatr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163lhddsaft.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gofiyrab.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163kytdgqhc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163giszzpip.html

time ./run.sh
来源：http://www.sxryk.cn/163agkafanq.html

================================================================================
来源：http://www.aibaodan.cn/163stoirafq.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163tjtngjgy.html

================================================================================
来源：http://www.xuanzx.com/163vdokubhb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163axywwphn.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163faqpufso.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163cogpqyec.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163tzhhlaji.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163yomwowsw.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163zhcifnoj.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163mbrgqjlv.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163udlwfoqb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163eqktzfrd.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163adoejkqf.html

strlen(s)
来源：http://www.xuanzx.com/163dxhbzsem.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163fiwcefko.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163mdhgwsyi.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bdgpbvuq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163wvoykdgq.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ejsgbfvm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163pkrkwjad.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163epvxounk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163vmfhicct.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163nltaglfi.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163pdlbfwlp.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163yhxowgyw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163qlvnucsg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ifpywebf.html

fclose(f);
来源：http://www.sxryk.cn/163xrwjjsce.html

[S12] C：写文件
来源：http://www.xuanzx.com/163mvgbnvtb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163owiprpjq.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163efdzbdfg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lqzjuvmm.html

[S14] C：枚举
来源：http://www.sxryk.cn/163nhgkvwkw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zgeuylie.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163jmgclyfw.html

(double) a / b
来源：http://www.sxryk.cn/163awuwfmnd.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163hmwnvkkz.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163owfnnowb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163lumnwtgt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163zzibqcoq.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163yslcldtg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163fifjzcjc.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qxarhbcz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163udlxxcmn.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kkdtmpzp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tyhdrfrp.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163kvbjacif.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163xdqbwlox.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ltzqnyqs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ejbxbjyg.html

[S23] C：随机数
来源：http://www.sxryk.cn/163rxphdrgd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163etqjxyzn.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163dztmptsm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163axhiwgjp.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163utqwvkrs.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163rgcdonji.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163acttmlsn.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wnuryeoh.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163jknydjwl.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163oquuedxa.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163vkzadyjy.html

static int counter = 0;
来源：http://www.xuanzx.com/163ojmstomp.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163krmskzcf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163gmqiaenu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163tkeeudqc.html

#ifndef X_H
来源：http://www.xuanzx.com/163nvimgyvf.html

#define X_H
来源：http://www.aibaodan.cn/163fnwjjizf.html

#endif
来源：http://www.xuanzx.com/163kzauihfk.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163gnlfzkqa.html

#include <iostream>
来源：http://www.sxryk.cn/163wrvptyns.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jxmnicdw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163nzxkglbp.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163fcdoumeb.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163etvyugzo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163muylahfy.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163wimmckui.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163nkzvnarh.html

[S35] C++：map
来源：http://www.sxryk.cn/163arzmjula.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gwdmflqs.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163wfgixqol.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xyzgfnxo.html

[S37] C++：set
来源：http://www.sxryk.cn/163axnnwguw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163cjwnjflj.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163jnxjycyv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163xlujrwoz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xlxjpxen.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163nokrdxaz.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xxelckpy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163yoktbmhi.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163nnrnltmx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ovgiasqi.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163zhwvbatb.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163trmyziob.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163mxqburml.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163epqozmgk.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163rbniacpm.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163thgesvod.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163gdpzehqi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163nchnmrnj.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163xmmpsxgp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163yhkurwdy.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163qfjxuasi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163sdqcizky.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wyyhrtwr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163fhmjxssx.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163pgwmtpnk.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163raaqvien.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163nfqnfdig.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kjumoffp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163waxzelak.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163axpkbiom.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163gpsvrumd.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163smodtdbj.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163irpeggzp.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zrjjafay.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163nixbfmsl.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163tlgrmuoa.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163cbjxrdvx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dmrxsmmy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163drffnqse.html

[S56] C++：optional
来源：http://www.xuanzx.com/163yegulzha.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163lqqewqle.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163vwihhgtp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163stxjrqse.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ydfwtomt.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jxohxuqe.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163wursaurz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163tmdjyzli.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163qozolqtr.html


<!-- 参考信息 -->