外链999!wailian999！

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163nrdkfpdm.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wxtkopwd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ahhjxqmn.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163gwxulntw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163lfszyrsw.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163qtxuqrue.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zsbrrygr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163spyuqnxt.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163reqxkhup.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ktfzvavt.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163gocdebcz.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163otcibyfz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163wnagynng.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163nmruzybx.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163mtdvsijx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163agfrzrqo.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ldyiicmn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cczzzmkk.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163hrznlkqt.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163mqpnekrh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163bdwvplyz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ncahwtid.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163aqabrnei.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163mzilbwpc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ktplneko.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163fnexwaij.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163xoyzvwaq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163tmpdhskz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163afkobnso.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163fgmprawi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163pthmntfg.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163fzjhjgsp.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163efzmpsyk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163dtbghhzu.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163dccdwxby.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163cizvhoqn.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ouqnvdok.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163pbfgmedz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163vnhylxhi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ibjheozo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163scwnbxqj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163zutkmzjo.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163srkouvqc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163lbwbmghz.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163tvfurevq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163sdewhssm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163oqnjhqej.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ignnduug.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163enpcooek.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163nypkoqxp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163gpizjhxa.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163jgtnaikl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hejecchs.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163vmfnmisr.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163nbvnbqks.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163lfykshrn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163jngzthal.html

[Q54] 清空表
来源：http://www.sxryk.cn/163gjitfkes.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163clwlkqqi.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163yhcanzga.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163hdhvdqkk.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163vprrzfuj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163bdzycngo.html

[Q57] 行号
来源：http://www.xuanzx.com/163miauisdm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163owadrvkz.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163atdawliq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163wdpisdzj.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163yetmmshb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xfvmpquo.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ahdcvfsx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163owinckok.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163jfyrbebj.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163azkrtoza.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ncyxojcb.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163vteemznd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fbhomvjj.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163pcgjmbei.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163umbghaqd.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163komwtogj.html

COMMIT;
来源：http://www.sxryk.cn/163sebjmyvk.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163qfhxzamz.html

ROLLBACK;
来源：http://www.aibaodan.cn/163zdavecxn.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163htcrgbxd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163itnyxtyw.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163dgdsnvdg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rdtqaksv.html

[Q68] 保存点
来源：http://www.xuanzx.com/163bptsswol.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163zeoadnfq.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163fqauuqex.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ciqjdynq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163bztuiicf.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vcaksqjw.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163smbazlvh.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163gwihzqhh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163kblesaqu.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163tuimhdrq.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ijbagxui.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163majskamn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zfiqfmno.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163mrbqgrww.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163lrwyfnnv.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xvqwbtyc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163imjccveh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163qlaowgrt.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163cjvkyttd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163iabimcze.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jqdndddy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ftwhlfck.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163vqnckkne.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163rthfiyba.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163qdxsncoj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163nwvgxxvg.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163coknlhqv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ifbevetp.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163jkydnlvf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163gikkdqhn.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163utjptivh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ibosxsze.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163yvvctkdn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163bmmaylaf.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163sbdqvcrc.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163qlvryksr.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163rcpxythn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ujvuhojw.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163eniooxlw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163synlerhy.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ocokwbpb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163uakdhyrz.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163onzbqged.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163dsvukpms.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163lbzzkzsv.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163qzgyzdmd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163hqklfdyi.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163mrrreawr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163pkxwfvmz.html

================================================================================
来源：http://www.sxryk.cn/163lkubbgdf.html

R. Bash 专题
来源：http://www.aibaodan.cn/163jpqcqdfq.html

================================================================================
来源：http://www.aibaodan.cn/163dgbgicmo.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163qybaudky.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163qinlgfgy.html

set -euo pipefail
来源：http://www.sxryk.cn/163cwpofvmc.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163hrvmagzq.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163imfcxvpi.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163iybufmzo.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163mfiijvew.html

[R04] 位置参数
来源：http://www.xuanzx.com/163jitznkjf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163cwlpvxon.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163sgxeinkn.html

name="${1:-default}"
来源：http://www.sxryk.cn/163lbbnfeco.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163yupboggy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163qujkrttn.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ezlillnp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163rsxrivec.html

