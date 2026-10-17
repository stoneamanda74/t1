外链999!wailian999！

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163qgoptikd.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163kqsnotch.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163funavfpd.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163oizaqwxs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163yvyplfcj.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163bnfcxolc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163pafrzhih.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163splgtrxg.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163qpsssqbz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163nsomzyzu.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163aufiguqz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163mronxipg.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163bxcntvqd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163bmskmcnd.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163gzgjfxtn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lhhzhigl.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163jfrbrlxw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163jebypuyb.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163iaplabjy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163twwunirv.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ebgcumxg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163irxjbsuv.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163etqdllul.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163vucziehp.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vezfvxhg.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163rerelvov.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163jeroneen.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lxeeegdw.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163fogujkae.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ucatbpfn.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163newwqzte.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163mwqvxkbo.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163yupxmtiq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ciezupmm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163xgovetsg.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163frntabnv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163igeulimf.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163yanvtcht.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163jznryzeb.html

================================================================================
来源：http://www.aibaodan.cn/163zullqznh.html

R. Bash 专题
来源：http://www.aibaodan.cn/163dmzalezt.html

================================================================================
来源：http://www.sxryk.cn/163adaosrjm.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163jwyvbxtv.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163doivfdgs.html

set -euo pipefail
来源：http://www.aibaodan.cn/163kxiiwvwo.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163fdovexce.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163wjporshv.html

[R03] 只读变量
来源：http://www.sxryk.cn/163jgdlzcco.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ngogllcz.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163yaqetplx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163rxsuyepz.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163bzbdajom.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ztasvugb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163tzohoqzw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163syevgvop.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qglzrmkx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163vdrxslcl.html

[R08] 数值比较
来源：http://www.sxryk.cn/163etzzsqlg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163qvrstikq.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163gouwagxm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163czmdpbcb.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163rzywuluk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163wdshkval.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163krllyjxv.html

case "$1" in
来源：http://www.aibaodan.cn/163eimgkccs.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163nwaccvbv.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163dijsotve.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163vqbmfdoz.html

esac
来源：http://www.sxryk.cn/163tmmrjpwt.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163rxwxlvdj.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163bkjirmsf.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163egxlmzug.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163htalifrl.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ielbmaac.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163fhcytpun.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ykuhfzpk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163hrotdneh.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163xglapnbo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163wabpwazm.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163vvrdbjes.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163czitbxia.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163pvisdqdj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ssrnodec.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163qnloueft.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163edcjcoxx.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163kncmradl.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ewmazttq.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163blntvnty.html

echo "${#s}"
来源：http://www.aibaodan.cn/163wjgaohhv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163twlhkrdv.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163gufcgvcx.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163wdbnuuyc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ssejvzor.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163rowuvgep.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ekcsmmov.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163lpmdmmpz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163tqxyceju.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163xvdrmnrb.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163dcnlsfyb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163xwilsjoc.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163jelildyb.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163vgrmzykh.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163leiuhjbu.html

[R29] 定义函数
来源：http://www.xuanzx.com/163qgcsbtsa.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163cnteyqhx.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163iyofqplq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163qlujqtfp.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163tpzweqvc.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163tkjobndv.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163fqmgduqi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163jztmilfc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tsyanmdd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163dgriensc.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ensdrljp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163bgwnqwob.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163fzvqqeui.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163acjendrw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163zcesozbj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163askpkypv.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163lxyzaslm.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163zvdpqsnj.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wvurndqf.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163aczlvntt.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163evsxrspq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163spdxvzrf.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163gjeppwsy.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163aeabfzzi.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163wmzjkktf.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163wwrcjmab.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163syxwsdrk.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163dldbjabo.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163siufleft.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163puclsxuo.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ptfrazqj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fwzeqisd.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163bldmbrcm.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163rovxajtq.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163lfkwchbb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163bswezlxm.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163wzhdrtjn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163bdpvhssr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163kgrchmpo.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163haamaypu.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ukexmijn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163fdzlznjs.html

[R50] awk 求和
来源：http://www.xuanzx.com/163xijtxuwt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163avmnxjqn.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163mxkifpcu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163gkwpcojc.html

[R52] 统计行数
来源：http://www.sxryk.cn/163vrgzuhyq.html

wc -l a.txt
来源：http://www.xuanzx.com/163ninofkgo.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163aujxlsxd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163pfkwhlvo.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163vnesmehb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163hqschvar.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163uwjqmxem.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163pakzoxlp.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163inivsfod.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163wgvotorg.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163qmtpqjux.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163fimtzkbi.html

