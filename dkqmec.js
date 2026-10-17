外链999!wailian999！

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ebhrnclm.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163sibrwtbl.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163gmbinpjg.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163pjvmblax.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cmfouyhj.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ucukzjen.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163zctswggg.html

[Q57] 行号
来源：http://www.xuanzx.com/163mmmbdbfo.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163slwklxxs.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163rfpwrhbs.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163eeuegpjq.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163wzvaxtdv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163fdhiocmc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163zpasxlex.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163qtxzdtjo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163khwnbzdv.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163addtowbv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163cmewqkhe.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163hvhlgpbw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163eivyfkmx.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163xohqdrbd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163onfmmawk.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163drastpza.html

COMMIT;
来源：http://www.xuanzx.com/163hzlwyumn.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163pudxdlfk.html

ROLLBACK;
来源：http://www.aibaodan.cn/163jtpzqrha.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163rdowsiku.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163plndkxfx.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163bdcjjarn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gsdnrzfh.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163bylyxurs.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ergbnlxo.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163fiwldlom.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ynoklpzq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163bkkhpafj.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163bnlcyzpk.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163utzfmmyn.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163dtkofhuf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163mjrgcyrk.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163gymjxhug.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163hdathpuk.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163gfgfwdkm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163jflxfzho.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163pkjgatis.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163cyhuxxdr.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jktibxct.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163epbbsqht.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163qzfzkwns.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163osklkcxb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163vgyhcrhj.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163rmnljuyv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163rqcedoda.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163kazeokdm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163dbchprfv.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163vpvcnfco.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163trapyvxi.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163yukpcyjr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163mfhkrqoc.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163nwykbllx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163pznwqwwt.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163rrukttrv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163sczijsul.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163irextfmn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163lbglcsqn.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163aadqhfxc.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163unxndiqv.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163mmhfooym.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xtxgwpwc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163zpfjvphf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163wsbpxjro.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163gwxbwhqt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163cxtcpegw.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163inrxyhev.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163xeamyttk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163kpmhiwky.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163qhnawplx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163urqzbdae.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163vxlegdcc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163kuzhwsau.html

================================================================================
来源：http://www.sxryk.cn/163rgwwuhuo.html

R. Bash 专题
来源：http://www.sxryk.cn/163udamqgwb.html

================================================================================
来源：http://www.aibaodan.cn/163xkpiiumy.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163kvkblbaa.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163dwzqbini.html

set -euo pipefail
来源：http://www.sxryk.cn/163jnifdylj.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ybofjjxo.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vdpvczmi.html

[R03] 只读变量
来源：http://www.sxryk.cn/163knzdzlft.html

readonly PI=3.14
来源：http://www.sxryk.cn/163jiahvidf.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ohmsvxpu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163evrwvgkx.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163uchjfhfi.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fjupczed.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wormwnpq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163hktzwemf.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163jkzzwluw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163oqocsmsy.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ntkukrsd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163anndqktc.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163anjmukvu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vddqwojo.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163hbmhnhpg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163hlvvzvtu.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163fqqcxwpt.html

case "$1" in
来源：http://www.xuanzx.com/163hslfcxag.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163envbzidu.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ghdtrqya.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ibsatnbd.html

esac
来源：http://www.xuanzx.com/163sdpaijxk.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163yioxvwxr.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163eqsueoyb.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163iqnhzmcg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163almlijyj.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163lqqykswq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163pdcdnmff.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163xbntukgw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163fzafbssj.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163bfhatlfw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163pgyybxsn.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163dpsulfob.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163bbgbxwdm.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ywezxajb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ahyykyae.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163pftqfexq.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163yajfpmvu.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163pjzmsvhe.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163mgbdcjhr.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163pmbefzdd.html

echo "${#s}"
来源：http://www.xuanzx.com/163hmvlflkq.html

[R22] 截取子串
来源：http://www.sxryk.cn/163lskziifv.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163qzlmrixl.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ndsetphi.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163wpmmrxxn.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163nblinxrr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163uvojfjwd.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ajlpjbsq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163vnwzdczs.html

[R26] 命令替换
来源：http://www.sxryk.cn/163oizevspc.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163yzobsjth.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kiqggybo.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163vvwrkwox.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163fzhwoiol.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163lbhyzwuc.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fktrnrhc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ifceovsz.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163clfgjlgi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163dkpoztpy.html

