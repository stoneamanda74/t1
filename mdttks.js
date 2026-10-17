外链999!wailian999！

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163aumbajbv.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qccyecnr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163thpvarug.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ncgcvtwj.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163jfvswdau.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163mhwukhki.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163aakkxtoo.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ffvsxjuk.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163uhjsrpea.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163vfpduqkg.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yjgxenes.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163wernliji.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163frcvscgz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163civdzoqk.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163wvsiubxw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163gxpehzpk.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163jjpkvntf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nyclimaz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jcjheche.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163jkvcsats.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ejtmyqpv.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163hhyhgcsf.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163iugnrjim.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xwywwygp.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163scfoceuv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163lceejjfz.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163bvqidwfj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163uzrkaolj.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ciqexmvj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163zvrudnse.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163hmmcgpvm.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163aschedgj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163kzxsipzq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163dwfidssn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163fjpuspvd.html

================================================================================
来源：http://www.aibaodan.cn/163ujejuulq.html

R. Bash 专题
来源：http://www.aibaodan.cn/163drercyll.html

================================================================================
来源：http://www.sxryk.cn/163pnzxnasv.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163jfhtqdpa.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163itwskwsv.html

set -euo pipefail
来源：http://www.xuanzx.com/163ozxypdle.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163vrebdvkf.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163dupxwtmd.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jgryjgrg.html

readonly PI=3.14
来源：http://www.xuanzx.com/163tdrxckue.html

[R04] 位置参数
来源：http://www.xuanzx.com/163nrpuasfp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163kfzcwcrd.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163twcqoxdt.html

name="${1:-default}"
来源：http://www.xuanzx.com/163nrgnojoc.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163okeaweic.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163oybmtlos.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163bxdhxaeh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163sphvbied.html

[R08] 数值比较
来源：http://www.xuanzx.com/163lvjbxunu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163kszshssg.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163rlalajkj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ksikbrdw.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163mgughpne.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163gzhypbuh.html

[R11] case 多分支
来源：http://www.sxryk.cn/163hmkebrsd.html

case "$1" in
来源：http://www.sxryk.cn/163hqfjlsvy.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163dduolysf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ohwlyksw.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163jvnilayf.html

esac
来源：http://www.xuanzx.com/163gshgthmm.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163aqumhvsv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163khavopny.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163rnxmlaou.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ijxillls.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163psjmbaaf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163wykcomjk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163usozbyew.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163krnndukk.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163dimkrifn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163xlwjyets.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163gjloplum.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ujeaezkh.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163hycdwgkd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163mnnqhiho.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163pwpahqbj.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163khlykllp.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bbvoagvk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163qkbbamdq.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163deccyawe.html

echo "${#s}"
来源：http://www.sxryk.cn/163qqaxnfyd.html

[R22] 截取子串
来源：http://www.xuanzx.com/163hbjjavvr.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ikovrali.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163uactiqnp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163jcbdcpoy.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163alfubyui.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jzlacuyk.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163nosuvtip.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163pthjqnmd.html

[R26] 命令替换
来源：http://www.xuanzx.com/163stsmeoin.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ctlfwxua.html

[R27] 算术展开
来源：http://www.sxryk.cn/163tofqirxt.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163mjbidnat.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163owreohsq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mpejmfke.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163wjjhhncg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163pvmtofce.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163zbnnbvzi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163vrnfrlia.html

[R31] 局部变量
来源：http://www.sxryk.cn/163bazcntat.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163dqeppmux.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163twjxtzws.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ccighqay.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163qozncefe.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ineamokz.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163tlehduai.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163noncygwp.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163rmwbuceb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nauksrmc.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163yhhdhiiy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163vckflvpr.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163zihvjtmr.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xeumqwaf.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gmatclqi.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163yxkikotl.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163yrfdveux.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dntnhklk.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163vmvqkwkj.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163rshmpvls.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163pxxfhsyw.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kzmosoip.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163tdcyfcvr.html

wc -l < a.txt
来源：http://www.sxryk.cn/163nukpzrgr.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163wtsbwwqd.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163hpbjsari.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163vxbmsnja.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163emqycllm.html

[R45] 批量删除
来源：http://www.sxryk.cn/163cynpwowu.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ndpdhtsj.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ehjnncoa.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163geetyrjm.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163niaekpak.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163wgpxekwd.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163beadvyvp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ppjxpdgc.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ilxuvwwp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163igwwxoto.html

[R50] awk 求和
来源：http://www.sxryk.cn/163zpfaozaz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163iyrhprfw.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163iddyxzvg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163lhnrkpul.html

[R52] 统计行数
来源：http://www.xuanzx.com/163yciifbny.html

