外链999!wailian999！

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163gisnxkjb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163hrjpshyw.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163iwswnsrn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163hjgsxtpi.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163zcpvpgee.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163lolhtubt.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ibjvctlj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163thbuzuxd.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163lhzaxokc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163jykesysu.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163fbxcshiq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ehsbysvk.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163rjbcsbjr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163dynaruai.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163eoxixmgy.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163xnnnvuck.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wtunnyuu.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163olwksqbw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163pvrkgwgl.html

================================================================================
来源：http://www.sxryk.cn/163rvupskbn.html

R. Bash 专题
来源：http://www.sxryk.cn/163cneeejhv.html

================================================================================
来源：http://www.sxryk.cn/163zcgbmmro.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163slvvmass.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163hucotbsm.html

set -euo pipefail
来源：http://www.xuanzx.com/163pevqfowu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163sbnfwxle.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ninnrlnh.html

[R03] 只读变量
来源：http://www.sxryk.cn/163wrnvdxkp.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163jcmmcuyx.html

[R04] 位置参数
来源：http://www.sxryk.cn/163pjccujhf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163zcyzthcu.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163vnqgpuxk.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163egbvpzoh.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163nmkwoazp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163nsvbavog.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163nthywsli.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163mglxjlbn.html

[R08] 数值比较
来源：http://www.sxryk.cn/163robajjje.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163tlderpdc.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163xbteymia.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ahtfjvvz.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163yslemxkx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163zixpmonx.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ijvdrvpl.html

case "$1" in
来源：http://www.xuanzx.com/163uvjquess.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163oqxcqogp.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163mryxrsmp.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163dgugnmtv.html

esac
来源：http://www.sxryk.cn/163dcutlits.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xmhkwqxf.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163nxndfnoc.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ttqyoyjh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163mqihvvcu.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163wjclqeig.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ugwywapo.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ydwbsbvq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163witjkuhp.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163jygoasdk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163xoktiwgo.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163vgqjscfb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163bsxfcruv.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163bstkzklt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163voeovgfs.html

[R19] 数组长度
来源：http://www.xuanzx.com/163jfrwmxpg.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163gxctlatj.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163cwzincjg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163qqizwmmp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163bldshadh.html

echo "${#s}"
来源：http://www.xuanzx.com/163uofhxvbp.html

[R22] 截取子串
来源：http://www.xuanzx.com/163bcgrlkis.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163oprgsxcj.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163pcdiewou.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163gebpkllh.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163suiabyel.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163xusuecyy.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163kjqdcfrw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163znmysynf.html

[R26] 命令替换
来源：http://www.xuanzx.com/163klzecaef.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163kadtwocq.html

[R27] 算术展开
来源：http://www.sxryk.cn/163agvnoidf.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163gjzhkuoo.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163cnoafzuw.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ueiewyxb.html

[R29] 定义函数
来源：http://www.sxryk.cn/163hwlwdrlf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163rbddbioo.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163bbwzjicq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163mnepthyz.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163qoodzmpc.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163fjxubtcx.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163jbuxppyk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163neeahupu.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163nvjfnheh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163zdinoxlw.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163mmvducak.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163iunarqej.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163seyhhswl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163qxhixwpz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163uxwquxdz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163fmzbfrfo.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163lurmfhtg.html

files=$(ls -1)
来源：http://www.sxryk.cn/163abmmkhlg.html

[R38] 管道串联
来源：http://www.sxryk.cn/163xdbhaokz.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163tqpbcltc.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163aqbgwvwx.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bceytgza.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ehbhurxb.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163jozowgor.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163snvmxqyn.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163wnvmfpfa.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163lxfznvot.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163mjhclbby.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163xuzxgcig.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163fjrlyshf.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163myblbszg.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163bqdesmna.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163wossyvzq.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mvhpfqtw.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163psnebeat.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163bnafvooc.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ipjqljct.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163krtqaadr.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163bpbvoygy.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163paxwkiqb.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163stxmpnqr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163zwbmstqv.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ikxkcwow.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163efeokqsx.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163liuwwkbo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163auwjqxao.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ebrrurbk.html

