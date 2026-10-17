外链999!wailian999！

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163glgvndny.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163dlxvmjxl.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163hlirpwsx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163vpknunjg.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163ijjvhhoo.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163optrjjse.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163xfbcughw.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163jxvamnab.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163xchfiyqu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163rdyrtcbi.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163aqjloqcm.html

[A17] 位运算
来源：http://www.xuanzx.com/163fvarmkax.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rueglznj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163fgsjmgwy.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uvdummvw.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163raogknul.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163asosodbj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vufunzap.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jmqhzsio.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wkinbyrv.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163ltnycbry.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163uevxcygf.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163ajtyhluo.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163kzxgvfkf.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163tcoqibcu.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163bywnwytj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163avyuhpgt.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163dnyegvvm.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163sumewkir.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ezmgtyuy.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163ovufzsmq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163emxfkmgh.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163vyjfgbcv.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ttfgqxyc.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163vmhnsfwm.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163fbmvtgij.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163egpshmbp.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163mekipfbc.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163rpgrxjik.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163mvpqdhqw.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163ziqkjggs.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163hczryhhg.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163rzpahrcj.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163clakeapx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ikzycjyz.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163gllthakf.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163anfjbmvs.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163jteflwhf.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163dxuywdvl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ztngkhee.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163pmqftubo.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ydlxumgy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163chgztrtx.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163coklxtqm.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tokvspxq.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163wwxzacjr.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163bccllkjs.html

Py:   len(s)
来源：http://www.sxryk.cn/163dinsqrsi.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163wyplsvuo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163eucargfj.html

TS:   s.length
来源：http://www.aibaodan.cn/163dnzeqvoj.html

Java: s.length()
来源：http://www.aibaodan.cn/163uoasrwwr.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163dhdelstp.html

Ruby: s.length
来源：http://www.aibaodan.cn/163yeuvnjsn.html

C#:   s.Length
来源：http://www.aibaodan.cn/163zfwmxqkm.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163lhhznrde.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163tkciwdnx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163pfuqoryi.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vnrhifbf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jeywisos.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163oglpctid.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163wllgbdwh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163hfcvqobk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163avyndfll.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163kfbayfuo.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163ukqolqpu.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163faqtuzue.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163oviyzwuf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163coevmjsc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163jkvobder.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163dyzuznti.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163hlmvrrwf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163fpemfdbl.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163sdqrinqv.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163mtamcgca.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163ithehvxy.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jddabdos.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163rmbvtimd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163dglxwntl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163nbusvojh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163itdiqljv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ywepeted.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163uppzoxob.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163akjwhduo.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163sonkwhnu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163crlymvtd.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163egzrkmoj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163tugufuwz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163ezgokhha.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163yufhiqyd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163diumtomv.html

================================================================================
来源：http://www.xuanzx.com/163rcuxfenu.html

B. 流程控制
来源：http://www.xuanzx.com/163oyvuhzog.html

================================================================================
来源：http://www.sxryk.cn/163dekojlik.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vdpsvabq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163hhitjqfn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163hwzxlufq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fiouotkh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163golkamtw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wkruuabw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163pthmjbeh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ietisolb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163sxxsxvbk.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163vjllmdhi.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163hhubezbi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163utsasppb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ogkyjpmm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ehglssrd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bfgseidz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163mojelnxz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163xmvfhjai.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zuxaggiu.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163joibadjh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163pxenkwzk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163xhjhtyyp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fuxjxaez.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163annaukxd.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163emfiffqd.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163abqiokoq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163roeumfjo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163fxhkzsmw.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163kljnxsje.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163qmjroobm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163gnebirpp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ouploetn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zfpbhadm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163upwhyroi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163cyavtepa.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163nvlbhkpb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163dlchjyyn.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163zruzipgp.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163qvsmiwly.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163cenlaeoz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wfkacbjk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163knkpumwy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163hpegbioi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163mmkajswm.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163iskerhqt.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163rrkrszia.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163iwhgpnbe.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163fndqbmqt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ulwtjzqm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163awacgntu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163cysisiuv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163uaebicbk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163tnmvizjc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163npzylinu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163mxlrrqlz.html

