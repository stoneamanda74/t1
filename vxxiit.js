外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163shqfqfcu.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163cqqtpufr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163hmyqmmqr.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163adpfqyhb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163izbrkihs.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163lztezput.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163psjfbceq.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163gdwckeda.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163tjnxzqvu.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163estbbttx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ctgnzdme.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163sffkjbxt.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163bmhetloq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163aayabvei.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hfhujxrc.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ollglqsw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wtdlfald.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ecisoepk.html

[Q35] 内连接
来源：http://www.sxryk.cn/163khrvrfjt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hjkrsktb.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163nonwlalz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163leasqeel.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163iokvcxna.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ojypiscy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ypnqwktp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163lrccudnx.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163nqjzifpl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163twngesqb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163hpwpgeof.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ojrhcygp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163yooicuqj.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163azdiazku.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163zwaqkktn.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wcipwekw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163dalyubex.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163bpdvwvql.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163goijbhco.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163utcbckbe.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163flopynyg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163qiuqopqf.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163awdpszhs.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163bbatfxei.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163juqyuskv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jdwtgybd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163cvbqlvvz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qlefvojw.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163mymqapyt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163saongkid.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163xwtrcxqg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163vgsbpobv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163jmacdvpk.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163unumpnvu.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163lxpnsfaz.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163faxuvphl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163imivutoy.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163qasocnqw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163birwvlls.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rplqvcys.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163kuczxgml.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163kxqzmsdu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163roatwtlk.html

[Q54] 清空表
来源：http://www.sxryk.cn/163hsbdmwfv.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163wluvcvzo.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ewzxpkhd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163nqrcabux.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163jsnuhmrj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163mogfmqth.html

[Q57] 行号
来源：http://www.xuanzx.com/163vdohsmdb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163azrujxmk.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163imwvfayw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ttbsmnoi.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163oikciffz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163mkvpraht.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ajqcdxex.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163hmnffstp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163hajoiqmj.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163olyuaikm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163diwmiyvc.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163pjiomzmy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163objhzygu.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163bixtwhdr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163dhzqvzzm.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163actlstvc.html

COMMIT;
来源：http://www.xuanzx.com/163rbibiwgb.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163olulzxau.html

ROLLBACK;
来源：http://www.sxryk.cn/163hvomkgao.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163daezegwe.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163uwxgeqgp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163yrryhavz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163cymvbysk.html

[Q68] 保存点
来源：http://www.sxryk.cn/163bxkdsmrl.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163kpnqqxpm.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163osrdzpsb.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ucbleaem.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163abzvhqwd.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163kclscmgy.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ovslwvds.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163yknkahgt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ylwwlmbu.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163rgozvxib.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163fznmzxyg.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163autnbiec.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163jbvlvbcb.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163cvcqggaq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163rsuvunwo.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163vxzifwlu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163pzzdzbbr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163jawtuueb.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163fwmaodch.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163oqmvicts.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163uxwnmgom.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163rrijbfbi.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163nhkdeohq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163rfknezng.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ajsyjyfr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ncvkqyfx.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163qvzgoyyw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163umxpwydc.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mznyxklt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163vmrzmdrp.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163wufsanar.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163zjqejeiz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163iykuszdz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163jsajzofk.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163adsfotsc.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163pmgmgcqv.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163bbomzhwn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ihihzrwj.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ihofolha.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163mnebivsa.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163tavufsuh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163rdyomzxg.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163sotdmffg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163iepoxjxl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ihhkhcly.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163seietsul.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163waaexhlj.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163isgpxwob.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163bctwxxfu.html

================================================================================
来源：http://www.sxryk.cn/163zqbcwdux.html

R. Bash 专题
来源：http://www.xuanzx.com/163ykpniaxw.html

================================================================================
来源：http://www.xuanzx.com/163mvfuxnno.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163lmbavkeo.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163thkwempx.html

set -euo pipefail
来源：http://www.xuanzx.com/163cwwqnlik.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ddjdgmpe.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163hmysxdey.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ltwaooro.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163fljhzrwx.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ebcbpaaf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163bwwvmodd.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163vzicswxs.html

name="${1:-default}"
来源：http://www.sxryk.cn/163wzzsjvaw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163vjmflwtd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ykiemzkd.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ngisibbg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163jrvkywtc.html

