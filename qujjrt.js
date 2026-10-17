外链999!wailian999！

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163woaauerr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163eqyimxkr.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163isoxvkio.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163cvlutozy.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163tfoicuqh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163sonwnbvh.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163qsjmydgw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163zwhjaspq.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163dotyoler.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163gvyokjza.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163axvfdchc.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163hkgfumwf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ijxswtqu.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163uepbqnmd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163vvupxxok.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ehmvytlb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163gogeztdj.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163lldkdefp.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163eeqbslyl.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163efvnvgfm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ydzgvzcl.html

[Q54] 清空表
来源：http://www.sxryk.cn/163rtdvgdno.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ubyiehna.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ewjmnwqz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163giwooipe.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163mppnzdff.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163sjlinpfk.html

[Q57] 行号
来源：http://www.sxryk.cn/163poqfmgrl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163cktohdvx.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163thjqiyzv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163biyptkus.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163kuaaczec.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163yqyvswyu.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ffikfrre.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163hspypalx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163yinchatk.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163cviluxzn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163tqzsixzc.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vupnhbpe.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ezbhhkip.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163kwpnoqbu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163hqfooxmq.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ueqxuwqz.html

COMMIT;
来源：http://www.sxryk.cn/163ddntrzfv.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163dmptinot.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vaougmum.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163capsdqcn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163izrcwxri.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163pinhlqln.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163szevwgsf.html

[Q68] 保存点
来源：http://www.xuanzx.com/163rxpvyxgu.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163uzavvokt.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163qlckqwlp.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163dzucrjkk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ocpwpedg.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163yyogdaat.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163hyrtgber.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163jqpkdydq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163mlqmupcb.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163kcsmqkld.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163yiezrirp.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163btjqdads.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163hsthnznd.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163qfmxusej.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163jpvhecxt.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163vbkuwyhe.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ijtiuytx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163qxgkgngm.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163jxgnrity.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163xyyzvpau.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163jmhltxrr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rknxqhiz.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163nfqrqupt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163fsenjrzc.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163lribcmpf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wkytzoco.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ngasfkgk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163laemlhed.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163yfowudct.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163zwikknaj.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163wljmoccp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163zrydbuhc.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163sfbvsuwg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163rqywkgmq.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163whfgewgl.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163guzlxkpi.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163catveyap.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163cewpgesr.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163rsfvegit.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163boiqjilp.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163evamwbxe.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163lklkbfgg.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163zmoyldmn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163xkjtnqcv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163oixarncf.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163jkjtdpud.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163dwlcntaw.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163rnjjnmyf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ctusdpwk.html

================================================================================
来源：http://www.sxryk.cn/163nyugwyta.html

R. Bash 专题
来源：http://www.sxryk.cn/163uffcamwq.html

================================================================================
来源：http://www.sxryk.cn/163jcrifemr.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163zqwklahs.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163uxhzbdqf.html

set -euo pipefail
来源：http://www.sxryk.cn/163cwwfazhu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163rjkcjuza.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163duktvokl.html

[R03] 只读变量
来源：http://www.sxryk.cn/163qempukzp.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163bexqkvwz.html

[R04] 位置参数
来源：http://www.sxryk.cn/163xtmownld.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163sxzltuld.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163pdznhdak.html

name="${1:-default}"
来源：http://www.sxryk.cn/163pipjicrm.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163vcbyanmw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163euhvzcfv.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163stpvcxmo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ozqsefqj.html

[R08] 数值比较
来源：http://www.sxryk.cn/163kubrzdnu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163pimvzfdz.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163emoiovym.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163gkdqeiuw.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163vexrahiw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kxuexibk.html

[R11] case 多分支
来源：http://www.sxryk.cn/163zaqcyknk.html

case "$1" in
来源：http://www.aibaodan.cn/163mgmmptpq.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163zoxvknbr.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163qpqvipoq.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163elzileoe.html

esac
来源：http://www.aibaodan.cn/163rzttctga.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163lvkvibch.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163beagokat.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163kgqfzyxk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163cajuydax.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163msuvhqxg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163jrzdexzm.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163xypppczn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163gkhwivxd.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163enavrzil.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ntphxtil.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163fcanlvka.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ybcgqodp.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ifhmdshu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163gnoisyzy.html

[R19] 数组长度
来源：http://www.sxryk.cn/163gojwhmup.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163mpawlwxu.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163rllqjhfj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163rrjgenrr.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163nthhshtx.html

