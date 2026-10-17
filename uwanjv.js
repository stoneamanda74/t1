外链999!wailian999！

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163uxerbcpt.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163qvnyhskz.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163rxfihqgn.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163gayvnfkz.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163rwsizdmm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163kghrplmd.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163mjfaksqq.html

[A17] 位运算
来源：http://www.sxryk.cn/163ztknxhpy.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ocvrmrzh.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163tqfwhvjt.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xqlzddmb.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163yoeheiqi.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163izelyocv.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163afjwqiej.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nwshxgap.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163awbpaesh.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163slqvzxga.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163yarhhgxw.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xttkhtae.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ulszbqst.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163sfyopgyc.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163posmkjbx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163vtnpexhs.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163mhikkqkh.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163fykwpyid.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163yolmkwoa.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163bmnsjpoc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163mvrmzino.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163yrefdula.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163kcdfzhyj.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163fjgzqrog.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163uvyhjikf.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163fogmfvin.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163qdibadoz.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163zpyrvcwg.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163swaftype.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163bdznhdmu.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163hyzfipzc.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163mebbnuii.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163gjwzhzpk.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163rapsxhxk.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ciitalxl.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163mriacttd.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163qxfhfwgy.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163kvogmmnl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ozveghtu.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163qvczgidx.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163mifhtlyb.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163czpgpoxz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rkkosfcc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zmehwqte.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163uawtaaak.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163dglkapzb.html

Py:   len(s)
来源：http://www.sxryk.cn/163dicupgvp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163jvbtnvrv.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163rzmiplna.html

TS:   s.length
来源：http://www.sxryk.cn/163ycmpdnlf.html

Java: s.length()
来源：http://www.sxryk.cn/163sfobjmpk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163omdwjhgx.html

Ruby: s.length
来源：http://www.sxryk.cn/163wcmtpbfq.html

C#:   s.Length
来源：http://www.sxryk.cn/163mwdkcoro.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163lsksdogd.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163hwaglhqk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163gskiulpo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lnvtpwwr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nrtgnbbt.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163yxuzycla.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163kawpanyh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163skwenarb.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163vfcgplxq.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163hhkmnrkh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163qyggpgss.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ddzyhwop.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163lcjihmzm.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ecpdwvfh.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163dliaerfv.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163domlnhkq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163gztlztxi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ujylejfz.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163laraljxw.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163qhkywvtk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163tgxpthcb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zawjlxgt.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163aegkjlxz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163rccdmeqy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163zydweher.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163sfqzxevy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163ptdstuql.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163hqkznvqs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163tozaruuf.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163qjymquzo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163rugeuvfh.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163nbtjnkqn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163kflcxftf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163lodpsqlc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163turrnhou.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ttmtqurw.html

================================================================================
来源：http://www.sxryk.cn/163wvswylwy.html

B. 流程控制
来源：http://www.sxryk.cn/163tlubxsvd.html

================================================================================
来源：http://www.xuanzx.com/163nptlgucp.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163kwaruxug.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163mrxblnec.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ztrfvlst.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qlysmtps.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ltrrrpcv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zqwjzgtl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163sznbutsz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163vfqignvb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kfhwqwoq.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163bynbtbnn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163bfxkbtjx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163rrgxvdun.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gcaeqasa.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xmzhybql.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ilxwlwac.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163rtkltakr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163xtivfjnl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gzwjebna.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163bgqtrwch.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163cszzuqxn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163emubprca.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163aaunbmca.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163rmrefmxc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163leyshjwu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163spkwvssv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163jusfrilx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163glmrkfsx.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163mcdkldpu.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163gpxyagmm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163aewhpfhm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163kgtkkkhl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163wpxzkblj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163fnmmzxlq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163hofpvxms.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163sguyhnmq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163pipejryl.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163kszobckx.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163esdfdfxi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163vnanofgq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163cwehxccp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163mphtasdx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163lgerbbqp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163iiatfuvi.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163peltjdrb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ujlmgcrg.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163teahcpgp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163kmngjlsh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163mukewhgq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163unaufuep.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hbvfgosz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ferezudv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163psueyarm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163nwqhkfix.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163rdmeqlga.html

