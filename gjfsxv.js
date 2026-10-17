外链999!wailian999！

[Q78] 当前时间
来源：http://www.sxryk.cn/163xmfokbig.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163egzpmppp.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ftvzplay.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163obkicxbq.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163tkabsjvo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163cmphobcv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163udzirvsp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163yyjqeafs.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ceuxugbo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xhaggduy.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163penkpmuo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163xuqicqnk.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163eaemllxh.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163hygzyhse.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163sgebbwgh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ulgcasgu.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163erlkzmbh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163gqlpqmjr.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163tnhyajdf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163coxfvsnv.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163cnhpmzfa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163sgzubjfs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163orldeaqw.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163wtonjfxx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163prcfvlgz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163hjclgjiq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163xsnbqzgu.html

================================================================================
来源：http://www.sxryk.cn/163mpaxqlwg.html

R. Bash 专题
来源：http://www.xuanzx.com/163crfvglnx.html

================================================================================
来源：http://www.sxryk.cn/163oallnehj.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163rtgckeht.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163wavmptkf.html

set -euo pipefail
来源：http://www.xuanzx.com/163mbogfsos.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xoqxeiqb.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163vggzrzdu.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163mssoxiqj.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gwrayprc.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163pqrjymor.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163lxbogtje.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163upljrlkj.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ktnozotx.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163quccplzi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163dvbkknah.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kcoerfps.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163hqddmeen.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ksljiaea.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163mmsnmbof.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163kdgcffwa.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163cwgrzxlb.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ioxpjcip.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163xvtaqfaw.html

[R11] case 多分支
来源：http://www.sxryk.cn/163xelmmncm.html

case "$1" in
来源：http://www.aibaodan.cn/163uajdesww.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163wwyxrarq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lztrssdh.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ogkgnsxp.html

esac
来源：http://www.xuanzx.com/163aheqasip.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163cxnhaomq.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163edpcqhfm.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163jzskxxmt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163bcqskstj.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xkfcltsu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163cxwefkra.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163qhajeyjg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163jprfcdfk.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163jfjdxznz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163uupeclxl.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163nofmlgdw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163gumbrvum.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163lulrapuh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163sdyrdzdg.html

[R19] 数组长度
来源：http://www.xuanzx.com/163delblfav.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163blxbtdag.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163jdmozztz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ocnqwijw.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163mghklemu.html

echo "${#s}"
来源：http://www.xuanzx.com/163emwgzhsg.html

[R22] 截取子串
来源：http://www.xuanzx.com/163uaeqiubd.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163fdtugrkz.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163xtdcnybs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163xxwfbnig.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163iahhrwbu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163lvfnjumo.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163hpjnkaua.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163txxrxivu.html

[R26] 命令替换
来源：http://www.xuanzx.com/163srtwfrbj.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163vylwdkmw.html

[R27] 算术展开
来源：http://www.xuanzx.com/163nrhamrvt.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163iovhhlof.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163xpdtisqg.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163pqwimlgz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163larnkaag.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163atrowjku.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163fsqrypia.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jtwefvuv.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163jvnewdci.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163svjsvthq.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163rmgzzrlp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163swhkaosj.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163azrggvoo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163wcruarae.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163gcenauht.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ibqqnfcs.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163xynsppsa.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163pfhfwnxu.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ggwqmhpw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163usvdmgbz.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163fsagfgwy.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163rpqefpri.html

[R38] 管道串联
来源：http://www.xuanzx.com/163tnxiwbba.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163djdaygje.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163dnepnhyg.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163bschhzve.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163tyxzpsgy.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163sveeggtb.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163otfytdys.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163wilothxl.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163pvujhdrj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wgzbhwzy.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rlmxznnk.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163qmdajraz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lbcbfqvv.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163lrpbvqqh.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xjueepxn.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163aroasloj.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ovhvbmyk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163amhagwrm.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163qrardgji.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163dxeemksx.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163mjplleku.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163rilwolut.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163xkqdzjpk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163kbtrnzau.html

[R50] awk 求和
来源：http://www.sxryk.cn/163zbyuslsk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163miqvzrig.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163uwwmdupp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163kwlmwaxh.html

[R52] 统计行数
来源：http://www.xuanzx.com/163nischmid.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ksiykswx.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vmyoiwnh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163urpsuymn.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163zqxeiqpy.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163bbxcgiuu.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163hqhrqljp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ltivkadm.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163qozxnpsi.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163tcrpjoxp.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163zdxpgtgg.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163uoecttif.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163jyjpdrto.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163hjkkvoem.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163kqakwsbh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163zbhibapu.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163dejashld.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163tzxbyymf.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ezrwhgwu.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163wtteuziv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163agltdhsa.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163urnofhcx.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163vddumzgk.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163pifayeqy.html

