外链999!wailian999！

[Q44] IN 子查询
来源：http://www.sxryk.cn/163hhdqklov.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163jdxalmee.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163htccfnzh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163frdgkbpz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163oicogipg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163yaogwsgd.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163jcsatxmn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163txfoyzjr.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163bpyzyteg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tmssczzy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163hugjssip.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ngmkgksa.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163yjxjgfjc.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163voalppal.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163qfsifsnk.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163tpbhpgtp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163saguggwd.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163msmzncsw.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163venygsvd.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163eavksgvb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vulucqsk.html

[Q54] 清空表
来源：http://www.xuanzx.com/163iixmspxg.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163okjheqls.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163durbobam.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163kqxmaegc.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163dwdsozwc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163gfrpxntm.html

[Q57] 行号
来源：http://www.xuanzx.com/163qonafxfy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163fpsxfwdg.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ceibwefm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163xypjxlee.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163kisdqzmr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ucorivkz.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ctygnesu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163odhemjgk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163dnfoaakj.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163arqcurxi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163uioucasg.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163mpztehat.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fclnclus.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163nknrefxp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163umtzgydh.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163dcurpwyz.html

COMMIT;
来源：http://www.xuanzx.com/163dqvfwmrs.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163rlygvdty.html

ROLLBACK;
来源：http://www.xuanzx.com/163pilprwcz.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163mybuhqbn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163hrpkzdeq.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163zehndrkg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163qcwwmhsm.html

[Q68] 保存点
来源：http://www.xuanzx.com/163xzvbjzgh.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gnrcwnlm.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163vufqivfo.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163fzsxpcue.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163jyzcmdtl.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ithidchn.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163vvqzohnn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163lihlyaux.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163achgwmku.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163tkdagziq.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vmoqwbdq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163fduveaqk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163owejofkp.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163jwatuswj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163itzjbrjj.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163qumnwshg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163tkmrsbvb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163iegmrpbr.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163asorgmth.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163jcswiyms.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ljwoyujj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163inmvvdcy.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163rldnjyoc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qfrpujpg.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163omuemgde.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163cwcocbvg.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163svrjdhoe.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163dgyqytkb.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163odknnimy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163nqpyynhn.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163weapcpuo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xmhnibmf.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163xlmtiago.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163zbmwastz.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163zjxkubxk.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163bgdxcguk.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163rlyhqagk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163fqqsulre.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163tqoknxri.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163cqlmpmvb.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163rkogndpz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163gnibxsri.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163yhpezpit.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163nnuxcsnp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163zeubenhw.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163pjxxaryn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163okhfpsuw.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163tyqhzobs.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163subgnzbv.html

================================================================================
来源：http://www.sxryk.cn/163zzgpekef.html

R. Bash 专题
来源：http://www.xuanzx.com/163cnfwxzyn.html

================================================================================
来源：http://www.sxryk.cn/163dlfeauxy.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163nuaxodnp.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163vnklvnpu.html

set -euo pipefail
来源：http://www.sxryk.cn/163fknrepnm.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xcjfdqii.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163enaiuqsi.html

[R03] 只读变量
来源：http://www.xuanzx.com/163moxpzbic.html

readonly PI=3.14
来源：http://www.sxryk.cn/163aaqhlmwq.html

[R04] 位置参数
来源：http://www.sxryk.cn/163knssyufm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163mauhjhyk.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163tpxvjkca.html

name="${1:-default}"
来源：http://www.xuanzx.com/163fkefqrrj.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ondvwqmc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vebyhdtm.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163laibdjpe.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163xyqlzsqu.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ojhhuycb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163dmndffip.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163nfozamnq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163xhsmzodc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163tmikydrw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hxiyarbf.html

[R11] case 多分支
来源：http://www.sxryk.cn/163wygsmnyy.html

case "$1" in
来源：http://www.aibaodan.cn/163dbqfzbda.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163escbbvwc.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163heysmrqx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163wjuqfilb.html

esac
来源：http://www.sxryk.cn/163reocrgcu.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ybwltyin.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163nvmgltsi.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163aupyceps.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163leykxtur.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163oieyqwwy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163umpqfybj.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163rcvxisrj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xpvxjnxs.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163rdngohmo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163gaatwtpr.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ottsdpqk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163srahakbx.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163zawqmnbr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ldumahyu.html

[R19] 数组长度
来源：http://www.sxryk.cn/163aznbhwho.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163bykuaimn.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163hghyrkhm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163crrazhaa.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163avjjcbko.html

