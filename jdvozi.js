外链999!wailian999！

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163etfvxzcm.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163yqnpuoqw.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163xduwzfkc.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163monhkcak.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163ohqdritm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163qnasioes.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163idlflhhz.html

[A17] 位运算
来源：http://www.xuanzx.com/163wvqklcan.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163keufmorw.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163nhofwxci.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ekpjwaft.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163jpcluuxo.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kywcsegd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mnygbmwk.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ufjqvsim.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ppaywmnp.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163intqsucf.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163bnwlttqs.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163tetlsuoi.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163zgsdbnif.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dispayue.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163bykxukpo.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163liuzuyvl.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163oeohvdtj.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163gpqgvdsz.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163aeenwxhv.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163lyzgduos.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163qvchjbpp.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163iyyqveex.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163yrrfcdwc.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163spsukozy.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163syxldzyh.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163dyyohgbd.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163fjwdnqzj.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163zoxuqilm.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163flwbfaix.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163npxyaojp.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163xqvidbwm.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163qlofkmkn.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163cytuygic.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163tijwtcpa.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163shtnmkvn.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163grxtuhjm.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163thohszmn.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163xoihamsh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yfjdnzyh.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163rxhpeole.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163wqjsxsgl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nltdqrnl.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163mopbwtlp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hfhhuaxn.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163jkjupgyf.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163qczazxad.html

Py:   len(s)
来源：http://www.xuanzx.com/163qivkzpfd.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163tyvrpkuu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ausfdtrc.html

TS:   s.length
来源：http://www.sxryk.cn/163cubxkoyu.html

Java: s.length()
来源：http://www.xuanzx.com/163cknohbko.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163zhjuwtts.html

Ruby: s.length
来源：http://www.sxryk.cn/163huppevpu.html

C#:   s.Length
来源：http://www.xuanzx.com/163czctkzmv.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163awqrjehc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163obenfddo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163tgjoddpl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bohxterz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qrdzypvy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dpuqsgsm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163dcvwogoy.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163wbeppjuu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163gitolgvn.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163lykvdtvm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163kwxozaxq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163mifudyrx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163xoxrbdnf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hdrsknhx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163mfyziuti.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ltgvptes.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163dxwtalav.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163rrcmwgzf.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163zorstpck.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163uretuvfo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163rhjzyqpi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163drlnzize.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qwkzvhuq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163sxjoonmm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vuftknlq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163zebtisbj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163gwuujjtc.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163lgjtuleo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163celwwiwu.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163pfrzfptw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163qznqwoot.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163civmjeqi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163hmrogxoc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ltreinfy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163brfaovxy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163kqhdhuyh.html

================================================================================
来源：http://www.aibaodan.cn/163bmgkwbou.html

B. 流程控制
来源：http://www.sxryk.cn/163hotrprhr.html

================================================================================
来源：http://www.xuanzx.com/163dwwlzahv.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163xyujiolz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163yrghiwtj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163qhbecfyp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ckbvrssk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tseklkan.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mcimapqq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163kfsebwys.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163rakyithc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mswqinvn.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163djaprkgu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163uuwblrlr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163anmrchcj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nxympfjl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mkdmmumz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163exqpfvjv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163olaxhcvy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163kbfilkpg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mbpolkai.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163sczdeeba.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163hfyucnzb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ekevurdu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xdwasnjs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ctwoqhyg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163eomfsyps.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ttauuvmo.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163jtkkuiee.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163agtbefrw.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163vhzppmcv.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163xbbsjnib.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163jscfuqfw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lgpthnqv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lnsycpeh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163pitfctwe.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163ohxmuxxf.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163bnvvracc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163vimbbdly.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163lpsipbty.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163dkzltrfw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163nrjojqge.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163sartobho.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jpzodczw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163wwdkuiil.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163eryqnvzb.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163tajickhp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163utexbhtb.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163cigjatpj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163shybpquj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163febkxupr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163pwswdyxi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rhlvnmbm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163rpokhscw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163sfjjoksd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163fcxcrzwu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163vawsgoyd.html

[B07] while 循环
来源：http://www.xuanzx.com/163ddgqhrlm.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163wiqhmenw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163tiswhgwu.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mkkyckio.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163loznskix.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163unrybfho.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163tcebspgt.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163lpnzcbvi.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zcrnhwdd.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163exdhwgce.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vhelnkeg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163omzhicqs.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163godtfiaz.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kudsqvhx.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163psvbrtgo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163vygpdzfl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wvuegzjz.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qxwcfuoe.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163oaaeiiyf.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ghgojyam.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163lhrjwfid.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163leqpaeox.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dzhvyvkt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cljibxhl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ixvwxpii.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qecampid.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kucpobtz.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163byxthfmj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163pavnyfsp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163wzjenuag.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163roqiwknq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163fvghsqxx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163yuyyuklo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163phcpwfqs.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163xafmfmzp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163unahdyns.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ugjrjjit.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163kqezftqu.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163bxdmgiyh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hfndvwyb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163pjjeihcl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163boabtivz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163sykjqbiy.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163mycdgddp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163tlsebwsi.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163flagizdp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163iofqhbkr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163pqeplfal.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tjsnncob.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xdrjathz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cxenhyxh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163zzqorrvb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163evcxfxdm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xusvhjlb.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163hovtnaku.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ndmjypet.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163avjedobh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mefgrscq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163llgfhgzx.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163grjzoves.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163tfuxpxrs.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ipgbnadd.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163imqdchus.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163qiwgyygr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163cjvmimmz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163yqviqsyj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dsiqeifl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163aogpzkfx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163gbuktvbj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163jkyqayfq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ctpaqskb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163jivaanqu.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ozjrhlbn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163oioeovzs.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hudcybhd.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163oiwxhadn.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163mvgxztxg.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163gzazwhoy.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163eeotzxoh.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163wdysbaop.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jcsvgrnh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163xxusijnr.html

Py:   if not data: return
来源：http://www.sxryk.cn/163msxysymf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163jfxlkyvb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hpphxpot.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ozamszvk.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163mibdrscd.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vymdrvcn.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163omvdtslf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163detanxas.html

================================================================================
来源：http://www.aibaodan.cn/163pcvasqif.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163gkzksqxm.html

================================================================================
来源：http://www.xuanzx.com/163rdxqiezf.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163hinfdkve.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163krzlbciu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ltumoean.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163zxyaoddr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163oejfptqv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163firuxcdk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163surezlhh.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163jgpkgsih.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wkpqceuh.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hekbjecv.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163wjipdkvm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ltkgvhuq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163fxnvizat.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163btqxkdlq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163uasmblee.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163yserocxd.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163pizebszd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163nepcoqmy.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163gytieztl.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163fmyffipt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163czbqdefh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xcdnxjwp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qknvwfnz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163xthldjhg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163diugonut.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163shnfpgqw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163hzgqeajw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163jenltzsk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163nljvqmuw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zmyndrej.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hopvfizw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163skqjpciv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163klmvkkxa.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163eveyrcnb.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lvxalbkd.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jlyzzxxg.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163afmcwphg.html

Py:   return a, b
来源：http://www.xuanzx.com/163wojxlzle.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ayztiyca.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163bmocykav.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163aqiqpqss.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163merkydka.html

Go:   return a, b
来源：http://www.xuanzx.com/163wwslfvyt.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ybkblskv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163uppzpcfc.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163mplbmyci.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163oswecded.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163wvptgdwk.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163vprjrobn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163xbtvzkqd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163aibfyiec.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163mupdkbay.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163nvtlklxj.html


<!-- 参考信息 -->