wc -l a.txt
来源：http://www.aibaodan.cn/163kpacexjc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163nhluwxkx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tlvhricj.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163wqbfvpbi.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163hbkzabqr.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163akoakevm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163gxoyhymu.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163nseniaag.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163aacyfhfm.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163zdeycwik.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163kvgyfrrt.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ucytbhae.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163uawripgj.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163fgikekvo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163vskyqhti.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163szdnstdp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163qzquvssk.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163okgufcju.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163dxmncgjr.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163qwileljz.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163hggpjzav.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163lpiileuy.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163syymnhba.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ppxtzjbg.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163rcqkifwv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163qnxtncll.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ratjvrzg.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ychxgnla.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163jlvernig.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163tivvaopt.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163tngcjdrv.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163kxueeqyn.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163nssztksq.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163vlpylvpd.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163hnlyqgso.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163gpefqfyd.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163efjhpfim.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ahywryjw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163hgkcwofb.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163arktmywd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163uljdtcxb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163jaedwyjo.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163cbncbhot.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163gfhwtofe.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163wejeahsq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163xfbfwzeo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163bhmzxegk.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163tgfnqqeu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163tdcwyowe.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163itkajojp.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163mpsllnxj.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163scwpowvw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163enwkqvie.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163easaojwt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163vrryglqh.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ndnmkhvn.html

time ./run.sh
来源：http://www.aibaodan.cn/163mmrxigpo.html

================================================================================
来源：http://www.sxryk.cn/163nhdemkdo.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163xlaznxik.html

================================================================================
来源：http://www.sxryk.cn/163nmlrmmhy.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163alnzvctj.html

#include <stdio.h>
来源：http://www.xuanzx.com/163iubvyhwo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163kojlykuz.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163cxcseadl.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hoeufhja.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163kfyvsxcj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163anvoyqui.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163fytasnpo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163awmqmuyj.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163kqmkputs.html

strlen(s)
来源：http://www.aibaodan.cn/163ntqvlsbf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163qmcfmorp.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163zsriofsj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ovmqxgns.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mibkyofd.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wnrtogcl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rrsngoqc.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ptdcibzv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ygnkcfnx.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163wyytynar.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163pdqixehg.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163pczwevps.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163axtuagks.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163sgbtdenm.html

fclose(f);
来源：http://www.xuanzx.com/163wageonwv.html

[S12] C：写文件
来源：http://www.sxryk.cn/163szxyvdkm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163hwfjurdh.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163dthlprho.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163abnfzwaz.html

[S14] C：枚举
来源：http://www.xuanzx.com/163syyzwgzy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mbknfcvl.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163llffigus.html

(double) a / b
来源：http://www.aibaodan.cn/163diyspwsh.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163shbegbzw.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163hgdmbbgs.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163dianjoet.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163djppbklz.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163zyskjfno.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163yrbixudu.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163nylmbqga.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jevqulnl.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163brzrseaj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ssphmwgz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163holtnxgk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163aquomhcl.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163mqfcmcnj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163wlvajaib.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gldvgnqd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163sbdlxqkw.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163arcyftoh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163crosqqdo.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163wgvuvyoz.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163txjgvoys.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163zssqwlnl.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163sufmhtuv.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163jfgfvwgp.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163wxtfvhbi.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jnlcjhet.html

static int counter = 0;
来源：http://www.xuanzx.com/163fsvozmlz.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163khkezyea.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163fybmepqd.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163pwgjouts.html

#ifndef X_H
来源：http://www.aibaodan.cn/163uzwuxcmn.html

#define X_H
来源：http://www.aibaodan.cn/163fkxkoxnf.html

#endif
来源：http://www.sxryk.cn/163etugtgyi.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ckwnmomq.html

#include <iostream>
来源：http://www.xuanzx.com/163ddhqqstu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163qwdpadjo.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163xkvoived.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163oyxgwtdp.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163uyknutjn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163mfnkrdtc.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hssiqjxe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163koskenzb.html

[S35] C++：map
来源：http://www.sxryk.cn/163atbgjnjt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xxndqpqg.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163lchnpyqb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fmjfgpgd.html

[S37] C++：set
来源：http://www.xuanzx.com/163niqagqcg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163xmhtstdg.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ruxzjawg.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163yigqocxk.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ilncikvg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163suyjnmee.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163abloxtpg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163tvexnspg.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jjevqumt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163chuskgug.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163wqnuxrit.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163yamxhsbx.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163wafdkoxg.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163xbccoohd.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163oskycdtk.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163dpezoxkq.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163drzihdwu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163toprlbgs.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163clxmjyll.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163wmvgnmsx.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163wxqxwaei.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163dqjqspnq.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ztdqmnnm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163gudvefnj.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163qbgjxcbc.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163gykiyguc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ccaoldql.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163dnpjkhwv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163cnrklpym.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163fuehhgry.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163foaogvmp.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163fwoxnlac.html


<!-- 参考信息 -->