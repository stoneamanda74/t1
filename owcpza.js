外链999!wailian999！

[Q36] 左连接
来源：http://www.sxryk.cn/163skpjenbj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163iglgqimv.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163uotybdxy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163jfekroip.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163lwrmkcay.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163jquvffzh.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163jpftdeck.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163bdzmtkor.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163kmeyneiw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163acebcvva.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163teenzfpe.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163urqjtbwn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163icuxjoyw.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ayclnuyh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ffccgaue.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163nmgzsrdo.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163yesmitcz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163aqdvdssp.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163svgxzkov.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163rtgdrbtx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163sxyivevf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163jfpnamzb.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163fawvdlzk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163mxubiyax.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163xqnhivsc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jdhfzbjw.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163tqmkveqw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163rjuqqxnd.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163iyzqolni.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163dxbmfpih.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163nwcdecgb.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163fjvjnivm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163bzxyyedi.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163mieurgoe.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163uiswddgo.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163eptjsfva.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163cdmzvxvz.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163spdthjjx.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163qiallvlp.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hnwleryr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163guapqgky.html

[Q54] 清空表
来源：http://www.sxryk.cn/163znuuzjls.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163dkosihoi.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163zszdxupu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163wvimlhra.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163gvcxsgvk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163dkfhddfb.html

[Q57] 行号
来源：http://www.aibaodan.cn/163xqmxtopq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163mjnkjtql.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163crzalrwo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163lvlgjjmr.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163iwfhdtvy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163oqzislgc.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163wbjdtgya.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163gkctagpj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163nidjnkef.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163oerpihvy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163kmwuordz.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163wjhmgppu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mjrafbxs.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163fvvpjylz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163wufufluv.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163hefnhkzt.html

COMMIT;
来源：http://www.xuanzx.com/163sxiirlou.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163gffibtlr.html

ROLLBACK;
来源：http://www.aibaodan.cn/163huykdell.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163nhzsfnel.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163bqvurqeu.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163bdseizfb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163zljmanac.html

[Q68] 保存点
来源：http://www.xuanzx.com/163lypqkipy.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163gepgbyvr.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163evavywou.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mygsmcoe.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163gyrraacv.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163xmwmfmmp.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163wdnbcgai.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xwoipehy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163erqalhkf.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163wzeknnfh.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163azmaiocp.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163gbijqxik.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zpkcsauo.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163rkqhczde.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163akjzimzx.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163btnfcysj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163tjxynubx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163kbvartwi.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ygusolmw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163zhjxdgik.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163jkhphdlr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163mmrjblby.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163unficzvd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163kayucmmr.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163osfalsme.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163zvbbxxyc.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163yvnsbwkl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163itoycvpp.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163rtnxufad.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163aotaiuxl.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163xtykkfbv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163cccntcgg.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163rvcirtuy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163bgsnvitg.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163qvxcfvau.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ivpqkuer.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163otifkhkp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163pfxzfucf.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163trhhykma.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163duciqnap.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163kmqrlkfb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163mwkbddje.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163tnzpmxls.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163lrdparxw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163sobpzyqy.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163htxevrzh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163cghpbcyl.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163slmlkruc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163qwcyotuu.html

================================================================================
来源：http://www.sxryk.cn/163eryhgwwm.html

R. Bash 专题
来源：http://www.sxryk.cn/163iruzxuyc.html

================================================================================
来源：http://www.aibaodan.cn/163cavrznbk.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163agdximag.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163xdhuyvnd.html

set -euo pipefail
来源：http://www.sxryk.cn/163zvljtifc.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163dahjyvit.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163kreobdqb.html

[R03] 只读变量
来源：http://www.xuanzx.com/163mjdontho.html

readonly PI=3.14
来源：http://www.xuanzx.com/163sbvohvvl.html

[R04] 位置参数
来源：http://www.sxryk.cn/163qwwkxqle.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163azsblarb.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163cegqbsod.html

name="${1:-default}"
来源：http://www.sxryk.cn/163nxotrpls.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163fndohbwc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163lrtdoahl.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163nvkbhqjd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163zycujkeo.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163apeyptxt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163idzejqjl.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ktxuvljq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163iqhmjfut.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163disgbqpa.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ndgvswzi.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ckqouwdf.html

case "$1" in
来源：http://www.aibaodan.cn/163wrjvrmsz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163cvwbngzl.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163piynxalk.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163hvrhiads.html

