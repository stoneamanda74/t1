外链999!wailian999！

[Q78] 当前时间
来源：http://www.xuanzx.com/163wxjtjdfk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ywgwqyqn.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163bibsfxct.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ibqljhfp.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163vebmmkyl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163rienuxme.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163notqxwbu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163vbkcdfer.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163evsixjwm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163shbeuyzi.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163enuemozc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163eywmbsdk.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163klrwxtea.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163icdugxdz.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ktbtkwnm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163jswtveas.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163hchpwegc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163saaoztnt.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163wvvmwbzj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163jwdnsama.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163teimfboa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163pvifpipl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163pnjlgbmg.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163wwhxlgai.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163dxdxyqkw.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163bfpnnxnt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vvgftqoq.html

================================================================================
来源：http://www.aibaodan.cn/163ikuaqorw.html

R. Bash 专题
来源：http://www.sxryk.cn/163nvncrnck.html

================================================================================
来源：http://www.xuanzx.com/163mxwmburj.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163zqoqpodh.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163bddbvxhq.html

set -euo pipefail
来源：http://www.xuanzx.com/163jbjaebih.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163bgjlqjdx.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163pkfzntyd.html

[R03] 只读变量
来源：http://www.xuanzx.com/163zpklwxqp.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ozylojng.html

[R04] 位置参数
来源：http://www.sxryk.cn/163lawvdrtr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163javhbhzi.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163redqmxse.html

name="${1:-default}"
来源：http://www.xuanzx.com/163avejvhzp.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163btnnpncu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163fekqnoqg.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163zqkczobg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163rnjghwsa.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fwbumbrh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163vxqrksel.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163emcfmuea.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163dpvtvrex.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163zwksnwzv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163pkerkqgl.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163kcggioyl.html

case "$1" in
来源：http://www.aibaodan.cn/163wzrjrlxr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163zrhbmfvn.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163yfufhvkn.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163meyankwx.html

esac
来源：http://www.xuanzx.com/163jiqejxaw.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163lvqclfpn.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ahbzcxif.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163qinfjyjs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163lingcsub.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163pdwyexau.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qntbwldb.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163hqncvmnr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163nhlalbnb.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qvknuuvy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163icavyfym.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163jskjbfbr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163sbbcvrcn.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163cdexxjyk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ajledfgy.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163sooqqjue.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ujgkcvpj.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163jiafwtdo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ergxvivb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163yepkpdca.html

echo "${#s}"
来源：http://www.xuanzx.com/163hnwkymfk.html

[R22] 截取子串
来源：http://www.xuanzx.com/163izfdrmwe.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163auqyciik.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163zoalzivx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163gyvtnxud.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163oyuhpwai.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ppuzylrh.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163jahscfwh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ndrpjieg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gyurbhcp.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ksgwxnub.html

[R27] 算术展开
来源：http://www.xuanzx.com/163tnjkwhjv.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ftcmnrql.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163xsbjqkmd.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163toyivbcr.html

[R29] 定义函数
来源：http://www.sxryk.cn/163qetkrznp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163dmpspdam.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wiqbskaj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163dwicmvdy.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163xcfhvvud.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163dohtxyjs.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163mjucdrna.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163efyzzlmx.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163pqfudfut.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ayvmmnpm.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ldzbqkyl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cjqqoxjb.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163yfnrbgqk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163vhhhjldm.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163cuzufkbi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163twomfprs.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ydrugidk.html

files=$(ls -1)
来源：http://www.xuanzx.com/163tryhemqf.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163hkvrpqct.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163alvxkurx.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163aofdofoj.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ykzfdhme.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163gxyuqfsx.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163yfglhrom.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163kwmjbxmi.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163bkrcilyq.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ietaffmc.html

wc -l < a.txt
来源：http://www.xuanzx.com/163pvhqjdim.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163gidxycqs.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163jvuifajj.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163pyusvpab.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163cwydeimb.html

[R45] 批量删除
来源：http://www.xuanzx.com/163cshmytuf.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163zxkuaylr.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163gbbkmrgv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163nkqwukhm.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163pcfjekbz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163upyedugy.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163gywktywc.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163iculhwki.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jrpcwjdw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hqzlhnmw.html

[R50] awk 求和
来源：http://www.sxryk.cn/163lrjrrkrz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163izojnkox.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163kaqmwnsn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ittkfubo.html

[R52] 统计行数
来源：http://www.sxryk.cn/163eurshtpn.html

wc -l a.txt
来源：http://www.sxryk.cn/163ipazjghl.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163xiflqkyi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163cixlrluy.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163iqbdpseh.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163jbuyomno.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163uztaaovr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163rssyubtw.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ikbpggwz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163gajwghrc.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163sbsjmxfd.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163abwnrowu.html

