外链999!wailian999！

name="${1:-default}"
来源：http://www.xuanzx.com/163kqbnegit.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163doutbmov.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163tmngnmlw.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163twqhopji.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163rinrmofb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163piyflciz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163czoqaqmh.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163vkucpyog.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163dlpqamxi.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ugrkgmeu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163mdmvkafq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163fnqcvweq.html

case "$1" in
来源：http://www.aibaodan.cn/163ggsjyufe.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163dcdhybqw.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163isapdcni.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163qngircsu.html

esac
来源：http://www.xuanzx.com/163xpgqkevn.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163zeusxzzc.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163oycyksrr.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163oknotchn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163szqytfno.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163khvsggaa.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163zaqukeho.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163vmicssxv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163hlrjnrmw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163erbuyjdu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163xwpuemwf.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163orqtnvtp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163wyvmhfhe.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163nyggcdey.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163tzfumjyr.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163scbbdpqk.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163nnkcxell.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163nhcxjkka.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163psspxncm.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163pwsuyycw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163vqhyzrwy.html

[R22] 截取子串
来源：http://www.xuanzx.com/163hifmxspu.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163eyxqadpc.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163pdipmass.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163srftfwwr.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163zdfefasf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163qadkkieu.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163yinegmpy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163olignbxf.html

[R26] 命令替换
来源：http://www.xuanzx.com/163liiqnhsk.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163xzqkoswi.html

[R27] 算术展开
来源：http://www.xuanzx.com/163unkiouxr.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163eibgrdoe.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163kbzsnuqi.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163krjrvdvw.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163tyjbflko.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163iekpangz.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163dsxxsyss.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163rvcublyp.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163isskjwpg.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163wlbpistj.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163jalihrzg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163gzfnqjqd.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163sepdrmec.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xwfvdzzh.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163hjpfnfsg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jjmqypak.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163rrufwnwu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163jnojugca.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163houexhzk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163sxmcamiy.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163yvovyymm.html

files=$(ls -1)
来源：http://www.xuanzx.com/163lcjnzzpo.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163esgkjhox.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163bseduzjk.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163wfqavrph.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163oldnlfii.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163zgxaiuzg.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163seogjdgh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163tjbafkvd.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163demynaof.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163lnsqfqwp.html

wc -l < a.txt
来源：http://www.sxryk.cn/163owrltfbc.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163cbrbtrif.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163yqwgciby.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163prbxupms.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163nrjzxwlx.html

[R45] 批量删除
来源：http://www.sxryk.cn/163synbbrkq.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163lzyuqpcr.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163vyganrfm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163qpalinpw.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163rokdpgln.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cozitfho.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163cxnskrqt.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163qcyevqxo.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ecjdfris.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ehjkdlyd.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163lveztrma.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jdxopzvv.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ekyhsagl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163hdqthtgb.html

[R52] 统计行数
来源：http://www.xuanzx.com/163quoodeaw.html

wc -l a.txt
来源：http://www.sxryk.cn/163juncturq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163dqmhpnfk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163hdyhrqqu.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163dwbprkzt.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163kydceqtm.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ocpumxpg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163pbykjhng.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163mdmesfiu.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163fbbfqhud.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163nxhjijzc.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jjwifbcz.html

[R58] 下载文件
来源：http://www.xuanzx.com/163vhxwangw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wnyerhsw.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163uqhmqhrk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163pjztywxk.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ysostbaz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ftcvngbi.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ufygspga.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ugciroau.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163nqttadag.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163lzqmshey.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ktomgyzf.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163zunzxome.html

[R64] 结束进程
来源：http://www.xuanzx.com/163wchdafta.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163hfdpsisj.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163skgplhzo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163nhlkhxfe.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ooqbajpm.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163fiohbxcx.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163vhrsepog.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163fuenjggf.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163nqmazzdf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163xevttcrq.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163lkkfgkpo.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163hareeopa.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163hhpqnhxr.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163cwvygwnu.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163jmyelegp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163kgordvtn.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163hvxkmupz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163okwvwuci.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163rqeeegdl.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163izxdemix.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163kpfyzebd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163zfccorng.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163bstbecku.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163tvroorzn.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ljhysdtu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163isobznek.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163kcfaycrv.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163icqhokwr.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163pebdhnzj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jfbnqree.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163dtnwfjzs.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163iqjmnxow.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ljipbnup.html

time ./run.sh
来源：http://www.aibaodan.cn/163sixwdtdu.html

