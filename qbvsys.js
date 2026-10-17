外链999!wailian999！

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163bskvfvgg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163isamwuwj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163bphotiuq.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163zpszkpcl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ojwezfyb.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163urcqpbfh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163pacxcvfx.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163kklrvuly.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163oqzaewuo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163mozyzbam.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ketvlybo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163jrncxxtp.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163wuqezdlb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163mctzholr.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163vtderesh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xaqbdavm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163fhvyrxnm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163mzbmnsth.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163xitfvrvm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163cojswzbw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163lpqaxkxy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163pmomxaju.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163kozhvhjt.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163jobcqdvr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163nnfrnwdw.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163vhpayily.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163mnwnvfcf.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163fbpajajt.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hmqncclx.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163tmhtvbez.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163wnujraen.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163qzlgjell.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ftqsihyy.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163dztvnzzz.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163txwwptaf.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163jepnfwyv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163jejigaze.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163dtbkmpcz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163uzutumxj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163lmiyxils.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163vvqvverm.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163duyltpbe.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163byfyxuny.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163cqldzwjh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163lpwplwxq.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163aabqjuxk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163oxdkvzbk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163sjoimykd.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163yvwqdvih.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163mqjmizff.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163onlfjefu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fqdjwlcz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163uvuxqofn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ugwqzyda.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xhwmfcil.html

COMMIT;
来源：http://www.sxryk.cn/163tnisrvks.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163errkgnra.html

ROLLBACK;
来源：http://www.sxryk.cn/163hxavohsd.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163cpowzcwa.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163pvdaidsc.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163fqdodomq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163obhxgewd.html

[Q68] 保存点
来源：http://www.xuanzx.com/163eqbjisph.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163qdfnizgk.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163cpywvbdb.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163nlchftnh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163bcgwbtvy.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163pdcjziay.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163zumpkqrl.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163wssogosg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163zjninodt.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163vnvpqlfq.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163lmcbvpbq.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163cgpquhsw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vttaawuy.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163mrwcckfe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163dizxgzyx.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163dwxmvxhh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163tjgivodb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163tsbcjpel.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163nwfjabdx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163zfwaqfdx.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163dcdyvgur.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163fssfucnf.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163opppmdls.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163zfwcozoc.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163pmgnfxbb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163eqjpdlbs.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163jotwckpx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163acuhvjpo.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163uvgdaceg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163kymczbtd.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qrgkjhpe.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163klwgdqkw.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163suflphsm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vqeftizv.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163goqhmisb.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163insefnxe.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163sbyjtjln.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163fbjvhlac.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163lrquipjd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163dvwdfdag.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ngijieei.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163cwcajvib.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163zhbhvtqm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163yiqttfbw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163bnymghtj.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163vneenrpv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163tqrjpvgi.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163uxbqeolg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163hojrivem.html

================================================================================
来源：http://www.aibaodan.cn/163vokirizj.html

R. Bash 专题
来源：http://www.sxryk.cn/163coisagcb.html

================================================================================
来源：http://www.aibaodan.cn/163npbikkbo.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163chantqdb.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163xaezoigm.html

set -euo pipefail
来源：http://www.sxryk.cn/163gvwugxrz.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163qmmbilaz.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ahialqsf.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ybyxwryt.html

readonly PI=3.14
来源：http://www.sxryk.cn/163rhcjckpq.html

[R04] 位置参数
来源：http://www.sxryk.cn/163rarvjcft.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163jhvgacvl.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163sbrmnsoi.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163bbjaxejh.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163foyjutrs.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163zbgkvyfw.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163rzctywyq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163kpqgpukg.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163zpiogdif.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163zcpqyqjn.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163vykkhjwe.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163vuxeeaqh.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163mwfqgvnv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163bxtybovn.html

[R11] case 多分支
来源：http://www.xuanzx.com/163lnujkbjz.html

case "$1" in
来源：http://www.sxryk.cn/163vongavpo.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163bkuihiqc.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163pyvjinon.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163eerbklxl.html

esac
来源：http://www.aibaodan.cn/163ytispvgb.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163qknbrfjf.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163iehmnhdq.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163etbktimf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163towzbera.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163xbrkvzyd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163bampcmdz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163suadjfbt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ihkpsdji.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163cmrzuwug.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ugyuqyci.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163uldjjdaz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163cegrgsrj.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163wcepxzfl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163lhhfuyyv.html