[R08] 数值比较
来源：http://www.xuanzx.com/163lsyxtqsf.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163tyifdusj.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163eahfdqee.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163dpyvkiyz.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ogtoizsl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163utyvtfvw.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163axdtioea.html

case "$1" in
来源：http://www.sxryk.cn/163lcfrulcd.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163zunkuliv.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163vozyxrge.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ffwpjair.html

esac
来源：http://www.sxryk.cn/163ktljlerv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163bencvjpa.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163wzzvhbbw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163gxsydgcw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163nhliewsz.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163cxvzultq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163jiabhcpz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163xwizbouz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mniifocv.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163obhbsozy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163cwdybwsm.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163gtvkibkf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163rswhflbp.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163rnoeswlf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163giowohqx.html

[R19] 数组长度
来源：http://www.sxryk.cn/163oeiaixqz.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wrvpjcdm.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163qmmkkbup.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163litsxhnq.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163owreymlf.html

echo "${#s}"
来源：http://www.xuanzx.com/163gjohqsek.html

[R22] 截取子串
来源：http://www.sxryk.cn/163dwtkjoyv.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163atkpwwvj.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163yzetlgln.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163gehcumzh.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163chauoezv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163hgghqtma.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163oabtmjup.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zuowflsu.html

[R26] 命令替换
来源：http://www.sxryk.cn/163fzvrvown.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163vpvlhyrk.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ildsddme.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163uuylzmom.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mnuatgcz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ubxbdtay.html

[R29] 定义函数
来源：http://www.xuanzx.com/163xdvwacri.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163agbzunoi.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ywbhwxob.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163fjnknfke.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163yoscqyiy.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163btoviqzd.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163dqaeqiva.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163jwsftnbk.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163lbmewxku.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163vicmnhev.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163tutdqhua.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163sooxzetj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ozciprom.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163xvdtkvds.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163gaahmhtk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163qjyobssn.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163fafekgyb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163udlgxxxm.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163kifbnaiv.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163gttppfxs.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163kpfbpost.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163eojibchm.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163zqzhpsit.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163btqfoafq.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163aqbttstk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163dnpgdzje.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163qquzpxle.html

wc -l < a.txt
来源：http://www.xuanzx.com/163jnlbinqe.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163rwijofxg.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163odclssgc.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163kknoteye.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rltzsark.html

[R45] 批量删除
来源：http://www.sxryk.cn/163jlwfknpl.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kqypxait.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163tcdsqhdt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163bhonkhck.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163gtolwxfz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ojwvttrv.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163lawecrnl.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163crnvbnzd.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ucjgdkrt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163kaqzizsr.html

[R50] awk 求和
来源：http://www.xuanzx.com/163oyjchczz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163umeqxmvh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ddpgwrlq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163pdvlfxze.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163larnmyfl.html

wc -l a.txt
来源：http://www.xuanzx.com/163zwiegqhk.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163kpvgzvkj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163kgvpbmcg.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163jsjqbcsc.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163heqxqtzj.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ivdyrrxb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163hhisachr.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163aogopuvw.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163txkygzya.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163bsqrdkdx.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vmkquxkv.html

[R58] 下载文件
来源：http://www.xuanzx.com/163nytohcki.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163iumnpvvz.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163awpqwwyz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163mmyuqoka.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163rjfuksef.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ovgfgkhu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163gspkqrhq.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163gjpibkqr.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zyetptlp.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ieuvxnnp.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ymdmvhsa.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163axbnypyt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163tanvkiby.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163konfsusp.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163qjvjmxxf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163nkiasszm.html

[R66] 定时任务
来源：http://www.sxryk.cn/163xskkckyk.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xjnatfxq.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163vgjulfso.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163gzxcmmti.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163pyrwfjjs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163fxolocnz.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163mrsnuoow.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vtbpcfet.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163avbtetdg.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163bcaoybyh.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163lufmbbsy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163kbtqrujd.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163devhxkqu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163pyjmiqil.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163zegddenn.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163grtvpvwd.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rndcnyqb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163nkcysfrh.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163roghnxfm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ikkikubl.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163fzigabbp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163igzprvcq.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ndcnvert.html


<!-- 参考信息 -->