echo "${#s}"
来源：http://www.xuanzx.com/163twovmtev.html

[R22] 截取子串
来源：http://www.sxryk.cn/163zhnocrjo.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163yfozzhvd.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163febphjwr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163knhkdwdk.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163sfibjxrr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ludhxnvn.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ttcakmeo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163olcxgsip.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163nkolozsf.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163cxsmyzgm.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ubncsmkw.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163uoyjajbs.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163eglkxghb.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mtrurekc.html

[R29] 定义函数
来源：http://www.xuanzx.com/163fvrgofjd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163qosvxfmt.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163vrtpyxlm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ccwgewlx.html

[R31] 局部变量
来源：http://www.xuanzx.com/163uzcgncns.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163yrwkgxnn.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163vdtkzmyf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163eyifsxxx.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163jfhahywl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163uteqekxj.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163cqfuwrui.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xyeisowe.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163xzurshxk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163jdgndlik.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163knznkytk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163swgkyhlg.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163lbffobmj.html

files=$(ls -1)
来源：http://www.xuanzx.com/163maqnqbsx.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gxvcdypj.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163qgwfwdag.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ddyeukni.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163gdimfpcv.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hdvyihdq.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163isjwzeqd.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163jcdzkzmq.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ojgosrnj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163pfjnpzwl.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xipqczuq.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163enroojkk.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163oecscevh.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163vxcwotii.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163kfoywzof.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163mzamcazn.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qhvndkzm.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163slacgfmf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163qmivibzx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163jnrrylut.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163iqorvmin.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163bzbazmhb.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163xhzvodvf.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163bqkuhoxu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163fznimxsw.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163hskppkjc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ueqninto.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163zfodecsq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163wkhiqgow.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cbfcfjbn.html

wc -l a.txt
来源：http://www.sxryk.cn/163pdqhtanv.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163nsvqqnlt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163tvmsagbb.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hmqgbflj.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163btguqywn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jbtvnabu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163xxzuaseb.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163zufigwzx.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163sgnldapp.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163yuzyztdf.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163yzbeccgi.html

[R58] 下载文件
来源：http://www.sxryk.cn/163vfokbatm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163uizeboxh.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163deycuvee.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163kdxgfzbp.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163kahftyaz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163byvhmkzv.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qlpgaesa.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163kznkfocb.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163bbhaezgs.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vnmjclgx.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163oaoycxmp.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163paccsmgq.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163uqbxdlay.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jkeiiuub.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163oelqsfnr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163htmykiji.html

[R66] 定时任务
来源：http://www.sxryk.cn/163aaxvhkzh.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163oitbjwab.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dojjnnch.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163whuvahgf.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163pqzpunpy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163kbcjqvam.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163oqfagopv.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163uwguweqd.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163knjtfojm.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163bkrwlebd.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ebafrdjl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163blfmnmgi.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163bfhatitq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163vhlhcbvc.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163zkxupmam.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163gfriauca.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163gbyvvluw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163gybaefsr.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163sggsyvfi.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163tnvweexb.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lctxzjzn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kpodcmdl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163yrvvczes.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163rrtuizob.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163dfjlkbou.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163lbnczhtm.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ciysqfkq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163hjmtvuun.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163qufikxda.html

time ./run.sh
来源：http://www.aibaodan.cn/163aziiawre.html

================================================================================
来源：http://www.aibaodan.cn/163aoudwrhc.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163eavovfht.html

================================================================================
来源：http://www.xuanzx.com/163ecuivaxv.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163nqhivdoo.html

#include <stdio.h>
来源：http://www.xuanzx.com/163zoxxnaad.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163bdgdlehd.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163oybiabog.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163cuclrlpm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163tivyzjcj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ybjkaidm.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vrziqfje.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163gaegceje.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163fuodiwlp.html

strlen(s)
来源：http://www.xuanzx.com/163ulcoyhjx.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163anifzdkr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163kuzvumae.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163plkykrsk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163jrbxxodx.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163tylcqwti.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163gaykamkt.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163vllpxxel.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163dtkmkxdn.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163omenzplv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163dikdjrmh.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163weenxrso.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163nftebrwt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163xzhbectm.html

fclose(f);
来源：http://www.aibaodan.cn/163mpskgiec.html

[S12] C：写文件
来源：http://www.sxryk.cn/163eroijoeh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163lcyifadb.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163etechabo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163wsuggxdc.html

[S14] C：枚举
来源：http://www.sxryk.cn/163izgehbzf.html


<!-- 参考信息 -->