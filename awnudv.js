外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163irpfrttd.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163hmwrpqrq.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xcnvncpu.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jmoffqzw.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ublyiajj.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163baknryhr.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163gzkkwvtt.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163caoczvre.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163jnifwzqe.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163qspenxls.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wrhxfubx.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ygpkmcfw.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163efvhtafv.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163potlisqy.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wbwbucee.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163ibijcwhh.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ukysbfxy.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163zoqwylcb.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163mzymbkvl.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163axvofnto.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163tojutiwt.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163uttpmfba.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163nxmqjfyv.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ryrincrt.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163iywutkfk.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bhryggvd.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163fnxsokey.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163tupardjs.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163pijffneu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163dcdtsfib.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163rdslrbpk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163rwodanga.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163bwqnkixy.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163pickqyty.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163fzdoltef.html

[A17] 位运算
来源：http://www.sxryk.cn/163wubtkidx.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163iiskhoez.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163pirjxpxx.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163eosevbww.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163usajpzvl.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tanhimfe.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ubbhvtsq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xswdplfx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163aubmsljs.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163lhqieyon.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163dbacoknd.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163iozpbwri.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ctnkqjts.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163tkwudtyx.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ptmqgbtd.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163yfljbyva.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163mvkosozw.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163skjxdsyf.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163prpyuoet.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163vcfqckcy.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163fjqjjcnf.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zjqselvl.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163jrrotfzi.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163prykyzna.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163cjgrotvx.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163iujijqrv.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163fmtknwun.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163gaynccrw.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163bugsqkzf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163qjjzjlnt.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163loplzarr.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163qbewvoco.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163dpvyxydt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163wrhjvzhc.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163fwujgjxz.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163aeipgzep.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163smjjmfrq.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163onarfjtk.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zspxbmzo.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163wsywdtee.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163wcefvkvc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hgermbix.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dfltxdex.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yyjlegog.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163mzlwxxsf.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163uwogqyzd.html

Py:   len(s)
来源：http://www.aibaodan.cn/163kbkjpbxn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163zhjxxmge.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163curauknz.html

TS:   s.length
来源：http://www.sxryk.cn/163wlxgmsqb.html

Java: s.length()
来源：http://www.xuanzx.com/163wvdyatou.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163jslodqmu.html

Ruby: s.length
来源：http://www.aibaodan.cn/163dyhitvxx.html

C#:   s.Length
来源：http://www.xuanzx.com/163wjtdyzng.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ddlolbny.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163zoxgowrp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163ylrjlbno.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163apqvcfek.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163buwifkus.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163mfpqwkdg.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163yelsrakc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ekhxzusy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ukinnsze.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163xhryaasx.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163lhopmbgh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163hgnmhwhy.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163hdvrfejb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163fzjgzvtc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163urgeydix.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163xzhmywlw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163dlonuyve.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163gdktzahy.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163ftdkbbze.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163kymhfomh.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163msxxabyc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163whjlphpx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163yiufaptj.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ssmeligs.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163kiukwxyd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163baplmrsl.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163elnwuzug.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163uheixjme.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163aqggbprw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163tgdcdlti.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163xwrzkkok.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163aoqefqwk.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163kkwolwmj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163bxqtkudh.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163vlneewjq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163yijnexkt.html

================================================================================
来源：http://www.aibaodan.cn/163wucvqqzn.html

B. 流程控制
来源：http://www.aibaodan.cn/163falazwxs.html

================================================================================
来源：http://www.aibaodan.cn/163pydlqnpq.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163xzssybqb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163blgnssuc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163gtjjgunf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gipqhvnh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hrudgypf.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zagqnllx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163qdowgfah.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163cybuqcfq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163thzvxkmu.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163arlhcvns.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163wiyuoinq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163qtugbsiv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163llogaetw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wjohjcsn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nxqvbhap.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163xacxauxb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163nwsmhhrp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pjxntuvi.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163knykrhyo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163mhzelwjs.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ydqplllp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ghwhmvxl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ftpvynpr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ajrodrct.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163mqnqvwqg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163bgbtrdou.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163dnlaqzoz.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163xcnohxsf.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163seigkwwn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163nasxaygr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163smrhngun.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tonifvbt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163btwewcfi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163savrtdqg.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163dxithftk.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163uxxnovsf.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163eacxfxjm.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163nrttdhwi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163unecpnro.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xslyhivs.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163zbfvhwbt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163bfnhlwkk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163iptjjfbb.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ushgcils.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163hpjgjbxh.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163wqhzbies.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163wxnwrrhp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163luydctjy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ohdiwbjk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hzoiubew.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163nuozoega.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ixyyxphc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ghaxbcvf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163fgoldfof.html

[B07] while 循环
来源：http://www.xuanzx.com/163ajrmgfsz.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163jhywmleg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163xsjqvdeh.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fmymeuaz.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nhhknqjj.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xexbspip.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163eowqjtgi.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163sbpefxbx.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163benykxjb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163lvkamoey.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163dntqkmah.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163egvpeaxi.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xrjkeihx.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rybfuxcq.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xbzoodcg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163zderjkpu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163jbkofydu.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bxratuso.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163ozvrqbab.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163nfyxerzq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ckryhuhw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ndwwbpye.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163akvzroun.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qmpabajb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163agwhdplk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163rgjovcff.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ktdctlwe.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163otoqktja.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163xacatfxq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163gmkoeinn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163iuuohprw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163mivjieyo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ftmqfiom.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163dsqklwdn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163womeiydb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163sbayivkd.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163rgtkjoel.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163evutzgqd.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ngjrpyae.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ztcrbyvs.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163miwnibyp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163yepjvotv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ctrbjqpo.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163wetsnnbk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163qgskkafg.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163dnmzygkn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163wyzdlzfc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163romdkfnh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yfezdkxq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bonvkrtl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rilgrqoy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163yklvgcxc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163nqcszybq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163phjgmsut.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163hkzaxuyz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ugxehati.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163hplfkmrq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rwdzefrx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vyuptryw.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163lrhmxzwb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163lyeyeebp.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163udrunltf.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163jpolwjcr.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163xmdjliok.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163evakrgco.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163usyxvtmk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163cstmsior.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lnpqxjfd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163mslcryiw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xkmtuxur.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163rnuqhnzv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163tprulwzz.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163wkwthqby.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163bjcbiygl.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163akcxjcyb.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ghylqlgo.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cayihtwe.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vgfwyxvx.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163pvnnmvwc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mzzjpbci.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163vbtscprw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163jzseehco.html

Py:   if not data: return
来源：http://www.xuanzx.com/163boiidzdf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163mghbygda.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163yahpzfbd.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163cyzyauqm.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163tmfwidjg.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ekklzuky.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163rxymyfsm.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163nosozxfn.html

================================================================================
来源：http://www.sxryk.cn/163qsdjnzgv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163olnuayfq.html

================================================================================
来源：http://www.aibaodan.cn/163paozomrl.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163muxtfzec.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163jtlccpip.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163huzejyei.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163lrwhexjr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163agakerwu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qmwksjsd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163acxzjaul.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163bmgzegbg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163odjyehbu.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163bnykyxtw.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163sjqusaeq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163bljnrvbb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hjnivifd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163jjtcmbmf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163yhvsyrun.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163btumwmhc.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163kmvbkham.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163dtnsgkfo.html

[C03] 可变参数
来源：http://www.sxryk.cn/163erwazpoe.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zjctafyv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rjcjuwqc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gkdqfwhr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163goxerwyt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163zfdezurn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163eopvcgln.html


<!-- 参考信息 -->