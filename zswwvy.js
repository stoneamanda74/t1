外链999!wailian999！

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163adssmlob.html

[R08] 数值比较
来源：http://www.sxryk.cn/163kgmypjjg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163zfnpkpat.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163zclkfwui.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163fncddutj.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163harjrndm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ozaeivro.html

[R11] case 多分支
来源：http://www.xuanzx.com/163gzlcomtt.html

case "$1" in
来源：http://www.xuanzx.com/163zowobsge.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163xlsyuxhg.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ephpiupi.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163bfxslkda.html

esac
来源：http://www.sxryk.cn/163dtbangas.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vcjhsozp.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163bomovenw.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163czmtvzpj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163rfgpbevu.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163gnnrltng.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qcasbpnd.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163mivltkrd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163nndqwaxs.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vkcvlqec.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ursqjjoq.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163scjnbfdz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163yvkfrvfz.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ijscwfju.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163brsuopxm.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163tcigvuyy.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163crxjffvd.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163cbzibugc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163jroqbldl.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163agnaerzp.html

echo "${#s}"
来源：http://www.xuanzx.com/163vbhffxky.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163jgdeldpm.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163wrkiliox.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163wylfxgpz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163hpzbvngt.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163xqsicbif.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163jdxfarla.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163mrfewodr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163fxpqjqsk.html

[R26] 命令替换
来源：http://www.sxryk.cn/163txbnykfx.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163aybesvjd.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ghjjqyqm.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163jpjoxxvq.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163nnvyegiw.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163bwaxnlay.html

[R29] 定义函数
来源：http://www.sxryk.cn/163kmskodzu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163wfhidywl.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qcowusca.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163teozwuii.html

[R31] 局部变量
来源：http://www.xuanzx.com/163hdqoyjlr.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ezyqaqmp.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163lowekezg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ikbckpwg.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163mhlpvryw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ykpiojxj.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163cvqohkke.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vrnsmepu.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ejabcvie.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163afpdanzk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kmlekwnh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163wgcoyino.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163cbxskaci.html

files=$(ls -1)
来源：http://www.sxryk.cn/163vkylwvem.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wxplyhgi.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ojlijeqe.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vemeoqdq.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163lwejdgcs.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163qjsfpblq.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163iihrpkdr.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163cgycgvxq.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163plrlhxkt.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163nxlrowzj.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ctygthet.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163zojjmbpm.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163pugxputm.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163npjnmlnr.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163pvkdzztu.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zjenwzbn.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163zucgukqg.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163acweulcb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163yiqujatw.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163baccmvhl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163etxotxpa.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163mvclepft.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163kcdkesbr.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wnzvleuv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163jlanxcey.html

[R50] awk 求和
来源：http://www.sxryk.cn/163vzqeisgl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163abtlmmzr.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163lpqhnpsl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163yltpuamy.html

[R52] 统计行数
来源：http://www.sxryk.cn/163zmldgvce.html

wc -l a.txt
来源：http://www.xuanzx.com/163sgknjzdh.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vbptevrk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163iitrdqso.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163daiwwmcx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163zgwgtnog.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163aakzqczq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163npanfnbl.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163imxgsbuv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163qjtzjkqn.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163wfmsyndm.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vjabdkrv.html

[R58] 下载文件
来源：http://www.xuanzx.com/163kfwotqvq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163uitutvda.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163cfwynapb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163sxgbxibt.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ixefpmll.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163foculwcy.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163zsunhmhd.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163rrjhojuk.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163hklcunhx.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163nmtqcqms.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163llhsuske.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163pfjxfgmn.html

[R64] 结束进程
来源：http://www.sxryk.cn/163hgpakdak.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163njhysnrb.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163tithgxxj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163wadfhmxj.html

[R66] 定时任务
来源：http://www.sxryk.cn/163liuvxyaz.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163paqcxbvh.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ocolyjxw.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jkmvuybw.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163rtygkrne.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163dodstyzg.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163utfxrepq.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163gwpbvefp.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163gxonmuic.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ljyjsnsr.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163nmcetani.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163woxkgoyx.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163zxcdpbxd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163itcdrchk.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ayhopoaj.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qflhqdld.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163gxwaerfv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163vxebsijl.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qbytivyo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163sshwgklm.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jbzpgkxz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163huivkybw.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163lnpudqwx.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gaepadmr.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ffzmpgvl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163gkxfyszy.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163onlpkeyu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163nukvmvre.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163hqmbnuhm.html

time ./run.sh
来源：http://www.sxryk.cn/163itqrmdcj.html

================================================================================
来源：http://www.xuanzx.com/163rqoggecw.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163xnstjbzw.html

