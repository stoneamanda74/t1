外链999!wailian999！

[Q36] 左连接
来源：http://www.sxryk.cn/163ufusehuv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163puszzhbc.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ajvcvjds.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163tqugwxgr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163owzvrvfb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163slynbamu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163rbqidisf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163omfkvvti.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163mqgrjakv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163iumvhrgi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163zuekamqt.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ncdcqwiz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163bdihenoq.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163zjfpticf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163uvllpcwt.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163rydbfhpa.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163waogjfih.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163kzrumorr.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163brnvvtbn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163euguqcaw.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ymfxhijh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163yjhcbyut.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163dfaipqch.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163zajhuyxf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163hrflgqqa.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163dxecyuzp.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163cdifkipg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163bsmazbtj.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163wepjltyw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ohbiidgb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163nqnuuuja.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163txoceulx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163krprgqsh.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163dpbryrwr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163eqwqkvly.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163twbvomnf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163yaogwgwp.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163nbhwnlvm.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163dcoyhxgh.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163quwdkrjt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163uhtluahj.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163exvqacvh.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163lprjsqbb.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163icqwzcun.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163rvehfiwx.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163iuzvzuxn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163rtgyvvvj.html

[Q57] 行号
来源：http://www.xuanzx.com/163vmlkejph.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163xgeogkhf.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163icgyuqvz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163zhceebjp.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163exebqdoo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163exemrgld.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163qjgiskai.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163biyymxqe.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ywbxvxne.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163gzotcnfk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163zjddlvbk.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163fhwomgqh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qucscfwz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163kfpttkcm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163livvectg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ehebizij.html

COMMIT;
来源：http://www.xuanzx.com/163gjumtuuk.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163wmmzxkhw.html

ROLLBACK;
来源：http://www.aibaodan.cn/163qapmlucy.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163krwfwkjc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163kofzbtlp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163qywoilye.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163pugyxkph.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163vzdmsrea.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163nyfitlya.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163rxwszlve.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qkhjyhmj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163rarcxzlw.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163zrxmiqyx.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163xnjjepoa.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163dyypdcqk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163kertofti.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163rukyupod.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ivnyjqil.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163mvxmjcfh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163hcjhqvgn.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163iqlqipow.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163rvtfhlyf.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163rmcrklmt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ikivxwcd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163bwwrhogd.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163vtzbjqdv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163spfqesjg.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163wrlmcoix.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163haplarsg.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ppuvlgry.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ylajbogm.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ddtyflgq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ynuqvdup.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163orzkldhr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163nspklvge.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163eatwbdcb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163gfoxsihv.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163uormvong.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163chabgdil.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163fcknsvgr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163liuehwrk.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163vfvccxbd.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ztwkkhps.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163rwiyzwhs.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163aaokacpg.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ecrmljfh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163gyocgjpd.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ywhqdpmc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163vrkddavo.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ovcwybjg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163wfznwgfj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163fsleyogv.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163drrsxvac.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163aogtpmpr.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163lmmbjulr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163acmfxsjb.html

================================================================================
来源：http://www.aibaodan.cn/163ekrbzegw.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ihbfrmxi.html

================================================================================
来源：http://www.aibaodan.cn/163qeniypwd.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163jbzpkgzc.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163wnwybzqf.html

set -euo pipefail
来源：http://www.aibaodan.cn/163cmeftvby.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163rkjvkyaa.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163vytjfjgi.html

[R03] 只读变量
来源：http://www.sxryk.cn/163dlxqgikp.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163fritrjar.html

[R04] 位置参数
来源：http://www.sxryk.cn/163dgknurol.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163cfamiehb.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163knymowmr.html

name="${1:-default}"
来源：http://www.sxryk.cn/163lnseoiyt.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163uzrjdhim.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163pcrdqivg.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163eulujexp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163riohggtr.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163poaqdwux.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163eqopboye.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163riuagifs.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163nnxqywow.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163hzxbylia.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163gniaxvna.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163thaiqxmy.html

case "$1" in
来源：http://www.xuanzx.com/163zpnvcdef.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pbmicmxq.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163dorvttbz.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163rmhruqxd.html

esac
来源：http://www.aibaodan.cn/163ytvvjbwu.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ftcciodl.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163hkwyvgeq.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163cjsiqxmw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ysrmsqmm.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163wndwslem.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163rauvzmfb.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163nmfkruzk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163nvxfrwtc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163lxuomltr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163urapnofu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163oslawsyq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163rqntqnub.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163asdhlvai.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163fxvzwgeb.html