esac
来源：http://www.aibaodan.cn/163okclvhqx.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rsqqcwwn.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163sjeagezw.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163dfponbyh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163opcugplu.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163zncqsval.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163fabaqzku.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163xhcluaux.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163nlfqhyvk.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163cpirtypb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163iwwfceom.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163qfhhcefk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163lnegkumb.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163wyickjrk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163wmtyzkpr.html

[R19] 数组长度
来源：http://www.xuanzx.com/163eedvdfpo.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163qcellhfg.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163odnjziba.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163kfrvasyk.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163pcjpnnmk.html

echo "${#s}"
来源：http://www.sxryk.cn/163jellpfla.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163dhrdaosf.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163xkojeoos.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163piecwgzn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163rzqoihsi.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163hdtrwhht.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163cnyuwvps.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163jffzibgh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163lhximeaz.html

[R26] 命令替换
来源：http://www.xuanzx.com/163yzltohlp.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163fetuljil.html

[R27] 算术展开
来源：http://www.xuanzx.com/163tzgvqedo.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163emaszdbb.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163xefhlsoc.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163lddzisir.html

[R29] 定义函数
来源：http://www.xuanzx.com/163lflhhehu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163biykxjgk.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163nirdvkfe.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163oyxrygdn.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163bkowxtab.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163iwjlrxrd.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163wvckrwsc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163mwuzussm.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163acltcshx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163eanshnxc.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163pggdvlme.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pvrmvioz.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163winwbivb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163jvzqtwmx.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163hlccirfv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163qjbncqbv.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163hsuzjmkc.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163vigiiqsm.html

[R38] 管道串联
来源：http://www.sxryk.cn/163crtkhuqj.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163bifsvvnm.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163cwolpenc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163uybduyjy.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163kglhkbsu.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163pfiutqnn.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163vmuqulgn.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163mhspgrvv.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163trzwakwp.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163cgmbdrtx.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163tqvoslws.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163iucubcdp.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163wzhcvoli.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163zmtpulfm.html

[R45] 批量删除
来源：http://www.xuanzx.com/163mrplemgr.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163jxnjiqmr.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163cqokqjey.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163lnxgcibe.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163vllnfdzx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163qbaloikq.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163vkgnymji.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163etekenxr.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163kzbakiiw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163kozyqswt.html

[R50] awk 求和
来源：http://www.sxryk.cn/163cuavnxma.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163tqaizktt.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163vwlanyrc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163hzsquhed.html

[R52] 统计行数
来源：http://www.xuanzx.com/163krhakeog.html

wc -l a.txt
来源：http://www.xuanzx.com/163artonpqy.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163hoyvvhec.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163nwamkcem.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ncagsfix.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163aijvtorg.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163xydaoywx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163rshuvnnm.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ikpeernw.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163tfholdlk.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163percfjem.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163saroifgi.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163yakixqjn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ewkykxkg.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wpazxrzn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163mvrnjkes.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163qnpjvdbl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163msrqnqts.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163nrquaqhr.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163bmfxsllx.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163hhwkjmmj.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163fsubczun.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163jryvoigk.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163hmxvjffw.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ptwgatka.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163opgndveh.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gaijfnwc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163qhzqfxza.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ldqqhooe.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163zkbvtaas.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163kthocrtl.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163petqbxza.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ntujjxhh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163typiirzg.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163cdmxfwag.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163zcpwcajs.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163rfdkbflf.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163bcgfmmym.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163rtgnqppw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163pacnppyp.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163rclitcmi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163inricnek.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163eorxpmyy.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163fkdqtrht.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lwiagtwr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163cunsndtl.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163rmzisdry.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163dtzswygm.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hpkevwms.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163eivgijjm.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pcmsqdqj.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163kgklledo.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163unefnfun.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163stgfqdiz.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163qpcttlwk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163enouijhp.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163qtampzyp.html

time ./run.sh
来源：http://www.xuanzx.com/163nmojcajg.html

================================================================================
来源：http://www.aibaodan.cn/163mhlblwzs.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ghkzbdha.html

================================================================================
来源：http://www.xuanzx.com/163dbfmbuqz.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163wgdlklro.html

#include <stdio.h>
来源：http://www.sxryk.cn/163xgdpbjrz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163eyywklys.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163bgaixymq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163cixeyoqf.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163arheeaev.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163nlkzbknq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163mdtszumi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163pqijhzgm.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163chhyvpdj.html


<!-- 参考信息 -->