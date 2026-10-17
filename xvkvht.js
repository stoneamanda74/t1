外链999!wailian999！

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163jrrvhebe.html

[R08] 数值比较
来源：http://www.xuanzx.com/163xifdwcsg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163zqrqwqmm.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163tcvtjbyc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163kpjxzwyy.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163zjlssofy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163bvbvxfcl.html

[R11] case 多分支
来源：http://www.xuanzx.com/163fhnliuuz.html

case "$1" in
来源：http://www.aibaodan.cn/163nmpyvbau.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163byefqric.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163kaishqxi.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163orrrvcrl.html

esac
来源：http://www.sxryk.cn/163ghymbtmr.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163qaotzfpn.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163xgqmzztj.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163blqeaqla.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163cdogwxit.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163odkgcldr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qafcfqjf.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163npnfkcis.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gohwfgsc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163zjjpkswt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163rmmmoccu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163hvygoddv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163kcvntmjo.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163qyaxqdbq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163miuvzeiw.html

[R19] 数组长度
来源：http://www.sxryk.cn/163bfejelru.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163rhqohons.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ejarlzwx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163anmkzlgo.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163kopdulwm.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ksblwzsp.html

[R22] 截取子串
来源：http://www.sxryk.cn/163xhovudiw.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163vummpudk.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163futcnusj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ktfhwttf.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ptalvcih.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163yjkbvexo.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163yhimbcwy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163plsjakcm.html

[R26] 命令替换
来源：http://www.xuanzx.com/163edkoncui.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163yxgjkrhb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zfgivopq.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163riyoknsm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ppuwctbe.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163zikkbwak.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wxgmzrdv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163rxialzoi.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163vbsgokqb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jmoxoivb.html

[R31] 局部变量
来源：http://www.xuanzx.com/163mgddqpip.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xerepzrh.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163dogrqgef.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163nvqvazuj.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163xuswwyve.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163bffvebmo.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xzbxfcys.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vxsjfggl.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163hpvvlzal.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xaybkblq.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163puigjjuu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163xletkxvq.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163cccpfrzx.html

files=$(ls -1)
来源：http://www.sxryk.cn/163qzyzkhue.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163edzqfbic.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163njmigphc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163rydgzsaw.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163pllstunp.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163dyrtphot.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163pxeznlva.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163iirrlmry.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163cuyanksg.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163cyuwkjhc.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163kzhtajjf.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163gtisflgq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163yubrciem.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163bpxaobne.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163uuitinzm.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163alfmnjtg.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163kesaihsn.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163hyweevak.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163weuargrt.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163qoruxzqy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163felbyprt.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163doiirabo.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163aakcyjah.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163axerwsyz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163fohiafue.html

[R50] awk 求和
来源：http://www.xuanzx.com/163rxchueax.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jickdfhy.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163nwnqebxd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163lgwjppsw.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ecxtsrim.html

wc -l a.txt
来源：http://www.aibaodan.cn/163bqfrjsnd.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163nusbslvs.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163kckdcjqi.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ucbyqnnt.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163cixthcey.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163rmczpedw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vxeemqwh.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163lcxzkafu.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163lksitxft.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jtdryymv.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163mxcjyfms.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ztiidrac.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163omdyvfix.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163gvwjxgsb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163mvwayyda.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163drfjaecv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163htrdkoeg.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163nyqbwkkt.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163isxmztgv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163voixgmmu.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163adlvywwu.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ctgbvigr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163acegkfut.html

[R64] 结束进程
来源：http://www.sxryk.cn/163hyasigvz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163sqabwvpl.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163uvjsdgws.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ytgxxeun.html

[R66] 定时任务
来源：http://www.sxryk.cn/163lpnpqfft.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163qmthixcb.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163azrcyhci.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163rwfowrnw.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163akinapdz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ghpuuoov.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pzxwuyox.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163uagoxrdv.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163okbxlyey.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163fsvdbcrv.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163xnutmasy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163cprqsfop.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163vfqjaard.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ucxndqte.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163zkanpzdc.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163hlwxtzai.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163xvawmppn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163mnqmqrqb.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ndccofew.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163gcnacoeu.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163xvbyywkh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rgcudzdn.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163mysckqzx.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ydkpxlmb.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163gdwvqyni.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163gekstclc.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163fpapejae.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163hssgmufj.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163jrxapgxf.html

