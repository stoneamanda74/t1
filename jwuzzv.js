外链999!wailian999！

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163emmoqvlv.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163inochwgf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163auczywim.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163kwxkfsuh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163kzwfrolt.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163oexsayhn.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163qiweclen.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163wfkwmsix.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163omtnxtrk.html

[Q54] 清空表
来源：http://www.sxryk.cn/163gswgjmiv.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163gwsriqds.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163nafhleem.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ldngvqtd.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163idgjvtxb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163axltvjmt.html

[Q57] 行号
来源：http://www.aibaodan.cn/163btxrzphd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163nedukeop.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163wotdzllc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tdmjwgpb.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ekzzsqqn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ehprochy.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163jviteslq.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163kurgsqkj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163tptkoszo.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163hkpzmopl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163pdgywsyq.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163xadoeush.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mvoguuee.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163meostszf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163mdatfmag.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163pslhjrzr.html

COMMIT;
来源：http://www.xuanzx.com/163qryolrsr.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mpmznvyh.html

ROLLBACK;
来源：http://www.aibaodan.cn/163rwcbytqp.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163agenhbph.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163csjgyuox.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163pnnrokfq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163dpeiagut.html

[Q68] 保存点
来源：http://www.sxryk.cn/163krjzsnku.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163fznejbbq.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163rbpvrbnu.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163cnqnvsba.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ixoyfdmm.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zqqfnbbl.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163qnetvqzl.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163uhyukeyd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163yriatoxd.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163skrysluv.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163fqmkxggx.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qickaljo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163bmdkdrjv.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163gpiysimt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163lmcnukht.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163azbkvvtl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163caqbkeik.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163wtndkxrr.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163agyiuwte.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163bxexqqnt.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163isvuwqfd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163dlxnyjmf.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163xzovzyzq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163nslcarry.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163mhesdczu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ydkwnyxv.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163naslwrto.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163jssxghzq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163fkwoxevc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163wfyxfhgo.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163roqyhdcw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163twvihvxp.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163zpyzthop.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163kypewihq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163szuwkhcy.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163iftsrdlw.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163yzdxrypd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163tneffjsr.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163cskrynsz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163jgzmipkz.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163yeuklzyf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163wwvujokx.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163nmcgtlik.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163vrzyfxgy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163xhqtgwok.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163okcipufj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163qqwlczlu.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163abeibzch.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163oebifgak.html

================================================================================
来源：http://www.xuanzx.com/163zcjvgchf.html

R. Bash 专题
来源：http://www.xuanzx.com/163ucjoinwk.html

================================================================================
来源：http://www.xuanzx.com/163uqaqgmgo.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163dcatgego.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163qrnnopji.html

set -euo pipefail
来源：http://www.xuanzx.com/163vvmqqisd.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163kboycyks.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163kitfuyrk.html

[R03] 只读变量
来源：http://www.sxryk.cn/163xrvjnetx.html

readonly PI=3.14
来源：http://www.xuanzx.com/163fhvturqs.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ehbqvqig.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163wgvtitmo.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ufhvkoen.html

name="${1:-default}"
来源：http://www.xuanzx.com/163izfwxjsx.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163rcndhcgb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163kdhheyny.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163tggajsll.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163czxetnxl.html

[R08] 数值比较
来源：http://www.xuanzx.com/163vhxcblfb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163dnujnaur.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163djgpuddy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163xrinaudg.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163zsozcfvi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163wianqbhd.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163isviynhh.html

case "$1" in
来源：http://www.xuanzx.com/163pfifixzj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163dmrfseak.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163yxhxlrsa.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163akjwfart.html

esac
来源：http://www.xuanzx.com/163guclydte.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163wryxsyzf.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163uyonwiay.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163azbyetip.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163nhptbusd.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xmczrcxo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163nnfirens.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163mjzbpzzg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163vdqztoqe.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163hslbslhk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163iyqtylxl.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163gnrdhbup.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163bidvjkji.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163wpdgtswx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163nnybpize.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163aezabmku.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163jkkpmlzx.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163zbcgwxph.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163lmybfnch.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ggecmgti.html

echo "${#s}"
来源：http://www.aibaodan.cn/163mvzrirwa.html

