外链999!wailian999！

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163yrivoxvm.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163dvybkzmr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rjknvgdi.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163cmnlestn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163lpmxaiyl.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163jqualsht.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dznwutdy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xgbzbrzq.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ohpxekfl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163iwrxzwbo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163cpfcjqbh.html

SELECT * FROM (
来源：http://www.sxryk.cn/163zxqkdtvz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163hxncesmw.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163rwrslzyy.html

[Q35] 内连接
来源：http://www.xuanzx.com/163uwcwrluf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163meggpfsn.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163nzwlhanx.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nscibtbs.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zeruvqqj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163mzsgkzgw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163jivocmki.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ibmqrvka.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163kuqsrttf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163qnqqqdon.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163emliphgg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163mzynvkii.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163cignmdqw.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163pxlckswe.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163hkgerluc.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163rpbottpc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ibprdnha.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163snxdgqqp.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163wmbqmxoz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163mjzfeqpu.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163bgfkyhrg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163yssnedfp.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163eakqhdad.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163bkxpzylh.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163bajxneig.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163sfjjcqoi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163uumvwhme.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hhnjzovd.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163cogkwtgx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163pjhplvqw.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163vcphgdys.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163dxgwxcly.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163vqvhinpg.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163cfniglmj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163raidpfyf.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163wmepycxb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vxtpnwzd.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163kibpeyml.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163gpeljmkv.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163hfgzifxc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163fyucifqs.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163alkkvgcq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163yjgrvvvy.html

[Q54] 清空表
来源：http://www.xuanzx.com/163dwmfrwhm.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163iovcsxvm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163hwlkvwlp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163yvovtmku.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163kiisspde.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ilzhgjxd.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fbzkvhlc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163sxvjibqw.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ajcdifzm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163zjziagfs.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lczeprrg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163lsxqkyql.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163nhchgrer.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163tnljtqit.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163iwhoxghg.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163vlrvxast.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163xiamnmwt.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ptneujhd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xykzympc.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xihahmoh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mhpxsikq.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163qxhfmmqg.html

COMMIT;
来源：http://www.xuanzx.com/163dkrrzeze.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163onulmllx.html

ROLLBACK;
来源：http://www.aibaodan.cn/163nzofaolv.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ixcaxguw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163criyfqpc.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163rojlkald.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ostzkokd.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163stcjkoso.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163rtrmbchn.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ifgnjfav.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163cbomcsrh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163hzjrgfwv.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163lxdjwhxw.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qtlbsfga.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163cfkpxqqu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ajjcjfsq.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163dernsrry.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163kxyyplzk.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163jwgekxdl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163cotlblbf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163lnhaylne.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163cghyustb.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163tifwvxvz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163wkfumpjk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ujbabjef.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163tffmwinp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163asaknkjf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163zqjdwzpm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ddvwvbee.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ulzfndcg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hygxwzlb.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163sjatirzz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lozqqvtw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163jhebrweg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163sphbclzc.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163fdlqphgc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vdqqzyku.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163xxyrosxq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163zssanmdl.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ryionhsd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163jrixpogl.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163bkydcapy.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163vwicanra.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163zgilztgl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163jyzifpac.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ylruhtow.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163qqmtnxuh.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163fuywvrqf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163qguatcex.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163joklniej.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163rydwwtpj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163rdpidusv.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163fojgsfdh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163pzbshuub.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wuidkaxa.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163tzxtydwo.html

================================================================================
来源：http://www.sxryk.cn/163ozwrgzgq.html

R. Bash 专题
来源：http://www.sxryk.cn/163yzvpmgnr.html

================================================================================
来源：http://www.sxryk.cn/163hxtgwwwf.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163uqdesucc.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163haatgobr.html

set -euo pipefail
来源：http://www.sxryk.cn/163pstjwhlb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163cvgatgfr.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ycakvimx.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163oaydzzrc.html

readonly PI=3.14
来源：http://www.xuanzx.com/163mxpflpio.html

[R04] 位置参数
来源：http://www.sxryk.cn/163fgvmeogl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ocouxjzr.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163mlkwkxwz.html

name="${1:-default}"
来源：http://www.xuanzx.com/163facwrsqj.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163bbglchrh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vvvbqyaw.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163cnqumjek.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163aaxdinnl.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ckmtbkxe.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163heuumwoj.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ccldzbec.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163njwbnrpd.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163cebxysok.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163wmtduozw.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163zoguxbpu.html

case "$1" in
来源：http://www.sxryk.cn/163tlghcstv.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163oocbgwvt.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163glznafds.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163bjlviezp.html

esac
来源：http://www.aibaodan.cn/163naigmelj.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163xbnxkxpk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163amfsgrwo.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163mkbzrsoe.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163pwzicwea.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163dvvueukp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163tzfqghcx.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163jrndkngg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163uxdextrb.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163msoxlzzb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163evpjcdoe.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ilhjwuok.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163xukwmsyj.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163topedkca.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163hvqhbjen.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163sluqvunj.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163urxsikwa.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163kzgylnos.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163yzgtzglf.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163pdzsyqnx.html

echo "${#s}"
来源：http://www.aibaodan.cn/163cyufdfiu.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163idbreaoy.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163pggifokg.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163nclmvgzk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163oiejbrze.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163riuilaiq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163sgeeytxq.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163spoingak.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163sqacsrjq.html

[R26] 命令替换
来源：http://www.xuanzx.com/163bvbcwhkj.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ctgnclwt.html

[R27] 算术展开
来源：http://www.xuanzx.com/163zpbkrwhb.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163gwhpndlu.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ijkqhece.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163hkceswfv.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ixoboudv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163fvmcgrfy.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163iyqiseji.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ldztnzyx.html

[R31] 局部变量
来源：http://www.sxryk.cn/163pnrylfth.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163wbruapjj.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163tjchpbow.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163gowrscsn.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163elnaijgh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163wfodmskm.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163nnlwseix.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zsnaalxp.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qkznvhex.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nxclswnu.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163dzdasnrb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163cozkolnl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163rmafvoxu.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163gybcmwlp.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163jfkylefc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ayrmamrz.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163pbgjvxsm.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ynxixkmd.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163nakpflie.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163hhuxeika.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163fshjtxmy.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163yopqjion.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163pedknaxb.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vrlassmg.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ktolbxzg.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163szdkvgrh.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163xjiiveoc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163rbjnebvk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163wkncjevg.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163acpsxrpf.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163fnjagurm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163dftayira.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163jlslnfdr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163fpvybpcb.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ndrkazpc.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163bzqybvtg.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163axlxwpqj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163pppyxypv.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163hutjmuro.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vqhjjdfv.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ebazporg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163zxvbgnqt.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ljretmpj.html

wc -l a.txt
来源：http://www.sxryk.cn/163shulzdjq.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163xvgxxpqb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jzrdroae.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163fxmocbgz.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163mftqjqjx.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lsfurabh.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163qupvbrld.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163xgfbntoy.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163idmmwvsf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163gabecqao.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163samotqqw.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pbpkhwgy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163gbllfmja.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163gosqkmza.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163mojlzkyy.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163vznqvxeh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ygwvmtca.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ubmlsoyp.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163pgcqswac.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163tkfwuyoq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163beqlflcp.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163cmypashw.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163wpeptuum.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163eozhxzxl.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tlesgbgj.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163qmdkohtg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163effcryhd.html

[R66] 定时任务
来源：http://www.xuanzx.com/163zisvrblo.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ajhgtxzr.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163dtrdclsp.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163mlyeeety.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163oyzdtjpo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163hvxejsbv.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zfpxclfu.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163pgfadjeg.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163lcdlgqaa.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fvhrvrpj.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ozmjdnzx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163jpoedubh.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163dtnwqiry.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163gfxqdjcd.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163cxslkkbu.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163stchcmsm.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163jzgnsmlt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163cbautzjb.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163hcjqwgkv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163unvjcbhy.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163xbnhiuxl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dclcfsfg.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163bxxdlmre.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ejlomctq.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xbvknydb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163edgvouww.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163mcyyxpjh.html


<!-- 参考信息 -->