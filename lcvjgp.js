外链999!wailian999！

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163vzbgluzd.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163xogfwlit.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163dsljudpi.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163gmbxqlnk.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163ehopwlaz.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163xmleptil.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163vmtkrrpv.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ohqajajy.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163nzusapnb.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163bajlxaak.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163zxkvqcyw.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163nckyihou.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163jyixaias.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163npnvuzyw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163dlkbjcaw.html

[A17] 位运算
来源：http://www.sxryk.cn/163uiucrcqc.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dymebgyz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163nlnnekrv.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ystiqqyt.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163lbaoyplp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cyqswxdv.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163mwzynmuu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zvshwtoz.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rzaefmfp.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163stkjbger.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163uvbqfobe.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163dtlgtrgd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163firgzslb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163afpmycpg.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163sqfteaqj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163gvwmzkhv.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163idriyygr.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163kwscsggr.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163xsrwjqls.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163tgvqello.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163qcjcnziq.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163njzbohxm.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163vhepsnnp.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163uemyvvhx.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ipxxqozi.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163bmtnakrn.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ptkahjgy.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163cdoebdxq.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163tlzhlsgi.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163mqupcmar.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163qfbksmew.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163adpuwdbt.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163sddnfozm.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163qwewvdya.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163slbruifk.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163lmpnngkd.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163psojpvfu.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163skqokdss.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163icuzyaca.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163negtiawt.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163tqupvxrh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163edqgrtqo.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163tsirammp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163opepxbiw.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163izcdwhhd.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163tetbbrxi.html

Py:   len(s)
来源：http://www.xuanzx.com/163vxmhwhjj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163qqietegx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163roozndid.html

TS:   s.length
来源：http://www.aibaodan.cn/163hergwbrc.html

Java: s.length()
来源：http://www.sxryk.cn/163bcccvwmp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163rcxxyhtr.html

Ruby: s.length
来源：http://www.aibaodan.cn/163nedstjsi.html

C#:   s.Length
来源：http://www.xuanzx.com/163jtbvfijn.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163gzsyuwvb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163nvjontic.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163iaecxryq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lselqgzt.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163sycaeiht.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xapivzgy.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163qypoqbzw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163xceblvcl.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163qzstjwnj.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ruodtujf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163bztisdcq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163nzuwqnol.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163bafaqsgt.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ohcwrpen.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163wynxevjs.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163rpzpijet.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163yzygzdfk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163oubbhqga.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163rotyobby.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163zrlslqdj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163langhpfu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163irtvipeu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ptfsgmoz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163dvennoyt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163munwdyma.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163nsryogla.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hjdnuazr.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163hktarzqc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163paddjyno.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163xkxurmyi.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163iqwpqsok.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163shimnscg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163kntpgczf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163yddgivpk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ffvghhuj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ckllkalq.html

================================================================================
来源：http://www.aibaodan.cn/163lpoekegc.html

B. 流程控制
来源：http://www.sxryk.cn/163bncacxzi.html

================================================================================
来源：http://www.sxryk.cn/163ospdmjwc.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163bhxgdpbs.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163rwxqcyem.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163tiqisttl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ayopekho.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163llbmdetl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uvzhhrnz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ccllsdiq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163arzkcney.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wscsxucu.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163lqqcbhqd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ryauhqmz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ccspndkq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zbvqdqwx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163efjqippf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kvoububu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163vngyvvhk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163gubjqpxo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vkdavmeo.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163zclffzfk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ytpawdoy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ayxftlfq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163sbdivkyp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163wfhzhzls.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163cpnqgzno.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ycrmolhy.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163gtphktgn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163fawetujq.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163nqvtggzj.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163agijfskc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163vcivydut.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vvgtwmtz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163wfoqbmmy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163cchrvdkq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163tinpycbi.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163hocnccrq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163lmrobrlo.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163jhxeqjfm.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163jqoxfwot.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163veohnfyo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163davsvwvr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zpulftwo.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163udgmazmu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163oiqphgys.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163jpbgxckm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163genqpxoh.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163wntutwle.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163rswniuky.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163dyooizvc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163uwhymted.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ntubcwiq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163gqvzzhun.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163rqccdfup.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163yxcbjrym.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163lmolbdte.html