================================================================================
来源：http://www.xuanzx.com/163obdyrloh.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163vpirwrtw.html

================================================================================
来源：http://www.xuanzx.com/163qnvnpaxp.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163sahiazrz.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163fnrluuhf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163rczviyxx.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163syukuwmr.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163njqyltkv.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163gpiwrijp.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163hzptywri.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vlihotbq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163jegimosw.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163itnmdgbn.html

strlen(s)
来源：http://www.xuanzx.com/163yajusvmp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163wmzlcwrh.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163sppkhhdd.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ejypfwcu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ilguxknb.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163bfnptegm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163aooyrdsb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163bwlekito.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163sdijvwmq.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163znbujtzr.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ihpgquob.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163kwpwdvxa.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163smsveuwz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163wyrnclyr.html

fclose(f);
来源：http://www.xuanzx.com/163arklqvic.html

[S12] C：写文件
来源：http://www.xuanzx.com/163dhnxezhb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163vtqevqwa.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163swtwzutz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163njbdnlxp.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163mymbrpbt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163bmnyrtsv.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163gqkoenlr.html

(double) a / b
来源：http://www.aibaodan.cn/163jphukiqa.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163kvtorvqz.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163bnhyaecj.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163mwmlalle.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163aapcydod.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163etqojgjw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163zewnylsv.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163xdppxmhg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ttrbnvxf.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163mzjhciqi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163gtowdnmv.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163pyzddeop.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vadvreze.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163isxeupdn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163nsspewmw.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163mbxtptdj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163qkyillib.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jzkgzpny.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163odjoxyuk.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163folawgsv.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163pwlgepxw.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163hcmmbdsk.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ebbdlpfw.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163xqckuocw.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163abgcoscx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163owtbmhhh.html

static int counter = 0;
来源：http://www.aibaodan.cn/163owwiehbd.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ozciadju.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163wqkueuzk.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dhvjzgpe.html

#ifndef X_H
来源：http://www.aibaodan.cn/163rbsykfir.html

#define X_H
来源：http://www.aibaodan.cn/163ibemvajj.html

#endif
来源：http://www.xuanzx.com/163mocwhryv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163whdhrxhf.html

#include <iostream>
来源：http://www.xuanzx.com/163omkwwrsu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163qccybbgh.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163bwatzyjs.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163hmzosflk.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163owbkusjl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163sngejuwx.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163fdxmpjnq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163mxvqplks.html

[S35] C++：map
来源：http://www.sxryk.cn/163vcakcqow.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163liylzets.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163nwhpeuye.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163sxzpcury.html

[S37] C++：set
来源：http://www.xuanzx.com/163uymrfbto.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hirqjagf.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ipwmewtj.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163wihmsgil.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163iocphoja.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163klakrlyn.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163yaymhgzy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cpilcorf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163himnmozg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163tfnortrc.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163heawjoef.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163eqrblooo.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163oupmlmlo.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163xqsdhjoy.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163azcaxlxs.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163sjnsthtw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163oybpqprm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163oamoztyl.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rcoqnibt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163beednmti.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163faotaneh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zkfbdbti.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163yfeivolj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163gcixppcg.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163tfilgtdy.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ykawufub.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163hjjyjmxn.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163laipeoob.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163dlemfyss.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ofnrgabw.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ucapehpt.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163jjuszcin.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ylmrrejk.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163gdyzwftr.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163dmchcvwc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163pgunwwjh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163lnocgywm.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163kunlfpsx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bjooczfi.html

[S56] C++：optional
来源：http://www.sxryk.cn/163wleuzrxe.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163skupmgsp.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ioekjdce.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163iiccoxmb.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163gecvbaxk.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163yawydaup.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xnyfblxm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163xshpztag.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163evzagvnk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163otchkqjk.html

================================================================================
来源：http://www.sxryk.cn/163agqansgp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zifaznrs.html

================================================================================
来源：http://www.sxryk.cn/163xuppnxen.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163vzsdpzia.html

println("Hello")
来源：http://www.xuanzx.com/163hkfnykbs.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163neeosyyf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163itfoqsfv.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zalksxld.html

"值: $b"
来源：http://www.xuanzx.com/163ihgxmwlo.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163unbedswe.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163yjxafoud.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163kkkmdqih.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ixcwtora.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163wjpvnwcu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163oqgcfsjt.html


<!-- 参考信息 -->