外链999!wailian999！

[Q36] 左连接
来源：http://www.xuanzx.com/163lounuicz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vmiyxfdd.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163fuqglpqs.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163guhseufr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163czfvssnk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163notbdrtv.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163cmzykiub.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163uuyjafsq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163skizxklj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163syazllmd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163haorgjig.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163mjgncjeu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163rbcomtwt.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163pgmwzslz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lrfptxkg.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163jezipbmx.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163dbeprcms.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163gfgnbfmk.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163pkvcnokx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163uscuojlw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163oxkbmpar.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163efrvbptm.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163jhzkqmgu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163duwyryaz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163nlryjxpl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163gpiqzaaz.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163cuqggnem.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163jfmbdaho.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163yzvmfytt.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163kzfwymaj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163dxoiifuj.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163xkjfpekp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163kmprkmto.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163pryjqswm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163vtpdvowj.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lsjyftrz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163lqhvargj.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163wpygchov.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163uxadelmg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163clwkkotz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bpqoerbp.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163mxltweuj.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163oodhoafa.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163vrqcexwv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163kiktftzh.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163likuqtvm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xdlhftsx.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fzkbhvsp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163svzqprct.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163stkzjvrx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163cdusbsvx.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ufnakvnr.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wgdkmlwt.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163lhnozfvc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163owyvttoy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163byyrkkce.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163kohzoklj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163gaveuadv.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163wzwamkfb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ogsdryye.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163hukkmulw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163owrrhstv.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163tvoqlmai.html

COMMIT;
来源：http://www.aibaodan.cn/163uulhcvvr.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wguhoecr.html

ROLLBACK;
来源：http://www.sxryk.cn/163fnujexyn.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163yyyhfbnk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163kakgmpan.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163vhkolkdk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163djgqqzho.html

[Q68] 保存点
来源：http://www.sxryk.cn/163bogmgvan.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163khxjnvmy.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163nrscktnp.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163hbvrjlnc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163wvwgoppx.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163glsqkvrx.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ckmywdvi.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163uflmcdys.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163esjxpuhh.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163seyrxhwj.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163dgjdmoee.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163azbapxvo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163dvzowooq.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163pxfivqju.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163wnmvkbto.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163xtwccwee.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163qxoovnyr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163inwbtpzn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163uwahtjln.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163batniuqz.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163zhmyivch.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163guhiojhh.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163kttzacbo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ieqtjjed.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163tikvbhvm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163yjemhgwv.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163skwryvgd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163zjlxmbcb.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163oaisfwos.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163idmhcbkx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163dfaybvwa.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ssczpvnf.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163lgtyyqon.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163etegiwxu.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163bdavkpkr.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163hdnklbxl.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ofmnbgwr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163tzzqbmfy.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163zimbwkga.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163vubzxzlq.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163gtvgrkto.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ugkeftbe.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163anivhdcm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163bqakwrzq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163orqoxcvi.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163wzhccqqb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163tlcptxwb.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163xqgshnna.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163crczvweg.html

================================================================================
来源：http://www.aibaodan.cn/163gmcuveni.html

R. Bash 专题
来源：http://www.sxryk.cn/163clolryxp.html

================================================================================
来源：http://www.xuanzx.com/163dxbrohfu.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163pjhwzjkh.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163gaisqufw.html

set -euo pipefail
来源：http://www.aibaodan.cn/163mggaprfv.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163uylqeawr.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163nnzxpnhx.html

[R03] 只读变量
来源：http://www.sxryk.cn/163qvcrlmrg.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163aaarjqxz.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163kiclavfa.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163qsorgvpb.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163qsugloja.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jvxmgzgs.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163zdgwnszz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163swsyists.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163fpfxlzqv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163wsdkbrsb.html

[R08] 数值比较
来源：http://www.xuanzx.com/163gladtlmn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163xbnrmyru.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163bkarizxc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163gpctbojp.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163llomubuv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163xeyiyepj.html

[R11] case 多分支
来源：http://www.sxryk.cn/163aljfvtgt.html

case "$1" in
来源：http://www.aibaodan.cn/163tryezhzg.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163jlokvjco.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163xcinwqsd.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163izfdoolf.html

