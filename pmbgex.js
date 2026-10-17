外链999!wailian999！

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qphlhgdd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163wtqhwqml.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163yvmnibkj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163iepfciqk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ialwezor.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tuxcnrth.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163sjcvxxyx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163cexdpwsy.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163lbrtfazk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163yfplslwv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163mongpusi.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163cxjspqax.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163stzwiosh.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163fkgfngjn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163nhqkoyep.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163qcnvukqx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163vtmrjovr.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163zvtkyhch.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163zzifexhv.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163wjjngzed.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163hrxjyfwn.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163tcqnacdm.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163kgloakce.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163xmmsldsk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163xzqkxvul.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163gecvaxil.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163tuumisxb.html

[Q57] 行号
来源：http://www.xuanzx.com/163ympkuosg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163xudjfvpj.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163oxcspaim.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163yvyfwaxp.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163vwiqxsdf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163tegdapds.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163cczwzpue.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163bunxvqkz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163fkzdbycx.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163txzzjzsp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163xjwxpqpn.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ekfabzqk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hwwrhczi.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163suobqxhj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163luznmigp.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163rwglfsly.html

COMMIT;
来源：http://www.sxryk.cn/163mokvrwae.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163apdcbbvl.html

ROLLBACK;
来源：http://www.sxryk.cn/163madwpcgt.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163hvfrscrn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163bwegfbrp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ocnkenip.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163idsvgxvy.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zagixxev.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163wowuxohv.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ubksolbc.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163mcnzuded.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163pfvipozl.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163qilkmsrv.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163jjecgikz.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163zgmxgcer.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163snfkolmx.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163xhnuohan.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163iicjroqi.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163qzepzgib.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ibewqkql.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163pljyqguf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163tpvvyrcn.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163elyylizv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163oxxcuagl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163whxblqbl.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163mpoacfiw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163iwxqwebd.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ssiffptv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ffcustem.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163phixtdsc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163lvkynppt.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163agegdzjo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163gntgnlvd.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163moxkjaqz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163luuyokxd.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ilggvhte.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163yoexyauq.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163yaosvjle.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ynqnocwc.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163xzhumcpf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ycfqdakc.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163eqwvipdj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163wsrpzens.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163xuvmjvix.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163qejxamxw.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163jrfkqxcd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163btldgvth.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163rccpwnkk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163fjskamtc.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163epcisizw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163xctikwmb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163xejpfwye.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163wmgbulvk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163waeqarkc.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163djxgqqwx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163tmwmplqg.html

================================================================================
来源：http://www.sxryk.cn/163tyserwnr.html

R. Bash 专题
来源：http://www.aibaodan.cn/163sqqyeksi.html

================================================================================
来源：http://www.sxryk.cn/163kbpwfkqz.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163edeeawac.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163kmfqmjqg.html

set -euo pipefail
来源：http://www.xuanzx.com/163unpquuoy.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163naddheto.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163nxphxidc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163jdlajatx.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ayqolqna.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163tekrxvon.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163utsdbaak.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163qcthuwjv.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163yydzgvoo.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163rcdhxvxd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163kepwoafv.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163lkaukknb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163lwztwkob.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163gbqahsfr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163kfstblxl.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163mhfkjxel.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163kipksdut.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163bmysgpgw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ylzswibz.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ivdnbpmr.html

case "$1" in
来源：http://www.aibaodan.cn/163uzqvunsf.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163aanjkjld.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163nmqrijam.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163levbxiyv.html

esac
来源：http://www.sxryk.cn/163cyibewmt.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163lkmvlixe.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163pwbzongp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163cmbkfsxb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ftjuukgp.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nszhnmmu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163udqpfymu.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163sjhhckkr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163icornvrz.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163xnsgwfae.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163csvxibzj.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qhzuanmc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163rpuqlgvj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163mugcosje.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ouwevimn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163iexdmrlz.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163unmreunz.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163dnmkarbq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ivunpuou.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163wpqiauko.html

echo "${#s}"
来源：http://www.xuanzx.com/163jjhpdpyf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163bwoewrrk.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163mlievpqh.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163vkmmrxfy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ksjfobsd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163nzbjjhnk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163aggrrnzo.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ytdfqmwp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163vitwskfd.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163etsumdpi.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163yxenndho.html