time ./run.sh
来源：http://www.sxryk.cn/163kjmcrilk.html

================================================================================
来源：http://www.sxryk.cn/163eeclmutc.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163luzcmkpy.html

================================================================================
来源：http://www.aibaodan.cn/163anacooap.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163zcwytuon.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bczkhonk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163sfmtluhb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163rrdvoutw.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163wgxbhlxh.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163udzxuqcm.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163wbcpisgg.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163hyhbmjpe.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ywvmaszq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163wyriezfj.html

strlen(s)
来源：http://www.sxryk.cn/163zomndbax.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ytplycbj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163hkrrjczn.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163thskbdwc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163btgvggad.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gzjanmdz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163qpjyobjs.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163nsbxlkpe.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ufbwzjto.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hvaexalx.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163yzulpeni.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163vvwspfbh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gvimzkjp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163lgrdvrgv.html

fclose(f);
来源：http://www.sxryk.cn/163ovgiuigh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ampzinpd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163byqzsemp.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163symdxcea.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ylmsexxp.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ilwwbagm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163psrdnyhn.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163yqxrlhtn.html

(double) a / b
来源：http://www.sxryk.cn/163jexcufqo.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ycigywzy.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163vkxhavbx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163cpfpnnsl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rmvohayg.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163eyiwqscy.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163fgnklnfa.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163xnvgoztr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vxzdpycw.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163gbuusnic.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163avmcschs.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163tkxzxyxm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163nsbmafnx.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163yflvhmfk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163oacnedyv.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qxbpicyp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163eoiexgdy.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163iivfkbsz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163pynbbhhm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163abuidcer.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163qyogkjyc.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163yrcynvus.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163nxmuxcif.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163rynhoikb.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163oaiktalg.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163mjvnsgen.html

static int counter = 0;
来源：http://www.sxryk.cn/163rubrkdoo.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163nhifldmt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163teyeihog.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163uhjybmek.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ggfmssxx.html

#define X_H
来源：http://www.aibaodan.cn/163lhgspktc.html

#endif
来源：http://www.aibaodan.cn/163fmwnhrxx.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163beogicbf.html

#include <iostream>
来源：http://www.xuanzx.com/163toeaewjd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163esrghzlf.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163udlghpah.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ttouushh.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163fzigerqi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163vcfkswto.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163jygpeooh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163kbvbnxkx.html

[S35] C++：map
来源：http://www.sxryk.cn/163osqxvxge.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mmjvhyef.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163adiunnma.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163glulndgg.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ixbcitec.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163flexyzuc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163bfjmidqi.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163dpnbdhdl.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ivzcseey.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163imtrswkc.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163gpnkhmkg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163jlmyavnb.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ukfpjrul.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163upyoovbn.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163nadeqcir.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163dntndfbh.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163gkhuqiiq.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ywejgjhg.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163grcpwigg.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163babzvhwu.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163nxqfpiic.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163yhzrjczp.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163oeyelaii.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fsxliowt.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163dueiweny.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wuronnjq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163dhqtbovc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163kiaqrdbe.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163lleyetbl.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163rgskjxuu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163kdpfnwbt.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163zkfzfoti.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163jncmrjlo.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163tsxpzmsn.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163wrmbcfim.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163bwyjxgou.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163lmckzskj.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ranyhvel.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163qfxekquc.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163vypvdjkd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163mrvqmjng.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hjrhofmi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163helkhtnw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163uvhlaijr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163hbncyixv.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lfetzvpt.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163kzkavnel.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163poypxglj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163vdgxlpbi.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163bysbfpdm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163jjovpeca.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163qzultvah.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163pfbjkkyq.html

================================================================================
来源：http://www.aibaodan.cn/163wwhqrejd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zlarecds.html

================================================================================
来源：http://www.xuanzx.com/163ezpellba.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163tnwwibht.html

println("Hello")
来源：http://www.aibaodan.cn/163hwxphzrs.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163skyuqjca.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163qykhesmc.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163nggsliiu.html

"值: $b"
来源：http://www.sxryk.cn/163syluyjbx.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163bzdisvux.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163xphbhyrh.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163gvoqqwga.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163wdixzblc.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163gtnocmtk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163igjbevhx.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163mtyhxazb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163mqwqagsv.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163whonsqtn.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ldeukiap.html


<!-- 参考信息 -->