外链999!wailian999！

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163tipwnhxl.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163yashwpcj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163wslqwaqe.html

[Q57] 行号
来源：http://www.aibaodan.cn/163efckjefu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163cpqiccja.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163qlsijaiu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ayhuwbzy.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163xebxwimb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ldfotgdu.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163pzilgqzi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163pphwjubk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163kizyecmo.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163kpceiflp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163igiljmuq.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163cfszkjyy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oouthwvw.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ljqkoenb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163nwhtuthr.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163zndhltcv.html

COMMIT;
来源：http://www.sxryk.cn/163azsskhxe.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163zimtvgps.html

ROLLBACK;
来源：http://www.xuanzx.com/163tesktsmu.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163zlehsuxz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163rmlcbwgu.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ncvcgmrr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163qsemwaxy.html

[Q68] 保存点
来源：http://www.sxryk.cn/163gjafvhlh.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ckamdtnn.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163achqsrzg.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163fbddswiu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163zfttpegd.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163mkmyoadk.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163zepaiovl.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163nyqxpyhf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163niwjslvt.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ygnxdlvl.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163lclgfqsn.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163jkeggrjx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zedwmgtj.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ydyfnmjt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163xkhqhftp.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jtskwqyu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163qyziutan.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163icbokwgc.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163wfcsbxzu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163eadhxhdm.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163wilbyjzn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163lhzrisac.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163qvfoddjv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163urhnzapn.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163meqisizv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163znzhdnpd.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163huvviisg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163yyppigst.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163xleszqlu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163rytlovsd.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163fbaeyxbp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163hmvykpxh.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163zlgoparr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163cglxwfnz.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ajuwzvcv.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163wiwmtopi.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vchqvegb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163dygtslws.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163cycyokej.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163fxabrsed.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163sfblnurj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163euegfzlq.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163acuiosch.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163lmcvpcpp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163rsvfdscu.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163fhhfabeq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163pdvyuywe.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163bzwupwgp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163yshyzyby.html

================================================================================
来源：http://www.xuanzx.com/163cljtpyhb.html

R. Bash 专题
来源：http://www.sxryk.cn/163xrvvxrrc.html

================================================================================
来源：http://www.sxryk.cn/163somdnuij.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163hbgzpbiw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ugkpsncs.html

set -euo pipefail
来源：http://www.aibaodan.cn/163bdqvdpvr.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163nndjftow.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vqhgcaiz.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ftnkyhqm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163lzymwpfr.html

[R04] 位置参数
来源：http://www.xuanzx.com/163dmrvgmlj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163sbodaxii.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163okyxjjdi.html

name="${1:-default}"
来源：http://www.sxryk.cn/163umlclelx.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163kouxiezg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163pmwubout.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163flqtgwsm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163elxwolgh.html

[R08] 数值比较
来源：http://www.xuanzx.com/163kmshzale.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163lmgxtrhm.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163xrbqwabb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163tsxwtdwg.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163nmqtluul.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163oltoamwl.html

[R11] case 多分支
来源：http://www.xuanzx.com/163cwvlcmeb.html

case "$1" in
来源：http://www.sxryk.cn/163dlvsdreq.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ntmtyrge.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wrtjuzyk.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163durvfkiy.html

esac
来源：http://www.aibaodan.cn/163ggbsdafq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163tqquzrjm.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163zywwbdfm.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163prupxfhn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163uxtbyqfk.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163wpeseyqe.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163bkmbtabc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ilfusgop.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163arwsbucp.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163bokjbyew.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163rpzussbz.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163jwsbokrp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163uythsvpi.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163appkzmxg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ffmcltza.html

[R19] 数组长度
来源：http://www.xuanzx.com/163avolcyzf.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163wwxlfoza.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163vmuuzrjj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163qaduqvab.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163nhsavrxx.html

echo "${#s}"
来源：http://www.sxryk.cn/163nvaxfesr.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ieddsqtu.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163jzyuvyzv.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163dbtyaptq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163wkaksihv.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163lvymyuni.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jmotgelv.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163hsdsicja.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163yvvglzkl.html

[R26] 命令替换
来源：http://www.xuanzx.com/163yxuqxbqv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wihpbxou.html

[R27] 算术展开
来源：http://www.sxryk.cn/163vangiqxj.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163jraezkoo.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163rqdgrbgd.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ujthemrp.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wjohjzsh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163eqbyjaco.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163huigbdhp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163tytvnwms.html

