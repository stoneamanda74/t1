外链999!wailian999！

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163hsgdawnd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163gznzzvsi.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163gpbqwwoq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163axlvoxco.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ybrgiggm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ysuihziw.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163fktzdaxh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163pccoajfn.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163undfophl.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ggglfygx.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163tfivpzqf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163rqydxckf.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163xgiktazk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163evsgonsm.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163hmpturau.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ijbeikgp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163lzsvlqvt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163sycutcxd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163blnuimrj.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163gnxuqyhi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163ohaltsva.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163vteumtnq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163celowwyg.html

================================================================================
来源：http://www.xuanzx.com/163dhdscdkj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163fqsnxxcv.html

================================================================================
来源：http://www.xuanzx.com/163mjcufoyt.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163kmsnskcu.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163bugzzfyt.html

set -euo pipefail
来源：http://www.aibaodan.cn/163phqdnksm.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163sxlgjgsa.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163wlcqpojl.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163czsngjun.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163zzilreun.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ubfgvtmd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163kxefneyz.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163imablfgh.html

name="${1:-default}"
来源：http://www.sxryk.cn/163kyaxhzkz.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163nvghlvmx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163sqgtgzhz.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163uxxqikgm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163cblhumpj.html

[R08] 数值比较
来源：http://www.xuanzx.com/163yxtntibk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163hmatfobz.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ldufewmh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163tkefzhbb.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163olqtejht.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163anrsrinp.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qraqfsjh.html

case "$1" in
来源：http://www.sxryk.cn/163igtcsaje.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163qayghhle.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163koffotku.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163mrfodojh.html

esac
来源：http://www.sxryk.cn/163hdzrrilk.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163fnyycetx.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163olvbeoxc.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163mevngibg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163eqmshpso.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163wtohuuwg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163wvnpieho.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163uszpveam.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163tfcmtrti.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163svffkgkw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163zypjabkl.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163bzqwolmy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163piueuvsz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ocymmeel.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163xtrlcbnt.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163tzpibzpk.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163nwjxxgvk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163jgsotxya.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163aufsvifa.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163swqyvrbz.html

echo "${#s}"
来源：http://www.sxryk.cn/163czavxdfj.html

[R22] 截取子串
来源：http://www.xuanzx.com/163cbdhikpb.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ngyvbshf.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163fhkprlps.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163agjuyqcu.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163cxlblofk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ccsupykr.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163bzxfchoi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163mwqocqly.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ckgpasoa.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163dojyuuek.html

[R27] 算术展开
来源：http://www.sxryk.cn/163luphvddg.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163dpjhlsmb.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163jlsnwhab.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ronkafbw.html

[R29] 定义函数
来源：http://www.sxryk.cn/163wwadlhpd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yeuzorax.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163fudskors.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163nwhftonb.html

[R31] 局部变量
来源：http://www.sxryk.cn/163sjktyngi.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163esuxufol.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163foavthbg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163oqgnrdju.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tzlxyosx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163mikzadfs.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163xehckllc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163quhzijql.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163gphkrcle.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163gwryvxlx.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163bmkxbatn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163tpcewrjm.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163axfztnfc.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163lvnzqond.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wawjlflx.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163fiocmcvs.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163pqtzfpnb.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ldghuksx.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163vmpbhjel.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163mvvfnyes.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163bruijxjb.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163qvwdfusm.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163xljvokqq.html

wc -l < a.txt
来源：http://www.sxryk.cn/163iyybkkoo.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163hcddaojz.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163kdevyjbj.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163yahjtdfg.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163xxlclmlt.html

[R45] 批量删除
来源：http://www.sxryk.cn/163kahqtnzi.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ffkpjydn.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163tbgeuvsq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163bgelqfef.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163xbbripvq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ymuopbbw.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163fywyikgn.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hoecwnrp.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163nxijvbpw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163chlxqeat.html

[R50] awk 求和
来源：http://www.sxryk.cn/163chwnticl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163qlcybbeh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163onaejdvt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163zfrxalvw.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163vatmtzuh.html

wc -l a.txt
来源：http://www.sxryk.cn/163kboygnee.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163wpbnorco.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163clzvnrjn.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163zmeqizgb.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163nrbrbpch.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163yfxibyyb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163kemkfoyo.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163lldjbpkp.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163lroalsfa.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163fjbcekly.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163pdngshmu.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qfpemzes.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163olbcrmve.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163luwfylmh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163uguiimmz.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163xgrsfmuj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163hhibspcm.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163wjyopgjg.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163uiqfroae.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163lcteicft.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163kjvvmjuy.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163kxonavkt.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163nbzbgdfe.html