[B07] while 循环
来源：http://www.xuanzx.com/163tvujluce.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163osapogls.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163mnadnine.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gwccgpbx.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zuexiuse.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dzwnmxtd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163zfgxgfqz.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163frvznqjb.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qwoswpbf.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163tztvpobq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163xelrrfru.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163pvksembd.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ibhevwbx.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163najnwvmn.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vkhvqsix.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163udmsuepn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163idkoyfak.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ekdbafuw.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163rpxehcqr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163kauawbtf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163sldqxtgr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zhwmajwc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yzeayeex.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kfewfphk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163tvkagjpg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163xgcfycoq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163anijyjgv.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163gwwlqutl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163kijagvfr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163cqviixgq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163nvhiytpc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163edggilai.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163yhnwpskj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163dcmtunpn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163kpfwifxc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ejqrpphj.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163gctawyem.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ftzuarlh.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163exgdfcla.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163yjyvoxie.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163axipelzt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163vqyixtmt.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xwnvgcka.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ewkmvyti.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163wvmvnfcu.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163eujvhnhx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163taiezsct.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163xtkkiwoj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163clyvjnun.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wgisubnv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jahylvan.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163iosehjnd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ubevbjjp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163zojajgoh.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163gssvvpgm.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163wufifvvn.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163gntxqofr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mrsomkpa.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163frpqilpb.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mlotmurs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163axeomxht.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dmggobrd.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163jfcdmbtm.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163koiutbey.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ipqbekes.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ydpkmsgv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163nbftgpci.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gzncvomq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163lwxmybxl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163yoaoopjn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lpvlzmnj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163hdwwlmby.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163lzveuesc.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163crlttytt.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163yfqwvnzl.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163cqqzkwme.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163vqiwbrxw.html

Java: a && b || !c
来源：http://www.xuanzx.com/163lfbnfkwa.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163tfhnzhzv.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163eeqtubwn.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163erxrtcim.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163pnduhcgu.html

Py:   if not data: return
来源：http://www.sxryk.cn/163bexhpcbv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163qwbjplvl.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vepuvgyz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qoijylmg.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163abbjqnwt.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ujjudqiv.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163luttlpab.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163gskziosu.html

================================================================================
来源：http://www.sxryk.cn/163ygfllyyl.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zmlilwgo.html

================================================================================
来源：http://www.aibaodan.cn/163zkraakfx.html

[C01] 定义函数
来源：http://www.sxryk.cn/163mwchltpi.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163finghhaj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cojgbicz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163yztsxggr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ewyuimid.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bbiitvml.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ypswsyrl.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163qjhfnkpn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tonhoicl.html

[C02] 默认参数
来源：http://www.sxryk.cn/163mahgonlf.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wtlhohbu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zkyshfmy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163elvkhznv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163tavgdvqx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163diztueji.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lkxdsruh.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163mqqrlbtb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163oplokwmy.html

[C03] 可变参数
来源：http://www.sxryk.cn/163anqqngxg.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163geunywzd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163hcfiuhws.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ytfpzywn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jkrqiwqo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163mphrnqxs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163jolpodgr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bmkajewy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163akzoubbs.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163mlkpwgbq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163xtgwgawx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ubonkwti.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qlhsxcvv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163isslsobc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163xxvpngbf.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163dcgfymkf.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qogjrmly.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yzyxdfzh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163supqpwna.html

Py:   return a, b
来源：http://www.sxryk.cn/163vaapxxob.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163xzxmtlle.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163osfawvgk.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vbqhpaie.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163qcjhiahf.html

Go:   return a, b
来源：http://www.aibaodan.cn/163kbxiftcn.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163metjanab.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163mppkqqiq.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163jqmjnctk.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163yoyauhjj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163vnqzkwhz.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163msfmyixl.html


<!-- 参考信息 -->