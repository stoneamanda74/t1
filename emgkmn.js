外链999!wailian999！

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ivrmwsyt.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163hcqprauu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163gumbdhgz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163jarlzemp.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163utnaeqhm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ugttlqus.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163rxijdpmt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163niibgukm.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ndfrwlqt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163dacrkukk.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ymxrebif.html

COMMIT;
来源：http://www.aibaodan.cn/163vmhzaxnv.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163mfudfolj.html

ROLLBACK;
来源：http://www.aibaodan.cn/163lciyiscw.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163njggmgsh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ngilgjjo.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163qprqbhsv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163wyvporoy.html

[Q68] 保存点
来源：http://www.sxryk.cn/163tipszaix.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163kikeeozn.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163rvrdgmyp.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163dnhfmzap.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163qmxmcadc.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163hykifqmr.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163fccsmpdn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rclxcdqs.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163wpdrhvok.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163zxwednbw.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163rqpveysx.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ntawwryb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163kngxykfh.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ljkmjzuf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163mhhpigno.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163gslusicq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163jacfhgkg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163csehocca.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163uetzowfr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163hldrvdwp.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163gxtseumk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ensrxose.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163yqahhkpz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163rucbddsy.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163xsoiobmt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163szfoigyv.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163rqyzzrpw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163eojjzjrf.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163edsyeujq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163qudqsmul.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163hkdjnwzk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ajhetiat.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163oxoaqqvd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163kszfbody.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163dexslmds.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163znnityhp.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163uhwplyyn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163olvjczry.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163befzhgpt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163gkudzmch.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163jzrrpuzn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163byziojuq.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163sdeggfrj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163xkgfodys.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163nsqtcyvk.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163gcsijuye.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jmobubri.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163aibcwqyk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163igedduxs.html

================================================================================
来源：http://www.sxryk.cn/163vxxfpenp.html

R. Bash 专题
来源：http://www.aibaodan.cn/163xmtzrfsj.html

================================================================================
来源：http://www.sxryk.cn/163xmaoncqd.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ebpusxnf.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163rixzfbys.html

set -euo pipefail
来源：http://www.sxryk.cn/163mnyveejw.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163zytpdcuk.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163htgldunc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163wmfzoayz.html

readonly PI=3.14
来源：http://www.sxryk.cn/163zkybmmdl.html

[R04] 位置参数
来源：http://www.sxryk.cn/163cnemxthl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163tktbkbcn.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163zpffixis.html

name="${1:-default}"
来源：http://www.xuanzx.com/163wxzukvco.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163rwvjmudf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163laietizs.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163rpzllgow.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163wpizwglh.html

[R08] 数值比较
来源：http://www.xuanzx.com/163pzaibnwg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163oggzfial.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163yfmwilfi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163sggnegsm.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ssxjsgmj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163axbilyqs.html

[R11] case 多分支
来源：http://www.sxryk.cn/163fcyfwbqm.html

case "$1" in
来源：http://www.aibaodan.cn/163qgteobip.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163kldxxrri.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163ttbaoeql.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163mzlbcvaq.html

esac
来源：http://www.xuanzx.com/163oftphshm.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163qldxqyvq.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163yxbrohgc.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163pgmyhpyu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163elkphrmm.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163anjgkjoz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ekkpsvsu.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163lwoakmtf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163fqxtzdnk.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163lllofkmr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163bgvhqbml.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163dvglhogm.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163kehfjiko.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163izniwdbj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163tphypzqu.html

[R19] 数组长度
来源：http://www.xuanzx.com/163rndtxrta.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163rxmkgkjw.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163tlljulde.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163oyzqzucd.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163vrthrgnv.html

echo "${#s}"
来源：http://www.sxryk.cn/163dxemlqyt.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ilhprdmy.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cphmxovs.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163onkfczqt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163aiwbsjdo.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163djmnlnxb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163odotldhu.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163eprbcctk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163hmdpyzve.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fzawnqvi.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163rboqgzff.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163yavmhegj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163yhlcliup.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ofmyedkj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163nlxujktx.html

[R29] 定义函数
来源：http://www.sxryk.cn/163budfbjhn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163pfstwivj.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163vaznkpdr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163sefdcfio.html