[R64] 结束进程
来源：http://www.xuanzx.com/163hypzzzbo.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163evzjobrg.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163kxxaeoix.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163bgadkaph.html

[R66] 定时任务
来源：http://www.sxryk.cn/163mhricspn.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163hspxdzgb.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163epiuxdyt.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163brpsvwvt.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wirsytoa.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vifyvfit.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163veawrerr.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163fgezgnme.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xxrhkorf.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ncujkild.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163nxbqlpqu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163jyhizxre.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163rfauwgjo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ddrhummc.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163usnhamkl.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163pcdmmitw.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163stmknkhb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ngwrveyg.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163zstoobci.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163imzusgoc.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ojcviqhr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lkrsvgva.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163cnfuvupn.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163zczpgilg.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163etnyvggm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163uhzzqgqf.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163kowksgew.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163gtblgcyn.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163wdoyqkru.html

time ./run.sh
来源：http://www.xuanzx.com/163glxbinub.html

================================================================================
来源：http://www.sxryk.cn/163yzphthsx.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163jwokoffx.html

================================================================================
来源：http://www.xuanzx.com/163sjgcfkca.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163avsepdhy.html

#include <stdio.h>
来源：http://www.xuanzx.com/163digugxpr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163myeviuua.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163vddbgvlc.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163zirglgsh.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163lpwyqdsa.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163wzcgqzaf.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163qmqcqami.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kzieqhjo.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163vzhjwqna.html

strlen(s)
来源：http://www.sxryk.cn/163smcmyfyq.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163iupcrpma.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163vzrctbjk.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163bcvfefje.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163vdldifkh.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163driuopro.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163juaqloqk.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163vewvblvy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163qdmcfvjb.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163wmbtbxlf.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163bbeuoysq.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xuzqzsit.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163pfniorxq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163qffovoaw.html

fclose(f);
来源：http://www.xuanzx.com/163bskskjmw.html

[S12] C：写文件
来源：http://www.xuanzx.com/163qabkyurz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163vilphbsp.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163nbnvdrpr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163thuhlfhh.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ifborofg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163idquirck.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163vizldtor.html

(double) a / b
来源：http://www.aibaodan.cn/163krdgfgto.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163otmpwljb.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163aimzymqh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163lmkogwpe.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163gdlskxoy.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163hxhjpbbg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163prrgiqde.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wzjetoxt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jdfkqkhk.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163pyquhhjr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163yyfyvvfr.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wqmjqoyx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163gwrtdogp.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163teoxyoox.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163sakxqtay.html

[S23] C：随机数
来源：http://www.xuanzx.com/163lfnxcmxh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163jpwhdnfb.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163raxcbobl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ufteyewx.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163uirdclav.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163myguufxs.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163evksixmy.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163bdypnwiv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163enpblore.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163eyjlyfkl.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163kksyylov.html

static int counter = 0;
来源：http://www.xuanzx.com/163uifftlcl.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163fnuesyzw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ducwclde.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ubpgkabu.html

#ifndef X_H
来源：http://www.xuanzx.com/163ztzmarhx.html

#define X_H
来源：http://www.xuanzx.com/163svtomuox.html

#endif
来源：http://www.sxryk.cn/163kzgtvrbj.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ybihgrsx.html

#include <iostream>
来源：http://www.aibaodan.cn/163cgbevdmi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163bzalnmhj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163apuzblib.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163yicsqyku.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163gpadsbxw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163qrbjuhqq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163pgttlbor.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163umomynkh.html

[S35] C++：map
来源：http://www.sxryk.cn/163ojgtwmyb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vivsuhpa.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163akdvrfdk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xnyhcayd.html

[S37] C++：set
来源：http://www.aibaodan.cn/163pzeqyusl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163jbbvvqlj.html

[S38] C++：排序
来源：http://www.xuanzx.com/163tiedgthf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163guaavhin.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ziuntjud.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163inelefgo.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163blrlmvvv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163kqmhymsn.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163bplxskih.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163cisizeaz.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163pahsgfdq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ymfpmzpm.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163nhulvkpl.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163qipxttbu.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163fweyqpco.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163rrfhlnao.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163gdsfxgxj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163elxfqawv.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163xdufkacl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xsiabbag.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163kvbraoab.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ernhmock.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163lzytflbk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163xxjzuoch.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163tygtzuhf.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163geshqqqa.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ucfkavks.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xectauwj.html


<!-- 参考信息 -->