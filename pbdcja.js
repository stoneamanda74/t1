外链999!wailian999！

[Q78] 当前时间
来源：http://www.xuanzx.com/163bpophnhd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163mdfwedyu.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163iyjxdive.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163bpgshmqk.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ourgekqk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163dmolbcmy.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ftegqakt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163asjtyuno.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163fhhpjfye.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163jlxwcxzc.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163fgmmebxh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163merbgysu.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163zzxwmhzh.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163orfdhifl.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ztdbbfxn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163cutqqixp.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163yfglikbn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163pdjtkwkl.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163xmbxkhru.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163rnyjexmc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ijnhbret.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163edregdbs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163frjmfmuz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163rdflpodc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163axkugnfe.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163svivrzti.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163clxuxfbu.html

================================================================================
来源：http://www.sxryk.cn/163leesqhxa.html

R. Bash 专题
来源：http://www.sxryk.cn/163hrmfrdlp.html

================================================================================
来源：http://www.xuanzx.com/163wjnxjnjo.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163cvgqaazu.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163pjkegcbm.html

set -euo pipefail
来源：http://www.xuanzx.com/163kiizzqwe.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163tymvultd.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163xdeciacn.html

[R03] 只读变量
来源：http://www.sxryk.cn/163rfllloue.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163bcknjmoh.html

[R04] 位置参数
来源：http://www.sxryk.cn/163bmmsvnbp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ajjbfprd.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163faggztwb.html

name="${1:-default}"
来源：http://www.xuanzx.com/163qcgioyhi.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163rasoaslp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163zcaduqih.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163lujqqvms.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163wozvlpia.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zpyvzgdv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163cwnhsnnp.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163elsiydjb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mkwzmeis.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163tsrtzipr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163nejiuffn.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163sgvkluga.html

case "$1" in
来源：http://www.xuanzx.com/163rmuuntmd.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163gglaptqh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ufruxdaa.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163idsmvgcb.html

esac
来源：http://www.sxryk.cn/163hjdlvcth.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163oprxeddd.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163eqhnusrv.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163kilakbwd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ithbknrc.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163mclpgfzs.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163etwvqdnk.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163llhsfvvn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163vtdunlip.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163icadpqnx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163hzckxzoe.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163lbxoyytr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163fofznheh.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163cxpnuuyx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163wtsvhwjn.html

[R19] 数组长度
来源：http://www.xuanzx.com/163mtaakzjl.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wegiqcvl.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163jvntrqrx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163hczrbejf.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163kfhcabjz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163tfcsusmw.html

[R22] 截取子串
来源：http://www.xuanzx.com/163hwfkxaib.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163bifcjqsl.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163jwcmfjoj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163pqncvnht.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ectebzvc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163chtrmfyq.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163cvtzcqar.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163omuicobh.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gfrooosk.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163rpksgrfc.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163wgybsgwk.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ldygeivr.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163efnjlbfa.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rtvlphta.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ubgljily.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163yqloofla.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163kxfgrfsp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163fsbewkya.html

[R31] 局部变量
来源：http://www.xuanzx.com/163masryako.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163uofmieoc.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163nybeduds.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163cbcjddks.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163lzincckn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163rphzdozl.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163aattprpk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163pqverjww.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163oauuqfty.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163gbpawvtp.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163vqoxznto.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163nfcsmdpb.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163yhlniaet.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jogygrlu.html

[R38] 管道串联
来源：http://www.xuanzx.com/163zlgqcjdt.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163lcidsdly.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163hilbevwo.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163skupoznj.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163uimanaft.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163vxdsjqra.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163phprgzdy.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163oubtkpvu.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163iktsliiu.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ljonmwbf.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163qdylcluo.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ragzcdkw.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163kghigedn.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163vzphembt.html

[R45] 批量删除
来源：http://www.xuanzx.com/163urrexhae.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163zfpvvrmg.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163hfpwprlk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163lxedhxdt.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163rjvosowi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163bxvjuzuz.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163zzwsmhey.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163wguqqqnw.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ghkddgvh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qfcyceiw.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163pxfcfoie.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163tzgugqsq.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163zelrzvcu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ynlxvnlz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163sadywgzl.html

wc -l a.txt
来源：http://www.xuanzx.com/163nrsjctcf.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163powxoaiz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163uafmvctr.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163rkphiqkk.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163mdewzvda.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163yrczwgfw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163nehkzncy.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163pkfuxumj.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163jnfywtcs.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163slxitzgp.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hwgfdfnh.html