================================================================================
来源：http://www.sxryk.cn/163fttoxtfb.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163wracgeoq.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163xshjxppl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ggosfedu.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163yqkrjfio.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163uvavuxel.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163tmscynai.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163lgkjvoaj.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163xilkjhyl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163kglxhirs.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163lkhzynot.html

strlen(s)
来源：http://www.xuanzx.com/163ajwmocyt.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163ijvxvfrf.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163eycoiroz.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163iegcwyeq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163elihmbqc.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163sfnvciiy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163xlwdmlxb.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ulxfsjxp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163bjwchqvk.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163lfhhpvfd.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163mnlymcsl.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163kmkftkpe.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rynqfuiu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163xbpkzqoj.html

fclose(f);
来源：http://www.aibaodan.cn/163iiieqqdm.html

[S12] C：写文件
来源：http://www.xuanzx.com/163acbhjlto.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163dazigrox.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163vrvfpxcw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163zwdoylbw.html

[S14] C：枚举
来源：http://www.sxryk.cn/163gkitrcia.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163lwfvhlni.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163jjkvnfga.html

(double) a / b
来源：http://www.sxryk.cn/163rbpfdvmo.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163tpyegezd.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163gfuszdux.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163mjmvvcub.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163bdycaemt.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163gzcsmigi.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163jmzfqqem.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163lgoojbve.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qmeuejoj.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163itsktygl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kksnzkpb.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163phoupdrj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vcrgcylt.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163dbkajmno.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163kteqlgsi.html

[S23] C：随机数
来源：http://www.sxryk.cn/163rvhwilsi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163cynexeit.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163golriitm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163tplxegyw.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163zufdywox.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163bxhheeqt.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163qwoirgbt.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163tokaczvd.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163awcnimgo.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ydmddhwj.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163yojfkrcj.html

static int counter = 0;
来源：http://www.sxryk.cn/163aebbdrap.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ohvmcdzq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163cuctwspz.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163vfpqejzy.html

#ifndef X_H
来源：http://www.xuanzx.com/163dzjwpdmt.html

#define X_H
来源：http://www.aibaodan.cn/163kvsqeuzz.html

#endif
来源：http://www.xuanzx.com/163zxnxovse.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163dvrwtnsp.html

#include <iostream>
来源：http://www.aibaodan.cn/163eiaehjfl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163hvovjzsp.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163arpeqktx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163mspdsqyf.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163qjlrrmck.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163kmutwepg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163oszhhyaf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163torzdziy.html

[S35] C++：map
来源：http://www.xuanzx.com/163zpsrkdcj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cfsusium.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163cwqbvpdf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rxsltopu.html

[S37] C++：set
来源：http://www.sxryk.cn/163dlahxxwx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jytgknoh.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ziefrasn.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163hzapigmg.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ldztssne.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163hdgmmgfp.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163nxzogyom.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163slbtvftv.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163waizbcyo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163taxovgka.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163pgbovgns.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163cqlkbzzn.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163kkcitnpy.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163paujyozn.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ofppttpv.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163kapuokqw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ziqhmenk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163kcqeuije.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163vuifsbpy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163rdahvxpb.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163cseylbbe.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163qgymkdjh.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vfpbubna.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ubqyhfwg.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163qyttlxlu.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163pglsvqhx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163omoezkpc.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ppvwggmv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163zwtjlbry.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vjmfhhxl.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163dgidkhjp.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163jbxkjpwh.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163bekmxpql.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163yeueltio.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163taqzyzwz.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163neujqmzj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163myvobzzm.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163pamjwkcr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163xtaikvzn.html

[S56] C++：optional
来源：http://www.sxryk.cn/163fdbevvcz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163rfrtbbvt.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163rjkritux.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163mzizibnj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163vzalyrbn.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qfadzrke.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163tlyyufdp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ghvltqys.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fxegubos.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ojavnkjl.html

================================================================================
来源：http://www.xuanzx.com/163ztgehxkp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mplzvttd.html

================================================================================
来源：http://www.xuanzx.com/163pvrzzrsb.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163fgbclffe.html

println("Hello")
来源：http://www.sxryk.cn/163mpktxvkg.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163wucoruki.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163wtydhien.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rtabijsm.html

"值: $b"
来源：http://www.aibaodan.cn/163alqwpfvd.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163kfiwmknv.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163zdzekxez.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163amkmyiih.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163wnjaopgs.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ykoidoow.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163orbqsrvy.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163aclpjsgh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ngdezzzf.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163iqpesfkf.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xwvrtzjr.html


<!-- 参考信息 -->