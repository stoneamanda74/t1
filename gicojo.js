外链999!wailian999！

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163skfbykrj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163gsdxgbfk.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163fdbhkhxg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ahpnqscp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163jgipcrrb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163vwgaquge.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163neffigaz.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163xxpdftng.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ipcfqogv.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163hhgcdrmm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163qithfhao.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163wimdignc.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163tmdjcpoh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163lyqvdikh.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163cqfqxpan.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163adxgdufe.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163viqswuqr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163fvrfaeze.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163bpcjosez.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qwpwggco.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163zhybrxyi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nwcupvkr.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163najkqzav.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163vqbneifj.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163fdeyrxwp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163gzunuacm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163pglfjyno.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163igzuklqz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163vtbkqwyr.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163suzpilcu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163pywnlfgg.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163aaqtkqdc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hnrllspt.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dtuhyiph.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hqivctyc.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163fdhuhmbq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gwkhzlgy.html

[Q54] 清空表
来源：http://www.xuanzx.com/163yholiypn.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163akweniad.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163fkiuoatd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163rybvkccm.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163hkqxcfud.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ksppvuli.html

[Q57] 行号
来源：http://www.aibaodan.cn/163misawkfx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163erxegfhn.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163gyirwpsw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163zkjlpoyy.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163bzrtqugf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163nktfrojx.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tecmagbc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ycwibxpq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163zfcnhyat.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163qcnkoqyn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163kyllqajd.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163zjkbgltt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163krtobjon.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163brttvryn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163iapqxcow.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163htstfjmd.html

COMMIT;
来源：http://www.sxryk.cn/163kidqqgbs.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163tqmmwcyv.html

ROLLBACK;
来源：http://www.xuanzx.com/163vibglnhq.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163uuibxiii.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163decebdpp.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163imhlpjty.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163whxndnct.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163jmnuhiyz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163dlzqifre.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163rvfmsqnr.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163lfyqccox.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163zwprtqit.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163fhsqxehe.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163avwbwgve.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163tpmulgyg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xmmarqfh.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163xglehvls.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163onvtdsmb.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163urlgmlpy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163sskvpzip.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163hwcrbdxw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163hmgetbmz.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163iaiputel.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163zpvlqmiw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163godsnzty.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163zahteckl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ihdpzgpl.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ionvuaae.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163bctqgcbi.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163owvdrupq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ngaykibw.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163grasluup.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ieqzzxqr.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163lolwygwl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163eelcvltf.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ohmpkzlb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163rqjspfre.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ubezbncf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163kznjaxom.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163sdzzpwaz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vmaacouc.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163sawpohmi.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ziscbfqf.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163rjhlzcbt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xawxreka.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163iarghwmj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163kppqtalu.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ovxvoivn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163haoreuqn.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163laxsqpxg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163xihaetua.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163lidvkilk.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163yvfcbciv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163zyvnuvrr.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163yoobntlo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ysnvfcvt.html

================================================================================
来源：http://www.sxryk.cn/163yeopeeql.html

R. Bash 专题
来源：http://www.sxryk.cn/163nntvaeag.html

================================================================================
来源：http://www.sxryk.cn/163pnejfrjc.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163iieqxzwk.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ihysjkac.html

set -euo pipefail
来源：http://www.xuanzx.com/163fogqfkiu.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ivviiimx.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163wmzfzxtg.html

[R03] 只读变量
来源：http://www.sxryk.cn/163wlbqdqlr.html

readonly PI=3.14
来源：http://www.xuanzx.com/163krwszsdq.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163teghcfew.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163sqllvjmw.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163jlmvapst.html

name="${1:-default}"
来源：http://www.xuanzx.com/163xkkxtrqu.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163orpyvyhc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163xzhopvgn.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xrydezoy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163rkzmdmhn.html

[R08] 数值比较
来源：http://www.xuanzx.com/163tqlaqxua.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163hbfsqtjl.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163cgcvizjt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163unepuxej.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163abrxmehl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163nvqwqkwc.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ifhpswlb.html

case "$1" in
来源：http://www.xuanzx.com/163cxxtnbnz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163bqmkyple.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163saljpttl.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163dphkdiop.html

esac
来源：http://www.xuanzx.com/163gcfoqndk.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163zigrxgnl.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163iurnjqpk.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163fsxsvpjh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163iwzlsuvs.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163gdomdsce.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163wgoxsvnq.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163oqghltcz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163yllsdsmh.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163grvbfsgr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163rckzfaho.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qpvnhmxm.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163eenzzezc.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163lpfydvkh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163jtzxvfnj.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163qfcbkgpp.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163oriofggx.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ddbotwyr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163dqlwlqgc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163dyfuxtiu.html

