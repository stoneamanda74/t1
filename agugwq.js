外链999!wailian999！

readonly PI=3.14
来源：http://www.xuanzx.com/163gnaprubk.html

[R04] 位置参数
来源：http://www.sxryk.cn/163yozlkqzo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163hdsauuxf.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163dzwukplx.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163yqwmexrm.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163oxclafbb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163swnzdxkv.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163sumlmoze.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163qzgeleuu.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ifnurieu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163fkversej.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163heysvbby.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163haqpvssx.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ohaksidi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ybjecxhg.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ruqwvxhm.html

case "$1" in
来源：http://www.xuanzx.com/163ndhenixr.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hmovbgjl.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163fenriqfz.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163lddxpohv.html

esac
来源：http://www.aibaodan.cn/163jshmsusf.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vzxnqtec.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163lfodonas.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163tyjtgqwo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163sioilqsl.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163zafacqan.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ncmfttfq.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ftjpybvv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ntjddzgc.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163xpvwmulu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ctzehwhk.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163kmvjcjcm.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163wpuxwudn.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163mgywhrzi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163omvfuhpv.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ldvkfgyf.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wwzegoao.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163iiejgdtp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163linkxrhc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163hjmhcmjy.html

echo "${#s}"
来源：http://www.aibaodan.cn/163dwnynspp.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163kzvjcnbt.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163pcevkgvv.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163fhjbeuez.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163yjyrelel.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163znmfogsu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ijqaquwq.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163cpjjhvjd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163hidszwaw.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163gupqpldl.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163xmojpwll.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163wklojbox.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163zkyxsfgx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mhoogqmz.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163fxvcftpl.html

[R29] 定义函数
来源：http://www.xuanzx.com/163cvnpjwhw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163dswuuaej.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ginhmpyy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163zkxwtkbv.html

[R31] 局部变量
来源：http://www.xuanzx.com/163uepneozu.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163nccgrbjn.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163tkprdjts.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163fjqunkau.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163sybhqnvj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163druguwbk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163amwetznn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ujdcjifm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ietxccjk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163qwdhhfay.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163elpdavew.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163blfskijt.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163rmgsrqoa.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ukoirlnl.html

[R38] 管道串联
来源：http://www.sxryk.cn/163vmcvbosd.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xdipvmgr.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163xydshvul.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163htdeibsz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163cuaiqtpz.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ilwfvmxq.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163pcwfqndf.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163zgnanpwp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163zlsuufjo.html

wc -l < a.txt
来源：http://www.xuanzx.com/163kqhclani.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163rfkycgfd.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163bemaizhi.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163stjsfvkx.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163rkzqfynd.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163jmvpsrzj.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163hgndltbp.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163xkbdjycd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163looqlqwa.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163jvtfmrvs.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163mmrpllmn.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jztylcur.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163qbqhcctk.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163almqhohh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163mjbxfaah.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163rpyyuzkf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163iccxrxvr.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163zltitxxj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163pnrypjhk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mddrzhvj.html

wc -l a.txt
来源：http://www.sxryk.cn/163qxfpjikr.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163txslghjh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163bhovzlko.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163gvainhjc.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163naezqmky.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163uwhgsqzv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163bknkqreb.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163zjsjjanf.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ptjcecug.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163yqvjjvel.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xzkcyhhk.html

[R58] 下载文件
来源：http://www.sxryk.cn/163lbaiclak.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163hjhfwnze.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163larasuvb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ziewrsua.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163vutnqima.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163miycdoym.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163woyftdik.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163cvhehyor.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163soygyshz.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163voufwaxe.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163irjjkahn.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163kgzytopu.html

[R64] 结束进程
来源：http://www.xuanzx.com/163fwisbdco.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163bmeotxqd.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163kvbhnrbe.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jzzxyfqh.html

[R66] 定时任务
来源：http://www.xuanzx.com/163xcggvyvw.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163bkdgtnam.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163vopebbyz.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163zrdhpbny.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163yvaghycy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163uxitzoxv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163nzkkiglr.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163gljcdsfp.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163pzkurgfs.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163zunyrgnh.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ilvyjqmu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163rmugschx.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163hgrzouqh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163pnsxqkom.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163mtxsxutr.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163wkixqbew.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163tmobkylq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ptllrwlp.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163rtacmcua.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163beqfnqvc.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163qmggujfw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jgsfkiwn.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mmjtaiyf.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163huxftwmt.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ypzryhqq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163svwcdqpp.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163jkemjhdw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163vzgqdzzf.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163igaeszun.html