esac
来源：http://www.aibaodan.cn/163vggljgui.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163mvrzocok.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163bhnuizqk.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163nsopiytk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163lwrubnin.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163xwrdskmu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163kbcnpics.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163wnyvzful.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163emyrgsgn.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163rgbuujeq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163rpzuxruv.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163yyrudkyr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163fcjyeuku.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163lwlelybx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163biradrsy.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jxfckgen.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163cbvobgfk.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163tgsasmfq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163hiqdswfd.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163dtgweigu.html

echo "${#s}"
来源：http://www.xuanzx.com/163tdhhgiqd.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ppcqeino.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163qcjputsc.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163csmodwck.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163bdrphzlt.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ovpaudsl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163trrjxwjr.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163dbwrdgpr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163qemxjyja.html

[R26] 命令替换
来源：http://www.sxryk.cn/163bhgrkwxt.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163tyonjapb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kxlysdtc.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163szkfichw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mhiguebu.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163adcpojto.html

[R29] 定义函数
来源：http://www.sxryk.cn/163wnupugfj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ozwfzdtn.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ydusfmjm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zgcrsksg.html

[R31] 局部变量
来源：http://www.xuanzx.com/163vfpbjizu.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163bzbrxgxo.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163basrzgmr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163foqgzgov.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163keehbufv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163jhijaxlh.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163hyzvbqxd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kwgahifc.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163syhcxemu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hiepxzwf.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163soddsykn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163bcyinlrl.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163kjyoykca.html

files=$(ls -1)
来源：http://www.xuanzx.com/163mginoqlh.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163jqxryvsc.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163uphnqrot.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xelogiru.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ficpbryl.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wcofdvfd.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hbqttzpz.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163zikjsgsa.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163uchibqtc.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163bvgjpqgo.html

wc -l < a.txt
来源：http://www.xuanzx.com/163udljzhuh.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163jcttxogg.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163pcsdetvg.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163rxdjdpzm.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163nrcwgsaj.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xipvgksv.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163lzaeensv.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163jexcurvm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163artpovtw.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163buwqflyb.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163kwowqstb.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163vodvbiwx.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163mhwhxymx.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163shyvdadx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163xgihgswr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163fzddzoud.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163pixmgort.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hccpcwtu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163assdxhdz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ivgbjueb.html

wc -l a.txt
来源：http://www.aibaodan.cn/163xdmhozfy.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163xaonuoxd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163cqwwtxat.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163vedljldt.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ncfovvem.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ylfjruue.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163touaniam.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163rgqvlmmr.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163zflkkefw.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163nokbrbtv.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163qtauaqcl.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pnrrnejt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163lejenzps.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163fdlozfql.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163irzmrtii.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163syzmkanc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163yalndqfk.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163xwxvpldw.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163pusspjop.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163hbmehqdi.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163eckqjedm.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163fycngbqf.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163fmfgrisb.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ecpbzsoh.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163gzizbkhs.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163zciaugoe.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ijpkjave.html

[R66] 定时任务
来源：http://www.sxryk.cn/163uoqrfmcj.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163mzpjccpo.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163rbbyfjdb.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163chfrmxci.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rlatuzyz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ldnorfue.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163oomekuuv.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163dfqpxxse.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163fynxsccq.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163lwbdqtlk.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163xmxsdbyw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163fgxnwtli.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163iifuhhdz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163vgifmxgx.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163trbzwuug.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163vjyderdh.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163jtrqyozk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163aawrthlc.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163mnehoyne.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163utdmwbpi.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ttrthcxe.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163muewavgh.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163oivoeqcs.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163dbxlsxeq.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163coiyixka.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163dlmlluxv.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163gnnxunme.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163qnycxnhf.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163gmukcgtq.html

time ./run.sh
来源：http://www.sxryk.cn/163tquubyhw.html

================================================================================
来源：http://www.xuanzx.com/163trahmhcw.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ctjrorws.html

================================================================================
来源：http://www.xuanzx.com/163qyadcxks.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163xttlezrj.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163veymydeu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163pcoludzq.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163fmokfzbg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ecxprwcb.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163zsssoxty.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xlhgvses.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163fsrnttew.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163dgvziwcp.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163grfpgxpq.html


<!-- 参考信息 -->