[R19] 数组长度
来源：http://www.xuanzx.com/163hcfwkfgy.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163pxiovknd.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163scbjgdyu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163vpynepqc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163xzdzgssi.html

echo "${#s}"
来源：http://www.xuanzx.com/163kbguywzg.html

[R22] 截取子串
来源：http://www.sxryk.cn/163hfslwmpt.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163kcmoxmgr.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163yfijeazy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163sgcasnyv.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163hizagwlf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163skjdwgnx.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163jssnpdcv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163pdzbawdq.html

[R26] 命令替换
来源：http://www.sxryk.cn/163apbmjhjz.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163weilwits.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163nsvenwut.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xochxasf.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163gqdnctlc.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163tlntsbhh.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ccbodkli.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163pjefwfno.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wvrfsyet.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zobvstcw.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163rpyjsint.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163urbpsepm.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163zvfhfeuv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163gcgmicyv.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163twtcpoql.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163suiotqrj.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ypmbejep.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vdurwvsi.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163nsjnxqnb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163pnznlnmg.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163wtyfcvli.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163oaaahymu.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163fnlcqgfk.html

files=$(ls -1)
来源：http://www.sxryk.cn/163vyhmpwkw.html

[R38] 管道串联
来源：http://www.xuanzx.com/163mbryleyd.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xhjkqgme.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163akyzbwgy.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163gdbupmct.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163lgyngnbd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qnnalsxc.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163kuxsdzvb.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163doupgasu.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163iviqmnip.html

wc -l < a.txt
来源：http://www.sxryk.cn/163axdwfftu.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163tpeoblgs.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163nbztpyqu.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163cjhtzzwp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163tkydftcy.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163qsjxlcxx.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163zzeonivf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163siyfzlwc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163xnnrcopq.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163mxvmcvla.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163rdhvuzkh.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ahrsfzxy.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163eupvlwgh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ulkttuwj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163karpgaxs.html

[R50] awk 求和
来源：http://www.sxryk.cn/163xbyhkubv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163veyujypg.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163qbpvutum.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163hrwopxhr.html

[R52] 统计行数
来源：http://www.sxryk.cn/163lwhhsxme.html

wc -l a.txt
来源：http://www.xuanzx.com/163emeojyht.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163tvvrkagn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ssiziiqa.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163euwwufju.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163vzjtpcgl.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163iqaxdvwv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163xybiajup.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163uzjdllel.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163akrisygk.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163wjgbjxze.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163extxggpj.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163nxzkkddk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163rcrnqyoj.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163whkusiwa.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163rqomitol.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163wmbcbkyy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163sqlczuol.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163njvnijbd.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163wfkupqcc.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163amjphcrq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hlhyvsrq.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163jjfupkyh.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163meshpkym.html

[R64] 结束进程
来源：http://www.sxryk.cn/163qikdqeyj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163lhlpujzs.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163tsarmoyh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163jkzzgbeh.html

[R66] 定时任务
来源：http://www.xuanzx.com/163bkbjvtrv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163edwlhgbm.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163xiovnenw.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ezxqpvaw.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163zigosxqo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163kxyqajzl.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kscpptsv.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163vxlqsdpe.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163xbdnsmgx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163hngocilf.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163qozbkfym.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163fwxzodyw.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163zcmlthzu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zypdwijn.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163izgofbxx.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163lfhixoiv.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163jaadkecv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163yotyebzd.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163whjbdqof.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163cigphmmz.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163robbgmpt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fsvyksqb.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163counobgl.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163queqmsao.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163mxqsggnx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163mvdfckmp.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163pxonskym.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163oqgfyqeh.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163lsdtnalj.html

time ./run.sh
来源：http://www.xuanzx.com/163jgkkoeie.html

================================================================================
来源：http://www.sxryk.cn/163syhdopay.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163zzbapbtj.html

================================================================================
来源：http://www.sxryk.cn/163qbmuwtnh.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163meppbeim.html

#include <stdio.h>
来源：http://www.xuanzx.com/163rdxqqrgt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163aszsahup.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163imbvtisj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163fdkojwka.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163cfnetmyo.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ylsrisgr.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163qcvevjxp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163niwgjsom.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163nfwnurlp.html


<!-- 参考信息 -->