time ./run.sh
来源：http://www.aibaodan.cn/163ajxktlgo.html

================================================================================
来源：http://www.xuanzx.com/163czlfxusy.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163wsrurxmg.html

================================================================================
来源：http://www.aibaodan.cn/163pmrvrnha.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163xbqfuehz.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ytvilvsz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163buoukdvi.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163hivfegwg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163igrmiicp.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163lnalbeam.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163gdzzoasc.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163acdchjwu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163yigzbpxz.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163dabvlhtr.html

strlen(s)
来源：http://www.xuanzx.com/163lqdpewan.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163pelklxyz.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163nxrryfjn.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163trynkqlh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163hfooscum.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163lfgmdnda.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163udqbuouw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163uhlulsva.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163tgfvcuni.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163kavhrvio.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163csasgogr.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163gmijeyqb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163dnmrhqcq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163lwnmbvup.html

fclose(f);
来源：http://www.aibaodan.cn/163klohkvdy.html

[S12] C：写文件
来源：http://www.xuanzx.com/163echagujs.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163rjmqyrjk.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163gkkujgpd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ntjyxcak.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jpveoklo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hjdpmdel.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163lfqcngrx.html

(double) a / b
来源：http://www.xuanzx.com/163ktcndgwa.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163bpijjoxi.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163cltsncix.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163nitynpak.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163hnrybtor.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163qvmjwkjq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163qyzwbntv.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163aaccvjvb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163cofxpqxt.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jimpnucx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fsgbqotz.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163wlxoejcn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ahokqbni.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163zorhjvxu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ignwpkyj.html

[S23] C：随机数
来源：http://www.xuanzx.com/163lwyvoiyw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163kanablas.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163rsjpecam.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163mzmehooo.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163stqondyg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xlbfogwi.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163zqcucgir.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163althncwc.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163oxmuefey.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163lpebfjvp.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163nhciguhg.html

static int counter = 0;
来源：http://www.xuanzx.com/163ybwltnkv.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ubchwuzg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163yrqcxusr.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163toeycjpk.html

#ifndef X_H
来源：http://www.aibaodan.cn/163iekdqsyl.html

#define X_H
来源：http://www.sxryk.cn/163onqyelca.html

#endif
来源：http://www.sxryk.cn/163cfqlvpnq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163qxvabrro.html

#include <iostream>
来源：http://www.xuanzx.com/163emljnlsl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163kcwsnwob.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163miuucrsd.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163sndypxlz.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163llovipjm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163utyhpcel.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163poqzbhtj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163egdxuwkq.html

[S35] C++：map
来源：http://www.xuanzx.com/163webwdmcz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163driigkth.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mgbmhgzj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ypifmwnf.html

[S37] C++：set
来源：http://www.sxryk.cn/163msdwrviu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163rbfnljyl.html

[S38] C++：排序
来源：http://www.xuanzx.com/163mdfdywgz.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163mmgpqogs.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163naaisbth.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163sdwlejhn.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xufohlro.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lauxunoy.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163haechycb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ctwvtpww.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qmywixgz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163miqewzfo.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163rlkrceyn.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163twmvkbtb.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163kdtehcyy.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163xvyvcoak.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163gbqtnwvn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163amkexjft.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163gfnewtgi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163wxaarlqp.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163zlvdutzs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163bslnminw.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163hvcziyqu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163oeypegnl.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163mqonsrxl.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163xofyzvur.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163vytqiasa.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163atclzmpj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163czcrwatu.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163wkfjhcqc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163lqxfjwwb.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163sjlichwl.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163chqgvpye.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qjctbaei.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163kfgjcxnf.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163frcsclns.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jjcxgrcd.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163fzleuxlz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163uarvjqtm.html

[S56] C++：optional
来源：http://www.sxryk.cn/163szynifws.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163dpbbejjd.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163cnimxfxj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163qgvmxdmd.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163eyirqenm.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163szaeyzps.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jzxayejx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163hagshkbn.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163vmrpmbvd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163nfvydqcd.html

================================================================================
来源：http://www.aibaodan.cn/163obhwhexu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163uniegeqe.html

================================================================================
来源：http://www.sxryk.cn/163wrpeowgz.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163txtydjun.html

println("Hello")
来源：http://www.aibaodan.cn/163qngromch.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163arembtwu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163rtpnyslm.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163vhcfwdqi.html

"值: $b"
来源：http://www.xuanzx.com/163fnjqcxyp.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163juuajvob.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163uccpsyna.html


<!-- 参考信息 -->