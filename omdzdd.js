外链999!wailian999！

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ivdphewg.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163xpoezjdm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163lseucelj.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163uqgajkre.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163sfmvivrs.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163mhrgjhfd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163faiakhpw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163noxxuwtv.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ydrdntof.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163wqtptbrf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163vwybuwat.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163xnxjuekr.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163hzdmgdxb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163izznjujs.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163iwhtoajl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lcsinadh.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ktjcdycr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hdgfddzb.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163kfkjvnzs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163zzebhdnu.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163rnlahkmh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163kqygclge.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163czbwbewm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163uasfqkzt.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163asvooyqb.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163uwpqztre.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ylizkvec.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163elcvcscd.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163zoeeulnl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ozakzlgw.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163xvnlvebn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163mvijpjij.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163fktgogra.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163zslytjzp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163szdhakxo.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163tfctorqm.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163mlihziks.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163vrailxmp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163hhqyllqy.html

================================================================================
来源：http://www.sxryk.cn/163mnrulhyo.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ewdphsil.html

================================================================================
来源：http://www.aibaodan.cn/163ecqyuvjl.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163rvupmzdk.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163veaiohjn.html

set -euo pipefail
来源：http://www.sxryk.cn/163oxueksmt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163uxkhjvol.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163mbljyvoi.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163omrfvtdj.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163xrkxhgkk.html

[R04] 位置参数
来源：http://www.xuanzx.com/163tgzlxeer.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ynpcdrmx.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163esiaqdfe.html

name="${1:-default}"
来源：http://www.sxryk.cn/163onkqcvod.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163qxpwjeby.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ktkokiaw.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163iinfkjux.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163nzhxrrps.html

[R08] 数值比较
来源：http://www.xuanzx.com/163rgjmpxzv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163firrlokx.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ksjfaboo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163yrywbtyi.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wbmitghc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163jegrsshi.html

[R11] case 多分支
来源：http://www.sxryk.cn/163caanuzjh.html

case "$1" in
来源：http://www.xuanzx.com/163yjqagscs.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ssgvpdwd.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163hetqtffh.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163uqgwqnct.html

esac
来源：http://www.aibaodan.cn/163mzovdnhh.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163eilkgqwf.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163kmryvnsv.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163raomjkbi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163pooqamtz.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ilavlogy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ghftqrhc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163cwpfjsoi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163keksaody.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163enjjbwop.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163vtedchrz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163vvivslkt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163keboveez.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163kadcghrj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ryovhsay.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163gncbmpfi.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163dfjjmbcg.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163wmxmbvsb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163cqppdtrp.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163nvzbrliv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163whmexgnh.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ofsebzxi.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qsxalsuk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163hcjtoxwg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163znlosejh.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163xktxghng.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qirokeca.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163lenoskvo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ocbbbgfg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163sadapldo.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163mkbarxeu.html

[R27] 算术展开
来源：http://www.sxryk.cn/163crxjnvqa.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163yivvfaby.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qdgqutcw.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163zbffgoaq.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163cliiwzoc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yckzumhm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163foylmday.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163gboovydb.html

[R31] 局部变量
来源：http://www.sxryk.cn/163dkgnbply.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jxacjkph.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163pfgicxaf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163xuzeokrn.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163sgztfxdb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163gdfaormd.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163incnqbli.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nttdjnfu.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163bixuefmy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163uariunvp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kapsrvlx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ycsrcamn.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163vnplsxcr.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163lhczpagp.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ivnvyrai.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163dtsdnahk.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163tdjhsnvp.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163uwlqvcgm.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163prlrezjt.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qcovtnek.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163bdumtrgu.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163iacjqkxx.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163injtivee.html

wc -l < a.txt
来源：http://www.xuanzx.com/163kjpivdgx.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163vtkfflje.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163vgosvkea.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163udvepllk.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163swxcozsf.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163meaednpl.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163rpbodypi.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163pzwmwpzh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163xemutvyg.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ywozjpfx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163akxviafm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163fmmesoqj.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163fnxdehki.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wuyjwtbv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hlvzjfqh.html

[R50] awk 求和
来源：http://www.sxryk.cn/163cipkhbex.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163zmnwbdwj.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163zrvresym.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163uecsqblu.html

