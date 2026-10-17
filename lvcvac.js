外链999!wailian999！

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yfwnaxuz.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uwtdibvx.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163iojkwvrk.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163yeraoovo.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163exegiumy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qvghlcza.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163finnnubm.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163siyrpftb.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163owcsuouu.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163akwcrwpa.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163fqrxdljk.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163gsptdfjk.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163mrkwwevm.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163rylpnvtc.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163cvurqtlz.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163mujwdjdk.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vcvsnaam.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163mvosaveb.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163lgdaunzp.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163uojezvuc.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163jngdsyma.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163pbykdzss.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163hwhgjmff.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163eonnzfir.html

[A14] 注释写法
来源：http://www.sxryk.cn/163buuegvgl.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163npzmkobi.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163kowosfwo.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qmddkfav.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kkbqbtxn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163rcmtmyxw.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xlstklof.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163kovaijpx.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163spxjfyst.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163dnxusvls.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163knbqzwbn.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163qyzbzreb.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163iclnlaaq.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163nrvrirwx.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163zphmngfq.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163xmdoijrz.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163rgofoeoe.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163xgugtvbu.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163dpxdvtnj.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163azycehrt.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163iqknapbx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163apeoxilc.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163vvzhsfso.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163nzgrleuz.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163rrvfulyo.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163xwtuupff.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163chsmrkqr.html

[A17] 位运算
来源：http://www.xuanzx.com/163tialddyl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xpsqqyer.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163tofduwju.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fzisgnqc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163nzaxmdyh.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nrepcpag.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yitagfzs.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163etmytysf.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hqgqodyk.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163txgvsxzx.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163glzrpkmi.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163mkkoxrne.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163vmqxuyze.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163onjndnup.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163kvurugvd.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163tnsagvhj.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163gyzvbjrv.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163jvrlhbbc.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163tbizldbj.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163qgtzyijz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163xucecrnw.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ceekqovf.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163mimljggl.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163zdydwatq.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163fbkuwblk.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163amoargul.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163sphljvjd.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163mszwcpxi.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163nfknjidb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163axouygsr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163amnzmabq.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163naftlefb.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163jyryjhlm.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163bsdnwrhw.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163rxgtfupo.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163oznotbhu.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163yowliwhy.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163bzulowzw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xzoabzwg.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163fqrgmevd.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163httcgmww.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jhplcthj.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jqimivnz.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cfumhwvm.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163fclejfat.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163gyxiqzrc.html

Py:   len(s)
来源：http://www.sxryk.cn/163crcdibuh.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163jgbbfhxp.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163xsgzowas.html

TS:   s.length
来源：http://www.sxryk.cn/163hinkabxb.html

Java: s.length()
来源：http://www.xuanzx.com/163tajvjnco.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163cjumwdcg.html

Ruby: s.length
来源：http://www.aibaodan.cn/163xtkhvaph.html

C#:   s.Length
来源：http://www.aibaodan.cn/163rnoutbzf.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163awmexend.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163awwxxgyq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163uoyfxpza.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ejxupwin.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vvzefqys.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nctjdkfa.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163azvkwhoq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163yxwemofh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163mwraqstu.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163qykgxvqf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163yeguyhcf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163wdngsgfd.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163pmqfrhuv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163rdpnrteo.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ufmsttxf.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163kldpltxm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163uegxporz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163jsrulnra.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163sittprrq.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163evdawtmc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163nrsxgtoa.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163evcyvmze.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163mnsvdaok.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163owbowfrz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163updssiop.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163jhbsgeom.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163asfigipe.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163vnocxfsc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163twstaujw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163toayzxlq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163awlkwnoh.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163bkjihxtr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ddrvzrcv.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163jrtfcqkf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163lvnyvrds.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ttwznwzr.html

================================================================================
来源：http://www.sxryk.cn/163meynudiv.html