[R08] 数值比较
来源：http://www.xuanzx.com/163voescvii.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163yonjxtdu.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ddphafua.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163mbnudwxq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163pupcwcjs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163wbnczsdb.html

[R11] case 多分支
来源：http://www.xuanzx.com/163bblsqktp.html

case "$1" in
来源：http://www.xuanzx.com/163unhkjdnt.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ekqodarv.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163xyjewsjw.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163gqcsnclc.html

esac
来源：http://www.aibaodan.cn/163wjxqbqfn.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163jxlkdbpo.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163nvxaxmqn.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163juzggjfa.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163raibrsbm.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163rhzoupfy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163xcoeokub.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163zlbppwfl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163jdutbgzr.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163xzeuvdoc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163nfqrqzbk.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163fwxnegtu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163shclrhor.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ahgwsybx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163vqlexeue.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163mgsueekr.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163rmnzuknh.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163bquelhyo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163satmofex.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163owsagbbz.html

echo "${#s}"
来源：http://www.sxryk.cn/163ravjdila.html

[R22] 截取子串
来源：http://www.sxryk.cn/163hsqbgmjt.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163oqaprazb.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163exslvtnc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hkdprgsf.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163shxywubn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163nkvayuoz.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163jfembjcr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163fhpvloye.html

[R26] 命令替换
来源：http://www.sxryk.cn/163uojvsfwc.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163vuzlmopv.html

[R27] 算术展开
来源：http://www.sxryk.cn/163qgnreugk.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ptiylzvr.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163iwivptdu.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163urxxzrdo.html

[R29] 定义函数
来源：http://www.sxryk.cn/163zsxeucgc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163mxovruqv.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163xsledpch.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163cwoimesg.html

[R31] 局部变量
来源：http://www.xuanzx.com/163txmpemum.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163qmyyxuxo.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163odsbahpk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ppwvfksr.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163eaieuhzc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163dvvbghvh.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163yatkaptl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tgghmexp.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163yxwybtfg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163yordanaj.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163fdjlxipx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ygjvhiva.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163oicziwzr.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163uqkyeoaf.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163okpoxllg.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163kxvwihkl.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vudsxxsy.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163anbylfvq.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163oxrpcxal.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163kmkwendq.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163odkjmpql.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163hyeifrpv.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163vlifyoik.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163qepjhgmr.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163bwezrdsz.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163zqzdkjzr.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163cazrxsmq.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ljzebkhk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mrdbxzrm.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dqbgijzz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163retvzfim.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163tdnaahbi.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163mfznodkm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ljdudjtg.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ssvveaut.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163hjpwpvww.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163dgxtucol.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163doyrvzru.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163qqdeqpbl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163reuebwka.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163agtbtgmy.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163asqiuwyr.html

[R52] 统计行数
来源：http://www.xuanzx.com/163hgeksuxu.html

wc -l a.txt
来源：http://www.sxryk.cn/163rrihwysv.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ozszlcng.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ulqiyhgs.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163gevnpjky.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163wvztgkeb.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163rzlxcxbr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163xrggphsq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xyydgvru.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163dhhgewow.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163baeolpff.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163fwukikrv.html

[R58] 下载文件
来源：http://www.sxryk.cn/163cicbrrcl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wagkhrqr.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163kbslmydr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jxaabwld.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163peanfztx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163vbkukubb.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163urdfikfm.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xvbbpzzx.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163oevlpfnk.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163nazelahg.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163msbvalsl.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163jvdexszi.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ybzgqsmd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163stiarrzi.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163hojxctwb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163rhfggdth.html

[R66] 定时任务
来源：http://www.xuanzx.com/163somseorh.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163pabditry.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163vhvrwvwf.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163dujoarjk.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163wfrjskac.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163kbnydcqu.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163kbrzxknr.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163rvlhvmgo.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163wfltscfv.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fdubdqwq.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163cbltfsar.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163fhzenuuw.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163cvaqtcpb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ssxhsbog.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163diwprgja.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163prxdhabw.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163iimwanyg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163awkyybxz.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163icngfbut.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mlpshuzm.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163zuuhzvsz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163odxfsrty.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163xnkeoqmv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163jximifdj.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163bztfbosi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ntrpitrz.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163snxmcqeu.html


<!-- 参考信息 -->