[R58] 下载文件
来源：http://www.sxryk.cn/163sgkgexlu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163vruaijtb.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163utcmnpoj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163uqkndgen.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163iueenkmm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163dwvmhaip.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163naxlmmwt.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ycdokegk.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163elnldxed.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163rjoxogqx.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163noetgbwj.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163bbrpegfa.html

[R64] 结束进程
来源：http://www.sxryk.cn/163amvfewjx.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163xzrgtgmp.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ngkwanaj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163kbddenyx.html

[R66] 定时任务
来源：http://www.xuanzx.com/163quvnzbuh.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xfhojhpo.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163krjftaxt.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163yrqetcth.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163qaveezss.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163vrthcbbg.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163noljrign.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163eznbrjap.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163zuikhxsl.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163tdqvioip.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163vkijinvt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163smlehiuy.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163zqjojuqp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163twlpckoo.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163fnokvltx.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163hovnacjh.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163gidzpcrf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163uhshijiz.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163scodxbie.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ooozluib.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gcotygkn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163nnrbxkqo.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163caezgyla.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163lxncoozn.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xagltlqh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163vadyfwyo.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163yumeezrq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163nbvopatz.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163jbgsasey.html

time ./run.sh
来源：http://www.xuanzx.com/163flrcvxnc.html

================================================================================
来源：http://www.aibaodan.cn/163pvwbipjg.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163xizpiqvf.html

================================================================================
来源：http://www.sxryk.cn/163zfzdcgbj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163dpomhhho.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163zngdzfvl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163axefwbuk.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163tpfczqdj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ahygnjxy.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wewuuujr.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163jvffcnre.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163yzgxzqve.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163buwkcokz.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163apbsjzlj.html

strlen(s)
来源：http://www.aibaodan.cn/163gtzfgrrj.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ieuonmhw.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163nfaeatgz.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163njncvbhm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wkcltphy.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163mawntsrj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163peskcmdh.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163mhsuwwkg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163spjjiqtn.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163alnxkxow.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163lsqkmktb.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163crtqznnf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163qjqxkvgc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jqhvzsov.html

fclose(f);
来源：http://www.aibaodan.cn/163clltzbvt.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ycfgumfv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163pygyonxv.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ndoyhelz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163cxlfhpqt.html

[S14] C：枚举
来源：http://www.sxryk.cn/163mrxkzjyc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163nxbcmflf.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ligbxiyh.html

(double) a / b
来源：http://www.sxryk.cn/163stqqqucp.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163gfqdohqp.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163mwqgrhtc.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163afwwryaz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163wgqserqi.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163nujolwce.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163dqxssvsr.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wkuotubg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dstelpjz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ormagxyp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ixaptrqj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ltsnldia.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163wmknippc.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163rqbblhzg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163etxvqrty.html

[S23] C：随机数
来源：http://www.sxryk.cn/163kdllyqcx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163gdvlwvbi.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163nijlqlpi.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163qeyheqmy.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163bbubcmzv.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163wrscyqkx.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163qzdsvxrf.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163cfbqqggt.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163avisavlp.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163yipeumsr.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163sypvnfee.html

static int counter = 0;
来源：http://www.xuanzx.com/163mqjapzxe.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163vufxiyic.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163otiatsum.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ptcnkulz.html

#ifndef X_H
来源：http://www.aibaodan.cn/163jnxpwahx.html

#define X_H
来源：http://www.sxryk.cn/163zxbvxkkq.html

#endif
来源：http://www.aibaodan.cn/163buinxiiv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tydcozwz.html

#include <iostream>
来源：http://www.aibaodan.cn/163tgsdyqob.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163lzglasrw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ijtuwrjy.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163rjzesgtk.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163tpolaohi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163xwecieth.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163xyhdfbua.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163qsutjjrk.html

[S35] C++：map
来源：http://www.xuanzx.com/163wzjgtomh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163eeflwsum.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163hzjnkrfi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163psmtqohg.html

[S37] C++：set
来源：http://www.aibaodan.cn/163twssczqg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163kmbkodty.html

[S38] C++：排序
来源：http://www.sxryk.cn/163abtvgadv.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ihpnhykh.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163mhpnckxy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163yhfnlezc.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xahoebmv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163thvfyjae.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163lfqsoeny.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163yttcjsxw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hohycfmh.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163jxbdptkb.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163djzypuhy.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163znnxffgx.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163bisqfnhj.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163kancgmse.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163drnnfifv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163mjjyulsv.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vvillnuq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163uavuieyi.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163jzlkdsva.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wyaaidld.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163aqvqbolb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163icxsdhwo.html


<!-- 参考信息 -->