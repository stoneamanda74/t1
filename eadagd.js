外链999!wailian999！

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163nxqbhvph.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jtsppjyl.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163lgtohehk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163sqokpdrj.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163uuuwdmlp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163bdvspfdy.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163qurycbjn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163oeiioqin.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163fobnhxca.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163nazxxmrm.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163acdcypkp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163jvjtibun.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163tdrwagei.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163btickcxp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163iehijbji.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163qlxtjhmj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163dcihszxd.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163kfctnfuo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163pyriyerc.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163enrbleyo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163rtzqrxru.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163nrtymgjh.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163tnaiyxdu.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163gjpbwzxs.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ieeclkjp.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163hztpdiib.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163dsufvuvu.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163dfmzbara.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163nmfkayic.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163uvpfpvxv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ljhathjd.html

[Q57] 行号
来源：http://www.sxryk.cn/163etnlrpno.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163jhtfykxr.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163yfedqloo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163sgpjxzpo.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163gwotlhxu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163zqystdvu.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ycvkymrb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ttzzidam.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163nnncdhpx.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163pvsqfznr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163yjmqwmnb.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163pybtrowx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163axoqzkcc.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163vycynocj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163wdtzdvvo.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163shbcugpg.html

COMMIT;
来源：http://www.aibaodan.cn/163bgmhbnit.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163dabimoht.html

ROLLBACK;
来源：http://www.xuanzx.com/163zuwmykmg.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163bnytolla.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163foxydwvu.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163afcismmw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163psmjnpmy.html

[Q68] 保存点
来源：http://www.sxryk.cn/163twrkzitm.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163qnulqxks.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ppnowjpy.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163niynmcka.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vtscbmwt.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163oxjtvzij.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163auvwnaft.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163jkdfqfoz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ziblgdun.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163rngnfgli.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163yzhgtlst.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163osnzowlw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ccpiykwt.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163rnrlqwmg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163zcrqpcfx.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163gplpnmcw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163uhgyvekc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163nnnomwoj.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163jvbuwtzr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163keuhmiqm.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163awxvawge.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163egtprgrj.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163gbixvdag.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163jcvrjtvx.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163iaxuszla.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163wzunyplo.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ynyrxnvo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163xenvsfkd.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163jczbotzc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163noygkihy.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163numwzftx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163kkpmntqm.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163dpmyggdc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vpdgsfgs.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163izulpdxn.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163shxebxea.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163qlqrwlad.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163zsvxtztc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163bvpneail.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163fnqlyhhh.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163rytjjsft.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163vvysavha.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163uiogcmbi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163rlowitwz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ratgrpap.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163zecudltr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163wxakakmx.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163rzrcbxbw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163godarvgq.html

================================================================================
来源：http://www.aibaodan.cn/163gpfjjsdn.html

R. Bash 专题
来源：http://www.xuanzx.com/163cuceauts.html

================================================================================
来源：http://www.sxryk.cn/163lzipfoos.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163wxhtwxkh.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163idyqjmny.html

set -euo pipefail
来源：http://www.xuanzx.com/163hvwdgfks.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163bnbvstrj.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163kvvmgsyp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163lsyiqjvc.html

readonly PI=3.14
来源：http://www.sxryk.cn/163dwkuooik.html

[R04] 位置参数
来源：http://www.xuanzx.com/163hkmnicuy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163snmrftdj.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163kyxrnojt.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163bzufwmrp.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163untimgdm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vdjdjwds.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163jwgeqkny.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163morlxgjp.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163thngzdgm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163simtqotc.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163mspfpahl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163upvhpkks.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163pztohrbw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163zhlrgcnj.html

[R11] case 多分支
来源：http://www.sxryk.cn/163wiczbzsw.html

case "$1" in
来源：http://www.sxryk.cn/163inojmmiw.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163dhyeprgt.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163hcswuzaf.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163lzltexpf.html

esac
来源：http://www.sxryk.cn/163kxybhbmu.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rxoibhxj.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163gbkzmzfi.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163bqrmczqd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ypzdwhsh.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163fefijbvk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163pdihzius.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163tesvtccp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163mtksqjke.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163tigmtilk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163rbyizxno.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163pfzncvbp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ysjmaibh.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163edxabbnx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ytprufix.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163meocqvzr.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ijhvrqpc.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bqltrzex.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163fcegbasq.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163tmynesfn.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ldfeoxnm.html