[R31] 局部变量
来源：http://www.xuanzx.com/163wfltbval.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163vtkpiocs.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163vvuuvsdu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163dpkjlqcl.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163edywmcoy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163zczkfhdh.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163mbdrxelw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fmecskfx.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qflyvjoh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163stnsnkub.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163rsnywpfw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163gcxgcmxe.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163cdcothds.html

files=$(ls -1)
来源：http://www.xuanzx.com/163wlpmympe.html

[R38] 管道串联
来源：http://www.xuanzx.com/163fczaprbu.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163qgezlboc.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163oxrcghnc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163vszphaca.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163fliibemt.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163vdzzxfic.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163mvnrldmb.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163lqvvvizh.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rziaioqt.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163pjyisztc.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163szexynyi.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163virhmiin.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163stcssbtz.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163trhudnir.html

[R45] 批量删除
来源：http://www.xuanzx.com/163zuttkvtv.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163titayjls.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163euhlolbc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163orkvycda.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xabyoszz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163hojywuby.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163mrzmwhsr.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163qxzbwstn.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163zhpsqwpg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ilxqszov.html

[R50] awk 求和
来源：http://www.xuanzx.com/163mbcijuus.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163yxzkbmvu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163lljmxxfl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ajrremlw.html

[R52] 统计行数
来源：http://www.sxryk.cn/163kpyzlfhv.html

wc -l a.txt
来源：http://www.aibaodan.cn/163zxqstogl.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163dwylwpwk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ejbleyyx.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163kczfxglt.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163qeytfpgy.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163rarsigal.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163pjaqqobn.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163chhbjsap.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163xavryxyd.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163snnszyjy.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jlgexbgk.html

[R58] 下载文件
来源：http://www.sxryk.cn/163uhanjcja.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163gvlzwnot.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163onjsojud.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163skwpvoaz.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163umtpnmsb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163tiofiuqk.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163aabisbzn.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163fyjgjihg.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163kxkbgmdc.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163yildgttv.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163eufgjswf.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163cjycvxim.html

[R64] 结束进程
来源：http://www.sxryk.cn/163bycynaga.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163lmxhegmh.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163tydmyzia.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163qcaoyitj.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ovdedzcd.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163zsaixecr.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163shlazrnn.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ysofxwan.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163pjwouufr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163mxnigjjo.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163xzttmezb.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163rgoglsgp.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163pmrsraub.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163unzjmouu.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fanfiejr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163sgsrnobg.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163glcjrksl.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163wwxkmqyb.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163dwdvyrve.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163cyxkfucv.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163nrzvuohc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163jytbpioi.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163qexmgawb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163cdgsawgk.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163pejmdfrp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163nkotxoex.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tajiccrq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163fyfdhdyj.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xkwrnffv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163phhgshro.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163iupeqxkt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163naixuubk.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163dfgvtvkr.html

time ./run.sh
来源：http://www.xuanzx.com/163gbcadvei.html

================================================================================
来源：http://www.xuanzx.com/163rfdfzqbq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163nhqzhgui.html

================================================================================
来源：http://www.sxryk.cn/163qgsqcgjy.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163samvjxih.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163yrdowxfc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dunsyyok.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163nlcmkmxk.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163yrtcuyxs.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163nsdlyent.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163brzbxzud.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163xwmnelxu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nconaagy.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163gtoluhdc.html

strlen(s)
来源：http://www.aibaodan.cn/163xwabjrtc.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163qqoljsnj.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163twaiafwm.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163mvmmudel.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163nmkaizky.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163nkvhcjzh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163qfcocjjj.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ohwnyorh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163xzvvjwmq.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mvuuuaku.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ihycnrkk.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163uomodlaj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ercxlqyh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163nqpyhels.html

fclose(f);
来源：http://www.sxryk.cn/163vscuezrv.html

[S12] C：写文件
来源：http://www.xuanzx.com/163srynbjth.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ecyooflx.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163cdgjvcre.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163gsudvhwp.html

[S14] C：枚举
来源：http://www.sxryk.cn/163lledvumc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ybvawzuv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163cnesfcxz.html

(double) a / b
来源：http://www.xuanzx.com/163dslmxxlw.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ryvonlxt.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jtaiivgh.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ysaizdyk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163dosdvpdh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163jruuybqu.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163qwinhazk.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163luwxsgch.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ljsoyvkv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qiyswcot.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ybhiogdw.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163bzwuzxoy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163xbhzztro.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ronbenpi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163tvvmyjar.html

[S23] C：随机数
来源：http://www.sxryk.cn/163hjuslzoq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163hwuoleak.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163kvqccmic.html


<!-- 参考信息 -->