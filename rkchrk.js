外链999!wailian999！

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163jgrludrs.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163hkytvdfk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163icxhmieg.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ilakpxvc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163tkfgmylp.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163lcxnvxtj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163wusjtswn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163pvbbhbfs.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163qianmndt.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163cizmhjpj.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163fhbwrauv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163zizdykgu.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163bvvcgxet.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163indmkxht.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163oaiihzzr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163seojtmud.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163fefdtpcg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163votiiqlz.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163pblshxpe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ecpprbrj.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163jwiixulc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163hsbtdxzv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163eqkglvkn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163wzgjloge.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mlhocszb.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163mmkjwvuz.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163nbtnbulv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163tmaulcpn.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163zqeytqmu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163jlkzpapa.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163hvtnxtfz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163nlirkhnp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163wyqpleze.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ghkbqbeb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163hdmkbpci.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163fagrjbje.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wioppvjt.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ptqevjxi.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163fpkktxzu.html

================================================================================
来源：http://www.aibaodan.cn/163kcelnien.html

R. Bash 专题
来源：http://www.xuanzx.com/163vcxhkxzt.html

================================================================================
来源：http://www.sxryk.cn/163onporlaz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163imjmugft.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163tooiztow.html

set -euo pipefail
来源：http://www.xuanzx.com/163vptzrnth.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xqrkyrpg.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ypichjbt.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163weahnptm.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163savogcxj.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163olklkzew.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163iqsgdzgj.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163inravhsg.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jqdlyqpl.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wajugdjt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163fppmedty.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163uetzczcy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ekgzcrff.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163zfwoqxee.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163urzgosaj.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163atlmtiit.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163tjldorij.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163hvmivxqj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163rbdffoln.html

[R11] case 多分支
来源：http://www.xuanzx.com/163uewpclpy.html

case "$1" in
来源：http://www.xuanzx.com/163snnxqakq.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163myfjqxcf.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163cfomimqw.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163rwszuqmn.html

esac
来源：http://www.xuanzx.com/163hwyhjrmg.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163omhiigxz.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163okpgrivq.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163iaszxsek.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163beuglgwi.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163vnpoivbo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163cpwsroee.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163vwnoqtva.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163pgxhlowf.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163dzxckpno.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fzomevnr.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ngxeopvk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163wtvvtyfy.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163qfivzyyb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163bgjikczt.html

[R19] 数组长度
来源：http://www.sxryk.cn/163hstpvtno.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163rsawspto.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163oaqzsiul.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163xlwosmzy.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163gchpozff.html

echo "${#s}"
来源：http://www.aibaodan.cn/163yzbozsct.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163gztrfgwc.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163fawcyzsl.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163kkkabgck.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163cttxeswa.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163phttdrue.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163tfckqtor.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163doeqaneg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hmdalznf.html

[R26] 命令替换
来源：http://www.xuanzx.com/163fjnobfzz.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163dkyhdnkx.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zkronmyf.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163jbssaqiv.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163iisbxnxx.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ekjvhrct.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163bsqthlwr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ruixyeqa.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163famkjiuh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163yobjdmmw.html

[R31] 局部变量
来源：http://www.sxryk.cn/163yxgewzba.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jydkbccr.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163jdsqvjeo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163avlixkeh.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163torauoqz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163qatwtzoq.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163gmslvbhi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163eezvfmeh.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ddvsnptf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163shtiewji.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163kwhmxcws.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163flwpfvtx.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rsszfips.html

files=$(ls -1)
来源：http://www.sxryk.cn/163rwpzebqw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ubofkzli.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163fdxvxgfg.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163rkgmbvob.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163sxyogrtn.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163egscbovx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163hdjmomfn.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163hzublsxk.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163yrfmdrpw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163dvfgvdws.html

wc -l < a.txt
来源：http://www.xuanzx.com/163tvkujyjg.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163lufurqfk.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163djbqxfre.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163liilwhql.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163zzkrkuby.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ffsoqsoo.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163xcptlthe.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163uwywnbfo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163xxsxnjie.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163bphgniwl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cmnrmzyk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163jlifltbd.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163hlrbrcsy.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163nnurppwj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163yeuddyym.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ccscndxh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163cojuseeb.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163jtkbfhkg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163krlpwdpv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163olxvkpsl.html