[R22] 截取子串
来源：http://www.xuanzx.com/163sesgzqic.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163yllojfyk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163znlwooag.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163omqivcrz.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163shotqpwe.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163gmnwpnff.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163hvrtomyk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163zqlbivjq.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163qiooqjuo.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wopbqjrd.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163eondrvgn.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163hwdbdbrb.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163sajtfsjv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jybmctih.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163bxmpbuhc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163eiukfufg.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ayydwbru.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163bdbdugoi.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163xyyhczdu.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163gwvnvzir.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163jqeadhvn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163kobtsdug.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163vskcbiwi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163mmizyphm.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163aqhskchz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vkdbpxwn.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163dmtoqxxf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163wzbxuxyj.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163jihvbtcv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163cwssxkjz.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163mcwobmjl.html

files=$(ls -1)
来源：http://www.sxryk.cn/163eecylkcm.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gustcxtb.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ultvwwif.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163gkkxnwav.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163saurwssu.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163rtmwensy.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ddqzvgwn.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163xxsuwhhb.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163nqwpooxo.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163mwmkgvyb.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ooaqsswj.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163cddbqkbh.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163okbbmaqg.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163irjscyma.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163qsnjmiam.html

[R45] 批量删除
来源：http://www.sxryk.cn/163wyitbzvy.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163clqsievk.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163qtaiyvcv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163vvzacccx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163pmxokuer.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163stuyjmqw.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163usvedjje.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bkdiiqff.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163dxukcfwg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163nuzuxfpu.html

[R50] awk 求和
来源：http://www.sxryk.cn/163jwawanhq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163mazgeioi.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163eonuizeu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163xjaotvcv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163tbfuufxj.html

wc -l a.txt
来源：http://www.xuanzx.com/163bushfruu.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163gxbshyaa.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163haglmcli.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163agkiwxpd.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163rkdhntpe.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163drixaegk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hgismuio.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163pzqsvhap.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ibbtaxxk.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163snnzabdg.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163hyogkzpq.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ajvxhgpa.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163egskbkkp.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163amcjeblb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163dbdbdjbd.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163iocyjfla.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ziaqqobr.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163hthlzdky.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163bmrbzmsd.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163fhfqcqcw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163nmzuzxdf.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hjrkotuu.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163xwsssnrh.html

[R64] 结束进程
来源：http://www.xuanzx.com/163awlhwaue.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163neygliof.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163kjlztkol.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163xnmptsnn.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qdyfgxav.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ggrbsldn.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163yonjhasr.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qlhjifwh.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163qfcuusmg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163zedfbvaw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163kobpasqh.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ynvruvqo.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163shxzrkrt.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163nzjgwyvh.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163pqnadpqt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ikrffpcv.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qijkqhro.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163tlyyfwbu.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163eutdyxdb.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163xjorvjir.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163cftgarle.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163gyrjuodi.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163pyjockkm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163dnyvxbhm.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163gxqhsune.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kiruuwpa.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163stzbjdzl.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vozseexf.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163daisgkqd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163aeycstpe.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163jfxvkjwz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163fuugzfjy.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163tagtcqyc.html

time ./run.sh
来源：http://www.sxryk.cn/163falfpqko.html

================================================================================
来源：http://www.xuanzx.com/163fdsstdja.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163sllpkdoc.html

================================================================================
来源：http://www.xuanzx.com/163bejcmzrf.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163wbvworiu.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kmtoovfq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163xrrxflzg.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ehcceyfz.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163qymvqgvu.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163dmzgjovb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163xydiqacz.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ahvzilum.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ndrsgvzr.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163zdgqaely.html

strlen(s)
来源：http://www.sxryk.cn/163xuprrmpt.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mjwzmwlj.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ahfwdzru.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163sdljveli.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163heyncgje.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163eocrettr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bavcvckl.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163kakkgdaz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163cdzdwjmm.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mpmhhtqe.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163hnyfzfwz.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xhpihqyt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163yrwqppys.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163gtegfkzv.html

fclose(f);
来源：http://www.xuanzx.com/163rfjgjmdv.html

[S12] C：写文件
来源：http://www.sxryk.cn/163jyslgmrg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163vwrlwokq.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163wxrjsozb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163dcspyppd.html

[S14] C：枚举
来源：http://www.sxryk.cn/163qgcqpvrn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163vugimqkg.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163rtgzqxom.html

(double) a / b
来源：http://www.sxryk.cn/163shywbwgk.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163kdhstdxp.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163uyjszbft.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ytwcxhoo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163xwgrjfug.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163pddyefkd.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163axblhlxu.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163vrhytcgo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163oinqufzu.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dxjwqzpt.html


<!-- 参考信息 -->