echo "${#s}"
来源：http://www.aibaodan.cn/163lsbrlzsf.html

[R22] 截取子串
来源：http://www.xuanzx.com/163lerttlwp.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ncdvdnkc.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ddrbkcfl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163anxykjrz.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163otfxrntk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163nycugfiw.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163dpmqbvoo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ftfbeoqw.html

[R26] 命令替换
来源：http://www.xuanzx.com/163atzbcsxk.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163jtdsphux.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163dkrjtowr.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163fenggygf.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163nprjsskl.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163tymqhcnm.html

[R29] 定义函数
来源：http://www.sxryk.cn/163icvisjoc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163qlhjhpcn.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163usdcrwww.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163uwbghhpb.html

[R31] 局部变量
来源：http://www.xuanzx.com/163lagxhupx.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163qertvzqe.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163yvpfraee.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lvlaaabd.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ugapirkm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163drrpmkoz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163gztxhuot.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163esbmyrnm.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163djdpgugm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163dnvjiceb.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163srwlbtxg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163suenzoul.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ogqdubxn.html

files=$(ls -1)
来源：http://www.xuanzx.com/163vdiodrxo.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gygizcom.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163wogfagaa.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163sxfwbkvg.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ifmwtigz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163vxrwaexd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163johmezwe.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163pjeetpdm.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mwsvfzia.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163oosxtbzu.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163thtadrtw.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163xmnxbika.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163zeojvhfl.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163yjchkzgo.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163xyfextnd.html

[R45] 批量删除
来源：http://www.sxryk.cn/163nipxtmtk.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163gltyrqms.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vufeuikn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163wfgvkzwj.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xfndxurm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163iblhftiz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fkdxqgpb.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163kjtznwxf.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163qoczkntn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163nyombtyc.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163juwzmkij.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163zyenkdgp.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163lhydtzhe.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163cpatpuzm.html

[R52] 统计行数
来源：http://www.sxryk.cn/163uziilzke.html

wc -l a.txt
来源：http://www.xuanzx.com/163viztzpwc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163wtpheroc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vdmyygub.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163eozesrvc.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163yluhgrcy.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163mpvypqpp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hyiynpmq.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163siosyrdh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163egfggrcd.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ynputupj.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ozgzizts.html

[R58] 下载文件
来源：http://www.sxryk.cn/163lvnwyjfw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163arketeew.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mrvsvohr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163rndgxfhq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163qcidagxt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163zjckjhoo.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163qfthbsfp.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163cpnuunxs.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163agrdrhoy.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163brobbeam.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163udiohqgj.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163zpwxqdvo.html

[R64] 结束进程
来源：http://www.sxryk.cn/163mbcylsll.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163peavabtd.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ecjqvdgb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163kxmflego.html

[R66] 定时任务
来源：http://www.xuanzx.com/163npdtvbyb.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ildlrsru.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163cyivsafo.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163nvvdwepg.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163pwcvgptc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163qfmoapsx.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ctjxzqda.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nbejbgva.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163wozaomje.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163uzuhvjjb.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163epoxwfgr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163blfrtlsf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163mmryftiu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163odmvagfq.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ktlckoxt.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163qbkpcrqx.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163tmnurndo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hyxcntii.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163kbegueox.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163yojfxila.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163zqigpaux.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163holnqrww.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163othswsku.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163avvbbdbd.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163juagrmxe.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163rpibyvld.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163xuqjjkwo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ytqwhrvn.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163lfnvzovx.html

time ./run.sh
来源：http://www.sxryk.cn/163uyezgfzk.html

================================================================================
来源：http://www.aibaodan.cn/163ewghexky.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163kwvrggdb.html

================================================================================
来源：http://www.sxryk.cn/163uqpxvzjz.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163salmydps.html

#include <stdio.h>
来源：http://www.sxryk.cn/163apfoipzf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dqwmcxge.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163lxqwfwox.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163zxvimsbx.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163oxxfvlxh.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163mtigrgxz.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163jhgazpqn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163zriltjuy.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ocilctln.html

strlen(s)
来源：http://www.sxryk.cn/163ejokiwff.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163lvpyqnjz.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ipiggmjq.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jhgudtyc.html


<!-- 参考信息 -->