wc -l a.txt
来源：http://www.aibaodan.cn/163asxsgxzb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163zxklxkdz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163cbutcrjc.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163onddyjco.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163rpvtpppq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163abyirery.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163wmdzmefz.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163tmftdkew.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163pnasbwsb.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163udyhlkwr.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163gayihfxe.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163gfisjuqj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163sfetuyff.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163gxgmcdcj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163xbgglfrx.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163rbuvmneo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163psqcjwgh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163vurlafiv.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163suakabso.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163umnhdlfi.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163bnuvmxga.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163qntcvypz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163vebbrmoa.html

[R64] 结束进程
来源：http://www.xuanzx.com/163amgbxlta.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163rnwlkwcy.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163cozgelvs.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163qjfhyfyn.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163yukoctrr.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163kaqhqnud.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dossbuhy.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163gjfwqpag.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163qrscbnrl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163hvtytrgi.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163sdpltwrk.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163vqkccwqq.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163dmftsnsw.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163kbdmrzol.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163isfnvwqa.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163myhqogrk.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163mygvrotm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163mdwdoltj.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163yfdvexxg.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163vaveagrt.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163mmrokzar.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kuymbhxw.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163kvahwfsk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163biqfetho.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163xinazrsi.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wptrejmb.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tkaeghgy.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163kqdeinja.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163gbqtpajp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163tmqncprd.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163cdnsddlf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163eonmbxum.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163qhshijmy.html

time ./run.sh
来源：http://www.aibaodan.cn/163szwxtjzw.html

================================================================================
来源：http://www.sxryk.cn/163himsirae.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163dsrqtjra.html

================================================================================
来源：http://www.sxryk.cn/163fwdtmgqt.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jcxsnpzl.html

#include <stdio.h>
来源：http://www.xuanzx.com/163eeohjkde.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163rvlrazgj.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163unoixlqn.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163hxfpjqey.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163igjpxwve.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gwajglmc.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ogulvnxk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163nyfpwyxk.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163gkrwiaal.html

strlen(s)
来源：http://www.xuanzx.com/163jezeauug.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ofnqjyez.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163nrregdxk.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163nfgcbnip.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163iescofwb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163iofaibtv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ewtizoci.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163hnvijreb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163tsxjurjf.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163gkfrkslr.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163kfaiifrj.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163jsnkwgdc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163qknojvlg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163kmmkjtdg.html

fclose(f);
来源：http://www.aibaodan.cn/163saprvcvt.html

[S12] C：写文件
来源：http://www.xuanzx.com/163qnaawrpv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163tnmdtuit.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163agovrooj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163gstuegiq.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ikmsxnpw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163vdaggqrs.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163omkwuosh.html

(double) a / b
来源：http://www.xuanzx.com/163rbjawhze.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163iyhgndty.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163bcmgzofa.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163tzrxxqky.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ltktvbwu.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163coelxzra.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163skeqkyjj.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163goemxpoo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163pwnoarqu.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163joggrnlz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ysqlbmyh.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ddjnjcqo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163yrvalrin.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jybwfiwg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ddbkjvnv.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163whhkxlbd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163qgocsotp.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163uuxuwzdj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163vrbgknoz.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163wfpijngo.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xijwkagf.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ticfhxtk.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163jhbvntgs.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ckdfsbxu.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163unfhpfuz.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163qjxoenee.html

static int counter = 0;
来源：http://www.xuanzx.com/163zttxnqoa.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ehbfhece.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163qlbmooid.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163qnreopfh.html

#ifndef X_H
来源：http://www.sxryk.cn/163oovcrzhl.html

#define X_H
来源：http://www.aibaodan.cn/163knvseuuv.html

#endif
来源：http://www.xuanzx.com/163yhgmrexa.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163egvwcxzp.html

#include <iostream>
来源：http://www.sxryk.cn/163okrgksnw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163nqljgxuj.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163icaxatme.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163wrfmrqec.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163mbsjbecw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163pklqguwb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163lfongjqm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xildgncg.html

[S35] C++：map
来源：http://www.aibaodan.cn/163vfykfldg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lijguhzy.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xptwvuol.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fcdeoaut.html

[S37] C++：set
来源：http://www.xuanzx.com/163njiwdybm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163wsgoxvnj.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ybttdkbd.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163bqrhpwom.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163mmuwnfxz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wutoiaid.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ldklmehu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163mjnutbdm.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163yyxtgypm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163omwmeuxx.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163kuvaadwb.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163mwighkei.html


<!-- 参考信息 -->