[B07] while 循环
来源：http://www.aibaodan.cn/163gwwvzlvy.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163fwvskiof.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163fjnvgtka.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163buvyfnfz.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tzvemkpe.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uvvhjkof.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163puiztzdq.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163bzualhni.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163eyvpaegh.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163shxzaeko.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163tkvgthvk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163zotnlinh.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163iovdtghg.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uqkkuhlt.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163osolcpwt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163qhbzjkin.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163lhpaahyn.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lhqcikni.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163mqnjamfs.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163bgkoypjx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163nmlhejwa.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mjisupvb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ebcjtimj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eafvpitq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163cnnsyzob.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163cifefmvx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163itrbhytd.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163urwifqyf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163uzgagtxm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163cbfwcjyx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xlrfxosv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163oewiiwbw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163uldomuzs.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163tkjkpnla.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163zwmaxpps.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163gszikfem.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163rilokgqn.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163vwxavgch.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163asjoxsfx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163thxwvxnu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163womzspbr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163wodxavnz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ekvlmssg.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163wtvdgdkm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163wqracrpr.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163bysjkkgv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163umkhpelt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163luxexbah.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kddguiqj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gykiessx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eqvurelp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163hyqoxjjj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163cmmlsoze.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163mcfydatp.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163pjlyozcd.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163fugfjzzl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163gzwdgtsh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fkvfitvs.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163fozeheie.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163zebuijkh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ivkjtmnz.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163rajsbxrq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163zwiexhmr.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163zdyuvdas.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163thycctof.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163drhkehhh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163udrgsohh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163crljtngb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163tlgcxkhj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163numsqrbw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ybylzmyq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163eigoodlr.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163pnjwoipa.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163uhewxaov.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163vwejrzsz.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163eefixrlq.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163gfnqogyh.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163mcioaxls.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163imvzvrag.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ozcbgxxe.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163jyvpemdr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163mornujem.html

Py:   if not data: return
来源：http://www.xuanzx.com/163mzjderjs.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163iblscpsd.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163lkcnliix.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163zvalpnft.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163zzazkmog.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rxztivty.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lzgqemqj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163qznhtxki.html

================================================================================
来源：http://www.sxryk.cn/163qnzxrlsw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163kyjmlgnm.html

================================================================================
来源：http://www.xuanzx.com/163jhrqxwoj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ubytbbyc.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163krijbjnu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163oiqhnmvo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vtwzxmwx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xsjokpiu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bbagqbed.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zhizmewa.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163sjqycijh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iptakrbv.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163axnoxpkp.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163okdjjsuf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163uwegtutw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163iqnxdzdh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163qkwliyer.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163kfinehxc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163xhwvzwej.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163nccpsnvt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163dtlxdrpg.html

[C03] 可变参数
来源：http://www.xuanzx.com/163kfxitmjd.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ngnkflxm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ucpazpyf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wbpobktf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163amhmyrdt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163mzslafnw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163eggndmjg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163nlylqgpo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ltdrhoia.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163skkromrd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ddhalrud.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163syschqla.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163nslsizam.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163lxwyisgj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163cxtkddyh.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163txpyjarr.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163knirzzjg.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vqmlkmab.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ikfgigns.html

Py:   return a, b
来源：http://www.xuanzx.com/163babqgfby.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163zsqjiiyd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163fqawzzbc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163heqmhvle.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163thapeazv.html

Go:   return a, b
来源：http://www.sxryk.cn/163dbpyjwdb.html

Ruby: return a, b
来源：http://www.xuanzx.com/163lqmzlecf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163guzcalhm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163pygrxyha.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163zltrbtve.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163dbmtuzmr.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163wbecfrle.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163woqddxup.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163qqyktvvq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163palingny.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163marshobp.html


<!-- 参考信息 -->