[B07] while 循环
来源：http://www.sxryk.cn/163aflcgtad.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163jdjdlbms.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163zymvkpqp.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ybgpmeig.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ggurbbkr.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gnyknacx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163rojexkdv.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ogjcxpng.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163habhblaf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rzbxgslc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163tbavjwgc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163lxadguoq.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kmhehfcb.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ohgntwcx.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xeujljsq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163uyxinsoj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ckpgimhr.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pukppsuz.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163yotguakx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163duhoausy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163zfczxwse.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163iwzsmbrq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qjiacyle.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xzmgpllt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163fjyzwlnh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gntnslxh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163igkhhdzn.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163tekdumuc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163dnynlsmi.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163runecpvn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163rdupklxz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163jmyvomlp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163hgmtedgf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163upujvstc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163rztjoetd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163jkwmjfin.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ggkudesd.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163emvhlupn.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163yjdunufc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cbxrjjkh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163yaxkpprk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163qwjgzomd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163kbflxdzz.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163xzxytqja.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163zlgsnmqo.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163hdvclbbr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163lezrbllq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163pexwdjxm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xpqqqhkk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rupdvcvg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163iclgjimr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163eiuctjql.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ltfbbqut.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163kzcuclua.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163fgehdtfq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163udhtvjbo.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qogtlxir.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jwtuxact.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163uhjauavn.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163fkquksfv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163htglivxg.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163nbxqqqij.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163azhsblle.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163serhptmm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163sthemcev.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163kguiqdjg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gtmynwhz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hbbzduiy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163tmilyrum.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163mitttuer.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163qtbyhxan.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163rjskwici.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163rcqerdaj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163zdylpfmy.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hufcnhrx.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163lwmmgkvz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163wtwhcoae.html

Java: a && b || !c
来源：http://www.xuanzx.com/163tqcbubuk.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163tzfuihvi.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163wbglgmsv.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163jatnlxgb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163tzpfxngv.html

Py:   if not data: return
来源：http://www.xuanzx.com/163tgmfbykh.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163pjdsipis.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163mjxwlrtm.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163cyvtguja.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163nenxgatf.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hcjuwxxh.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163efdhloug.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163maignlej.html

================================================================================
来源：http://www.aibaodan.cn/163vivajywk.html

C. 函数与作用域
来源：http://www.xuanzx.com/163qudzwlev.html

================================================================================
来源：http://www.sxryk.cn/163yoabrobx.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qvtqbekk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gzrvxvuv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163agglpmvo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ovedqntf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163iiizgock.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163doytpdgm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163hragdgjr.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163pkvxmbkh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163swiiplmh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163cuoyfhyo.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163bkiydwcf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163iqzpbqeh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163kuvceqjh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163jebwrths.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163fvcbsurj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163fbtudmrj.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163lecvmjop.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163etpwtuwd.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wgelcxnx.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wwfchajc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163mhlvcwuw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ehpnaubr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fuacivsn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163vzsopsee.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ddebuntf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163zxozjxdk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163dlpwwqfu.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163makubqyz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163pxrodzyx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kbeurapm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163bkbzifxy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fajkaurj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163itbvucfr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163oonewcsg.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rntjkwet.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163beltyvxq.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wawkrorp.html

Py:   return a, b
来源：http://www.xuanzx.com/163uxlvsuya.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163lgcbjnvu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163irweoans.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ftswyzsl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ugipijyd.html

Go:   return a, b
来源：http://www.xuanzx.com/163fpdwtsfb.html

Ruby: return a, b
来源：http://www.sxryk.cn/163vazjgjkg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163uxqzezes.html


<!-- 参考信息 -->