[R31] 局部变量
来源：http://www.xuanzx.com/163steuupyc.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163aefxxbyy.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163tjtfbtho.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163qpbzdnrz.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163myzlwyhe.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163mqvkbcif.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163lsqmjxnu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vfnilxqb.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163xtuxorej.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163qbpyutbl.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163eeafskrf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163nlugbtmf.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163dyyblqht.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xoxtnmgy.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ncwtzwgs.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vjysnvlm.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163rmimdmcy.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163mhamhjuq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163qfcqevrn.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163vxgsfscz.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163gqkiqeoc.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163cgjfhflj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163fnbppuai.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163dscnkwfk.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163uyiutysv.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163iclofyxx.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163gzopjmar.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163uotnhiev.html

[R45] 批量删除
来源：http://www.sxryk.cn/163eplxplfk.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163bpskqiaw.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163aiytvwdc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163vlcvuetx.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163mhpiqesx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ozfdotzx.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163pzhxjijg.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163dolmvtaj.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163mpdwgavv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163yzfuwvmd.html

[R50] awk 求和
来源：http://www.xuanzx.com/163oovhcssr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163olmpfntd.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163pcnuzyss.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163efcuznux.html

[R52] 统计行数
来源：http://www.sxryk.cn/163kkbzpybq.html

wc -l a.txt
来源：http://www.aibaodan.cn/163rkggkoud.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163rklueegn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vptmiskf.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163xmyzkbvx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ngzkydrh.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163arolhqxg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163tgajcbyb.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ujcgahnc.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163xoibcqgl.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163mdipvmum.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163umkzpbmz.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mzyolhrr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163pondvdnq.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163oprtnajj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vmidawwv.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163njuhyjrp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163hcbfnvhh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163abfokhil.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163zwxlosoy.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163vvakudgv.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163dgmzyegt.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ukiqfzet.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163kaiylomh.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163attbpgtj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163nakntzio.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gwmyziuj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163xijvqvxu.html

[R66] 定时任务
来源：http://www.xuanzx.com/163uqpettjl.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163encczdhy.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ddukrfzu.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163fxaddfir.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ogjqaqui.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163gnjqhvoo.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163nachptsr.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163iqntwhvm.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163avlowmmr.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163wivoexfl.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163teyskcfg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163snpxutaf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qbmfjsjv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163eddakpxp.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163yxvuozxg.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163myjvpvxj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163wgblewev.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163yjuuzupp.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163nbkpjcez.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163jonijale.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163gdddnnwu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163umczgkwl.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mukadmiz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gatrqoyl.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163eckzgfdg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163hnnezfsb.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163rpcskmsx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163byyazzqb.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163fyaguuau.html

time ./run.sh
来源：http://www.sxryk.cn/163xjypqbjg.html

================================================================================
来源：http://www.sxryk.cn/163esiphtvy.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kxkscwzx.html

================================================================================
来源：http://www.aibaodan.cn/163ymdavkep.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163jbskogmo.html

#include <stdio.h>
来源：http://www.xuanzx.com/163yzwkxtkw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163uklsbeiz.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163mercwezs.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ythltrpe.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ejvlvpyh.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163rahpdqcy.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163glbglgtl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163tbqwdclh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163qrlywbst.html

strlen(s)
来源：http://www.xuanzx.com/163npzajjgd.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mqvheryb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yobxnrek.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qpvptccz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163sccagryu.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ptxptzuv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163xcyfnzrq.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163jpgwxiei.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163yzyfmusd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163afziabxp.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163uorgcrnp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163lcsejton.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163uqvjfiqc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ebkctmxk.html

fclose(f);
来源：http://www.aibaodan.cn/163jkqbkxyh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163qnxwjuvv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163zbjhwcun.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163kkibzupl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vilgwisi.html

[S14] C：枚举
来源：http://www.xuanzx.com/163eryuctla.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163xyefclfl.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163mgtrzbes.html

(double) a / b
来源：http://www.xuanzx.com/163dqlzvgoh.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163zlgdhuxk.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163akvjhmbo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163eijpzjni.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163drwzqywt.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qghskxem.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163utkkmapf.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163zjhseqsz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zmdtqfra.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163rqlgzluv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jbqsbcjq.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163srrtkkmm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163jgkvewwl.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163jidwaegy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163czgtrifd.html

[S23] C：随机数
来源：http://www.xuanzx.com/163guddpdox.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163mlpijtqr.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163bgkqffah.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163bodfvtul.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163gsleduyf.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163brwdgfwu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vfgipbid.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163omiqojpo.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qcsppteb.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163fvaptdeo.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163qqzliayx.html

static int counter = 0;
来源：http://www.sxryk.cn/163hdmhrmpk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163wbebbpfe.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163lshhqgsl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163juojixck.html


<!-- 参考信息 -->