wc -l a.txt
来源：http://www.sxryk.cn/163sbrnqeap.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163yinwhcbh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163djjdlcjv.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ppinkilf.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ifusdvvg.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163iqbyqqbr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163wfbfmltx.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163colmygug.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163fztswzeb.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163kzojvhiz.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163bnfnoeua.html

[R58] 下载文件
来源：http://www.xuanzx.com/163stvosjzb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163jgdllclt.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163lombnfci.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163guwireyu.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163tzshtkjk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163cxybgesh.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ytsrwtdf.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163btvzceby.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163gtegdboz.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163lqbcizeg.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163qjnkegoc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163xapiwebk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163hqimiqdu.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163mehfxdoc.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wdpvqeic.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163mjjwatpf.html

[R66] 定时任务
来源：http://www.xuanzx.com/163bgijvmsx.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ojxabivo.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163zomqigxd.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163elqzlaah.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hyclodum.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163yznkrlna.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ztlperwz.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163uvryubpc.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ixoeyipd.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163frfzwzng.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163oidipibb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163bfupbkvt.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163tdvnriza.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163znmoqgyn.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163aefbppgr.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163dzdmrbtj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163hhtoryqt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163rxsugdji.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163bwlhwqwp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ilxgsdoi.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163dnpckfqj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dbfzxyvu.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163xuvjduyo.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163xwufcigy.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163kcbdhvdu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163nktgnpja.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163rdzlhcbl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wrpxnrhf.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163iqzuqzgc.html

time ./run.sh
来源：http://www.xuanzx.com/163fhbqvunf.html

================================================================================
来源：http://www.xuanzx.com/163yhnonlhm.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vggfiinz.html

================================================================================
来源：http://www.aibaodan.cn/163kvyuljzs.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163pvhduyvz.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jogtvder.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163yskssafq.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163fyzonovy.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163kpbfwpje.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163eljkwovm.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163dlrcfbpo.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163lfbwyora.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163oywpczuk.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163iorphntl.html

strlen(s)
来源：http://www.xuanzx.com/163tcvjgoyp.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163myhzaldr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163smctnazb.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163xbbvqwkt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163kkurvmsm.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wkmxgyap.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163pjvzuzkz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163pgiyjzfl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vwlefpbl.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163dhiefndr.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163qjdrmlhy.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163astzdven.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163godsytjm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163qcqlezlb.html

fclose(f);
来源：http://www.aibaodan.cn/163knkzjlvc.html

[S12] C：写文件
来源：http://www.sxryk.cn/163oopwftbt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163kknflmuy.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163tulwsqgv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ieexgand.html

[S14] C：枚举
来源：http://www.xuanzx.com/163evmuxyeo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163llzpdpoy.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163omjgebwt.html

(double) a / b
来源：http://www.sxryk.cn/163enjqkuic.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163khrwnwdq.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rmbzeecg.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qbdvanfa.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163dqeqider.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ssfcgwsx.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ttomonwz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163tzibkoqu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163efcxgpox.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163pjyubohk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ulchrmji.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163cnmqxsys.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163rtasknim.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163xzpaloll.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xeavswbq.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qrmrxlgu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163cgbqmflj.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163sdenagra.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163dmmtmklj.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163xhbhdddi.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lndubseh.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163nwsgrgoh.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163dzqybexc.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163tuzqihxy.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163jlkjujal.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163kvybbvqk.html

static int counter = 0;
来源：http://www.sxryk.cn/163ejfjrnej.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163lmdmrssu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163xdsxhznv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163mjuxekfl.html

#ifndef X_H
来源：http://www.sxryk.cn/163duhxfazi.html

#define X_H
来源：http://www.xuanzx.com/163iurlxbvh.html

#endif
来源：http://www.sxryk.cn/163mnhchmcj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zbwzwvfw.html

#include <iostream>
来源：http://www.aibaodan.cn/163lpdwwybv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163rcsxeuvn.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163kqaprvzl.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163rffkafip.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163wnziynyd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163oqbnoior.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163pxvgsgre.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163bikubhht.html

[S35] C++：map
来源：http://www.sxryk.cn/163zclicumt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qlbjhejs.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163cehnxybd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fnluptgc.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ngdaixuh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163oppstdsl.html

[S38] C++：排序
来源：http://www.xuanzx.com/163lsbvpyof.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163hiqrtyqv.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163huiavpsn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163hqxknkpf.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163sszmhrya.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163omzvugkl.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163glcklhyx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ufylmcfj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163gudaswfw.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163txlehvch.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163vrikwjky.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163dngbskdp.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163pzoimpjh.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163msjankkv.html


<!-- 参考信息 -->