echo "${#s}"
来源：http://www.aibaodan.cn/163rkqwcxgd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163xgezaiol.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163trkbnqcn.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163peuogppa.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ibulqriz.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ycdtpmdb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163zwrldrtl.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163bhabcikp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163hpwmisfp.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163yrvbtepn.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163tlcnvivw.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163pbatescv.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163lcromlsw.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ummoufoq.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163osorjdwr.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163jaaihuhk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163tcygsoal.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163qaemoqmm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163mrnajtmg.html

[R31] 局部变量
来源：http://www.sxryk.cn/163rabcavqx.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163nysadnpe.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163wjimbewn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163efvmsecj.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163yfquuzym.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163rubnrrie.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jlndkche.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tdecqwku.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163wnemrako.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163rfovzpgt.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163qbltoeau.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ujjzkoqo.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163mhjxyrgg.html

files=$(ls -1)
来源：http://www.xuanzx.com/163eupwweck.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ipenmogj.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163wjrjbypw.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163faihmfqn.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163cleiwdpw.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163xbymvcef.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163gukjhaov.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163krwgcmmj.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jbeqkyns.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163vgxydhjw.html

wc -l < a.txt
来源：http://www.xuanzx.com/163agtdvojw.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163hqxhfcjh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ebxjxzoy.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163pbyhruvv.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163fbvdvaeg.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qkouvvkc.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163umgjwksz.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fmvkdvgl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163piafkpap.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163dxqxpcjs.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163hrfxkzic.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163rvlmwjnq.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163amhbtxto.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163cxqnaclk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163clnziuvd.html

[R50] awk 求和
来源：http://www.xuanzx.com/163glvdbcuh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163pdbrkdkv.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163rrrdsycq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ljhdlmrg.html

[R52] 统计行数
来源：http://www.sxryk.cn/163dngzvdzy.html

wc -l a.txt
来源：http://www.xuanzx.com/163apxwherm.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163qkauwkct.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163lkjhwbia.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163inqhdqpw.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163euacsduq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163uotebusl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163xvbbtizx.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163nswsuqio.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163zutdfsey.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163cbtttygj.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163kbtfaiyg.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qocjrleo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163klrvjygl.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163wvxlazlf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163tkejafen.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ekhmwfkc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163qwftwpnq.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163rjwibamz.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163oqzaeatq.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163abbftzlf.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163mvrdnlze.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163sierxelz.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rdhfuuiz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163bnibtdtc.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163tkmizsjj.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163swuqfaep.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163kqnigdwp.html

[R66] 定时任务
来源：http://www.xuanzx.com/163kueckevz.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ercmankr.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163bjonanic.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ipcbkkzr.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163apvhvrms.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163tdhpphks.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163nvtyvefj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163wflmxvta.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163mhwjridj.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163evslkogq.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163bgckyhmi.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163lqmqordd.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bppjvvbr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163kscxttvz.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163kypnhtbw.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163blhqqdwe.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ofhinfsb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163knrvxvwq.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163dahlsurk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163yjcyfqlq.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163qniyanrl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xgsfjyju.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163urcdjcov.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ndztjwzm.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gznglkdj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163xhqyeaxb.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163oqdcogje.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163rpsktmws.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163xmetgvip.html

time ./run.sh
来源：http://www.sxryk.cn/163momvlpap.html

================================================================================
来源：http://www.sxryk.cn/163dukigaji.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kuebfrhr.html

================================================================================
来源：http://www.xuanzx.com/163yqxplalv.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163bfybkkzt.html

#include <stdio.h>
来源：http://www.sxryk.cn/163gkgcqeux.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qlwihgfg.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163eyibpbpo.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ljhtmxxh.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163rwqywlrm.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163gffpjuio.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163icjuhfzd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wjtyqlyq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zbiluwne.html

strlen(s)
来源：http://www.sxryk.cn/163jkrqcsss.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163lppzezrd.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163prwfgsjh.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ulhgzhhu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ynbrfkng.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ucllvgqk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163shprgrku.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163uzktxsic.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163rhovzuqm.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163udziqdkn.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fuatqhta.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163vluhjkgz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163snwerxit.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163lpdldoiq.html

fclose(f);
来源：http://www.aibaodan.cn/163wjqxvmwg.html

[S12] C：写文件
来源：http://www.sxryk.cn/163lyhdkcea.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163mywsomtj.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163fwtiiygl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163phwkdebm.html

[S14] C：枚举
来源：http://www.xuanzx.com/163emeqjrpr.html


<!-- 参考信息 -->