[R58] 下载文件
来源：http://www.xuanzx.com/163piuvbzhn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163xtkrpdbi.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163myyksspj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163lsnhrtui.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163eodjdopq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jixazpdm.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163mfwceqrg.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163xjarwpdp.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ffpgxwhw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163slnjzwjv.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163rcoejmgk.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163bwsufjik.html

[R64] 结束进程
来源：http://www.sxryk.cn/163iapcfaqa.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163qyefikay.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bftajlpa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163dycogclv.html

[R66] 定时任务
来源：http://www.sxryk.cn/163crlhnxpe.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163uksqzvhr.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163wezyojgs.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163npcbzxgn.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163nvzndlvd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163wuzvdmtf.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ciivuoih.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ajgbyybq.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163nwthbskw.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163dugmhjhq.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163fafxndlw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163qmnrrvai.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163beoobnfb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163apuzehzy.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163vvvfzgfr.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163lwjdlpoa.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163kgisxyjj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163etgirykw.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163rfhubtyc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163eljyvwpy.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163npdbclzn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kjrjtodx.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163gwvikdsv.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163wzyjwusu.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163dzytxyvu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163rdauxlvg.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163veoquxkk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163elluwiqz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163poagrjdx.html

time ./run.sh
来源：http://www.aibaodan.cn/163jpeyqqwf.html

================================================================================
来源：http://www.xuanzx.com/163zablxwil.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163yusqgoco.html

================================================================================
来源：http://www.xuanzx.com/163pktbvcfm.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163xskkifnr.html

#include <stdio.h>
来源：http://www.sxryk.cn/163vojtoyty.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163kjuytokl.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163dnmmabqu.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163qrysaauf.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163birnwthe.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163eixqjprj.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163cqtdmecm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163cmelevjq.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tsocltmv.html

strlen(s)
来源：http://www.sxryk.cn/163limjuvjt.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163dhysfwwy.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163rtkwpcaa.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163xvbzwlgo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163oykyfbti.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kohzfvwj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163hlgykeyv.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163kvgddusv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163dibqszbw.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ilvvksog.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163fxheklne.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ojuuiwgv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163qzvyufhz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qxbfxihp.html

fclose(f);
来源：http://www.sxryk.cn/163amiuxxqn.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163hgkwpass.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163uqvxmhsm.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163omgkkxcq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ytugwsmp.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vocmjmgp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163kclvpyyn.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163zefdcfoj.html

(double) a / b
来源：http://www.sxryk.cn/163qhzricrs.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163wajehsnz.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163nfbwhvsk.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163voahevxt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163cnkblgaj.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163xhgtjztx.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163mavxlwno.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ckwhohae.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hfdvfhsv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163crzyjsna.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bxpnkwlk.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163xpulqhba.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ynyjmldm.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163qiqrmuao.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163bdixnjqs.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ypypzpbk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163vfirzooy.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ghtsljzv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163buidodum.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ibfgvrod.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163tyqzikgq.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163qkdwpunq.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163dynyrwnj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163klkdysah.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ywsugkaw.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163iqryvyxi.html

static int counter = 0;
来源：http://www.aibaodan.cn/163buwydbqk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163hfkvbdxm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163rsibeznh.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ghtmwclp.html

#ifndef X_H
来源：http://www.aibaodan.cn/163smlfwyoz.html

#define X_H
来源：http://www.sxryk.cn/163oyqpidht.html

#endif
来源：http://www.sxryk.cn/163ekqcivjx.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163zndstojq.html

#include <iostream>
来源：http://www.sxryk.cn/163bxbtyurs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163frqybnyi.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163rtzrvwmf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163bjjrgmrl.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ycyiywgv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163aakdspff.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163xewqlmgi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ocammqvh.html

[S35] C++：map
来源：http://www.xuanzx.com/163czsgidiu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jywhrmtc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163kkatwmgb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tujevxht.html

[S37] C++：set
来源：http://www.aibaodan.cn/163qqkmaupp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ferlziiz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gpmrgxrw.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ldwhqtsb.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163xgxzblgw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163mqgewduh.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163askxvlth.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ttgisnsg.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163imizzfbo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vpjfagac.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163jicrgbks.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ahstmqsp.html


<!-- 参考信息 -->