[R31] 局部变量
来源：http://www.sxryk.cn/163mvcntjlj.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ykdzwhsp.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163srekukkw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163pllutfdq.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163denrilwc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163pdpkeyqg.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163kuyjkoqc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mpzmzitl.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163efulirtm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163rkhmwavb.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163hyccyyqt.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163pgwxixut.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163tgquwmev.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wkxjtnsm.html

[R38] 管道串联
来源：http://www.sxryk.cn/163nwislgiu.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163lkvkhjlq.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163dgoqrngt.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163xyqfnmas.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163qmtkebsv.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163mclyxcjn.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163nmhdsujx.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163iplnxbqj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163kfcrefdp.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163iqqrfupj.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163uqthpsjg.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163bguaqqmr.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163syklsxfb.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163jqevwarc.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xuqhxadb.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mcivmkrd.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fhsjceod.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163qowrdyiy.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163qglvxvlo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ipapbcjx.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163axzkhnrs.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163umrohdis.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163nnthlhci.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ipseqomy.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163gmcsnviz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163wlwazltd.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163gaginvcy.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zbkomdqr.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qowaaqfn.html

wc -l a.txt
来源：http://www.sxryk.cn/163rnpqhykz.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163bvufzibb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163yyyngjjb.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ogowvgbn.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163rojbnovb.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lrcojdgm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hpmeywwd.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rwjsmcsx.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163yqlriqmv.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ilvvywyl.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163uykgltrq.html

[R58] 下载文件
来源：http://www.xuanzx.com/163zxiuatdg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ymqwnzbm.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163adseeutv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163djrsodtm.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163vedvdrss.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163oagmapkk.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163psasvcqw.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163szqgczoa.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163txkkzaud.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163tqcrwtfb.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163omeobmxt.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163zswaswnw.html

[R64] 结束进程
来源：http://www.sxryk.cn/163lsnxktlc.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tslkgmzq.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163nmwyrsnb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163mjcwifzm.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ukznzvir.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ylknswpl.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163fttauzgq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163aigrcqbl.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dcunefkf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163tekvhsnl.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163yikujyds.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163iohzuszk.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xzfsincr.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163htofpxiq.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163rzfpgfme.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163cdnivgxx.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xmdygede.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163nfkmyydm.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163kiksjidf.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163uqutcovh.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ouoblzeu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163vgtcewin.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163eaefhnaa.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wsidbise.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163zshiarhr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qhdlfgct.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163nkzulzrf.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163tpvlzezg.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163bpwjoomi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163itlntfdc.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163nvdiznsj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163itdhevjc.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163uxhpyxoj.html

time ./run.sh
来源：http://www.xuanzx.com/163lydslckr.html

================================================================================
来源：http://www.xuanzx.com/163dehlmujn.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163nouuvzsh.html

================================================================================
来源：http://www.xuanzx.com/163grcteiuf.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163zotjalak.html

#include <stdio.h>
来源：http://www.sxryk.cn/163tcqautum.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163gysiwqid.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163swnkrjbo.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163lqclvrij.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163dmexwyiy.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163pkhaekan.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163qjqtrmfx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163xyzgntib.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163pteifgfn.html

strlen(s)
来源：http://www.sxryk.cn/163pghgsajk.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163wxpibyai.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163uyoudbzg.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163qsnxrxmz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163fkduvkey.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163garhxzqy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163kvikkykm.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163iiujoixl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163fbhfsrfk.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163hdwteqeb.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163lnbynkqw.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ucngywsq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163cszrpovr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163xreefber.html

fclose(f);
来源：http://www.sxryk.cn/163cxqhlapm.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163fhaulook.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163makktxri.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163otugxwzu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163mstzuooy.html

[S14] C：枚举
来源：http://www.xuanzx.com/163zbxgdnjc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163qyqqocis.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163rtnhixdx.html

(double) a / b
来源：http://www.aibaodan.cn/163ctfwnzon.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xusjseht.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163evifjgzv.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163fjqrruqt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163mxubcykt.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163qstgskee.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163obdxyakn.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vxzjimlx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nyxeabry.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163fvdkqioa.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jsgznngf.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ftdqrcsl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163zikcihpo.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nvejcjso.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163fxjscefi.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kbqppccr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163lwlugnnd.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163bomhpkrd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163nqqqgawf.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163whnzzdjk.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163osjjsqyk.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163tfrxmdur.html


<!-- 参考信息 -->