[R64] 结束进程
来源：http://www.sxryk.cn/163sjgnmfei.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163xczmkajm.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163nnffpxgb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ujpetxwa.html

[R66] 定时任务
来源：http://www.sxryk.cn/163dmmkosvi.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163yqbzbdix.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163gbsqwunq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163mzkekrpn.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163vupnqcfd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163gxqmhyir.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163fagbfhqy.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gweakcfx.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163hvykbjhd.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jrkzyqia.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163kwkqsqca.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163sgfouxhl.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163oqiqygrc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163woprlivv.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163cmguclfw.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163aeizgebc.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ueutknpw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ahlxhbkn.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163soyodwpv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163kufcvdbr.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163cfcdfaxn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163maxnvyas.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163nfkdwcnr.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163suymcupx.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163lwvdtgwx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163djclbelc.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163fbzmotpc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ikkouqbe.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fvoojjhd.html

time ./run.sh
来源：http://www.xuanzx.com/163erquoupm.html

================================================================================
来源：http://www.sxryk.cn/163vqdscdex.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163zwebanck.html

================================================================================
来源：http://www.xuanzx.com/163bxxjcxts.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gcggipiq.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163qxyvqjop.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dktmsgzx.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163hphuslxu.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163lbaoxfpa.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163nbvssdch.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163wpuyhzzj.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ypoopdwe.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163lmuxmozp.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163tosvniim.html

strlen(s)
来源：http://www.aibaodan.cn/163dfwzimai.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zorbxfbs.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163phuzxsbh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163beudhhep.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163yjmfmpxb.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gxkcxhia.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163bqjfioqh.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163regekjlv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163lfgjuqgq.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163eixsabwv.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163jljbvrth.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163lkzcyiuf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163eynitajn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ohgeytlu.html

fclose(f);
来源：http://www.xuanzx.com/163qltnscdn.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ajytjpte.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163fdgcwqax.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163smefunqv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mqzdtotg.html

[S14] C：枚举
来源：http://www.sxryk.cn/163fyogygpy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163wqxfpfjd.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zjmueesz.html

(double) a / b
来源：http://www.aibaodan.cn/163qastrxlb.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163zmuwbxfl.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163sznsnbtb.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163vchbdwuj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xvfpzvlp.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ielzglzo.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163uckvriul.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163qyajjwcx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jobvfprz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dyuxtqxn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163vrpsbbrf.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ktxdqamz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163xdmfenyz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163natstbpc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163tmstgtjn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ptnyltyg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163mitdmpzc.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163zvojypme.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ahtpsjjh.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qcgkcgem.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163mlpzsmrp.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163twzturre.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163edmkport.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163eofadxct.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xmtebqwr.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163xyvxatbu.html

static int counter = 0;
来源：http://www.xuanzx.com/163iwnkgvfy.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163haufoqgu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163oekkfmfy.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lnzeggsi.html

#ifndef X_H
来源：http://www.sxryk.cn/163ukeqytad.html

#define X_H
来源：http://www.xuanzx.com/163ufzbatxu.html

#endif
来源：http://www.aibaodan.cn/163kbgznysz.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163aqjjpdic.html

#include <iostream>
来源：http://www.aibaodan.cn/163xwbrvnnu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163sdetfwgk.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163arqtxqfh.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163cddvlpin.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163vtvhchdb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163fyuzszgo.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163utvzqmro.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kvepbzml.html

[S35] C++：map
来源：http://www.sxryk.cn/163trkksfev.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163aabyzzoj.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ytaowfnu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nytqhlmf.html

[S37] C++：set
来源：http://www.xuanzx.com/163ompyxyhi.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rotqygii.html

[S38] C++：排序
来源：http://www.xuanzx.com/163asqbdzlf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163vfytpmlz.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163gregkhzd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163dwbsydlg.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163stfaxclm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163prpuvttt.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163awldfgvb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163lgsoyuka.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163axsoskbq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163bsrnwbhr.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163xvneeped.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ygvyuzqp.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163oyhgsutz.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163jzcswfgi.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ipbzmyrt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163mkajwmoc.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163lemtlpqn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163tgmbckca.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163nbjugglu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163qrpsjijc.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ewxpmzni.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163mqtexkep.html


<!-- 参考信息 -->