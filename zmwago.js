外链999!wailian999！

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163fdiwfuqr.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ukamhdfd.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163nxflmqvm.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163fyplauew.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163wwsbuggt.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163oaqhowux.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163sopapnvp.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ukivpyps.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zaosmicr.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163snmrirhy.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qqzxpyhu.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xyfmsatm.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163nyqzmuve.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163uovlpzmr.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163kmyyqxtv.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163waiemexu.html

[A14] 注释写法
来源：http://www.sxryk.cn/163idioiumq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163islekkjd.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163tjtanqsf.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163uzcdlgsj.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nadsbdqb.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163cbixridn.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wedkqpuq.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163ofavulnf.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wuisbcxb.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163rfaujdim.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163jtmhmfyq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163lcgwzeeg.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163yinitesk.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163kdjqcyos.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163obdbfzoc.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163oydqgiuc.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163opqryows.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163fdevsewd.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163bqrzybfj.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163oalfbxrk.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163egugvitv.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163keldbvqy.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163ldsiwspf.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ooowjobg.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163esahrwon.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163zpegtjrn.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163shzqkoop.html

[A17] 位运算
来源：http://www.aibaodan.cn/163frzhekdo.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163oybafdoi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163btrrsfxz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tpalnwhm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163oygkyfza.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163siipzqyg.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eghmrxcv.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163opjmnrti.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163plijozkt.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163lqrqxzqs.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163zkfziicq.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163iziznmop.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ottqemba.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163qvlbsydc.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163xqsmtuba.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163twdgihlf.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163ufsvninf.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ojhdtpzk.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163tmpuddcp.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163yuqmywls.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ardfzqkf.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163jnqgrcch.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163atzubntu.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163tggufeur.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163isetgxqb.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163vaqzxzyl.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163zbdruuid.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163kpckjfav.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163iwbgceyv.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163yqvzetsu.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163jphljlyt.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163dxpirjjl.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163svhupbpo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163krlvkjtz.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163yhatykvk.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163meodxejd.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163pyllmkwi.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163squqauyf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cmxikrmf.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163cgualcsj.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163mwiylgno.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163huopfcdb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163faxioegu.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kddpsvel.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163xungwrgq.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163unruqsih.html

Py:   len(s)
来源：http://www.xuanzx.com/163ubvzbsdt.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163dpgzcsjj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163plotqfwv.html

TS:   s.length
来源：http://www.xuanzx.com/163cuxrdwef.html

Java: s.length()
来源：http://www.sxryk.cn/163upyiiwsd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163mhtqgfbg.html

Ruby: s.length
来源：http://www.xuanzx.com/163frlxiixb.html

C#:   s.Length
来源：http://www.xuanzx.com/163idimlesh.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163dpnxvhol.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163fuhuxqpc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163kaiaosga.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fizadkcz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jjitivkp.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163oispgdgn.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163svkvhuho.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163dazhrzgc.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163houoestd.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163gniwkvmm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163uvkzjfiv.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163xpwzdhyy.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163viiepybb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163mmhggoqf.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163osycfqfu.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163gsuhbwcg.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163smadembq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163gzfmmkcx.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163qrgespdl.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163ctxbkhdr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163hhggjbjg.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ngnwgoxx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163sxoqmhes.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163txksgtbk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163bkzszyvv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163xasadcua.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163byeqxpzs.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163iuatozqp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163hdiqvzzp.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163qfnugvsp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163emdoriva.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163xinsgpzl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163wpevikql.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163pnxeabak.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163mvkakjsa.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163imbfltoy.html

================================================================================
来源：http://www.xuanzx.com/163cnqudljt.html

B. 流程控制
来源：http://www.xuanzx.com/163tlyhxjwa.html