[R58] 下载文件
来源：http://www.xuanzx.com/163tfmgrfxh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163viejvqyr.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zdxwnfsc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163phgxgpjw.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163hprjlojf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163pgkhlvev.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xlhsrapk.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ukxewarl.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ycsfzxru.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163pttysprk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163acbnkanp.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163pgodeunj.html

[R64] 结束进程
来源：http://www.xuanzx.com/163oazdpded.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163jitlvexn.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163eycleriv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ggxurgca.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163sdpmzgby.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163qpvlltmy.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163wxcdqwbs.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163optuhpxk.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163weftraca.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163uwhmwwoc.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gznleaia.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163vrhieyzy.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163iteqizan.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163rqywpfsc.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163rexntdqm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163svqqrlru.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dzxsdhyd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163lflfsrjg.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163cgvqhfjy.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163mviqcabn.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163warlytix.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163demumizq.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ybilmboy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163glarsvan.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163oeqrbwjz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163lzpfjdby.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163dwrxbucj.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163pmrhantl.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163tfzrbbbb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163chzjmvjz.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163bkngllxm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163tpqwomcb.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163kdgmhpyg.html

time ./run.sh
来源：http://www.sxryk.cn/163puewpwly.html

================================================================================
来源：http://www.sxryk.cn/163rzgsmvcu.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163nytvwwdx.html

================================================================================
来源：http://www.sxryk.cn/163joolmoar.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163tvqlhezp.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163kqakincd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ookpphrz.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163smfonoox.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163hvsquydl.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163bfoligql.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163zaxzbboa.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163wtmzkwbd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163saqbeytg.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163qxlpkcom.html

strlen(s)
来源：http://www.xuanzx.com/163nrunjehy.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163jwtjtbgf.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163qqzcunjx.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163elklejkf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163svqfohnm.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163zsougcbj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163xovlxyph.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163doqdevpc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163addytvsy.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163cmtiajtr.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163zjwrstef.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ayafdmlq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163mczdisqg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ovnsabta.html

fclose(f);
来源：http://www.xuanzx.com/163oouewwxg.html

[S12] C：写文件
来源：http://www.xuanzx.com/163jadeoccx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163mqubauff.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163dvejormw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163tsbwhtzf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163sivburkd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163fnqgpdfq.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163iaqfvokf.html

(double) a / b
来源：http://www.aibaodan.cn/163btwrfkyj.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163cabajtpk.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163orqcdvns.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163cvurxvav.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xmvdjcck.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163rwawegua.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163aedyrakx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163uocltvbg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163odlsexeo.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ubrqgwol.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zdwewzvs.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163erehdbda.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163rywnnijz.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163fqwmwdqq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163mxnwcssb.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163uwvjddyb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163tvezlxwx.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163gydxgsqg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163nznlyjsl.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163mbpebpnv.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163yzgskgsv.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163rjcydeuv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163dfmzfdmz.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163thiyklxu.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nlopeofr.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163pptztkcc.html

static int counter = 0;
来源：http://www.aibaodan.cn/163akiddpmd.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163jfagiwma.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ofdiwqfs.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ylmsocbo.html

#ifndef X_H
来源：http://www.xuanzx.com/163unxygflc.html

#define X_H
来源：http://www.aibaodan.cn/163qdzxzsoh.html

#endif
来源：http://www.aibaodan.cn/163oymjvsbn.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163rqpdsxat.html

#include <iostream>
来源：http://www.aibaodan.cn/163wyxdlenq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163eoanzryh.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163eugmlele.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163mpiemacp.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163fgqnfmnh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ektueqsb.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163pddtkmma.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163wmthqzyn.html

[S35] C++：map
来源：http://www.sxryk.cn/163kjaagbnj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xgymgzuz.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163nazqsnsm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163aergaqpg.html

[S37] C++：set
来源：http://www.sxryk.cn/163jegynyti.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163qaancdty.html

[S38] C++：排序
来源：http://www.sxryk.cn/163kofuuusn.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163mabdoeyj.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163rypqmhnr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163unpbcbvr.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163mtncctjq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ovbiawzx.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jkhjfyln.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ipreaxmq.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163yufvuadq.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gquvmqdr.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163iwatnzhb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163etferuho.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qzgfhatj.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163nuvqebsg.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163cvkzqlwu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163aszvjlfq.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ytexqryb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163esbewrhb.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163hyswzxfp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163tynaxzjz.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163gjzagduz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ombfphrr.html


<!-- 参考信息 -->