[R27] 算术展开
来源：http://www.sxryk.cn/163breqeiux.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163tiatqzps.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163zmorzhxe.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163tyhlezcl.html

[R29] 定义函数
来源：http://www.xuanzx.com/163hkbrtlpn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163acekwknb.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163jodomboa.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163nsartznh.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163cdljbmqs.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163inxnxvvf.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163cugtxloy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wocajdbg.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163bdwhbfrz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163bdwhkgqx.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163hzfircal.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163juwoaznq.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163pxfqalax.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163snouqcqz.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163kczfogdr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ufzysduw.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163gokrmqrj.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nmdtcxoz.html

[R38] 管道串联
来源：http://www.xuanzx.com/163eehbzlvk.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163tholmgnd.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163zjoukapo.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163pulvcoos.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163wedkcmoq.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163aruqjnex.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163qbmkkqkk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hvgwnryk.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ermmjfdp.html

wc -l < a.txt
来源：http://www.xuanzx.com/163hsuzovpi.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163terfelkz.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163arayiqwi.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163fqbmahpi.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163eqvekuro.html

[R45] 批量删除
来源：http://www.sxryk.cn/163bccefcmf.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163lcyhkyim.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163lzmjqfxc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163qdfbyrjc.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163qiykpfnz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163omcermxh.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163mtztspoh.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163plfusmtb.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163biuxrqqf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163tparzlma.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163jahjeibl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163zfisucll.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163obtqueqh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163bggqhgaj.html

[R52] 统计行数
来源：http://www.sxryk.cn/163lsomfxqs.html

wc -l a.txt
来源：http://www.sxryk.cn/163dsqowaxd.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163rbaurazg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163fbbmeraz.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163dvsoctiz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163qxpnsmip.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163yjtabfmq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nlzceqtp.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hziypblx.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163mqtaiicm.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163snoqhfms.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163hrdzvoeb.html

[R58] 下载文件
来源：http://www.xuanzx.com/163tbdyjfus.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163bhtmfjvz.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163vrugsqwj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163nowpgxvt.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ftrigieb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163miiersgp.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163mspaptkw.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163mtykzyqq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wuoeqdks.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163mvafyvmj.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xysasgec.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163amtkbayd.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ilqtynvw.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163rjoelegb.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163famoemaf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163zdrpjqvz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ahetextt.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163lfiwdlpw.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ktvyzafp.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163haawzvfg.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163uyjmguda.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163nmnrkkeo.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163bxfyajzo.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nveseqkl.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ennxisex.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163aokglcon.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163cnugffgq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163dxkwrpvn.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163hsspvjau.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163cmrasfhp.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ehkgdbwu.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163njacruky.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ccfcmwct.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163fglizltp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163octpdlgr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163tydelnmp.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163uvrzdodh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yqnxgjsp.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pmzkdsho.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gydpnwge.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163cqlzrycb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163lqxltacu.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ugcncgym.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163cksakyat.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163zdwzidbc.html

time ./run.sh
来源：http://www.xuanzx.com/163ufgxdjlj.html

================================================================================
来源：http://www.sxryk.cn/163xvmjewrj.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163zjteiabs.html

================================================================================
来源：http://www.aibaodan.cn/163zoruvwwj.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163upixfsfu.html

#include <stdio.h>
来源：http://www.sxryk.cn/163vgxejxyu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163apcpgocr.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163haxviluj.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163akhyadoc.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163sfznyqky.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163dqqxmztc.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163iapjtqce.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163iiabaezc.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163teuuxpsu.html

strlen(s)
来源：http://www.sxryk.cn/163doiispeu.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rtvkbcyg.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163zlhoacco.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163xdycfflk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163tsvjoygd.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163grtyjvas.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163bpjwhruq.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163wuindlhv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163tfbguipb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163tcpmhhvj.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163jpaoqvoj.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163odosrdvj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163bigfnetb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163nngtmzry.html

fclose(f);
来源：http://www.xuanzx.com/163llydephy.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lolamvhh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163kbikxruv.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163itenuobg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163rhgbxqts.html

[S14] C：枚举
来源：http://www.xuanzx.com/163iudfgpfk.html


<!-- 参考信息 -->