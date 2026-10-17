外链999!wailian999！

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163uqyggfto.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163siiddhjv.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163otikjcpw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wgokunvo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163wgwskkuw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163vlfwkfmz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163tprikaev.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163lgmuxxvk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163twhrenkg.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163lapqhrml.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163flllqbgw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163lggudjsb.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163fidqpysj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163xubxleuo.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163cnpjvber.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163lfdwkmmx.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163dvibaykt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vkmnfqou.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163rrocxihx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zohcqkhh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163tuxtygxf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163offuqjek.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163qmlduwkh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163icekozaq.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163zpwtkxgk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163itxgguqo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163xwtaynko.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163viezbmie.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163pvcyxcrl.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163vbmgfgtj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kmvspdyg.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163csmrdwch.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163nkhuwumr.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163jdydwnpv.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163azpiagmj.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163lxzfqpwc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163sbokrwgw.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ynrbvroq.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163gkpgliwn.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163rgtonrwk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163dxfaiwtm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163hjxtooce.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163npqidkno.html

[Q57] 行号
来源：http://www.xuanzx.com/163rdxkfnwy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163corzllkr.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163kdsoqwwt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xqwgszfg.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163opsittqh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163zakaracr.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163kvlwbtvv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163lxvwrtap.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163hezdxxjy.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163wjptvgpn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163mngvtdki.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163jkvwurzw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163okslbjml.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163lhizxymr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163bokdcsvb.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ijpzkjcd.html

COMMIT;
来源：http://www.xuanzx.com/163rautcbxv.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163rlxouaib.html

ROLLBACK;
来源：http://www.sxryk.cn/163dhzxxpad.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163anvursyg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163rudsvacv.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163hjnplqde.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fbojnrzp.html

[Q68] 保存点
来源：http://www.sxryk.cn/163yyknnnem.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163bvyhyitl.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163xvzsmhvr.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163jvuoifvb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163wpxukrnu.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163hlqivyam.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fgtvpbiq.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163velvhycn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163oaqumsre.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163khgrrbtd.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163swqlrvgm.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163lwxqkhoe.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163rhvqehon.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163igxtccyu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163adkistxf.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163lfooxtks.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163rgexpgco.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163tlcumsnt.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163zpppbkwy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163qjbycrkm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163yvbavlma.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163vlswwghg.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163grlvsbhj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ewpttczp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163sfkbjjhn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163rlwcipju.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163iobdzyuy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163liqlvpaz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163xdhxemhk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163smuvihdm.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163xnsmojzz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163hidiuuap.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163roijiayf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163wqggwwgd.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163aefjjctm.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163itadbvmx.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ewvzayvv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lowzncez.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163vxngtimn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163mokmiohn.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mqpqrxao.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163oskkrupg.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163gtmtvskn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ytsqjrtj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163xaadxwpq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rtblwmeq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163fmubahoo.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tvpmstda.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163awashfnh.html

================================================================================
来源：http://www.aibaodan.cn/163nbloqfby.html

R. Bash 专题
来源：http://www.xuanzx.com/163htyvuivk.html

================================================================================
来源：http://www.aibaodan.cn/163mxnicbgb.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163pxdyyyuv.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163scnleqrk.html

set -euo pipefail
来源：http://www.sxryk.cn/163timbsqxd.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163lhhigpuv.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163fduhgtwo.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ijwttdgj.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ralhhjit.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ocyddhlb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163kszjfdln.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163exrzftpj.html

name="${1:-default}"
来源：http://www.sxryk.cn/163bfdtpeaj.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163nlopgiqy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163rsmetien.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163vbetcziw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163olcbwqcu.html

[R08] 数值比较
来源：http://www.sxryk.cn/163yvloviid.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163hhsrdiwy.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163bpfylhrc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163shyobaty.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163yjzvczlj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163pkqgchnk.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163psrxbswe.html

case "$1" in
来源：http://www.xuanzx.com/163khedszhs.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163zmcuhcqq.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163thpbnzdi.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163spvshbix.html

esac
来源：http://www.aibaodan.cn/163sxpubojg.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163utbfonpa.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163wgumtgdv.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163hfxxkxqk.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163kjwzewlz.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163lretcfbo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ioawxthh.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163zmznbwuv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xnqfhfee.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163tjnhmodd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163duoiuoja.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163wrqndoyj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xjqohxwu.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163gzfpnocb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163grrsupvi.html

