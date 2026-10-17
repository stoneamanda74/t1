外链999!wailian999！

[Q65] 回滚事务
来源：http://www.xuanzx.com/163uhljvtyb.html

ROLLBACK;
来源：http://www.xuanzx.com/163ephdyehh.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163tubxhdjo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163vkzbbiqi.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163atglctip.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163pnczwmin.html

[Q68] 保存点
来源：http://www.sxryk.cn/163zmqgqngz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163greghvvp.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163tqttqbqu.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163dozedzxq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163zbkigtqm.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163pwphtibd.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qliqylci.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163kcduyybf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163rxdvuerx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163pqimcxph.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163tzqqonmr.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163woyrgblc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ysgjgbzq.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ugrpfjnb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163nczypdwe.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163wgyrsusl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163movdnqqa.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163eiqdvnkx.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163uiejifum.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163wnyqlcxw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163cjcfixbq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163chkqotsg.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fpahkldh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163yqhdazny.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163vgmclcsm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163qamwcnfo.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163yyyinmqt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163orvzfcqu.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163cuzectyu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163nmbywyaq.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163cmvsejxl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163tzbaqwzj.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jteeacbh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163jijgweje.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163slluudfb.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163pyzshshm.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163clsuslqg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ojkonbow.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gftkymwe.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163elfwraze.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163kagmptkj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163okfqmnui.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163mahsgyhk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163zvcrkcoa.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163sszgxbgg.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163gntmoiud.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163asftseuv.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163kbqcnofp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163rvcnjmhd.html

================================================================================
来源：http://www.xuanzx.com/163plytlpkp.html

R. Bash 专题
来源：http://www.sxryk.cn/163wdzvnujp.html

================================================================================
来源：http://www.sxryk.cn/163tryccmsn.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163nmgvasdt.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163jpmnorru.html

set -euo pipefail
来源：http://www.sxryk.cn/163ojelvvyh.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163eltorhum.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163whymidqn.html

[R03] 只读变量
来源：http://www.xuanzx.com/163wbokflkx.html

readonly PI=3.14
来源：http://www.sxryk.cn/163achahpvw.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163pggcvfdb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163dxsgpbnr.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163nwddmavg.html

name="${1:-default}"
来源：http://www.sxryk.cn/163rrzmudvv.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163cguynkba.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ldfkfkxj.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163zzebnntc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163vdjackph.html

[R08] 数值比较
来源：http://www.sxryk.cn/163uftboqwj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163fvxaxykj.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163dbfennoe.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163mbqblgyc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163zqgxdrlv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163tzredzwn.html

[R11] case 多分支
来源：http://www.xuanzx.com/163gbeazcgr.html

case "$1" in
来源：http://www.aibaodan.cn/163fvcabqkd.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163imyynula.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163fiodrtnb.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163qacitnra.html

esac
来源：http://www.sxryk.cn/163ijqnxpfe.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163dxddbjuy.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tbtdkpgw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163oxkfucym.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ihnmphri.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163frfttcxn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163rdojifop.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163jlaxlmkv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163idycczmp.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163zcwulust.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163bqmjmdyd.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163auupqemw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163hznfhecr.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163hfaxvafh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163kbzibcqs.html

[R19] 数组长度
来源：http://www.sxryk.cn/163epkazzfw.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163euehlash.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163vmcyvuak.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163nscaegog.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163oshdlqqg.html

echo "${#s}"
来源：http://www.aibaodan.cn/163dezynwdh.html

[R22] 截取子串
来源：http://www.sxryk.cn/163opzongjw.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163nuamntpp.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163gmuthzac.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163jfdezfcv.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163zzljkwdm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vjuzuwqg.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163tondydbi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163xlldenys.html

[R26] 命令替换
来源：http://www.xuanzx.com/163xilszrrv.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163bnadmigh.html

[R27] 算术展开
来源：http://www.sxryk.cn/163tkuqvsma.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163pbjrtuza.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163fdkkmbnj.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163atbpssbq.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163rziilfhk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163niultqju.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jhkpwywd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163xutveufs.html

[R31] 局部变量
来源：http://www.sxryk.cn/163echgjwgz.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ekfcladx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163vrcwvntu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163zfurgozj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163kwifigkv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ogutqpew.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163mjtjjzyx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vnkpfqmj.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163uaixzudk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hlvprjyz.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163suvsupno.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163bmabafou.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163wpvzjcgk.html

files=$(ls -1)
来源：http://www.xuanzx.com/163eybtdxie.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ycunfbef.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163atlednis.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163afimnpiw.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163jzmvxees.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vmobkfcl.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zcfemodr.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163atxwqwfu.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163vlcfrvlf.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163gerjcbsk.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xxmdblrp.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163dnuxsnal.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163rrfxkodh.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163hfoioqnt.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fppuucdu.html