================================================================================
来源：http://www.xuanzx.com/163jpmduqvv.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163dvaacdho.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ijbqdjav.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163rorrnhtg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ruybngwh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rkvduubh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xmitjjql.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163esyhpamp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163imfalvaa.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tjlueose.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163gaghfyyq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163rmuaqxac.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163wcgxcthm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qeekprew.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ccamgtyr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zahyyfcc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163nyeheroj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ssqzpaqo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nxlfnhsq.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163exclfsvy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163zikifvcz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163dncifbkd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163qnpnjffb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163cgsrinbx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163emipkaqc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163slzrfbaq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163jsevbzlg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163jizwcnrg.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163egfrkzvr.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163htmzsglj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163hspaobmt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jsvkpqso.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163lpcirnkc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ahjypdso.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163yodzcnlf.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163bauxffqq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163tgfnxnnu.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163vwdepnty.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163juxsypbq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163xutuxyvh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163sbjvlzvl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163efgnnruh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163jgbjzivw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163uipxjwqz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163rnaywmsw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163xavfmiwp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163birrefru.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vhsegmel.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163swhehzmy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ssgzdwsh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jlcwkhtq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163cjjokaim.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163jxuoyrzj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163bdiyrynq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163sluydnwn.html

[B07] while 循环
来源：http://www.aibaodan.cn/163svruzdrm.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163stekqqze.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163gngbaosb.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nwdrzbmb.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tkvsyywm.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uknjmfuk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163hwveqszs.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163uvzdefmk.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qsoppprv.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163rgptwukk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163zwieuxyv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ppsmbxnr.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qpmkdaex.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lyuzssei.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jwkflucp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163vppmuwtv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ajiwvcrp.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uktpynay.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163trmmfdjn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163llmhlbza.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163mpuohgsr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mfyhhlcj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fijlvspt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hrbpbnjz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163szfgkssw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163youmtofj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fgepkrka.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163pccezgvk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163gbotpjxt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163cgzhrvkh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163qwluympv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163kwpzwjqe.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163tyyhhfyh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163coyfllmz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163etpekpdt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163icrinnab.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163uiyffqps.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ykrkcvme.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163natsglvl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163lxbdjsay.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163flddapss.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163pltzbzco.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163cumvougt.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163xoijpukp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163weubvwki.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163fxcrelgp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163tyzfnokq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hldjidmp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ksinierv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pzlpylxt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pzrcsrja.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163rrquuhou.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163jxernszw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163pybubkhm.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163hpestyhe.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163jjvugopa.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163weboshtc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163kxzezumt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zrzlxqsj.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ajdyrbaq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163odrvdakm.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vubmksuh.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163krodxupx.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163mevafchu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163fznsckxl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ehrxuiqf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163iiobvepm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hsclrguk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163vfynmnkt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163qkiuyijy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ldbphxwl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163gvmxqush.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163iujubncj.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ikwlhpjr.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163zfafleey.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163gidxxfzl.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163gzkwtrmd.html

Java: a && b || !c
来源：http://www.xuanzx.com/163baycnpei.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163yndjbexe.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163thkwyrua.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163oapfxexb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163dwfbrxfp.html

Py:   if not data: return
来源：http://www.sxryk.cn/163aqpncxqn.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163bzmrprkc.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163rbaxrunq.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zlszacen.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163fqigyugw.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163msrutbzh.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163jzaghenl.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163gaixjnyh.html

================================================================================
来源：http://www.xuanzx.com/163kepuboff.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163hiabfzoj.html

================================================================================
来源：http://www.sxryk.cn/163farqzthn.html

[C01] 定义函数
来源：http://www.sxryk.cn/163zkvarajo.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163bhejxaaw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jeuqjfwa.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163abavedwl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ggbwyijb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163botgnzbl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163swdrcazk.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163afdkewes.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163akqpqlmd.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163zctedudl.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163zszjcine.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163metylqtv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ogrvsvpv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163vcbjkgbl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wcslwvlg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163klecmaib.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163nhgxyefn.html


<!-- 参考信息 -->