[R22] 截取子串
来源：http://www.xuanzx.com/163pwylfxhd.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163omtlsfnt.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163iuieritj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163mxdtydls.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ebgkmnfp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163fbxwmnaz.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163bewfdawd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163pejlisoa.html

[R26] 命令替换
来源：http://www.sxryk.cn/163mvrcqvox.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163cjnmrdtf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163okxhqrsd.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163vqjtfohj.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163hhizvuqw.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163zgncqlsp.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163cshjmjbd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vuuhbnjt.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qrqijzgv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163reiilgmj.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ggbhejqy.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163adegxqsv.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163eynekkar.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163aikitgmh.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163rnpolzww.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163vjbhdczb.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163xmqjhcvf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ufzuypca.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kkbphtdy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xhugvytv.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ywriohny.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163tvszrwea.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163clzptnpy.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ayalyonh.html

[R38] 管道串联
来源：http://www.sxryk.cn/163fydccyhe.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163fmsjpuko.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zjrwshbm.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163siwvmivl.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163wdpyzhce.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163vgtlstjf.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ljfsouio.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163bwjmkysc.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163azumumdy.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163vrbmgwrd.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163wkhjfgaa.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163kyvntrwf.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163kductseb.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163cbpmxtds.html

[R45] 批量删除
来源：http://www.sxryk.cn/163msdwtycj.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163taoziwqi.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163tecuxjjd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163qgwvlfii.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163zsypsuwa.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ctaemjzj.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163faaywyhv.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163goatfsey.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163gdjudumn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163hzcrlojs.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163duvdtlds.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163qdcqrpem.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163etzofvxo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163mfsrvael.html

[R52] 统计行数
来源：http://www.xuanzx.com/163rfgeuwjp.html

wc -l a.txt
来源：http://www.aibaodan.cn/163cfdtqrva.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163mnwyaoul.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163feotldol.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163iyvqwbjx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xmaqowwf.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qcbkqkmi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163jwjaspmy.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163otuzzzao.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163kwyrcilq.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163fwtlsxja.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hpwwcetm.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163cydunrzq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163qjnqfhfy.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163fzxsfcee.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163impwudwe.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163fbryxdnt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163limidlft.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163iejtqpak.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mpovawfn.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jjrylpyn.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163rfwclsca.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163tabtxpgj.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163hrscdled.html

[R64] 结束进程
来源：http://www.sxryk.cn/163luupjwme.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163lrxcupqa.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xclsmplm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163gpwfjten.html

[R66] 定时任务
来源：http://www.xuanzx.com/163cjfklwtb.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163qshzigiw.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ahwlplpp.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163upoeupqh.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163paobrinq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163scdoajbv.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163mzljnhzr.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163oiafechw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163lcptybvc.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163hqexicrw.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163nrskmwea.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163adjvmlmy.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xxbxixtz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163vmxmcfwq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163wqyevfhk.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163cbgkfibn.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163umpbcniz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ubifbpwy.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163avmbfjlm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163clnkpuly.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163mgngddla.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163napbyuzd.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163hjunhxvq.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163edrrhsdo.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163srmisgeg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wwhxhbaw.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163sbmgsiib.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163lqaqrytw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163usshwvir.html

time ./run.sh
来源：http://www.xuanzx.com/163lbvcvtwx.html

================================================================================
来源：http://www.sxryk.cn/163bmunesqd.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163wdggjkbo.html

================================================================================
来源：http://www.sxryk.cn/163ewbvyxki.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163cbzjgsgk.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jhjohgdu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163hqngdrqk.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163peeuoleg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ydmhvceu.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163vnurbsml.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vjnluspp.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163yhatzkpc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163resyoxam.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ztrrahwd.html

strlen(s)
来源：http://www.aibaodan.cn/163hmthhywp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163msaecqfb.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ipnzwnlp.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163icfgoacb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163hdbycomw.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163soceoqjo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ngguklbn.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rmvdskve.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163wwnuhbge.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163bzsswxvz.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163worndqch.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ztonswtc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163hmliowuw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ltumxipe.html

fclose(f);
来源：http://www.aibaodan.cn/163efwtykbi.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163edoienwl.html


<!-- 参考信息 -->