B. 流程控制
来源：http://www.sxryk.cn/163pyupflrl.html

================================================================================
来源：http://www.xuanzx.com/163fhptrcar.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163vmttzhce.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163muujnpoj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163usqfwiii.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kvoisnre.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fnzadsgn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nybmziqc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ivskxzsq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163jvnleuvr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ijtrvptk.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163rgdktwif.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163lxfwkenu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163xpnefgbt.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gloetrei.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mnwzuwoc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163reufresk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163frmmzous.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163afnymfkx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jlcnicue.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163rbzdkcjv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163dczxlumq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163exfilyxm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hxgzylof.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163wqubbltz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163wktoejgm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163cusfcfip.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163tnsncjxp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163sjarypqp.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163lnvncehj.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163bklzhbhm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ehfmnldd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163htofrxjt.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163cugubpau.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163pfnqqsfk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163vhtfzvxe.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ybzwkwke.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163rikhuzfj.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163vvacwhkm.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163vgthfcma.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163dhqmcpmy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163deekjkfm.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vbxivqhd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ttustplm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163vrjabjqs.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163bmniepsj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mgywqehn.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163wdeszczn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163kmignkiu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163dkbsonjy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163slrjgqid.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163caejjfvn.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163tbtkyghz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163xnytblyy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163pattdlbx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163zadmsgty.html

[B07] while 循环
来源：http://www.xuanzx.com/163nuniophy.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163sloqzmcg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ihhaakxw.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jptuhcfl.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qsywrgev.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163okmpsunr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163vbmqpygo.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163pyapeffr.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wyzxejyu.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163nmmdfgra.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vdzyrmxn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163drctctkm.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kpxykxdm.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zoyyozpt.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eahindwu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163qjczabdu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wqvttfqe.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163coxbtaru.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163sfzqwhyb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163wzlnixrk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163eiskrgde.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xqislugs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hulacgal.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163crodkyld.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163pnfhasyc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163corlgmka.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lbrugpfw.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ebzlodfz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163qcluomjg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163dipnexab.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163tzsbqjbs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163tqaetyle.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163gzguyidf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163zhwbooth.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163cindvxbz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163kfzejrdq.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163qwlgpwlk.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163dibghjzy.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163arfagjyf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hbqfibse.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bwjsslmd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ksfcgfgc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163nwgcnyur.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163koctqgqw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ekesycxx.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163uiledrog.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163meegrhfn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fdvsdhaz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mxbxifnz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rbgsqgxj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mhbbsoev.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wqdfurtz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163xinmsaxw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163hbtldosu.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163popxfqho.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163fnxctvwm.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163sovkgsjb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ikoonwua.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163nqidmeyy.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163uqtbivyp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163bnjyutsw.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ntrvueym.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163cnjxmbrn.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163odsanynb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163tudehcls.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163owraujbr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163aerfvork.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163meihgxhu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163opasnqgs.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163dhykthgs.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163dejbacay.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ndzcxjxh.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163kceslzwb.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163uukjozho.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163cdonpojn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163dneaxzqt.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163pxdlajcg.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163qmmziple.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163kfydnqwe.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163udukxjto.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163nyhgzkyt.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163kldlmaov.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163mmvoclch.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xbrgkyup.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vuuzmypv.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ysyojbfm.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163azkuxknn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vtlgcuhv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163nhxaufkg.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wilohuca.html

================================================================================
来源：http://www.aibaodan.cn/163ndatxujv.html

C. 函数与作用域
来源：http://www.sxryk.cn/163tbrvuijl.html

================================================================================
来源：http://www.sxryk.cn/163ukiownzo.html

[C01] 定义函数
来源：http://www.sxryk.cn/163uvtfypuw.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163iyxceuel.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xrkyfeoz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163nblwxash.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163abgwblig.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tasqbtqi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163rcxjovyb.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163zqvtaxun.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wrusceoi.html


<!-- 参考信息 -->