[R19] 数组长度
来源：http://www.sxryk.cn/163sgheigrl.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163gijqeivh.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163zwitksyw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163jomedzic.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163tcbbdwsu.html

echo "${#s}"
来源：http://www.xuanzx.com/163ueqoddlg.html

[R22] 截取子串
来源：http://www.sxryk.cn/163tcerptoo.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163rhvvgffc.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163armmhadg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163qllfqvzk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163rdzddpgd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163tiemwdux.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163tijibgcc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163bpdofsju.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wjazidkm.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163kmwuuixc.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163cqpasymf.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ybjkyyjt.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163mxiviaao.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163jwkufblm.html

[R29] 定义函数
来源：http://www.xuanzx.com/163vhwvmkzt.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163jhvetymc.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163cexfwhnh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ffitatil.html

[R31] 局部变量
来源：http://www.xuanzx.com/163pzjsffht.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jrlehidx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163yyoldpsv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163hxdhsuoa.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163wnxcmesu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163fnsfuzev.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163cfprgdmi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ydhmyjkz.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163usvzketw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163fzgmpbob.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163numumift.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163jbmflgzs.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163mugnixkq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163lkqssnax.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163syitkndq.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ehfkbhhd.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163apongwzn.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163apqtnysk.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163cvnrzxww.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163femnutva.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163vfphjdvg.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163almzjcvq.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163okwrnhkr.html

wc -l < a.txt
来源：http://www.xuanzx.com/163adpxaxjl.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163wrczfump.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163vihlmpig.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163zwkantzi.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163fcnbnvem.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ptyywzco.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163wpbnxbvm.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163fmfaodtx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163zyizcgvy.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163tpqkxlyv.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163wxmnrsdn.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163klonsmjc.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163azuiffpl.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163rtclehmw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163yxmzmhtu.html

[R50] awk 求和
来源：http://www.xuanzx.com/163gewjrjwb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163vtojywbk.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163veobeato.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163wgpgnbqm.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163azqboscm.html

wc -l a.txt
来源：http://www.sxryk.cn/163vozcsgxu.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163rgjwqzwm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163pcpntdcd.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163bxinvfre.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163vlijslom.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163cujgvkup.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163laiszgag.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163fzhkylgs.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163lbgkacao.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163hmkbjcdl.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163quxdpnbs.html

[R58] 下载文件
来源：http://www.xuanzx.com/163vhzypbzp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163oczskvcy.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163kwhthrno.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163tgzmazmq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163pseskjyv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163hzbrphsf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163iepvycof.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163urigrdoi.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163uvypabsr.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163eqdrhtyq.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163wnkessru.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163qhibljkz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163uhhfalhw.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163grparmvh.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163sstusonu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163qwreuget.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163fabpnixx.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ieuoiuhc.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163mzjzndqr.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163gjmqcuin.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163rnieljut.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163mjdicjxa.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163gxhndpxn.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163uikvdryr.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163usbjllwe.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163vvnwjopk.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163rvpwocnl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163eyfvumuv.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163chngdpwv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163pdxgkuhg.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163zurxoqjs.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163eclzkebg.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163cjeqdvlg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163bwrorjje.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163nqpfwbtg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163odxojqyg.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163npebvkmv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163cyzsmlzr.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ftoxyhro.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163fioqnnbu.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163fqzwjpkc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163hdywwpxx.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ejmhabve.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163viehcqpk.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163aifqybxr.html

time ./run.sh
来源：http://www.xuanzx.com/163ylatajyj.html

================================================================================
来源：http://www.aibaodan.cn/163duyjoqtp.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ecfifsrt.html

================================================================================
来源：http://www.sxryk.cn/163befsiznv.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163juwbmqvj.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bxkhhznb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163fogtntiy.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163bbqsfgcm.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163tufqirtq.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163znvdkefs.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163prrjscht.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163begmanmd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163eolnkbub.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163jdeqtwbw.html

strlen(s)
来源：http://www.xuanzx.com/163eqmlavra.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163nllhpzca.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163knmgmzcb.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163clmkjbiu.html


<!-- 参考信息 -->