[R45] 批量删除
来源：http://www.sxryk.cn/163jarqejuu.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ytaoycqh.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163htcwefmp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fephuwlk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jeaspoub.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163lfrbsbsu.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hpoequzk.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zepfgcge.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163vvsvojys.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163kisstdhr.html

[R50] awk 求和
来源：http://www.xuanzx.com/163caelbgca.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163dwrvmfpl.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ovcbgbmf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163lgnkmsms.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163rtblcaxb.html

wc -l a.txt
来源：http://www.sxryk.cn/163xfkblhhb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vnpmehad.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163fdufybcn.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163evnfupnd.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163vmiyzwpo.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163zewmtbdl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163mgkyjnke.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163biqjmnqb.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163dxjiqizh.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163vqexyuld.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163hobbzogx.html

[R58] 下载文件
来源：http://www.xuanzx.com/163uekohoat.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nwivhsoz.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163hpefgekn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hohdtbwv.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163pzeodhpk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163uqhgiekn.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163zzalxffb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163gwfzlbiw.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163vbkxnsdq.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163xgygrevd.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163nxojkwmk.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163smyqzaev.html

[R64] 结束进程
来源：http://www.sxryk.cn/163dkvpdsrl.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163apkbdaai.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163itwlddsm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163uikufnwe.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ubztdsgb.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163nrjihkmd.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163jwmjypxj.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163jznkeufh.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163uavukrva.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vbhtfcya.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mlttvsnq.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gokbrfxe.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163tzougzwz.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163bhowbybg.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163zhybkdcv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163smuqupck.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163gzqxotof.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163lxgxmfso.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163kkiiynjp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163yiombhmg.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lpyqizaw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163tlszzmje.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163mhoklnpx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163yjzotjbf.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163zvwfhvnb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jvtrrwdd.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163evfgmazs.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163itflkypd.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163eggnmevk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163nalqxegq.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163hdgjwjtd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163brhcyems.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163dhsxdkqz.html

time ./run.sh
来源：http://www.sxryk.cn/163mbwwoewr.html

================================================================================
来源：http://www.sxryk.cn/163cydnfkyq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163dlroeyfp.html

================================================================================
来源：http://www.aibaodan.cn/163rhgzmplu.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163cbublfie.html

#include <stdio.h>
来源：http://www.xuanzx.com/163slqqavfh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163pceofpyq.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jkjelbfw.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163epzpyird.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163mwoczdyv.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163fkpwgflt.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163wkostpwd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ujtuhgdc.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ojbhqppt.html

strlen(s)
来源：http://www.aibaodan.cn/163akvvakij.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163gnzvgpod.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ouovqsea.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163rjabeuss.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163qfwdwcip.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163vcaxfkwc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163coavntov.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163prajdjzw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163dtenrbvp.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163zooykdpn.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163voznspfe.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163xgaigvgh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163lxvxmmfh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163epjcajhp.html

fclose(f);
来源：http://www.aibaodan.cn/163mrzkvwvb.html

[S12] C：写文件
来源：http://www.sxryk.cn/163rzswrkqx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163fjjwcvgd.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163awomjuzy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163kzwypibf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jsbkbecu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163aufemjyz.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163caumilha.html

(double) a / b
来源：http://www.xuanzx.com/163afsqxuqs.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163gkqjjxsl.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163tomsbpws.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163cnnohmup.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163yxuvzjaa.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163oqhebjjm.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163mifenjct.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163bidrtdqh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cyfbkejn.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163gqjztgge.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uuynifcd.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163nnbtsbxt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163bsuvlnuh.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163bfobrrak.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163gfbhwroe.html

[S23] C：随机数
来源：http://www.xuanzx.com/163vflwmghg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163lariqgst.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163qbeaefdn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163kagmmgzw.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163jrghxyfr.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163msegqrnn.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163guwkakws.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163hwubntyb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163deteqphl.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163wllefplv.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163qsoiudvc.html

static int counter = 0;
来源：http://www.aibaodan.cn/163sdfmztdc.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163mrupyver.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163gjowhiwq.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163nfjqnljh.html

#ifndef X_H
来源：http://www.xuanzx.com/163omfvipix.html

#define X_H
来源：http://www.sxryk.cn/163iugqmkyn.html

#endif
来源：http://www.xuanzx.com/163fzewmvsp.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163bvdfvbpm.html

#include <iostream>
来源：http://www.xuanzx.com/163shujlywo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jzyuoykk.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qxijdgme.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163afvqtzuc.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163qcvckgbm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163pdgsymmr.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163kdedrsep.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163jwpxvovz.html


<!-- 参考信息 -->