[R19] 数组长度
来源：http://www.sxryk.cn/163qafgnvjd.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163pevagdza.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163nrorksks.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163lluayoiu.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163yugnzfdu.html

echo "${#s}"
来源：http://www.sxryk.cn/163ttobgiio.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ozyytpnk.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ukxdwfmn.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ifrtufts.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tuymbwmr.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163znssyabe.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163btvagmvp.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163bzthiswn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ruvfezfp.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fjibejrh.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163hkepamis.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163prjqkhee.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163reqgkjzk.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163kogqmkiu.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163keeuaxca.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ygsglwyk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163nspixkwp.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163uzmxeovl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ukxfxpec.html

[R31] 局部变量
来源：http://www.xuanzx.com/163cvdfsgla.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163smjzztnc.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ffudifnu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163jlkmmfsz.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wihjxvse.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163dydtlwgr.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163wzbxfune.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163weglryvd.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163hfcubtme.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163tgmnydvt.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163vqioaauo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163hobxlgkc.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163oipwknyn.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163aynhkorb.html

[R38] 管道串联
来源：http://www.sxryk.cn/163sruafvwh.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163uqisrkep.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zvvfzpeb.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163gdtcgcoe.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163yjdkekua.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163uojnlaom.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163tgyjnejd.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163exsuvqnt.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163uyfocvnb.html

wc -l < a.txt
来源：http://www.xuanzx.com/163xxfmxhkt.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163rzmvpjqg.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163fpktuvkt.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163tzyqfjum.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163hwpradcu.html

[R45] 批量删除
来源：http://www.xuanzx.com/163mcbjpjyb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163gmyrpdmr.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163lregrgwl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163jfdqxlrm.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ijlwokfm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163xsltiodn.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163duoavecy.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163nuvyllvt.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163actmjqbn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gahpzjdi.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ojyqhbru.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ybnokybh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163kwmzajrq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163bizgtndm.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163esmgpsfz.html

wc -l a.txt
来源：http://www.aibaodan.cn/163usyhkuwq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163nlxcsthy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163xsobeezg.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163jdevlwcd.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163genoucmo.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163xmxrfrak.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163lswjarbp.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163nxkwybzs.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163afrqvfna.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163lzjfqzej.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ktljxiax.html

[R58] 下载文件
来源：http://www.sxryk.cn/163chcpgucl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163dabsdafg.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163irarmvjk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163fbmbgtvf.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163drbauzhi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163rruwwral.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163myprnefn.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163oagdpkci.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163zktxjkba.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163gpxwgcsy.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163atijhigc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163hfetcbjb.html

[R64] 结束进程
来源：http://www.sxryk.cn/163tinsxkfn.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163zfeqvorw.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163pormhmbk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163bnenflbe.html

[R66] 定时任务
来源：http://www.xuanzx.com/163fvtuzqbz.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163jpapkxko.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163wojozfty.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163mwyjwctg.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ofpuseqh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163cubpbnkr.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163jbfqrhyb.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163bsyobvan.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163iyyjnqyk.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163vtudpavf.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163lwmyxwsz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163xiqlvaqt.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rdjmbhrj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jizmqvcs.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163rthhkbhb.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163jbexbbyp.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163poagkqqd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163jrmgtixw.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163dusruxmq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163fofkoezy.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163nipzdqew.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nuxikmcl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163iybmuebg.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163brnbeusm.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163wqekqvhk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163gemqeyxz.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163epvvtjuh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163uleytkrj.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ulhhjluv.html

time ./run.sh
来源：http://www.xuanzx.com/163izpxrvel.html

================================================================================
来源：http://www.aibaodan.cn/163uzxysmon.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163iorporka.html

================================================================================
来源：http://www.aibaodan.cn/163zdhmcxus.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jvrbujab.html

#include <stdio.h>
来源：http://www.xuanzx.com/163oobqjlqo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163rnlechwf.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163nbimrxcg.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163usvkanar.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bcwshntb.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163qizfgsqi.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163cheyensd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nyjmjwob.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163zyblowep.html

strlen(s)
来源：http://www.xuanzx.com/163ukpvqfck.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mubaqenz.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163drdqyuni.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163mrqxhkrv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163dmtlxpxf.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163jopdammd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163csbtjsdp.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mklvkogd.html


<!-- 参考信息 -->