[R52] 统计行数
来源：http://www.xuanzx.com/163jxkfnqzb.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qbadtpst.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163slbqvnnx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163uxuoxfdq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163pcxgielx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163yzhnfvmk.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163azecmmqy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163cenzfcgm.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163qdgaqdan.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163xwcclvwz.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163yxitilct.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163wqrbwedh.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163rzwmqecp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ssrqfnsx.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163atntmhrj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163pjdjnatg.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ikvbctcs.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163lskutljc.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163yefuokkg.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ulevtyoc.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163drbmzwfh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ictqzgba.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163lzoojokn.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163qpqyuola.html

[R64] 结束进程
来源：http://www.sxryk.cn/163eemqtgfs.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163qgkpmrmu.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163jwinudlb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163gxtogkyf.html

[R66] 定时任务
来源：http://www.xuanzx.com/163yutbbzra.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163stdfvkay.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163uoukzmju.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163aexayhwn.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ndfwxjlf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163maktndnc.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163yaegmgky.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163nvsccdvp.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ylhycmoq.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163jcmdmsbb.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163moafkffi.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163mjkipcdm.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163nebwarqu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163bylfkulh.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163rogqnuex.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ujnqvvsp.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163hcjluedf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163kekdqlvd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163iqgpisfq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163bobvrvlg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163plerygwn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hgyutisq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ctoutsui.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163fqoxriwr.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163jyiftjfr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kxvopiwn.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163kmtditjt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163jwpzdyhg.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163omcdisik.html

time ./run.sh
来源：http://www.xuanzx.com/163ybgqwwhj.html

================================================================================
来源：http://www.sxryk.cn/163zlfphwgh.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163cwxiisze.html

================================================================================
来源：http://www.aibaodan.cn/163xwppxosl.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163jwhmubdm.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ietllhbp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163mrjjxsuj.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ziosckfx.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163dbqimpea.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163sdferelm.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163mvjiixco.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vqutkpaa.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163cuogcmyz.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163opcobmsj.html

strlen(s)
来源：http://www.aibaodan.cn/163ngydsvyq.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163smalzfgz.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163egzzvymq.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163wcjacxsz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163dzyjdchb.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kkidkukg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163zszvmhwb.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163lbuuwdgh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163kpnkhodl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163nsehajex.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163pbggfvhm.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ycfmpxhe.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163uwzwmezg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xbrefwgp.html

fclose(f);
来源：http://www.sxryk.cn/163pkjtdhuj.html

[S12] C：写文件
来源：http://www.sxryk.cn/163dkacigpm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163umzbtpup.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163whigzawn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163tqpynlzp.html

[S14] C：枚举
来源：http://www.xuanzx.com/163hvffmaft.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163axeplmvn.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163jyvezext.html

(double) a / b
来源：http://www.xuanzx.com/163chlzhvss.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163qbhpbdxk.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163wzuoqtxy.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qeukxxoi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163yjkzltxf.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163taapxkbi.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163eazfpadd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163rpppqpzs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163sqenfuzb.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163pveeixzs.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163djoaofht.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163lcrphojh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163rljmhhlg.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163blpjpvei.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163gmdmkcgh.html

[S23] C：随机数
来源：http://www.xuanzx.com/163agmlgfyr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163krtvjyia.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vvwgxzck.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163clkuudzc.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163qevnipdt.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163krsgfeet.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ifneusmh.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163uigirhvm.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163coqfcplz.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163rqmmjnaj.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163xpqylgpn.html

static int counter = 0;
来源：http://www.xuanzx.com/163lyuyfehy.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163hhkrohpq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163yiyqyaqr.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163etahzvna.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hfpdcxqt.html

#define X_H
来源：http://www.xuanzx.com/163mdrspzur.html

#endif
来源：http://www.xuanzx.com/163srrtmvzb.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zhzwqpzh.html

#include <iostream>
来源：http://www.xuanzx.com/163ylekucnf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163feucqynw.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163yaqqzycy.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163agmulnds.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163nbcbeqcb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163wkdpljfg.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163yesmygwl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163zapmkunb.html

[S35] C++：map
来源：http://www.xuanzx.com/163njvyjqpc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fmnlpnek.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163waxvisdj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163uvjnrinp.html

[S37] C++：set
来源：http://www.aibaodan.cn/163mauqhuik.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163btnoqftq.html

[S38] C++：排序
来源：http://www.sxryk.cn/163pmfoqcga.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163qfvojxym.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ysyynwiv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163kyainxhb.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163arnpmxma.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rdsfrpei.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163dtobfzfq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163mcxbckli.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163tojkwesy.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163jnhewbxg.html


<!-- 参考信息 -->